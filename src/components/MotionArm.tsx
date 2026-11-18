"use client";

import { useEffect } from "react";
import { prefersReducedMotion } from "@/lib/motion";

/** How long the first-load curtain covers the page (see Curtain.module.css). */
const CURTAIN_MS = 1600;

/**
 * - Turns on scroll-reveal hiding once the page has hydrated. Until then — or with JS
 *   disabled or reduced motion — everything is visible.
 * - After the first-load curtain has lifted, removes the extra entrance delay (--intro),
 *   so heroes on later in-site navigations animate in straight away.
 */
export function MotionArm() {
  useEffect(() => {
    const root = document.documentElement;
    const id = window.setTimeout(() => root.style.setProperty("--intro", "0s"), CURTAIN_MS + 1200);
    if (!prefersReducedMotion() && "IntersectionObserver" in window) root.classList.add("js-armed");
    return () => window.clearTimeout(id);
  }, []);
  return null;
}
