// @types.globals.d.ts
declare global {
  interface Window {
    analytics: {
      trackEvent: (arg: string) => void;
    };
  }
}

export {};
