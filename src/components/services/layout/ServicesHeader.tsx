import { useState, type JSX } from "react";
import { NavLink } from "react-router-dom";
import type { ServicesNavItem } from "../../../types/services";
import PrimaryButton from "../../common/PrimaryButton";
import styles from "./ServicesHeader.module.css";

interface ServicesHeaderProps {
  items: ServicesNavItem[];
}

function ServicesHeader({ items }: ServicesHeaderProps): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);

  const renderItem = (item: ServicesNavItem, mobile = false): JSX.Element => {
    const className = mobile ? styles.mobileLink : item.active ? styles.activeLink : styles.link;

    if (item.href.startsWith("/")) {
      return (
        <NavLink
          key={item.label}
          to={item.href}
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) => [mobile ? styles.mobileLink : styles.link, isActive ? styles.activeLink : ""].join(" ").trim()}
        >
          {item.label}
        </NavLink>
      );
    }

    return (
      <a key={item.label} href={item.href} className={className} onClick={() => setMenuOpen(false)}>
        {item.label}
      </a>
    );
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.brand}>
            <img src="/images/protolyte-new-logo.png" alt="Protolyte logo" className={styles.brandImage} />
            <h1>
              Protolyte <span>Systems</span>
            </h1>
          </div>

          <nav className={styles.nav}>{items.map((item) => renderItem(item))}</nav>
        </div>

        <div className={styles.right}>
          <label className={styles.search}>
            <span className="material-symbols-outlined">search</span>
            <input type="text" placeholder="Search solutions..." />
          </label>
          <PrimaryButton className={styles.quoteButton}>Get a Quote</PrimaryButton>
          <button className={styles.menuToggle} onClick={() => setMenuOpen((prev) => !prev)} aria-label="Toggle menu">
            {menuOpen ? (
              <span className={styles.closeIcon} aria-hidden="true">x</span>
            ) : (
              <span className={styles.hamburger} aria-hidden="true">
                <span className={styles.bar} />
                <span className={styles.bar} />
                <span className={styles.bar} />
              </span>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {items.map((item) => renderItem(item, true))}
          <PrimaryButton className={styles.mobileCta} onClick={() => setMenuOpen(false)}>
            Get a Quote
          </PrimaryButton>
        </div>
      )}
    </header>
  );
}

export default ServicesHeader;
