import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
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
  title: "Medsure — Medical malpractice insurance in Cyprus",
  description:
    "Medsure is a boutique insurance agency in Nicosia providing medical malpractice and professional liability insurance for dentists, clinics, independent physicians, aesthetic practitioners and paramedical professionals.",
  openGraph: {
    type: "website",
    title: "Medsure — Medical malpractice insurance in Cyprus",
    description: "Specialist professional liability insurance for every medical profession — tailored, never templated.",
    locale: "en_CY",
    siteName: "Medsure",
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
        {children}
        <MotionArm />
      </body>
    </html>
  );
}
