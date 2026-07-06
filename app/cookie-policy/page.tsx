import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How this website uses cookies and how you can control them.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage title="Cookie Policy" updated="July 6, 2026">
      <h2>1. What Are Cookies</h2>
      <p>
        Cookies are small text files stored on your device when you visit a
        website. They help sites function correctly, remember preferences and
        understand how visitors use them. Similar technologies (such as local
        and session storage) serve comparable purposes.
      </p>

      <h2>2. How We Use Cookies</h2>
      <p>This website keeps cookie usage minimal. We use:</p>
      <ul>
        <li>
          <strong>Essential storage</strong> — session storage used for basic
          site behaviour (for example, remembering that the intro animation has
          already played). This is required for the intended experience and holds
          no personal data.
        </li>
        <li>
          <strong>Analytics cookies</strong> — only if analytics are enabled,
          used to measure anonymous, aggregate site usage. [If/when an analytics
          provider is added, list it here.]
        </li>
      </ul>

      <h2>3. Third-Party Cookies</h2>
      <p>
        Links to our brand sites and other external services may result in those
        sites setting their own cookies once you visit them. Their cookie
        policies apply there — we do not control them.
      </p>

      <h2>4. Managing Cookies</h2>
      <p>
        You can control or delete cookies through your browser settings: block
        all cookies, delete existing ones, or receive a warning before a cookie
        is stored. Note that disabling essential storage may affect how this site
        behaves.
      </p>

      <h2>5. Changes to This Policy</h2>
      <p>
        We may update this Cookie Policy as the site evolves. The &ldquo;Last
        updated&rdquo; date reflects the most recent revision.
      </p>

      <h2>6. Contact</h2>
      <p>
        Questions about cookies on this site? Write to{" "}
        <a href="mailto:info@futura.example">info@futura.example</a>.
      </p>
    </LegalPage>
  );
}
