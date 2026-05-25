import type { JSX } from "react";
import LegalLayout from "../components/layout/LegalLayout";
import LegalSection from "../components/layout/LegalSection";
import styles from "../components/layout/LegalPage.module.css";
import Navbar from "../components/layout/Navbar";
import {
  navItems,
} from "../data/homeData";

function DataDeletion(): JSX.Element {
  return (
    
    <div className={styles.page}>
      <Navbar items={navItems} />
    <LegalLayout
      title="Data Deletion Instructions"
      description="Users may request deletion of their information from Protolyte systems."
    >
      <LegalSection title="How to Request Deletion">
        <p>
          Send a request to info@protolyte.in with:
        </p>

        <ul>
          <li>Registered phone number</li>
          <li>Organization name</li>
          <li>Reason for deletion request</li>
        </ul>
      </LegalSection>

      <LegalSection title="Processing Timeline">
        <p>
          Verified deletion requests are generally processed within 7 business
          days.
        </p>
      </LegalSection>

      <LegalSection title="Retention Exceptions">
        <p>
          Certain records may be retained where required for legal, compliance,
          or security purposes.
        </p>
      </LegalSection>
    </LegalLayout>
    </div>
  );
}

export default DataDeletion;