import { specialties } from "@/content/liability";
import { cx } from "@/lib/motion";
import styles from "./SpecialtyTabs.module.css";

/** Sticky tab bar linking every specialty page; the current one is highlighted. */
export function SpecialtyTabs({ current }: { current: string }) {
  return (
    <nav aria-label="Specialties" className={styles.bar}>
      <ul className={styles.list}>
        {specialties.map((s) => (
          <li key={s.slug}>
            <a
              href={s.href}
              className={cx(styles.tab, s.href === current && styles.active)}
              aria-current={s.href === current ? "page" : undefined}
            >
              {s.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
