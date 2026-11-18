import { steps } from "@/content/site";
import { Reveal } from "./Reveal";
import { cx, delay } from "@/lib/motion";
import styles from "./Steps.module.css";

export function Steps() {
  return (
    <Reveal className={styles.section}>
      <div className={styles.head}>
        <div className="eyebrow rv">{steps.eyebrow}</div>
        <h2 className={cx(styles.title, "rv")} style={delay(120)}>
          {steps.title}
        </h2>
      </div>
      <div className={styles.grid}>
        {steps.items.map((step, i) => {
          const last = i === steps.items.length - 1;
          return (
            <div key={step.title} className="rv" style={delay(200 + i * 120)}>
              <div className={cx(styles.step, last && styles.dark)}>
                <div className={styles.top}>
                  <span>Step</span>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.text}>{step.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Reveal>
  );
}
