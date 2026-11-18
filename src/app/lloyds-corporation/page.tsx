import type { Metadata } from "next";
import { LloydsPage } from "@/components/pages/AboutPages";

export const metadata: Metadata = {
  title: "Lloyd's Corporation",
  description: "Working with Lloyd's — at the forefront of insurance since 1688 — Medsure can offer Lloyd's excellent insurance coverage to our clients.",
  alternates: { canonical: "/lloyds-corporation" },
};

export default function LloydsCorporationRoute() {
  return <LloydsPage />;
}
