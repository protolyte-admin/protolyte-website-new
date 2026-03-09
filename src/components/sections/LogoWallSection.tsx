import type { JSX } from "react";
import styles from "./LogoWallSection.module.css";

interface LogoWallSectionProps {
  brands: string[];
}

function LogoWallSection({ brands }: LogoWallSectionProps): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>Trusted by industry leaders</p>
        <div className={styles.list}>
          {brands.map((brand) => (
            <span key={brand}>{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoWallSection;
