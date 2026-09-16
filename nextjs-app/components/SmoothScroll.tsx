"use client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      // Snappy but smooth - reduced for faster feel
      duration: 1.0,
      // Faster easing curve - more responsive
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      // Slightly faster wheel response
      touchMultiplier: 1.8,
      wheelMultiplier: 1.1,
      infinite: false,
      syncTouch: false,
    });

    lenisRef.current = lenis;

    // Use a single rAF loop — most efficient
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
