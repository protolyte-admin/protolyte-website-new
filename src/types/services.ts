export interface ServicesNavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface ServiceHeroContent {
  badge: string;
  title: string;
  highlightedTitle: string;
  description: string;
  primaryAction: string;
  secondaryAction: string;
}

export interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export interface WhyFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ServicesFooterGroup {
  title: string;
  links: Array<{ label: string; href: string }>;
}
