import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import PolicyBody from "@/components/PolicyBody";
import { getPolicy } from "@/lib/data/policies";
import { withPageSeo } from "@/lib/cms";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo";

const policy = getPolicy("privacy-policy")!;

export async function generateMetadata(): Promise<Metadata> {
  const seo = await withPageSeo("/privacy-policy", {
    title: policy.title,
    description: `How ${policy.meta.company} collects, uses and protects your information. Effective ${policy.effectiveDate}.`,
  });
  return {
    ...seo,
    alternates: { canonical: "/privacy-policy" },
    openGraph: { url: "/privacy-policy" },
  };
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalPage title={policy.title} updated={policy.effectiveDate}>
        <PolicyBody policy={policy} />
      </LegalPage>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: policy.title, path: "/privacy-policy" },
        ])}
      />
    </>
  );
}
