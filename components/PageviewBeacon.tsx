"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Sends one anonymous page view per route change to our own /api/collect. */
export function PageviewBeacon() {
  const pathname = usePathname();
  useEffect(() => {
    if (location.hostname === "localhost") return;
    if (navigator.doNotTrack === "1") return;
    const body = JSON.stringify({ p: pathname, r: document.referrer });
    if (!navigator.sendBeacon?.("/api/collect", body)) {
      fetch("/api/collect", { method: "POST", body, keepalive: true }).catch(() => {});
    }
  }, [pathname]);
  return null;
}
