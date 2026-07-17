export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-ELR9FCXN5B";

/**
 * Checks if tracking is allowed based on localStorage cookie consent
 */
export const isTrackingAllowed = (): boolean => {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("cookie-consent") === "accepted";
};

// Ensure gtag is always ready to receive events even before script fully loads
if (typeof window !== "undefined") {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
}

/**
 * Sends a custom page_view event to GA4.
 */
export const trackPageView = (url: string, title?: string) => {
  if (!isTrackingAllowed() || typeof window === "undefined" || !window.gtag) return;
  
  window.gtag("event", "page_view", {
    page_location: window.location.href,
    page_path: url,
    page_title: title || document.title,
  });
};

/**
 * Tracks a generate_lead event (form submission).
 */
export const trackGenerateLead = () => {
  if (!isTrackingAllowed() || typeof window === "undefined" || !window.gtag) return;
  
  window.gtag("event", "generate_lead", {
    currency: "USD",
    value: 0
  });
};

/**
 * Tracks a click on a WhatsApp button.
 */
export const trackClickWhatsApp = (buttonLocation: string) => {
  if (!isTrackingAllowed() || typeof window === "undefined" || !window.gtag) return;
  
  window.gtag("event", "click_whatsapp", {
    button_location: buttonLocation,
  });
};

/**
 * Tracks a click on a CTA.
 */
export const trackCtaClick = (ctaName: string, buttonLocation: string) => {
  if (!isTrackingAllowed() || typeof window === "undefined" || !window.gtag) return;
  
  window.gtag("event", "cta_click", {
    cta_name: ctaName,
    button_location: buttonLocation,
  });
};

/**
 * Tracks generic events safely.
 */
export const trackEvent = (action: string, params: Record<string, any>) => {
  if (!isTrackingAllowed() || typeof window === "undefined" || !window.gtag) return;
  
  window.gtag("event", action, params);
};
