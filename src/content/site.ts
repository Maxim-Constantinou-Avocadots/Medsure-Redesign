import type { StaticImageData } from "next/image";

import heroPoster from "@/assets/images/hero-poster.jpg";
import dentistry from "@/assets/images/dentistry.jpg";
import aesthetics from "@/assets/images/aesthetics.jpg";
import clinics from "@/assets/images/clinics.jpg";
import physician from "@/assets/images/physician.jpg";
import paramedicine from "@/assets/images/paramedicine.jpg";
import support from "@/assets/images/support.jpg";
import meeting from "@/assets/images/meeting.jpg";
import towers from "@/assets/images/towers.jpg";

/**
 * All homepage copy and content in one place.
 * Swap this module for a CMS fetch later without touching the components.
 */

export type Photo = {
  src: StaticImageData;
  alt: string;
  /** CSS object-position, for art-directing crops */
  position?: string;
};

export const company = {
  legalName: "Medsure Medicare Insurance Brokers (Cyprus) Ltd",
  phone: "+357 22 279484",
  phoneHref: "tel:+35722279484",
  email: "info@medsure.com.cy",
  facebook: "https://www.facebook.com/profile.php?id=61592039410284",
  address: ["Ayias Elenis 36, Galaxias Commercial Center", "4th Floor, Office 404", "1061 Nicosia, Cyprus"],
  founder: { name: "Zeev Jaffe", role: "Founder & CEO", initials: "ZJ" },
} as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Professional Liability", href: "#cover" },
  { label: "Why Medsure", href: "#why" },
  { label: "FAQ", href: "#faq" },
  { label: "Careers", href: "#contact" },
] as const;

export const hero = {
  title: "Malpractice cover, written around your practice",
  lead: "Cyprus’s boutique insurance agency for medical professionals — the best medical malpractice cover, with an uncompromising service experience.",
  /**
   * Background video. Files live in /public/video. Desktop gets 1080p, phones 720p;
   * WebM (VP9) first for size, MP4 (H.264) as the universal fallback.
   */
  video: {
    poster: heroPoster,
    alt: "A bright, modern medical clinic with a stethoscope resting on a white desk",
    sources: [
      { src: "/video/hero-1080.webm", type: "video/webm", media: "(min-width: 961px)" },
      { src: "/video/hero-1080.mp4", type: "video/mp4", media: "(min-width: 961px)" },
      { src: "/video/hero-720.webm", type: "video/webm" },
      { src: "/video/hero-720.mp4", type: "video/mp4" },
    ],
  },
  stats: [
    { label: "Years in insurance", value: 45 },
    { label: "Years in professional liability", value: 30 },
    { label: "Clients who trust us", value: 2000, suffix: "+" },
  ],
};

export type Specialty = { title: string; text: string; photo: Photo };

export const specialties: Specialty[] = [
  {
    title: "Dentistry",
    text: "Professional liability for dentists and dental practices, shaped around the treatments you actually provide.",
    photo: { src: dentistry, alt: "A dental team member positioning a patient for an X-ray", position: "52% 50%" },
  },
  {
    title: "Light Aesthetics",
    text: "Cover for aesthetic practitioners — from permanent make-up to light cosmetic procedures.",
    photo: { src: aesthetics, alt: "A practitioner applying permanent eyebrow make-up" },
  },
  {
    title: "Clinics",
    text: "Liability insurance for clinics and medical centres — protecting the practice as well as the people in it.",
    photo: { src: clinics, alt: "A doctor reviewing records on a tablet in a clinic", position: "35% 50%" },
  },
  {
    title: "Independent Physicians",
    text: "For doctors in private practice who want a policy that matches their specialty and their caseload.",
    photo: { src: physician, alt: "A physician listening to a patient's chest with a stethoscope", position: "40% 50%" },
  },
  {
    title: "Paramedicine",
    text: "Protection for paramedical professionals working alongside doctors, clinics and hospitals.",
    photo: { src: paramedicine, alt: "A medical professional in a mask examining a patient", position: "38% 50%" },
  },
];

export type Reason = { tag: string; title: string; body: string; photo: Photo };

export const reasons: Reason[] = [
  {
    tag: "Tailored cover",
    title: "Flexible insurance, customised to you",
    body: "We tailor coverage specifically for each client, to the highest standards. No generic policy, no paying for cover you will never use.",
    photo: { src: physician, alt: "A physician examining a patient", position: "40% 40%" },
  },
  {
    tag: "Claims accompaniment",
    title: "Close accompaniment when a claim arrives",
    body: "If a claim is ever made against you, we stay beside you throughout the process, so you are never handling it alone.",
    photo: { src: support, alt: "An advisor on a headset working at a screen", position: "60% 40%" },
  },
  {
    tag: "Boutique office",
    title: "A boutique office with personal attention",
    body: "Every client works with people who know their file. Personal attention is not an upgrade at Medsure; it is how we work.",
    photo: { src: meeting, alt: "Colleagues in conversation around a table" },
  },
  {
    tag: "Unique solutions",
    title: "Expertise in finding unique solutions",
    body: "Thirty years in professional liability means we know how to get the best out of your policy, including for the cases others turn away.",
    photo: { src: paramedicine, alt: "A medical professional examining a patient", position: "40% 40%" },
  },
];

export const statements = {
  backdrop: towers,
  lines: [
    ["If a patient complaint has ever", "kept you up at night,", "you’re not alone."],
    ["For decades, we’ve stood beside", "medical professionals who", "felt exactly the same way."],
    ["Protected. Supported.", "Certain."],
  ],
  /** milliseconds each statement stays on screen */
  duration: 5500,
};

export const about = {
  title: ["Built on integrity.", "Run like a boutique."],
  values: ["Transparency", "Credibility", "Personal attention"],
  body: "At Medsure, insurance isn’t about selling a policy and walking away. We work with an emphasis on transparency and credibility — and when you’re insured with us, you benefit from the values we’ve built over more than four decades.",
};

export const steps = {
  eyebrow: "Whatever your specialty",
  title: "You’re one conversation away from cover that fits the way you practise",
  items: [
    { title: "Talk to us", text: "Tell us about your profession, your practice and what you need protecting. One call, no obligation." },
    { title: "A tailored proposal", text: "We find the right solution for you — including the unusual cases — and explain exactly what it covers." },
    { title: "Beside you, always", text: "Renewals, changes and — if it ever comes to it — close accompaniment through every claim." },
  ],
};

export const faqs = [
  {
    q: "Who needs medical malpractice insurance?",
    a: "Any professional who treats patients — dentists, aesthetic practitioners, independent physicians, paramedical staff and clinics — can face a claim alleging error or negligence. Professional liability insurance is designed to protect you when that happens.",
  },
  {
    q: "Can my policy be tailored to my specialty?",
    a: "Yes. Flexible, customised cover is at the heart of what we do: we shape the policy around your profession, your practice and the procedures you perform.",
  },
  {
    q: "What happens if a claim is made against me?",
    a: "Contact us straight away. We accompany clients closely throughout claims handling, so you have experienced people beside you from the first letter to the final outcome.",
  },
  {
    q: "Do you insure clinics as well as individual practitioners?",
    a: "Yes. We arrange cover for clinics and medical centres as well as for independent physicians and other individual professionals.",
  },
  {
    q: "Where is your office?",
    a: "Ayias Elenis 36, Galaxias Commercial Center, 4th floor, office 404, 1061 Nicosia. Call +357 22 279484 or email info@medsure.com.cy to arrange a meeting.",
  },
];

export const closing = {
  kicker: ["Clarity and confidence start with one conversation.", "Let’s put the right cover in place — together."],
  title: ["Practise with", "certainty"],
  photo: { src: paramedicine, alt: "" } as Photo,
};
