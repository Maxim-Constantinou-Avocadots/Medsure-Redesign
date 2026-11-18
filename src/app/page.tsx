import { Curtain } from "@/components/Curtain";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Specialties } from "@/components/Specialties";
import { Why } from "@/components/Why";
import { StatementBand } from "@/components/StatementBand";
import { About } from "@/components/About";
import { Marquee } from "@/components/Marquee";
import { Steps } from "@/components/Steps";
import { Faq } from "@/components/Faq";
import { Closing } from "@/components/Closing";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Curtain />
      <Nav />
      <Hero />
      <main id="main">
        <Specialties />
        <Why />
        <StatementBand />
        <About />
        <Marquee />
        <Steps />
        <Faq />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
