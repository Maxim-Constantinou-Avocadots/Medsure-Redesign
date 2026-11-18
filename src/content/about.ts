import { routes } from "./company";
import type { Photo } from "./liability";

import aboutHero from "@/assets/images/about.jpg";
import historyHero from "@/assets/images/history.jpg";
import charterHero from "@/assets/images/service-charter.jpg";
import valuesHero from "@/assets/images/values.jpg";
import communityHero from "@/assets/images/community.jpg";
import lloydsHero from "@/assets/images/lloyds.jpg";
import liabilityHero from "@/assets/images/liability.jpg";

/**
 * About section content. Source: docs/content-inventory.md §2–7.
 * Corrections: "Coorporation" typo, "independent and independent", founder spelled "Zeev Jaffe" (client decision).
 */

export const aboutHub = {
  eyebrow: "About Us",
  title: "Medsure Insurance Agency",
  lead: "Explore everything about us.",
  hero: { src: aboutHero, alt: "A doctor talking with a patient across her desk", position: "50% 30%" } as Photo,
  cards: [
    {
      title: "Values and Vision",
      body: "Since the establishment of Medsure Insurance Agency, the values that have accompanied us are leading in service, quality, innovation and, of course, professionalism.",
      href: routes.values,
      image: { src: valuesHero, alt: "Two people shaking hands" } as Photo,
    },
    {
      title: "History",
      body: "In 1983, Zeev Jaffe founded Medsure Insurance Agency — an independent insurance agency that can provide the best insurance solutions to its clients.",
      href: routes.history,
      image: { src: historyHero, alt: "Glass office towers seen from below" } as Photo,
    },
    {
      title: "Service Charter",
      body: "We at Medsure insist on service in the first place, and work according to the service charter of the Association of Insurance Agents in Israel.",
      href: routes.serviceCharter,
      image: { src: charterHero, alt: "A woman reviewing documents at a desk" } as Photo,
    },
    {
      title: "Lloyd's Corporation",
      body: "The Lloyd's Corporation has been known worldwide for many years as a professional marker in the field of insurance and reinsurance.",
      href: routes.lloyds,
      image: { src: lloydsHero, alt: "A hand signing a document" } as Photo,
    },
    {
      title: "Professional Responsibility",
      body: "Professional liability insurance covers the insured in the event that a third party — the client or any other person — files a claim against them for bodily injury or property.",
      href: routes.liability,
      image: { src: liabilityHero, alt: "A doctor listening to a patient" } as Photo,
    },
    {
      title: "Medsure in the Community",
      body: "At Medsure, we put helping the weak at the top of our social priorities. We take part voluntarily in a large number of projects designed to help the community.",
      href: routes.community,
      image: { src: communityHero, alt: "A father playing with his laughing son" } as Photo,
    },
  ],
  newsletter: {
    title: "Subscribe to our newsletter",
  },
};

export const history = {
  eyebrow: "About Us · History",
  title: "Over 40 years of experience",
  hero: { src: historyHero, alt: "Glass office towers seen from below", position: "50% 30%" } as Photo,
  intro:
    "An independent insurance agency, built to provide the best insurance solutions to its clients — with an emphasis on service first, and long-term accompaniment of the client.",
  timeline: [
    {
      marker: "1983",
      title: "An independent agency is founded",
      body: "In 1983, Zeev Jaffe founded Sure Insurance Agency — an independent insurance agency, able to provide the best insurance solutions to its clients, with an emphasis on service first and long-term accompaniment of the client.",
    },
    {
      marker: "Medsure",
      title: "The same values, from day one",
      body: "This is how Medsure began to operate — based on the same values that have accompanied us from day one, with an emphasis on the best insurance coverage and on service that accompanies the client even after signing the forms.",
    },
    {
      marker: "Today",
      title: "Quick, independent service",
      body: "The agency's independent service system enables quick handling of the issuance of policies, and the implementation of changes, in the agency's own offices.",
    },
  ],
};

export const serviceCharter = {
  eyebrow: "About Us · Service Charter",
  title: "Service in the first place",
  hero: { src: charterHero, alt: "A woman reviewing documents at a desk", position: "50% 25%" } as Photo,
  intro: [
    "We at Medsure insist on first-place service.",
    "We work according to the service charter of the Association of Insurance Agents in Israel.",
  ],
  highlights: [
    { value: "2", unit: "business days", label: "for an initial response to every inquiry" },
    { value: "7", unit: "business days", label: "to respond to a request for a meeting or a call" },
    { value: "7", unit: "business days", label: "to provide any document related to the client" },
  ],
  commitments: [
    "The broker, a licensee, will treat his clients fairly and respectfully and respect their privacy.",
    "The broker will act to update his clients on how to receive service from him, including ways of communication, working days and reception hours in his office.",
    "The broker will provide a suitable response to the client's needs, within seven business days from the date of receipt of the customer's request to schedule a meeting with him or to speak with him.",
    "The broker will maintain effective and available communication with his clients, provide an initial response to every inquiry and provide answers as clear and reasoned as possible — all within two business days of receiving the customer's request.",
    "The insurance agent will provide a substantive response within a reasonable time to a customer's request to receive and transfer a certificate or document, as well as to forward a request to the financial institution to perform an action related to the product, all without derogating from other provisions in this regard.",
    "The insurance agent will provide any document related to the client which is in his possession by law, including to a former client, all within seven business days of receiving the client's request.",
    "The insurance agent will provide the client who contacted him regarding a claim with information about the client's rights, and will bring to his attention the courses of action available to him in the claim resolution process.",
  ],
};

export const values = {
  eyebrow: "About Us · Values & Vision",
  title: "Our values and vision",
  hero: { src: valuesHero, alt: "Two people shaking hands", position: "50% 50%" } as Photo,
  body: [
    "At Medsure Insurance Agency, we work to provide clients with the best insurance coverage, along with an uncompromising service experience.",
    "Since the establishment of the company, the values that have accompanied us are leading in service, quality, innovation and, of course, professionalism — while maintaining personal attention and a family atmosphere.",
  ],
  pillars: ["Service", "Quality", "Innovation", "Professionalism"],
  closing: "We use the experience we have gained for your success.",
};

export const community = {
  eyebrow: "About Us · Medsure",
  title: "Giving back to the community",
  hero: { src: communityHero, alt: "A father playing with his laughing son", position: "40% 30%" } as Photo,
  body: [
    "At Medsure, we believe it is our duty to contribute to the community as much as possible — we see this as a moral obligation, in order to influence society and make it better.",
    "We put helping the weak at the top of our social priorities. As an integral part of our activities, we take part voluntarily in a large number of projects designed to help the community.",
  ],
  projects: [
    "Distributing food packages",
    "Purchasing equipment for the beginning of the school year for underprivileged families",
    "Many other projects",
  ],
  ceo: "The company's CEO, Zeev Jaffe, serves as a board member in a large number of associations, on a fully voluntary basis.",
};

export const lloyds = {
  eyebrow: "About Us · Lloyd's Corporation",
  title: "A professional marker in insurance and reinsurance",
  hero: { src: lloydsHero, alt: "A hand signing a document", position: "60% 50%" } as Photo,
  facts: [
    { value: "1688", label: "Where it all began — in a small café" },
    { value: "330+", label: "Years of individuals, businesses and communities relying on Lloyd's" },
  ],
  body: [
    "Lloyd's has been at the forefront of insurance since 1688, when it all began in a small café. Over the years, Lloyd's has grown to become the world's leading insurance market.",
    "The Lloyd's Corporation has been known worldwide for many years as a professional marker in the field of insurance and reinsurance. With expertise accumulated over the centuries, Lloyd's is the foundation of the insurance industry and its future.",
    "For over 330 years, individuals, businesses and communities have relied on the Lloyd's market to protect what matters most — and we are proud to continue this tradition today.",
  ],
  closing: "Working with Lloyd's, Medsure can offer Lloyd's excellent insurance coverage to our clients.",
};
