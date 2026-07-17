interface Window {
  dataLayer: any[];
  gtag: (...args: any[]) => void;
  [key: `ga-disable-${string}`]: boolean | undefined;
}
