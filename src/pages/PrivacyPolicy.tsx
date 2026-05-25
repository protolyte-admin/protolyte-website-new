import type { JSX } from "react";
import LegalLayout from "../components/layout/LegalLayout";
import LegalSection from "../components/layout/LegalSection";
import styles from "../components/layout/LegalPage.module.css";
import Navbar from "../components/layout/Navbar";
import {
  navItems,
} from "../data/homeData";


function PrivacyPolicy(): JSX.Element {
  return (
    //   <Navbar items={navItems} />

    <div className={styles.page}>
      <Navbar items={navItems} />
    <LegalLayout
  title="Privacy Policy"
  description="Protolyte is committed to protecting customer, client, and business data through secure enterprise-grade technologies, transparent operational practices, and industry-standard compliance measures."
>

  <LegalSection title="Introduction">
    <p>
      This Privacy Policy describes how Protolyte collects, processes,
      stores, and protects information obtained through our applications,
      platforms, APIs, and services.
    </p>

    <p>
      By accessing or using Protolyte services, you acknowledge and agree
      to the collection and usage of information in accordance with this
      Privacy Policy.
    </p>
  </LegalSection>

  <LegalSection title="Information We Collect">
    <p>
      Protolyte may collect and process various categories of business and
      technical information required to provide secure and reliable services.
    </p>

    <ul>
      <li>Customer phone numbers and contact details</li>
      <li>WhatsApp message templates and delivery metadata</li>
      <li>Communication history and messaging logs</li>
      <li>Authentication and authorization records</li>
      <li>IP addresses, browser information, and device identifiers</li>
      <li>API usage logs and system diagnostic data</li>
      <li>Organization and account-related information</li>
      <li>Support tickets and customer communications</li>
    </ul>
  </LegalSection>

  <LegalSection title="How We Use Information">
    <p>
      The information collected by Protolyte is used exclusively for
      legitimate business and operational purposes.
    </p>

    <ul>
      <li>Deliver and maintain messaging services</li>
      <li>Enable WhatsApp Business API integrations</li>
      <li>Authenticate users and secure platform access</li>
      <li>Monitor service reliability and platform performance</li>
      <li>Prevent fraud, abuse, and unauthorized activities</li>
      <li>Improve product functionality and user experience</li>
      <li>Provide customer support and technical assistance</li>
      <li>Comply with applicable legal and regulatory obligations</li>
    </ul>
  </LegalSection>

  <LegalSection title="Third-Party Services and Integrations">
    <p>
      Protolyte integrates with trusted third-party providers and enterprise
      platforms necessary for service functionality and infrastructure
      operations.
    </p>

    <p>
      These integrations may include Meta WhatsApp Business APIs, cloud
      hosting providers, analytics systems, monitoring platforms, and secure
      infrastructure services.
    </p>

    <p>
      Third-party services operate under their own privacy policies and
      compliance standards.
    </p>
  </LegalSection>

  <LegalSection title="Data Retention">
    <p>
      Protolyte retains business and communication data only for as long as
      necessary to provide services, comply with legal obligations, resolve
      disputes, enforce agreements, and maintain operational integrity.
    </p>

    <p>
      Retention periods may vary depending on regulatory requirements,
      contractual obligations, or business operational needs.
    </p>
  </LegalSection>

  <LegalSection title="Data Security">
    <p>
      Protolyte implements enterprise-grade technical and organizational
      safeguards designed to protect data against unauthorized access,
      disclosure, alteration, or destruction.
    </p>

    <ul>
      <li>Role-based access control mechanisms</li>
      <li>Secure authentication and authorization workflows</li>
      <li>Encrypted communication channels</li>
      <li>Infrastructure monitoring and logging</li>
      <li>Periodic security reviews and access audits</li>
      <li>Restricted administrative access</li>
    </ul>

    <p>
      While we strive to maintain the highest security standards, no
      internet-based platform can guarantee absolute security.
    </p>
  </LegalSection>

  <LegalSection title="User Rights and Controls">
    <p>
      Subject to applicable laws and regulations, users may request:
    </p>

    <ul>
      <li>Access to stored personal information</li>
      <li>Correction of inaccurate or outdated data</li>
      <li>Deletion of eligible information</li>
      <li>Restriction of certain processing activities</li>
      <li>Information regarding data usage practices</li>
    </ul>

    <p>
      Requests may be submitted through our official support channels.
    </p>
  </LegalSection>

  <LegalSection title="Acceptable Usage and Compliance">
    <p>
      Users of Protolyte services must comply with all applicable laws,
      regulations, Meta platform policies, and WhatsApp Business policies.
    </p>

    <p>
      The platform may not be used for spam, fraudulent communication,
      illegal activities, harassment, or unauthorized marketing practices.
    </p>
  </LegalSection>

  <LegalSection title="International Data Processing">
    <p>
      Depending on infrastructure deployment and third-party providers,
      information may be processed or stored in multiple geographic regions
      with appropriate security protections and compliance measures.
    </p>
  </LegalSection>

  <LegalSection title="Policy Updates">
    <p>
      Protolyte reserves the right to update or modify this Privacy Policy
      periodically to reflect operational, legal, technological, or
      regulatory changes.
    </p>

    <p>
      Updated versions will become effective immediately upon publication on
      this page.
    </p>
  </LegalSection>

  <LegalSection title="Contact Information">
    <p>
      For privacy-related requests, support inquiries, or data deletion
      requests, please contact:
    </p>

    <p>
      <strong>Protolyte</strong>
      <br />
      Website: https://protolyte.in
      <br />
      Email: info@protolyte.in

   
    </p>
  </LegalSection>

</LegalLayout>
      </div>
     
    
    
  );
}

export default PrivacyPolicy;