import ServicePageLayout from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Universal Life Insurance in Canada | Quotes Life Insurance",
  description: "Flexible permanent coverage with tax-advantaged investing. Compare universal life quotes from 20+ carriers. AMF licensed brokers.",
};

const data = {
  title: "Universal Life Insurance",
  titleFr: "Assurance vie universelle",
  tagline: "Permanent protection with flexible premiums and tax-sheltered growth.",
  icon: "📈",
  color: "#4aa461",
  description: "Universal life insurance combines permanent death benefit protection with a tax-advantaged investment account. It offers more flexibility than whole life: you can adjust your premiums and death benefit as your circumstances change. The investment component grows tax-sheltered and can be accessed during your lifetime.",
  highlights: [
    {
      heading: "Flexible premiums",
      text: "Unlike whole life, universal life lets you adjust how much you pay and the level of coverage you hold (within limits) as your financial situation evolves.",
    },
    {
      heading: "Tax-advantaged investing",
      text: "The investment account inside your policy grows completely tax-deferred. You can choose from a variety of investment options, from guaranteed GICs to equity index funds.",
    },
    {
      heading: "Permanent coverage",
      text: "Coverage lasts your entire life as long as sufficient premium is paid. Your beneficiaries receive the death benefit tax-free whenever you pass away.",
    },
    {
      heading: "Estate planning tool",
      text: "Universal life is commonly used to create a tax-free legacy, cover estate taxes, equalize inheritances between children, or fund charitable giving.",
    },
  ],
  bestFor: [
    "High-income earners seeking tax-advantaged investing",
    "Business owners for corporate-owned insurance strategies",
    "Those who have maxed out RRSP and TFSA room",
    "People wanting permanent coverage with investment flexibility",
    "Estate planning and wealth transfer",
  ],
  faqs: [
    {
      q: "What's the difference between universal life and whole life?",
      a: "Both are permanent policies. Whole life has fixed premiums and guaranteed cash value. Universal life offers flexible premiums and links growth to investment options. Higher potential but more complexity.",
    },
    {
      q: "Can I lose money in a universal life policy?",
      a: "If you choose market-linked investments and markets decline, yes. However, you can also choose guaranteed interest options for stability. The death benefit remains secure.",
    },
    {
      q: "What are the tax benefits?",
      a: "Investment growth is tax-sheltered inside the policy. Death benefit is tax-free to beneficiaries. You can also access cash value via policy loans without triggering immediate taxes.",
    },
    {
      q: "Is universal life a good investment?",
      a: "It's primarily insurance with an investment component. It's best for those who need permanent coverage AND want tax-sheltered growth. It's not meant to replace traditional investing.",
    },
    {
      q: "How much flexibility do I really have?",
      a: "Within limits set by the policy, you can increase or decrease premiums, adjust the death benefit, change investment options, and access cash value. We'll explain all options clearly.",
    },
  ],
};

export default function UniversalLifePage() {
  return <ServicePageLayout data={data} />;
}
