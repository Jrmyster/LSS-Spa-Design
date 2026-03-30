import { useEffect } from "react";

const BOOKING_URL = "lss-spa-wellness-llc.square.site";

async function post(path: string) {
  try {
    await fetch(`/api${path}`, { method: "POST" });
  } catch {
    // fire-and-forget — never block the user interaction
  }
}

/** Call once at app mount to count the page visit. */
export function usePageTracking() {
  useEffect(() => {
    post("/analytics/visit");

    function handleClick(e: MouseEvent) {
      const target = (e.target as HTMLElement).closest("a");
      if (target?.href?.includes(BOOKING_URL)) {
        post("/analytics/booking-click");
      }
    }

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);
}
