import { NextResponse } from "next/server";
import { checkRateLimit, getClientKey } from "@/lib/rate-limit";
import { getSupabaseServerClient } from "@/lib/supabase-server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PATH = "/";
const headers = { "Cache-Control": "no-store" };

export async function GET() {
  const supabase = getSupabaseServerClient();
  if (!supabase) return NextResponse.json({ total: null }, { headers });

  const { data, error } = await supabase
    .from("page_views")
    .select("views")
    .eq("path", PATH)
    .maybeSingle();

  if (error) return NextResponse.json({ total: null }, { headers });

  return NextResponse.json({ total: (data as { views?: number } | null)?.views ?? 0 }, { headers });
}

export async function POST(request: Request) {
  const supabase = getSupabaseServerClient();
  if (!supabase) return NextResponse.json({ total: null }, { headers });

  const limited = checkRateLimit(getClientKey(request, "views"), {
    max: 3,
    windowMs: 60 * 60_000,
  });
  if (!limited.allowed) return GET();

  const { data, error } = await supabase.rpc("increment_page_view", { p_path: PATH });

  if (error) {
    console.error("[views] increment failed:", error.message);
    return GET();
  }

  return NextResponse.json({ total: typeof data === "number" ? data : null }, { headers });
}
