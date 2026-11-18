import { routes } from "@/content/company";
import { careers } from "@/content/careers";
import { PageHero } from "../PageHero";
import { Section, SectionHead, Split, Prose } from "../Section";
import { CareersForm } from "../CareersForm";
import { Closing } from "../Closing";
import { Button } from "../Button";
import { cx, delay } from "@/lib/motion";
import styles from "./CareersPage.module.css";

/** Careers (inventory §15) */
export function CareersPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: routes.home }, { label: "Careers" }]}
        title={careers.title}
        lead={careers.lead}
        image={careers.hero}
        aside={<Button href="#apply" variant="glass">Apply now</Button>}
      />
      <main id="main">
        <Section>
          <SectionHead eyebrow="Career opportunities" title={careers.culture} />
          <ul className={styles.roles}>
            {careers.roles.map((r, i) => (
              <li key={r.title} className={cx(styles.role, "rv")} style={delay(120 + i * 100)}>
                <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={styles.roleTitle}>{r.title}</h3>
                <p className={styles.roleBody}>{r.body}</p>
                <a href="#apply" className={styles.roleLink}>Apply for this role</a>
              </li>
            ))}
            <li className={cx(styles.role, styles.hr, "rv")} style={delay(420)}>
              <span className={styles.num}>HR</span>
              <h3 className={styles.roleTitle}>{careers.hr.title}</h3>
              <p className={styles.roleBody}>{careers.hr.body}</p>
            </li>
          </ul>
        </Section>

        <Section id="apply" tone="alt" ruleTop>
          <div className={styles.apply}>
            <div>
              <div className={cx("eyebrow rv", styles.eyebrow)}><span className={styles.dot} aria-hidden="true" />Apply now</div>
              <h2 className={cx(styles.applyTitle, "rv")} style={delay(120)}>{careers.apply.title}</h2>
            </div>
            <div className={cx(styles.formCard, "rv")} style={delay(180)}>
              <CareersForm />
            </div>
          </div>
        </Section>

        <Section>
          <Split title={careers.team.title}>
            <Prose paragraphs={[careers.team.body]} />
          </Split>
        </Section>

        <Closing kicker={[`${careers.grow.title}!`, careers.grow.body]} />
      </main>
    </>
  );
}
