import { benefits } from "@/content/liability";
import { Section, SectionHead } from "./Section";
import { cx, delay } from "@/lib/motion";
import styles from "./Benefits.module.css";

/** "Benefits of Medsure" — identical on every specialty page and the Professional Liability hub. */
export function Benefits({ tone = "alt" }: { tone?: "base" | "alt" }) {
  return (
    <Section tone={tone}>
      <SectionHead eyebrow="Benefits of Medsure" title="Why professionals insure with Medsure" />
      <div className={styles.grid}>
        {benefits.map((b, i) => (
          <article key={b.title} className={cx(styles.card, i === 2 && styles.dark, "rv")} style={delay(150 + i * 110)}>
            <div className={styles.num}>{String(i + 1).padStart(2, "0")}</div>
            <div>
              <h3 className={styles.title}>{b.title}</h3>
              <p className={styles.body}>{b.body}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
