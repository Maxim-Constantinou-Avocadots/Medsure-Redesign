import { useEffect, useRef, useState } from "react";
import { company, mainNav, routes } from "@/content/company";
import { Logo } from "./Logo";
import { Button } from "./Button";
import { ArrowIcon, ChevronDown } from "./icons";
import { cx, delay } from "@/lib/motion";
import styles from "./Nav.module.css";

const SCROLLED_AT = 60;
const HIDE_AFTER = 720;

function isActive(pathname: string, href: string, children?: { href: string }[]) {
  if (pathname === href) return true;
  return !!children?.some((c) => c.href === pathname);
}

/**
 * Fixed nav: transparent over the hero, frosted once scrolled, hides on scroll down.
 * Desktop: dropdown panels on hover / keyboard focus. Mobile: full-screen menu.
 */
export function Nav({ pathname }: { pathname: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const lastY = useRef(0);
  const navRef = useRef<HTMLElement>(null);
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

  // Lock page scroll and close on Escape while the mobile menu is open
  useEffect(() => {
    if (!menuOpen) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        ref={navRef}
        aria-label="Main"
        className={cx(styles.nav, (scrolled || menuOpen) && styles.scrolled, hidden && !menuOpen && styles.hidden)}
        onFocus={() => setHidden(false)}
      >
        <a href={routes.home} className="load-in" style={delay("0.15s")} aria-label="Medsure home">
          <Logo />
        </a>

        <ul className={cx(styles.links, "load-in")} style={delay("0.25s")}>
          {mainNav.map((item) => (
            <li key={item.href} className={styles.item}>
              <a
                href={item.href}
                className={cx("ul", styles.top, isActive(pathname, item.href, item.children) && styles.active)}
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
                {item.children && <ChevronDown className={styles.chev} />}
              </a>
              {item.children && (
                <div className={styles.panel}>
                  <div className={styles.panelInner}>
                    <a href={item.href} className={styles.panelLead}>
                      <span>{item.label}</span>
                      <ArrowIcon />
                    </a>
                    <ul className={styles.panelList}>
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <a
                            href={child.href}
                            className={cx(styles.panelLink, pathname === child.href && styles.panelActive)}
                            aria-current={pathname === child.href ? "page" : undefined}
                          >
                            <span className={styles.panelLabel}>{child.label}</span>
                            {child.description && <span className={styles.panelDesc}>{child.description}</span>}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className={cx(styles.right, "load-in")} style={delay("0.35s")}>
          <div className={styles.lang}>
            <a href="#top" className="ul" aria-current="true">EN</a>
            <span className={styles.sep}>/</span>
            <a href="#top" className={cx("ul", styles.inactive)} lang="el">EL</a>
          </div>
          <Button href={company.phoneHref} variant="pill" className={styles.call}>Call us</Button>
          <button
            type="button"
            className={styles.burger}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className={cx(styles.burgerLines, menuOpen && styles.burgerOpen)} aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={cx(styles.mobile, menuOpen && styles.mobileOpen)} aria-hidden={!menuOpen} {...(!menuOpen ? { inert: "" } : {})}>
        <ul className={styles.mList}>
          <li className={styles.mItem}>
            <a href={routes.home} className={styles.mTop}>Home</a>
          </li>
          {mainNav.map((item, i) => (
            <li key={item.href} className={styles.mItem} style={delay(`${80 + i * 50}ms`)}>
              {item.children ? (
                <>
                  <button
                    type="button"
                    className={styles.mTop}
                    aria-expanded={openSection === item.href}
                    onClick={() => setOpenSection((s) => (s === item.href ? null : item.href))}
                  >
                    {item.label}
                    <ChevronDown className={cx(styles.mChev, openSection === item.href && styles.mChevOpen)} />
                  </button>
                  <div className={cx(styles.mPanel, openSection === item.href && styles.mPanelOpen)}>
                    <div>
                      <a href={item.href} className={styles.mSub}>Overview</a>
                      {item.children.map((child) => (
                        <a key={child.href} href={child.href} className={styles.mSub}>
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <a href={item.href} className={styles.mTop}>{item.label}</a>
              )}
            </li>
          ))}
        </ul>
        <div className={styles.mFoot}>
          <a href={company.phoneHref} className={styles.mContact}>{company.phone}</a>
          <a href={`mailto:${company.email}`} className={styles.mContact}>{company.email}</a>
          <span className={styles.mLang}>EN / <span lang="el">EL</span></span>
        </div>
      </div>
    </>
  );
}
