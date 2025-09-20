import { useMemo } from "react";

export default function useDeviceAgent() {
  const isMobile = useMemo(() => {
    if (typeof navigator === "undefined") return false;

    const userAgent = navigator.userAgent;
    const mobileRegex =
      /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;

    return mobileRegex.test(userAgent);
  }, []);

  return { isMobile };
}
