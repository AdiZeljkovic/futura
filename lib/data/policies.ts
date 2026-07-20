// Word-for-word legal copy, sourced from the signed policy documents
// ("Website Policies – Futura"). Edit only if the source documents change —
// this is not marketing copy.

export type PolicyBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] };

export type PolicySection = {
  heading: string;
  level: 2 | 3;
  blocks: PolicyBlock[];
};

export type Policy = {
  slug: string;
  title: string;
  effectiveDate: string;
  meta: { company: string; address: string; website: string; email: string };
  intro: string[];
  sections: PolicySection[];
};

const META = {
  company: "Futura Digital LLC",
  address: "75 E 3rd St, Sheridan, WY 82801, United States",
  website: "https://www.thefutura.llc/",
  email: "hello@thefutura.llc",
};

const CONTACT_LINES: PolicyBlock[] = [
  { type: "p", text: "Futura Digital LLC" },
  { type: "p", text: "75 E 3rd St, Sheridan, WY 82801, United States" },
  { type: "p", text: "Email: hello@thefutura.llc" },
  { type: "p", text: "Website: https://www.thefutura.llc/" },
];

export const policies: Policy[] = [
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    effectiveDate: "July 13, 2026",
    meta: META,
    intro: [
      "Futura Digital LLC (“Futura Digital,” “we,” “us,” or “our”) respects your privacy and is committed to protecting the personal information of individuals who visit our website at https://www.thefutura.llc/ (the “Website”). This Privacy Policy explains what information we collect through the Website, how we use and protect it, the limited circumstances in which it may be disclosed, and the rights available to you under applicable data protection laws.",
      "This Website functions as a corporate holding and information page that presents our company and provides links to the separate digital brands and platforms operated within our group. The Website does not sell products or services, does not process payments, and does not offer user accounts or registration. As a result, the personal information we collect through this Website is limited, as described below.",
      "By accessing or using the Website, you acknowledge that you have read and understood this Privacy Policy. If you do not agree with this Privacy Policy, please do not use the Website.",
    ],
    sections: [
      {
        heading: "1. Scope of This Policy",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "This Privacy Policy applies only to information collected through this Website. It does not apply to any separate websites, brands, platforms, applications, or services that are linked from this Website or operated under separate brands within our group, even where those properties are affiliated with Futura Digital LLC. Each linked property may operate under its own privacy policy and terms.",
          },
          {
            type: "p",
            text: "When you click an external link on this Website and leave for another website or platform, the collection and use of your information becomes subject to the privacy policy of that destination property. We encourage you to review the privacy policy of any website or platform you visit.",
          },
        ],
      },
      {
        heading: "2. Information We Collect",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "Because this Website is a corporate information page, we collect only a limited amount of information. The categories of information are described below.",
          },
        ],
      },
      {
        heading: "2.1 Information You Provide Voluntarily",
        level: 3,
        blocks: [
          {
            type: "p",
            text: "The Website does not include registration forms, account creation, or online contact forms. If you choose to contact us directly using the email address published on the Website (hello@thefutura.llc), we will receive the information you include in your message, such as your name, your email address, and the contents of your communication. We use this information solely to respond to and manage your inquiry.",
          },
        ],
      },
      {
        heading: "2.2 Information Collected Automatically",
        level: 3,
        blocks: [
          {
            type: "p",
            text: "Like most websites, when you visit the Website our hosting infrastructure and any technologies operating on the Website may automatically collect certain technical information. This information may include:",
          },
          {
            type: "ul",
            items: [
              "Internet Protocol (IP) address;",
              "browser type and version;",
              "device type and operating system;",
              "referring website or source;",
              "pages viewed and the date and time of your visit;",
              "general, approximate geographic location derived from your IP address.",
            ],
          },
          {
            type: "p",
            text: "This information is collected on an aggregated or technical basis and is generally used to operate, secure, and maintain the Website. Depending on your jurisdiction and how it is combined with other data, some of this information may be considered personal information or personal data under applicable law.",
          },
        ],
      },
      {
        heading: "2.3 Cookies and Similar Technologies",
        level: 3,
        blocks: [
          {
            type: "p",
            text: "The Website may use cookies and similar technologies to enable basic functionality and to understand how the Website is used. For detailed information about the categories of cookies used, their purposes, and how you can manage your preferences, please refer to our Cookie Policy.",
          },
        ],
      },
      {
        heading: "2.4 Information We Do Not Collect",
        level: 3,
        blocks: [
          {
            type: "p",
            text: "Through this Website, we do not knowingly collect payment card information, financial account information, government identification numbers, or special categories of sensitive personal data. Because the Website does not process transactions or accounts, no such information is requested or required to use the Website.",
          },
        ],
      },
      {
        heading: "3. How We Use Information",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "We use the limited information described above for the following purposes:",
          },
          {
            type: "ul",
            items: [
              "to operate, maintain, secure, and improve the Website;",
              "to respond to and manage inquiries you send to us by email;",
              "to monitor and analyze general usage and traffic trends in aggregate;",
              "to detect, prevent, and address technical issues, security incidents, fraud, or misuse;",
              "to comply with applicable legal obligations and to enforce our terms;",
              "to establish, exercise, or defend legal claims where necessary.",
            ],
          },
        ],
      },
      {
        heading: "4. Legal Bases for Processing (EEA, UK, and Similar Jurisdictions)",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "If you are located in the European Economic Area (EEA), the United Kingdom, or another jurisdiction with similar requirements, we process your personal data only where we have a valid legal basis to do so. Depending on the situation, the legal bases we rely on include:",
          },
          {
            type: "ul",
            items: [
              "Legitimate interests: to operate and secure the Website, to understand how it is used, and to respond to inquiries, provided such interests are not overridden by your rights and freedoms;",
              "Consent: for non-essential cookies or similar technologies, where required, and for any optional processing that relies on consent;",
              "Legal obligation: where processing is necessary to comply with a legal requirement to which we are subject;",
              "Performance of a request: to take steps at your request, such as responding to an inquiry you initiate.",
            ],
          },
          {
            type: "p",
            text: "Where we rely on consent, you may withdraw your consent at any time. Withdrawing consent does not affect the lawfulness of processing carried out before withdrawal.",
          },
        ],
      },
      {
        heading: "5. How We Share and Disclose Information",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "We do not sell your personal information. We do not share your personal information except in the limited circumstances described below.",
          },
        ],
      },
      {
        heading: "5.1 Service Providers",
        level: 3,
        blocks: [
          {
            type: "p",
            text: "We may share limited information with third-party vendors and service providers that perform functions on our behalf, such as website hosting, infrastructure, security, and analytics. These providers are permitted to process information only as necessary to provide their services to us and are expected to maintain appropriate confidentiality and security measures.",
          },
        ],
      },
      {
        heading: "5.2 Legal and Compliance Disclosures",
        level: 3,
        blocks: [
          {
            type: "p",
            text: "We may disclose information where we believe in good faith that disclosure is necessary to comply with applicable law, regulation, legal process, or a governmental request; to enforce our terms; to protect the rights, property, or safety of Futura Digital LLC, our users, or others; or to detect, prevent, or address fraud, security, or technical issues.",
          },
        ],
      },
      {
        heading: "5.3 Business Transfers",
        level: 3,
        blocks: [
          {
            type: "p",
            text: "If Futura Digital LLC is involved in a merger, acquisition, financing, reorganization, sale of assets, or similar transaction, information may be transferred as part of that transaction, subject to the commitments described in this Privacy Policy.",
          },
        ],
      },
      {
        heading: "5.4 Affiliated Brands",
        level: 3,
        blocks: [
          {
            type: "p",
            text: "This Website links to separate brands and platforms within our group. We do not automatically transfer information you provide to us by email to those separate properties, and each property manages its own data practices under its own policies.",
          },
        ],
      },
      {
        heading: "6. International Data Transfers",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "Futura Digital LLC is located in the United States, and the information we collect is processed in the United States and may be processed by our service providers in other countries. If you access the Website from outside the United States, you understand that your information may be transferred to, stored in, and processed in a country whose data protection laws may differ from those of your country.",
          },
          {
            type: "p",
            text: "Where required by applicable law, we take steps to ensure that international transfers of personal data are subject to appropriate safeguards, such as recognized transfer mechanisms or contractual protections.",
          },
        ],
      },
      {
        heading: "7. Data Retention",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including to respond to and document inquiries, to maintain the security and integrity of the Website, and to comply with our legal obligations. When information is no longer required, we take reasonable steps to delete it or de-identify it. Technical and log data is generally retained for a limited period consistent with operational and security needs.",
          },
        ],
      },
      {
        heading: "8. Data Security",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "We implement reasonable administrative, technical, and organizational measures designed to protect information against unauthorized access, loss, misuse, or alteration. However, no method of transmission over the Internet or method of electronic storage is completely secure. While we strive to protect your information, we cannot guarantee its absolute security, and any transmission of information is at your own risk.",
          },
        ],
      },
      {
        heading: "9. Your Privacy Rights",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "Depending on where you are located, you may have certain rights regarding your personal information. We honor these rights as required by applicable law.",
          },
        ],
      },
      {
        heading: "9.1 Rights Under the GDPR and UK GDPR",
        level: 3,
        blocks: [
          {
            type: "p",
            text: "If you are located in the EEA or the United Kingdom, you may have the right to:",
          },
          {
            type: "ul",
            items: [
              "access the personal data we hold about you;",
              "request correction of inaccurate or incomplete personal data;",
              "request erasure of your personal data in certain circumstances;",
              "restrict or object to certain processing of your personal data;",
              "request data portability where applicable;",
              "withdraw consent at any time where processing is based on consent;",
              "lodge a complaint with your local data protection authority.",
            ],
          },
        ],
      },
      {
        heading: "9.2 Rights Under U.S. State Laws (Including California)",
        level: 3,
        blocks: [
          {
            type: "p",
            text: "If you are a resident of California or another U.S. state with applicable privacy legislation, you may have the right to know what personal information we collect and how we use it, to request access to or deletion of your personal information, to correct inaccurate personal information, and to not receive discriminatory treatment for exercising your rights. We do not sell personal information and do not share personal information for cross-context behavioral advertising in the manner defined by California law.",
          },
        ],
      },
      {
        heading: "9.3 How to Exercise Your Rights",
        level: 3,
        blocks: [
          {
            type: "p",
            text: "To exercise any of the rights described above, you may contact us at hello@thefutura.llc. We may need to verify your identity before responding to certain requests. We will respond within the timeframes required by applicable law. You may also authorize an agent to make a request on your behalf where permitted by law.",
          },
        ],
      },
      {
        heading: "10. Children’s Privacy",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "The Website is not directed to children, and we do not knowingly collect personal information from children. If you believe that a child has provided us with personal information, please contact us at hello@thefutura.llc so that we can take appropriate action in accordance with applicable law.",
          },
        ],
      },
      {
        heading: "11. Third-Party Websites and Links",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "The Website contains links to separate brands, platforms, and third-party websites. We are not responsible for the privacy practices or content of any website or platform that we do not operate under this Website. This Privacy Policy applies only to this Website. Please review the privacy policies of any external destination before providing your information.",
          },
        ],
      },
      {
        heading: "12. Changes to This Privacy Policy",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, legal requirements, or other factors. When we make changes, we will revise the “Effective Date” shown above. Your continued use of the Website after any changes take effect constitutes your acknowledgment of the updated Privacy Policy. We encourage you to review this page periodically.",
          },
        ],
      },
      {
        heading: "13. Contact Us",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "If you have questions, concerns, or requests regarding this Privacy Policy or our handling of your information, you may contact us at:",
          },
          ...CONTACT_LINES,
        ],
      },
    ],
  },

  {
    slug: "terms-of-use",
    title: "Terms of Use",
    effectiveDate: "July 13, 2026",
    meta: META,
    intro: [
      "These Terms of Use (“Terms”) govern your access to and use of the website located at https://www.thefutura.llc/ (the “Website”), which is operated by Futura Digital LLC (“Futura Digital,” “we,” “us,” or “our”). By accessing or using the Website, you agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use the Website.",
      "The Website is a corporate holding and information page that presents our company and provides links to the separate digital brands, platforms, and services operated within our group. The Website does not sell products or services, does not process payments, and does not provide user accounts. These Terms apply solely to your use of this Website.",
    ],
    sections: [
      {
        heading: "1. Acceptance of These Terms",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "By accessing, browsing, or otherwise using the Website, you confirm that you have read, understood, and agree to be bound by these Terms and by our Privacy Policy and Cookie Policy, which are incorporated by reference. If you are using the Website on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.",
          },
          {
            type: "p",
            text: "You must be legally capable of entering into a binding agreement in your jurisdiction to use the Website. If you do not meet this requirement, you must not use the Website.",
          },
        ],
      },
      {
        heading: "2. Purpose and Nature of the Website",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "The Website is provided for general informational purposes only. It presents information about Futura Digital LLC and the separate brands and platforms operated within our group, and it may contain links directing you to those brands and platforms or to other third-party resources.",
          },
          {
            type: "p",
            text: "Nothing on the Website constitutes an offer to sell, a solicitation, or a binding commitment of any kind. Information presented on the Website is subject to change without notice and may not always be complete, current, or error-free.",
          },
        ],
      },
      {
        heading: "3. Intellectual Property Rights",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "The Website and all content on it, including but not limited to text, graphics, logos, brand names, trademarks, service marks, layouts, design elements, and the selection and arrangement of content (collectively, the “Content”), are owned by or licensed to Futura Digital LLC and are protected by applicable intellectual property and other laws.",
          },
          {
            type: "p",
            text: "Subject to your compliance with these Terms, you are granted a limited, non-exclusive, non-transferable, revocable license to access and view the Website for your personal, non-commercial, informational use only. Except as expressly permitted, you may not:",
          },
          {
            type: "ul",
            items: [
              "copy, reproduce, republish, distribute, or publicly display any Content;",
              "modify, adapt, translate, or create derivative works from the Content;",
              "use any trademarks, brand names, or logos without our prior written consent;",
              "use any automated means to scrape, harvest, or extract Content or data from the Website;",
              "remove, obscure, or alter any copyright, trademark, or other proprietary notices.",
            ],
          },
          {
            type: "p",
            text: "All rights not expressly granted to you are reserved by Futura Digital LLC and its licensors.",
          },
        ],
      },
      {
        heading: "4. Acceptable Use",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "You agree to use the Website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use of the Website by, any third party. In particular, you agree that you will not:",
          },
          {
            type: "ul",
            items: [
              "use the Website in violation of any applicable law or regulation;",
              "attempt to gain unauthorized access to the Website, its servers, or any connected systems or networks;",
              "introduce any viruses, malware, or other harmful or malicious code;",
              "interfere with, disrupt, or impose an unreasonable load on the Website or its infrastructure;",
              "use the Website to transmit unsolicited communications or engage in fraudulent activity;",
              "attempt to reverse engineer, decompile, or otherwise derive the source of any part of the Website;",
              "use the Website in any manner that could damage, disable, or impair its operation.",
            ],
          },
        ],
      },
      {
        heading: "5. Third-Party Links, Brands, and Platforms",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "The Website contains links to separate brands and platforms operated within our group, as well as potentially to third-party websites and resources. These links are provided for your convenience only. When you follow a link and leave the Website, you do so at your own discretion and risk.",
          },
          {
            type: "p",
            text: "The separate brands and platforms, and any third-party websites, are governed by their own terms and policies, which may differ from these Terms. We do not control and are not responsible for the content, products, services, availability, security, or practices of any external website or platform. The inclusion of any link does not imply endorsement, sponsorship, or any representation regarding that destination. Any dealings you have with a third party accessed through the Website are solely between you and that third party.",
          },
        ],
      },
      {
        heading: "6. Disclaimer of Warranties",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "THE WEBSITE AND ALL CONTENT ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS, WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, FUTURA DIGITAL LLC DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.",
          },
          {
            type: "p",
            text: "We do not warrant that the Website will be uninterrupted, secure, timely, or error-free, that defects will be corrected, or that the Website or the servers that make it available are free of viruses or other harmful components. We make no warranty regarding the accuracy, completeness, reliability, or currentness of any Content on the Website. Any reliance you place on the Content is strictly at your own risk.",
          },
          {
            type: "p",
            text: "Some jurisdictions do not allow the exclusion of certain warranties, so some of the above exclusions may not apply to you. In such cases, our warranties are limited to the minimum extent permitted by applicable law.",
          },
        ],
      },
      {
        heading: "7. Limitation of Liability",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL FUTURA DIGITAL LLC, ITS AFFILIATES, OR THEIR RESPECTIVE OWNERS, OFFICERS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR ACCESS TO OR USE OF, OR INABILITY TO ACCESS OR USE, THE WEBSITE OR ANY LINKED CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
          },
          {
            type: "p",
            text: "TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, OUR TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THE WEBSITE OR THESE TERMS SHALL NOT EXCEED ONE HUNDRED U.S. DOLLARS (USD 100).",
          },
          {
            type: "p",
            text: "Some jurisdictions do not allow the limitation or exclusion of liability for certain damages. In those jurisdictions, our liability is limited to the maximum extent permitted by applicable law. Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited.",
          },
        ],
      },
      {
        heading: "8. Indemnification",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "To the fullest extent permitted by applicable law, you agree to indemnify, defend, and hold harmless Futura Digital LLC and its affiliates, and their respective owners, officers, employees, and agents, from and against any claims, liabilities, damages, losses, costs, and expenses, including reasonable legal fees, arising out of or in any way connected with your use of the Website, your violation of these Terms, or your violation of any applicable law or the rights of any third party.",
          },
        ],
      },
      {
        heading: "9. Availability and Changes to the Website",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "We reserve the right, at our sole discretion and without notice, to modify, suspend, or discontinue the Website or any part of it, temporarily or permanently, and to restrict access to some or all of the Website. We will not be liable to you or any third party for any such modification, suspension, or discontinuation.",
          },
        ],
      },
      {
        heading: "10. Changes to These Terms",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "We may revise these Terms from time to time. When we do, we will update the “Effective Date” shown above. Any changes become effective when the updated Terms are posted on the Website. Your continued use of the Website after changes take effect constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.",
          },
        ],
      },
      {
        heading: "11. Governing Law and Dispute Resolution",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "These Terms and any dispute or claim arising out of or in connection with them or your use of the Website shall be governed by and construed in accordance with the laws of the State of Wyoming, United States, without regard to its conflict of laws principles.",
          },
          {
            type: "p",
            text: "Subject to applicable law, you agree that any dispute arising out of or relating to these Terms or the Website shall be brought exclusively in the appropriate state or federal courts located in the State of Wyoming, and you consent to the personal jurisdiction of such courts. Where mandatory consumer protection laws of your country of residence grant you additional rights or require a different forum, nothing in this section deprives you of those rights.",
          },
        ],
      },
      {
        heading: "12. General Provisions",
        level: 2,
        blocks: [],
      },
      {
        heading: "12.1 Severability",
        level: 3,
        blocks: [
          {
            type: "p",
            text: "If any provision of these Terms is found to be unlawful, void, or unenforceable, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.",
          },
        ],
      },
      {
        heading: "12.2 No Waiver",
        level: 3,
        blocks: [
          {
            type: "p",
            text: "Our failure to enforce any right or provision of these Terms shall not constitute a waiver of that right or provision. Any waiver must be in writing to be effective.",
          },
        ],
      },
      {
        heading: "12.3 Entire Agreement",
        level: 3,
        blocks: [
          {
            type: "p",
            text: "These Terms, together with our Privacy Policy and Cookie Policy, constitute the entire agreement between you and Futura Digital LLC regarding your use of the Website and supersede any prior agreements or understandings on that subject.",
          },
        ],
      },
      {
        heading: "12.4 Assignment",
        level: 3,
        blocks: [
          {
            type: "p",
            text: "You may not assign or transfer these Terms or any rights or obligations under them without our prior written consent. We may assign these Terms without restriction in connection with a merger, acquisition, reorganization, or sale of assets.",
          },
        ],
      },
      {
        heading: "13. Contact Us",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "If you have any questions about these Terms, you may contact us at:",
          },
          ...CONTACT_LINES,
        ],
      },
    ],
  },

  {
    slug: "cookie-policy",
    title: "Cookie Policy",
    effectiveDate: "July 13, 2026",
    meta: META,
    intro: [
      "This Cookie Policy explains how Futura Digital LLC (“we,” “us,” or “our”) uses cookies and similar technologies on the website at https://www.thefutura.llc/ (the “Website”). It should be read together with our Privacy Policy.",
    ],
    sections: [
      {
        heading: "1. What Are Cookies",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work, to improve their performance, and to provide information to the website operator. Similar technologies, such as pixels, tags, and local storage, may serve comparable purposes. In this policy, we refer to all of these technologies as “cookies.”",
          },
        ],
      },
      {
        heading: "2. Types of Cookies We Use",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "We use the following categories of cookies on the Website:",
          },
          {
            type: "table",
            headers: ["Category", "Purpose"],
            rows: [
              [
                "Strictly Necessary",
                "These cookies are essential for the Website to function properly and to be secure. They enable core functionality such as page navigation and access to areas of the Website. The Website cannot function properly without them, and they cannot be switched off in our systems.",
              ],
              [
                "Functional",
                "These cookies allow the Website to remember choices you make, such as your language or region, in order to provide a more consistent experience. They are optional and are used only where applicable.",
              ],
              [
                "Analytics / Performance",
                "These cookies help us understand how visitors interact with the Website by collecting information on an aggregated basis, such as which pages are visited and how visitors move through the Website. This helps us maintain and improve the Website.",
              ],
            ],
          },
          {
            type: "p",
            text: "The specific cookies present may vary over time. Where required by applicable law, non-essential cookies are used only after you have given consent.",
          },
        ],
      },
      {
        heading: "3. Third-Party Cookies",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "Some cookies may be set by third-party service providers that support the operation or analysis of the Website, such as hosting or analytics providers. These third parties may process technical information in accordance with their own policies. We do not control cookies set by third parties, and we recommend reviewing the relevant third party’s privacy and cookie information for details on how they use such data.",
          },
        ],
      },
      {
        heading: "4. How to Manage Cookies",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "You can control and manage cookies in several ways. Most web browsers allow you to view, delete, or block cookies through their settings. The method for doing so varies by browser, and you can usually find instructions in your browser’s help section.",
          },
          {
            type: "p",
            text: "Where a consent mechanism is presented on the Website, you can also accept or decline non-essential cookies through that mechanism and change your preferences at any time. Please note that if you disable or block certain cookies, some parts of the Website may not function as intended.",
          },
        ],
      },
      {
        heading: "5. Changes to This Cookie Policy",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "We may update this Cookie Policy from time to time to reflect changes in the technologies we use or in applicable law. When we do, we will revise the “Effective Date” shown above. We encourage you to review this page periodically.",
          },
        ],
      },
      {
        heading: "6. Contact Us",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "If you have any questions about this Cookie Policy, you may contact us at:",
          },
          ...CONTACT_LINES,
        ],
      },
    ],
  },

  {
    slug: "accessibility-policy",
    title: "Accessibility Policy",
    effectiveDate: "July 13, 2026",
    meta: META,
    intro: [
      "Futura Digital LLC (“we,” “us,” or “our”) is committed to making the website at https://www.thefutura.llc/ (the “Website”) accessible to as many people as possible, including individuals with disabilities. This Accessibility Policy describes the steps we take toward that goal.",
    ],
    sections: [
      {
        heading: "1. Our Commitment",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "We aim to provide a Website that is usable and understandable for all visitors. We regard accessibility as an ongoing effort and work to improve the experience over time as standards and technologies evolve.",
          },
        ],
      },
      {
        heading: "2. Accessibility Standard",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "We use the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA, published by the World Wide Web Consortium, as a reference and a goal for the design and content of the Website. These guidelines explain how to make web content more accessible to people with a wide range of disabilities.",
          },
          {
            type: "p",
            text: "We work toward alignment with these guidelines but do not warrant or guarantee that the Website is fully conformant with WCAG 2.1 Level AA or that every page or element is free of accessibility limitations at all times. Accessibility is an area of continuous improvement.",
          },
        ],
      },
      {
        heading: "3. Measures We Take",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "Where practical, we take measures such as the following to support accessibility:",
          },
          {
            type: "ul",
            items: [
              "using clear structure and readable text;",
              "providing sufficient contrast between text and background;",
              "supporting keyboard navigation for interactive elements;",
              "providing descriptive text for meaningful images where appropriate;",
              "designing the Website to work across common browsers and devices.",
            ],
          },
        ],
      },
      {
        heading: "4. Limitations",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "Despite our efforts, some content or features on the Website may not yet be fully accessible. In addition, the Website may link to separate brands, platforms, or third-party websites that we do not control. This Accessibility Policy applies only to this Website, and we are not responsible for the accessibility of any external website or platform.",
          },
        ],
      },
      {
        heading: "5. Feedback and Assistance",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "We welcome your feedback on the accessibility of the Website. If you encounter an accessibility barrier, or if you need assistance accessing any part of the Website, please contact us and we will make reasonable efforts to help and to address the issue.",
          },
        ],
      },
      {
        heading: "6. Contact Us",
        level: 2,
        blocks: [
          {
            type: "p",
            text: "For accessibility questions, feedback, or assistance requests, you may contact us at:",
          },
          ...CONTACT_LINES,
        ],
      },
    ],
  },
];

export function getPolicy(slug: string): Policy | undefined {
  return policies.find((p) => p.slug === slug);
}
