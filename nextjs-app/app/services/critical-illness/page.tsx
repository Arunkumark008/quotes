import ServicePageLayout from "@/components/ServicePageLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Critical Illness Insurance in Canada | Quotes Life Insurance",
  description: "Tax-free lump sum if you're diagnosed with cancer, heart attack, stroke or 25+ conditions. Compare critical illness quotes. AMF licensed brokers.",
};

const data = {
  title: "Critical Illness Coverage",
  titleFr: "Couverture maladies graves",
  tagline: "A tax-free lump sum payment when you're diagnosed with a serious illness.",
  icon: "🏥",
  color: "#4aa461",
  description: "Critical illness insurance pays you a tax-free lump sum if you're diagnosed with a covered serious illness such as cancer, heart attack, or stroke. Unlike disability insurance (which replaces income), CI gives you a single large payment to use however you need: medical costs, travel for treatment, paying off your mortgage, or simply maintaining your lifestyle while you recover.",
  highlights: [
    {
      heading: "Tax-free lump-sum payment",
      text: "Upon diagnosis of a covered condition and surviving the waiting period (usually 30 days), you receive a tax-free lump sum, typically $25,000 to $2,000,000, with no restrictions on how you spend it.",
    },
    {
      heading: "Covers 25+ critical conditions",
      text: "Standard policies cover life-threatening cancer, heart attack, stroke, and coronary artery bypass. Enhanced policies cover conditions like multiple sclerosis, Parkinson's, organ failure, blindness, and more.",
    },
    {
      heading: "Return of premium option",
      text: "Many carriers offer a return of premium rider. If you never make a claim, you get all your premiums back at a specified age or at death. This makes CI essentially free if you stay healthy.",
    },
    {
      heading: "Complements your health and life insurance",
      text: "Provincial health insurance covers treatment, but not your mortgage, lost income, or travel costs. CI fills this critical gap that neither life insurance nor disability insurance addresses.",
    },
  ],
  bestFor: [
    "Anyone with a family history of cancer or heart disease",
    "Self-employed individuals without group benefits",
    "Parents wanting financial protection during illness",
    "People with high financial obligations (mortgage, business)",
    "Anyone who wants peace of mind beyond basic coverage",
  ],
  faqs: [
    {
      q: "What conditions are covered?",
      a: "Most policies cover: life-threatening cancer, heart attack, stroke, coronary artery bypass surgery, kidney failure, major organ transplant, blindness, deafness, paralysis, and more. Enhanced policies cover 25+ conditions.",
    },
    {
      q: "How is critical illness different from disability insurance?",
      a: "Disability insurance replaces your income monthly if you can't work. Critical illness pays a one-time lump sum upon diagnosis, regardless of whether you can work. Many people benefit from having both.",
    },
    {
      q: "Is the critical illness benefit taxable?",
      a: "No. The lump sum benefit paid from a personally owned critical illness policy is completely tax-free in Canada.",
    },
    {
      q: "What is the waiting period?",
      a: "Most policies require you to survive 30 days after diagnosis before the benefit is paid. Some conditions have different waiting periods.",
    },
    {
      q: "Can I get CI insurance if I have pre-existing conditions?",
      a: "It depends on the condition and carrier. Some carriers specialize in higher-risk applicants. We'll find the best option for your health history.",
    },
  ],
};

export default function CriticalIllnessPage() {
  return <ServicePageLayout data={data} />;
}
