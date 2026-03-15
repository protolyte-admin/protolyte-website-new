import type { JSX } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { footerGroups, navItems } from "../data/homeData";
import styles from "./AboutPage.module.css";

function AboutPage(): JSX.Element {
  return (
    <div className={styles.page}>
      <Navbar items={navItems} />

      <main>
        <section className={styles.hero}>
          <div className={styles.heroGrid}>
            <div>
              <div className={styles.badge}>
                <span />
                Redefining Enterprise AI
              </div>
              <h1>
                Architecting the <span>Intelligence</span> Era.
              </h1>
              <p>
                At Protolyte Systems, we do not just implement software; we engineer cognitive ecosystems that empower
                global organizations to thrive in an autonomous future.
              </p>
            </div>

            <div className={styles.heroImageWrap}>
              <div className={styles.heroGlow} />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwPAEnA6JIb8HVIrYO7eLqrFh0HnZbS0G7mxonXPSMRLM0dr0QATN1uUs9_JdISiR1yxrHd8NrkLhpeoeF7agxcAN0ZIS8Q2As5xYshA4KcAMdGH4m0Kh6DuFfsgRMkfxJvIIsn07uhNKniUdM6ZogR2s_brCjvhDDrt9IB5vLnoaYJK-UBlzSChENgbY-vs6ncBaR2Twuvs0sxX-mdvBbtLHbaZS-auQxYZYJr5xYXgeKUchFMkUfpgiyuiLeCk7USyPDmXs8TAPP"
                alt="Modern server room with blue ambient lighting"
              />
            </div>
          </div>
        </section>

        <section className={styles.foundationSection}>
          <div className={styles.foundationGrid}>
            <div>
              <h2>Our Foundation</h2>
              <p>
                Rooted in deep technical expertise and an unwavering commitment to ethics, we guide enterprises
                through the complexities of digital evolution.
              </p>

              <div className={styles.pillars}>
                <article>
                  <div>
                    <span className="material-symbols-outlined">visibility</span>
                  </div>
                  <div>
                    <h3>Our Vision</h3>
                    <p>
                      To be the global cornerstone for ethical, high-performance AI integration that unlocks human
                      creative potential at scale.
                    </p>
                  </div>
                </article>

                <article>
                  <div>
                    <span className="material-symbols-outlined">track_changes</span>
                  </div>
                  <div>
                    <h3>Our Mission</h3>
                    <p>
                      Engineering bespoke digital transformation frameworks that guarantee operational resilience and
                      long-term technological dominance.
                    </p>
                  </div>
                </article>
              </div>
            </div>

            <div className={styles.foundationImageWrap}>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYkeJHa5U_E1ewD7otUzCP1xbgs8vF45Wca2jTxo8eYbMmFZifTwsD0vp6Dt_Mj8HDT3Uk-UDxT8NIzQpic-8g76vcUgoEWcmsRGRLgIa9b44E8_-EYub8tWNF_DEKOLqNzhWcJ2xfbpq9BTt-s088qE1NchFqfxm226FqD2VfRWTuW3PqwKutP1K6_4lG968lNIatGExWDF8EigsYEhgBjWI7m7CtxEeJvfB_Cdie2o0Zeomb1JwRup5rIW60QmS23t9vnGS-VROQ"
                alt="Diverse team of engineers collaborating in a modern office"
              />
            </div>
          </div>
        </section>

        <section className={styles.leadershipSection}>
          <div className={styles.centerHeading}>
            <h2>Architects of Change</h2>
            <p>Led by visionaries from top-tier tech firms and academic institutions worldwide.</p>
          </div>

          <div className={styles.leaderGrid}>
            {[
              {
                name: "Sharath V N",
                role: "Chief Architect - AI & ML",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDXp-AdUPAbaCWUVBSfzUyjbuO2jodpLkraVT-IdmXFO8qA5xgBHhbpxdlDaJ5LcL-IjdZ5ND7PKyaTMj8HvpFQSGFKC06x9A8XQpcEYji7EgSUkypoXnc6utkz6LjqiJIMFxTPVJRBNtD3kmQd7OsF0mVaJ_PRn_f06mH5LP67ufK5XxdHj1Wgi5ZWSmPzWmc6SbDbIWjrSnbQDi_QfWfR5U3kRl36EJYjJzcQ5n0uVo1QWCYcXpkIkInrp25NwjaaAar-WTqbED3",
              },
              {
                name: "Shreehari B V",
                role: "Chief Architect - Java",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGOsly9_SGUvsjfwZZZyF9oaHTiDjENwGUJUqLfbivycdAZ6MVewdAYHzhmSWwhKxKxQ567URS-U5He5Igg3fvmcYcurajoVY-UrJ6N1IH9RUL1rOm___7RcHLjARg2LltJTDNWGQ3qLZD5TXNoGisUVMebn6uZPNjyJwvUD1HY4ZmFikV5hFpFk0M_IB4yoZAI_Vc_HPQn2G8a5k_TGzjkqNlsNUG7WZpUbwRmxY_ngsHzhmucdiYnrfSsQTz3K-kOM3VyDbMGnp6",
              },
                {
                name: "Gururaj V Desai",
                role: "Chief of Operations, UI Architect",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDXp-AdUPAbaCWUVBSfzUyjbuO2jodpLkraVT-IdmXFO8qA5xgBHhbpxdlDaJ5LcL-IjdZ5ND7PKyaTMj8HvpFQSGFKC06x9A8XQpcEYji7EgSUkypoXnc6utkz6LjqiJIMFxTPVJRBNtD3kmQd7OsF0mVaJ_PRn_f06mH5LP67ufK5XxdHj1Wgi5ZWSmPzWmc6SbDbIWjrSnbQDi_QfWfR5U3kRl36EJYjJzcQ5n0uVo1QWCYcXpkIkInrp25NwjaaAar-WTqbED3",
              },
                {
                name: "Shashank D R",
                role: "Chief Architect - UI",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDXp-AdUPAbaCWUVBSfzUyjbuO2jodpLkraVT-IdmXFO8qA5xgBHhbpxdlDaJ5LcL-IjdZ5ND7PKyaTMj8HvpFQSGFKC06x9A8XQpcEYji7EgSUkypoXnc6utkz6LjqiJIMFxTPVJRBNtD3kmQd7OsF0mVaJ_PRn_f06mH5LP67ufK5XxdHj1Wgi5ZWSmPzWmc6SbDbIWjrSnbQDi_QfWfR5U3kRl36EJYjJzcQ5n0uVo1QWCYcXpkIkInrp25NwjaaAar-WTqbED3",
              }
            ].map((leader) => (
              <article key={leader.name} className={styles.leaderCard}>
                <div className={styles.leaderImageWrap}>
                  <img src={leader.img} alt={leader.name} />
                </div>
                <h4>{leader.name}</h4>
                <p>{leader.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.careersSection}>
          <div className={styles.careersCard}>
            <div>
              <p className={styles.careersTag}>Careers</p>
              <h2>Help us build the next wave of enterprise AI.</h2>
              <p>
                We are expanding across Engineering, Product, Design, and Sales. If you care about technical depth,
                product impact, and high ownership, explore open roles.
              </p>
            </div>
            <div className={styles.careersActions}>
              <Link to="/careers" className={styles.careersPrimary}>
                View Careers
              </Link>
              <a href="mailto:careers@protolyte.com" className={styles.careersSecondary}>
                Send Open Application
              </a>
            </div>
          </div>
        </section>

        <section className={styles.cultureSection}>
          <div className={styles.cultureHead}>
            <h2>Innovation Culture</h2>
            <p>A behind-the-scenes look at where the future is being built.</p>
          </div>

          <div className={styles.masonry}>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvtyDanXwiSXejUwPQ01UJBbgK-KDAy3I2zChBa9mU-TFsTCRcamYA6kQAmpl-TaFqTZ9iWXwnq7ibvVkzzqZ5AO8xTeDdYIHEWoTGMK79xguYlVs8EkOJKjO2KX4DcYltq1P0RxzivRs1Nd36AWDZHJvbhTOJgf0rzbxZ79cdEHKozqERn92ibDNgDcmRo-1gyuSgfnLmjql6uE0PYU4X2qmN_RQ0u57HWMaQoYRGTzBLW90v0i1ziqoz5j6DWRPIyosGlXl07Jkw"
              alt="Developers working with complex code on multiple screens"
            />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4CY-BBe3gS5kFwoueVc70dH949QBlxIvXPZ3EqJ4rFHrla3hwP9jLi0e4tCGCF3Q-PAK4EPbl8CkP3G_DlA9QO1fIwBuaAUohypj_uJWeBkS20ZKav8R5YjQYp4J3XBBJz5GWPvdZ6iFfOjApIUIvNbNm_wisNR5yQ095SrSQs29oxNg7K2yzjCSrEbwo6S9JCyftXB5AyOUgj8W_B9bGS0vq3GNK9ddQxda8KUVuymnsR6Wv4XZ7aoNuP4LBD7J911HVHQydhzu_"
              alt="Team having a brainstorming session at a whiteboard"
            />
            <div className={styles.cultureMetric}>
              <h3>94%</h3>
              <p>
                Efficiency increase observed across our enterprise partner deployments in the first 12 months.
              </p>
            </div>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-o79bfC6LpM4blIiK3K1Cu4DQCExENTSeR1VvFEuqFNmqbPmtMypv0lk1T7zzPVeMumJJFfT0xIhEV1tg6WlRkIaGtwxK2Tgcl6Sy1azvN6YHp6XLEW8fLrhqdAddd7nfoYyfDXDBjaH1tf0kOMQFJ6a0MH1YmaVfa5Jx3Qmn5ETB6U3jSszRcSKc_oK9w3Dml37jkPn9dDjmZkTpDlvefEGfvPfiq6BQCjxoLngtrmk3JB-w19s_tHjQuWQUoLhzRxM4vpJv8aTM"
              alt="Modern minimalist office lobby with digital art"
            />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrHDR5ROGtWu-P0P6u6LJUA9YHm9a2nrs7goz4R5Th1TxlBv6a-ozahaZMLVx5gFW-bAp3P2bnk6AWLMh2UY-0Eqdxz_9xwTcykvQUX1z2e0mxrZX0zLAMuVTJva8NEdjIpQkEhFZIg3GYJhD4eMYe8Y9RswceS_aCVxoVT4xhX0Wc4_al_zKIZDM9ws2Je-Nle7RAeI-_pCabsZzwWj6aN_6eV6milz2Pcs4Cho7-0ehCFU9lKjkFZNh-IYD0_8_xpOTp0Uswg8Rx"
              alt="Close up of high speed fiber optic cables"
            />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDln7M2O5HG2nncqVmiSC9YlRY859eESy8xiovEsKXVMN7bzQd01SJEeCpXDgaKZxwioz1PPdIBFhw3--xuquYL-Y1XLhVHbXtdvJazWxWg3s3uw5S4N52SNAJuA2WcnBjY_CkboC2hRa2BtkLvSecZ-GS6O7Z0MqonrWF9s2dqAChBDE_S9bEF4nnab26AYyBbkQBKMKqNvshWCjFk-4Nnx5KMJUyRMZABW9aNYHUtoroGoTbUOLK8YxZD14GsIQOJSc853wEUlAnF"
              alt="Software engineering team discussing system architecture"
            />
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaOverlay} />
          <div className={styles.ctaContent}>
            <h2>Ready to evolve your enterprise?</h2>
            <p>Join the ranks of market leaders who have already transitioned to AI-first operations.</p>
            <div className={styles.ctaActions}>
              <button type="button" className={styles.primaryButton}>Book a Strategy Call</button>
              <button type="button" className={styles.secondaryButton}>View Case Studies</button>
            </div>
          </div>
        </section>
      </main>

      <Footer groups={footerGroups} />
    </div>
  );
}

export default AboutPage;
