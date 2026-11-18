import Image from "next/image";
import { closing, company } from "@/content/site";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { cx, delay } from "@/lib/motion";
import styles from "./Closing.module.css";

export function Closing() {
  return (
    <Reveal id="contact" className={styles.section}>
      <div className={cx(styles.media, "band-par")} aria-hidden="true">
        <Image src={closing.photo.src} alt="" fill sizes="100vw" className={styles.mediaImg} />
      </div>
      <div className={styles.shade} aria-hidden="true" />
      <div className={styles.inner}>
        <p className={cx(styles.kicker, "rv")}>
          {closing.kicker[0]}
          <br />
          {closing.kicker[1]}
        </p>
        <h2 className={styles.title}>
          {closing.title.map((line, i) => (
            <span key={line} className={styles.line}>
              <span className="ltr" style={delay(150 + i * 110)}>{line}</span>
            </span>
          ))}
        </h2>
        <Button href={company.phoneHref} variant="light" className={cx(styles.btn, "rv")} style={delay(450)}>
          Book a consultation call
        </Button>
        <div className={cx(styles.phone, "rv")} style={delay(550)}>
          or call{" "}
          <a href={company.phoneHref} className="ul">
            {company.phone}
          </a>
        </div>
      </div>
    </Reveal>
  );
}
