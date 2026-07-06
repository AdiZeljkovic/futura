import Link from "next/link";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import HeroIntro from "@/components/HeroIntro";
import Preloader from "@/components/Preloader";
import MediaFx from "@/components/MediaFx";
import Brandmark from "@/components/Brandmark";

// Brand sites the portal sections link to. TODO: set the real Luminor URL.
const LUMINOR_URL = "#luminor";
const TECHPLAY_URL = "https://techplay.gg";

export default function Home() {
  return (
    <>
      <Preloader />
      <Nav />
      <main>
        {/* ============ HERO / FUTURA ============ */}
        <section className="panel panel--hero" id="hero">
          <MediaFx src="/video/hero.mp4" poster="/img/hero.webp" />
          <div className="panel__bg" aria-hidden="true" />
          <HeroIntro />
          <div className="scroll-hint" aria-hidden="true" />
        </section>

        {/* ============ LUMINOR SOLUTIONS ============ */}
        <section className="panel panel--luminor panel--link" id="luminor">
          <MediaFx src="/video/luminor.mp4" poster="/img/luminor.webp" />
          <div className="panel__bg" aria-hidden="true" />
          <Reveal>
            <h2 className="wordmark">Luminor Solutions</h2>
            <p className="brand-sub brand-sub--luminor">Software &amp; Web Division</p>
            <span className="panel__visit">
              <span className="panel__visit-label">Visit</span>
              <span className="panel__visit-arrow" aria-hidden="true">&#8599;</span>
            </span>
          </Reveal>
          <a
            className="panel__link"
            href={LUMINOR_URL}
            aria-label="Visit Luminor Solutions"
          />
        </section>

        {/* ============ TECHPLAY.GG ============ */}
        <section className="panel panel--techplay panel--link" id="techplay">
          <MediaFx src="/video/techplay.mp4" poster="/img/techplay.webp" />
          <div className="panel__bg" aria-hidden="true" />
          <Reveal>
            <h2 className="wordmark">TechPlay.gg</h2>
            <p className="brand-sub brand-sub--techplay">Gaming Media Platform</p>
            <span className="panel__visit">
              <span className="panel__visit-label">Visit</span>
              <span className="panel__visit-arrow" aria-hidden="true">&#8599;</span>
            </span>
          </Reveal>
          <a
            className="panel__link"
            href={TECHPLAY_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Visit TechPlay.gg"
          />
        </section>

        {/* ============ FOOTER / THE FUTURA LLC ============ */}
        <section className="panel panel--footer" id="contact">
          <MediaFx src="/video/footer.mp4" poster="/img/footer.webp" />
          <div className="panel__bg" aria-hidden="true" />
          <Reveal>
            <Brandmark
              className="brandmark brandmark--small"
              paths={[{ d: "M22 14 h22 M22 14 v36 M22 26 h16 M30 26 v24", strokeWidth: 2 }]}
            />
            <h2 className="wordmark wordmark--small">The Futura LLC</h2>
            <p className="desc">Parent company for digital brands.</p>
            <a className="contact-link" href="mailto:info@futura.example">
              info@futura.example
            </a>
            <p className="copyright">&copy; 2026 The Futura LLC. All rights reserved.</p>
            <nav className="footer-links" aria-label="Legal">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/terms-of-use">Terms of Use</Link>
              <Link href="/cookie-policy">Cookie Policy</Link>
            </nav>
          </Reveal>
        </section>
      </main>
    </>
  );
}
