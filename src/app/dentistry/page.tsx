import type { PageMetadata } from "@/lib/site-meta";
import { SpecialtyPage } from "@/components/pages/SpecialtyPage";

export const metadata: PageMetadata = {
  title: "Dentistry",
  description: "Professional liability insurance for dentists — for your peace of mind, professional and financial.",
  alternates: { canonical: "/dentistry" },
};

export default function DentistryRoute() {
  return <SpecialtyPage slug="dentistry" />;
}
