import Script from "next/script";
import { getCmsSettings } from "@/lib/cms";

/**
 * Injects GA4 / GTM based on FuturaOS site settings — nothing renders when
 * the fields are empty. Verification meta tags are handled in metadata.
 */
export default async function Analytics() {
  const settings = await getCmsSettings();
  const gtm = settings.gtmId?.trim();
  const ga4 = settings.ga4Id?.trim();

  if (gtm) {
    return (
      <>
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtm}');`}
        </Script>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtm}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </>
    );
  }

  if (ga4) {
    return (
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${ga4}`}
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga4}');`}
        </Script>
      </>
    );
  }

  return null;
}
