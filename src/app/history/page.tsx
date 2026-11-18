import type { PageMetadata } from "@/lib/site-meta";
import { HistoryPage } from "@/components/pages/AboutPages";

export const metadata: PageMetadata = {
  title: "History",
  description: "In 1983, Zeev Jaffe founded an independent insurance agency built on service first and long-term accompaniment of the client — this is how Medsure began.",
  alternates: { canonical: "/history" },
};

export default function HistoryRoute() {
  return <HistoryPage />;
}
