"use client";
import { useEffect, useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const FORM_ID = "616e35ca63bd79140f61b3ef";
const FORM_URL = `https://form.questionscout.com/${FORM_ID}`;

export default function QuoteModal({ open, onClose }: Props) {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Lock body scroll when open
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    setIframeLoaded(false); // Reset loading state when opening
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { 
      if (e.key === "Escape") onClose(); 
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed", 
          inset: 0, 
          zIndex: 9999,
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
          top: "50%", 
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10000,
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
        {/* Header */}
        <div style={{
          background: "var(--green)",
          padding: "16px 24px",
          display: "flex", 
          alignItems: "center",
          justifyContent: "space-between", 
          flexShrink: 0,
        }}>
          <div>
            <p style={{
              fontSize: "10px", 
              fontWeight: 800, 
              letterSpacing: "2px",
              textTransform: "uppercase", 
              color: "rgba(255,255,255,0.7)",
              marginBottom: "3px",
            }}>
              Free Consultation, No Obligation
            </p>
            <h3 style={{ 
              color: "#fff", 
              fontSize: "16px", 
              fontWeight: 800, 
              margin: 0 
            }}>
              Get Your Free Life Insurance Quote
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: "rgba(255,255,255,0.2)", 
              border: "none",
              borderRadius: "50%", 
              width: "34px", 
              height: "34px",
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              cursor: "pointer", 
              color: "#fff", 
              fontSize: "18px",
              flexShrink: 0, 
              marginLeft: "16px",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.3)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
          >
            ✕
          </button>
        </div>

        {/* Form iframe */}
        <div style={{ 
          flex: 1, 
          overflow: "hidden", 
          minHeight: "560px",
          position: "relative",
          background: "#fff",
        }}>
          {/* Loading spinner */}
          {!iframeLoaded && (
            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
            }}>
              <div className="modal-spinner" />
              <p style={{ 
                fontSize: "14px", 
                color: "#6b7280",
                fontWeight: 500,
              }}>
                Loading form...
              </p>
            </div>
          )}
          
          <iframe
            src={FORM_URL}
            style={{ 
              width: "100%", 
              height: "100%", 
              minHeight: "560px",
              border: "none",
              display: "block",
              opacity: iframeLoaded ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
            title="Get a Free Life Insurance Quote"
            onLoad={() => setIframeLoaded(true)}
          />
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
        .modal-spinner {
          width: 36px;
          height: 36px;
          border: 3px solid #e5e7eb;
          border-top-color: var(--green);
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}
