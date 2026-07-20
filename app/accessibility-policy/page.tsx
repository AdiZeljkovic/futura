import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import PolicyBody from "@/components/PolicyBody";
import { getPolicy } from "@/lib/data/policies";
import { withPageSeo } from "@/lib/cms";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo";

const policy = getPolicy("accessibility-policy")!;

export async function generateMetadata(): Promise<Metadata> {
  const seo = await withPageSeo("/accessibility-policy", {
    title: policy.title,
    description: `${policy.meta.company}'s commitment to web accessibility (WCAG 2.1 AA) and how to reach us with feedback. Effective ${policy.effectiveDate}.`,
  });
  return {
    ...seo,
    alternates: { canonical: "/accessibility-policy" },
    openGraph: { url: "/accessibility-policy" },
  };
}

export default function AccessibilityPolicyPage() {
  return (
    <>
      <LegalPage title={policy.title} updated={policy.effectiveDate}>
        <PolicyBody policy={policy} />
      </LegalPage>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: policy.title, path: "/accessibility-policy" },
        ])}
      />
    </>
  );
}
