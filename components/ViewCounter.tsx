"use client";

import { useEffect, useState } from "react";

const SESSION_KEY = "bn:page-view-counted";

/**
 * Small site view counter. Counts one view per browser session, reads the
 * total from /api/views, and stays silent if Supabase is not configured yet.
 */
export function ViewCounter() {
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    let alreadyCounted = false;
    try {
      alreadyCounted = window.sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      alreadyCounted = false;
    }

    async function load() {
      try {
        const response = await fetch("/api/views", {
          method: alreadyCounted ? "GET" : "POST",
          headers: { Accept: "application/json" },
        });
        if (!response.ok) return;

        const data = (await response.json()) as { total: number | null };
        if (cancelled || typeof data.total !== "number") return;

        try {
          window.sessionStorage.setItem(SESSION_KEY, "1");
        } catch {
          // Storage blocked — the counter still displays, it just may recount.
        }

        setTotal(data.total);
      } catch {
        // The counter is decorative; never surface an error for it.
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <p
      className="micro mt-4 min-h-[1em] text-paper/45"
      aria-label={total === null ? undefined : `Site views: ${total}`}
    >
      {total === null ? "" : `${total.toLocaleString("en-US")} views`}
    </p>
  );
}
