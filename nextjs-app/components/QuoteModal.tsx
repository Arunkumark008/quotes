"use client";
import { useEffect, useRef } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const RUNNER_ID = "qs-embed-6aa7eb9fc1c5e04d74de874e";
const FORM_SCRIPT_URL = "https://form.questionscout.com/qs-form-script.min.js";
const FORM_ID = "616e35ca63bd79140f61b3ef";

// Global flag to track if script is already injected
let scriptInjected = false;
let scriptPreloaded = false;

// Preload the script as soon as this module loads (before modal opens)
if (typeof window !== "undefined" && !scriptPreloaded) {
  scriptPreloaded = true;
  
  // Preconnect to QuestionScout domains for faster handshake
  const preconnect1 = document.createElement("link");
  preconnect1.rel = "preconnect";
  preconnect1.href = "https://form.questionscout.com";
  preconnect1.crossOrigin = "anonymous";
  document.head.appendChild(preconnect1);
  
  const preconnect2 = document.createElement("link");
  preconnect2.rel = "preconnect";
  preconnect2.href = "https://cdn.questionscout.com";
  preconnect2.crossOrigin = "anonymous";
  document.head.appendChild(preconnect2);

  // Preload the script with high priority
  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "script";
  link.href = FORM_SCRIPT_URL;
  document.head.appendChild(link);
  
  // Also prefetch the form page itself
  const prefetchForm = document.createElement("link");
  prefetchForm.rel = "prefetch";
  prefetchForm.href = `https://form.questionscout.com/${FORM_ID}`;
  document.head.appendChild(prefetchForm);
}

export default function QuoteModal({ open, onClose }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Inject script on first modal open
  useEffect(() => {
    if (!open) return;

    // Lock body scroll
    document.body.style.overflow = "hidden";

    // Inject the Question Scout script exactly once
    if (!scriptInjected) {
      scriptInjected = true;

      const s = document.createElement("script");
      s.src = FORM_SCRIPT_URL;
      s.setAttribute("data-form-id", FORM_ID);
      s.setAttribute("data-url-params", JSON.stringify([{ key: "campaign", value: "" }]));
      s.setAttribute("data-runner-id", RUNNER_ID);
      s.setAttribute("data-dimensions", JSON.stringify(["100%", "620px"]));
      s.async = true;
      document.head.appendChild(s);
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 999,
          background: "rgba(15,22,35,0.6)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          animation: "qs-fade 0.2s ease",
        }}
      />

      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "fixed",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1000,
          width: "min(720px, 96vw)",
          maxHeight: "92vh",
          background: "#fff",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 32px 80px rgba(0,0,0,0.28)",
          display: "flex",
          flexDirection: "column",
          animation: "qs-scale 0.25s ease",
        }}
      >
        {/* Header — now green */}
        <div style={{
          background: "var(--green)",
          padding: "16px 24px",
          display: "flex", alignItems: "center",
          justifyContent: "space-between", flexShrink: 0,
        }}>
          <div>
            <p style={{
              fontSize: "10px", fontWeight: 800, letterSpacing: "2px",
              textTransform: "uppercase", color: "rgba(255,255,255,0.7)",
              marginBottom: "3px",
            }}>
              Free Consultation — No Obligation
            </p>
            <h3 style={{ color: "#fff", fontSize: "16px", fontWeight: 800, margin: 0 }}>
              Get Your Free Life Insurance Quote
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: "rgba(255,255,255,0.2)", border: "none",
              borderRadius: "50%", width: "34px", height: "34px",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "#fff", fontSize: "18px",
              flexShrink: 0, marginLeft: "16px",
            }}
          >
            ✕
          </button>
        </div>

        {/* Question Scout form container */}
        <div ref={containerRef} style={{ flex: 1, overflow: "hidden", minHeight: "560px" }}>
          <div id={RUNNER_ID} style={{ width: "100%" }} />
        </div>
      </div>

      <style>{`
        @keyframes qs-fade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes qs-scale {
          from { opacity: 0; transform: translate(-50%, -46%) scale(0.95); }
          to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
      
        #qs-embed-6aa7eb9fc1c5e04d74de874e,
        #qs-embed-6aa7eb9fc1c5e04d74de874e * { scrollbar-width: none !important; }
        #qs-embed-6aa7eb9fc1c5e04d74de874e ::-webkit-scrollbar { display: none !important; width: 0 !important; }`}</style>
    </>
  );
}

