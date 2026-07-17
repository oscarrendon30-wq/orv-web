"use client";

import { useEffect, useState, Suspense, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { GA_MEASUREMENT_ID, isTrackingAllowed, trackPageView } from "@/utils/analytics";

function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isTrackingAllowed()) {
      const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : "");
      trackPageView(url);
    }
  }, [pathname, searchParams]);

  return null;
}

export default function GoogleAnalytics() {
  const [consentGranted, setConsentGranted] = useState(false);

  useEffect(() => {
    // 1. Initial check
    setConsentGranted(isTrackingAllowed());

    // 2. Custom event listener for same-tab changes
    const handleConsentChanged = () => {
      const isAllowed = isTrackingAllowed();
      setConsentGranted(isAllowed);
      
      if (isAllowed) {
        window[`ga-disable-${GA_MEASUREMENT_ID}`] = false;
        // In case the script was already injected and we are just re-enabling
        // we can track the page view manually. If it's the first time,
        // the Script tag will inject and the AnalyticsTracker will run
        // because its effect depends on pathname/searchParams and runs on mount.
      } else {
        revokeConsent();
      }
    };

    // 3. Storage event for cross-tab changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "cookie-consent") {
        handleConsentChanged();
      }
    };

    window.addEventListener("cookieConsentChanged", handleConsentChanged);
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("cookieConsentChanged", handleConsentChanged);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const revokeConsent = () => {
    window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
    
    // Attempt to clear _ga cookies
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf('=');
      const name = eqPos > -1 ? cookie.substring(0, eqPos).trim() : cookie.trim();
      if (name.startsWith('_ga')) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
        const domain = window.location.hostname;
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=' + domain;
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.' + domain;
      }
    }
    
    // Reload page to fully flush states
    window.location.reload();
  };

  if (!consentGranted) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_MEASUREMENT_ID}', {
              send_page_view: false
            });
          `,
        }}
      />
      <Suspense fallback={null}>
        <AnalyticsTracker />
      </Suspense>
    </>
  );
}
