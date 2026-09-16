import type { Metadata } from "next";
import { Nunito, Sora } from "next/font/google";
import Script from "next/script";
import { LangProvider } from "@/lib/i18n";
import { ModalProvider } from "@/lib/modal";
import SmoothScroll from "@/components/SmoothScroll";
import PageLoader from "@/components/PageLoader";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Quotes Life Insurance — Free Life Insurance Quotes in Canada",
  description:
    "Quotes Life Insurance compares 20+ top Canadian carriers — Manulife, Desjardins, Foresters and more — to find you the best coverage at the lowest rate. AMF Licensed #179631.",
  keywords:
    "life insurance Canada, term life insurance, whole life insurance, critical illness, disability insurance, AMF licensed broker, Montreal",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${nunito.variable} ${sora.variable}`}>
      {/* Google Analytics 4 — G-0RZQ0JT92X */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0RZQ0JT92X"
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-0RZQ0JT92X', { page_path: window.location.pathname });
      `}</Script>
      <body style={{ fontFamily: "var(--font-nunito), system-ui, sans-serif", minHeight: "100vh" }}>
        <LangProvider>
          <ModalProvider>
            <PageLoader />
            <SmoothScroll>
              {children}
            </SmoothScroll>
          </ModalProvider>
        </LangProvider>
      </body>
    </html>
  );
}
