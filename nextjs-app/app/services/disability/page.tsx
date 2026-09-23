import ServicePageLayout from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disability Insurance in Canada | Quotes Life Insurance",
  description: "Protect your income if illness or injury prevents you from working. Compare disability insurance quotes from 20+ carriers. AMF licensed brokers.",
};

const data = {
  title: "Disability Insurance",
  titleFr: "Assurance invalidité",
  tagline: "Your income is your most valuable asset. Protect it.",
  icon: "🛡️",
  color: "#4aa461",
  description: "Disability insurance replaces a portion of your income, typically 60–70%, if illness or injury prevents you from working. Statistics show 1 in 3 Canadians will experience a disability lasting 90 days or more before age 65. Yet most Canadians have no private disability coverage. Without income, even a few months off work can be financially devastating.",
  highlights: [
    {
      heading: "Own-occupation vs any-occupation",
      text: "The strongest policies use an 'own-occupation' definition. You're considered disabled if you can't perform your specific job, even if you could do another. Cheaper policies use 'any-occupation,' which is harder to qualify under.",
    },
    {
      heading: "Covers illness and injury",
      text: "Disability insurance covers both accidents and illnesses like cancer, heart disease, mental health conditions, and musculoskeletal disorders. Most long-term disability claims are due to illness, not accidents.",
    },
    {
      heading: "Essential for self-employed and professionals",
      text: "Employees may have group disability coverage. Self-employed professionals, entrepreneurs, and independent contractors have no safety net. Private disability insurance is essential.",
    },
    {
      heading: "Tax-free benefits",
      text: "If you pay your own premiums with after-tax dollars, your disability benefits are received completely tax-free. This is a significant advantage over employer-paid group coverage.",
    },
  ],
  bestFor: [
    "Self-employed professionals and business owners",
    "Anyone whose family depends on their income",
    "Employees with inadequate group coverage",
    "High-income earners with significant financial obligations",
    "Anyone who can't afford to go months without income",
  ],
  faqs: [
    {
      q: "What is the elimination period?",
      a: "The elimination period is how long you must be disabled before benefits start, typically 30, 60, 90, or 120 days. A longer elimination period lowers your premium. Most people choose 90 days.",
    },
    {
      q: "How long do benefits last?",
      a: "Benefit periods typically run 2 years, 5 years, or to age 65. A 'to age 65' benefit period is the most comprehensive. It protects your income for your entire working life.",
    },
    {
      q: "Can I get disability insurance if I have health issues?",
      a: "Yes, many carriers offer coverage with exclusions or rated premiums for pre-existing conditions. We'll shop the market to find your best option.",
    },
    {
      q: "Is my group disability coverage enough?",
      a: "Often no. Group plans typically cover only 60% of base salary (not bonuses), use restrictive definitions, and benefits may be taxable. A personal policy can fill the gaps.",
    },
    {
      q: "How much disability coverage can I get?",
      a: "Insurers typically limit coverage to 60-70% of your gross income from all sources. This ensures you have incentive to return to work.",
    },
  ],
};

export default function DisabilityPage() {
  return <ServicePageLayout data={data} />;
}
