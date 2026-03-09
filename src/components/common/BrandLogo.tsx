import type { JSX } from "react";
import styles from "./BrandLogo.module.css";

interface BrandLogoProps {
  darkText?: boolean;
}

function BrandLogo({ darkText = false }: BrandLogoProps): JSX.Element {
  return (
    <div className={styles.brand}>
      <img src="/images/protolyte-new-logo.png" alt="Protolyte logo" className={styles.icon} />
      <span className={darkText ? styles.textDark : styles.textLight}></span>
    </div>
  );
}

export default BrandLogo;
