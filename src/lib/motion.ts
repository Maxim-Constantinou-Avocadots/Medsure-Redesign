import type { CSSProperties } from "react";

/** Inline style that sets the stagger delay used by the motion utilities. */
export function delay(value: number | string): CSSProperties {
  return { "--d": typeof value === "number" ? `${value}ms` : value } as CSSProperties;
}

export function prefersReducedMotion(): boolean {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function cx(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
