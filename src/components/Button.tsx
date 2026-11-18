import type { CSSProperties, ReactNode } from "react";
import { ArrowIcon } from "./icons";
import { cx } from "@/lib/motion";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light" | "glass" | "pill";
  className?: string;
  style?: CSSProperties;
};

/** Editorial button: label top-left, arrow bottom-right, colour sweep on hover. */
export function Button({ href, children, variant = "dark", className, style }: Props) {
  return (
    <a
      href={href}
      className={cx("btn", variant !== "dark" && `btn--${variant}`, className)}
      style={style}
    >
      <span>{children}</span>
      <ArrowIcon className="btn__arrow" />
    </a>
  );
}
