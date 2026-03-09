import type { JSX } from "react";
import type { WhyFeature } from "../../../types/services";
import styles from "./WhyProtolyteSection.module.css";

interface WhyProtolyteSectionProps {
  features: WhyFeature[];
  image: {
    src: string;
    alt: string;
  };
}

function WhyProtolyteSection({ features, image }: WhyProtolyteSectionProps): JSX.Element {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.copySide}>
          <h2>Enterprise-Grade Innovation</h2>
          <p>
            We combine cutting-edge AI research with robust engineering practices to deliver measurable business
            value. Our systems are built to endure the rigors of global scale.
          </p>

          <div className={styles.features}>
            {features.map((feature) => (
              <div key={feature.title} className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <span className="material-symbols-outlined">{feature.icon}</span>
                </div>
                <div>
                  <h4>{feature.title}</h4>
                  <span>{feature.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.visualSide}>
          <div className={styles.imageWrap}>
            <div className={styles.overlay} />
            <img src={image.src} alt={image.alt} />
            <div className={styles.livePanel}>
              <div>
                <span className={styles.liveDot} />
                <small>Live Infrastructure</small>
              </div>
              <p>Processing 4.2PB of enterprise data daily.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyProtolyteSection;



