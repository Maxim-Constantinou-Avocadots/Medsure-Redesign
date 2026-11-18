import type { Metadata } from "next";
import { CommunityPage } from "@/components/pages/AboutPages";

export const metadata: Metadata = {
  title: "Giving Back to the Community",
  description: "At Medsure, we put helping the weak at the top of our social priorities and take part voluntarily in projects that help the community.",
  alternates: { canonical: "/medsure" },
};

export default function MedsureRoute() {
  return <CommunityPage />;
}
