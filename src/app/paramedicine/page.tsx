import type { Metadata } from "next";
import { SpecialtyPage } from "@/components/pages/SpecialtyPage";

export const metadata: Metadata = {
  title: "Paramedicine",
  description: "Professional liability insurance for paramedical practitioners — for your peace of mind, professional and financial.",
  alternates: { canonical: "/paramedicine" },
};

export default function ParamedicineRoute() {
  return <SpecialtyPage slug="paramedicine" />;
}
