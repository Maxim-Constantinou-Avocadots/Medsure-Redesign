import { routes } from "@/content/company";
import { liabilityHub, specialties } from "@/content/liability";
import { PageHero } from "../PageHero";
import { Section, SectionHead, Split, Prose } from "../Section";
import { LinkCards } from "../LinkCards";
import { Benefits } from "../Benefits";
import { Closing } from "../Closing";
import { Button } from "../Button";

/** Professional Liability hub (inventory §8). */
export function LiabilityHubPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: routes.home }, { label: "Professional Liability" }]}
        title={liabilityHub.title}
        lead={liabilityHub.lead}
        image={liabilityHub.hero}
        actions={<Button href={`${routes.contact}#enquiry`} variant="light">Make an enquiry</Button>}
      />
      <main id="main">
        <Section>
          <Split title={liabilityHub.explainer.title}>
            <Prose paragraphs={liabilityHub.explainer.paragraphs} />
          </Split>
        </Section>

        <Section tone="alt" ruleTop>
          <SectionHead eyebrow="Featured insurance solutions" title="We provide insurance solutions for" />
          <LinkCards
            items={specialties.map((s) => ({
              title: s.title,
              body: s.summary,
              href: s.href,
              image: s.card,
            }))}
          />
        </Section>

        <Benefits tone="base" />

        <Closing kicker={[`${liabilityHub.grow.title}!`, liabilityHub.grow.body]} />
      </main>
    </>
  );
}
