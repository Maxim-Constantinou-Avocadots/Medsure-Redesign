import type { Metadata } from "next";
import { CareersPage } from "@/components/pages/CareersPage";

export const metadata: Metadata = {
  title: "Careers",
  description: "Be part of Medsure's winning team — a leading insurance agency in the field of professional liability. A boutique office with personal attention and a family atmosphere.",
  alternates: { canonical: "/careers" },
};

export default function CareersRoute() {
  return <CareersPage />;
}
