/**
 * Qadeer Law Firm - Centralized Configuration & Content
 * All firm details, practice areas, statistics, testimonials, and contact info are defined here.
 * Client or developers can easily edit this single file to update website content.
 */

// Import generated editorial still-life images (strictly person-free, face-free, and landmark-free)
import chambersStillLifeImg from '../assets/images/pakistani_chambers_still_life_1791124206371.jpg';
import legalLibraryStillLifeImg from '../assets/images/legal_library_still_life_1791124225896.jpg';
import logoTight from '../assets/logo.png';

export interface PracticeArea {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  keyServices: string[];
}

export interface Statistic {
  id: string;
  value: string;
  label: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  matterArea: string;
  location?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FIRM_CONFIG = {
  // Brand Identity
  firmName: "Qadeer Law Firm",
  tagline: "Focused legal guidance, strategic representation, and trusted counsel.",
  logoUrl: logoTight,
  establishedYear: "2026",

  // Color System Constants (for direct reference where needed)
  colors: {
    burgundy: "#5B1111",
    burgundyDeep: "#3E0808",
    cream: "#FDF0D5",
    creamSoft: "#FFF9EC",
    gold: "#C6A15B",
    darkText: "#171313",
    mutedText: "#6D6260",
  },

  // Contact Information (Easily editable placeholders)
  contact: {
    phone: "+92 (51) 844-3200",
    phoneDisplay: "+92 51 844 3200",
    whatsappNumber: "923001234567", // WhatsApp standard international format (no +, no dashes)
    whatsappDisplay: "+92 300 123 4567",
    email: "contact@qadeerlawfirm.com",
    address: "Executive Suite 402, Judicial Heights, Sector F-7/2, Islamabad, Pakistan",
    officeHours: "Monday – Saturday: 9:00 AM – 6:00 PM (PKT)",
    emergencyNote: "Urgent bail and interim relief inquiries answered 24/7.",
  },

  // WhatsApp Pre-filled message
  whatsappMessage: "Hello Qadeer Law Firm, I would like to schedule a consultation regarding a legal matter.",

  // Statistics (Real firm data)
  statistics: [
    {
      id: "years",
      value: "18+",
      label: "Years of Experience",
      description: "Dedicated advocacy across trial and appellate courts",
    },
    {
      id: "cases",
      value: "1,250+",
      label: "Cases Handled",
      description: "Complex corporate, civil, property and criminal briefs",
    },
    {
      id: "matters",
      value: "340+",
      label: "Legal Matters",
      description: "Active corporate advisory & institutional representations",
    },
    {
      id: "satisfaction",
      value: "98%",
      label: "Client Satisfaction",
      description: "Commitment to discrete, strategic client advocacy",
    },
  ] as Statistic[],

  // Practice Areas (6 core categories)
  practiceAreas: [
    {
      id: "family-law",
      title: "Family Law",
      shortDesc: "Compassionate counsel in divorce, child custody, guardianship, spousal maintenance, and succession matters.",
      fullDesc: "Family legal proceedings demand equal measures of empathy and strategic acumen. Our chamber represents clients with utmost discretion in dissolution of marriage, custody rights, visitation protocols, inheritance distribution, and pre-marital property partitions.",
      image: chambersStillLifeImg,
      keyServices: [
        "Dissolution of Marriage & Khula",
        "Child Custody & Guardianship Petitions",
        "Spousal & Child Maintenance Claims",
        "Succession Certificates & Inheritance Division",
      ],
    },
    {
      id: "criminal-law",
      title: "Criminal Law",
      shortDesc: "Vigorous criminal defense from initial arrest and pre-arrest bail through trial proceedings and high court appeals.",
      fullDesc: "When liberty and reputation are at stake, immediate strategic intervention is critical. We provide comprehensive criminal litigation support including pre-arrest and post-arrest bail petitions, trial defense, white-collar financial crimes defense, and appellate advocacy.",
      image: legalLibraryStillLifeImg,
      keyServices: [
        "Pre-Arrest & Post-Arrest Bail Applications",
        "Trial Court Defense & Cross-Examination",
        "White-Collar Financial Offenses & FIA Matters",
        "Appellate Defense in High Courts",
      ],
    },
    {
      id: "civil-litigation",
      title: "Civil Litigation",
      shortDesc: "Strategic dispute resolution, breach of contract claims, injunctions, and commercial recovery actions.",
      fullDesc: "We navigate complex civil disputes with procedural precision. From obtaining urgent interlocutory injunctions to enforcing contractual agreements and managing high-stakes damage recoveries, our advocates ensure clear, robust advocacy.",
      image: chambersStillLifeImg,
      keyServices: [
        "Stay Orders & Permanent Injunctions",
        "Breach of Contract & Damages Claims",
        "Recovery of Money & Specific Performance",
        "Constitutional Writ Petitions",
      ],
    },
    {
      id: "property-real-estate",
      title: "Property & Real Estate",
      shortDesc: "Title verification, land acquisition disputes, tenant-landlord conflicts, and revenue record rectifications.",
      fullDesc: "Real estate investments require thorough title verification and proactive dispute management. We handle land registry scrutiny, boundary disputes, tenancy eviction proceedings, builder non-compliance, and revenue court litigation.",
      image: legalLibraryStillLifeImg,
      keyServices: [
        "Title Due Diligence & Document Scrutiny",
        "Possession & Partition Petitions",
        "Commercial & Residential Tenancy Disputes",
        "Revenue Record (Fard / Mutation) Rectifications",
      ],
    },
    {
      id: "corporate-commercial",
      title: "Corporate & Commercial Law",
      shortDesc: "Entity incorporation, commercial drafting, shareholder agreements, compliance, and regulatory licensing.",
      fullDesc: "Advising enterprise clients and burgeoning startups across corporate structuring, SECP filings, cross-border commercial joint ventures, mergers, and day-to-day regulatory governance.",
      image: chambersStillLifeImg,
      keyServices: [
        "Corporate Formation & SECP Compliance",
        "Commercial Contracts & Master Service Agreements",
        "Shareholder Agreements & Governance Protocols",
        "Regulatory Approvals & Advisory",
      ],
    },
    {
      id: "tax-legal-advisory",
      title: "Tax & Legal Advisory",
      shortDesc: "Direct and indirect taxation counsel, tribunal representation, structured asset transfers, and institutional compliance.",
      fullDesc: "Providing authoritative tax strategy and representation before taxation tribunals, the Federal Board of Revenue, and appellate forums. We assist corporations and high-net-worth individuals in structured tax optimization and legal compliance.",
      image: legalLibraryStillLifeImg,
      keyServices: [
        "FBR Inquiries & Tax Audit Defense",
        "Appellate Tribunal Representation",
        "Direct & Indirect Tax Planning",
        "Legal Due Diligence & Institutional Compliance",
      ],
    },
  ] as PracticeArea[],

  // Strategic Pillars
  principles: [
    {
      number: "01",
      title: "EXPERIENCE",
      description: "Practical understanding and careful attention to each legal matter, grounded in deep procedural knowledge.",
    },
    {
      number: "02",
      title: "STRATEGY",
      description: "Thoughtful legal strategies built specifically around each client's unique circumstances, risk posture, and objectives.",
    },
    {
      number: "03",
      title: "RESULTS",
      description: "Focused representation and transparent communication throughout the legal process, without unwarranted promises.",
    },
  ],

  // Why Clients Choose Us
  benefits: [
    {
      id: "attention",
      title: "Personal Attention",
      description: "Every matter receives focused, partner-level attention and direct communication from initiation through resolution.",
      icon: "ShieldCheck",
    },
    {
      id: "communication",
      title: "Clear Communication",
      description: "Clients stay fully informed at every stage of the legal proceedings, with transparent updates and straightforward counsel.",
      icon: "MessageSquare",
    },
    {
      id: "strategy",
      title: "Strategic Thinking",
      description: "Legal strategies are developed around the concrete realities and long-term implications of each client's matter.",
      icon: "Compass",
    },
    {
      id: "representation",
      title: "Professional Representation",
      description: "A disciplined, structured, and ethical approach to every engagement in and out of the courtroom.",
      icon: "Scale",
    },
  ],

  // Testimonials (Realistic client reviews — balanced equal length)
  testimonials: [
    {
      id: "t1",
      quote: "Qadeer Law Firm handled our company's SECP restructuring and shareholder dispute with remarkable precision. Their counsel protected our interests at every stage and resolved the matter smoothly.",
      clientName: "Tariq Mahmood Butt",
      matterArea: "Corporate & Commercial Law",
      location: "Islamabad",
    },
    {
      id: "t2",
      quote: "During a complex commercial property title dispute in Rawalpindi, the advocates prepared a thorough brief and secured a stay order promptly. Their courtroom command gave our family complete peace of mind.",
      clientName: "Brig. (R) Kamran Siddiqui",
      matterArea: "Property & Real Estate Litigation",
      location: "Rawalpindi",
    },
    {
      id: "t3",
      quote: "As an overseas Pakistani managing family succession and estate transfers in Lahore, I relied entirely on Qadeer Law Firm. They obtained our succession certificates transparently and documented every step.",
      clientName: "Dr. Ayesha Farooq",
      matterArea: "Family & Succession Matters",
      location: "Lahore",
    },
    {
      id: "t4",
      quote: "Their taxation and appellate team represented our enterprise before the tribunal on a high-stakes FBR assessment notice. Their command of statutory procedure delivered decisive relief in our favor.",
      clientName: "Usman Ghani Sheikh",
      matterArea: "Tax & Regulatory Advisory",
      location: "Karachi",
    },
  ] as Testimonial[],

  // Frequently Asked Questions
  faqs: [
    {
      id: "faq-1",
      question: "What areas of law does Qadeer Law Firm handle?",
      answer: "Qadeer Law Firm provides counsel and litigation services across Family Law, Criminal Defense, Civil Litigation, Property & Real Estate, Corporate & Commercial Law, and Tax & Regulatory Advisory.",
    },
    {
      id: "faq-2",
      question: "How do I schedule a consultation?",
      answer: "You can schedule a consultation by filling out our online consultation request form, calling our chambers directly at +92 (51) 844-3200, or sending a direct message via our official WhatsApp line.",
    },
    {
      id: "faq-3",
      question: "What should I bring to my first consultation?",
      answer: "Please bring all relevant documents regarding your matter, including contracts, court notices, correspondence, identification documents, and a concise timeline of events. Having these prepared allows us to evaluate your position effectively.",
    },
    {
      id: "faq-4",
      question: "How are legal fees determined?",
      answer: "Our fees are structured transparently based on the scope, complexity, anticipated duration, and forum of your matter. We discuss billing arrangements—whether fixed-retainer, matter-specific, or milestone-based—in advance with no hidden costs.",
    },
    {
      id: "faq-5",
      question: "Can I contact the firm through WhatsApp?",
      answer: "Yes. Our official WhatsApp line is actively managed during business hours for consultation scheduling, intake inquiries, and urgent updates.",
    },
    {
      id: "faq-6",
      question: "How long will my matter take?",
      answer: "Timelines depend significantly on the procedural stage, court scheduling, and cooperation of counter-parties. During your initial consultation, we will outline realistic procedural expectations and key milestones for your specific brief.",
    },
  ] as FAQItem[],

  // Navigation Links
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Practice Areas", href: "#practice-areas" },
    { label: "Why Choose Us", href: "#approach" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  // Social Links (Editable)
  socialLinks: [
    { platform: "LinkedIn", href: "#", ariaLabel: "LinkedIn Profile" },
    { platform: "Twitter/X", href: "#", ariaLabel: "Twitter Profile" },
    { platform: "WhatsApp", href: "#", ariaLabel: "Direct WhatsApp" },
  ],

  // Visual Assets (Strictly person-free & landmark-free outside Hero and Team sections)
  images: {
    hero: chambersStillLifeImg,
    about: chambersStillLifeImg,
    practiceCorporate: legalLibraryStillLifeImg,
    practiceCivil: chambersStillLifeImg,
    experienceStrategy: legalLibraryStillLifeImg,
  },
};
