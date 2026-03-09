import type { JSX } from "react";
import type { CaseStudy } from "../../types/home";
import PrimaryButton from "../common/PrimaryButton";
import SectionHeader from "../common/SectionHeader";
import styles from "./CaseStudiesSection.module.css";

interface CaseStudiesSectionProps {
  studies: CaseStudy[];
}

function CaseStudiesSection({ studies }: CaseStudiesSectionProps): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader label="Case Studies" title="Proven Transformations" dark centered />
        <div className={styles.grid}>
          {studies.map((study) => (
            <article key={study.title} className={styles.card}>
              <img className={styles.image} src={study.imageUrl} alt={study.imageAlt} />
              <div className={styles.overlay} />
              <div className={styles.content}>
                <p>{study.category}</p>
                <h3>{study.title}</h3>
                <span>{study.description}</span>
                <PrimaryButton variant="light">Read Success Story</PrimaryButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesSection;



