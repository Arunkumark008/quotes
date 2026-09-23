import ServicePageLayout from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whole Life Insurance in Canada | Quotes Life Insurance",
  description: "Lifetime coverage with guaranteed cash value growth. Compare whole life quotes from 20+ carriers. AMF licensed brokers.",
};

const data = {
  title: "Whole Life Insurance",
  titleFr: "Assurance vie entière",
  tagline: "Lifetime protection that never expires, with guaranteed growing cash value.",
  icon: "🏦",
  color: "#4aa461",
  description: "Whole life insurance provides permanent coverage that lasts your entire life, with premiums that never increase. A portion of each premium builds guaranteed cash value that grows tax-deferred. This cash value can be accessed during your lifetime through policy loans or withdrawals, making whole life both protection and a financial asset.",
  highlights: [
    {
      heading: "Guaranteed for life",
      text: "Your coverage and premiums are locked in from day one. As long as you pay premiums, your policy cannot be cancelled and your rates cannot increase.",
    },
    {
      heading: "Cash value accumulation",
      text: "A portion of every premium builds a guaranteed cash value inside the policy. This grows tax-deferred and can be accessed via policy loans for any purpose: retirement, emergencies, or opportunities.",
    },
    {
      heading: "Participating dividends",
      text: "Participating whole life policies may pay annual dividends based on company performance. These dividends can purchase additional coverage, reduce premiums, or be taken as cash.",
    },
    {
      heading: "Estate planning",
      text: "Whole life is ideal for estate planning. The death benefit passes to beneficiaries tax-free, can cover estate taxes, and provides a guaranteed inheritance regardless of market conditions.",
    },
  ],
  bestFor: [
    "Those wanting guaranteed lifetime coverage",
    "Parents and grandparents building legacy",
    "High-net-worth individuals for estate planning",
    "Business owners for buy-sell agreements",
    "Anyone wanting a conservative, guaranteed asset",
  ],
  faqs: [
    {
      q: "Why is whole life more expensive than term?",
      a: "Whole life premiums are higher because coverage is permanent (not temporary), cash value is guaranteed to grow, and the insurer will definitely pay a claim (unlike term where most policies expire unused).",
    },
    {
      q: "Can I access the cash value?",
      a: "Yes. You can take a policy loan against your cash value at any time, tax-free, with no credit check. The loan accrues interest but never has a forced repayment schedule.",
    },
    {
      q: "What happens if I stop paying premiums?",
      a: "Options include: using cash value to pay premiums, reducing coverage to a paid-up amount, or surrendering for the cash value. Your advisor will explain all options.",
    },
    {
      q: "Is whole life insurance worth it?",
      a: "For the right client, yes. It's a permanent, guaranteed, tax-advantaged financial tool. It's not ideal for everyone; we'll help you determine if it fits your goals.",
    },
    {
      q: "How do participating dividends work?",
      a: "If you own a participating policy, the insurance company shares profits with policyholders through dividends. These are not guaranteed but have been consistently paid by major carriers for over 100 years.",
    },
  ],
};

export default function WholeLifePage() {
  return <ServicePageLayout data={data} />;
}
