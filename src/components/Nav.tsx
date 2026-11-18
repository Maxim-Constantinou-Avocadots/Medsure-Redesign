"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks, company } from "@/content/site";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { cx, delay } from "@/lib/motion";
import styles from "./Nav.module.css";

const SCROLLED_AT = 60;
const HIDE_AFTER = 720;

/** Fixed nav: transparent over the hero, frosted once scrolled, hides on scroll down. */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      setScrolled(y > SCROLLED_AT);
      if (y > HIDE_AFTER && y > lastY.current + 2) setHidden(true);
      else if (y < lastY.current - 2 || y <= HIDE_AFTER) setHidden(false);
      lastY.current = y;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      aria-label="Main"
      className={cx(styles.nav, scrolled && styles.scrolled, hidden && styles.hidden)}
      onFocus={() => setHidden(false)}
    >
      <a href="#top" className="load-in" style={delay("1.05s")} aria-label="Medsure home">
        <Logo />
      </a>

      <div className={cx(styles.links, "load-in")} style={delay("1.15s")}>
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} className="ul">
            {link.label}
          </a>
        ))}
      </div>

      <div className={cx(styles.right, "load-in")} style={delay("1.25s")}>
        <div className={styles.lang}>
          <a href="#top" className="ul" aria-current="true">EN</a>
          <span className={styles.sep}>/</span>
          <a href="#top" className={cx("ul", styles.inactive)} lang="el">EL</a>
        </div>
        <Button href={company.phoneHref} variant="pill">Call us</Button>
      </div>
    </nav>
  );
}
