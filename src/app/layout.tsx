import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Curtain } from "@/components/Curtain";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MotionArm } from "@/components/MotionArm";
import "./globals.css";

const interTight = localFont({
  src: "../assets/fonts/InterTight-Variable.woff2",
  variable: "--font-inter-tight",
  weight: "100 900",
  display: "swap",
});

const montserrat = localFont({
  src: [
    { path: "../assets/fonts/Montserrat-Light.woff2", weight: "300", style: "normal" },
    { path: "../assets/fonts/Montserrat-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.medsure.com.cy"),
  title: {
    default: "Medsure — Medical malpractice insurance in Cyprus",
    template: "%s | Medsure Medicare",
  },
  description:
    "Medsure Insurance Agency provides clients with the best medical malpractice insurance coverage and an uncompromising service experience — for dentists, clinics, independent physicians, light aesthetics, paramedicine and additional professions.",
  openGraph: {
    type: "website",
    siteName: "Medsure Medicare",
    locale: "en_CY",
  },
};

export const viewport: Viewport = {
  themeColor: "#12172B",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${interTight.variable} ${montserrat.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Curtain />
        <Nav />
        {children}
        <Footer />
        <MotionArm />
      </body>
    </html>
  );
}
