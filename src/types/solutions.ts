export interface IndustryItem {
  icon: string;
  label: string;
  active?: boolean;
}

export interface BlueprintMetric {
  key: string;
  value: string;
}

export interface BlueprintCard {
  icon: string;
  title: string;
  description: string;
  status: string;
  statusTone: "success" | "warning";
  metrics: BlueprintMetric[];
  actionLabel: string;
}

export interface SolutionsStat {
  value: string;
  label: string;
  primary?: boolean;
}
