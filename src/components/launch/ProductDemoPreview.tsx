"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Volume2 } from "lucide-react";

// ── Change these video IDs when you have the real ones ──
const BEFORE_VIDEO_ID = "d3Qq-rkp_to";
const AFTER_VIDEO_ID = "d3Qq-rkp_to";

function YouTubeEmbed({ videoId }: { videoId: string }) {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
      className="absolute inset-0 w-full h-full"
      allow="autoplay; encrypted-media"
      allowFullScreen
      frameBorder="0"
    />
  );
}

export default function ProductDemoPreview() {
  const [playingBefore, setPlayingBefore] = useState(false);
  const [playingAfter, setPlayingAfter] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-6xl max-w-6xl mx-auto mt-12 sm:mt-16"
    >
      <div className="overflow-hidden p-0">
        {/* Browser chrome — hidden on mobile */}
        <div className="hidden sm:flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-white/5" />
          <div className="w-3 h-3 rounded-full bg-white/5" />
          <div className="w-3 h-3 rounded-full bg-white/5" />
          <div className="flex-1 mx-3 h-6 rounded-md bg-white/5 flex items-center justify-center">
            <span className="text-white/25 text-[11px] font-[family-name:var(--font-syne)]">
              www.dubio.ai
            </span>
          </div>
        </div>

        {/* Content area */}
        <div className="px-5 sm:px-8 pt-5 sm:pt-7 pb-6 sm:pb-8">
          {/* Videos + center play button row */}
          <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
            {/* Dashed lines — left and right segments, stopping before center button */}
            <div className="hidden md:block absolute top-[45%] left-0 w-[calc(50%-70px)] -translate-y-1/2 border-t-2 border-dashed border-white/10 z-0" />
            <div className="hidden md:block absolute top-[45%] right-0 w-[calc(53%-70px)] -translate-y-1/2 border-t-2 border-dashed border-white/10 z-0" />
            {/* Before - Original English video */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 1.5,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative z-[1]"
            >
              {/* English speech bubble */}
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/20 w-full max-w-[260px] sm:max-w-[340px] md:max-w-[432px] min-w-0 mx-auto md:mx-0 mb-3">
                <Volume2 className="w-4 h-4 text-white/40 shrink-0" />
                <span className="text-[#856cce] text-[11px] sm:text-sm truncate sm:whitespace-normal">
                  I think you are the one who did this thing...
                </span>
              </div>
              <div
                className="mt-2 sm:mt-0 relative w-full max-w-[260px] sm:max-w-[340px] md:max-w-[432px] aspect-video bg-[#0c0928] rounded-[4px] overflow-hidden ring-4 sm:ring-8 ring-[#7467B9]/10 shadow-[0_0_30px_-5px_rgba(124,58,237,0.3)] cursor-pointer mx-auto md:mx-0 md:[aspect-ratio:432/297]"
                onClick={() => setPlayingBefore(true)}
              >
                {playingBefore ? (
                  <YouTubeEmbed videoId={BEFORE_VIDEO_ID} />
                ) : (
                  <>
                    <img
                      src="/images/demoplayer.png"
                      alt="Original English video"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-11 h-11 rounded-full bg-white/40 flex items-center justify-center">
                        <Play className="w-5 h-5 text-white ml-0.5 fill-white" />
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Bottom labels */}
              <div className="flex flex-wrap items-center gap-2 mt-4 sm:mt-6 justify-center md:justify-start">
                <span className="px-2 sm:px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-[10px] sm:text-[11px] text-white/50 font-[family-name:var(--font-syne)] uppercase tracking-wider">
                  Before
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 sm:px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-[10px] sm:text-[11px] text-white/50 font-[family-name:var(--font-syne)] uppercase tracking-wider">
                  <span className="text-xs sm:text-sm leading-none">🇺🇸</span>
                  Original — English
                </span>
              </div>
            </motion.div>

            {/* Center play button + curved arrow */}
            <div className="hidden md:flex flex-col items-center gap-1 px-2 relative z-[10]">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.8,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <img
                  src="/images/demoplayermidbutton.png"
                  alt="Play"
                  className="w-32 h-32 -ml-2 object-contain"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
              >
                <img
                  src="/images/demoplayerarrow.png"
                  alt="Arrow"
                  className="w-36 object-contain -ml-2"
                />
              </motion.div>
            </div>
            {/* Mobile divider */}
            <div className="flex md:hidden flex-col items-center gap-1 py-2">
              <img
                src="/images/demoplayermidbutton.png"
                alt="Play"
                className="w-20 h-20 object-contain"
              />
              <img
                src="/images/demoplayerarrow.png"
                alt="Arrow"
                className="w-24 object-contain"
              />
            </div>

            {/* After - Dubbed Chinese video */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 1.7,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative z-[1]"
            >
              {/* Chinese speech bubble */}
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/20 w-full max-w-[260px] sm:max-w-[340px] md:max-w-[432px] min-w-0 mx-auto md:mx-0 mb-3">
                <Volume2 className="w-4 h-4 shrink-0" />
                <span className="text-[11px] sm:text-sm truncate sm:whitespace-normal">
                  我认为你是做这件事的人
                </span>
              </div>
              <div
                className="mt-2 sm:mt-0 relative w-full max-w-[260px] sm:max-w-[340px] md:max-w-[432px] aspect-video bg-[#0c0928] rounded-[4px] overflow-hidden ring-4 sm:ring-8 ring-[#7467B9]/90 shadow-[0_0_30px_-5px_rgba(124,58,237,0.3)] cursor-pointer mx-auto md:mx-0 md:[aspect-ratio:432/297]"
                onClick={() => setPlayingAfter(true)}
              >
                {playingAfter ? (
                  <YouTubeEmbed videoId={AFTER_VIDEO_ID} />
                ) : (
                  <>
                    <img
                      src="/images/demoplayer.png"
                      alt="AI dubbed Chinese video"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-11 h-11 rounded-full bg-white/40 flex items-center justify-center">
                        <Play className="w-5 h-5 text-white ml-0.5 fill-white" />
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Bottom labels */}
              <div className="flex flex-wrap items-center gap-2 mt-4 sm:mt-6 justify-center md:justify-start">
                <span className="px-2 sm:px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-[10px] sm:text-[11px] text-white/50 font-[family-name:var(--font-syne)] uppercase tracking-wider">
                  After
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 sm:px-3 py-1 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/20 text-[10px] sm:text-[11px] text-[#7C3AED]/70 font-[family-name:var(--font-syne)] uppercase tracking-wider">
                  <span className="text-xs sm:text-sm leading-none">🇨🇳</span>
                  Dubbed — Chinese
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
