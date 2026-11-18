import { LogoMark } from "./icons";
import styles from "./Logo.module.css";

export function Wordmark() {
  return (
    <>
      <span className="b700">MED</span>
      <span className="b300">SURE</span>
    </>
  );
}

export function Logo() {
  return (
    <span className={styles.logo}>
      <LogoMark className={styles.mark} />
      <span className={styles.text}>
        <span className={styles.word}>
          <Wordmark />
        </span>
        <span className={styles.sub}>INSURANCE</span>
      </span>
    </span>
  );
}
