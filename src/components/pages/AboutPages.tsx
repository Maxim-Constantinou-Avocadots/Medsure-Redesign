import { routes } from "@/content/company";
import { aboutHub, community, history, lloyds, serviceCharter, values } from "@/content/about";
import { PageHero, type Crumb } from "../PageHero";
import { Section, SectionHead, Split, Prose, Chips } from "../Section";
import { LinkCards, CardImage } from "../LinkCards";
import { NewsletterForm } from "../NewsletterForm";
import { Closing } from "../Closing";
import { RelatedAbout } from "./RelatedAbout";
import { cx, delay } from "@/lib/motion";
import skyline from "@/assets/images/skyline.jpg";
import styles from "./AboutPages.module.css";

const aboutCrumbs = (label: string): Crumb[] => [
  { label: "Home", href: routes.home },
  { label: "About Us", href: routes.about },
  { label },
];

/** About Us hub (inventory §2) */
export function AboutHubPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: routes.home }, { label: "About Us" }]}
        title={aboutHub.title}
        lead={aboutHub.lead}
        image={aboutHub.hero}
      />
      <main id="main">
        <Section>
          <SectionHead eyebrow="About Us" title="Explore everything about us" />
          <LinkCards items={aboutHub.cards} />
        </Section>

        <Section tone="dark">
          <div className={styles.newsletter}>
            <h2 className={cx(styles.newsTitle, "rv")}>{aboutHub.newsletter.title}</h2>
            <div className="rv" style={delay(150)}>
              <NewsletterForm />
            </div>
          </div>
        </Section>

        <Closing />
      </main>
    </>
  );
}

/** History (inventory §3) */
export function HistoryPage() {
  return (
    <>
      <PageHero crumbs={aboutCrumbs("History")} title={history.title} lead={history.intro} image={history.hero} />
      <main id="main">
        <Section>
          <SectionHead eyebrow="Our story" title="Service first, and long-term accompaniment of the client" />
          <ol className={styles.timeline}>
            {history.timeline.map((t, i) => (
              <li key={t.marker} className={cx(styles.tItem, "rv")} style={delay(120 + i * 120)}>
                <div className={styles.tMarker}>{t.marker}</div>
                <div className={styles.tBody}>
                  <h3 className={styles.tTitle}>{t.title}</h3>
                  <p className={styles.tText}>{t.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>
        <RelatedAbout current={routes.history} />
        <Closing />
      </main>
    </>
  );
}

/** Service Charter (inventory §4 + §2) */
export function ServiceCharterPage() {
  return (
    <>
      <PageHero crumbs={aboutCrumbs("Service Charter")} title={serviceCharter.title} lead={serviceCharter.intro.join(" ")} image={serviceCharter.hero} />
      <main id="main">
        <Section tone="dark">
          <ul className={styles.highlights}>
            {serviceCharter.highlights.map((h, i) => (
              <li key={h.label} className={cx(styles.hl, "rv")} style={delay(100 + i * 110)}>
                <div className={styles.hlValue}>
                  {h.value}
                  <span>{h.unit}</span>
                </div>
                <div className={styles.hlLabel}>{h.label}</div>
              </li>
            ))}
          </ul>
        </Section>
        <Section>
          <SectionHead eyebrow="Our commitments" title="We at Medsure insist on first-place service" />
          <ol className={styles.commitments}>
            {serviceCharter.commitments.map((c, i) => (
              <li key={i} className={cx(styles.cItem, "rv")} style={delay(80 + (i % 4) * 70)}>
                <span className={styles.cNum}>{String(i + 1).padStart(2, "0")}</span>
                <p className={styles.cText}>{c}</p>
              </li>
            ))}
          </ol>
        </Section>
        <RelatedAbout current={routes.serviceCharter} />
        <Closing />
      </main>
    </>
  );
}

/** Values & Vision (inventory §5) */
export function ValuesPage() {
  return (
    <>
      <PageHero crumbs={aboutCrumbs("Values & Vision")} title={values.title} lead={values.body[0]} image={values.hero} />
      <main id="main">
        <Section>
          <Split title="Leading in service, quality, innovation and professionalism">
            <Prose paragraphs={values.body.slice(1)} />
          </Split>
          <ul className={styles.pillars}>
            {values.pillars.map((p, i) => (
              <li key={p} className={cx(styles.pillar, i === values.pillars.length - 1 && styles.pillarDark, "rv")} style={delay(120 + i * 90)}>
                <span className={styles.pNum}>{String(i + 1).padStart(2, "0")}</span>
                <span className={styles.pName}>{p}</span>
              </li>
            ))}
          </ul>
          <p className={cx(styles.quote, "rv")}>{values.closing}</p>
        </Section>
        <RelatedAbout current={routes.values} />
        <Closing />
      </main>
    </>
  );
}

/** Medsure — Giving back to the community (inventory §6) */
export function CommunityPage() {
  return (
    <>
      <PageHero crumbs={aboutCrumbs("Medsure in the Community")} title={community.title} lead={community.body[0]} image={community.hero} />
      <main id="main">
        <Section>
          <Split title="Helping the weak is at the top of our social priorities" aside={<Chips label="Projects we take part in" items={community.projects} />}>
            <Prose paragraphs={[community.body[1], community.ceo]} />
          </Split>
        </Section>
        <RelatedAbout current={routes.community} />
        <Closing />
      </main>
    </>
  );
}

/** Lloyd's Corporation (inventory §7) */
export function LloydsPage() {
  return (
    <>
      <PageHero crumbs={aboutCrumbs("Lloyd's Corporation")} title={lloyds.title} lead={lloyds.closing} image={lloyds.hero} />
      <main id="main">
        <Section>
          <ul className={styles.facts}>
            {lloyds.facts.map((f, i) => (
              <li key={f.value} className={cx(styles.fact, "rv")} style={delay(100 + i * 120)}>
                <span className={styles.factValue}>{f.value}</span>
                <span className={styles.factLabel}>{f.label}</span>
              </li>
            ))}
          </ul>
          <Split title="The foundation of the insurance industry, and its future" aside={<CardImage image={{ src: skyline, alt: "City skyline", position: "50% 50%" }} />}>
            <Prose paragraphs={lloyds.body} />
          </Split>
        </Section>
        <RelatedAbout current={routes.lloyds} />
        <Closing />
      </main>
    </>
  );
}
