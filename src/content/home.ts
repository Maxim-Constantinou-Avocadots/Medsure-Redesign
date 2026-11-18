import heroPoster from "@/assets/images/hero-poster.jpg";
import physician from "@/assets/images/physician.jpg";
import support from "@/assets/images/support.jpg";
import meeting from "@/assets/images/meeting.jpg";
import paramedicine from "@/assets/images/paramedicine.jpg";
import towers from "@/assets/images/towers.jpg";
import { company, routes } from "./company";
import type { Photo } from "./liability";

/**
 * Homepage content. Every line traces to docs/content-inventory.md
 * (section noted beside each block). Copy is tightened, not extended.
 */

// §1 hero H1 + "Customized Insurance" + stats
export const hero = {
  title: "Malpractice cover, tailored especially for you",
  lead: "Medsure Insurance Agency provides clients with the best medical malpractice insurance coverage — and an uncompromising service experience.",
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
    { label: "Years of experience in insurance", value: 45 },
    { label: "Years in professional liability", value: 30 },
    { label: "Customers can't be wrong", value: 2000, suffix: "+" },
  ],
};

// §1 "Medical Professional Liability — Solutions for all medical professions"
export const specialtiesIntro = {
  eyebrow: "Medical Professional Liability",
  title: "Solutions for all medical professions — tailored specifically for you, at the highest standards.",
};

// §1 "Customized Insurance" bullets + stats copy; §9–14 "Personal support in claims"
export type Reason = { tag: string; title: string; body: string; photo: Photo };
export const reasons: Reason[] = [
  {
    tag: "Flexible, customised insurance",
    title: "Coverage tailored specifically for you",
    body: "We at Medsure do everything possible to tailor the insurance coverage especially for you — providing our clients with coverage tailored specifically for them, at the highest standards.",
    photo: { src: physician, alt: "A physician examining a patient", position: "40% 40%" },
  },
  {
    tag: "Close accompaniment in claims",
    title: "With you until the end of the process",
    body: "In the event of a claim, we accompany you throughout — from an efficient, personal and professional response to your questions, to close legal support until the end of the process.",
    photo: { src: support, alt: "An advisor on a headset working at a screen", position: "60% 40%" },
  },
  {
    tag: "Boutique office",
    title: "Personal attention to each client",
    body: "A boutique office with personal attention to each client — and a family atmosphere, maintained since the day the agency was established.",
    photo: { src: meeting, alt: "Colleagues in conversation around a table" },
  },
  {
    tag: "Unique insurance solutions",
    title: "Expertise in finding unique solutions",
    body: "With 30 years of experience in the field of professional liability, our agency knows how to get the best out of your policy.",
    photo: { src: paramedicine, alt: "A medical professional examining a patient", position: "40% 40%" },
  },
];

// §9–14 shared body + "Personal support in claims"
export const statements = {
  backdrop: towers,
  lines: [
    ["Despite knowledge and experience,", "doctors and professionals", "may also make mistakes."],
    ["Such an error sometimes leads to a lawsuit —", "and a high financial expense that affects", "your ability to keep practising."],
    ["With us, the service doesn't end", "once you've signed the forms."],
  ],
  duration: 5500,
};

// §1 "Experience meets innovation", "Integrity", "Our Clients"
export const homeAbout = {
  title: "Experience meets innovation",
  values: ["Integrity", "Transparency", "Credibility", "Personal attention"],
  body: [
    "Our agency was established back in 1983 to give our clients the best service, along with extensive insurance coverage and personal accompaniment of each client. In recent years, the agency has pioneered in the field of professional medical malpractice — so we can find the best insurance solutions for you.",
    "Professional and personal integrity is what guides us in working with our clients. We are committed to working with an emphasis on transparency and credibility.",
  ],
  clients: { value: "2,000+", label: "Happy clients — we are happy to be partners along the way." },
  founder: company.founder,
};

// §8 + §1: "Our professionalism… understand your alternatives", "most suitable policy… attractive price", History "quick handling"
export const steps = {
  eyebrow: "Medsure Insurance in Cyprus",
  title: "When you are insured with Medsure, you benefit from the values we have excelled at over the years",
  items: [
    {
      title: "Talk to us",
      text: "We are here to find the most suitable policy for you, at an attractive price.",
    },
    {
      title: "Understand your options",
      text: "Our professionalism and high service awareness allow you to understand exactly what your alternatives are, and how worthwhile each of them is for you.",
    },
    {
      title: "Beside you after signing",
      text: "Quick handling of policies and changes in our own offices — and close accompaniment in handling claims.",
    },
  ],
};

// FAQ answers are assembled from §1, §8, §9–14 and §16 copy only.
export const faqs = [
  {
    q: "What does professional liability insurance cover?",
    a: "Professional liability insurance covers the insured in the event that a third party — the client or any other person — files a claim against them for bodily injury or property. It includes coverage for legal expenses, as well as the payment of compensation to the plaintiffs where it is determined that there was indeed such negligence.",
  },
  {
    q: "Why do medical professionals need it?",
    a: "Despite knowledge and experience, doctors and professionals in the field of health and paramedicine may also make mistakes. Such an error sometimes leads to a lawsuit, and the result may be a high financial expense that affects your ability to continue practising. A medical professional liability policy protects you against those claims.",
  },
  {
    q: "Which professions do you insure?",
    a: "Dentistry, light aesthetics, clinics, independent physicians and paramedicine — as well as additional professions such as psychologists, psychiatrists, pharmacists, optometrists, safety supervisors, investment portfolio managers and more.",
  },
  {
    q: "Who provides the insurance coverage?",
    a: "The insurance coverage is carried out by the British insurance corporation Lloyd's — the largest and oldest insurance corporation in the world. This allows us to issue policies tailored specifically to our clients.",
  },
  {
    q: "What happens if a claim is made against me?",
    a: "With us, the service doesn't end once you've signed the forms. In the event of a claim, we will accompany you throughout the process — from an efficient, personal and professional response to your questions, to close legal support until the end of the process.",
  },
  {
    q: "Where is your office?",
    a: `${company.address.join(", ")}. Call ${company.phone} or email ${company.email}.`,
  },
];

// §1 "Contact Us — Send us a message if you have any questions!"
export const homeContact = {
  eyebrow: "Contact Us",
  title: "Send us a message if you have any questions",
};

/** Closing band defaults (§8 / §15 "Let's Grow Together!") */
export const closingDefaults = {
  kicker: ["Let's grow together.", "We are here to find the most suitable policy for you, at an attractive price."],
  title: ["For your peace of mind,", "professional and financial"],
  cta: { label: "Contact us", href: routes.contact },
};
