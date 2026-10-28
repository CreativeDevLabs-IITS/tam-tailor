"use client";

import { useSyncExternalStore } from "react";
import { hours, site } from "@/content/site";

const subscribe = (cb: () => void) => {
  const id = window.setInterval(cb, 30_000);
  return () => window.clearInterval(id);
};

// Returns "Sunday-0 minutes" in the shop's time zone, rounded to the minute, so the snapshot stays stable between ticks.
const snapshot = () => {
  const parts = new Intl.DateTimeFormat("en-CA", { timeZone: site.timeZone, weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return `${day}:${Number(get("hour")) * 60 + Number(get("minute"))}`;
};

const fmt = (m: number) => {
  const h = Math.floor(m / 60);
  return `${((h + 11) % 12) + 1}${m % 60 ? `:${String(m % 60).padStart(2, "0")}` : ""} ${h < 12 ? "am" : "pm"}`;
};

// A small "Open now / Closed" chip that follows Winnipeg time. Renders nothing until the browser knows the time.
export function OpenNow({ className = "" }: { className?: string }) {
  const now = useSyncExternalStore(subscribe, snapshot, () => "");
  if (!now) return <span className={`open ${className}`} aria-hidden="true" />;
  const [d, m] = now.split(":").map(Number);
  const today = hours[(d + 6) % 7];
  const isOpen = !!today.open && m >= today.open[0] && m < today.open[1];
  return (
    <span className={`open ${isOpen ? "is-open" : ""} ${className}`}>
      <i aria-hidden="true" />
      {isOpen ? `Open now, until ${fmt(today.open![1])}` : "Closed now, after hours by appointment"}
    </span>
  );
}
