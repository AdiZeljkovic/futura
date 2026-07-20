import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SiteFooter from "@/components/SiteFooter";
import { withPageSeo } from "@/lib/cms";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await withPageSeo("/about", {
    title: "About Us",
    description:
      "FUTURA is the parent company behind digital brands in software, media and technology.",
  });
  return {
    ...seo,
    alternates: { canonical: "/about" },
    openGraph: { url: "/about" },
  };
}

// Brand sites the cards link to.
const LUMINOR_URL = "https://luminor.solutions";
const TECHPLAY_URL = "https://techplay.gg";

export default function AboutPage() {
  return (
    <>
      <Nav />
      <PageHero
        eyebrow="Futura Digital LLC"
        title="About Us"
        lead="A parent company that builds, launches and grows digital brands."
      />
      <main className="subpage">
        <section className="subpage-section">
          <Reveal>
            <h2 className="subpage-heading">Who We Are</h2>
            <p className="subpage-text">
              FUTURA is the home of ideas that outgrow their beginnings. We are a
              small team with a simple conviction: the future is not something you
              wait for — it is something you design, engineer and ship. Every brand
              under our roof starts as a question about what tomorrow should look
              like.
            </p>
          </Reveal>
        </section>

        <section className="subpage-section">
          <Reveal>
            <h2 className="subpage-heading">What We Do</h2>
            <p className="subpage-text">
              We build and operate digital products across software, media and
              technology. From engineering web platforms to running editorial
              brands, we keep everything under one standard: crafted, fast and
              built to last. FUTURA provides the direction, infrastructure and
              identity — each brand brings its own voice.
            </p>
          </Reveal>
        </section>

        <section className="subpage-section">
          <Reveal>
            <h2 className="subpage-heading">Our Brands</h2>
            <div className="brand-grid">
              <a
                className="brand-card brand-card--luminor"
                href={LUMINOR_URL}
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="wordmark wordmark--small">Luminor Solutions</h3>
                <p className="brand-sub brand-sub--luminor">
                  Software &amp; Web Division
                </p>
                <span className="panel__visit">
                  <span className="panel__visit-label">Visit</span>
                  <span className="panel__visit-arrow" aria-hidden="true">
                    &#8599;
                  </span>
                </span>
              </a>
              <a
                className="brand-card brand-card--techplay"
                href={TECHPLAY_URL}
                target="_blank"
                rel="noreferrer"
              >
                <h3 className="wordmark wordmark--small">TechPlay.gg</h3>
                <p className="brand-sub brand-sub--techplay">
                  Gaming Media Platform
                </p>
                <span className="panel__visit">
                  <span className="panel__visit-label">Visit</span>
                  <span className="panel__visit-arrow" aria-hidden="true">
                    &#8599;
                  </span>
                </span>
              </a>
            </div>
          </Reveal>
        </section>

        <section className="subpage-section subpage-section--cta">
          <Reveal>
            <span className="separator" aria-hidden="true" />
            <p className="subpage-text">
              Have an idea, a partnership or a brand that belongs in the future?
            </p>
            <Link href="/contact" className="cta-link">
              <span className="panel__visit-label">Get in touch</span>
              <span className="panel__visit-arrow" aria-hidden="true">
                &#8599;
              </span>
            </Link>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
    </>
  );
}
