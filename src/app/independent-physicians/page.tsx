import type { Metadata } from "next";
import { SpecialtyPage } from "@/components/pages/SpecialtyPage";

export const metadata: Metadata = {
  title: "Independent Physicians",
  description: "Professional liability insurance for independent physicians — for your peace of mind, professional and financial.",
  alternates: { canonical: "/independent-physicians" },
};

export default function IndependentPhysiciansRoute() {
  return <SpecialtyPage slug="independentPhysicians" />;
}
