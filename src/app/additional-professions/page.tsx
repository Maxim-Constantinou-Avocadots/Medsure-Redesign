import type { PageMetadata } from "@/lib/site-meta";
import { SpecialtyPage } from "@/components/pages/SpecialtyPage";

export const metadata: PageMetadata = {
  title: "Additional Professions",
  description: "Professional liability policies for psychologists, psychiatrists, pharmacists, optometrists, safety supervisors, investment portfolio managers and more.",
  alternates: { canonical: "/additional-professions" },
};

export default function AdditionalProfessionsRoute() {
  return <SpecialtyPage slug="additionalProfessions" />;
}
