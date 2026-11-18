import { company, navLinks, specialties } from "@/content/site";
import { Reveal } from "./Reveal";
import { CurrentYear } from "./CurrentYear";
import { cx, delay } from "@/lib/motion";
import styles from "./Footer.module.css";

const LETTERS = [
  ["M", 700], ["E", 700], ["D", 700], ["S", 300], ["U", 300], ["R", 300], ["E", 300],
] as const;

export function Footer() {
  const footerNav = navLinks.filter((l) => l.label !== "Why Medsure" && l.label !== "FAQ");

  return (
    <Reveal as="footer" className={styles.footer}>
      <div className={styles.cols}>
        <div className="rv">
          <div className={styles.label}>Medsure</div>
          <div className={styles.links}>
            {footerNav.map((l) => (
              <a key={l.label} href={l.href} className="ul">{l.label}</a>
            ))}
            <a href="#contact" className="ul">Contact</a>
          </div>
        </div>
        <div className="rv" style={delay(100)}>
          <div className={styles.label}>Specialties</div>
          <div className={styles.links}>
            {specialties.map((s) => (
              <a key={s.title} href="#cover" className="ul">{s.title}</a>
            ))}
          </div>
        </div>
        <div className="rv" style={delay(200)}>
          <div className={styles.label}>Visit</div>
          <address>
            {company.address.map((line, i) => (
              <span key={line}>
                {line}
                {i < company.address.length - 1 && <br />}
              </span>
            ))}
          </address>
        </div>
        <div className="rv" style={delay(300)}>
          <div className={styles.label}>Contact</div>
          <div className={styles.links}>
            <a href={company.phoneHref} className="ul">{company.phone}</a>
            <a href={`mailto:${company.email}`} className="ul">{company.email}</a>
            <a href={company.facebook} className="ul" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
        </div>
      </div>

      <div className={styles.mark} aria-hidden="true">
        {LETTERS.map(([letter, weight], i) => (
          <span key={i} className={cx("ltr", weight === 700 ? "b700" : "b300")} style={delay(100 + i * 60)}>
            {letter}
          </span>
        ))}
      </div>

      <div className={styles.bar}>
        <span>
          © <CurrentYear /> {company.legalName}
        </span>
        <span className={styles.barRight}>
          <a href="#top" className="ul">Privacy Policy</a>
          <span>
            Website by{" "}
            <a href="https://avocadots.com" className="ul" target="_blank" rel="noopener noreferrer">avocadots</a>
          </span>
        </span>
      </div>
    </Reveal>
  );
}
