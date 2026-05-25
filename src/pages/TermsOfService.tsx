import type { JSX } from "react";
import LegalLayout from "../components/layout/LegalLayout";
import LegalSection from "../components/layout/LegalSection";
import styles from "../components/layout/LegalPage.module.css";
import Navbar from "../components/layout/Navbar";
import {
    navItems,
} from "../data/homeData";

function TermsOfService(): JSX.Element {
    return (
        <div className={styles.page}>
            <Navbar items={navItems} />
            <LegalLayout
                title="Terms of Service"
                description="These Terms of Service govern access to and usage of Protolyte platforms, APIs, applications, infrastructure, and enterprise solutions."
            >

                <LegalSection title="Acceptance of Terms">
                    <p>
                        By accessing, using, or integrating with Protolyte services, platforms,
                        APIs, or applications, you acknowledge that you have read, understood,
                        and agreed to be bound by these Terms of Service.
                    </p>

                    <p>
                        If you do not agree with these terms, you must discontinue usage of
                        Protolyte services immediately.
                    </p>
                </LegalSection>

                <LegalSection title="Services Overview">
                    <p>
                        Protolyte provides enterprise software solutions, backend engineering
                        services, messaging integrations, SaaS platforms, workflow systems,
                        APIs, and infrastructure solutions designed for business and
                        organizational use.
                    </p>

                    <p>
                        Certain services may integrate with third-party providers including
                        Meta WhatsApp Business APIs and cloud infrastructure providers.
                    </p>
                </LegalSection>

                <LegalSection title="Eligibility and Account Responsibilities">
                    <p>
                        Users accessing Protolyte services represent that they possess the
                        authority and legal capacity to enter into binding agreements on behalf
                        of themselves or their organizations.
                    </p>

                    <ul>
                        <li>Maintain accurate account information</li>
                        <li>Protect account credentials and access tokens</li>
                        <li>Ensure authorized use of the platform</li>
                        <li>Notify Protolyte of suspected security incidents</li>
                        <li>Comply with all applicable laws and regulations</li>
                    </ul>
                </LegalSection>

                <LegalSection title="Acceptable Use Policy">
                    <p>
                        Users must utilize Protolyte services responsibly, ethically, and in
                        compliance with applicable laws, regulations, and platform policies.
                    </p>

                    <p>
                        Users must comply with all Meta and WhatsApp Business platform
                        requirements where integrations are utilized.
                    </p>

                    <ul>
                        <li>No spam or unsolicited messaging</li>
                        <li>No fraudulent or deceptive activities</li>
                        <li>No illegal communications or prohibited content</li>
                        <li>No unauthorized access attempts</li>
                        <li>No abuse of APIs or infrastructure resources</li>
                        <li>No transmission of malicious software or harmful code</li>
                        <li>No violation of intellectual property rights</li>
                    </ul>
                </LegalSection>

                <LegalSection title="Third-Party Integrations">
                    <p>
                        Protolyte services may depend on or integrate with third-party systems,
                        APIs, cloud providers, analytics platforms, and infrastructure
                        services.
                    </p>

                    <p>
                        Users acknowledge that third-party providers operate independently and
                        may maintain separate terms, privacy policies, uptime guarantees, and
                        compliance obligations.
                    </p>
                </LegalSection>

                <LegalSection title="Service Availability">
                    <p>
                        Protolyte strives to maintain high service availability, operational
                        reliability, and infrastructure stability through enterprise-grade
                        engineering and monitoring practices.
                    </p>

                    <p>
                        However, services are provided on an "as available" and "as is" basis
                        without guarantees of uninterrupted operation, continuous availability,
                        or error-free performance.
                    </p>

                    <p>
                        Scheduled maintenance, infrastructure upgrades, third-party outages,
                        security incidents, or unforeseen technical issues may temporarily
                        affect service accessibility.
                    </p>
                </LegalSection>

                <LegalSection title="Data and Security Responsibilities">
                    <p>
                        Protolyte implements reasonable security safeguards to protect platform
                        infrastructure and customer information.
                    </p>

                    <p>
                        Users remain responsible for:
                    </p>

                    <ul>
                        <li>Securing their credentials and systems</li>
                        <li>Managing internal access permissions</li>
                        <li>Maintaining backup copies where necessary</li>
                        <li>Ensuring lawful processing of end-user data</li>
                        <li>Obtaining required user consents</li>
                    </ul>
                </LegalSection>

                <LegalSection title="Intellectual Property">
                    <p>
                        All software, infrastructure, branding, platform architecture,
                        documentation, APIs, workflows, and proprietary technologies developed
                        by Protolyte remain the exclusive intellectual property of Protolyte
                        unless otherwise stated in written agreements.
                    </p>

                    <p>
                        Unauthorized reproduction, reverse engineering, redistribution, or
                        commercial misuse is prohibited.
                    </p>
                </LegalSection>

                <LegalSection title="Limitation of Liability">
                    <p>
                        To the maximum extent permitted by applicable law, Protolyte shall not
                        be liable for indirect, incidental, consequential, special, or punitive
                        damages arising from:
                    </p>

                    <ul>
                        <li>Service interruptions or downtime</li>
                        <li>Third-party provider failures</li>
                        <li>Loss of business or revenue</li>
                        <li>Data loss or corruption</li>
                        <li>Unauthorized access incidents</li>
                        <li>Reliance on platform outputs or integrations</li>
                    </ul>

                    <p>
                        Users acknowledge that usage of the platform is at their own risk.
                    </p>
                </LegalSection>

                <LegalSection title="Indemnification">
                    <p>
                        Users agree to indemnify and hold harmless Protolyte, its affiliates,
                        employees, contractors, and partners against claims, damages,
                        liabilities, and expenses arising from:
                    </p>

                    <ul>
                        <li>Violation of these Terms of Service</li>
                        <li>Illegal or unauthorized platform usage</li>
                        <li>Third-party disputes caused by user activities</li>
                        <li>Regulatory or compliance violations</li>
                    </ul>
                </LegalSection>

                <LegalSection title="Suspension and Termination">
                    <p>
                        Protolyte reserves the right to suspend, restrict, or terminate access
                        to services at its sole discretion where necessary to:
                    </p>

                    <ul>
                        <li>Protect platform integrity and security</li>
                        <li>Prevent abuse or malicious activities</li>
                        <li>Address legal or compliance obligations</li>
                        <li>Investigate suspicious behavior</li>
                        <li>Respond to violations of these terms</li>
                    </ul>

                    <p>
                        Termination may occur without prior notice in cases involving severe
                        abuse, fraud, illegal conduct, or security threats.
                    </p>
                </LegalSection>

                <LegalSection title="Changes to Terms">
                    <p>
                        Protolyte reserves the right to modify or update these Terms of Service
                        at any time to reflect legal, technical, operational, or business
                        changes.
                    </p>

                    <p>
                        Continued use of the platform following updates constitutes acceptance
                        of the revised terms.
                    </p>
                </LegalSection>

                <LegalSection title="Governing Law">
                    <p>
                        These Terms of Service shall be governed and interpreted in accordance
                        with applicable laws and regulations of the relevant jurisdiction where
                        Protolyte operates.
                    </p>
                </LegalSection>

                <LegalSection title="Contact Information">
                    <p>
                        For legal inquiries, support requests, compliance matters, or service
                        concerns, please contact:
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

export default TermsOfService;