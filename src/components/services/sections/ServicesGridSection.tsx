import type { JSX } from "react";
import type { ServiceCard } from "../../../types/services";
import styles from "./ServicesGridSection.module.css";

interface ServicesGridSectionProps {
  items: ServiceCard[];
}

function ServicesGridSection({ items }: ServicesGridSectionProps): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {items.map((item) => (
            <article key={item.title} className={styles.card}>
              <div className={styles.iconWrap}>
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href={item.href}>
                Learn More <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesGridSection;
