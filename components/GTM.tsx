"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

const GTM_ID = "G-2BE429XD9C";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Function gtag harus berada di luar block
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
      console.log("Stored consent:", storedConsent);
      setConsentGranted(storedConsent === "true");
    }
  }, []);

  const grantConsent = () => {
    if (typeof window !== "undefined") {
      console.log("Consent granted!");
      localStorage.setItem("consentGranted", "true");
      setConsentGranted(true);

      // Pastikan dataLayer sudah ada
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
      gtmScript.onload = () => console.log("GTM loaded successfully!");
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

      {/* Load GTM only if consent is granted */}
      {consentGranted && (
        <Script
          id="gtm"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`}
        />
      )}

      {/* Consent Banner */}
      {consentGranted === false && (
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg flex justify-between items-center z-50">
          <p>We use cookies for analytics. Do you accept?</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => {
              console.log("Button clicked!");
              grantConsent();
            }}
          >
            Accept
          </button>
        </div>
      )}
    </>
  );
}
