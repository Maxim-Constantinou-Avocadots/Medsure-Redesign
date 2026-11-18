"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { statements } from "@/content/site";
import { Reveal } from "./Reveal";
import { cx, delay, prefersReducedMotion } from "@/lib/motion";
import styles from "./StatementBand.module.css";

function stateClass(i: number, active: number) {
  return cx("fade-item", i === active && "is-active", i < active && "is-before");
}

/**
 * Story-style statements. Autoplays only while on screen and while the tab
 * is visible; clicking a bar jumps to that statement and restarts the timer.
 */
export function StatementBand() {
  const { lines, duration, backdrop } = statements;
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  // Incrementing `cycle` remounts the active bar's fill so its animation restarts
  const [cycle, setCycle] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useRef(false);

  const go = useCallback(
    (i: number) => {
      setActive((i + lines.length) % lines.length);
      setCycle((c) => c + 1);
    },
    [lines.length],
  );

  // Track visibility of the band and of the tab
  useEffect(() => {
    if (prefersReducedMotion()) return;
    const el = sectionRef.current;
    const sync = () => setPlaying(inView.current && !document.hidden);
    const io = new IntersectionObserver(([entry]) => {
      inView.current = entry.isIntersecting;
      if (entry.isIntersecting) setCycle((c) => c + 1);
      sync();
    }, { threshold: 0.35 });
    if (el) io.observe(el);
    document.addEventListener("visibilitychange", sync);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  // Advance on a timer while playing; restarts whenever the statement changes
  useEffect(() => {
    if (!playing) return;
    const id = window.setTimeout(() => go(active + 1), duration);
    return () => window.clearTimeout(id);
  }, [playing, active, cycle, duration, go]);

  return (
    <div ref={sectionRef}>
      <Reveal
        aria-label="Our promise"
        className={styles.band}
        style={{ "--dur": `${duration}ms` } as CSSProperties}
      >
        <div className={cx(styles.media, "band-par")} aria-hidden="true">
          <Image src={backdrop} alt="" fill sizes="100vw" className={styles.mediaImg} />
        </div>
        <div className={styles.shade} aria-hidden="true" />

        <div className={cx(styles.numWrap, "rv")} aria-hidden="true">
          <div className={cx(styles.num, "stack")}>
            {lines.map((_, i) => (
              <span key={i} className={stateClass(i, active)}>{i + 1}</span>
            ))}
          </div>
        </div>

        <div className={cx(styles.text, "stack rv")} style={delay(150)} aria-live="polite">
          {lines.map((line, i) => (
            <p key={i} className={cx(styles.line, stateClass(i, active))} aria-hidden={i !== active}>
              {line.map((part, k) => (
                <span key={k}>
                  {part}
                  {k < line.length - 1 && <br />}
                </span>
              ))}
            </p>
          ))}
        </div>

        <div className={cx(styles.bars, "rv")} style={delay(300)}>
          {lines.map((_, i) => (
            <button
              key={i}
              type="button"
              className={styles.bar}
              aria-label={`Show statement ${i + 1}`}
              aria-current={i === active}
              onClick={() => go(i)}
            >
              <span className={styles.track}>
                <span
                  key={i === active ? `on-${cycle}` : "off"}
                  className={cx(
                    styles.fill,
                    i < active && styles.fillDone,
                    i === active && (playing ? styles.fillPlaying : styles.fillDone),
                  )}
                />
              </span>
            </button>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
