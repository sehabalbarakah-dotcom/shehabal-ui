"use client";

import Lenis from "lenis";
import { useEffect, ReactNode } from "react";
import { frame, cancelFrame } from "framer-motion";
import "lenis/dist/lenis.css";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      // autoRaf is true by default — we override it by driving via Framer Motion's
      // own scheduler so both share the same animation frame tick.
      autoRaf: false,
    });

    // Drive Lenis inside Framer Motion's RAF loop.
    // This keeps Lenis and all motion animations (whileInView, useScroll, etc.)
    // perfectly in sync — no 1-frame desync artefacts.
    function update({ timestamp }: { timestamp: number }) {
      lenis.raf(timestamp);
    }

    frame.update(update, true);

    return () => {
      cancelFrame(update);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
