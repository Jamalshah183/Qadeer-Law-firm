/**
 * Qadeer Law Firm - Hero Section Configuration
 * Centralized, independently replaceable configuration for all hero imagery,
 * branding, navigation, copy, and visual parameters.
 */

import heroLeftBg from '../assets/reference/hero_bg_left.avif';
import heroRightBg from '../assets/reference/hero_bg_scales.avif';
import heroLawyerCutout from '../assets/images/hero_statue_justice_cutout.png';
import logoTight from '../assets/logo.png';

export interface HeroConfig {
  // 1. Separate Image Layers (Independently controllable & replaceable)
  leftBackground: string;
  rightBackground: string;
  lawyerImage: string;
  logo: string;

  // 2. Color System
  colors: {
    primaryBurgundy: string;
    deepBurgundy: string;
    primaryCream: string;
    softCream: string;
    warmGold: string;
    darkText: string;
    mutedText: string;
    leftOverlayOpacity: number; // 0.80 - 0.90
  };

  // 3. Editorial Copy
  eyebrow: {
    text: string;
    icon: string;
  };
  headline: {
    line1: string;
    line2: string;
    line3: string;
  };
  supportingText: string;

  // 4. CTAs
  primaryCTA: {
    label: string;
    href: string;
  };
  secondaryCTA: {
    label: string;
    action: string;
  };

  // 5. Navigation Links (Top-Right on Cream side)
  navigation: Array<{
    label: string;
    href: string;
  }>;
}

export const heroConfig: HeroConfig = {
  // Two completely separate background environments + foreground lawyer cutout
  leftBackground: heroLeftBg,
  rightBackground: heroRightBg,
  lawyerImage: heroLawyerCutout,
  logo: "https://i.ibb.co/q33k22Wt/Golden-QLC-Scales-Emblem.png",

  // Brand Palette
  colors: {
    primaryBurgundy: "#5B1111",
    deepBurgundy: "#3E0808",
    primaryCream: "#FDF0D5",
    softCream: "#FFF9EC",
    warmGold: "#C6A15B",
    darkText: "#171313",
    mutedText: "#6D6260",
    leftOverlayOpacity: 0.88, // 88% burgundy overlay
  },

  // Eyebrow badge
  eyebrow: {
    text: "LOCAL EXPERTISE. GLOBAL COUNSEL.",
    icon: "Scale",
  },

  // Large editorial headline
  headline: {
    line1: "Your Trusted",
    line2: "Partner For Legal",
    line3: "Solutions",
  },

  // Supporting copy
  supportingText:
    "Experienced legal guidance for individuals and businesses, focused on clear advice, strategic representation, and practical solutions.",

  // CTAs
  primaryCTA: {
    label: "OUR PRACTICE AREAS",
    href: "#practice-areas",
  },
  secondaryCTA: {
    label: "INTERNATIONAL COUNSEL",
    action: "#international-counsel",
  },

  // Navigation (top-right)
  navigation: [
    { label: "About", href: "#about" },
    { label: "Practice Areas", href: "#practice-areas" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Insights", href: "#insights" },
    { label: "Contact", href: "#contact" },
  ],
};
