import type { PageMetadata } from "@/lib/site-meta";
import { ValuesPage } from "@/components/pages/AboutPages";

export const metadata: PageMetadata = {
  title: "Values & Vision",
  description: "The best insurance coverage with an uncompromising service experience — leading in service, quality, innovation and professionalism.",
  alternates: { canonical: "/values-vision" },
};

export default function ValuesVisionRoute() {
  return <ValuesPage />;
}
