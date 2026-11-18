import type { PageMetadata } from "@/lib/site-meta";
import { SpecialtyPage } from "@/components/pages/SpecialtyPage";

export const metadata: PageMetadata = {
  title: "Light Aesthetics",
  description: "Professional liability insurance for those engaged in light aesthetics — for your peace of mind, professional and financial.",
  alternates: { canonical: "/light-aesthetics" },
};

export default function LightAestheticsRoute() {
  return <SpecialtyPage slug="lightAesthetics" />;
}
