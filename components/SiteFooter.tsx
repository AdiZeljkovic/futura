import Link from "next/link";
import Image from "next/image";
import { getSocials } from "@/lib/cms";

// Slim shared footer for sub-pages (the homepage keeps its full video footer).
export default async function SiteFooter() {
  const socials = await getSocials();
  return (
    <footer className="site-footer">
      <Link href="/" className="site-footer__logo" aria-label="FUTURA — home">
        <Image
          src="/futura-logo.png"
          alt="FUTURA"
          width={1001}
          height={210}
          className="site-footer__logo-img"
        />
      </Link>
      <nav className="footer-links" aria-label="Footer">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-of-use">Terms of Use</Link>
        <Link href="/cookie-policy">Cookie Policy</Link>
        <Link href="/accessibility-policy">Accessibility Policy</Link>
      </nav>
      {socials.length > 0 && (
        <nav className="footer-links social-links" aria-label="Social">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          ))}
        </nav>
      )}
      <p className="copyright">
        &copy; {new Date().getFullYear()} Futura Digital LLC. All rights reserved.
      </p>
    </footer>
  );
}
