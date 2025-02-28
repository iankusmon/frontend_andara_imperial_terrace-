"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

const GTM_ID = "G-2BE429XD9C"; // Pastikan ini adalah ID GTM yang benar

declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Properly define gtag
const gtag = (...args: any[]) => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(args);
  }
};

export default function GTM() {
  const [consentGranted, setConsentGranted] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedConsent = localStorage.getItem("consentGranted");

      if (!storedConsent) {
        // Automatically accept cookies if user hasn't set a preference
        localStorage.setItem("consentGranted", "true");
        setConsentGranted(true);
        updateConsent();
      } else {
        setConsentGranted(storedConsent === "true");
      }
    }
  }, []);

  const updateConsent = () => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      gtag("consent", "update", {
        ad_user_data: "granted",
        ad_personalization: "granted",
        ad_storage: "granted",
        analytics_storage: "granted",
      });

      console.log("Consent updated and GTM initialized!");
    }
  };

  return (
    <>
      {/* Load Google Tag Manager (GTM) */}
      <Script
        id="gtm-init"
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

      {/* Consent Management */}
      <Script id="consent-mode" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'ad_storage': 'denied',
            'analytics_storage': 'denied',
            'wait_for_update': 500
          });
        `}
      </Script>

      {/* No Consent Banner Since It’s Auto-Accepted */}
    </>
  );
}
