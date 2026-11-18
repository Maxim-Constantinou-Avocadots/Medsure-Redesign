import { routes } from "@/content/company";
import { privacy, type Block } from "@/content/privacy";
import skyline from "@/assets/images/skyline.jpg";
import { PageHero } from "../PageHero";
import styles from "./PrivacyPage.module.css";

function renderBlock(b: Block, i: number) {
  switch (b.type) {
    case "p":
      return <p key={i}>{b.text}</p>;
    case "h3":
      return <h3 key={i}>{b.text}</h3>;
    case "ul":
      return (
        <ul key={i}>
          {b.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      );
    case "address":
      return (
        <address key={i}>
          {b.lines.map((l, j) => (
            <span key={j}>
              {l}
              <br />
            </span>
          ))}
        </address>
      );
  }
}

/** Privacy Policy (inventory §17) — verbatim legal text with a section index. */
export function PrivacyPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: routes.home }, { label: "Privacy Policy" }]}
        title={privacy.title}
        lead={`Last updated: ${privacy.lastUpdated}`}
        image={{ src: skyline, alt: "City skyline", position: "50% 40%" }}
        compact
      />
      <main id="main" className={styles.wrap}>
        <aside className={styles.toc} aria-label="On this page">
          <div className={styles.tocLabel}>On this page</div>
          <ol>
            {privacy.sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.title.replace(/^\d+\.\s*/, "")}</a>
              </li>
            ))}
          </ol>
        </aside>
        <article className={styles.body}>
          <div className={styles.intro}>
            {privacy.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <address>
              {privacy.introAddress.map((l) => (
                <span key={l}>
                  {l}
                  <br />
                </span>
              ))}
            </address>
          </div>
          {privacy.sections.map((s) => (
            <section key={s.id} id={s.id} className={styles.section}>
              <h2>{s.title}</h2>
              {s.blocks.map(renderBlock)}
            </section>
          ))}
        </article>
      </main>
    </>
  );
}
