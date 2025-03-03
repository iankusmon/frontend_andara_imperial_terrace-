"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

const GTM_ID = "GTM-WDBXLMPN";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Define gtag function globally
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
      console.log("Stored Consent:", storedConsent); // Debugging

      if (storedConsent !== null) {
        setConsentGranted(storedConsent === "true");
      } else {
        setConsentGranted(false);
      }
    }
  }, []);

  const acceptCookies = () => {
    console.log("User accepted cookies"); // Debugging
    localStorage.setItem("consentGranted", "true");
    setConsentGranted(true);
    updateConsent();
  };

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
      {/* Load Google Tag Manager only if consent is granted */}
      {consentGranted && (
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
      )}

      {/* Consent Banner */}
      {consentGranted === false && (
        <div
          className="fixed bottom-5 left-5 right-5 bg-gray-800 text-white p-4 rounded-md shadow-lg flex justify-between items-center z-50"
        >
          <p className="text-sm">
            We use cookies to improve your experience. By accepting, you agree to our privacy policy.
          </p>
          <button
            onClick={acceptCookies}
            className="ml-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
          >
            Accept Cookies
          </button>
        </div>
      )}
    </>
  );
}
