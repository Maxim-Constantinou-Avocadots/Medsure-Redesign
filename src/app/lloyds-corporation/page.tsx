import type { PageMetadata } from "@/lib/site-meta";
import { LloydsPage } from "@/components/pages/AboutPages";

export const metadata: PageMetadata = {
  title: "Lloyd's Corporation",
  description: "Working with Lloyd's — at the forefront of insurance since 1688 — Medsure can offer Lloyd's excellent insurance coverage to our clients.",
  alternates: { canonical: "/lloyds-corporation" },
};

export default function LloydsCorporationRoute() {
  return <LloydsPage />;
}
