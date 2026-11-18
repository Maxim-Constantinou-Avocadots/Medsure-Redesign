import Image from "@/components/SiteImage";
import type { Photo } from "@/content/liability";
import { ArrowIcon } from "./icons";
import { cx, delay } from "@/lib/motion";
import styles from "./LinkCards.module.css";

export type LinkCard = { title: string; body: string; href: string; image: Photo };

/** Grid of image cards that link to pages (About hub, related pages). */
export function LinkCards({ items }: { items: LinkCard[] }) {
  return (
    <ul className={styles.grid}>
      {items.map((item, i) => (
        <li key={item.href} className="rv" style={delay(120 + (i % 3) * 100)}>
          <a href={item.href} className={styles.card}>
            <div className={styles.img}>
              <Image src={item.image.src} alt={item.image.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" style={{ objectPosition: item.image.position }} />
            </div>
            <div className={styles.body}>
              <div className={styles.row}>
                <h3 className={styles.title}>{item.title}</h3>
                <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className={styles.text}>{item.body}</p>
              <span className={styles.more}>
                Learn more <ArrowIcon />
              </span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function CardImage({ image, className }: { image: Photo; className?: string }) {
  return (
    <div className={cx(styles.feature, "rv-img", className)}>
      <Image src={image.src} alt={image.alt} fill sizes="(max-width: 900px) 100vw, 45vw" style={{ objectPosition: image.position }} />
    </div>
  );
}
