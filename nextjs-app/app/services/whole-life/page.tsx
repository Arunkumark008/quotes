import ServicePageLayout from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whole Life Insurance in Canada — Quotes Life Insurance",
  description: "Permanent whole life insurance with guaranteed cash value. Compare whole life quotes from top Canadian carriers. Free advice from AMF licensed brokers.",
};

const data = {
  title: "Whole Life Insurance",
  titleFr: "Assurance vie entière",
  tagline: "Lifetime protection that never expires — with guaranteed growing cash value.",
  icon: "🏦",
  color: "#4aa461",
  description: "Whole life insurance is permanent coverage that lasts your entire lifetime, as long as premiums are paid. Unlike term insurance, whole life builds a guaranteed cash value over time that you can borrow against tax-free. It's ideal for estate planning, final expenses, and clients who want the certainty of lifelong protection.",
  highlights: [
    {
      heading: "Coverage that never expires",
      text: "Unlike term insurance, your whole life policy remains in force for your entire life. Your beneficiaries are guaranteed to receive the death benefit whenever you pass.",
    },
    {
      heading: "Guaranteed cash value growth",
      text: "A portion of every premium builds a guaranteed cash value inside the policy. This grows tax-deferred and can be accessed via policy loans for any purpose — retirement, emergencies, or opportunities.",
    },
    {
      heading: "Fixed premiums for life",
      text: "Your premium is guaranteed never to increase, regardless of your age or health changes. This predictability makes budgeting simple for the long term.",
    },
    {
      heading: "Participating policies pay dividends",
      text: "With participating whole life from carriers like Manulife or Sun Life, dividends can be used to reduce premiums, buy paid-up additions, or increase your cash value.",
    },
  ],
  bestFor: [
    "Estate and legacy planning",
    "Final expense coverage",
    "High-income earners seeking tax-sheltered growth",
    "Business succession planning",
    "Parents wanting lifelong protection for children",
  ],
  faqs: [
    {
      q: "How is whole life different from term life?",
      a: "Term life covers you for a fixed period (e.g. 20 years) and has no cash value. Whole life covers you forever and builds guaranteed cash value. Term is cheaper; whole life is a long-term financial asset.",
    },
    {
      q: "Can I borrow against my whole life policy?",
      a: "Yes — you can take a policy loan against your cash value at any time, tax-free, with no credit check. The loan accrues interest but never has a forced repayment schedule.",
    },
    {
      q: "What is a participating whole life policy?",
      a: "A participating policy is issued by a mutual insurer (like Manulife or Equitable Life). These policies may pay annual dividends based on the insurer's performance, which can increase your death benefit or reduce premiums.",
    },
    {
      q: "Is whole life insurance worth it in Canada?",
      a: "For the right client — yes. It's a permanent, guaranteed, tax-advantaged financial tool. It's not ideal for everyone; we'll help you determine if it fits your goals.",
    },
  ],
};

export default function WholeLifePage() {
  return <ServicePageLayout data={data} />;
}
