import { hero } from "@/content/home";
import { Button } from "./Button";
import { CountUp } from "./CountUp";
import { HeroVideo } from "./HeroVideo";
import { WordReveal } from "./WordReveal";
import { cx, delay } from "@/lib/motion";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <header id="top" className={styles.hero}>
      <div className={styles.media}>
        <HeroVideo poster={hero.video.poster} alt={hero.video.alt} sources={hero.video.sources} />
      </div>
      <div className={styles.shade} aria-hidden="true" />

      <div className={cx(styles.stats, styles.out)}>
        {hero.stats.map((stat, i) => (
          <div key={stat.label} className={styles.stat}>
            <div className={cx(styles.rule, "load-line")} style={delay(`${0.4 + i * 0.15}s`)} />
            <div className={cx(styles.label, "load-in")} style={delay(`${0.55 + i * 0.15}s`)}>
              {stat.label}
            </div>
            <div className={cx(styles.row, "load-in")} style={delay(`${0.6 + i * 0.15}s`)}>
              <span className={styles.num}>
                <CountUp value={stat.value} suffix={stat.suffix} />
              </span>
              <span className={styles.dots} aria-hidden="true">•••</span>
            </div>
          </div>
        ))}
      </div>

      <div className={cx(styles.bottom, styles.out)}>
        <div className={styles.copy}>
          <h1 className={styles.title}>
            <WordReveal text={hero.title} />
          </h1>
          <p className={cx(styles.lead, "load-in")} style={delay("0.85s")}>
            {hero.lead}
          </p>
          <div className={styles.actions}>
            <Button href="#cover" variant="light">Explore insurance by profession</Button>
            <Button href="#enquiry" variant="glass">Make an enquiry</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
