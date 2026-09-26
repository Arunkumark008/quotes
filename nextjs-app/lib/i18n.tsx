"use client";
import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";

// ── Translations ──────────────────────────────────────────
export const translations = {
  en: {
    // Nav
    home: "Home", services: "Services", about: "About", contact: "Contact",
    getQuote: "Get a Free Quote",
    insuranceSolutions: "Insurance Solutions",
    whyUs: "Why Us",
    resources: "Resources",
    articles: "Articles",
    joinTeam: "Join Our Team",
    navTagline: "PROTECT TODAY. BRIGHTER TOMORROW",
    // Services dropdown
    termLife: "Term Life Insurance", wholeLife: "Whole Life Insurance",
    universalLife: "Universal Life Insurance", criticalIllness: "Critical Illness Coverage",
    disability: "Disability Insurance",
    // Insurance strip (below hero)
    stripH2a: "Find the Right", stripH2b: "Coverage for You",
    stripSub: "From protecting your loved ones to securing your assets, we help you find the right coverage at the right price, with no obligation and no cost to compare.",
    strip1Title: "Life Insurance",      strip1Desc: "Protect the people who depend on you.",
    strip2Title: "Critical Illness",    strip2Desc: "A lump-sum payout on serious diagnosis.",
    strip3Title: "Disability",          strip3Desc: "Replace your income if you can't work.",
    strip4Title: "Business Insurance",  strip4Desc: "Protect your business and livelihood.",
    stripLearn: "Learn More →",
    // Hero
    heroLabel: "Licensed Insurance Broker",
    heroH1a: "Protect What", heroH1b: "Matters Most", heroH1c: "to Your Family",
    heroSub: "We compare 20+ top Canadian carriers like Manulife, Desjardins, Foresters and more to find you the best coverage at the lowest rate. Our advice is always",
    heroFree: "100% free",
    heroCta1: "Get My Free Quote →", heroCta2: "Learn More",
    heroFormTitle: "Get Your Life Insurance Quote",
    heroFormLabel: "Free Quote, No Obligation",
    // Trust
    trust1: "AMF Regulated", trust2: "Free Advice", trust3: "20+ Carriers", trust4: "4.9 Rating",
    // About
    aboutLabel: "About Us",
    aboutH2a: "Every Family Deserves", aboutH2b: "Financial Security",
    aboutP1: "Quotes Life Insurance, operated by DCW Financial Inc., is a family-built, client-first brokerage led by Denesh Logeswaran and Lucia Medina. Founded in 1998.",
    aboutP2: "We operate as independent advisors contracted through Experior Financial Group Inc. (MGA), giving us access to 20+ top Canadian carriers, so we always recommend what's right for you.",
    aboutAmf: "AMF Licensed & Regulated",
    aboutAmfSub: "Licence #179631 · Firm Registration #608808",
    aboutCta: "Learn More About Us →",
    stat1: "Families Protected", stat2: "Carrier Partners", stat3: "Years Experience", stat4: "Google Rating",
    // Services section
    servicesLabel: "Our Services",
    servicesH2a: "Coverage for Every", servicesH2b: "Stage of Life",
    servicesSub: "Compare policies across 20+ carriers. One call, zero fees.",
    viewAll: "View All Services",
    // WhyUs
    whyLabel: "Why Choose Us",
    whyH2a: "Your Family Deserves the Best.", whyH2b: "Here's Why We're It",
    why1Title: "100% Free Advice",        why1Desc: "You never pay us a dollar. We earn a commission only if you take a policy, so our guidance is always in your interest.",
    why2Title: "Truly Independent",       why2Desc: "Not tied to any insurer. We compare 20+ carriers to find what's genuinely best for you.",
    why3Title: "Fully Regulated",         why3Desc: "Fully regulated by the Autorité des marchés financiers (AMF).",
    why4Title: "Family-Built Brokerage",  why4Desc: "Founded by Denesh Logeswaran & Lucia Medina, advisors who treat every client like family.",
    why5Title: "Canadian Specialists",    why5Desc: "We specialize exclusively in Canadian life insurance with deep carrier and provincial knowledge.",
    why6Title: "Fast & Easy",             why6Desc: "Get your free quote in minutes. We handle all the paperwork so you can focus on life.",
    // Partners
    partnersLabel: "Our Carriers",
    partnersH2: "Insurance Companies We Represent",
    // Testimonials
    testLabel: "Testimonials",
    testH2a: "Client Feedback That", testH2b: "Speaks Volumes",
    testSub: "Based on 10 Google Reviews",
    // CTA
    ctaH2: "Ready to Protect Your Family?",
    ctaSub: "Get your free quote in minutes. No fees, no pressure, just expert advice from licensed Canadian brokers.",
    ctaBtn: "Get My Free Quote →",
    ctaTrust: "No fees ever · 100% free advice",
    // Footer
    footerTagline: "A family-built, client-first brokerage.",
    footerFounders: "Operated by Denesh Logeswaran & Lucia Medina.",
    footerMGA: "Contracted through Experior Financial Group Inc. (MGA)",
    footerLinks: "Quick Links", footerServices: "Our Services", footerContact: "Contact",
    footerVerify: "Verify Licence ↗",
    footerCopyright: "Quotes Life Insurance, DCW Financial Inc. All rights reserved.",
    footerPrivacy: "Privacy Policy", footerTerms: "Terms of Service",
    footerAmf: "Regulated by the AMF, Autorité des marchés financiers",
    footerAmfNumbers: "Licence #179631 | Firm Registration #608808",
    // Contact Page
    contactHeroTitle: "Contact Us",
    contactHeroSub: "Have questions? We're here to help. Reach out anytime.",
    contactInfoTitle: "Get in Touch",
    contactPhone: "Phone",
    contactEmail: "Email",
    contactAddress: "Address",
    contactHours: "Business Hours",
    contactHoursValue: "Mon - Fri: 9:00 AM - 6:00 PM",
    contactFormTitle: "Send Us a Message",
    contactFormName: "Full Name",
    contactFormEmail: "Email Address",
    contactFormPhone: "Phone Number",
    contactFormMessage: "Your Message",
    contactFormSubmit: "Send Message",
    contactMapTitle: "Find Our Office",
    // Careers Page
    careersHeroTitle: "Join Our Team",
    careersHeroSub: "Build a rewarding career helping families protect what matters most",
    careersWhyTitle: "Why Join DCW Financial?",
    careersBenefit1Title: "Competitive Commission",
    careersBenefit1Desc: "Earn unlimited income based on your performance",
    careersBenefit2Title: "Training & Support",
    careersBenefit2Desc: "Comprehensive training and ongoing mentorship",
    careersBenefit3Title: "Flexible Schedule",
    careersBenefit3Desc: "Work on your own terms with flexible hours",
    careersBenefit4Title: "Career Growth",
    careersBenefit4Desc: "Clear path to leadership and management roles",
    careersOpenPositions: "Open Positions",
    careersNoJobs: "No Open Positions Right Now",
    careersNoJobsDesc: "We don't have any openings at the moment, but we're always looking for talented people. Send your resume and we'll keep you in mind for future opportunities.",
    careersApplyNow: "Apply Now",
    careersPositionClosed: "Position Closed",
    careersRequirements: "Requirements",
    careersHiring: "Hiring",
    careersClosed: "Closed",
    // Articles Page
    articlesHeroTitle: "Articles & Resources",
    articlesHeroSub: "Helpful guides and insights about life insurance in Canada",
    articlesReadMore: "Read More →",
    articlesBackToAll: "← Back to all articles",
    articlesViewOriginal: "View original on Blogger ↗",
    articlesSidebarTitle: "Get Your Free Life Insurance Quote",
    articlesSidebarSub: "Compare 20+ top Canadian carriers in minutes. Always free.",
    articlesSidebarBtn: "Get My Free Quote →",
    articlesSidebarServices: "Our Services",
    articlesFreeQuote: "Free, No Obligation",
  },
  fr: {
    home: "Accueil", services: "Services", about: "À propos", contact: "Contact",
    getQuote: "Obtenir un devis",
    insuranceSolutions: "Solutions d'assurance",
    whyUs: "Pourquoi nous",
    resources: "Ressources",
    articles: "Articles",
    joinTeam: "Rejoindre notre équipe",
    navTagline: "PROTÉGER AUJOURD'HUI. DEMAIN PLUS LUMINEUX",
    termLife: "Assurance vie temporaire", wholeLife: "Assurance vie entière",
    universalLife: "Assurance vie universelle", criticalIllness: "Couverture maladies graves",
    disability: "Assurance invalidité",
    stripH2a: "Trouvez la bonne", stripH2b: "couverture pour vous",
    stripSub: "De la protection de vos proches à la sécurisation de vos actifs, nous vous aidons à trouver la bonne couverture au bon prix, sans obligation et sans frais de comparaison.",
    strip1Title: "Assurance vie",         strip1Desc: "Protégez ceux qui dépendent de vous.",
    strip2Title: "Maladies graves",       strip2Desc: "Un versement forfaitaire en cas de diagnostic grave.",
    strip3Title: "Invalidité",            strip3Desc: "Remplacez votre revenu si vous ne pouvez pas travailler.",
    strip4Title: "Assurance entreprise",  strip4Desc: "Protégez votre entreprise et vos moyens de subsistance.",
    stripLearn: "En savoir plus →",
    heroLabel: "Courtier d'assurance agréé",
    heroH1a: "Protégez Ce Qui", heroH1b: "Compte Le Plus", heroH1c: "pour Votre Famille",
    heroSub: "Nous comparons 20+ assureurs canadiens de premier plan comme Manuvie, Desjardins, Foresters et plus pour vous trouver la meilleure couverture au taux le plus bas. Nos conseils sont toujours",
    heroFree: "100% gratuits",
    heroCta1: "Mon devis gratuit →", heroCta2: "En savoir plus",
    heroFormTitle: "Obtenez votre devis d'assurance vie",
    heroFormLabel: "Devis gratuit, Sans obligation",
    trust1: "Réglementé AMF", trust2: "Conseils gratuits", trust3: "20+ assureurs", trust4: "Note 4.9",
    aboutLabel: "À propos de nous",
    aboutH2a: "Chaque famille mérite", aboutH2b: "la sécurité financière",
    aboutP1: "Quotes Life Insurance, exploité par DCW Financial Inc., est un courtage familial et axé sur le client, dirigé par Denesh Logeswaran et Lucia Medina. Fondé en 1998.",
    aboutP2: "Nous agissons à titre de conseillers indépendants sous contrat avec Experior Financial Group Inc. (MGA), ce qui nous donne accès à 20+ assureurs canadiens de premier plan.",
    aboutAmf: "Agréé et réglementé par l'AMF",
    aboutAmfSub: "Licence n° 179631 · Cabinet n° 608808",
    aboutCta: "En savoir plus →",
    stat1: "Familles protégées", stat2: "Partenaires assureurs", stat3: "Ans d'expérience", stat4: "Note Google",
    servicesLabel: "Nos services",
    servicesH2a: "Couverture pour", servicesH2b: "chaque étape de vie",
    servicesSub: "Comparez les polices auprès de 20+ assureurs. Un appel, zéro frais.",
    viewAll: "Voir tous les services",
    whyLabel: "Pourquoi nous choisir",
    whyH2a: "Votre famille mérite le mieux.", whyH2b: "Voici pourquoi c'est nous",
    why1Title: "Conseils 100% gratuits",   why1Desc: "Vous ne nous payez jamais. Nous percevons une commission uniquement si vous souscrivez une police, nos conseils sont donc toujours dans votre intérêt.",
    why2Title: "Vraiment indépendants",    why2Desc: "Non liés à aucun assureur. Nous comparons 20+ assureurs pour trouver ce qui est réellement le mieux pour vous.",
    why3Title: "Entièrement réglementés",  why3Desc: "Entièrement réglementé par l'Autorité des marchés financiers (AMF).",
    why4Title: "Courtage familial",        why4Desc: "Fondé par Denesh Logeswaran & Lucia Medina, des conseillers qui traitent chaque client comme un membre de leur famille.",
    why5Title: "Spécialistes canadiens",   why5Desc: "Nous nous spécialisons exclusivement dans l'assurance vie canadienne avec une connaissance approfondie des assureurs et des provinces.",
    why6Title: "Rapide et simple",         why6Desc: "Obtenez votre devis gratuit en quelques minutes. Nous nous occupons de tous les documents pour que vous puissiez vous concentrer sur la vie.",
    partnersLabel: "Nos assureurs",
    partnersH2: "Compagnies d'assurance que nous représentons",
    testLabel: "Témoignages",
    testH2a: "Des avis clients qui", testH2b: "parlent d'eux-mêmes",
    testSub: "Basé sur 10 avis Google",
    ctaH2: "Prêt à protéger votre famille ?",
    ctaSub: "Obtenez votre devis gratuit en quelques minutes. Sans frais, sans pression, juste des conseils d'experts.",
    ctaBtn: "Mon devis gratuit →",
    ctaTrust: "Sans frais · Conseils 100% gratuits",
    footerTagline: "Un courtage familial, axé sur le client.",
    footerFounders: "Exploité par Denesh Logeswaran & Lucia Medina.",
    footerMGA: "Sous contrat avec Experior Financial Group Inc. (MGA)",
    footerLinks: "Liens rapides", footerServices: "Nos services", footerContact: "Contact",
    footerVerify: "Vérifier la licence ↗",
    footerCopyright: "Quotes Life Insurance, DCW Financial Inc. Tous droits réservés.",
    footerPrivacy: "Politique de confidentialité", footerTerms: "Conditions d'utilisation",
    footerAmf: "Réglementé par l'AMF, Autorité des marchés financiers",
    footerAmfNumbers: "Licence n° 179631 | Cabinet n° 608808",
    // Contact Page
    contactHeroTitle: "Contactez-nous",
    contactHeroSub: "Des questions ? Nous sommes là pour vous aider. Contactez-nous à tout moment.",
    contactInfoTitle: "Nous joindre",
    contactPhone: "Téléphone",
    contactEmail: "Courriel",
    contactAddress: "Adresse",
    contactHours: "Heures d'ouverture",
    contactHoursValue: "Lun - Ven : 9h00 - 18h00",
    contactFormTitle: "Envoyez-nous un message",
    contactFormName: "Nom complet",
    contactFormEmail: "Adresse courriel",
    contactFormPhone: "Numéro de téléphone",
    contactFormMessage: "Votre message",
    contactFormSubmit: "Envoyer le message",
    contactMapTitle: "Trouvez notre bureau",
    // Careers Page
    careersHeroTitle: "Rejoignez notre équipe",
    careersHeroSub: "Bâtissez une carrière enrichissante en aidant les familles à protéger ce qui compte le plus",
    careersWhyTitle: "Pourquoi rejoindre DCW Financial ?",
    careersBenefit1Title: "Commission compétitive",
    careersBenefit1Desc: "Gagnez un revenu illimité selon votre performance",
    careersBenefit2Title: "Formation et soutien",
    careersBenefit2Desc: "Formation complète et mentorat continu",
    careersBenefit3Title: "Horaire flexible",
    careersBenefit3Desc: "Travaillez selon vos propres conditions avec des heures flexibles",
    careersBenefit4Title: "Croissance de carrière",
    careersBenefit4Desc: "Voie claire vers des rôles de leadership et de gestion",
    careersOpenPositions: "Postes ouverts",
    careersNoJobs: "Aucun poste ouvert pour le moment",
    careersNoJobsDesc: "Nous n'avons pas d'ouvertures pour le moment, mais nous recherchons toujours des personnes talentueuses. Envoyez votre CV et nous vous garderons en tête pour les opportunités futures.",
    careersApplyNow: "Postuler maintenant",
    careersPositionClosed: "Poste fermé",
    careersRequirements: "Exigences",
    careersHiring: "Embauche",
    careersClosed: "Fermé",
    // Articles Page
    articlesHeroTitle: "Articles et ressources",
    articlesHeroSub: "Guides utiles et informations sur l'assurance vie au Canada",
    articlesReadMore: "Lire la suite →",
    articlesBackToAll: "← Retour à tous les articles",
    articlesViewOriginal: "Voir l'original sur Blogger ↗",
    articlesSidebarTitle: "Obtenez votre devis gratuit d'assurance vie",
    articlesSidebarSub: "Comparez 20+ assureurs canadiens de premier plan en quelques minutes. Toujours gratuit.",
    articlesSidebarBtn: "Mon devis gratuit →",
    articlesSidebarServices: "Nos services",
    articlesFreeQuote: "Gratuit, sans obligation",
  },
} as const;

export type Lang = keyof typeof translations;
export type T    = (typeof translations)[Lang];

// ── Context ───────────────────────────────────────────────
interface LangCtx { lang: Lang; t: T; setLang: (l: Lang) => void; }
const Ctx = createContext<LangCtx>({
  lang: "en", t: translations.en, setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [initialized, setInitialized] = useState(false);
  
  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    // Save user preference to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred-lang", l);
    }
  }, []);

  // Auto-detect language based on location (Quebec = French, else English)
  useEffect(() => {
    const detectLanguage = async () => {
      // Check if user has a saved preference first
      const savedLang = localStorage.getItem("preferred-lang") as Lang | null;
      if (savedLang && (savedLang === "en" || savedLang === "fr")) {
        setLangState(savedLang);
        setInitialized(true);
        return;
      }

      // Check browser language preference
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("fr")) {
        // Browser is French, likely Quebec or France
        setLangState("fr");
        setInitialized(true);
        return;
      }

      // Try to detect location via IP geolocation
      try {
        const response = await fetch("https://ipapi.co/json/", {
          signal: AbortSignal.timeout(3000) // 3 second timeout
        });
        
        if (response.ok) {
          const data = await response.json();
          // Check if user is in Quebec (region_code: "QC" or region contains "Quebec")
          const isQuebec = 
            data.region_code === "QC" || 
            data.region?.toLowerCase().includes("quebec") ||
            data.region?.toLowerCase().includes("québec");
          
          if (isQuebec) {
            setLangState("fr");
          } else {
            setLangState("en");
          }
        }
      } catch {
        // Geolocation failed, default to English
        setLangState("en");
      }
      
      setInitialized(true);
    };

    detectLanguage();
  }, []);

  return (
    <Ctx.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </Ctx.Provider>
  );
}

export function useLang() { return useContext(Ctx); }
