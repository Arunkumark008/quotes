"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLang } from "@/lib/i18n";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold mb-3 pb-2 relative"
        style={{ color: "var(--dark)", borderBottom: "2px solid #f0f0f0" }}>
        <span className="absolute bottom-[-2px] left-0 w-10 h-0.5" style={{ background: "var(--green)" }} />
        {title}
      </h2>
      <div className="text-gray-500 text-sm leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function TermsPage() {
  const { lang } = useLang();
  
  const content = {
    en: {
      breadcrumb: "Home / Terms of Service",
      title: "Terms of Service",
      lastUpdated: "Last updated: October 21, 2025",
      intro: "These Terms of Service govern your use of the website located at",
      introEnd: "and any related services provided by DCW Financial Inc. By accessing this website, you agree to abide by these Terms of Service.",
      sections: {
        limitations: "Limitations of Use",
        intellectual: "Intellectual Property",
        userContent: "User-Generated Content",
        liability: "Liability",
        accuracy: "Accuracy of Materials",
        links: "Links",
        terminate: "Right to Terminate",
        governing: "Governing Law",
        contactUs: "Contact Us",
      },
    },
    fr: {
      breadcrumb: "Accueil / Conditions d'utilisation",
      title: "Conditions d'utilisation",
      lastUpdated: "Dernière mise à jour: 21 octobre 2025",
      intro: "Ces conditions d'utilisation régissent votre utilisation du site web situé à",
      introEnd: "et tous les services connexes fournis par DCW Financial Inc. En accédant à ce site web, vous acceptez de respecter ces conditions d'utilisation.",
      sections: {
        limitations: "Limitations d'utilisation",
        intellectual: "Propriété intellectuelle",
        userContent: "Contenu généré par l'utilisateur",
        liability: "Responsabilité",
        accuracy: "Exactitude des informations",
        links: "Liens",
        terminate: "Droit de résiliation",
        governing: "Loi applicable",
        contactUs: "Nous contacter",
      },
    },
  };

  const t = content[lang];

  return (
    <>
      <Header />
      <main>
        <div style={{ background: "var(--dark)" }} className="py-16 text-center">
          <p className="text-sm font-semibold mb-2" style={{ color: "var(--green)" }}>{t.breadcrumb}</p>
          <h1 className="text-4xl font-extrabold text-white">{t.title}</h1>
          <p className="text-white/60 mt-2 text-sm">{t.lastUpdated}</p>
        </div>

        <section className="section-padding bg-white">
          <div className="container max-w-3xl">

            <div className="rounded-xl p-6 mb-10 text-sm leading-relaxed"
              style={{ background: "var(--bg-soft)", borderLeft: "4px solid var(--green)", color: "var(--dark)" }}>
              {t.intro}{" "}
              <a href="https://quotes-lifeinsurance.com" className="underline" style={{ color: "var(--green)" }}>
                https://quotes-lifeinsurance.com/
              </a>{" "}
              {t.introEnd}
            </div>

            <Section title={t.sections.limitations}>
              <p>By using this website, you warrant that you will not:</p>
              <ul className="list-disc pl-5 space-y-1">
                {[
                  "Modify, copy, or reverse engineer any materials on this website",
                  "Remove any copyright or proprietary notations",
                  "Transfer materials to another person or mirror them on any server",
                  "Use this website in a way that abuses or disrupts our networks",
                  "Use this website to transmit harassing, fraudulent, or unlawful material",
                  "Use this website in violation of any applicable laws or regulations",
                  "Send unauthorized advertising or spam via this website",
                  "Harvest or collect user data without consent",
                  "Infringe the privacy or intellectual property rights of third parties",
                ].map((i) => <li key={i}>{i}</li>)}
              </ul>
            </Section>

            <Section title={t.sections.intellectual}>
              <p>The intellectual property in the materials contained on this website are owned by or licensed to DCW Financial Inc. and are protected by applicable copyright and trademark law. We grant users permission to download one copy of the materials for personal, non-commercial transitory use.</p>
              <p>This constitutes the grant of a license, not a transfer of title. This license shall automatically terminate if you violate any of these restrictions.</p>
            </Section>

            <Section title={t.sections.userContent}>
              <p>You retain your intellectual property ownership rights over content you submit to us for publication. We require a non-exclusive, royalty-free, transferable, worldwide license to use, distribute, and display your content in a manner consistent with your privacy preferences and our Privacy Policy.</p>
            </Section>

            <Section title={t.sections.liability}>
              <p>Our website and the materials on our website are provided on an &ldquo;as is&rdquo; basis. To the extent permitted by law, DCW Financial Inc. makes no warranties, expressed or implied.</p>
              <p>In no event shall DCW Financial Inc. or its suppliers be liable for any consequential loss suffered or incurred by you or any third party arising from the use or inability to use this website.</p>
            </Section>

            <Section title={t.sections.accuracy}>
              <p>The materials appearing on our website are for general information purposes only. DCW Financial Inc. does not warrant or make any representations concerning the accuracy or reliability of these materials.</p>
            </Section>

            <Section title={t.sections.links}>
              <p>DCW Financial Inc. has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by DCW Financial Inc.</p>
            </Section>

            <Section title={t.sections.terminate}>
              <p>We may suspend or terminate your right to use our website immediately upon written notice to you for any breach of these Terms of Service.</p>
            </Section>

            <Section title={t.sections.governing}>
              <p>These Terms of Service are governed by and construed in accordance with the laws of <strong>Canada</strong>. You irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
            </Section>

            <Section title={t.sections.contactUs}>
              <div className="rounded-xl p-5" style={{ background: "var(--bg-soft)", border: "1px solid #d1e8d4" }}>
                <p><strong>DCW Financial Inc., Quotes Life Insurance</strong></p>
                <p>✉️ <a href="mailto:info@quotes-lifeinsurance.com" className="underline" style={{ color: "var(--green)" }}>info@quotes-lifeinsurance.com</a></p>
              </div>
            </Section>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
