import { aboutHub } from "@/content/about";
import { Section, SectionHead } from "../Section";
import { LinkCards } from "../LinkCards";

/** "More about Medsure" — the other About pages, so every page links onward. */
export function RelatedAbout({ current }: { current: string }) {
  const items = aboutHub.cards.filter((c) => c.href !== current).slice(0, 3);
  return (
    <Section tone="alt" ruleTop>
      <SectionHead eyebrow="About Us" title="More about Medsure" />
      <LinkCards items={items} />
    </Section>
  );
}
