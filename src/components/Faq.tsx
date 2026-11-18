"use client";

import { useId, useState } from "react";
import { routes } from "@/content/company";
import { faqs } from "@/content/home";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { PlusIcon } from "./icons";
import { cx, delay } from "@/lib/motion";
import styles from "./Faq.module.css";

/** Accordion — one answer open at a time, height animated with grid-template-rows. */
export function Faq() {
  const [open, setOpen] = useState<number>(0);
  const baseId = useId();

  return (
    <Reveal id="faq" className={styles.section}>
      <div className={cx(styles.rule, "rv-rule")} aria-hidden="true" />
      <div className={styles.left}>
        <h2 className={cx(styles.title, "rv")}>Answers that help you decide with confidence</h2>
        <div className="rv" style={delay(200)}>
          <div className={styles.help}>
            Need help?
            <br />
            Get in touch with our team
          </div>
          <Button href={routes.contact}>Contact us</Button>
        </div>
      </div>

      <div className={styles.list}>
        {faqs.map((item, i) => {
          const isOpen = open === i;
          const qId = `${baseId}-q${i}`;
          const aId = `${baseId}-a${i}`;
          return (
            <div key={item.q} className={cx(styles.item, isOpen && styles.open, "rv")} style={delay(100 + i * 80)}>
              <button
                type="button"
                id={qId}
                className={styles.question}
                aria-expanded={isOpen}
                aria-controls={aId}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{item.q}</span>
                <span className={styles.icon} aria-hidden="true">
                  <PlusIcon />
                </span>
              </button>
              <div id={aId} role="region" aria-labelledby={qId} className={styles.panel}>
                <div>
                  <p className={styles.answer}>{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Reveal>
  );
}
