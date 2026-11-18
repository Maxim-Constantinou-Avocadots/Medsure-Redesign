import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { cx, delay } from "@/lib/motion";
import styles from "./Section.module.css";

type HeadProps = { eyebrow?: string; title?: ReactNode; lead?: ReactNode; center?: boolean; actions?: ReactNode };

/** Consistent section header: eyebrow dot, display title, optional lead and actions. */
export function SectionHead({ eyebrow, title, lead, center, actions }: HeadProps) {
  return (
    <div className={cx(styles.head, center && styles.center)}>
      <div className={styles.headCopy}>
        {eyebrow && (
          <div className={cx("eyebrow rv", styles.eyebrow)}>
            <span className={styles.dot} aria-hidden="true" />
            {eyebrow}
          </div>
        )}
        {title && (
          <h2 className={cx(styles.title, "rv")} style={delay(120)}>
            {title}
          </h2>
        )}
        {lead && (
          <p className={cx(styles.lead, "rv")} style={delay(200)}>
            {lead}
          </p>
        )}
      </div>
      {actions && (
        <div className={cx(styles.actions, "rv")} style={delay(240)}>
          {actions}
        </div>
      )}
    </div>
  );
}

type SectionProps = {
  id?: string;
  tone?: "base" | "alt" | "dark";
  children: ReactNode;
  className?: string;
  bleed?: boolean;
  ruleTop?: boolean;
};

/** Page section with consistent spacing, background tone and scroll reveal. */
export function Section({ id, tone = "base", children, className, bleed, ruleTop }: SectionProps) {
  return (
    <Reveal id={id} className={cx(styles.section, styles[tone], bleed && styles.bleed, className)}>
      {ruleTop && <div className={cx(styles.rule, "rv-rule")} aria-hidden="true" />}
      {children}
    </Reveal>
  );
}

/** Two-column editorial block: title on the left, body on the right. */
export function Split({ title, children, aside }: { title: ReactNode; children: ReactNode; aside?: ReactNode }) {
  return (
    <div className={styles.split}>
      <div className={styles.splitLeft}>
        <h2 className={cx(styles.splitTitle, "rv")}>{title}</h2>
        {aside && <div className="rv" style={delay(160)}>{aside}</div>}
      </div>
      <div className={styles.splitRight}>{children}</div>
    </div>
  );
}

/** Body paragraphs with staggered reveal. The first paragraph is set larger. */
export function Prose({ paragraphs, lead = true }: { paragraphs: string[]; lead?: boolean }) {
  return (
    <div className={styles.prose}>
      {paragraphs.map((p, i) => (
        <p key={i} className={cx("rv", lead && i === 0 && styles.proseLead)} style={delay(100 + i * 90)}>
          {p}
        </p>
      ))}
    </div>
  );
}

export function Chips({ items, label }: { items: string[]; label?: string }) {
  return (
    <div className={styles.chipsWrap}>
      {label && <div className={cx("eyebrow rv", styles.chipsLabel)}>{label}</div>}
      <ul className={styles.chips}>
        {items.map((item, i) => (
          <li key={item} className={cx(styles.chip, "rv")} style={delay(120 + i * 60)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
