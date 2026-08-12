"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface WindowWithScrollTrigger extends Window {
  ScrollTrigger?: {
    refresh: () => void;
  };
}

export default function ClientScriptInitialiser() {
  const pathname = usePathname();
  const hasInitialised = useRef(false);

  useEffect(() => {
    hasInitialised.current = false;

    const initialiseAll = () => {
      if (hasInitialised.current) return;
      hasInitialised.current = true;

      if (typeof window !== "undefined") {
        // Dispatch DOMContentLoaded for template script initialisation
        try {
          document.dispatchEvent(new Event("DOMContentLoaded"));
        } catch {
          // ignore
        }

        // Recalculate GSAP ScrollTrigger positions after layout has settled
        requestAnimationFrame(() => {
          const win = window as WindowWithScrollTrigger;
          if (win.ScrollTrigger) {
            try {
              win.ScrollTrigger.refresh();
            } catch {
              // ignore
            }
          }
        });
      }
    };

    // Wait for custom web fonts to be ready before running SplitText and GSAP Flip
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => {
        requestAnimationFrame(() => {
          setTimeout(initialiseAll, 60);
        });
      });
    } else {
      setTimeout(initialiseAll, 200);
    }
  }, [pathname]);

  return null;
}
