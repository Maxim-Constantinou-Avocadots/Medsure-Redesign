import type { PageMetadata } from "@/lib/site-meta";
import { SpecialtyPage } from "@/components/pages/SpecialtyPage";

export const metadata: PageMetadata = {
  title: "Clinics",
  description: "Insurance coverage for clinics — professional liability, vicarious liability and shipping liability.",
  alternates: { canonical: "/clinics" },
};

export default function ClinicsRoute() {
  return <SpecialtyPage slug="clinics" />;
}
