import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { footerGroups, navItems } from "../data/homeData";
import styles from "./CaseStudiesPage.module.css";

const filterChips: string[] = ["All Industries", "Logistics", "FinTech", "Healthcare"];

function CaseStudiesPage(): JSX.Element {
  return (
    <div className={styles.page}>
      <Navbar items={navItems} />

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>
            Impact through <span>Intelligence.</span>
          </h1>
          <p>
            Explore how Protolyte Systems powers digital transformation for industry leaders through custom AI
            architectures and cloud-native solutions.
          </p>
        </section>

        <section className={styles.filters}>
          <span>Filter by:</span>
          {filterChips.map((chip, index) => (
            <button key={chip} type="button" className={index === 0 ? styles.filterActive : styles.filterItem}>
              {chip}
              <span className="material-symbols-outlined">expand_more</span>
            </button>
          ))}
        </section>

        <section className={styles.featuredCard}>
          <div className={styles.featuredImageWrap}>
            <div className={styles.featuredOverlay} />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4W3g8etkWtyD9rwxc5pn9_VIs4mM04PGtpfbsEAinmQgCt2rIpUPNgheRr_JRGI6Si3ylYNwtDeOhjQxPozzXFxQjALcRhuOAiamxdYuP2SR-i-bJo7oxGvpTbK6nDiuPGQso1cSlVQo1L4aUsf7zbPw2HkMwBtCZ1sNxknToVMSfqOWnhm3mYBFDQuSaW-GqufzoLEHx05q1lrWXeKvB8ZkpYbj9SmJx6yY06yJSUtJ5eOfOCasIwOArouduRbBYKREnz0sAcHXh"
              alt="Modern shipping containers at a high-tech automated port terminal"
            />
          </div>

          <div className={styles.featuredContent}>
            <div className={styles.featureTag}>
              <span className="material-symbols-outlined">local_shipping</span>
              Logistics & Supply Chain
            </div>
            <h2>Modernizing Global Logistics with AI</h2>

            <div className={styles.featureMeta}>
              <div>
                <small>Challenge</small>
                <p>Inefficient routing and manual tracking causing 15% revenue leakage annually.</p>
              </div>
              <div>
                <small>Solution</small>
                <p>AI-powered predictive analytics engine deployed across 45 global hubs.</p>
              </div>
              <div className={styles.resultBox}>
                <small>Key Result</small>
                <strong>40% Efficiency Increase</strong>
              </div>
            </div>

            <button type="button" className={styles.primaryButton}>
              View Full Case Study
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </section>

        <section className={styles.grid}>
          <article className={styles.card}>
            <div className={styles.cardImageWrap}>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg_ofL93DfPoVy0fBlXJ8h2No75HVfOilioDR97LbveCptX2WfmspgU_olNJsDWqRQV4Qidm1S1IbH1LlgmyNb6C-CssAx1PcrCII_DeqpIdLM-k-OaeQVOhUGbaLCD_lgJz30AaUd_IkaEkB14hyh6nyfr9CuZlQpuBlnzD8dS2xm0U5f_GQ0p8aYBFcKN1I-qeElKAVLLHvxNqyWE5GYBW4p41wdOuzoVN36W3BFfA0Got6NbSS2Mtd9DJ5-LQHrd7oAUKDSGgv_"
                alt="Digital financial data charts and analytical interface"
              />
              <span>Financial Technology</span>
            </div>
            <div className={styles.cardBody}>
              <h3>Cloud Transformation for FinTech Giant</h3>
              <p>
                <strong>Challenge:</strong> Legacy infrastructure limiting scalability and security compliance.
              </p>
              <p>
                <strong>Solution:</strong> Full-scale cloud migration with zero-trust microservices architecture.
              </p>
              <div className={styles.cardResult}>60% OpEx Reduction</div>
              <button type="button" className={styles.textButton}>
                Read Case Study <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </article>

          <article className={styles.card}>
            <div className={styles.cardImageWrap}>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwBDqjD-4Y9Ob2TXUL96nAuK1yHkmW8LZhrOuI7ZZhULQ7M1nTKvDER8yOAkzqh_wNeIIMGMwXChdCOrkW5ACObl5_eU43rQCuWS_vTbKVbenCA5BpvYJ2AgUkxQg-zB8lsWkMHOKkpd_WHDwgHM9IQCvZuilm5SIhPCSZQfGrJ-cWG33bdGDM3Z0VsFzOVsKr8eajvm2WW1NVXLGHqXGtLrhKa7Uv07jUk3uENcPNfu9sc27IMKCibEkBy423hd9tHJxua8QIqvbC"
                alt="Modern medical diagnostic equipment and blue neon lighting"
              />
              <span>Healthcare</span>
            </div>
            <div className={styles.cardBody}>
              <h3>Predictive Diagnostics Platform</h3>
              <p>
                <strong>Challenge:</strong> Delayed diagnosis in oncology due to data fragmentation.
              </p>
              <p>
                <strong>Solution:</strong> Federated learning model for multi-hospital diagnostic support.
              </p>
              <div className={styles.cardResult}>30% Faster Detection</div>
              <button type="button" className={styles.textButton}>
                Read Case Study <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </article>
        </section>

        <section className={styles.cta}>
          <div>
            <h2>Ready to write your success story?</h2>
            <p>Partner with our transformation experts to architect your future with AI.</p>
          </div>
          <div className={styles.ctaActions}>
            <button type="button" className={styles.lightButton}>Book a Consultation</button>
            <button type="button" className={styles.outlineButton}>View Solutions</button>
          </div>
        </section>
      </main>

      <Footer groups={footerGroups} />
    </div>
  );
}

export default CaseStudiesPage;
