import { Fragment } from "react";
import { specialties } from "@/content/liability";
import styles from "./Marquee.module.css";

function Group({ hidden }: { hidden?: boolean }) {
  return (
    <span className={styles.group} aria-hidden={hidden || undefined}>
      {specialties.map((s, i) => (
        <Fragment key={s.title}>
          <span className={i % 2 ? styles.outline : undefined}>{s.title}</span>
          <span className={styles.star} aria-hidden="true">✦</span>
        </Fragment>
      ))}
    </span>
  );
}

/** Infinite specialties ticker. Two identical groups translate by -50% for a seamless loop. */
export function Marquee() {
  return (
    <section className={styles.marquee} aria-label="Specialties we insure">
      <div className={styles.track}>
        <Group />
        <Group hidden />
      </div>
    </section>
  );
}
