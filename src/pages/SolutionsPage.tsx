import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { footerGroups, navItems } from "../data/homeData";
import { blueprintCards, industries, solutionsStats } from "../data/solutionsData";
import styles from "./SolutionsPage.module.css";
import type { JSX } from "react";

function SolutionsPage(): JSX.Element {
  return (
    <div className={styles.page}>
      <Navbar items={navItems} />

      <main className={styles.main}>
        <aside className={styles.sidebar}>
          <div>
            <h3>Industries</h3>
            <nav className={styles.industryNav}>
              {industries.map((industry) => (
                <button
                  key={industry.label}
                  type="button"
                  className={industry.active ? styles.industryActive : styles.industryItem}
                >
                  <span className="material-symbols-outlined">{industry.icon}</span>
                  <span>{industry.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className={styles.sidebarCta}>
            <p>Need a custom plan?</p>
            <span>Our engineers can build bespoke blueprints for your specific stack.</span>
            <button type="button">Contact Sales</button>
          </div>
        </aside>

        <section className={styles.content}>
          <div className={styles.contentHeader}>
            <div className={styles.headerTop}>
              <div className={styles.breadcrumbs}>
                <span>Home</span>
                <span className="material-symbols-outlined">chevron_right</span>
                <span>Solutions</span>
                <span className="material-symbols-outlined">chevron_right</span>
                <span className={styles.currentCrumb}>Financial Services</span>
              </div>
              <h1>Solution Blueprints</h1>
              <p>
                Architected AI workflows designed for enterprise-scale digital transformation. Our blueprints provide
                the foundational logic for deploying generative models across legacy banking systems.
              </p>
            </div>

            <button type="button" className={styles.downloadButton}>
              <span className="material-symbols-outlined">download</span>
              Download Whitepaper
            </button>
          </div>

          <div className={styles.tabs}>
            <button type="button" className={styles.tabActive}>
              Overview
            </button>
            <button type="button" className={styles.tab}>Architecture</button>
            <button type="button" className={styles.tab}>Performance Metrics</button>
            <button type="button" className={styles.tab}>Case Studies</button>
          </div>

          <div className={styles.cardGrid}>
            {blueprintCards.map((card) => (
              <article key={card.title} className={styles.card}>
                <div className={styles.cardHead}>
                  <div className={styles.cardIcon}>
                    <span className="material-symbols-outlined">{card.icon}</span>
                  </div>
                  <span className={card.statusTone === "success" ? styles.statusSuccess : styles.statusWarning}>
                    {card.status}
                  </span>
                </div>

                <div>
                  <h2>{card.title}</h2>
                  <p>{card.description}</p>
                </div>

                <div className={styles.metrics}>
                  {card.metrics.map((metric) => (
                    <div key={metric.key} className={styles.metricRow}>
                      <span className={styles.metricDot} />
                      <small>{metric.key}</small>
                      <strong>{metric.value}</strong>
                    </div>
                  ))}
                </div>

                <button type="button" className={styles.cardAction}>
                  {card.actionLabel}
                  <span className="material-symbols-outlined">arrow_outward</span>
                </button>
              </article>
            ))}
          </div>

          <div className={styles.statsBar}>
            {solutionsStats.map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <span className={stat.primary ? styles.statPrimary : styles.statValue}>{stat.value}</span>
                <small>{stat.label}</small>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer groups={footerGroups} />
    </div>
  );
}

export default SolutionsPage;
