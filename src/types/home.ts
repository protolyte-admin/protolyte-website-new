export interface NavItem {
  label: string;
  href: string;
}

export interface HeroContent {
  badge: string;
  title: string;
  highlightedTitle: string;
  description: string;
  primaryAction: string;
  imageUrl: string;
  imageAlt: string;
}

export interface Offering {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface CaseStudy {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavItem[];
}
