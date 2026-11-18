import Image from "@/components/SiteImage";
import { useState } from "react";
import { routes } from "@/content/company";
import { reasons } from "@/content/home";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { ChevronLeft, ChevronRight } from "./icons";
import { cx, delay } from "@/lib/motion";
import styles from "./Why.module.css";

const pad = (n: number) => String(n).padStart(2, "0");

/** Crossfade state for an item in a stacked set */
function stateClass(i: number, active: number) {
  return cx("fade-item", i === active && "is-active", i < active && "is-before");
}

export function Why() {
  const [active, setActive] = useState(0);
  const total = reasons.length;
  const go = (i: number) => setActive((i + total) % total);

  return (
    <Reveal id="why" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className="rv">
            <div className={styles.switcher}>
              <button type="button" className="icon-btn" aria-label="Previous reason" onClick={() => go(active - 1)}>
                <ChevronLeft />
              </button>
              <span className={cx("stack", styles.labels)} aria-live="polite">
                {reasons.map((r, i) => (
                  <span key={r.tag} className={stateClass(i, active)} aria-hidden={i !== active}>
                    {r.tag}
                  </span>
                ))}
              </span>
              <button type="button" className="icon-btn" aria-label="Next reason" onClick={() => go(active + 1)}>
                <ChevronRight />
              </button>
            </div>
            <div className={styles.meta}>
              <span>What makes Medsure different</span>
              <span className={styles.count}>
                {pad(active + 1)} / {pad(total)}
              </span>
            </div>
            <div className={styles.progress} aria-hidden="true">
              <div className={styles.progressBar} style={{ transform: `scaleX(${(active + 1) / total})` }} />
            </div>
          </div>

          <div className="stack rv" style={delay(150)}>
            {reasons.map((r, i) => (
              <div key={r.tag} className={cx(styles.text, stateClass(i, active))} aria-hidden={i !== active}>
                <h2 className={styles.title}>{r.title}</h2>
                <p className={styles.body}>{r.body}</p>
              </div>
            ))}
            <Button href={routes.contact} className={styles.cta}>
              Contact us
            </Button>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.thumbs}>
            {reasons.map((r, i) => (
              <button
                key={r.tag}
                type="button"
                className={cx(styles.thumb, i === active && styles.thumbActive)}
                aria-label={r.tag}
                aria-pressed={i === active}
                onClick={() => go(i)}
              >
                <Image src={r.photo.src} alt="" fill sizes="78px" />
              </button>
            ))}
          </div>
          <div className={cx(styles.media, "rv-img")} style={delay(150)}>
            {reasons.map((r, i) => (
              <div
                key={r.tag}
                className={cx(styles.slide, i === active && styles.slideActive, i < active && styles.slideBefore)}
                aria-hidden={i !== active}
              >
                <Image
                  src={r.photo.src}
                  alt={r.photo.alt}
                  fill
                  sizes="(max-width: 960px) 100vw, 60vw"

                  style={{ objectPosition: r.photo.position }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
