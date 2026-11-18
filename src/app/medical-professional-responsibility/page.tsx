import type { Metadata } from "next";
import { LiabilityHubPage } from "@/components/pages/LiabilityHubPage";

export const metadata: Metadata = {
  title: "Professional Liability",
  description: "Medical professional liability insurance for dentistry, light aesthetics, clinics, independent physicians, paramedicine and additional professions.",
  alternates: { canonical: "/medical-professional-responsibility" },
};

export default function MedicalProfessionalResponsibilityRoute() {
  return <LiabilityHubPage />;
}
