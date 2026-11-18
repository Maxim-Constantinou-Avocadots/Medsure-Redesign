"use client";

import { useEffect } from "react";
import { prefersReducedMotion } from "@/lib/motion";

/**
 * Turns on scroll-reveal hiding once the page has hydrated.
 * Until then — or with JS disabled or reduced motion — everything is visible.
 */
export function MotionArm() {
  useEffect(() => {
    if (prefersReducedMotion() || !("IntersectionObserver" in window)) return;
    document.documentElement.classList.add("js-armed");
  }, []);
  return null;
}
