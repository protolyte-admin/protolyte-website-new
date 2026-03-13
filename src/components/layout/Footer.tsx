import BrandLogo from "../common/BrandLogo";
import PrimaryButton from "../common/PrimaryButton";
import type { FooterLinkGroup } from "../../types/home";
import styles from "./Footer.module.css";
import type { JSX } from "react";

interface FooterProps {
  groups: FooterLinkGroup[];
}

function Footer({ groups }: FooterProps): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandColumn}>
            <BrandLogo darkText />
            <p className={styles.brandText}>
              Architecting the future of enterprise intelligence. Professional solutions for the digital age.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.social} aria-label="Website">
                <span className="material-symbols-outlined">public</span>
              </a>
              <a href="#" className={styles.social} aria-label="Share">
                <span className="material-symbols-outlined">share</span>
              </a>
              <a href="#" className={styles.social} aria-label="Email">
                <span className="material-symbols-outlined">alternate_email</span>
              </a>
            </div>
          </div>

          {groups.map((group) => (
            <div key={group.title}>
              <h3 className={styles.groupTitle}>{group.title}</h3>
              <ul className={styles.groupList}>
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className={styles.groupLink}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className={styles.groupTitle}>Newsletter</h3>
            <p className={styles.newsText}>Stay updated with the latest in AI and digital transformation.</p>
            <div className={styles.subscribe}>
              <input type="email" placeholder="Email address" className={styles.input} />
              <PrimaryButton className={styles.send} aria-label="Send">
                <span className="material-symbols-outlined">send</span>
              </PrimaryButton>
            </div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <p>� 2026 Protolyte Systems Inc. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
