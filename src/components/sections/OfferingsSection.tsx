import type { JSX } from "react";
import type { Offering } from "../../types/home";
import SectionHeader from "../common/SectionHeader";
import styles from "./OfferingsSection.module.css";

interface OfferingsSectionProps {
  items: Offering[];
}

function OfferingsSection({ items }: OfferingsSectionProps): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headingRow}>
          <SectionHeader label="Core Offerings" title="Tailored Solutions for Scalable Growth" />
          <p className={styles.subcopy}>
            Comprehensive digital strategies engineered to future-proof your business operations through
            specialized AI integration.
          </p>
        </div>

        <div className={styles.grid}>
          {items.map((item) => (
            <article key={item.title} className={styles.card}>
              <div className={styles.iconWrap}>
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.href} className={styles.more}>
                Learn more <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OfferingsSection;
