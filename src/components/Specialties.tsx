import Image from "@/components/SiteImage";
import { useRef } from "react";
import { routes } from "@/content/company";
import type { Specialty } from "@/content/liability";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { ArrowIcon, ChevronLeft, ChevronRight } from "./icons";
import { cx, delay, prefersReducedMotion } from "@/lib/motion";
import styles from "./Specialties.module.css";

type Props = {
  id?: string;
  eyebrow: string;
  title: string;
  items: Specialty[];
  /** Show the "All specialties" link to the Professional Liability hub */
  showHubLink?: boolean;
  tone?: "base" | "alt";
};

/** Specialty cards display in a desktop rail and a mobile grid. */
export function Specialties({ id, eyebrow, title, items, showHubLink = true, tone = "base" }: Props) {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollRail = (dir: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({
      left: dir * Math.max(300, rail.clientWidth * 0.6),
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  return (
    <Reveal id={id} className={cx(styles.section, tone === "alt" && styles.alt)}>
      <div className={styles.head}>
        <div className={styles.headCopy}>
          <div className={cx("eyebrow rv", styles.eyebrow)}>
            <span className={styles.dot} aria-hidden="true" />
            {eyebrow}
          </div>
          <h2 className={cx(styles.title, "rv")} style={delay(120)}>
            {title}
          </h2>
        </div>
        <div className={cx(styles.actions, "rv")} style={delay(240)}>
          <div className={styles.arrows}>
            <button type="button" className="icon-btn" aria-label="Scroll left" onClick={() => scrollRail(-1)}>
              <ChevronLeft width={14} height={14} />
            </button>
            <button type="button" className="icon-btn" aria-label="Scroll right" onClick={() => scrollRail(1)}>
              <ChevronRight width={14} height={14} />
            </button>
          </div>
          {showHubLink && <Button href={routes.liability}>All specialties</Button>}
        </div>
      </div>

      <div ref={railRef} className={styles.rail}>
        {items.map((item, i) => (
          <div key={item.slug} className={cx(styles.item, "rv")} style={delay(200 + i * 100)}>
            <a href={item.href} className={styles.card} aria-labelledby={`specialty-${id ?? "related"}-${item.slug}`}>
              <div className={styles.top}>
                <div className={styles.img}>
                  <Image
                    src={item.card.src}
                    alt={item.card.alt}
                    fill
                    sizes="(max-width: 960px) 80vw, 330px"

                    style={{ objectPosition: item.card.position }}
                  />
                </div>
                <h3 id={`specialty-${id ?? "related"}-${item.slug}`} className={styles.cardTitle}>
                  <span>{item.title}</span>
                  <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                </h3>
              </div>
              <div className={styles.body}>
                <div className={styles.label}>Coverage overview</div>
                <p className={styles.text}>{item.summary}</p>
                <span className={styles.more}>
                  View cover <ArrowIcon />
                </span>
              </div>
            </a>
          </div>
        ))}
      </div>

      <div className={cx(styles.progress, "rv")} style={delay(500)} aria-hidden="true">
        <div className={styles.progressBar} />
      </div>
    </Reveal>
  );
}
