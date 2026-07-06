import Nav from "./Nav";
import PageHero from "./PageHero";
import SiteFooter from "./SiteFooter";

// Shared shell for legal documents: hero + readable prose column + footer.
export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <PageHero eyebrow="Legal" title={title} lead={`Last updated: ${updated}`} />
      <main className="legal-prose">{children}</main>
      <SiteFooter />
    </>
  );
}
