import { Fragment, useRef } from "react";
import { specialties } from "@/content/liability";
import styles from "./Marquee.module.css";

function Group({ hidden }: { hidden?: boolean }) {
  return (
    <span className={styles.group} aria-hidden={hidden || undefined}>
      {specialties.map((s) => (
        <Fragment key={s.title}>
          <span className={styles.label}>{s.title}</span>
          <span className={styles.star} aria-hidden="true">✦</span>
        </Fragment>
      ))}
    </span>
  );
}

/** Infinite specialties ticker. Two identical groups translate by -50% for a seamless loop. */
export function Marquee() {
  const track = useRef<HTMLDivElement>(null);

  function setSpeed(rate: number) {
    track.current?.getAnimations?.()[0]?.updatePlaybackRate?.(rate);
  }

  return (
    <section
      className={styles.marquee}
      aria-label="Specialties we insure"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setSpeed(0.35);
      }}
      onPointerLeave={() => setSpeed(1)}
    >
      <div ref={track} className={styles.track}>
        <Group />
        <Group hidden />
      </div>
    </section>
  );
}
