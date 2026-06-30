"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Play, Volume2 } from "lucide-react";
import { LAUNCH_IMAGE_QUALITY } from "@/lib/launch-images";

const BEFORE_VIDEO_ID =
  "https://dubio-general.s3.us-east-1.amazonaws.com/public/source-demo_clipped.mp4";
const BEFORE_POSTER = "/images/demoplayer-before.png";
const DEMO_ASSET_BASE =
  "https://dubio-general.s3.us-east-1.amazonaws.com/public/homepage-demo";
const AFTER_VIDEO_ID = `${DEMO_ASSET_BASE}/dubbed-zh.mp4`;

type DemoLanguage = {
  code: string;
  name: string;
  flag: string;
  shortCode: string;
  speech: string;
  poster: string;
  videoSrc: string;
};

const DEMO_LANGUAGES: DemoLanguage[] = [
  {
    code: "zh",
    name: "Chinese",
    flag: "🇨🇳",
    shortCode: "CN",
    speech: "我认为你是做这件事的人",
    poster: "/images/demoplayer-after.png",
    videoSrc: AFTER_VIDEO_ID,
  },
  {
    code: "ja",
    name: "Japanese",
    flag: "🇯🇵",
    shortCode: "JP",
    speech: "あなたがこれをした人だと思います",
    poster: "/images/demoplayer-after.png",
    videoSrc: `${DEMO_ASSET_BASE}/dubbed-ja.mp4`,
  },
  {
    code: "es",
    name: "Spanish",
    flag: "🇪🇸",
    shortCode: "ES",
    speech: "Creo que tú eres quien hizo esto",
    poster: "/images/demoplayer-after.png",
    videoSrc: `${DEMO_ASSET_BASE}/dubbed-es.mp4`,
  },
];

function DemoVideo({
  src,
  poster,
  fallbackSrc = src,
}: {
  src: string;
  poster?: string;
  fallbackSrc?: string;
}) {
  const [resolvedSrc, setResolvedSrc] = useState(src);

  return (
    <video
      key={resolvedSrc}
      src={resolvedSrc}
      poster={poster}
      className="absolute inset-0 w-full h-full object-cover bg-black"
      controls
      playsInline
      preload="none"
      onError={() => {
        if (resolvedSrc !== fallbackSrc) setResolvedSrc(fallbackSrc);
      }}
    />
  );
}

function EchoRings({ className }: { className?: string }) {
  return (
    <>
      {[0, 1.8, 3.6].map((delay, i) => (
        <motion.span
          key={i}
          animate={{ scale: [1, 2.5], opacity: [0.55, 0.4, 0.25, 0.15, 0.5] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "linear", delay }}
          className={`absolute w-20 h-20 rounded-full border border-[#7C3AED]/40 ${className ?? ""}`}
        />
      ))}
    </>
  );
}

export default function ProductDemoPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "100px" });
  const [playingBefore, setPlayingBefore] = useState(false);
  const [playingAfter, setPlayingAfter] = useState(false);
  const [selectedLanguage, setSelectedLanguage] =
    useState<DemoLanguage>(DEMO_LANGUAGES[0]);

  const handleLanguageSelect = (language: DemoLanguage) => {
    setSelectedLanguage(language);
    setPlayingAfter(false);
  };

  return (
    <div
      ref={containerRef}
      className="w-6xl max-w-6xl mx-auto mt-12 sm:mt-16"
    >
      <div className="overflow-hidden p-0">
        <div className="hidden sm:flex items-center gap-2 px-4 py-4 border-b border-white/5 ">
          <div className="w-4.5 h-4.5 rounded-full bg-white/5" />
          <div className="w-4.5 h-4.5 rounded-full bg-white/5" />
          <div className="w-4.5 h-4.5 rounded-full bg-white/5" />
          <div className="flex-1 mx-3 h-10 rounded-md bg-white/5 flex items-center justify-start pl-8">
            <span className="text-white/40 text-[11px] md:text-[18px] font-[family-name:var(--font-syne)]">
              www.dubio.ai
            </span>
          </div>
        </div>

        <div className="px-5 sm:px-8 pt-5 sm:pt-7 pb-6 sm:pb-8">
          <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
            {inView && (
              <motion.div
                animate={{ backgroundPosition: ["100% 0%", "0% 0%"] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="hidden md:block absolute top-[40%] left-0 w-full -translate-y-1/2 z-0 h-[2px]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 8px, transparent 8px, transparent 16px)",
                  backgroundSize: "200% 100%",
                }}
              />
            )}

            <div className="relative z-[1]">
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/20 w-full max-w-[260px] sm:max-w-[340px] md:max-w-[432px] min-w-0 mx-auto md:mx-0 mb-8">
                <Volume2 className="w-5 h-5 text-white/40 shrink-0" />
                <span className="text-[#856cce] text-[11px] sm:text-base truncate sm:whitespace-normal">
                  I think you are the one who did this thing...
                </span>
              </div>
              <div
                className="mt-2 sm:mt-0 relative w-full max-w-[260px] sm:max-w-[340px] md:max-w-[432px] aspect-video bg-[#0c0928] rounded-[4px] overflow-hidden ring-4 sm:ring-8 ring-[#7467B9]/10 shadow-[0_0_30px_-5px_rgba(124,58,237,0.3)] cursor-pointer mx-auto md:mx-0 md:[aspect-ratio:432/297]"
                onClick={() => setPlayingBefore(true)}
              >
                {playingBefore ? (
                  <DemoVideo src={BEFORE_VIDEO_ID} poster={BEFORE_POSTER} />
                ) : (
                  <>
                    <Image
                      src={BEFORE_POSTER}
                      alt="Original English video"
                      fill
                      sizes="(min-width: 768px) 432px, (min-width: 640px) 340px, 260px"
                      quality={LAUNCH_IMAGE_QUALITY}
                      priority
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-11 h-11 rounded-full bg-white/40 flex items-center justify-center">
                        <Play className="w-5 h-5 text-white ml-0.5 fill-white" />
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-4 sm:mt-6 justify-center md:justify-start">
                <span className="px-2 sm:px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-lg text-white/50 font-[family-name:var(--font-syne)] uppercase tracking-wider">
                  Before
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-lg text-white/50 font-[family-name:var(--font-syne)] uppercase tracking-wider">
                  <span className="text-xs sm:text-base leading-none">🇺🇸</span>
                  Original — English
                </span>
              </div>
            </div>

            <div className="hidden md:flex flex-col items-center gap-1 px-2 relative z-[10]">
              <div className="relative flex items-center justify-center -ml-4">
                {inView && <EchoRings />}
                <span className="absolute w-28 h-28 rounded-full bg-[#7C3AED]/15" />
                <Image
                  src="/images/Link_Dubio.png"
                  alt=""
                  width={58}
                  height={40}
                  loading="lazy"
                  className="relative z-10 w-18 h-18 object-contain rounded-xl"
                  unoptimized
                />
              </div>
              <Image
                src="/images/demoplayerarrow.png"
                alt=""
                width={135}
                height={29}
                loading="lazy"
                className="w-40 object-contain ml-1 mt-14"
                unoptimized
              />
            </div>

            <div className="flex md:hidden flex-col items-center gap-1 py-2">
              <div className="relative flex items-center justify-center">
                {inView && (
                  <>
                    {[0, 0.8, 1.6].map((delay, i) => (
                      <motion.span
                        key={i}
                        animate={{ scale: [1, 2.2], opacity: [0.35, 0] }}
                        transition={{
                          duration: 2.4,
                          repeat: Infinity,
                          ease: "linear",
                          delay,
                        }}
                        className="absolute w-16 h-16 rounded-full border border-[#7C3AED]/40"
                      />
                    ))}
                  </>
                )}
                <span className="absolute w-18 h-18 rounded-full bg-[#7C3AED]/15" />
                <Image
                  src="/images/Link_Dubio.png"
                  alt=""
                  width={58}
                  height={40}
                  loading="lazy"
                  className="relative z-10 w-14 h-14 object-contain rounded-lg"
                  unoptimized
                />
              </div>
              <Image
                src="/images/demoplayerarrow.png"
                alt=""
                width={135}
                height={29}
                loading="lazy"
                className="w-24 object-contain"
                unoptimized
              />
            </div>

            <div className="relative z-[1]">
              <div className="mb-4 w-full max-w-[260px] sm:max-w-[340px] md:max-w-[520px] mx-auto md:mx-0 rounded-2xl border border-[#7C3AED]/40 bg-[#7C3AED]/15 p-3 shadow-[0_0_30px_-12px_rgba(124,58,237,0.75)]">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm sm:text-base font-[family-name:var(--font-syne)] text-white/85">
                    Choose dubbed language
                  </p>
                  <p className="text-[10px] sm:text-xs font-[family-name:var(--font-syne)] text-white/45">
                    Preview each output
                  </p>
                </div>
                <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {DEMO_LANGUAGES.map((language) => {
                    const isActive = language.code === selectedLanguage.code;
                    return (
                      <button
                        key={language.code}
                        type="button"
                        onClick={() => handleLanguageSelect(language)}
                        aria-pressed={isActive}
                        className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-2.5 py-1.5 text-xs sm:text-sm font-[family-name:var(--font-syne)] transition ${
                          isActive
                            ? "border-[#F59E0B] bg-[#F59E0B] text-white shadow-[0_0_20px_rgba(245,158,11,0.25)]"
                            : "border-white/12 bg-white/5 text-white/70 hover:border-[#7C3AED]/50 hover:bg-[#7C3AED]/15 hover:text-white"
                        }`}
                      >
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold leading-none">
                          {language.shortCode}
                        </span>
                        <span>{language.flag}</span>
                        <span>{language.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/20 w-full max-w-[260px] sm:max-w-[340px] md:max-w-[432px] min-w-0 mx-auto md:mx-0 mb-8">
                <Volume2 className="w-5 h-5 shrink-0" />
                <span className="text-[11px] sm:text-base truncate sm:whitespace-normal">
                  {selectedLanguage.speech}
                </span>
              </div>
              <div
                className="mt-2 sm:mt-0 relative w-full max-w-[260px] sm:max-w-[340px] md:max-w-[432px] aspect-video bg-[#0c0928] rounded-[4px] overflow-hidden ring-4 sm:ring-8 ring-[#7467B9]/90 shadow-[0_0_60px_10px_rgba(124,58,237,0.35),0_0_120px_40px_rgba(124,58,237,0.15)] cursor-pointer mx-auto md:mx-0 md:[aspect-ratio:432/297]"
                onClick={() => setPlayingAfter(true)}
              >
                {playingAfter ? (
                  <DemoVideo
                    src={selectedLanguage.videoSrc}
                    poster={selectedLanguage.poster}
                    fallbackSrc={AFTER_VIDEO_ID}
                  />
                ) : (
                  <>
                    <Image
                      src={selectedLanguage.poster}
                      alt={`AI dubbed ${selectedLanguage.name} video`}
                      fill
                      sizes="(min-width: 768px) 432px, (min-width: 640px) 340px, 260px"
                      quality={LAUNCH_IMAGE_QUALITY}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-11 h-11 rounded-full bg-white/40 flex items-center justify-center">
                        <Play className="w-5 h-5 text-white ml-0.5 fill-white" />
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-4 sm:mt-6 justify-center md:justify-start">
                <span className="px-2 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-lg text-white/50 font-[family-name:var(--font-syne)] uppercase tracking-wider">
                  After
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 sm:px-4 py-2 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[10px] sm:text-lg text-[#7C3AED]/70 font-[family-name:var(--font-syne)] uppercase tracking-wider">
                  <span className="text-xs sm:text-sm leading-none">
                    {selectedLanguage.flag}
                  </span>
                  Dubbed — {selectedLanguage.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
