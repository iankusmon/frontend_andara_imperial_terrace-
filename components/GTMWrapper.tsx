"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

const GTM_ID = "GTM-WDBXLMPN"; // Ganti dengan ID GTM Anda
const GA_ID = "G-Y4J434SLC6"; // Ganti dengan ID Google Analytics Anda

export default function GTMWrapper() {
  const pathname = usePathname();
  const [consentGranted, setConsentGranted] = useState(false);

  useEffect(() => {
    if (consentGranted) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "page_view",
        page_path: pathname,
      });
    }
  }, [pathname, consentGranted]);

  return (
    <>
      {/* GTM Script */}
      {consentGranted && (
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />
      )}

      {/* Google Analytics (GA4) */}
      {consentGranted && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script
            id="ga4-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { page_path: window.location.pathname });
              `,
            }}
          />
        </>
      )}

      {/* Consent Banner */}
      {!consentGranted && (
        <div
          style={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            background: "black",
            color: "white",
            padding: "15px",
            textAlign: "center",
            zIndex: 1000,
          }}
        >
          <p>This website uses cookies for analytics. Do you accept?</p>
          <button
            onClick={() => setConsentGranted(true)}
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              padding: "10px 20px",
              cursor: "pointer",
              marginLeft: "10px",
            }}
          >
            Accept
          </button>
        </div>
      )}

      {/* GTM NoScript */}
      {consentGranted && (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      )}
    </>
  );
}
