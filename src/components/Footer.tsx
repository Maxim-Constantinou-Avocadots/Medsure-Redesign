import Link from "next/link";
import { aboutLinks, company, liabilityLinks, routes } from "@/content/company";
import { Reveal } from "./Reveal";
import { CurrentYear } from "./CurrentYear";
import { cx, delay } from "@/lib/motion";
import styles from "./Footer.module.css";

const LETTERS = [
  ["M", 700], ["E", 700], ["D", 700], ["S", 300], ["U", 300], ["R", 300], ["E", 300],
] as const;

const columns = [
  { title: "About Us", href: routes.about, links: aboutLinks },
  { title: "Professional Liability", href: routes.liability, links: liabilityLinks },
  {
    title: "Medsure",
    href: routes.home,
    links: [
      { label: "Home", href: routes.home },
      { label: "Careers", href: routes.careers },
      { label: "Contact Us", href: routes.contact },
      { label: "Privacy Policy", href: routes.privacy },
    ],
  },
];

export function Footer() {
  return (
    <Reveal as="footer" className={styles.footer}>
      <div className={styles.cols}>
        {columns.map((col, i) => (
          <div key={col.title} className="rv" style={delay(i * 80)}>
            <Link href={col.href} className={styles.label}>{col.title}</Link>
            <ul className={styles.links}>
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="ul">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="rv" style={delay(240)}>
          <div className={styles.label}>Visit</div>
          <address className={styles.address}>
            <a href={company.mapUrl} className="ul" target="_blank" rel="noopener noreferrer">
              {company.address.map((line, i) => (
                <span key={line}>
                  {line}
                  {i < company.address.length - 1 && <br />}
                </span>
              ))}
            </a>
          </address>
        </div>
        <div className="rv" style={delay(320)}>
          <div className={styles.label}>Contact</div>
          <ul className={styles.links}>
            <li><a href={company.phoneHref} className="ul">{company.phone}</a></li>
            <li><a href={`mailto:${company.email}`} className="ul">{company.email}</a></li>
            <li><a href={company.facebook} className="ul" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          </ul>
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
          © <CurrentYear /> {company.legalName}. All rights reserved.
        </span>
        <span className={styles.barRight}>
          <Link href={routes.privacy} className="ul">Privacy Policy</Link>
          <span>
            Made fresh by{" "}
            <a href="https://avocadots.com" className="ul" target="_blank" rel="noopener noreferrer">avocadots</a>
          </span>
        </span>
      </div>
    </Reveal>
  );
}
