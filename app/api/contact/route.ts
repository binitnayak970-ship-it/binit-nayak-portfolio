import { NextResponse } from "next/server";
import { isHoneypotFilled, validateContact } from "@/lib/contact-schema";
import { checkRateLimit, getClientKey } from "@/lib/rate-limit";
import { getSupabaseServerClient } from "@/lib/supabase-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 8_000;

function respond(body: Record<string, unknown>, status: number, headers?: Record<string, string>) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store", ...headers },
  });
}

/** Cheap CSRF guard: reject cross-site form posts outright. */
function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return true;
  try {
    const host = new URL(origin).host;
    const requestHost = request.headers.get("host");
    return !requestHost || host === requestHost;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return respond({ ok: false, error: "forbidden" }, 403);
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return respond({ ok: false, error: "invalid" }, 415);
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return respond({ ok: false, error: "too_large" }, 413);
  }

  let payload: unknown;
  try {
    payload = JSON.parse(raw);
  } catch {
    return respond({ ok: false, error: "invalid" }, 400);
  }

  const input = (payload ?? {}) as Record<string, unknown>;

  // Honeypot: pretend everything is fine so bots do not learn anything.
  if (isHoneypotFilled(input)) {
    return respond({ ok: true, stored: false }, 200);
  }

  const limited = checkRateLimit(getClientKey(request, "contact"));
  if (!limited.allowed) {
    return respond({ ok: false, error: "rate_limited" }, 429, {
      "Retry-After": String(limited.retryAfter),
    });
  }

  const result = validateContact(input);
  if (!result.ok) {
    return respond({ ok: false, error: "invalid", fields: result.errors }, 422);
  }

  const supabase = getSupabaseServerClient();
  if (!supabase) {
    console.error("[contact] Supabase is not configured — message was not stored.");
    return respond({ ok: false, error: "unavailable" }, 503);
  }

  const { error } = await supabase.from("messages").insert({
    name: result.data.name,
    email: result.data.email,
    message: result.data.message,
  });

  if (error) {
    console.error("[contact] insert failed:", error.message);
    return respond({ ok: false, error: "server" }, 500);
  }

  return respond({ ok: true }, 201);
}
