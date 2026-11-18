import FormSchemaProvider from "@/components/FormSchemaProvider";
import type { FormDto } from "@/wix/forms/types";
import type { PageMetadata } from "@/lib/site-meta";
import { AboutHubPage } from "@/components/pages/AboutPages";

export const metadata: PageMetadata = {
  title: "About Us",
  description: "Medsure Insurance Agency — our values and vision, history, service charter, working with Lloyd's, and our work in the community.",
  alternates: { canonical: "/about-us-medsure" },
};

export default function AboutUsMedsureRoute({ initialForm }: { initialForm?: FormDto }) {
  return <FormSchemaProvider form={initialForm}><AboutHubPage /></FormSchemaProvider>;
}
