import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Photo } from "@/content/liability";
import { WordReveal } from "./WordReveal";
import { cx, delay } from "@/lib/motion";
import styles from "./PageHero.module.css";

export type Crumb = { label: string; href?: string };

type Props = {
  crumbs: Crumb[];
  title: string;
  lead?: string;
  image: Photo;
  /** Optional block in the bottom-right corner (facts, a button…) */
  aside?: ReactNode;
  compact?: boolean;
};

/** Inner-page hero: same language as the homepage hero — full-bleed photo, word-by-word title. */
export function PageHero({ crumbs, title, lead, image, aside, compact }: Props) {
  return (
    <header id="top" className={cx(styles.hero, compact && styles.compact)}>
      <div className={styles.media}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          preload
          sizes="100vw"
          placeholder="blur"
          className={styles.image}
          style={{ objectPosition: image.position }}
        />
      </div>
      <div className={styles.shade} aria-hidden="true" />

      <div className={cx(styles.bottom, styles.out)}>
        <div className={styles.copy}>
          <nav aria-label="Breadcrumb" className={cx(styles.crumbs, "load-in")} style={delay("0.1s")}>
            <ol>
              {crumbs.map((c, i) => (
                <li key={c.label}>
                  {c.href ? <Link href={c.href} className="ul">{c.label}</Link> : <span aria-current="page">{c.label}</span>}
                  {i < crumbs.length - 1 && <span className={styles.sep} aria-hidden="true">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <h1 className={styles.title}>
            <WordReveal text={title} start={0.2} />
          </h1>
          {lead && (
            <p className={cx(styles.lead, "load-in")} style={delay("0.7s")}>
              {lead}
            </p>
          )}
        </div>
        {aside && (
          <div className={cx(styles.aside, "load-in")} style={delay("0.9s")}>
            {aside}
          </div>
        )}
      </div>
    </header>
  );
}
