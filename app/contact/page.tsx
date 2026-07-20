import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import { withPageSeo } from "@/lib/cms";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await withPageSeo("/contact", {
    title: "Contact",
    description: "Get in touch with FUTURA and its brands.",
  });
  return {
    ...seo,
    alternates: { canonical: "/contact" },
    openGraph: { url: "/contact" },
  };
}

// Contact addresses — change them here only.
const CONTACTS = [
  {
    accent: "general",
    name: "General Inquiries",
    role: "Futura Digital LLC",
    email: "hello@thefutura.llc",
  },
  {
    accent: "luminor",
    name: "Luminor Solutions",
    role: "Software & Web Division",
    email: "info@luminor.solutions",
  },
  {
    accent: "techplay",
    name: "TechPlay.gg",
    role: "Gaming Media Platform",
    email: "redakcija@techplay.gg",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <Nav />
      <PageHero
        eyebrow="Contact"
        title="Get in Touch"
        lead="One company, several brands — reach the right inbox directly."
      />
      <main className="subpage">
        <section className="subpage-section">
          <Reveal>
            <div className="contact-grid">
              {CONTACTS.map((c) => (
                <a
                  key={c.email}
                  className={`contact-card contact-card--${c.accent}`}
                  href={`mailto:${c.email}`}
                >
                  <h2 className="contact-card__name">{c.name}</h2>
                  <p className="contact-card__role">{c.role}</p>
                  <span className="contact-card__email">{c.email}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="subpage-section subpage-section--cta">
          <Reveal>
            <span className="separator" aria-hidden="true" />
            <p className="subpage-text">
              We read everything. Expect a reply within a few business days.
            </p>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
    </>
  );
}
