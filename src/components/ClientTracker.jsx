"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import * as gtag from "../../lib/gtag"; // adjust the path if needed

export default function ClientTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window.gtag !== "undefined") {
      gtag.pageview(pathname);
    }
  }, [pathname]);

  return null; // this component doesn't render anything
}
