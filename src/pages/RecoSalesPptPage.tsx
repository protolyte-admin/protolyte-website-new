import type { JSX, ReactNode } from "react";
import Navbar from "../components/layout/Navbar";
import { navItems } from "../data/homeData";
import styles from "./RecoSalesPptPage.module.css";

interface SlideProps {
  children: ReactNode;
}

interface MetricCardProps {
  eyebrow: string;
  value: string;
  label: string;
  icon: string;
  accent: "blue" | "orange";
}

function PresentationSlide({ children }: SlideProps): JSX.Element {
  return (
    <section className={styles.slideViewport}>
      <article className={styles.slideFrame}>{children}</article>
    </section>
  );
}

function MetricCard({ eyebrow, value, label, icon, accent }: MetricCardProps): JSX.Element {
  const accentClass = accent === "blue" ? styles.metricIconBlue : styles.metricIconOrange;

  return (
    <div className={styles.metricCard}>
      <div className={styles.metricHeader}>
        <div>
          <p className={styles.metricEyebrow}>{eyebrow}</p>
          <p className={styles.metricValue}>{value}</p>
          <p className={styles.metricLabel}>{label}</p>
        </div>
        <div className={`${styles.metricSymbol} ${accentClass}`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
      </div>
    </div>
  );
}

function RecoSalesPptPage(): JSX.Element {
  return (
    <main className={styles.page}>
      <Navbar items={navItems} />
      <div className={styles.deck}>
        <PresentationSlide>
          <div className={styles.slideBackground}>
            <div className={styles.blobOne} />
            <div className={styles.blobTwo} />
            <svg className={styles.grid} aria-hidden="true" viewBox="0 0 1280 720" preserveAspectRatio="none">
              <defs>
                <pattern id="recosales-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="1280" height="720" fill="url(#recosales-grid)" />
            </svg>
          </div>

          <header className={styles.header}>
            <div className={styles.brandBlock}>
              <div className={styles.brandIcon}>
                <span className="material-symbols-outlined">layers</span>
              </div>
              <div className={styles.brandText}>
                <p>RecoSales</p>
                <span>by Protolyte Systems</span>
              </div>
            </div>

            <div className={styles.launchText}>Q3 2026 PRODUCT LAUNCH</div>
          </header>

          <div className={styles.content}>
            <div className={styles.leftColumn}>
              <div className={styles.betaPill}>
                <span className={styles.betaDot} />
                <p>Cooking Up !</p>
              </div>

              <div className={styles.heroCopy}>
                <h1>
                  AI-Powered <br />
                  <span className={styles.blueText}>Marketing</span>{" "}
                  <span className={styles.orangeText}>Automation</span>
                </h1>

                <p>
                  Boost sales and revenue with intelligent segmentation and autonomous campaign recommendations across
                  Email, SMS, and WhatsApp.
                </p>
              </div>

              <div className={styles.featureCards}>
                <div className={styles.glassCard}>
                  <div className={`${styles.featureIcon} ${styles.featureIconBlue}`}>
                    <span className="material-symbols-outlined">groups_3</span>
                  </div>
                  <div>
                    <p className={styles.featureEyebrow}>Smart</p>
                    <p className={styles.featureLabel}>Segmentation</p>
                  </div>
                </div>

                <div className={styles.glassCard}>
                  <div className={`${styles.featureIcon} ${styles.featureIconOrange}`}>
                    <span className="material-symbols-outlined">auto_awesome</span>
                  </div>
                  <div>
                    <p className={styles.featureEyebrow}>Automated</p>
                    <p className={styles.featureLabel}>Campaigns</p>
                  </div>
                </div>
              </div>

              <div className={styles.checkRow}>
                <p>
                  <span className="material-symbols-outlined">check_circle</span>
                  Seamless CRM Integration
                </p>
                <p>
                  <span className="material-symbols-outlined">check_circle</span>
                  Real-time ROI Tracking
                </p>
              </div>
            </div>

            <div className={styles.rightColumn}>
              <div className={styles.ringLarge} />
              <div className={styles.ringSmall} />

              <div className={styles.dashboardShell}>
                <div className={styles.dashboardWindow}>
                  <div className={styles.dashboardTopbar}>
                    <div className={styles.windowDots}>
                      <span className={styles.dotRed} />
                      <span className={styles.dotYellow} />
                      <span className={styles.dotGreen} />
                    </div>
                    <div className={styles.topbarSearch} />
                  </div>

                  <div className={styles.dashboardBody}>
                    <div className={styles.chartCard}>
                      <div className={styles.chartHeader}>
                        <p>Revenue Growth</p>
                        <p className={styles.chartGain}>
                          +15% <span className="material-symbols-outlined">north</span>
                        </p>
                      </div>

                      <div className={styles.chartBars}>
                        <span style={{ height: "40%" }} />
                        <span style={{ height: "60%" }} />
                        <span style={{ height: "50%" }} />
                        <span style={{ height: "75%" }} />
                        <span style={{ height: "90%" }} />
                        <span style={{ height: "100%" }} />
                      </div>
                    </div>

                    <MetricCard eyebrow="Loyalty Email" value="17%" label="CTR" icon="mail" accent="blue" />
                    <MetricCard eyebrow="Upsell SMS" value="24%" label="ROI" icon="sms" accent="orange" />

                    <div className={styles.recommendationCard}>
                      <div className={styles.recommendationIcon}>
                        <span className="material-symbols-outlined">smart_toy</span>
                      </div>
                      <div>
                        <p className={styles.recommendationEyebrow}>AI Recommendation</p>
                        <p className={styles.recommendationText}>Send "Churn Risk" campaign to 450 users</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.integrationBadge}>
                <div className={styles.integrationIcon}>
                  <span className="material-symbols-outlined">hub</span>
                </div>
                <div>
                  <p>Integrated with</p>
                  <strong>HubSpot CRM</strong>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.footerStripe}>
            <div className={styles.footerStripeBlue} />
            <div className={styles.footerStripeOrange} />
          </div>
        </PresentationSlide>

        <PresentationSlide>
          <div className={styles.problemSlideBackground}>
            <div className={styles.problemOverlay} />
          </div>

          <div className={styles.problemSlideContent}>
            <header className={styles.problemHeader}>
              <h2>The Problem: Generic Campaigns Miss Revenue</h2>
            </header>

            <div className={styles.problemGrid}>
              <div className={styles.painPointsList}>
                <article className={styles.painPointItem}>
                  <div className={styles.painPointIcon}>
                    <span className="material-symbols-outlined">target</span>
                  </div>
                  <div className={styles.painPointText}>
                    <h3>Imprecise Targeting</h3>
                    <p>
                      Businesses struggle to identify the right customer segments, leading to wasted ad spend and low
                      engagement.
                    </p>
                  </div>
                </article>

                <article className={styles.painPointItem}>
                  <div className={styles.painPointIcon}>
                    <span className="material-symbols-outlined">mark_email_read</span>
                  </div>
                  <div className={styles.painPointText}>
                    <h3>"Batch and Blast" Fatigue</h3>
                    <p>
                      Generic, one-size-fits-all campaigns annoy customers, resulting in high unsubscribe rates and
                      increased churn.
                    </p>
                  </div>
                </article>

                <article className={styles.painPointItem}>
                  <div className={styles.painPointIcon}>
                    <span className="material-symbols-outlined">timer</span>
                  </div>
                  <div className={styles.painPointText}>
                    <h3>Manual Inefficiency</h3>
                    <p>
                      Campaign management is slow, error-prone, and disconnected from real-time customer behavioral
                      data.
                    </p>
                  </div>
                </article>

                <article className={styles.painPointItem}>
                  <div className={styles.painPointIcon}>
                    <span className="material-symbols-outlined">trending_down</span>
                  </div>
                  <div className={styles.painPointText}>
                    <h3>Limited ROI Visibility</h3>
                    <p>
                      Lack of unified insights makes it impossible to attribute revenue or optimize spend across Email,
                      SMS, and WhatsApp.
                    </p>
                  </div>
                </article>
              </div>

              <aside className={styles.statsColumn}>
                <div className={styles.statsHeading}>Why Solve This Now?</div>

                <article className={styles.statCard}>
                  <span className={styles.statValue}>71%</span>
                  <span className={styles.statLabel}>
                    of consumers expect personalized interactions from companies
                  </span>
                  <span className={styles.statSource}>Source: McKinsey</span>
                </article>

                <article className={styles.statCard}>
                  <span className={styles.statValue}>89%</span>
                  <span className={styles.statLabel}>
                    of leaders say personalization is crucial for success in the next 3 years
                  </span>
                  <span className={styles.statSource}>Source: Twilio</span>
                </article>
{/* 
                <article className={`${styles.statCard} ${styles.statCardAccent}`}>
                  <span className={`${styles.statValue} ${styles.statValuePositive}`}>+15%</span>
                  <span className={styles.statLabel}>Potential revenue lift driven by effective personalization</span>
                  <span className={styles.statSource}>Source: McKinsey</span>
                </article> */}
              </aside>
            </div>

            {/* <footer className={styles.problemFooterBrand}>
              <span className="material-symbols-outlined">layers</span>
              <p>RecoSales by Protolyte Systems</p>
            </footer> */}
          </div>
        </PresentationSlide>

        <PresentationSlide>
          <div className={styles.solutionSlide}>
            <header className={styles.solutionHeader}>
              <div>
                <h2>RecoSales Solution Overview</h2>
                <p>End-to-end AI marketing automation engine</p>
              </div>

            
            </header>

            <div className={styles.solutionContent}>
              <div className={styles.workflowWrap}>
                <div className={styles.connectionLine} />

                <article className={`${styles.stepCard} ${styles.stepCardBlue}`}>
                  <div className={`${styles.iconCircle} ${styles.iconBlue}`}>
                    <span className="material-symbols-outlined">database</span>
                  </div>
                  <h3>Analyze Data</h3>
                  <p>
                    Ingests purchase history, CRM records, and engagement metrics to build a unified customer view.
                  </p>
                </article>

                <article className={`${styles.stepCard} ${styles.stepCardPurple}`}>
                  <div className={`${styles.iconCircle} ${styles.iconPurple}`}>
                    <span className="material-symbols-outlined">groups_3</span>
                  </div>
                  <h3>Smart Segmentation</h3>
                  <p>
                    AI auto-clusters users into groups like "High Value", "Churn Risk", and "Recent Buyers".
                  </p>
                </article>

                <article className={`${styles.stepCard} ${styles.stepCardOrange}`}>
                  <div className={`${styles.iconCircle} ${styles.iconOrange}`}>
                    <span className="material-symbols-outlined">lightbulb</span>
                  </div>
                  <h3>Campaign Ideas</h3>
                  <p>Generates personalized recommendations with predicted impact like Upsell ROI +24%.</p>
                </article>

                <article className={`${styles.stepCard} ${styles.stepCardGreen}`}>
                  <div className={`${styles.iconCircle} ${styles.iconGreen}`}>
                    <span className="material-symbols-outlined">send</span>
                  </div>
                  <h3>Multi-Channel Execution</h3>
                  <p>One-click deployment across Email, SMS, and WhatsApp with customizable templates.</p>
                </article>

                <article className={`${styles.stepCard} ${styles.stepCardRed}`}>
                  <div className={`${styles.iconCircle} ${styles.iconRed}`}>
                    <span className="material-symbols-outlined">pie_chart</span>
                  </div>
                  <h3>Continuous Learning</h3>
                  <p>Tracks performance to refine future AI recommendations automatically.</p>
                </article>

                <div className={styles.loopArrow} />
                <div className={styles.loopLabel}>Self-Optimizing Feedback Loop</div>
              </div>

              <section className={styles.insightsBox}>
                <div className={styles.insightText}>
                  <span className={`${styles.insightIcon} material-symbols-outlined`}>smart_toy</span>
                  <div>
                    <p className={styles.insightTitle}>Why RecoSales?</p>
                    <p className={styles.insightDescription}>
                      From raw data to revenue in minutes, not days. No manual segmentation required.
                    </p>
                  </div>
                </div>

                <div className={styles.insightMetric}>
                  <p>100%</p>
                  <span>Automated Workflow</span>
                </div>
              </section>

              {/* <footer className={styles.solutionFooterBrand}>
                <span className="material-symbols-outlined">layers</span>
                <p>RecoSales by Protolyte Systems</p>
              </footer> */}
            </div>
          </div>
        </PresentationSlide>

        <PresentationSlide>
          <div className={styles.workflowDetailSlide}>
            <header className={styles.workflowDetailHeader}>
              <div className={styles.workflowTitleBlock}>
                <div className={styles.workflowAccentBar} />
                <div>
                  <h2>How It Works: 5-Stage Workflow</h2>
                  <p>Automated path from raw data to optimized revenue</p>
                </div>
              </div>

              <div className={styles.workflowEngineLabel}>RecoSales Engine</div>
            </header>

            <div className={styles.workflowDetailContent}>
              <aside className={styles.stepperPanel}>
                <article className={styles.stepItem}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepContent}>
                    <h4>Data Onboarding</h4>
                    <p>Seamlessly upload CSVs or connect CRM like HubSpot or Salesforce for instant validation.</p>
                  </div>
                </article>

                <article className={styles.stepItem}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepContent}>
                    <h4>AI Segmentation</h4>
                    <p>Engine automatically clusters users into High Value, Churn Risk, and Recent Buyer groups.</p>
                  </div>
                </article>

                <article className={styles.stepItem}>
                  <div className={`${styles.stepNumber} ${styles.stepNumberAccent}`}>3</div>
                  <div className={styles.stepContent}>
                    <h4 className={styles.stepHeadingAccent}>Campaign Recommendations</h4>
                    <p>AI generates ideas like Loyalty Email with predicted metrics such as CTR +17%.</p>
                  </div>
                </article>

                <article className={styles.stepItem}>
                  <div className={styles.stepNumber}>4</div>
                  <div className={styles.stepContent}>
                    <h4>Campaign Creation</h4>
                    <p>One-click content editing and execution across Email, SMS, and WhatsApp channels.</p>
                  </div>
                </article>

                <article className={styles.stepItem}>
                  <div className={styles.stepNumber}>5</div>
                  <div className={styles.stepContent}>
                    <h4>Reporting &amp; Optimization</h4>
                    <p>Real-time performance tracking feeds back into AI to refine future recommendations.</p>
                  </div>
                </article>
              </aside>

              <section className={styles.diagramContainer}>
                <div className={styles.diagramHeader}>
                  <p>System Architecture View</p>

                  <div className={styles.diagramBadge}>
                    <span className="material-symbols-outlined">bolt</span>
                    <span>Live Processing</span>
                  </div>
                </div>

                <div className={styles.diagramImageWrapper}>
                  <img
                    className={styles.diagramImage}
                    src="/images/recosales_design.jpeg"
                    alt="RecoSales Product Workflow Diagram"
                  />
                </div>
              </section>
            </div>

            {/* <footer className={styles.workflowFooterBrand}>
              <span className="material-symbols-outlined">layers</span>
              <p>RecoSales by Protolyte Systems</p>
            </footer> */}
          </div>
        </PresentationSlide>

        <PresentationSlide>
          <div className={styles.impactSlide}>
            <header className={styles.impactHeader}>
              <div>
                <div className={styles.impactAccentLine} />
                <h2>Business Impact and ROI</h2>
                <p>Measurable outcomes from AI-driven personalization</p>
              </div>

              <div className={styles.performanceBadge}>
                <span className="material-symbols-outlined">trending_up</span>
                <span>Performance Metrics</span>
              </div>
            </header>

            <div className={styles.impactContent}>
              <section className={styles.kpiSection}>
                <article className={`${styles.kpiCard} ${styles.cardRevenue}`}>
                  <div className={`${styles.kpiIconWrapper} ${styles.bgOrangeSoft}`}>
                    <span className="material-symbols-outlined">trending_up</span>
                  </div>
                  <div>
                    <h3 className={styles.kpiValue}>5-15%</h3>
                    <h4 className={styles.kpiLabel}>Revenue Lift</h4>
                    <p className={styles.kpiDesc}>
                      Personalization drives significant top-line growth by delivering intent-led offers.
                    </p>
                    <div className={styles.sourceTag}>Source: McKinsey</div>
                  </div>
                </article>

                <article className={`${styles.kpiCard} ${styles.cardEfficiency}`}>
                  <div className={`${styles.kpiIconWrapper} ${styles.bgBlueSoft}`}>
                    <span className="material-symbols-outlined">my_location</span>
                  </div>
                  <div>
                    <h3 className={styles.kpiValue}>
                      3x <span>Efficiency</span>
                    </h3>
                    <h4 className={styles.kpiLabel}>Targeting Precision</h4>
                    <p className={styles.kpiDesc}>
                      Eliminate wasted ad spend by targeting only high-intent segments automatically.
                    </p>
                    <div className={styles.sourceTag}>Internal Benchmark</div>
                  </div>
                </article>

                <article className={`${styles.kpiCard} ${styles.cardSpeed}`}>
                  <div className={`${styles.kpiIconWrapper} ${styles.bgGreenSoft}`}>
                    <span className="material-symbols-outlined">bolt</span>
                  </div>
                  <div>
                    <h3 className={styles.kpiValue}>
                      -80% <span>Time</span>
                    </h3>
                    <h4 className={styles.kpiLabel}>Faster Go-to-Market</h4>
                    <p className={styles.kpiDesc}>
                      Launch complex multi-channel campaigns in minutes, not days, with AI automation.
                    </p>
                    <div className={styles.sourceTag}>Operational Impact</div>
                  </div>
                </article>

                <article className={`${styles.kpiCard} ${styles.cardChurn}`}>
                  <div className={`${styles.kpiIconWrapper} ${styles.bgPurpleSoft}`}>
                    <span className="material-symbols-outlined">shield_person</span>
                  </div>
                  <div>
                    <h3 className={styles.kpiValue}>
                      Lower <span>Churn</span>
                    </h3>
                    <h4 className={styles.kpiLabel}>Customer Retention</h4>
                    <p className={styles.kpiDesc}>
                      Proactively identify at-risk customers and engage them with tailored win-back offers.
                    </p>
                    <div className={styles.sourceTag}>Lifecycle Optimization</div>
                  </div>
                </article>
              </section>

              <aside className={styles.marketSection}>
                <div className={styles.marketHeader}>
                  <h3>Market Tailwinds</h3>
                  <p>Marketing Automation Growth</p>
                </div>

                <div className={styles.chartContainer}>
                  <div className={styles.marketChart}>
                    <div className={styles.yAxisLabels}>
                      <span>100</span>
                      <span>75</span>
                      <span>50</span>
                      <span>25</span>
                      <span>0</span>
                    </div>

                    <div className={styles.chartPlot}>
                      <div className={styles.gridLine} />
                      <div className={styles.gridLine} />
                      <div className={styles.gridLine} />
                      <div className={styles.gridLine} />

                      <div className={styles.chartBarsGroup}>
                        <div className={styles.chartBarColumn}>
                          <div className={`${styles.chartBar} ${styles.chartBarMuted}`} style={{ height: "58%" }} />
                          <span>2025</span>
                        </div>
                        <div className={styles.chartBarColumn}>
                          <div className={`${styles.chartBar} ${styles.chartBarAccent}`} style={{ height: "100%" }} />
                          <span>2030</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className={styles.marketStatLarge}>$81B</div>
                  <p className={styles.marketStatDesc}>Projected Market Size by 2030</p>
                  <p className={styles.marketStatSource}>Source: MarketsandMarkets</p>
                </div>

                <div className={styles.marketFooterCallout}>
                  <span className="material-symbols-outlined">rocket_launch</span>
                  <p>High growth opportunity in AI-driven SaaS</p>
                </div>
              </aside>
            </div>

           
          </div>
        </PresentationSlide>

        <PresentationSlide>
          <div className={styles.ctaSlideBackground}>
            <div className={styles.ctaSlideOverlay} />
          </div>

          <div className={styles.ctaSlideContent}>
            <section className={styles.ctaMainContent}>
              <div className={styles.ctaLogoArea}>
                <div className={styles.ctaLogoIcon}>
                  <span className="material-symbols-outlined">layers</span>
                </div>
                <h2 className={styles.ctaLogoText}>RecoSales</h2>
              </div>

              <h1 className={styles.ctaHeadline}>Ready to Turn Data into Revenue?</h1>
              <p className={styles.ctaSubheadline}>
                Join the leading brands using RecoSales to automate segmentation and personalize marketing at scale.
              </p>
            </section>

            <section className={styles.trustedBySection}>
              <div className={styles.testimonialsGrid}>
                <article className={styles.testimonialCard}>
                  <p className={styles.quoteText}>
                    "RecoSales reduced our churn by 12% in just two months. The AI segmentation is a game changer for
                    our retention strategy."
                  </p>
                  <p className={styles.quoteAuthor}>
                    <span className="material-symbols-outlined">account_circle</span>
                    Sarah J., CMO at TechFlow
                  </p>
                </article>

                <article className={styles.testimonialCard}>
                  <p className={styles.quoteText}>
                    "The campaign recommendations are spot on. Our email ROI increased by 25% immediately after
                    implementing their templates."
                  </p>
                  <p className={styles.quoteAuthor}>
                    <span className="material-symbols-outlined">account_circle</span>
                    Mike T., Head of Growth at RetailPulse
                  </p>
                </article>

                <article className={styles.testimonialCard}>
                  <p className={styles.quoteText}>
                    "Finally, a tool that automates the heavy lifting. We save 20 hours a week on manual list building
                    and campaign setup."
                  </p>
                  <p className={styles.quoteAuthor}>
                    <span className="material-symbols-outlined">account_circle</span>
                    Elena R., Director at StreamLine
                  </p>
                </article>
              </div>

              <div className={styles.logoRow}>
                {/* <div className={styles.companyLogo}>
                  <span className="material-symbols-outlined">payments</span>
                  Stripe
                </div>
                <div className={styles.companyLogo}>
                  <span className="material-symbols-outlined">cloud</span>
                  AWS
                </div> */}
                <div className={styles.companyLogo}>
                  <span className="material-symbols-outlined">storefront</span>
                  Retail Trade Sector, large scale self-service stores are ready to adopt our solution
                </div>
                {/* <div className={styles.companyLogo}>
                  <span className="material-symbols-outlined">hub</span>
                  HubSpot
                </div>
                <div className={styles.companyLogo}>
                  <span className="material-symbols-outlined">deployed_code</span>
                  Salesforce
                </div> */}
              </div>
            </section>

            <section className={styles.ctaCardContainer}>
              <article className={`${styles.ctaCard} ${styles.cardDemo}`}>
                <div className={`${styles.ctaIcon} ${styles.ctaIconOrange}`}>
                  <span className="material-symbols-outlined">calendar_month</span>
                </div>
                <h3 className={styles.ctaCardTitle}>Book a Live Demo</h3>
                <p className={styles.ctaCardDesc}>
                  See the platform in action with a personalized walkthrough.
                </p>
                <a className={`${styles.ctaButton} ${styles.btnOrange}`} href="#">
                  Schedule After Launch
                </a>
              </article>

              <article className={`${styles.ctaCard} ${styles.cardTrial}`}>
                <div className={`${styles.ctaIcon} ${styles.ctaIconBlue}`}>
                  <span className="material-symbols-outlined">rocket_launch</span>
                </div>
                <h3 className={styles.ctaCardTitle}>Start Free Trial</h3>
                <p className={styles.ctaCardDesc}>Connect your CRM and launch your first AI campaign.</p>
                <a className={`${styles.ctaButton} ${styles.btnBlue}`} href="#">
                 Cooking the Recipe !
                </a>
              </article>

              <article className={`${styles.ctaCard} ${styles.cardContact}`}>
                <div className={`${styles.ctaIcon} ${styles.ctaIconSlate}`}>
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <h3 className={styles.ctaCardTitle}>Contact Sales</h3>
                <p className={styles.ctaCardDesc}>Let's discuss a custom enterprise solution for you.</p>
                <a className={`${styles.ctaButton} ${styles.btnOutline}`} href="#">
                  Contact Us
                </a>
              </article>
            </section>

            <section id="recosales-contact" className={styles.contactInfoBar}>
              <div className={styles.contactItem}>
                <span className="material-symbols-outlined">language</span>
                <p>protolyte.in</p>
              </div>

              <div className={styles.contactDivider} />

              <div className={styles.contactItem}>
                <span className="material-symbols-outlined">mail</span>
                <p>info@protolyte.in</p>
              </div>

             

           
            </section>

          
          </div>
        </PresentationSlide>
      </div>
    </main>
  );
}

export default RecoSalesPptPage;
