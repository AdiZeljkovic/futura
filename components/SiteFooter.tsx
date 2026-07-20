import Link from "next/link";

// Slim shared footer for sub-pages (the homepage keeps its full video footer).
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <Link href="/" className="site-footer__logo">
        FUTURA
      </Link>
      <nav className="footer-links" aria-label="Footer">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-of-use">Terms of Use</Link>
        <Link href="/cookie-policy">Cookie Policy</Link>
        <Link href="/accessibility-policy">Accessibility Policy</Link>
      </nav>
      <p className="copyright">
        &copy; {new Date().getFullYear()} Futura Digital LLC. All rights reserved.
      </p>
    </footer>
  );
}
