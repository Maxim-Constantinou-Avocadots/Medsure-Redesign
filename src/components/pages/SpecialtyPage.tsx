import { routes } from "@/content/company";
import { getSpecialty, liabilityHub, specialties, specialtyBody, type Specialty } from "@/content/liability";
import { PageHero } from "../PageHero";
import { SpecialtyTabs } from "../SpecialtyTabs";
import { Section, Split, Prose, Chips } from "../Section";
import { CardImage } from "../LinkCards";
import { Benefits } from "../Benefits";
import { Specialties } from "../Specialties";
import { Closing } from "../Closing";

/** One template for all six specialty pages (inventory §9–14). */
export function SpecialtyPage({ slug }: { slug: Specialty["slug"] }) {
  const s = getSpecialty(slug);
  const others = specialties.filter((x) => x.slug !== slug);

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
      />
      <main id="main">
        <SpecialtyTabs current={s.href} />

        <Section>
          <Split
            title="For your peace of mind — professional and financial"
            aside={<CardImage image={s.card} />}
          >
            <Prose paragraphs={[...s.intro.slice(1), ...specialtyBody(s.general)]} lead={s.intro.length > 1} />
            {s.list && <Chips label={s.list.label} items={s.list.items} />}
          </Split>
        </Section>

        <Benefits />

        <Specialties
          eyebrow="Additional insurance solutions"
          title="Professional liability insurance for other professions"
          items={others}
        />

        <Closing
          kicker={[`${liabilityHub.grow.title}.`, liabilityHub.grow.body]}
          cta={{ label: "Contact us", href: routes.contact }}
        />
      </main>
    </>
  );
}
