import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/** The "↳" arrow used on every button and link */
export function ArrowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 14 14" fill="none" aria-hidden="true" {...props}>
      <path d="M2 2v6h9M8 5l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronLeft(props: IconProps) {
  return (
    <svg viewBox="0 0 12 12" width="12" height="12" fill="none" aria-hidden="true" {...props}>
      <path d="M7.5 2.5L4 6l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronRight(props: IconProps) {
  return (
    <svg viewBox="0 0 12 12" width="12" height="12" fill="none" aria-hidden="true" {...props}>
      <path d="M4.5 2.5L8 6 4.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 12 12" width="12" height="12" fill="none" aria-hidden="true" {...props}>
      <path d="M6 1.5v9M1.5 6h9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

/** Medsure logo mark — replace with the client's vector file when supplied */
export function LogoMark(props: IconProps) {
  return (
    <svg viewBox="0 0 24 36" fill="none" aria-hidden="true" {...props}>
      <rect x="2" y="2" width="20" height="32" rx="10" stroke="currentColor" strokeWidth="3.4" />
      <path d="M15.5 7.5C10 7.5 9 11 11 15.5L13 20.5C15 25 14 28.5 8.5 28.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
