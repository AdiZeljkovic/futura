import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How The Futura LLC collects, uses and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="July 6, 2026">
      <h2>1. Introduction</h2>
      <p>
        This Privacy Policy describes how The Futura LLC (&ldquo;FUTURA&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses and protects
        information when you visit this website. By using the site, you agree to
        the practices described below.
      </p>

      <h2>2. Information We Collect</h2>
      <p>We keep data collection to a minimum. We may collect:</p>
      <ul>
        <li>
          <strong>Usage data</strong> — anonymous technical information such as
          browser type, device, pages visited and time spent, collected through
          standard server logs and, where enabled, analytics tools.
        </li>
        <li>
          <strong>Contact information</strong> — if you email us, we receive your
          email address and the contents of your message.
        </li>
      </ul>
      <p>We do not knowingly collect sensitive personal data through this site.</p>

      <h2>3. How We Use Information</h2>
      <ul>
        <li>To operate, maintain and improve the website;</li>
        <li>To respond to inquiries you send us;</li>
        <li>To understand aggregate usage of the site;</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2>4. Cookies</h2>
      <p>
        This site may use cookies and similar technologies. For details on which
        cookies we use and how to control them, see our{" "}
        <a href="/cookie-policy">Cookie Policy</a>.
      </p>

      <h2>5. Third-Party Services</h2>
      <p>
        We may rely on third-party providers (such as hosting and analytics
        services) that process data on our behalf. These providers are bound by
        their own privacy policies and applicable data-protection agreements. This
        site contains links to external websites, including our brand sites; we
        are not responsible for their privacy practices.
      </p>

      <h2>6. Data Retention</h2>
      <p>
        We retain personal information only for as long as necessary for the
        purposes described in this policy, or as required by law. Email
        correspondence is kept for as long as needed to handle your inquiry.
      </p>

      <h2>7. Your Rights</h2>
      <p>
        Depending on your jurisdiction, you may have the right to access,
        correct, delete or restrict the processing of your personal data, and to
        object to or port that data. To exercise any of these rights, contact us
        at <a href="mailto:info@futura.example">info@futura.example</a>.
      </p>

      <h2>8. Children&rsquo;s Privacy</h2>
      <p>
        This website is not directed at children under 16 and we do not knowingly
        collect personal information from them.
      </p>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The &ldquo;Last
        updated&rdquo; date at the top of this page reflects the latest revision.
        Continued use of the site after changes constitutes acceptance of the
        updated policy.
      </p>

      <h2>10. Contact</h2>
      <p>
        The Futura LLC, [company address]. For privacy questions, write to{" "}
        <a href="mailto:info@futura.example">info@futura.example</a>.
      </p>
    </LegalPage>
  );
}
