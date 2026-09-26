"use client";
import { useEffect } from "react";

interface Props {
  logoSrc: string;
  carrierName: string;
  theme?: "green" | "purple";
  hideColorSwitcher?: boolean;
  logoSize?: "normal" | "large" | "xlarge";
}

/**
 * This component overrides the logo in Header and optionally sets theme colors
 */
export default function CarrierLogoOverride({ 
  logoSrc, 
  carrierName, 
  theme = "green",
  hideColorSwitcher = false,
  logoSize = "normal"
}: Props) {
  useEffect(() => {
    // Create a style element to override the logo and theme
    const styleId = "carrier-logo-override";
    
    // Remove existing override if any
    const existing = document.getElementById(styleId);
    if (existing) existing.remove();

    // Theme colors
    const themeColors = theme === "purple" 
      ? `
        :root {
          --green: #572a4e !important;
          --green-dark: #462040 !important;
          --green-light: #f3e8f0 !important;
        }
      `
      : "";

    // Hide color switcher CSS
    const hideSwitcher = hideColorSwitcher
      ? `
        .color-switcher-bar {
          display: none !important;
        }
      `
      : "";

    // Logo size
    const sizeMap = {
      normal: "45px",
      large: "60px",
      xlarge: "75px"
    };
    const maxHeight = sizeMap[logoSize];

    // Create new style
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = `
      .logo-wrap img {
        content: url("${logoSrc}") !important;
        max-height: ${maxHeight} !important;
        width: auto !important;
      }
      ${themeColors}
      ${hideSwitcher}
    `;
    document.head.appendChild(style);

    // Also set localStorage for purple theme if needed
    if (theme === "purple") {
      localStorage.setItem("brand-color", "#572a4e");
    }

    // Cleanup on unmount
    return () => {
      const el = document.getElementById(styleId);
      if (el) el.remove();
      // Reset color when leaving
      if (theme === "purple") {
        localStorage.removeItem("brand-color");
      }
    };
  }, [logoSrc, theme, hideColorSwitcher, logoSize]);

  return null;
}
