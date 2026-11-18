import type { Metadata } from "next";
import { AboutHubPage } from "@/components/pages/AboutPages";

export const metadata: Metadata = {
  title: "About Us",
  description: "Medsure Insurance Agency — our values and vision, history, service charter, working with Lloyd's, and our work in the community.",
  alternates: { canonical: "/about-us-medsure" },
};

export default function AboutUsMedsureRoute() {
  return <AboutHubPage />;
}
