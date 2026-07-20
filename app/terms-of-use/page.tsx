import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import PolicyBody from "@/components/PolicyBody";
import { getPolicy } from "@/lib/data/policies";
import { withPageSeo } from "@/lib/cms";
import { JsonLd, breadcrumbJsonLd } from "@/lib/seo";

const policy = getPolicy("terms-of-use")!;

export async function generateMetadata(): Promise<Metadata> {
  const seo = await withPageSeo("/terms-of-use", {
    title: policy.title,
    description: `Terms governing your access to and use of the ${policy.meta.company} website. Effective ${policy.effectiveDate}.`,
  });
  return {
    ...seo,
    alternates: { canonical: "/terms-of-use" },
    openGraph: { url: "/terms-of-use" },
  };
}

export default function TermsOfUsePage() {
  return (
    <>
      <LegalPage title={policy.title} updated={policy.effectiveDate}>
        <PolicyBody policy={policy} />
      </LegalPage>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: policy.title, path: "/terms-of-use" },
        ])}
      />
    </>
  );
}
