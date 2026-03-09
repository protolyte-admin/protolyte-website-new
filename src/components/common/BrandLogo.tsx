import type { JSX } from "react";
import styles from "./BrandLogo.module.css";

interface BrandLogoProps {
  darkText?: boolean;
  compactOnMobile?: boolean;
}

function BrandLogo({ darkText = false, compactOnMobile = false }: BrandLogoProps): JSX.Element {
  return (
    <div className={[styles.brand, compactOnMobile ? styles.compactOnMobile : ""].join(" ").trim()}>
      <img src="/images/protolyte-new-logo.png" alt="Protolyte logo" className={styles.icon} />
      <span className={darkText ? styles.textDark : styles.textLight}></span>
    </div>
  );
}

export default BrandLogo;
