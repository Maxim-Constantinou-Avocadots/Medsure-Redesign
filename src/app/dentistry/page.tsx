import type { Metadata } from "next";
import { SpecialtyPage } from "@/components/pages/SpecialtyPage";

export const metadata: Metadata = {
  title: "Dentistry",
  description: "Professional liability insurance for dentists — for your peace of mind, professional and financial.",
  alternates: { canonical: "/dentistry" },
};

export default function DentistryRoute() {
  return <SpecialtyPage slug="dentistry" />;
}
