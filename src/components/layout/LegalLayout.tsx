import type { JSX, ReactNode } from "react";
import Footer from "./Footer";
import styles from "./LegalPage.module.css";

interface LegalLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

function LegalLayout({
  title,
  description,
  children,
}: LegalLayoutProps): JSX.Element {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>

        <div className={styles.content}>
          {children}
        </div>
      </main>

      <Footer
        groups={[
          {
            title: "Legal",
            links: [
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-of-service" },
              { label: "Data Deletion", href: "/data-deletion" },
            ],
          },
        ]}
      />
    </div>
  );
}

export default LegalLayout;