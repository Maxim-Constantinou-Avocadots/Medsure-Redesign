import { ContactSection } from "../ContactSection";
import styles from "../ContactSection.module.css";

export function ContactPage({ specialty }: { specialty?: string }) {
  return (
    <main id="main">
      <header id="top" className={styles.masthead}>
        <h1>Talk to us about insurance cover</h1>
        <p>Ask Medsure about professional liability insurance or send us a general enquiry.</p>
      </header>
      <ContactSection
        id="enquiry"
        eyebrow="Contact Medsure"
        title="Send us a message"
        tone="base"
        specialty={specialty}
      />
    </main>
  );
}
