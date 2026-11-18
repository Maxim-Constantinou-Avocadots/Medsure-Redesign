import type { Metadata } from "next";
import { SpecialtyPage } from "@/components/pages/SpecialtyPage";

export const metadata: Metadata = {
  title: "Clinics",
  description: "Insurance coverage for clinics — professional liability, vicarious liability and shipping liability.",
  alternates: { canonical: "/clinics" },
};

export default function ClinicsRoute() {
  return <SpecialtyPage slug="clinics" />;
}
