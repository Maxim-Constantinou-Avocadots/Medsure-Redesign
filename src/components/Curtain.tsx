import { Wordmark } from "./Logo";
import styles from "./Curtain.module.css";

/** Navy curtain that lifts on first paint. Pure CSS — no JS needed. */
export function Curtain() {
  return (
    <div className={styles.curtain} aria-hidden="true">
      <div className={styles.logo}>
        <Wordmark />
      </div>
    </div>
  );
}
