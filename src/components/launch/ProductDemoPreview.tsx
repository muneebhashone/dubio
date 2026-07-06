"use client";

import { useState, useRef, useEffect } from "react";
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

  useEffect(() => {
    setResolvedSrc(src);
  }, [src]);

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

function AfterVideoPreview({
  language,
  onPlay,
}: {
  language: DemoLanguage;
  onPlay: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.load();
    video.currentTime = 0;
  }, [language.videoSrc]);

  return (
    <div
      className="relative w-full max-w-[260px] sm:max-w-[340px] mx-auto aspect-video bg-[#0c0928] rounded-[4px] overflow-hidden ring-4 sm:ring-8 ring-[#7467B9]/90 shadow-[0_0_60px_10px_rgba(124,58,237,0.35),0_0_120px_40px_rgba(124,58,237,0.15)] cursor-pointer md:max-w-none md:[aspect-ratio:432/297]"
      onClick={onPlay}
    >
      <video
        key={language.code}
        ref={videoRef}
        src={language.videoSrc}
        poster={language.poster}
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover bg-black"
      />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="w-11 h-11 rounded-full bg-white/40 flex items-center justify-center">
          <Play className="w-5 h-5 text-white ml-0.5 fill-white" />
        </div>
      </div>
    </div>
  );
}

function EchoRings() {
  return (
    <>
      {[0, 1.8, 3.6].map((delay, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        >
          <motion.span
            animate={{ scale: [1, 2.5], opacity: [0.55, 0.4, 0.25, 0.15, 0.5] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "linear", delay }}
            style={{ transformOrigin: "center center" }}
            className="block size-16 rounded-full border border-[#F59E0B]/40"
          />
        </div>
      ))}
    </>
  );
}

function CenterConnector({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`relative flex items-center justify-center ${
        compact ? "py-4 w-full" : "size-12"
      }`}
    >
      <div className="relative size-12">
        <EchoRings />
        <span className="absolute left-1/2 top-1/2 size-14 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F59E0B]/15 pointer-events-none" />
        <div className="relative z-10 size-12 rounded-full bg-[#F59E0B] flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.35)]">
          <Play className="size-5 text-black fill-black" />
        </div>
      </div>
    </div>
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

  const frameClass =
    "relative w-full max-w-[260px] sm:max-w-[340px] mx-auto md:max-w-none aspect-video bg-[#0c0928] rounded-[4px] overflow-hidden ring-4 sm:ring-8 ring-[#7467B9]/10 shadow-[0_0_30px_-5px_rgba(124,58,237,0.3)] cursor-pointer md:[aspect-ratio:432/297]";
  const afterFrameClass =
    "relative w-full max-w-[260px] sm:max-w-[340px] mx-auto md:max-w-none aspect-video bg-[#0c0928] rounded-[4px] overflow-hidden ring-4 sm:ring-8 ring-[#7467B9]/90 shadow-[0_0_60px_10px_rgba(124,58,237,0.35),0_0_120px_40px_rgba(124,58,237,0.15)] cursor-pointer md:[aspect-ratio:432/297]";
  const captionClass =
    "flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/20 w-full max-w-[260px] sm:max-w-[340px] mx-auto md:max-w-none min-w-0";

  const beforeVideo = (
    <div className={frameClass} onClick={() => setPlayingBefore(true)}>
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
  );

  const afterVideo = playingAfter ? (
    <div
      className={afterFrameClass}
      onClick={() => setPlayingAfter(true)}
    >
      <DemoVideo
        key={selectedLanguage.code}
        src={selectedLanguage.videoSrc}
        poster={selectedLanguage.poster}
        fallbackSrc={AFTER_VIDEO_ID}
      />
    </div>
  ) : (
    <AfterVideoPreview
      language={selectedLanguage}
      onPlay={() => setPlayingAfter(true)}
    />
  );

  return (
    <div
      ref={containerRef}
      className="w-6xl max-w-6xl mx-auto mt-12 sm:mt-16"
    >
      <div className="overflow-hidden p-0">
        <div className="px-5 sm:px-8 pt-5 sm:pt-7 pb-6 sm:pb-8">
          <div className="mb-6 sm:mb-8 rounded-2xl border border-[#7C3AED]/40 bg-[#7C3AED]/15 p-3 sm:p-4 shadow-[0_0_30px_-12px_rgba(124,58,237,0.75)]">
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

          {/* Desktop: captions / video row / labels */}
          <div className="hidden md:flex md:flex-col gap-4">
            <div className="grid grid-cols-2 gap-x-40 gap-y-4">
              <div className={captionClass}>
                <Volume2 className="w-5 h-5 text-white/40 shrink-0" />
                <span className="text-[#856cce] text-[11px] sm:text-base truncate sm:whitespace-normal">
                  I think you are the one who did this thing...
                </span>
              </div>
              <div className={captionClass}>
                <Volume2 className="w-5 h-5 shrink-0" />
                <span className="text-[11px] sm:text-base truncate sm:whitespace-normal">
                  {selectedLanguage.speech}
                </span>
              </div>
            </div>

            <div className="relative grid grid-cols-2 gap-x-40 gap-y-4 items-center">
              {inView && (
                <motion.div
                  animate={{ backgroundPosition: ["100% 0%", "0% 0%"] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-0 h-[2px] pointer-events-none"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 8px, transparent 8px, transparent 16px)",
                    backgroundSize: "200% 100%",
                  }}
                />
              )}

              <div className="relative z-[1]">{beforeVideo}</div>
              <div className="relative z-[1]">{afterVideo}</div>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <CenterConnector />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-40 gap-y-4">
              <div className="flex flex-wrap items-center gap-4 justify-start">
                <span className="px-2 sm:px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-lg text-white/50 font-[family-name:var(--font-syne)] uppercase tracking-wider">
                  Before
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 sm:px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-lg text-white/50 font-[family-name:var(--font-syne)] uppercase tracking-wider">
                  <span className="text-xs sm:text-base leading-none">🇺🇸</span>
                  Original — English
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-4 justify-start">
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

          {/* Mobile: stacked columns */}
          <div className="md:hidden space-y-4">
            <div className="space-y-4">
              <div className={captionClass}>
                <Volume2 className="w-5 h-5 text-white/40 shrink-0" />
                <span className="text-[#856cce] text-[11px] sm:text-base">
                  I think you are the one who did this thing...
                </span>
              </div>
              {beforeVideo}
              <div className="flex flex-wrap items-center gap-4 justify-center">
                <span className="px-2 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/50 font-[family-name:var(--font-syne)] uppercase tracking-wider">
                  Before
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/50 font-[family-name:var(--font-syne)] uppercase tracking-wider">
                  <span className="text-xs leading-none">🇺🇸</span>
                  Original — English
                </span>
              </div>
            </div>

            <CenterConnector compact />

            <div className="space-y-4">
              <div className={captionClass}>
                <Volume2 className="w-5 h-5 shrink-0" />
                <span className="text-[11px] sm:text-base">
                  {selectedLanguage.speech}
                </span>
              </div>
              {afterVideo}
              <div className="flex flex-wrap items-center gap-4 justify-center">
                <span className="px-2 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/50 font-[family-name:var(--font-syne)] uppercase tracking-wider">
                  After
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-2 rounded-full bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[10px] text-[#7C3AED]/70 font-[family-name:var(--font-syne)] uppercase tracking-wider">
                  <span className="text-xs leading-none">
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
