export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Features" | "Pricing & Billing" | "Technical" | "Privacy & Security";
}

export const faqCategories = ["General", "Features", "Pricing & Billing", "Technical", "Privacy & Security"] as const;

export const faqs: FAQItem[] = [
  // General
  { question: "What is Dubio?", answer: "Dubio is an AI-powered video dubbing platform that lets you translate and dub your videos into 50+ languages while preserving your original voice, tone, and emotion. Our technology uses advanced voice cloning and lip sync to create natural-sounding dubs in minutes.", category: "General" },
  { question: "How does AI dubbing work?", answer: "Our AI pipeline works in four steps: First, we transcribe your original audio using state-of-the-art speech recognition. Then, we translate the transcript into your target language. Next, our voice cloning technology generates speech in the new language using your original voice characteristics. Finally, we apply lip sync to match the dubbed audio with the video.", category: "General" },
  { question: "What types of content can I dub?", answer: "You can dub virtually any video content including YouTube videos, podcasts, online courses, corporate training videos, marketing content, social media clips, documentaries, and more. Our platform supports videos from a few seconds to several hours in length.", category: "General" },
  { question: "How long does dubbing take?", answer: "Most videos are dubbed within 2-5 minutes, depending on length and complexity. Longer videos or those with multiple speakers may take slightly longer. You'll receive a notification when your dubbed video is ready.", category: "General" },
  { question: "Is Dubio available worldwide?", answer: "Yes, Dubio is available globally. You can access our platform from anywhere in the world and dub content into any of our supported languages.", category: "General" },
  { question: "Do I need any technical skills to use Dubio?", answer: "Not at all! Dubio is designed to be incredibly simple. Just upload your video, choose your target language, and we handle everything else. No audio engineering or translation skills required.", category: "General" },

  // Features
  { question: "What languages does Dubio support?", answer: "Dubio currently supports 50+ languages including English, Spanish, French, German, Japanese, Korean, Chinese (Mandarin), Arabic, Hindi, Portuguese, Italian, Russian, Turkish, Dutch, Polish, and many more. We're constantly adding new languages.", category: "Features" },
  { question: "How accurate is the voice cloning?", answer: "Our voice cloning technology achieves over 95% voice similarity, preserving your unique vocal characteristics including pitch, tone, accent, and speaking style. Most listeners cannot distinguish between the original and cloned voice.", category: "Features" },
  { question: "What is lip sync and how does it work?", answer: "Lip sync is our technology that adjusts the speaker's lip movements in the video to match the dubbed audio. This creates a natural viewing experience where the speaker appears to be actually speaking the target language.", category: "Features" },
  { question: "Can Dubio handle multiple speakers?", answer: "Yes! Our multi-speaker detection technology can identify and separate different speakers in your video, applying unique voice cloning to each one for accurate and natural dubbing.", category: "Features" },
  { question: "Does Dubio generate subtitles?", answer: "Yes, Dubio automatically generates subtitles in both the original and target languages. You can download subtitle files (SRT format) or have them burned into the video.", category: "Features" },
  { question: "Can I dub YouTube videos directly?", answer: "Yes! Simply paste a YouTube URL and Dubio will automatically download, process, and dub the video. You can then download the dubbed version or re-upload it to your channel.", category: "Features" },

  // Pricing & Billing
  { question: "Is there a free plan?", answer: "Yes! Our Free plan lets you dub up to 3 videos per month (up to 5 minutes each) in 5 languages. It's perfect for trying out the platform before committing to a paid plan.", category: "Pricing & Billing" },
  { question: "How much does the Pro plan cost?", answer: "The Pro plan is $29/month (or $23/month when billed annually). It includes 50 videos per month, 30-minute max duration, 50+ languages, HD quality, voice cloning, lip sync, and priority support.", category: "Pricing & Billing" },
  { question: "Can I cancel my subscription anytime?", answer: "Absolutely. You can cancel your subscription at any time from your account settings. You'll retain access to all features until the end of your current billing period.", category: "Pricing & Billing" },
  { question: "Do you offer a free trial?", answer: "Yes, the Pro plan comes with a 14-day free trial with full access to all features. No credit card required to start your trial.", category: "Pricing & Billing" },
  { question: "What payment methods are accepted?", answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and wire transfers for Enterprise customers.", category: "Pricing & Billing" },
  { question: "Are there discounts for annual billing?", answer: "Yes! Switching to annual billing saves you approximately 20% compared to monthly billing. That's $23/month instead of $29/month on the Pro plan.", category: "Pricing & Billing" },

  // Technical
  { question: "What video formats are supported?", answer: "Dubio supports all major video formats including MP4, MOV, AVI, MKV, WebM, and FLV. We recommend MP4 for the best results. Maximum file size is 2GB on the Pro plan.", category: "Technical" },
  { question: "What is the maximum video length?", answer: "Free plan supports up to 5-minute videos, Pro plan supports up to 30 minutes, and Enterprise plan has no duration limit.", category: "Technical" },
  { question: "Does Dubio have an API?", answer: "Yes! Pro and Enterprise plans include API access for programmatic dubbing. Our REST API supports all platform features and includes comprehensive documentation with code examples.", category: "Technical" },
  { question: "Can I integrate Dubio with my existing workflow?", answer: "Enterprise customers can integrate Dubio through our API, webhooks, and custom integrations. We support popular platforms and can build custom connectors for your specific needs.", category: "Technical" },
  { question: "What about audio quality?", answer: "Dubio outputs high-quality audio at up to 48kHz sample rate. Pro and Enterprise plans include HD and 4K video quality respectively, ensuring your dubbed content matches or exceeds the original quality.", category: "Technical" },

  // Privacy & Security
  { question: "Is my content secure?", answer: "Yes. All uploads are encrypted in transit (TLS 1.3) and at rest (AES-256). We use AWS infrastructure with SOC 2 compliance. Your videos are processed in isolated environments and never shared with third parties.", category: "Privacy & Security" },
  { question: "Who owns the dubbed content?", answer: "You retain full ownership of all original and dubbed content. Dubio does not claim any rights to your videos or the generated dubs.", category: "Privacy & Security" },
  { question: "How long is my content stored?", answer: "Free plan content is stored for 7 days after processing. Pro plan content is stored for 30 days. Enterprise customers get custom retention policies. You can delete your content at any time.", category: "Privacy & Security" },
  { question: "Does Dubio use my content for training?", answer: "No. We never use your content to train our AI models unless you explicitly opt in to our data improvement program. Your content remains private and confidential.", category: "Privacy & Security" },
  { question: "Is Dubio GDPR compliant?", answer: "Yes, Dubio is fully GDPR compliant. We provide data processing agreements, support data portability, and honor right-to-deletion requests. Our privacy policy details all data handling practices.", category: "Privacy & Security" },
  { question: "Can I request deletion of all my data?", answer: "Yes. You can request complete deletion of your account and all associated data at any time. We process deletion requests within 30 days as required by GDPR and other privacy regulations.", category: "Privacy & Security" },
];
