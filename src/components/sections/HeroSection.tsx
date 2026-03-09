import type { JSX } from "react";
import type { HeroContent } from "../../types/home";
import PrimaryButton from "../common/PrimaryButton";
import styles from "./HeroSection.module.css";

interface HeroSectionProps {
  content: HeroContent;
}

function HeroSection({ content }: HeroSectionProps): JSX.Element {
  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.copyBlock}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <span>{content.badge}</span>
          </div>

          <h1 className={styles.title}>
            {content.title} <span>{content.highlightedTitle}</span>
          </h1>

          <p className={styles.description}>{content.description}</p>

          <div className={styles.actions}>
            <PrimaryButton>{content.primaryAction}</PrimaryButton>
          
          </div>
        </div>

        <div className={styles.visualWrap}>
          <div className={styles.blur} />
          <div className={styles.visualFrame}>
            <img className={styles.image} src={content.imageUrl} alt={content.imageAlt} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
