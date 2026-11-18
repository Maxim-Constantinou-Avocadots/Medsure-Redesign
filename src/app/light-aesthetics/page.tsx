import type { Metadata } from "next";
import { SpecialtyPage } from "@/components/pages/SpecialtyPage";

export const metadata: Metadata = {
  title: "Light Aesthetics",
  description: "Professional liability insurance for those engaged in light aesthetics — for your peace of mind, professional and financial.",
  alternates: { canonical: "/light-aesthetics" },
};

export default function LightAestheticsRoute() {
  return <SpecialtyPage slug="lightAesthetics" />;
}
