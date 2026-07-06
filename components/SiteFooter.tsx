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
      </nav>
      <p className="copyright">&copy; 2026 The Futura LLC. All rights reserved.</p>
    </footer>
  );
}
