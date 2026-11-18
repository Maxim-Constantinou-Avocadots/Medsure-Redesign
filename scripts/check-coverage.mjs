// Verifies that every page carries the facts and phrases from docs/content-inventory.md,
// and that known source errors never appear. Usage: node scripts/check-coverage.mjs http://localhost:3000
const base = process.argv[2] || "http://localhost:3000";

const norm = (s) =>
  s.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ")
   .replace(/<[^>]+>/g, " ").replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, "&")
   .replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, " ").toLowerCase();

const specialtyCommon = ["lloyd's insurance coverage", "largest and oldest insurance corporation in the world", "service in the first place", "personal support in claims", "doesn't end once you've signed the forms", "close legal support until the end of the process", "may also make mistakes", "best policy for each client"];

const checks = {
  "/": ["malpractice insurance coverage", "uncompromising service experience", "solutions for all medical professions", "tailored specifically", "30 years", "2,000+", "45", "1983", "pioneered in the field of professional medical malpractice", "zeev jaffe", "ceo and founder", "expertise in finding unique", "boutique office", "personal attention to each client", "integrity", "transparency and credibility", "partners along the way", "medsure insurance in cyprus", "values we have excelled at over the years", "dentistry", "light aesthetics", "clinics", "independent physicians", "paramedicine", "additional professions", "send us a message if you have any questions", "first name", "email", "subject", "message"],
  "/about-us-medsure": ["medsure insurance agency", "explore everything about us", "values and vision", "history", "service charter", "lloyd's corporation", "professional responsibility", "medsure in the community", "helping the weak", "association of insurance agents in israel", "subscribe to our newsletter", "subscribe"],
  "/history": ["over 40 years of experience", "1983", "zeev jaffe", "sure insurance agency", "independent insurance agency", "service first", "long-term accompaniment", "even after signing the forms", "issuance of policies", "implementation of changes"],
  "/service-charter": ["service in the first place", "first-place service", "association of insurance agents in israel", "fairly and respectfully", "respect their privacy", "reception hours", "seven business days", "two business days", "clear and reasoned", "transfer a certificate or document", "financial institution", "including to a former client", "client's rights", "claim resolution process"],
  "/values-vision": ["our values and vision", "best insurance coverage", "uncompromising service experience", "service", "quality", "innovation", "professionalism", "personal attention", "family atmosphere", "we use the experience we have gained for your success"],
  "/medsure": ["giving back to the community", "moral obligation", "helping the weak", "food packages", "beginning of the school year", "underprivileged families", "many other projects", "zeev jaffe", "board member", "fully voluntary"],
  "/lloyds-corporation": ["lloyd's corporation", "1688", "small café", "world's leading insurance market", "professional marker", "reinsurance", "centuries", "330 years", "protect what matters most", "lloyd's excellent insurance coverage"],
  "/medical-professional-responsibility": ["professional responsibility", "bodily injury or property", "legal expenses", "compensation to the plaintiffs", "understand exactly what your alternatives are", "how worthwhile", "may also make mistakes", "dentistry", "independent physicians", "light aesthetics", "paramedicine", "clinics", "additional professions", "professional and mental peace of mind", "let's grow together", "most suitable policy for you, at an attractive price", "contact us"],
  "/dentistry": ["professional liability insurance for dentists", ...specialtyCommon],
  "/light-aesthetics": ["professional liability insurance for light aesthetics", "those engaged in light aesthetics", ...specialtyCommon],
  "/clinics": ["professional liability insurance for clinics", "vicarious liability", "shipping liability", ...specialtyCommon],
  "/independent-physicians": ["professional liability insurance for independent physicians", ...specialtyCommon],
  "/paramedicine": ["professional liability insurance for paramedicine", "paramedical practitioners", ...specialtyCommon],
  "/additional-professions": ["professional liability insurance for additional professions", "psychologists", "psychiatrists", "pharmacists", "optometrists", "safety supervisors", "investment portfolio managers", "and more", "professionals may make mistakes", ...specialtyCommon.filter((x) => x !== "may also make mistakes")],
  "/careers": ["be part of a winning team", "career opportunities", "leading insurance agency in the field of professional liability", "boutique office, with personal attention and a family atmosphere", "apply now", "human resources", "welfare of our employees", "account manager", "at least two years of experience", "telemarketing salesperson", "excellent wages", "administrative manager", "day-to-day management", "at least one year of experience", "first name", "last name", "phone", "our team", "authorized insurance agency in israel (2013) ltd.", "even after signing the forms", "let's grow together", "don't hesitate to contact us"],
  "/contact-us": ["get in touch about your insurance needs", "we have the solution for all your needs", "get in touch with us", "ayias elenis 36, galaxias commercial center", "4th floor, office 404", "1061 nicosia, cyprus", "info@medsure.com.cy", "+357 22 279484", "send us a message", "first name", "last name", "phone"],
  "/privacy-policy": ["last updated: 7 october 2026", "respects your privacy", "1. who is responsible", "2. what personal data", "2.1 information you provide", "2.2 information provided when applying", "2.3 technical and usage", "2.4 cookies and similar", "3. how we use", "4. legal bases", "5. special categories", "6. sharing personal data", "we do not sell your personal data", "7. international transfers", "8. how long we keep", "9. data security", "10. your data protection rights", "right to data portability", "11. how to exercise", "12. right to lodge a complaint", "commissioner for personal data protection", "13. children's privacy", "14. third-party websites", "15. marketing communications", "16. automated decision-making", "17. changes to this privacy policy", "18. contact us"],
};

const banned = ["taurus", "easy aesthetics", "yaffe", "coorporation", "corporationlloyd", "independent and independent", "important: the specific cookies", "lorem", "north parramatta"];
const everywhere = ["medsure medicare insurance brokers (cyprus) ltd", "+357 22 279484", "info@medsure.com.cy", "privacy policy", "careers", "contact us"];

let failures = 0, passes = 0;
for (const [path, phrases] of Object.entries(checks)) {
  const res = await fetch(base + path);
  const text = norm(await res.text());
  const missing = [...phrases, ...everywhere].filter((p) => !text.includes(p.toLowerCase()));
  const found = banned.filter((b) => text.includes(b));
  if (res.status !== 200 || missing.length || found.length) {
    failures++;
    console.log(`✗ ${path} (${res.status})`);
    missing.forEach((m) => console.log(`    missing: ${m}`));
    found.forEach((f) => console.log(`    banned:  ${f}`));
  } else {
    passes++;
    console.log(`✓ ${path} — ${phrases.length + everywhere.length} checks`);
  }
}
console.log(`\n${passes} pages pass, ${failures} with issues`);
process.exit(failures ? 1 : 0);
