import { company } from "@/content/company";
import { ContactForm } from "./ContactForm";
import { cx } from "@/lib/motion";
import styles from "./ContactSection.module.css";

type Props = {
  id?: string;
  eyebrow: string;
  title: string;
  lead?: string;
  tone?: "base" | "alt";
  specialty?: string;
};

/** Shared contact details and Wix enquiry form. */
export function ContactSection({ id, eyebrow, title, lead, tone = "alt", specialty }: Props) {
  return (
    <section id={id} className={cx(styles.section, tone === "alt" && styles.alt)}>
      <div className={styles.left}>
        <div className={cx("eyebrow", styles.eyebrow)}>
          <span className={styles.dot} aria-hidden="true" />
          {eyebrow}
        </div>
        <h2 className={styles.title}>{title}</h2>
        {lead && <p className={styles.lead}>{lead}</p>}
        <p className={styles.channels}>
          <a href={company.phoneHref}>Call {company.phone}</a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </p>
      </div>
      <div className={styles.right}>
        {specialty && <p className={styles.context}>Enquiring about <strong>{specialty}</strong></p>}
        <ContactForm specialty={specialty} />
      </div>
      <address className={styles.address}>
        <strong>Visit our office</strong>
        <a href={company.mapUrl} target="_blank" rel="noopener noreferrer">{company.address.join(", ")}</a>
      </address>
    </section>
  );
}
