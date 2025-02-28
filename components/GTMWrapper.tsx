"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

const GTM_ID = "G-QB0F5RXXGV";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Define gtag globally
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

      // Load GTM dynamically
      const gtmScript = document.createElement("script");
      gtmScript.async = true;
      gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      gtmScript.onload = () => console.log("GTM loaded automatically!");
      document.head.appendChild(gtmScript);
    }
  };

  return (
    <>
      {/* Set default consent state before analytics load */}
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

      {/* Load GTM if consent is granted */}
      {consentGranted && (
        <Script
          id="gtm"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
        />
      )}

      {/* No Consent Banner Since It’s Auto-Accepted */}
    </>
  );
}
