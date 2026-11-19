import { company, routes } from "@/content/company";
import { getSpecialty, specialties, specialtyBody, type Specialty } from "@/content/liability";
import { PageHero } from "../PageHero";
import { SpecialtyTabs } from "../SpecialtyTabs";
import { Section, Split, Prose, Chips } from "../Section";
import { CardImage } from "../LinkCards";
import { Benefits } from "../Benefits";
import { Specialties } from "../Specialties";
import { Closing } from "../Closing";
import { Button } from "../Button";

/** One template for all six specialty pages (inventory §9–14). */
export function SpecialtyPage({ slug }: { slug: Specialty["slug"] }) {
  const s = getSpecialty(slug);
  const others = specialties.filter((x) => x.slug !== slug);
  const enquiryHref = `${routes.contact}?specialty=${s.href.slice(1)}#enquiry`;
  const enquiryLabel = slug === "clinics" ? "Enquire about cover for your clinic" :
    slug === "dentistry" ? "Enquire about dentistry cover" : `Enquire about cover for ${s.forLabel}`;

  return (
    <>
      <PageHero
        crumbs={[
          { label: "Home", href: routes.home },
          { label: "Professional Liability", href: routes.liability },
          { label: s.title },
        ]}
        title={`Professional liability insurance for ${s.forLabel}`}
        lead={s.intro[0]}
        image={s.hero}
        actions={
          <>
            <Button href={enquiryHref} variant="light">{enquiryLabel}</Button>
            <Button href={company.phoneHref} variant="glass">Call Medsure</Button>
          </>
        }
      />
      <main id="main">
        <SpecialtyTabs current={s.href} />

        <Section>
          <Split
            title="What to ask about your cover"
            aside={<CardImage image={s.card} />}
          >
            <Prose paragraphs={[...s.intro.slice(1), ...specialtyBody(s.general)]} lead={s.intro.length > 1} />
            {s.list && <Chips label={s.list.label} items={s.list.items} />}
            <Prose paragraphs={["Tell Medsure what kind of practice or work you do. Ask about cover for the activities you carry out, which limits and exclusions may apply, and how to get support if a claim is made."]} />
            <Button href={enquiryHref}>{enquiryLabel}</Button>
          </Split>
        </Section>

        <Benefits />

        <Closing
          kicker={["Talk to Medsure"]}
          title={["Discuss your cover"]}
          cta={{ label: enquiryLabel, href: enquiryHref }}
        />

        <Specialties
          eyebrow="Additional insurance solutions"
          title="Professional liability insurance for other professions"
          items={others}
        />
      </main>
    </>
  );
}
