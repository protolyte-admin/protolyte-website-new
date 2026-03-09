import Navbar from "../components/layout/Navbar";
import ServicesFooter from "../components/layout/Footer";
import ServicesHeroSection from "../components/services/sections/ServicesHeroSection";
import ServicesGridSection from "../components/services/sections/ServicesGridSection";
import WhyProtolyteSection from "../components/services/sections/WhyProtolyteSection";
import {
  serviceCards,
  serviceHeroContent,
  servicesFooterGroups,
  servicesNavItems,
  whyFeatures,
  whyImage,
} from "../data/servicesData";
import styles from "./ServicesPage.module.css";
import type { JSX } from "react";

function ServicesPage(): JSX.Element {
  return (
    <div className={styles.page}>
      <Navbar items={servicesNavItems} />
      <main>
        <ServicesHeroSection content={serviceHeroContent} />
        <ServicesGridSection items={serviceCards} />
        <WhyProtolyteSection features={whyFeatures} image={whyImage} />
      </main>
      <ServicesFooter groups={servicesFooterGroups} />
    </div>
  );
}

export default ServicesPage;
