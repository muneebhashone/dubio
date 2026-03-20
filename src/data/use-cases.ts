export interface UseCase {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string; // lucide icon name
  stat: string;
  statLabel: string;
  description: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  painPoints: {
    title: string;
    description: string;
    icon: string;
  }[];
  solutions: {
    title: string;
    description: string;
  }[];
  workflow: {
    step: number;
    title: string;
    description: string;
  }[];
  stats: {
    value: string;
    label: string;
  }[];
  testimonial: {
    quote: string;
    name: string;
    role: string;
  };
}

export const useCases: UseCase[] = [
  {
    slug: "creators",
    title: "Content Creators",
    shortTitle: "Creators",
    icon: "Video",
    stat: "10x",
    statLabel: "Audience Reach",
    description: "Reach global audiences on YouTube, TikTok, and Instagram by dubbing your content into 50+ languages.",
    hero: {
      eyebrow: "For Creators",
      title: "Grow Your Audience 10x",
      subtitle: "Break language barriers and reach viewers worldwide. Dub your YouTube, TikTok, and Instagram content into 50+ languages while keeping your authentic voice.",
    },
    painPoints: [
      { title: "Limited Reach", description: "Your content only reaches audiences who speak your language, leaving billions of potential viewers untapped.", icon: "Globe" },
      { title: "Expensive Translation", description: "Traditional dubbing studios charge thousands per video and take weeks to deliver.", icon: "DollarSign" },
      { title: "Lost Authenticity", description: "Hiring voice actors means losing your unique voice and personality that your audience loves.", icon: "UserX" },
      { title: "Time-Consuming", description: "Managing translations, voice actors, and editing across multiple languages is a full-time job.", icon: "Clock" },
    ],
    solutions: [
      { title: "Voice-Preserved Dubbing", description: "Our AI clones your voice in 50+ languages, keeping your tone, emotion, and personality intact." },
      { title: "One-Click Multi-Language", description: "Upload once, dub into multiple languages simultaneously. Your video is ready in minutes, not weeks." },
      { title: "YouTube Integration", description: "Paste a YouTube URL and get a dubbed version ready to upload to your multi-language channels." },
      { title: "Lip Sync Technology", description: "Viewers see your lips match the dubbed audio for a natural viewing experience." },
    ],
    workflow: [
      { step: 1, title: "Upload Your Video", description: "Upload your video or paste a YouTube URL directly into Dubio." },
      { step: 2, title: "Choose Languages", description: "Select from 50+ target languages for your content." },
      { step: 3, title: "AI Dubs Your Video", description: "Our AI clones your voice, translates, and syncs everything in minutes." },
      { step: 4, title: "Publish Globally", description: "Download your dubbed videos and publish to reach new audiences worldwide." },
    ],
    stats: [
      { value: "10x", label: "Average audience growth" },
      { value: "50+", label: "Languages available" },
      { value: "< 5 min", label: "Average processing time" },
      { value: "95%", label: "Voice similarity score" },
    ],
    testimonial: {
      quote: "Dubio helped me reach viewers in Japan, Brazil, and Germany overnight. My subscriber count has tripled in just two months.",
      name: "Alex Rivera",
      role: "YouTube Creator, 500K subscribers",
    },
  },
  {
    slug: "educators",
    title: "Educators & Course Creators",
    shortTitle: "Educators",
    icon: "GraduationCap",
    stat: "50+",
    statLabel: "Languages",
    description: "Make your courses and educational content accessible to learners worldwide in 50+ languages.",
    hero: {
      eyebrow: "For Educators",
      title: "Teach the World",
      subtitle: "Make your courses accessible to learners in every country. AI dubbing preserves your teaching style while breaking down language barriers.",
    },
    painPoints: [
      { title: "Accessibility Gap", description: "Millions of students can't access your courses because they're only in one language.", icon: "Lock" },
      { title: "Cost Prohibitive", description: "Professional course translation can cost $5,000-$15,000 per language per course.", icon: "DollarSign" },
      { title: "Quality Concerns", description: "Auto-generated subtitles miss nuance, and text-to-speech sounds robotic.", icon: "AlertTriangle" },
      { title: "Update Nightmare", description: "Every course update means re-translating and re-recording in every language.", icon: "RefreshCw" },
    ],
    solutions: [
      { title: "Natural Teaching Voice", description: "Students hear your actual teaching voice, just in their language. Warmth and personality preserved." },
      { title: "Instant Course Localization", description: "Dub entire course catalogs quickly. Update one video, re-dub in minutes." },
      { title: "Auto Subtitles", description: "Accurate subtitles generated automatically in both source and target languages." },
      { title: "Affordable Scaling", description: "Reach 50+ language markets for a fraction of traditional translation costs." },
    ],
    workflow: [
      { step: 1, title: "Upload Course Videos", description: "Batch upload your course content to Dubio." },
      { step: 2, title: "Select Student Languages", description: "Choose the languages your students speak." },
      { step: 3, title: "Review & Approve", description: "Review AI-generated dubs and make any adjustments." },
      { step: 4, title: "Distribute Globally", description: "Publish localized courses to your learning platform." },
    ],
    stats: [
      { value: "50+", label: "Languages supported" },
      { value: "90%", label: "Cost savings vs traditional" },
      { value: "3x", label: "Average enrollment increase" },
      { value: "4.8/5", label: "Student satisfaction" },
    ],
    testimonial: {
      quote: "We translated our entire course catalog into 12 languages in one weekend. Enrollment from non-English markets jumped 300%.",
      name: "Dr. Sarah Chen",
      role: "Online Course Creator, 100K students",
    },
  },
  {
    slug: "podcasters",
    title: "Podcasters",
    shortTitle: "Podcasters",
    icon: "Mic",
    stat: "100%",
    statLabel: "Voice Match",
    description: "Expand your listener base globally with voice-preserved dubbing that maintains your podcast's personality.",
    hero: {
      eyebrow: "For Podcasters",
      title: "Your Voice, Every Language",
      subtitle: "Expand your podcast to global audiences without losing what makes it yours. AI voice cloning preserves your unique sound in 50+ languages.",
    },
    painPoints: [
      { title: "Language Ceiling", description: "Your podcast's growth is capped by your language. Millions of potential listeners never discover your show.", icon: "BarChart" },
      { title: "Voice is Everything", description: "Your voice IS your brand. Traditional dubbing with other voices destroys what makes your podcast unique.", icon: "Mic" },
      { title: "Episode Backlog", description: "You have hundreds of episodes. Manually dubbing each one is impossible.", icon: "Archive" },
      { title: "Release Schedule", description: "Weekly episodes mean weekly translation work. It's unsustainable without automation.", icon: "Calendar" },
    ],
    solutions: [
      { title: "100% Voice Preservation", description: "Your cloned voice sounds like you in every language. Listeners won't know it's AI." },
      { title: "Batch Episode Processing", description: "Dub your entire backlog at once. New episodes are auto-processed on your schedule." },
      { title: "Multi-Speaker Support", description: "Guest interviews? No problem. Each speaker gets their own voice clone." },
      { title: "RSS Feed Integration", description: "Generate separate RSS feeds per language for easy distribution on all platforms." },
    ],
    workflow: [
      { step: 1, title: "Upload Episode", description: "Upload your podcast episode or connect your RSS feed." },
      { step: 2, title: "Choose Languages", description: "Select target languages for your podcast." },
      { step: 3, title: "AI Processing", description: "Voice cloning, translation, and audio mastering happen automatically." },
      { step: 4, title: "Distribute", description: "Download or auto-publish to podcast platforms in every language." },
    ],
    stats: [
      { value: "100%", label: "Voice similarity preserved" },
      { value: "50+", label: "Languages for expansion" },
      { value: "5x", label: "Average listener growth" },
      { value: "< 10 min", label: "Per episode processing" },
    ],
    testimonial: {
      quote: "My true crime podcast went from 50K downloads to 250K after launching in Spanish, Portuguese, and Japanese. Same voice, new audiences.",
      name: "Marcus Thompson",
      role: "Podcast Host, 'Unsolved Files'",
    },
  },
  {
    slug: "businesses",
    title: "Businesses & Enterprises",
    shortTitle: "Businesses",
    icon: "Building2",
    stat: "90%",
    statLabel: "Cost Savings",
    description: "Localize training, marketing, and corporate videos at scale while saving 90% on traditional dubbing costs.",
    hero: {
      eyebrow: "For Businesses",
      title: "Localize at Scale, Save 90%",
      subtitle: "Transform your corporate communications, training, and marketing for global teams and markets without the traditional cost and timeline.",
    },
    painPoints: [
      { title: "Global Communication Gap", description: "Training videos, product demos, and marketing only reach English-speaking employees and customers.", icon: "Globe" },
      { title: "Budget Constraints", description: "Enterprise dubbing projects cost $10,000-$50,000+ per language and take months.", icon: "DollarSign" },
      { title: "Slow Time-to-Market", description: "Product launches are delayed weeks waiting for localized marketing content.", icon: "Clock" },
      { title: "Inconsistent Quality", description: "Different voice actors across languages create inconsistent brand voice.", icon: "AlertTriangle" },
    ],
    solutions: [
      { title: "Consistent Brand Voice", description: "Maintain a unified brand voice across all languages with AI voice cloning." },
      { title: "90% Cost Reduction", description: "Enterprise-grade dubbing at a fraction of traditional studio costs." },
      { title: "Rapid Localization", description: "Go from one language to 50+ in hours, not months. Launch globally on day one." },
      { title: "Enterprise Security", description: "SOC 2 compliant, SSO, team management, and custom data retention policies." },
    ],
    workflow: [
      { step: 1, title: "Upload Content", description: "Upload corporate videos, training, or marketing content." },
      { step: 2, title: "Configure Languages", description: "Select target languages and quality settings for your brand." },
      { step: 3, title: "Review & Approve", description: "Use team workflows to review and approve dubbed content." },
      { step: 4, title: "Deploy Globally", description: "Distribute to teams worldwide via your existing platforms." },
    ],
    stats: [
      { value: "90%", label: "Cost savings vs agencies" },
      { value: "50+", label: "Languages for localization" },
      { value: "24hr", label: "Average turnaround time" },
      { value: "99.9%", label: "Platform uptime SLA" },
    ],
    testimonial: {
      quote: "We localized our entire Q1 training program for 15,000 employees across 12 countries in under a week. The old way would have taken 3 months.",
      name: "Jennifer Park",
      role: "VP of L&D, Fortune 500 Company",
    },
  },
];
