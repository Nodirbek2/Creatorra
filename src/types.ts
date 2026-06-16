export interface EarlyAccessSubmission {
  email: string;
  role: 'creator' | 'investor' | 'supporter';
  name?: string;
  telegram?: string;
  message?: string;
}

export interface ProblemItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  statUzb: string;
  creatorQuote: string;
}

export interface SolutionFeature {
  title: string;
  description: string;
  badge: string;
  details: string[];
}

export interface HowItWorksStep {
  step: number;
  title: string;
  actor: 'Creator' | 'System' | 'Student';
  description: string;
  highlightText: string;
}
