import FormSchemaProvider from "@/components/FormSchemaProvider";
import type { FormDto } from "@/wix/forms/types";
import type { PageMetadata } from "@/lib/site-meta";
import { ContactPage } from "@/components/pages/ContactPage";

export const metadata: PageMetadata = {
  title: "Contact Us",
  description: "Get in touch about your insurance needs. Ayias Elenis 36, Galaxias Commercial Center, Nicosia · +357 22 279484 · info@medsure.com.cy",
  alternates: { canonical: "/contact-us" },
};

export default function ContactUsRoute({ initialForm }: { initialForm?: FormDto }) {
  return <FormSchemaProvider form={initialForm}><ContactPage /></FormSchemaProvider>;
}
