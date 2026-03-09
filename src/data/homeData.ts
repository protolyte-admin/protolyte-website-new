import type {
  CaseStudy,
  FooterLinkGroup,
  HeroContent,
  NavItem,
  Offering,
  StatItem,
} from "../types/home";

export const navItems: NavItem[] = [
  { label: "Home", href: "/home" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Case Studies", href: "/casestudies" },
  { label: "About", href: "/about" },
];

export const heroContent: HeroContent = {
  badge: "Now Live: Protolyte AI V2.0",
  title: "AI-Powered Digital Transformation for the",
  highlightedTitle: "Modern Businesses",
  description:
    "Empowering Businesses with futuristic AI solutions, neural-architecture cloud platforms, and automated intelligence modernization.",
  primaryAction: "Start Your Transformation Today",
  imageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCU8F7N_O7f7As-eRqsR9BLAIKtCqpzsvRmxmyReNvF3boAWFvKhs78JUdoerIOq6i-bxFTd4F8xzeMDapai3Zp70ZTQnKo54kV4Q9VxwMJytXSQS8qjgOuy7IBHEGDkfoD1xnGGhy0FU0Ja-1QCbxg56bh72cZYts2CJzRfETVWwCx3ZWTvvPDI83f9luAUJfA_ojxvlfRh93FQ_ZE6EVd4ymcB5yxr-_u0nJiXd9DrzSL8KkxTGvarUqC_qFrwA7-qdWW4zoEC6XR",
  imageAlt: "Abstract neural network visualization with neon blue light nodes",
};

export const trustedBrands: string[] = ["Coming Soon"];

export const offerings: Offering[] = [
  {
    icon: "psychology",
    title: "AI Transformation",
    description:
      "Leverage cutting-edge machine learning models tailored to your business logic and consumer behavior.",
    href: "#",
  },
  {
    icon: "rocket_launch",
    title: "Platform Modernization",
    description:
      "Transition legacy systems into high-performance, containerized cloud-native ecosystems for the modern era.",
    href: "#",
  },
  {
    icon: "cloud_sync",
    title: "Cloud & Data",
    description:
      "Build scalable infrastructure and derive actionable insights from multi-source data architectures with 99.9% uptime.",
    href: "#",
  },
  {
    icon: "precision_manufacturing",
    title: "Automation",
    description:
      "Streamline redundant workflows with intelligent bots and robotic process automation that scales with your needs.",
    href: "#",
  },
];

export const clientStats: StatItem[] = [
  { value: "85%", label: "Reduction in processing time" },
  { value: "2.4x", label: "Increase in ROI within first year" },
  { value: "99.9%", label: "Operational accuracy with AI" },
  { value: "40+", label: "Enterprise systems modernized" },
];

export const clientValuePoints: string[] = [
  "Strategic Alignment with Business Goals",
  "Continuous Security & Compliance Monitoring",
  "Scalable Neural Architectures",
];

export const caseStudies: CaseStudy[] = [
  {
    category: "FINTECH MODERNIZATION",
    title: "Global Bank Automation Scaling",
    description:
      "How we helped a Fortune 500 bank automate 12 million transactions per month using custom NLP engines.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAEXuMuMWIa_uAhueMSS2PM801YgxvtJ1BgHPExbsP_E8-Tadp8isvS0_QN9l6F5bvHplMc0xLQ9ghd-xrooGeYMApW48j8zDPDN97fSKvqXM5ziLDXIccTVr2c6BhZll0LKiF4kHu7EOCvb0JWwwXN9S7k45LCEpeFdVNpmX621eBSdEfVj-wePcZjIiJvmANgHfcFfJJgwfyYqmbsAGz2M2Ir4cKFleQ9smVrbk_QQKJFZM2vXilzzHf8b5x_s8unlzVYc24Fpf3Y",
    imageAlt: "Modern tech office with people working on computers and glowing screens",
  },
  {
    category: "SUPPLY CHAIN AI",
    title: "Logistics Prediction Engine",
    description:
      "Optimizing global logistics routes in real-time resulting in a 22% reduction in fuel costs and delivery times.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAHk75L0snQTvc4lP6tFnDCEJDHjp3Hrtg1_zyGk2DaA7r-IV2WmMHYF8SBGLM6NLVdNade1BIXULW1uTiY0FF5wkDyyxbH1tCo7SrC4m36yldkj8achsc91QMjf72mYRGVCb6x0OVgZzXO4PsS_wJY6ZfhgGwbzysh5WrFd9jd7tPoM02TksitUIcfJdatUBMSs9PxrxERgUUWVWC2oVe6Q1ai8lYydXRruiyxwc-EtNBfHM0KEbTqy8XNE0R_Hhz2uXV3F9Zs9ikF",
    imageAlt: "Futuristic data center with blue glowing racks and fiber optic cables",
  },
];

export const footerGroups: FooterLinkGroup[] = [
  {
    title: "Solutions",
    links: [
      { label: "AI Transformation", href: "#" },
      { label: "Data Engineering", href: "#" },
      { label: "Platform Modernization", href: "#" },
      { label: "Digital Strategy", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "/careers" },
      { label: "Newsroom", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

