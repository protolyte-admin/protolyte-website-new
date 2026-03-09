import type { BlueprintCard, IndustryItem, SolutionsStat } from "../types/solutions";

export const industries: IndustryItem[] = [
  { icon: "account_balance", label: "Financial Services", active: true },
  { icon: "medical_services", label: "Healthcare" },
  { icon: "shopping_bag", label: "Retail & Commerce" },
  { icon: "factory", label: "Manufacturing" },
  { icon: "local_shipping", label: "Logistics" },
  { icon: "bolt", label: "Energy & Utilities" },
];

export const blueprintCards: BlueprintCard[] = [
  {
    icon: "analytics",
    title: "Autonomous Risk Profiling",
    description:
      "A multi-agent AI system that ingests real-time transaction data and market volatility feeds to generate dynamic risk scores for institutional portfolios.",
    status: "Production Ready",
    statusTone: "success",
    metrics: [
      { key: "LATENCY", value: "< 45ms end-to-end" },
      { key: "ACCURACY", value: "99.92% (Certified)" },
      { key: "COMPLIANCE", value: "SEC / FINRA Ready" },
    ],
    actionLabel: "View Technical Diagram",
  },
  {
    icon: "shield_person",
    title: "Automated Fraud Detection",
    description:
      "AI-driven detection layer that identifies anomalous patterns in credit cycles. Built to replace legacy rule-based systems with flexible neural networks.",
    status: "Early Access",
    statusTone: "warning",
    metrics: [
      { key: "THROUGHPUT", value: "1.2M transactions / min" },
      { key: "FPR", value: "< 0.005% False Positives" },
      { key: "MODULARITY", value: "Hot-swappable models" },
    ],
    actionLabel: "Request Early Access",
  },
];

export const solutionsStats: SolutionsStat[] = [
  { value: "500+", label: "Architectures", primary: true },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "40ms", label: "Avg Latency" },
  { value: "$2.4B", label: "Volume Secured" },
];
