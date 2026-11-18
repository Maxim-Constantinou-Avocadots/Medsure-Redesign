import type { Metadata } from "next";
import { ServiceCharterPage } from "@/components/pages/AboutPages";

export const metadata: Metadata = {
  title: "Service Charter",
  description: "We at Medsure insist on first-place service: fair, respectful treatment, an initial response within two business days, and documents within seven.",
  alternates: { canonical: "/service-charter" },
};

export default function ServiceCharterRoute() {
  return <ServiceCharterPage />;
}
