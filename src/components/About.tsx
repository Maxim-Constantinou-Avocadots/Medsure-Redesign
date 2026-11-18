import { routes } from "@/content/company";
import { homeAbout } from "@/content/home";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { cx, delay } from "@/lib/motion";
import styles from "./About.module.css";

/** Homepage "Experience meets innovation" block. */
export function About() {
  return (
    <Reveal id="about" className={styles.section}>
      <div className={cx(styles.rule, "rv-rule")} aria-hidden="true" />
      <div className={cx(styles.col, styles.colLeft)}>
        <h2 className={cx(styles.title, "rv")}>{homeAbout.title}</h2>
        <div className={styles.bottomLeft}>
          <div className={cx(styles.stat, "rv")} style={delay(160)}>
            <span className={styles.statValue}>{homeAbout.clients.value}</span>
            <span className={styles.statLabel}>{homeAbout.clients.label}</span>
          </div>
          <div className={styles.chips}>
            {homeAbout.values.map((v, i) => (
              <span key={v} className={cx(styles.chip, "rv")} style={delay(220 + i * 70)}>
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className={cx(styles.col, styles.colRight)}>
        <div>
          {homeAbout.body.map((p, i) => (
            <p key={i} className={cx(i === 0 ? styles.lead : styles.body, "rv")} style={delay(150 + i * 100)}>
              {p}
            </p>
          ))}
          <div className={cx(styles.founder, "rv")} style={delay(360)}>
            <div className={styles.avatar} aria-hidden="true">{homeAbout.founder.initials}</div>
            <div className={styles.meta}>
              <div className={styles.name}>{homeAbout.founder.name}</div>
              <div className={styles.role}>{homeAbout.founder.role}</div>
            </div>
          </div>
        </div>
        <Button href={routes.about} className="rv" style={delay(440)}>
          About us
        </Button>
      </div>
    </Reveal>
  );
}
