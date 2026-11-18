import Image, { type StaticImageData } from "@/components/SiteImage";
import { company } from "@/content/company";
import { closingDefaults } from "@/content/home";
import closingImage from "@/assets/images/paramedicine.jpg";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { cx, delay } from "@/lib/motion";
import styles from "./Closing.module.css";

type Props = {
  kicker?: string[];
  title?: string[];
  cta?: { label: string; href: string };
  image?: StaticImageData;
};

/** Navy closing band used at the end of every page. */
export function Closing({
  kicker = closingDefaults.kicker,
  title = closingDefaults.title,
  cta = closingDefaults.cta,
  image = closingImage,
}: Props) {
  return (
    <Reveal className={styles.section}>
      <div className={cx(styles.media, "band-par")} aria-hidden="true">
        <Image src={image} alt="" fill sizes="100vw" className={styles.mediaImg} />
      </div>
      <div className={styles.shade} aria-hidden="true" />
      <div className={styles.inner}>
        <p className={cx(styles.kicker, "rv")}>
          {kicker.map((line, i) => (
            <span key={line}>
              {line}
              {i < kicker.length - 1 && <br />}
            </span>
          ))}
        </p>
        <h2 className={styles.title}>
          {title.map((line, i) => (
            <span key={line} className={styles.line}>
              <span className="ltr" style={delay(150 + i * 110)}>{line}</span>
            </span>
          ))}
        </h2>
        <Button href={cta.href} variant="light" className={cx(styles.btn, "rv")} style={delay(450)}>
          {cta.label}
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
