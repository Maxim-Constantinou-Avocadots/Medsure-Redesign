/**
 * Privacy Policy — reproduced verbatim from https://www.medsure.com.cy/privacy-policy
 * (Last Updated: 7 October 2026). Legal text: do not edit wording.
 * One change: the published internal drafting note in §2.4 ("Important: The specific cookies and
 * third-party technologies actually deployed … should be listed in a separate Cookie Policy …")
 * has been removed from the page. A Cookie Policy is still outstanding — see docs/content-inventory.md.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "address"; lines: string[] };

export type PolicySection = { id: string; title: string; blocks: Block[] };

const address: Block = {
  type: "address",
  lines: [
    "Medsure Medicare Insurance Brokers (Cyprus) Ltd",
    "Ayias Elenis 36, Galaxias Commercial Center, 4th Floor, Office 404",
    "1061 Nicosia, Cyprus",
    "Email: info@medsure.com.cy",
    "Telephone: +357 22 279484",
  ],
};

export const privacy = {
  title: "Privacy Policy",
  lastUpdated: "7 October 2026",
  intro: [
    "Medsure Medicare Insurance Brokers (Cyprus) Ltd (“Medsure”, “we”, “us” or “our”) respects your privacy and is committed to protecting your personal data.",
    "This Privacy Policy explains how we collect, use, disclose, store and protect personal data when you visit or use our website, www.medsure.com.cy (the “Website”), contact us, submit an enquiry, apply for a position, or otherwise interact with us through the Website.",
    "Medsure Medicare Insurance Brokers (Cyprus) Ltd is located at:",
  ],
  introAddress: [
    "Ayias Elenis 36, Galaxias Commercial Center, 4th Floor, Office 404, 1061 Nicosia, Cyprus",
    "Email: info@medsure.com.cy",
    "Telephone: +357 22 279484",
  ],
  sections: [
    {
      id: "responsible",
      title: "1. Who Is Responsible for Your Personal Data?",
      blocks: [
        { type: "p", text: "For the purposes of applicable data-protection legislation, including the EU General Data Protection Regulation (EU) 2016/679 (“GDPR”), Medsure Medicare Insurance Brokers (Cyprus) Ltd is the controller of personal data collected through or in connection with the Website, except where we expressly state otherwise." },
        { type: "p", text: "If you have any questions regarding this Privacy Policy or the processing of your personal data, you may contact us at:" },
        address,
      ],
    },
    {
      id: "collect",
      title: "2. What Personal Data Do We Collect?",
      blocks: [
        { type: "p", text: "Depending on how you interact with the Website, we may collect the following categories of personal data." },
        { type: "h3", text: "2.1 Information You Provide to Us" },
        { type: "p", text: "When you contact us or submit a form through the Website, we may collect:" },
        { type: "ul", items: ["First and last name;", "Email address;", "Telephone number;", "Country or area/calling code;", "Subject and content of your enquiry;", "Any other information you voluntarily provide to us."] },
        { type: "p", text: "The Website currently provides contact forms through which visitors may submit information such as their name, email address, telephone number and message." },
        { type: "h3", text: "2.2 Information Provided When Applying for Employment" },
        { type: "p", text: "If you apply for a position through the Website, we may collect information such as:" },
        { type: "ul", items: ["Name and contact details;", "Curriculum vitae/resumé;", "Employment history;", "Education and professional qualifications;", "Skills and professional experience;", "Information contained in your application;", "Any other information you voluntarily provide as part of your application."] },
        { type: "p", text: "We will use recruitment information only for legitimate recruitment and employment-related purposes and will handle such information in accordance with applicable data-protection legislation." },
        { type: "h3", text: "2.3 Technical and Usage Information" },
        { type: "p", text: "When you visit the Website, certain information may be collected automatically, depending on the Website's technical configuration and the technologies enabled on your device. This may include:" },
        { type: "ul", items: ["IP address;", "Browser type and version;", "Device type;", "Operating system;", "Language and regional settings;", "Date and time of access;", "Pages visited and interactions with the Website;", "Referring website or source;", "Technical information relating to Website performance and security."] },
        { type: "p", text: "Some of this information may constitute personal data under applicable law." },
        { type: "h3", text: "2.4 Cookies and Similar Technologies" },
        { type: "p", text: "The Website may use cookies and similar technologies." },
        { type: "p", text: "Cookies may be used for purposes such as:" },
        { type: "ul", items: ["Enabling the Website to function correctly;", "Maintaining security;", "Remembering preferences;", "Understanding how visitors use the Website;", "Measuring Website performance;", "Improving our services and Website;", "Supporting marketing or analytics activities, where applicable."] },
        { type: "p", text: "Strictly necessary cookies may be used where permitted by applicable law." },
        { type: "p", text: "Where consent is legally required for non-essential cookies or similar technologies, we will request your consent before placing or using those technologies." },
        { type: "p", text: "You may manage or withdraw your cookie preferences through the Website's cookie settings, where such functionality is available." },
      ],
    },
    {
      id: "use",
      title: "3. How We Use Personal Data",
      blocks: [
        { type: "p", text: "We may process personal data for the following purposes:" },
        { type: "ul", items: [
          "To respond to enquiries and requests submitted through the Website;",
          "To communicate with you regarding our services;",
          "To provide information about insurance products and services;",
          "To assess and follow up on requests for information;",
          "To manage and maintain relationships with clients and prospective clients;",
          "To process and administer insurance-related requests where applicable;",
          "To process employment applications and recruitment activities;",
          "To operate, maintain, secure and improve the Website;",
          "To monitor and analyse Website usage and performance;",
          "To prevent fraud, abuse, security incidents and other unlawful activities;",
          "To comply with legal and regulatory obligations;",
          "To establish, exercise or defend legal claims;",
          "To protect our rights, property, systems and business;",
          "To carry out other purposes that are compatible with the purposes for which the information was originally collected or otherwise permitted by applicable law.",
        ] },
        { type: "p", text: "We will not use your personal data for purposes that are incompatible with the purposes described in this Privacy Policy unless permitted or required by law." },
      ],
    },
    {
      id: "legal-bases",
      title: "4. Legal Bases for Processing",
      blocks: [
        { type: "p", text: "Where the GDPR applies, we process personal data on one or more of the following legal bases:" },
        { type: "h3", text: "Consent" },
        { type: "p", text: "We may process personal data where you have given valid consent, for example where consent is required for certain non-essential cookies or direct marketing activities." },
        { type: "p", text: "You may withdraw consent at any time. Withdrawal of consent does not affect the lawfulness of processing carried out before consent was withdrawn." },
        { type: "h3", text: "Performance of a Contract" },
        { type: "p", text: "We may process personal data where processing is necessary to take steps at your request before entering into a contract or to perform a contract with you." },
        { type: "h3", text: "Legal Obligation" },
        { type: "p", text: "We may process personal data where necessary to comply with a legal or regulatory obligation applicable to Medsure." },
        { type: "h3", text: "Legitimate Interests" },
        { type: "p", text: "We may process personal data where necessary for our legitimate interests or those of a third party, provided that those interests are not overridden by your fundamental rights and freedoms." },
        { type: "p", text: "Such interests may include operating and improving our business and Website, maintaining information security, preventing fraud, responding to enquiries, managing business relationships and defending legal rights." },
        { type: "h3", text: "Vital Interests" },
        { type: "p", text: "In exceptional circumstances, personal data may be processed where necessary to protect someone's vital interests, where permitted by applicable law." },
      ],
    },
    {
      id: "special-categories",
      title: "5. Special Categories of Personal Data",
      blocks: [
        { type: "p", text: "Because Medsure operates in the insurance sector, you may voluntarily provide information that is considered special category personal data under the GDPR, including health information." },
        { type: "p", text: "Please do not submit sensitive or special category personal data through a general Website contact form unless it is specifically requested or necessary for the purpose for which you are contacting us." },
        { type: "p", text: "Where special category personal data is processed, we will do so only where an appropriate legal basis and applicable condition under data-protection law exists." },
        { type: "p", text: "Where possible, we will limit the collection of sensitive information to what is necessary for the relevant purpose." },
      ],
    },
    {
      id: "sharing",
      title: "6. Sharing Personal Data",
      blocks: [
        { type: "p", text: "We may disclose personal data where reasonably necessary for the purposes described in this Privacy Policy." },
        { type: "p", text: "Depending on the circumstances, recipients may include:" },
        { type: "ul", items: [
          "Our employees, authorised representatives and professional advisers;",
          "Insurance companies, insurers, underwriters and relevant insurance market participants;",
          "Service providers supporting our Website and business operations;",
          "Website hosting and IT service providers;",
          "Email, communications and customer-management service providers;",
          "Recruitment or human-resources service providers;",
          "Professional advisers, including lawyers, accountants and auditors;",
          "Regulatory authorities, government bodies, courts and law-enforcement authorities where required or permitted by law;",
          "Other parties where disclosure is necessary to establish, exercise or defend legal rights;",
          "A purchaser, successor or other relevant party in connection with a corporate transaction, merger, restructuring or sale of assets.",
        ] },
        { type: "p", text: "We require service providers processing personal data on our behalf to process such data in accordance with applicable data-protection requirements and our instructions, where required by law." },
        { type: "p", text: "We do not sell your personal data." },
      ],
    },
    {
      id: "transfers",
      title: "7. International Transfers",
      blocks: [
        { type: "p", text: "Some of our service providers or business partners may process personal data outside Cyprus or the European Economic Area (“EEA”)." },
        { type: "p", text: "Where personal data is transferred outside the EEA, we will take appropriate steps to ensure that the transfer is lawful under applicable data-protection legislation." },
        { type: "p", text: "Depending on the circumstances, this may include relying on:" },
        { type: "ul", items: ["An adequacy decision of the European Commission;", "Standard Contractual Clauses approved by the European Commission;", "Appropriate safeguards recognised under applicable law; or", "Another lawful transfer mechanism."] },
        { type: "p", text: "You may contact us for further information regarding applicable safeguards for international transfers." },
      ],
    },
    {
      id: "retention",
      title: "8. How Long We Keep Personal Data",
      blocks: [
        { type: "p", text: "We retain personal data only for as long as reasonably necessary for the purposes for which it was collected, including for the purposes of satisfying legal, accounting, regulatory, insurance and reporting requirements." },
        { type: "p", text: "The appropriate retention period will depend on factors including:" },
        { type: "ul", items: ["The nature and purpose of the information;", "Whether we have an ongoing relationship with you;", "Legal and regulatory retention requirements;", "Limitation periods for potential legal claims;", "Our legitimate business and record-keeping requirements."] },
        { type: "p", text: "When personal data is no longer required, we will securely delete, anonymise or otherwise dispose of it in accordance with our retention procedures and applicable law." },
      ],
    },
    {
      id: "security",
      title: "9. Data Security",
      blocks: [
        { type: "p", text: "We take reasonable technical and organisational measures designed to protect personal data against accidental or unlawful destruction, loss, alteration, unauthorised disclosure or access." },
        { type: "p", text: "However, no method of transmission over the Internet or method of electronic storage can be guaranteed to be completely secure." },
        { type: "p", text: "You should therefore exercise appropriate caution when submitting personal information online." },
      ],
    },
    {
      id: "rights",
      title: "10. Your Data Protection Rights",
      blocks: [
        { type: "p", text: "Subject to applicable law and certain limitations, you may have the following rights in relation to your personal data:" },
        { type: "h3", text: "Right of Access" },
        { type: "p", text: "You may request confirmation as to whether we process your personal data and request a copy of the personal data we hold about you." },
        { type: "h3", text: "Right to Rectification" },
        { type: "p", text: "You may request correction of inaccurate or incomplete personal data." },
        { type: "h3", text: "Right to Erasure" },
        { type: "p", text: "In certain circumstances, you may request deletion of your personal data." },
        { type: "h3", text: "Right to Restriction" },
        { type: "p", text: "In certain circumstances, you may request that we restrict the processing of your personal data." },
        { type: "h3", text: "Right to Object" },
        { type: "p", text: "You may object to certain processing activities, including processing based on legitimate interests and, where applicable, direct marketing." },
        { type: "h3", text: "Right to Data Portability" },
        { type: "p", text: "Where applicable, you may request to receive personal data that you have provided to us in a structured, commonly used and machine-readable format and request its transmission to another controller." },
        { type: "h3", text: "Right to Withdraw Consent" },
        { type: "p", text: "Where processing is based on consent, you may withdraw your consent at any time." },
        { type: "p", text: "Withdrawal of consent does not affect the lawfulness of processing carried out before the withdrawal." },
      ],
    },
    {
      id: "exercise",
      title: "11. How to Exercise Your Rights",
      blocks: [
        { type: "p", text: "To exercise your rights or ask questions about the processing of your personal data, please contact us at:" },
        { type: "address", lines: [
          "Email: info@medsure.com.cy",
          "Address: Medsure Medicare Insurance Brokers (Cyprus) Ltd, Ayias Elenis 36, Galaxias Commercial Center, 4th Floor, Office 404, 1061 Nicosia, Cyprus",
          "Telephone: +357 22 279484",
        ] },
        { type: "p", text: "We may need to request additional information from you to verify your identity before fulfilling certain requests." },
        { type: "p", text: "We will respond to valid requests within the timeframe required by applicable law." },
      ],
    },
    {
      id: "complaint",
      title: "12. Right to Lodge a Complaint",
      blocks: [
        { type: "p", text: "If you believe that our processing of your personal data infringes applicable data-protection law, you have the right to lodge a complaint with the competent data-protection supervisory authority." },
        { type: "p", text: "For individuals in Cyprus, the relevant supervisory authority is the:" },
        { type: "address", lines: ["Office of the Commissioner for Personal Data Protection (Cyprus)"] },
        { type: "p", text: "You may contact the supervisory authority through its official channels for information about making a complaint." },
        { type: "p", text: "You may also contact us first so that we can attempt to address your concerns." },
      ],
    },
    {
      id: "children",
      title: "13. Children's Privacy",
      blocks: [
        { type: "p", text: "The Website is intended primarily for adults and business users." },
        { type: "p", text: "We do not knowingly collect personal data from children where such collection is not permitted by applicable law." },
        { type: "p", text: "If you believe that a child has provided personal data to us without appropriate consent or authorisation, please contact us so that we can review the matter and take appropriate action." },
      ],
    },
    {
      id: "third-party",
      title: "14. Third-Party Websites",
      blocks: [
        { type: "p", text: "The Website may contain links to third-party websites or services." },
        { type: "p", text: "This Privacy Policy applies only to the Medsure Website and does not apply to third-party websites." },
        { type: "p", text: "We are not responsible for the privacy practices, content or security of third-party websites. We recommend reviewing the privacy policies of any third-party websites you visit." },
      ],
    },
    {
      id: "marketing",
      title: "15. Marketing Communications",
      blocks: [
        { type: "p", text: "Where permitted by law, we may use your contact information to provide information about Medsure's services or other communications that may be relevant to you." },
        { type: "p", text: "Where applicable, we will obtain the consent required by law before sending electronic direct marketing communications." },
        { type: "p", text: "You may opt out of marketing communications at any time by following the unsubscribe instructions contained in the relevant communication or by contacting us directly." },
      ],
    },
    {
      id: "automated",
      title: "16. Automated Decision-Making and Profiling",
      blocks: [
        { type: "p", text: "Unless otherwise expressly communicated to you, we do not use the Website to make decisions based solely on automated processing, including profiling, that produce legal effects or similarly significantly affect you." },
        { type: "p", text: "If this changes, we will provide the information required by applicable data-protection legislation." },
      ],
    },
    {
      id: "changes",
      title: "17. Changes to This Privacy Policy",
      blocks: [
        { type: "p", text: "We may update this Privacy Policy from time to time to reflect changes in our business, Website, technology, legal requirements or data-processing practices." },
        { type: "p", text: "When we make changes, we will update the “Last Updated” date at the top of this Privacy Policy." },
        { type: "p", text: "We encourage you to review this Privacy Policy periodically." },
      ],
    },
    {
      id: "contact",
      title: "18. Contact Us",
      blocks: [
        { type: "p", text: "If you have any questions, concerns or requests regarding this Privacy Policy or the way we process personal data, please contact:" },
        { type: "address", lines: [
          "Medsure Medicare Insurance Brokers (Cyprus) Ltd",
          "Ayias Elenis 36",
          "Galaxias Commercial Center",
          "4th Floor, Office 404",
          "1061 Nicosia",
          "Cyprus",
          "Email: info@medsure.com.cy",
          "Telephone: +357 22 279484",
        ] },
      ],
    },
  ] as PolicySection[],
};
