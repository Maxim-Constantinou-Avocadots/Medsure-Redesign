import FormSchemaProvider from "@/components/FormSchemaProvider";
import type { FormDto } from "@/wix/forms/types";
import type { PageMetadata } from "@/lib/site-meta";
import { Hero } from "@/components/Hero";
import { Specialties } from "@/components/Specialties";
import { Why } from "@/components/Why";
import { StatementBand } from "@/components/StatementBand";
import { About } from "@/components/About";
import { Marquee } from "@/components/Marquee";
import { Steps } from "@/components/Steps";
import { Faq } from "@/components/Faq";
import { ContactSection } from "@/components/ContactSection";
import { Closing } from "@/components/Closing";
import { specialties } from "@/content/liability";
import { homeContact, specialtiesIntro } from "@/content/home";

export const metadata: PageMetadata = {
  title: { absolute: "Medsure — Medical malpractice insurance in Cyprus" },
  alternates: { canonical: "/" },
};

export default function HomePage({ initialForm }: { initialForm?: FormDto }) {
  return (
    <FormSchemaProvider form={initialForm}>
      <Hero />
      <main id="main">
        <Specialties id="cover" eyebrow={specialtiesIntro.eyebrow} title={specialtiesIntro.title} items={specialties} />
        <Why />
        <StatementBand />
        <About />
        <Marquee />
        <Steps />
        <Faq />
        <ContactSection eyebrow={homeContact.eyebrow} title={homeContact.title} />
        <Closing />
      </main>
    </FormSchemaProvider>
  );
}
