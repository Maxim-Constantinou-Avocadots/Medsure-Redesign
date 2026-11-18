import { about, company } from "@/content/site";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { cx, delay } from "@/lib/motion";
import styles from "./About.module.css";

export function About() {
  return (
    <Reveal id="about" className={styles.section}>
      <div className={cx(styles.rule, "rv-rule")} aria-hidden="true" />
      <div className={cx(styles.col, styles.colLeft)}>
        <h2 className={cx(styles.title, "rv")}>
          {about.title[0]}
          <br />
          {about.title[1]}
        </h2>
        <div className={styles.chips}>
          {about.values.map((v, i) => (
            <span key={v} className={cx(styles.chip, "rv")} style={delay(200 + i * 80)}>
              {v}
            </span>
          ))}
        </div>
      </div>
      <div className={cx(styles.col, styles.colRight)}>
        <div>
          <p className={cx(styles.lead, "rv")} style={delay(150)}>
            {about.body}
          </p>
          <div className={cx(styles.founder, "rv")} style={delay(300)}>
            <div className={styles.avatar} aria-hidden="true">{company.founder.initials}</div>
            <div className={styles.meta}>
              <div className={styles.name}>{company.founder.name}</div>
              <div className={styles.role}>{company.founder.role}</div>
            </div>
          </div>
        </div>
        <Button href="#about" className="rv" style={delay(400)}>
          About us
        </Button>
      </div>
    </Reveal>
  );
}
