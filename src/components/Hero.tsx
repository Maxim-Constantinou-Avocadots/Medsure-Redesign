import { hero } from "@/content/site";
import { Button } from "./Button";
import { CountUp } from "./CountUp";
import { HeroVideo } from "./HeroVideo";
import { cx, delay } from "@/lib/motion";
import styles from "./Hero.module.css";

const WORD_START = 1.15;
const WORD_STEP = 0.07;

export function Hero() {
  const words = hero.title.split(" ");

  return (
    <header id="top" className={styles.hero}>
      <div className={styles.media}>
        <HeroVideo poster={hero.video.poster} alt={hero.video.alt} sources={hero.video.sources} />
      </div>
      <div className={styles.shade} aria-hidden="true" />

      <div className={cx(styles.stats, styles.out)}>
        {hero.stats.map((stat, i) => (
          <div key={stat.label} className={styles.stat}>
            <div className={cx(styles.rule, "load-line")} style={delay(`${1.3 + i * 0.15}s`)} />
            <div className={cx(styles.label, "load-in")} style={delay(`${1.45 + i * 0.15}s`)}>
              {stat.label}
            </div>
            <div className={cx(styles.row, "load-in")} style={delay(`${1.5 + i * 0.15}s`)}>
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
          <h1 className={styles.title} aria-label={hero.title}>
            {words.map((word, i) => (
              <span key={i} aria-hidden="true">
                <span className="w">
                  <span style={delay(`${(WORD_START + i * WORD_STEP).toFixed(2)}s`)}>{word}</span>
                </span>
                {i < words.length - 1 ? " " : null}
              </span>
            ))}
          </h1>
          <p className={cx(styles.lead, "load-in")} style={delay("1.75s")}>
            {hero.lead}
          </p>
        </div>
        <Button href="#cover" variant="glass" className={cx(styles.more, "load-in")} style={delay("1.95s")}>
          Learn more
        </Button>
      </div>
    </header>
  );
}
