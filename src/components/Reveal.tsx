"use client";

import { useEffect, useRef, useState, type ElementType, type ComponentPropsWithoutRef } from "react";
import { cx } from "@/lib/motion";

type RevealProps<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

/**
 * Adds `.is-in` to its element the first time it scrolls into view.
 * Children using the `.rv`, `.rv-img`, `.rv-rule` and `.ltr` utilities
 * then animate in, staggered by their `--d` custom property.
 */
export function Reveal<T extends ElementType = "section">({ as, className, ...rest }: RevealProps<T>) {
  const Tag = (as ?? "section") as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return <Tag ref={ref} className={cx(className, inView && "is-in")} {...rest} />;
}
