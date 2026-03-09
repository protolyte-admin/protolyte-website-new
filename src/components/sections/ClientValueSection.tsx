import type { JSX } from "react";
import type { StatItem } from "../../types/home";
import SectionHeader from "../common/SectionHeader";
import styles from "./ClientValueSection.module.css";

interface ClientValueSectionProps {
  stats: StatItem[];
  bulletPoints: string[];
}

function ClientValueSection({ stats, bulletPoints }: ClientValueSectionProps): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.statsWrap}>
          <div className={styles.glow} />
          <div className={styles.statsGrid}>
            {stats.map((item) => (
              <article key={item.label} className={styles.statCard}>
                <span>{item.value}</span>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <SectionHeader label="Client Value" title="Measurable Impact Through Intelligent Design" />
          <p className={styles.copy}>
            We do not just implement technology; we engineer outcomes. Our solutions are designed to integrate
            seamlessly into your current workflow while providing the leap forward your organization needs.
          </p>
          <ul className={styles.list}>
            {bulletPoints.map((point) => (
              <li key={point}>
                <span className="material-symbols-outlined">check_circle</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ClientValueSection;



