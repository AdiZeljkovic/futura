import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import PolicyBody from "@/components/PolicyBody";
import { getPolicy } from "@/lib/data/policies";
import { withPageSeo } from "@/lib/cms";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo";

const policy = getPolicy("cookie-policy")!;

export async function generateMetadata(): Promise<Metadata> {
  const seo = await withPageSeo("/cookie-policy", {
    title: policy.title,
    description: `How ${policy.meta.company} uses cookies and similar technologies on this website, and how to manage them. Effective ${policy.effectiveDate}.`,
  });
  return {
    ...seo,
    alternates: { canonical: "/cookie-policy" },
    openGraph: { url: "/cookie-policy" },
  };
}

export default function CookiePolicyPage() {
  return (
    <>
      <LegalPage title={policy.title} updated={policy.effectiveDate}>
        <PolicyBody policy={policy} />
      </LegalPage>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: policy.title, path: "/cookie-policy" },
        ])}
      />
    </>
  );
}
