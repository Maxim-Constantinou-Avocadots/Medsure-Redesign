import type { PageMetadata } from "@/lib/site-meta";
import { SpecialtyPage } from "@/components/pages/SpecialtyPage";

export const metadata: PageMetadata = {
  title: "Paramedicine",
  description: "Professional liability insurance for paramedical practitioners — for your peace of mind, professional and financial.",
  alternates: { canonical: "/paramedicine" },
};

export default function ParamedicineRoute() {
  return <SpecialtyPage slug="paramedicine" />;
}
