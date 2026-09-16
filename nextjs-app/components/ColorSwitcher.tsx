"use client";
import { useState, useEffect } from "react";

const colors = [
  { name: "Green", value: "#4aa461" },
  { name: "Purple", value: "#572a4e" },
];

export default function ColorSwitcher() {
  const [activeColor, setActiveColor] = useState("#4aa461");

  useEffect(() => {
    // Load saved color from localStorage
    const saved = localStorage.getItem("brand-color");
    if (saved) {
      setActiveColor(saved);
      document.documentElement.style.setProperty("--green", saved);
    }
  }, []);

  const handleColorChange = (color: string) => {
    setActiveColor(color);
    document.documentElement.style.setProperty("--green", color);
    localStorage.setItem("brand-color", color);
  };

  return (
    <>
      <div className="color-switcher-bar">
        <span className="color-switcher-label">Theme:</span>
        <div className="color-switcher-options">
          {colors.map((color) => (
            <button
              key={color.value}
              onClick={() => handleColorChange(color.value)}
              className={`color-switcher-btn ${activeColor === color.value ? "active" : ""}`}
              style={{ backgroundColor: color.value }}
              title={color.name}
            >
              {activeColor === color.value && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .color-switcher-bar {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .color-switcher-label {
          font-size: 11px;
          font-weight: 600;
          color: rgba(255,255,255,0.7);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .color-switcher-options {
          display: flex;
          gap: 6px;
        }
        .color-switcher-btn {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.3);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          transition: transform 0.2s, border-color 0.2s;
        }
        .color-switcher-btn:hover {
          transform: scale(1.1);
          border-color: rgba(255,255,255,0.6);
        }
        .color-switcher-btn.active {
          border-color: #fff;
          box-shadow: 0 0 0 2px rgba(255,255,255,0.3);
        }
      `}</style>
    </>
  );
}
