"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

const GTM_ID = "G-2BE429XD9C";

// 🔥 Tambahkan deklarasi global untuk dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

// 🔥 Definisikan gtag di luar useEffect agar tidak terkena strict mode
const gtag = (...args: any[]) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push(args);
  }
};

export default function GTM() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      gtag("js", new Date());
      gtag("config", GTM_ID, { page_path: pathname });
    }
  }, [pathname]);

  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`} />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GTM_ID}', { page_path: window.location.pathname });
          `,
        }}
      />
    </>
  );
}
