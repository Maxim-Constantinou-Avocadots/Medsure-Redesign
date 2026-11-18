"use client";

import Image from "next/image";
import { useRef } from "react";
import { specialties } from "@/content/site";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { ArrowIcon, ChevronLeft, ChevronRight } from "./icons";
import { cx, delay, prefersReducedMotion } from "@/lib/motion";
import styles from "./Specialties.module.css";

export function Specialties() {
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
    <Reveal id="cover" className={styles.section}>
      <div className={styles.head}>
        <div className={styles.headCopy}>
          <div className={cx("eyebrow rv", styles.eyebrow)}>
            <span className={styles.dot} aria-hidden="true" />
            Professional Liability
          </div>
          <h2 className={cx(styles.title, "rv")} style={delay(120)}>
            Specialist liability insurance for every medical profession — tailored, never templated.
          </h2>
        </div>
        <div className={cx(styles.actions, "rv")} style={delay(240)}>
          <div className={styles.arrows}>
            <button type="button" className="icon-btn" aria-label="Scroll specialties left" onClick={() => scrollRail(-1)}>
              <ChevronLeft width={14} height={14} />
            </button>
            <button type="button" className="icon-btn" aria-label="Scroll specialties right" onClick={() => scrollRail(1)}>
              <ChevronRight width={14} height={14} />
            </button>
          </div>
          <Button href="#cover">All specialties</Button>
        </div>
      </div>

      <div ref={railRef} className={styles.rail}>
        {specialties.map((item, i) => (
          <div key={item.title} className={cx(styles.item, "rv")} style={delay(200 + i * 100)}>
            <article className={styles.card}>
              <div className={styles.top}>
                <div className={styles.img}>
                  <Image
                    src={item.photo.src}
                    alt={item.photo.alt}
                    fill
                    sizes="(max-width: 960px) 80vw, 330px"
                    placeholder="blur"
                    style={{ objectPosition: item.photo.position }}
                  />
                </div>
                <h3 className={styles.cardTitle}>
                  <span>{item.title}</span>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                </h3>
              </div>
              <div className={styles.body}>
                <div className={styles.label}>Coverage overview</div>
                <p className={styles.text}>{item.text}</p>
                <a href="#cover" className={styles.more}>
                  Explore cover <ArrowIcon />
                </a>
              </div>
            </article>
          </div>
        ))}
      </div>

      <div className={cx(styles.progress, "rv")} style={delay(500)} aria-hidden="true">
        <div className={styles.progressBar} />
      </div>
    </Reveal>
  );
}
