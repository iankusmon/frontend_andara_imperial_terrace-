// lib/gtm.ts
declare global {
  interface Window {
    gtag: (type: string, id: string, params?: Record<string, any>) => void;
  }
}

const GTM_ID = "GTM-WDBXLMPN";

export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GTM_ID, { page_path: url });
  }
};

