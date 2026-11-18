import { company, routes } from "@/content/company";
import { contact } from "@/content/careers";
import supportImage from "@/assets/images/support.jpg";
import { PageHero } from "../PageHero";
import { ContactSection } from "../ContactSection";
import { Closing } from "../Closing";
import { Button } from "../Button";

/** Contact Us (inventory §16) */
export function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: routes.home }, { label: "Contact Us" }]}
        title={contact.title}
        lead={contact.lead}
        image={{ src: supportImage, alt: "A Medsure advisor on a headset", position: "65% 35%" }}
        aside={<Button href={company.phoneHref} variant="glass">Call us</Button>}
        compact
      />
      <main id="main">
        <ContactSection eyebrow="Get in touch with us" title={contact.formTitle} tone="base" />
        <Closing
          kicker={["Let's grow together.", "We are here to find the most suitable policy for you, at an attractive price."]}
          cta={{ label: "Explore professional liability", href: routes.liability }}
        />
      </main>
    </>
  );
}
