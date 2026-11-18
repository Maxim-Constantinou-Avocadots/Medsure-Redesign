import type { PageMetadata } from "@/lib/site-meta";
import { SpecialtyPage } from "@/components/pages/SpecialtyPage";

export const metadata: PageMetadata = {
  title: "Independent Physicians",
  description: "Professional liability insurance for independent physicians — for your peace of mind, professional and financial.",
  alternates: { canonical: "/independent-physicians" },
};

export default function IndependentPhysiciansRoute() {
  return <SpecialtyPage slug="independentPhysicians" />;
}
