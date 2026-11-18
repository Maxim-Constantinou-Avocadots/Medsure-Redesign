import type { Metadata } from "next";
import { PrivacyPage } from "@/components/pages/PrivacyPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Medsure Medicare Insurance Brokers (Cyprus) Ltd collects, uses and protects personal data.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyRoute() {
  return <PrivacyPage />;
}
