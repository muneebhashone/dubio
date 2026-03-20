export interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number | null; // null = contact sales
  yearlyPrice: number | null;
  features: string[];
  limits: {
    videosPerMonth: string;
    maxDuration: string;
    languages: string;
    quality: string;
  };
  cta: string;
  ctaHref: string;
  popular?: boolean;
}

export const plans: PricingPlan[] = [
  {
    name: "Free",
    description: "Perfect for trying out AI dubbing",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      "3 videos per month",
      "Up to 5 minutes per video",
      "5 languages",
      "Standard quality",
      "Watermark included",
      "Community support",
    ],
    limits: {
      videosPerMonth: "3",
      maxDuration: "5 min",
      languages: "5",
      quality: "Standard",
    },
    cta: "Start Free",
    ctaHref: "https://app.dubio.ai",
  },
  {
    name: "Pro",
    description: "For creators who want to go global",
    monthlyPrice: 29,
    yearlyPrice: 23,
    features: [
      "50 videos per month",
      "Up to 30 minutes per video",
      "50+ languages",
      "HD quality output",
      "No watermark",
      "Voice cloning",
      "Lip sync",
      "Priority support",
      "API access",
    ],
    limits: {
      videosPerMonth: "50",
      maxDuration: "30 min",
      languages: "50+",
      quality: "HD",
    },
    cta: "Start Free Trial",
    ctaHref: "https://app.dubio.ai",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Custom solutions for teams and businesses",
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      "Unlimited videos",
      "Unlimited duration",
      "50+ languages",
      "4K quality output",
      "No watermark",
      "Advanced voice cloning",
      "Lip sync",
      "Dedicated account manager",
      "Custom API integration",
      "SLA guarantee",
      "SSO & team management",
    ],
    limits: {
      videosPerMonth: "Unlimited",
      maxDuration: "Unlimited",
      languages: "50+",
      quality: "4K",
    },
    cta: "Contact Sales",
    ctaHref: "/launch/contact",
  },
];

export interface ComparisonFeature {
  category: string;
  features: {
    name: string;
    free: string | boolean;
    pro: string | boolean;
    enterprise: string | boolean;
  }[];
}

export const comparisonFeatures: ComparisonFeature[] = [
  {
    category: "Dubbing",
    features: [
      { name: "Videos per month", free: "3", pro: "50", enterprise: "Unlimited" },
      { name: "Max video duration", free: "5 min", pro: "30 min", enterprise: "Unlimited" },
      { name: "Batch processing", free: false, pro: true, enterprise: true },
    ],
  },
  {
    category: "Languages",
    features: [
      { name: "Available languages", free: "5", pro: "50+", enterprise: "50+" },
      { name: "Multi-language per video", free: false, pro: true, enterprise: true },
      { name: "Custom language models", free: false, pro: false, enterprise: true },
    ],
  },
  {
    category: "Quality",
    features: [
      { name: "Output quality", free: "Standard", pro: "HD", enterprise: "4K" },
      { name: "Voice cloning", free: false, pro: true, enterprise: true },
      { name: "Lip sync", free: false, pro: true, enterprise: true },
      { name: "No watermark", free: false, pro: true, enterprise: true },
    ],
  },
  {
    category: "Features",
    features: [
      { name: "Auto subtitles", free: true, pro: true, enterprise: true },
      { name: "YouTube integration", free: false, pro: true, enterprise: true },
      { name: "API access", free: false, pro: true, enterprise: true },
      { name: "Custom integrations", free: false, pro: false, enterprise: true },
    ],
  },
  {
    category: "Support",
    features: [
      { name: "Community support", free: true, pro: true, enterprise: true },
      { name: "Priority support", free: false, pro: true, enterprise: true },
      { name: "Dedicated account manager", free: false, pro: false, enterprise: true },
      { name: "SLA guarantee", free: false, pro: false, enterprise: true },
    ],
  },
];

export const pricingFAQs = [
  {
    question: "Can I switch plans at any time?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, your credit will be applied to future billing cycles.",
  },
  {
    question: "Is there a free trial for Pro?",
    answer: "Yes! The Pro plan comes with a 14-day free trial. No credit card required to start. You'll have full access to all Pro features during the trial period.",
  },
  {
    question: "What happens when I exceed my video limit?",
    answer: "On the Free plan, you'll need to wait until the next month or upgrade to Pro. On the Pro plan, additional videos are billed at $0.50 each.",
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, contact our support team for a full refund.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and wire transfers for Enterprise plans.",
  },
  {
    question: "Is there a discount for annual billing?",
    answer: "Yes! Annual billing saves you approximately 20% compared to monthly billing. The yearly price is shown when you toggle to annual billing above.",
  },
  {
    question: "Can I cancel my subscription?",
    answer: "You can cancel your subscription at any time from your account settings. You'll continue to have access to your plan features until the end of your current billing period.",
  },
  {
    question: "Do you offer discounts for non-profits or educators?",
    answer: "Yes, we offer special pricing for non-profits, educational institutions, and students. Contact our sales team to learn more about our discount programs.",
  },
];
