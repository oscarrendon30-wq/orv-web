export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-ELR9FCXN5B";

export const PRODUCTION_HOSTNAMES = [
  "oscarrendonvisual.com",
  "www.oscarrendonvisual.com",
];

/**
 * Checks if the current client hostname is an authorized production domain.
 * Safe for SSR (returns false on server).
 */
export const isProductionDomain = (): boolean => {
  if (typeof window === "undefined") return false;
  return PRODUCTION_HOSTNAMES.includes(window.location.hostname);
};

/**
 * Checks if tracking is allowed based on production domain and localStorage cookie consent
 */
export const isTrackingAllowed = (): boolean => {
  if (typeof window === "undefined") return false;
  return isProductionDomain() && localStorage.getItem("cookie-consent") === "accepted";
};

export const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
export const UTM_STORAGE_KEY = "orv_initial_utms";
export const UTM_PAGEVIEW_SENT_KEY = "orv_initial_utm_pageview_sent";

export type StoredUtms = Partial<Record<(typeof UTM_KEYS)[number], string>>;

/**
 * Captures UTM parameters from current URL search params and saves them to sessionStorage
 * if not already stored in the current session (first-touch persistence).
 */
export const captureInitialUtms = (): void => {
  if (typeof window === "undefined") return;
  try {
    if (sessionStorage.getItem(UTM_STORAGE_KEY)) return;

    const urlParams = new URLSearchParams(window.location.search);
    const utms: StoredUtms = {};
    let hasUtm = false;

    for (const key of UTM_KEYS) {
      const val = urlParams.get(key);
      if (val) {
        utms[key] = val;
        hasUtm = true;
      }
    }

    if (hasUtm) {
      sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utms));
    }
  } catch {
    // Gracefully handle environments with restricted storage
  }
};

/**
 * Retrieves initial UTM parameters stored in sessionStorage for the session.
 */
export const getStoredUtms = (): StoredUtms | null => {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(UTM_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredUtms) : null;
  } catch {
    return null;
  }
};

// Ensure gtag is always ready to receive events even before script fully loads
if (typeof window !== "undefined") {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function (...args: unknown[]) {
      window.dataLayer.push(args);
    };
}

/**
 * Sends a custom page_view event to GA4.
 * Original UTMs stored in sessionStorage are used only for the very first page_view
 * after GA4 initializes with consent. Subsequent page_views use real window.location.href.
 */
export const trackPageView = (url: string, title?: string) => {
  if (!isTrackingAllowed() || typeof window === "undefined" || !window.gtag) return;
  
  let pageLocation = window.location.href;
  const storedUtms = getStoredUtms();

  if (storedUtms) {
    try {
      const alreadySent = sessionStorage.getItem(UTM_PAGEVIEW_SENT_KEY) === "true";
      if (!alreadySent) {
        const urlObj = new URL(pageLocation);
        let modified = false;

        for (const [key, val] of Object.entries(storedUtms)) {
          if (val && !urlObj.searchParams.has(key)) {
            urlObj.searchParams.set(key, val);
            modified = true;
          }
        }

        if (modified) {
          pageLocation = urlObj.toString();
        }

        sessionStorage.setItem(UTM_PAGEVIEW_SENT_KEY, "true");
      }
    } catch {
      // Fallback to unmodified location if storage or URL parsing fails
    }
  }

  window.gtag("event", "page_view", {
    page_location: pageLocation,
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
export const trackEvent = (action: string, params: Record<string, unknown>) => {
  if (!isTrackingAllowed() || typeof window === "undefined" || !window.gtag) return;
  
  window.gtag("event", action, params);
};
