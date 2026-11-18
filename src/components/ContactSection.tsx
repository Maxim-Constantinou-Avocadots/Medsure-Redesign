import { company } from "@/content/company";
import { ContactForm } from "./ContactForm";
import { Reveal } from "./Reveal";
import { cx, delay } from "@/lib/motion";
import styles from "./ContactSection.module.css";

type Props = { id?: string; eyebrow: string; title: string; lead?: string; tone?: "base" | "alt" };

/** Contact details + message form. Same block on the homepage and the Contact page. */
export function ContactSection({ id, eyebrow, title, lead, tone = "alt" }: Props) {
  const details = [
    { label: "Address", value: company.address.join(", "), href: company.mapUrl, external: true },
    { label: "Email", value: company.email, href: `mailto:${company.email}` },
    { label: "Phone", value: company.phone, href: company.phoneHref },
  ];
  return (
    <Reveal id={id} className={cx(styles.section, tone === "alt" && styles.alt)}>
      <div className={styles.left}>
        <div className={cx("eyebrow rv", styles.eyebrow)}>
          <span className={styles.dot} aria-hidden="true" />
          {eyebrow}
        </div>
        <h2 className={cx(styles.title, "rv")} style={delay(120)}>{title}</h2>
        {lead && <p className={cx(styles.lead, "rv")} style={delay(180)}>{lead}</p>}
        <dl className={styles.details}>
          {details.map((d, i) => (
            <div key={d.label} className={cx(styles.detail, "rv")} style={delay(240 + i * 80)}>
              <dt>{d.label}</dt>
              <dd>
                <a href={d.href} className="ul" {...(d.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                  {d.value}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className={cx(styles.right, "rv")} style={delay(200)}>
        <ContactForm />
      </div>
    </Reveal>
  );
}
