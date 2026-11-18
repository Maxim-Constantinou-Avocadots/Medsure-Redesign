import FormSchemaProvider from "@/components/FormSchemaProvider";
import type { FormDto } from "@/wix/forms/types";
import type { PageMetadata } from "@/lib/site-meta";
import { CareersPage } from "@/components/pages/CareersPage";

export const metadata: PageMetadata = {
  title: "Careers",
  description: "Be part of Medsure's winning team — a leading insurance agency in the field of professional liability. A boutique office with personal attention and a family atmosphere.",
  alternates: { canonical: "/careers" },
};

export default function CareersRoute({ initialForm }: { initialForm?: FormDto }) {
  return <FormSchemaProvider form={initialForm}><CareersPage /></FormSchemaProvider>;
}
