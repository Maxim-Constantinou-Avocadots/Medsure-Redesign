"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/motion";

type Props = { value: number; suffix?: string; delayMs?: number; durationMs?: number };

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

/** Counts from 0 to `value` once, after the hero entrance. Renders the final value on the server. */
export function CountUp({ value, suffix = "", delayMs = 450, durationMs = 1900 }: Props) {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    let raf = 0;
    // Wait for the first-load curtain too (--intro is 0s after in-site navigation)
    const intro = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--intro")) || 0;
    const start = performance.now() + intro * 1000 + delayMs;
    const tick = (now: number) => {
      const t = Math.max(0, Math.min(1, (now - start) / durationMs));
      setProgress(easeOutExpo(t));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [delayMs, durationMs]);

  const n = Math.round(value * progress);
  return (
    <>
      {n.toLocaleString("en-US")}
      {progress >= 1 ? suffix : ""}
    </>
  );
}
