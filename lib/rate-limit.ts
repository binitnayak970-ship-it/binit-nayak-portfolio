type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();
const MAX_TRACKED_KEYS = 5000;

type RateLimitOptions = {
  max?: number;
  windowMs?: number;
};

/**
 * Tiny fixed-window limiter. Serverless instances do not share memory, so this
 * is a best-effort speed bump for form spam, not a security boundary.
 */
export function checkRateLimit(
  key: string,
  { max = 4, windowMs = 5 * 60_000 }: RateLimitOptions = {},
): { allowed: boolean; retryAfter: number } {
  const now = Date.now();

  if (buckets.size > MAX_TRACKED_KEYS) {
    buckets.clear();
  }

  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfter: 0 };
  }

  if (bucket.count >= max) {
    return { allowed: false, retryAfter: Math.max(1, Math.ceil((bucket.resetAt - now) / 1000)) };
  }

  bucket.count += 1;
  return { allowed: true, retryAfter: 0 };
}

export function getClientKey(request: Request, scope: string): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip =
    forwarded?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  return `${scope}:${ip}`;
}
