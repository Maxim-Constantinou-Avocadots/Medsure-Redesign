/**
 * Company facts, routes and navigation.
 * Source: docs/content-inventory.md (header, footer, contact page).
 * URLs match the current medsure.com.cy slugs, so existing links and search rankings carry over.
 */

export const routes = {
  home: "/",
  about: "/about-us-medsure",
  history: "/history",
  serviceCharter: "/service-charter",
  values: "/values-vision",
  community: "/medsure",
  lloyds: "/lloyds-corporation",
  liability: "/medical-professional-responsibility",
  dentistry: "/dentistry",
  lightAesthetics: "/light-aesthetics",
  clinics: "/clinics",
  independentPhysicians: "/independent-physicians",
  paramedicine: "/paramedicine",
  additionalProfessions: "/additional-professions",
  careers: "/careers",
  contact: "/contact-us",
  privacy: "/privacy-policy",
} as const;

export const company = {
  name: "Medsure",
  legalName: "Medsure Medicare Insurance Brokers (Cyprus) Ltd",
  agencyName: "Medsure Insurance Agency",
  phone: "+357 22 279484",
  phoneHref: "tel:+35722279484",
  email: "info@medsure.com.cy",
  facebook: "https://www.facebook.com/profile.php?id=61592039410284",
  address: ["Ayias Elenis 36, Galaxias Commercial Center", "4th Floor, Office 404", "1061 Nicosia, Cyprus"],
  addressShort: "Ayias Elenis 36, Nicosia",
  /** Points at the real Nicosia address (the live site's link opens Australia). */
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Ayias+Elenis+36+Galaxias+Commercial+Center+1061+Nicosia+Cyprus",
  founder: { name: "Zeev Jaffe", role: "CEO and Founder", initials: "ZJ" },
} as const;

export type NavLink = { label: string; href: string; description?: string };
export type NavItem = NavLink & { children?: NavLink[] };

export const aboutLinks: NavLink[] = [
  { label: "Values & Vision", href: routes.values, description: "Service, quality, innovation and professionalism" },
  { label: "History", href: routes.history, description: "Independent since 1983" },
  { label: "Service Charter", href: routes.serviceCharter, description: "Service in the first place" },
  { label: "Lloyd's Corporation", href: routes.lloyds, description: "Our insurance partner" },
  { label: "Medsure in the Community", href: routes.community, description: "Giving back to the community" },
];

export const liabilityLinks: NavLink[] = [
  { label: "Dentistry", href: routes.dentistry },
  { label: "Light Aesthetics", href: routes.lightAesthetics },
  { label: "Clinics", href: routes.clinics },
  { label: "Independent Physicians", href: routes.independentPhysicians },
  { label: "Paramedicine", href: routes.paramedicine },
  { label: "Additional Professions", href: routes.additionalProfessions },
];

export const mainNav: NavItem[] = [
  { label: "About Us", href: routes.about, children: aboutLinks },
  { label: "Professional Liability", href: routes.liability, children: liabilityLinks },
  { label: "Careers", href: routes.careers },
  { label: "Contact Us", href: routes.contact },
];
