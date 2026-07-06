import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms governing the use of The Futura LLC website.",
};

export default function TermsOfUsePage() {
  return (
    <LegalPage title="Terms of Use" updated="July 6, 2026">
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using this website, operated by The Futura LLC
        (&ldquo;FUTURA&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), you agree to
        be bound by these Terms of Use. If you do not agree, please do not use
        the site.
      </p>

      <h2>2. Use of the Site</h2>
      <p>
        You may use this site for lawful, personal and informational purposes
        only. You agree not to misuse the site, interfere with its operation,
        attempt unauthorized access to any systems, or use automated tools to
        scrape or overload it.
      </p>

      <h2>3. Intellectual Property</h2>
      <p>
        All content on this site — including the FUTURA name, logotypes, brand
        marks, text, visuals, video and code — is the property of The Futura LLC
        or its licensors and is protected by intellectual-property laws. You may
        not reproduce, distribute or create derivative works from this content
        without our prior written consent.
      </p>

      <h2>4. Brands and Third-Party Links</h2>
      <p>
        This site links to websites of our brands and to third-party services.
        Those sites operate under their own terms and policies, and we are not
        responsible for their content or practices.
      </p>

      <h2>5. Disclaimer</h2>
      <p>
        This website is provided &ldquo;as is&rdquo; and &ldquo;as
        available&rdquo;, without warranties of any kind, express or implied. We
        do not warrant that the site will be uninterrupted, error-free or free of
        harmful components.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, The Futura LLC shall not be
        liable for any indirect, incidental, consequential or punitive damages
        arising out of or related to your use of this website.
      </p>

      <h2>7. Changes to These Terms</h2>
      <p>
        We may revise these Terms of Use at any time. The &ldquo;Last
        updated&rdquo; date reflects the latest revision, and continued use of
        the site constitutes acceptance of the revised terms.
      </p>

      <h2>8. Governing Law</h2>
      <p>
        These terms are governed by the laws of [jurisdiction], without regard to
        conflict-of-law principles. Any disputes shall be resolved before the
        competent courts of [jurisdiction].
      </p>

      <h2>9. Contact</h2>
      <p>
        Questions about these terms? Write to{" "}
        <a href="mailto:info@futura.example">info@futura.example</a>.
      </p>
    </LegalPage>
  );
}
