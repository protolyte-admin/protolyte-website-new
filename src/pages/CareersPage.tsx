import type { JSX } from "react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { footerGroups, navItems } from "../data/homeData";
import styles from "./CareersPage.module.css";

const jobs = [
  {
    title: "Product Development Intern",
    dept: "Internship",
    location: "Remote",
    icon: "terminal",
  }
];

function CareersPage(): JSX.Element {
  return (
    <div className={styles.page}>
      <Navbar items={navItems} />

      <main>
        <section className={styles.hero}>
          <div className={styles.heroGrid}>
            <div>
              <span className={styles.badge}>We are hiring</span>
              <h1>
                Join the Future <br />
                <span>of AI Innovation</span>
              </h1>
              <p>
                At Protolyte Systems, we are building the next generation of AI-powered digital transformation tools.
                Come help us redefine what is possible for global enterprises.
              </p>
              <div className={styles.heroActions}>
                <a href="#jobs" className={styles.primaryAction}>
                  View Openings
                </a>
                <a href="#why" className={styles.secondaryAction}>
                  Why Protolyte?
                </a>
              </div>
            </div>

            <div className={styles.heroImageWrap}>
              <div className={styles.heroGlow} />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQpwuKP5v8wSoYegTZZhm-8PgKDQS6FQb01ZiOcX_DI9anALxuMkf0AF4p65XoKp4OgSq12MO7vWgLfPrqQ6fhMYQG4bPwnwe6qUAE81v3pstzNj9w1qUTSqnDMENFeqohBsLec26tadzJmSDKkUFdrEEAaFc14NwL3wBNOpg_oyWk3UsmXLGmGQjJ4ovC-DJHs8gxbuSrDFiwYVcCi_BYH9cQplCrePeVYSRwV5l22pF1wjs2LOIBrPlP3iX5OZehvjLcEBWfsicV"
                alt="Team collaborating"
              />
            </div>
          </div>
        </section>

        <section className={styles.whySection} id="why">
          <div className={styles.sectionHead}>
            <h2>Why Join Us</h2>
            <p>
              We offer a fast-paced environment where your work directly impacts the future of technology and
              enterprise automation.
            </p>
          </div>

          <div className={styles.reasonGrid}>
            <article>
              <div>
                <span className="material-symbols-outlined">lightbulb</span>
              </div>
              <h3>Innovation</h3>
              <p>
                Work with cutting-edge LLMs, neural architectures, and distributed systems to solve some of the
                hardest problems in software.
              </p>
            </article>

            <article>
              <div>
                <span className="material-symbols-outlined">rocket_launch</span>
              </div>
              <h3>Impact</h3>
              <p>
                See your code transform global enterprise workflows. Our tools are used by Fortune 500 companies to
                drive meaningful change.
              </p>
            </article>

            <article>
              <div>
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <h3>Growth</h3>
              <p>
                Benefit from clear career paths, mentorship from industry veterans, and generous learning stipends for
                your professional development.
              </p>
            </article>
          </div>
        </section>

        <section className={styles.jobsSection} id="jobs">
          <div className={styles.jobsHead}>
            <div>
              <h2>Open Positions</h2>
              <p>Discover your next challenge at Protolyte</p>
            </div>
            <div className={styles.filters}>
              <label>
                <span className="material-symbols-outlined">search</span>
                <input type="text" placeholder="Search roles..." />
              </label>
              <select>
                <option>All Departments</option>
                <option>Engineering</option>
                <option>Product</option>
                {/* <option>Design</option>
                <option>Sales</option> */}
              </select>
              <select>
                {/* <option>All Locations</option>
                <option>San Francisco, CA</option>
                <option>London, UK</option> */}
                <option>Remote</option>
              </select>
            </div>
          </div>

          <div className={styles.jobsList}>
            {jobs.map((job) => (
              <article key={job.title} className={styles.jobCard}>
                <div>
                  <h4>{job.title}</h4>
                  <div>
                    <span>
                      <span className="material-symbols-outlined">{job.icon}</span>
                      {job.dept}
                    </span>
                    <span>
                      <span className="material-symbols-outlined">location_on</span>
                      {job.location}
                    </span>
                  </div>
                </div>
                <button type="button">Apply Now</button>
              </article>
            ))}
          </div>

          <div className={styles.openApp}>
            <p>Do not see a role that fits? We are always looking for talented people.</p>
            <a href="mailto:careers@protolyte.in">Send us an open application ?</a>
          </div>
        </section>

        <section className={styles.newsletterSection}>
          <div className={styles.newsletterCard}>
            <h2>Stay updated on new openings</h2>
            <p>
              Subscribe to our talent newsletter to receive job alerts and insights into our engineering culture.
            </p>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </section>
      </main>

      <Footer groups={footerGroups} />
    </div>
  );
}

export default CareersPage;
