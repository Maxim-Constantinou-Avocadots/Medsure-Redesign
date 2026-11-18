import { aboutLinks, company, liabilityLinks, routes } from "@/content/company";
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
    <footer className={styles.footer}>
      <div className={styles.cols}>
        {columns.map((col) => (
          <div key={col.title}>
            <a href={col.href} className={styles.label}>{col.title}</a>
            <ul className={styles.links}>
              {col.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="ul">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
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
        <div>
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
          <span key={i} className={weight === 700 ? "b700" : "b300"}>
            {letter}
          </span>
        ))}
      </div>

      <div className={styles.bar}>
        <span>
          © {new Date().getUTCFullYear()} {company.legalName}. All rights reserved.
        </span>
        <span className={styles.barRight}>
          <a href={routes.privacy} className="ul">Privacy Policy</a>
          <span>
            Made fresh by{" "}
            <a href="https://avocadots.com" className="ul" target="_blank" rel="noopener noreferrer">avocadots</a>
          </span>
        </span>
      </div>
    </footer>
  );
}
