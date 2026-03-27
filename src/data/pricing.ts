import { Mic, FileText, Layers, type LucideIcon } from "lucide-react";

export interface PaygService {
  name: string;
  description: string;
  pricePerMinute: string;
  icon: LucideIcon;
  includes: string[];
  popular?: boolean;
}

export interface FreeCredit {
  minutes: number;
  description: string;
  features: string[];
}

export const freeCredit: FreeCredit = {
  minutes: 5,
  description: "Start dubbing for free. No credit card required.",
  features: [
    "Full access to all services",
    "50+ languages available",
    "HD quality output",
    "Voice cloning included",
    "No watermark",
  ],
};

export const services: PaygService[] = [
  {
    name: "Dubbing",
    description: "Translate and dub your video into any language with AI voice cloning.",
    pricePerMinute: "$0.25",
    icon: Mic,
    includes: [
      "Speech recognition",
      "AI translation",
      "Voice cloning",
      "Lip sync",
      "50+ languages",
      "HD/4K output",
    ],
  },
  {
    name: "Transcription",
    description: "Generate accurate transcripts and subtitles from any video or audio.",
    pricePerMinute: "$0.10",
    icon: FileText,
    includes: [
      "Speech recognition",
      "Subtitle generation",
      "50+ languages",
      "SRT/VTT export",
      "Speaker detection",
      "Timestamps",
    ],
  },
  {
    name: "Dubbing + Transcription",
    description: "Full package: dub your video and get synced subtitles in one step.",
    pricePerMinute: "$0.30",
    icon: Layers,
    includes: [
      "Everything in Dubbing",
      "Everything in Transcription",
      "Synced subtitles",
      "Voice cloning",
      "Lip sync",
      "Best value",
    ],
    popular: true,
  },
];

export interface ServiceComparisonFeature {
  name: string;
  dubbing: boolean;
  transcription: boolean;
  bundle: boolean;
}

export const serviceComparisonFeatures: ServiceComparisonFeature[] = [
  { name: "Speech recognition", dubbing: true, transcription: true, bundle: true },
  { name: "AI translation", dubbing: true, transcription: false, bundle: true },
  { name: "Voice cloning", dubbing: true, transcription: false, bundle: true },
  { name: "Lip sync", dubbing: true, transcription: false, bundle: true },
  { name: "Subtitle generation", dubbing: false, transcription: true, bundle: true },
  { name: "SRT/VTT export", dubbing: false, transcription: true, bundle: true },
  { name: "Speaker detection", dubbing: true, transcription: true, bundle: true },
  { name: "50+ languages", dubbing: true, transcription: true, bundle: true },
  { name: "HD/4K output", dubbing: true, transcription: false, bundle: true },
  { name: "YouTube integration", dubbing: true, transcription: true, bundle: true },
  { name: "API access", dubbing: true, transcription: true, bundle: true },
];

export const pricingFAQs = [
  {
    question: "How does pay-as-you-go pricing work?",
    answer:
      "You only pay for what you use. Each service is billed per minute of video processed. There are no monthly fees, no commitments, and no minimum usage requirements.",
  },
  {
    question: "Do I get free minutes to start?",
    answer:
      "Yes! Every new account gets 5 free minutes to try any service. No credit card required. Use them for dubbing, transcription, or both.",
  },
  {
    question: "What counts as a minute?",
    answer:
      "Billing is based on the duration of your input video, rounded up to the nearest minute. A 90-second video counts as 2 minutes. Processing the same video into multiple languages counts separately for each language.",
  },
  {
    question: "Are there volume discounts?",
    answer:
      "Yes, we offer volume discounts for high-usage accounts. If you process more than 100 minutes per month, contact our sales team for custom pricing.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. For enterprise accounts, we also support wire transfers and invoicing.",
  },
  {
    question: "Can I set a spending limit?",
    answer:
      "Yes, you can set a monthly spending cap in your account settings. Once the limit is reached, processing pauses until you increase it or the next billing cycle begins.",
  },
  {
    question: "Do you offer enterprise pricing?",
    answer:
      "Yes, we offer custom enterprise plans with volume discounts, dedicated support, SLA guarantees, SSO, and custom API integrations. Contact our sales team to learn more.",
  },
  {
    question: "Do unused free minutes expire?",
    answer:
      "No, your 5 free minutes never expire. Use them whenever you're ready. Once used, additional minutes are billed at the per-minute rate for each service.",
  },
];
