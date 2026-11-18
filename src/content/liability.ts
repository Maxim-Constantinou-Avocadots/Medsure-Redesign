import type { StaticImageData } from "next/image";
import { routes } from "./company";

import dentistryCard from "@/assets/images/dentistry.jpg";
import aestheticsCard from "@/assets/images/aesthetics.jpg";
import clinicsCard from "@/assets/images/clinics.jpg";
import physicianCard from "@/assets/images/physician.jpg";
import paramedicineCard from "@/assets/images/paramedicine.jpg";
import additionalImage from "@/assets/images/additional.jpg";
import aestheticsHero from "@/assets/images/aesthetics-hero.jpg";
import clinicsHero from "@/assets/images/clinics-hero.jpg";
import physiciansHero from "@/assets/images/physicians-hero.jpg";
import liabilityHero from "@/assets/images/liability.jpg";

/**
 * Professional liability content.
 * Source: docs/content-inventory.md §8–14. Corrections applied:
 * "Taurus" → Medsure, "Easy Aesthetics" → Light Aesthetics, spacing typos.
 */

export type Photo = { src: StaticImageData; alt: string; position?: string };

export type Specialty = {
  slug: keyof typeof routes;
  href: string;
  title: string;
  /** Used in "Professional Liability Insurance for …" */
  forLabel: string;
  /** One-line summary for cards (from the page intro) */
  summary: string;
  /** Page intro, as on the live page */
  intro: string[];
  /** Optional list shown as chips (e.g. professions, coverage types) */
  list?: { label: string; items: string[] };
  card: Photo;
  hero: Photo;
  /** Additional Professions uses non-medical wording in the shared body */
  general?: boolean;
};

export const specialties: Specialty[] = [
  {
    slug: "dentistry",
    href: routes.dentistry,
    title: "Dentistry",
    forLabel: "dentists",
    summary: "Medical professional liability policy for your professional and mental peace of mind.",
    intro: ["At Medsure, we offer professional liability insurance for dentists, for your peace of mind — professional and financial."],
    card: { src: dentistryCard, alt: "A dental team member positioning a patient for an X-ray", position: "52% 50%" },
    hero: { src: dentistryCard, alt: "A dental team member positioning a patient for an X-ray", position: "55% 40%" },
  },
  {
    slug: "lightAesthetics",
    href: routes.lightAesthetics,
    title: "Light Aesthetics",
    forLabel: "light aesthetics",
    summary: "Professional liability insurance for those engaged in light aesthetics.",
    intro: ["At Medsure, we offer professional liability insurance for those engaged in light aesthetics, for your peace of mind — professional and financial."],
    card: { src: aestheticsCard, alt: "A practitioner applying permanent eyebrow make-up" },
    hero: { src: aestheticsHero, alt: "A practitioner performing a light aesthetic treatment", position: "40% 40%" },
  },
  {
    slug: "clinics",
    href: routes.clinics,
    title: "Clinics",
    forLabel: "clinics",
    summary: "Insurance coverage for clinics — professional, vicarious and shipping liability.",
    intro: [
      "At Medsure, we offer insurance coverage for clinics — whether it is professional liability insurance, vicarious liability, or shipping liability.",
      "For your peace of mind, professional and financial.",
    ],
    list: { label: "Coverage for clinics", items: ["Professional liability", "Vicarious liability", "Shipping liability"] },
    card: { src: clinicsCard, alt: "A doctor reviewing records on a tablet in a clinic", position: "35% 50%" },
    hero: { src: clinicsHero, alt: "A clinic receptionist assisting a patient", position: "45% 30%" },
  },
  {
    slug: "independentPhysicians",
    href: routes.independentPhysicians,
    title: "Independent Physicians",
    forLabel: "independent physicians",
    summary: "Professional liability insurance for independent physicians.",
    intro: ["At Medsure, we offer professional liability insurance for independent physicians, for your peace of mind — professional and financial."],
    card: { src: physicianCard, alt: "A physician listening to a patient's chest with a stethoscope", position: "40% 50%" },
    hero: { src: physiciansHero, alt: "A physician talking with a patient in a bright examination room", position: "45% 40%" },
  },
  {
    slug: "paramedicine",
    href: routes.paramedicine,
    title: "Paramedicine",
    forLabel: "paramedicine",
    summary: "Professional liability insurance for paramedical practitioners.",
    intro: ["At Medsure, we offer professional liability insurance for paramedical practitioners, for your peace of mind — professional and financial."],
    card: { src: paramedicineCard, alt: "A medical professional in a mask examining a patient", position: "38% 50%" },
    hero: { src: paramedicineCard, alt: "A medical professional in a mask examining a patient", position: "40% 30%" },
  },
  {
    slug: "additionalProfessions",
    href: routes.additionalProfessions,
    title: "Additional Professions",
    forLabel: "additional professions",
    summary: "Professional liability policies for psychologists, pharmacists, optometrists and more.",
    intro: ["At Medsure, we issue professional liability policies for your peace of mind — professional and financial."],
    list: {
      label: "We insure a wide range of professions, such as",
      items: [
        "Psychologists",
        "Psychiatrists",
        "Pharmacists",
        "Optometrists",
        "Safety supervisors",
        "Investment portfolio managers",
        "And more",
      ],
    },
    card: { src: additionalImage, alt: "An advisor talking a client through a policy", position: "60% 40%" },
    hero: { src: additionalImage, alt: "An advisor talking a client through a policy", position: "60% 35%" },
    general: true,
  },
];

export function getSpecialty(slug: Specialty["slug"]): Specialty {
  const s = specialties.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown specialty: ${slug}`);
  return s;
}

/** Shared body copy on every specialty page (inventory §9–14). */
export function specialtyBody(general = false): string[] {
  return general
    ? [
        "Despite knowledge and experience, professionals may make mistakes. Such an error sometimes leads to a lawsuit — and the result may be a high financial expense that affects your ability to continue practising your profession.",
        "A professional liability insurance policy provides you with insurance protection against those claims.",
        "At Medsure, we do our utmost to find the best policy for each client, with an emphasis on providing personal and professional service.",
      ]
    : [
        "Despite knowledge and experience, doctors and professionals in the field of health and paramedicine may also make mistakes. Such an error sometimes leads to a lawsuit — and the result may be a high financial expense that affects your ability to continue practising your profession.",
        "A medical professional liability insurance policy provides you with insurance protection against those claims.",
        "At Medsure, we do our utmost to find the best policy for each client, with an emphasis on providing personal and professional service.",
      ];
}

/** "Benefits of Medsure" — shared across specialty pages. */
export const benefits = [
  {
    title: "Lloyd's insurance coverage",
    body: "The insurance coverage is carried out by the British insurance corporation Lloyd's — the largest and oldest insurance corporation in the world. This allows us to issue policies tailored specifically to our clients, and to find comprehensive insurance coverage that fits your needs exactly.",
  },
  {
    title: "Service in the first place",
    body: "When you are insured with Medsure, you benefit from our leading insurance and service system, and the values we have excelled at from day one. We put service at the top of our priorities — reflected in the personal attention and efficient response we provide.",
  },
  {
    title: "Personal support in claims",
    body: "With us, the service doesn't end once you've signed the forms. In the event of a claim, we will accompany you throughout the process — from an efficient, personal and professional response to your questions, to close legal support until the end of the process.",
  },
];

/** Professional Liability hub (inventory §8). */
export const liabilityHub = {
  eyebrow: "Medical Professional Liability",
  title: "Insurance solutions for all medical professions",
  lead: "Our professionalism and high service awareness will allow you to understand exactly what your alternatives are — and how worthwhile each of them is for you.",
  hero: { src: liabilityHero, alt: "A doctor listening to a patient across her desk", position: "65% 30%" } as Photo,
  explainer: {
    title: "Professional responsibility",
    paragraphs: [
      "Professional liability insurance covers the insured in the event that a third party — the client or any other person — files a claim against them for bodily injury or property.",
      "The insurance includes coverage for legal expenses, as well as the payment of compensation to the plaintiffs in cases where it is determined that there was indeed such negligence.",
      "Despite the knowledge and experience, doctors and professionals in the field of health and paramedicine may also make mistakes. Such an error sometimes leads to a lawsuit, and the result may be a high financial expense that will affect your ability to continue practising the profession. A medical professional liability insurance policy provides you with insurance protection against those claims.",
    ],
  },
  grow: {
    title: "Let's grow together",
    body: "We are here to find the most suitable policy for you, at an attractive price.",
  },
};
