/**
 * Qadeer Legal Chambers - Centralized Configuration & Content
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
  firmName: "Qadeer Legal Chambers",
  positioning: "ADVOCATES • LITIGATION • LEGAL ADVISORY",
  motto: "LOCAL EXPERTISE. GLOBAL COUNSEL.",
  tagline: "ADVOCATES • LITIGATION • LEGAL ADVISORY — LOCAL EXPERTISE. GLOBAL COUNSEL.",
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
    phone: "+923006140042",
    phoneDisplay: "+92 300 6140042",
    whatsappNumber: "923006140042", // WhatsApp standard international format (no +, no dashes)
    whatsappDisplay: "+92 300 6140042",
    email: "contact@qadeerlegalchambers.com",
    address: "Executive Suite 402, Judicial Heights, Sector F-7/2, Islamabad, Pakistan",
    officeHours: "Monday – Saturday: 9:00 AM – 6:00 PM (PKT)",
    emergencyNote: "Urgent bail and interim relief inquiries answered 24/7.",
  },

  // WhatsApp Pre-filled message
  whatsappMessage: "Hello Qadeer Legal Chambers, I would like to schedule a consultation regarding a legal matter.",

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
      id: "litigation-dispute-resolution",
      title: "Litigation & Dispute Resolution",
      shortDesc: "Strategic courtroom advocacy and representation across civil, commercial, and contentious forums.",
      fullDesc: "We provide decisive representation and strategic counsel in civil, commercial, property, and other contentious matters before trial courts, appellate benches, and specialized tribunals.",
      image: chambersStillLifeImg,
      keyServices: [
        "Civil & Commercial Courtroom Advocacy",
        "Stay Orders & Injunctive Relief",
        "Contractual & Recovery Disputes",
        "Appellate & Constitutional Representation",
      ],
    },
    {
      id: "corporate-commercial",
      title: "Corporate & Commercial",
      shortDesc: "Trusted legal counsel for businesses, commercial agreements, corporate structuring, and disputes.",
      fullDesc: "Advising enterprises, directors, and investors across commercial transactions, joint ventures, shareholder arrangements, regulatory governance, and high-stakes business disputes.",
      image: legalLibraryStillLifeImg,
      keyServices: [
        "Commercial Transactions & Agreements",
        "Corporate Structuring & SECP Governance",
        "Shareholder & Partnership Arrangements",
        "Business & Commercial Dispute Resolution",
      ],
    },
    {
      id: "property-real-estate",
      title: "Property & Real Estate",
      shortDesc: "Comprehensive representation in title verification, ownership, possession, development, and land disputes.",
      fullDesc: "Safeguarding real estate investments through meticulous title investigations, conveyance documentation, development advisory, possession suits, and property dispute litigation.",
      image: chambersStillLifeImg,
      keyServices: [
        "Ownership & Title Due Diligence",
        "Sale Deeds, Transfers & Development",
        "Possession & Partition Proceedings",
        "Property & Tenancy Litigation",
      ],
    },
    {
      id: "family-private-client",
      title: "Family & Private Client",
      shortDesc: "Discreet, dignified counsel in family law, succession certificates, inheritance, and private estate matters.",
      fullDesc: "Sensitive family and private-client mandates handled with utmost confidentiality, covering succession, estate distribution, guardianship, and matrimonial representation.",
      image: legalLibraryStillLifeImg,
      keyServices: [
        "Succession & Letters of Administration",
        "Inheritance & Private Estate Advisory",
        "Guardianship & Custody Representation",
        "Confidential Matrimonial Counsel",
      ],
    },
    {
      id: "international-cross-border",
      title: "International & Cross-Border",
      shortDesc: "On-the-ground Pakistani-law expertise and local representation for overseas clients and foreign law firms.",
      fullDesc: "Bridging international mandates with dependable local execution in Pakistan for overseas Pakistanis, multinational businesses, and instructing foreign counsel.",
      image: chambersStillLifeImg,
      keyServices: [
        "Local Counsel for Foreign Law Firms",
        "Overseas Client Asset & Litigation Support",
        "Cross-Border Commercial Advisory",
        "Coordination with International Counsel",
      ],
    },
    {
      id: "legal-research-advisory",
      title: "Legal Research & Advisory",
      shortDesc: "Authoritative Pakistani-law research, formal legal opinions, drafting, and litigation support.",
      fullDesc: "Delivering rigorous statutory research, expert legal opinions, complex pleading and contract drafting, and evidentiary review for domestic and international mandates.",
      image: legalLibraryStillLifeImg,
      keyServices: [
        "Formal Pakistani-Law Legal Opinions",
        "Statutory & Precedent Research",
        "Pleadings & Commercial Drafting",
        "Document Review & Litigation Support",
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
      quote: "Qadeer Legal Chambers handled our company's SECP restructuring and shareholder dispute with remarkable precision. Their counsel protected our interests at every stage and resolved the matter smoothly.",
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
      quote: "As an overseas Pakistani managing family succession and estate transfers in Lahore, I relied entirely on Qadeer Legal Chambers. They obtained our succession certificates transparently and documented every step.",
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
      question: "What areas of law does Qadeer Legal Chambers handle?",
      answer: "Qadeer Legal Chambers provides counsel, litigation, and legal advisory services across Litigation & Dispute Resolution, Corporate & Commercial Law, Property & Real Estate, Family & Private Client Matters, International & Cross-Border Counsel, and Legal Research & Advisory.",
    },
    {
      id: "faq-2",
      question: "How do I schedule a consultation?",
      answer: "You can schedule a consultation by filling out our online consultation request form, calling our chambers directly at +92 300 6140042, or sending a direct message via our official WhatsApp line.",
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
