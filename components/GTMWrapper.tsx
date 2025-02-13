"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

const GTM_ID = "G-2BE429XD9C";

export default function GTMWrapper() {
  const [consentGranted, setConsentGranted] = useState<boolean | null>(null);

  useEffect(() => {
    const storedConsent = localStorage.getItem("consentGranted");
    setConsentGranted(storedConsent === "true");
  }, []);

  const grantConsent = () => {
    localStorage.setItem("consentGranted", "true");
    setConsentGranted(true);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }

    gtag("consent", "update", {
      ad_user_data: "granted",
      ad_personalization: "granted",
      ad_storage: "granted",
      analytics_storage: "granted",
    });

    // Load GTM
    const gtmScript = document.createElement("script");
    gtmScript.async = true;
    gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(gtmScript);
  };

  return (
    <>
      {/* Set default consent state */}
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
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg flex justify-between items-center">
          <p>We use cookies for analytics. Do you accept?</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={grantConsent}
          >
            Accept
          </button>
        </div>
      )}
    </>
  );
}
