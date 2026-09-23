import ServicePageLayout from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Term Life Insurance in Canada | Quotes Life Insurance",
  description: "Compare term life insurance from 20+ Canadian carriers. Get the best rates for 10, 20, or 30-year term coverage. AMF licensed brokers.",
};

const data = {
  title: "Term Life Insurance",
  titleFr: "Assurance vie temporaire",
  tagline: "Maximum coverage at the lowest cost. Simple, straightforward protection.",
  icon: "📋",
  color: "#4aa461",
  description: "Term life insurance provides pure death benefit coverage for a fixed period, typically 10, 20, or 30 years. If you pass away during the term, your beneficiaries receive the tax-free death benefit. It's the simplest, most cost-effective form of life insurance and is ideal for families who need large coverage amounts at low premiums.",
  highlights: [
    {
      heading: "Affordable coverage",
      text: "Term insurance is the most cost-effective way to get substantial coverage. A healthy 35-year-old can get $500,000 of 20-year term coverage for under $30/month.",
    },
    {
      heading: "Choose your term length",
      text: "Choose a term that matches your needs: 10, 15, 20, 25, or 30 years. Most families align the term with their mortgage length or until children are financially independent.",
    },
    {
      heading: "Convertible to permanent",
      text: "Most term policies can be converted to whole or universal life without a new medical exam. This gives you flexibility as your needs change.",
    },
    {
      heading: "Level premiums",
      text: "Your premium stays the same for the entire term. No surprises, no increases. Lock in your rate while you're young and healthy.",
    },
  ],
  bestFor: [
    "Young families with mortgages and children",
    "Anyone replacing income for dependents",
    "Business owners needing key-person coverage",
    "Those wanting maximum coverage at minimum cost",
    "People with temporary financial obligations",
  ],
  faqs: [
    {
      q: "What happens when my term expires?",
      a: "You can renew annually at a higher rate, convert to permanent insurance, or let the policy lapse. Many people buy a new term policy if still insurable.",
    },
    {
      q: "How much term insurance do I need?",
      a: "A common rule is 10-15x your annual income, plus outstanding debts. We'll help you calculate the right amount based on your family's specific needs.",
    },
    {
      q: "Can I get term insurance without a medical exam?",
      a: "Yes. Some carriers like Canada Protection Plan offer no-medical term policies. These carry higher premiums but are ideal if you have health conditions.",
    },
    {
      q: "Is term insurance better than whole life?",
      a: "It depends on your goals. Term is better for temporary needs and maximum coverage. Whole life is better for lifetime coverage and cash value accumulation.",
    },
    {
      q: "Which insurance companies do you work with?",
      a: "We compare Manulife, Desjardins, iA Financial, Foresters, Canada Protection Plan, Empire Life, Humania, Assumption Life, and more. Over 20 carriers in total.",
    },
  ],
};

export default function TermLifePage() {
  return <ServicePageLayout data={data} />;
}
