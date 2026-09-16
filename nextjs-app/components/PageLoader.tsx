"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [prevPath, setPrevPath] = useState(pathname);

  useEffect(() => {
    if (pathname !== prevPath) {
      // New route — show fast loader
      setLoading(true);
      setProgress(30);
      const t1 = setTimeout(() => setProgress(70), 80);
      const t2 = setTimeout(() => setProgress(95), 200);
      const t3 = setTimeout(() => {
        setProgress(100);
        setTimeout(() => { setLoading(false); setProgress(0); }, 150);
      }, 350);
      setPrevPath(pathname);
      return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }
  }, [pathname, prevPath]);

  if (!loading && progress === 0) return null;

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0,
      height: "3px", zIndex: 9999,
      background: "rgba(0,0,0,0.05)",
      pointerEvents: "none",
    }}>
      <div style={{
        height: "100%",
        width: `${progress}%`,
        background: "linear-gradient(90deg, var(--green) 0%, #5bc970 100%)",
        transition: "width 0.15s cubic-bezier(0.22, 1, 0.36, 1)",
        borderRadius: "0 2px 2px 0",
        boxShadow: "0 0 12px rgba(74,164,97,0.7)",
      }} />
    </div>
  );
}
