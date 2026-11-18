import type { Photo } from "./liability";
import careersHero from "@/assets/images/careers.jpg";

/** Careers & contact content. Source: docs/content-inventory.md §15–16. */

export const careers = {
  eyebrow: "Careers",
  title: "Be part of a winning team",
  lead: "Be part of Medsure's winning team — come and work at a leading insurance agency in the field of professional liability.",
  hero: { src: careersHero, alt: "Colleagues giving each other a high five", position: "50% 30%" } as Photo,
  culture: "A boutique office, with personal attention and a family atmosphere.",
  roles: [
    {
      title: "Account Manager",
      body: "A challenging position with great promotion options. Requires at least two years of experience.",
    },
    {
      title: "Telemarketing Salesperson",
      body: "Working comfortable hours, with excellent wages and an option for bonuses based on successes — and there are a lot of them!",
    },
    {
      title: "Administrative Manager",
      body: "An administrative manager is required for the day-to-day management of the company's offices. At least one year of experience in the field is required.",
    },
  ],
  hr: {
    title: "Human Resources",
    body: "Our human resources department takes care of the welfare of our employees, and of improving their professionalism and progress in the company.",
  },
  apply: {
    title: "Apply now by sending your CV",
  },
  team: {
    title: "Our team",
    body: "We began operating “Medsure, Authorized Insurance Agency in Israel (2013) Ltd.”, based on the same values that have accompanied us from day one — emphasising the best insurance coverage, and service that accompanies the client even after signing the forms.",
  },
  grow: {
    title: "Let's grow together",
    body: "If you have any other questions, don't hesitate to contact us!",
  },
};

export const contact = {
  eyebrow: "Contact Us",
  title: "Get in touch about your insurance needs",
  lead: "We have the solution for all your needs.",
  formTitle: "Send us a message",
};
