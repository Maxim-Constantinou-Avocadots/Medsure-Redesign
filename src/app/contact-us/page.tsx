import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch about your insurance needs. Ayias Elenis 36, Galaxias Commercial Center, Nicosia · +357 22 279484 · info@medsure.com.cy",
  alternates: { canonical: "/contact-us" },
};

export default function ContactUsRoute() {
  return <ContactPage />;
}
