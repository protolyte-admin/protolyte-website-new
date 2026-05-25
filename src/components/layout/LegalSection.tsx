import type { JSX, ReactNode } from "react";
import styles from "./Footer.module.css";

interface LegalSectionProps {
  title: string;
  children: ReactNode;
}

function LegalSection({
  title,
  children,
}: LegalSectionProps): JSX.Element {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.sectionContent}>
        {children}
      </div>
    </section>
  );
}

export default LegalSection;