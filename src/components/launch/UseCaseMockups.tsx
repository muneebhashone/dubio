"use client";

import { Play, Globe, Subtitles, Eye, Languages, Download, Users } from "lucide-react";

// 1. YouTube Creator Dashboard mockup
export function CreatorDashboardMockup() {
  const videos = [
    { lang: "EN", views: "124K", status: "Published" },
    { lang: "ES", views: "87K", status: "Published" },
    { lang: "JA", views: "53K", status: "Published" },
    { lang: "PT", views: "41K", status: "Processing" },
  ];

  return (
    <div className="aspect-video bg-[#0c0928] p-4 sm:p-5 flex flex-col gap-3">
      {/* Channel header */}
      <div className="flex items-center gap-3 mb-1">
        <div className="w-7 h-7 rounded-full bg-red-500/20 flex items-center justify-center">
          <Play className="w-3 h-3 text-red-400 ml-0.5" />
        </div>
        <div>
          <div className="text-white/40 text-[10px] font-[family-name:var(--font-syne)] font-medium">Creator Studio</div>
          <div className="text-white/20 text-[8px]">Multi-language dashboard</div>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <Eye className="w-3 h-3 text-white/15" />
          <span className="text-white/25 text-[9px] font-[family-name:var(--font-syne)]">305K total views</span>
        </div>
      </div>
      {/* Video rows */}
      <div className="flex-1 flex flex-col gap-1.5">
        {videos.map((v) => (
          <div key={v.lang} className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md bg-white/[0.03] border border-white/5">
            <div className="w-12 h-7 rounded bg-black/40 flex items-center justify-center shrink-0">
              <Play className="w-2.5 h-2.5 text-white/20 ml-0.5" />
            </div>
            <span className={`text-[9px] font-[family-name:var(--font-syne)] font-semibold px-1.5 py-0.5 rounded ${
              v.lang === "EN" ? "bg-white/10 text-white/50" : "bg-[#7C3AED]/15 text-[#a78bfa]"
            }`}>
              {v.lang}
            </span>
            <div className="flex items-center gap-1 ml-auto">
              <Eye className="w-2.5 h-2.5 text-white/15" />
              <span className="text-white/30 text-[9px]">{v.views}</span>
            </div>
            <span className={`text-[8px] px-1.5 py-0.5 rounded-full ${
              v.status === "Published"
                ? "bg-green-500/10 text-green-400/60"
                : "bg-[#F59E0B]/10 text-[#F59E0B]/60"
            }`}>
              {v.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// 2. Subtitled Content mockup
export function SubtitledContentMockup() {
  return (
    <div className="aspect-video bg-[#0c0928] p-4 sm:p-5 flex flex-col items-center justify-center gap-3">
      {/* Video frame with subtitles */}
      <div className="w-full max-w-[280px] aspect-video bg-black/40 rounded-lg relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center">
            <Play className="w-4 h-4 text-white/20 ml-0.5" />
          </div>
        </div>
        {/* Active subtitle */}
        <div className="absolute bottom-2 left-2 right-2 space-y-1">
          <div className="bg-black/70 rounded px-2 py-1 text-center">
            <span className="text-white/70 text-[10px]">Welcome to today&apos;s lesson on design</span>
          </div>
        </div>
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
          <div className="h-full w-[45%] bg-[#7C3AED]/60" />
        </div>
      </div>
      {/* Language subtitle selector */}
      <div className="flex items-center gap-2">
        <Subtitles className="w-3 h-3 text-white/20" />
        {["EN", "ES", "FR", "DE"].map((lang, i) => (
          <button
            key={lang}
            className={`text-[9px] px-2 py-0.5 rounded font-[family-name:var(--font-syne)] ${
              i === 0
                ? "bg-[#7C3AED]/20 text-[#a78bfa] border border-[#7C3AED]/30"
                : "bg-white/5 text-white/25 border border-white/5"
            }`}
          >
            {lang}
          </button>
        ))}
        <span className="text-white/15 text-[8px]">+46</span>
      </div>
    </div>
  );
}

// 3. Multi-language Distribution mockup
export function DistributionMockup() {
  const platforms = [
    { name: "YouTube", icon: "▶", color: "text-red-400/50", bg: "bg-red-500/10", langs: 8 },
    { name: "TikTok", icon: "♪", color: "text-white/40", bg: "bg-white/5", langs: 5 },
    { name: "Instagram", icon: "◎", color: "text-pink-400/50", bg: "bg-pink-500/10", langs: 6 },
  ];

  return (
    <div className="aspect-video bg-[#0c0928] p-4 sm:p-5 flex flex-col gap-3">
      <div className="flex items-center gap-2 mb-1">
        <Globe className="w-3.5 h-3.5 text-white/20" />
        <span className="text-white/30 text-[10px] font-[family-name:var(--font-syne)] uppercase tracking-wider">
          Distribution Overview
        </span>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        {platforms.map((p) => (
          <div key={p.name} className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/[0.03] border border-white/5">
            <div className={`w-7 h-7 rounded-lg ${p.bg} flex items-center justify-center shrink-0`}>
              <span className={`${p.color} text-sm`}>{p.icon}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-white/40 text-[10px] font-[family-name:var(--font-syne)] font-medium">{p.name}</div>
              <div className="flex items-center gap-1 mt-0.5">
                <Languages className="w-2.5 h-2.5 text-[#7C3AED]/40" />
                <span className="text-white/20 text-[8px]">{p.langs} languages</span>
              </div>
            </div>
            <div className="flex gap-1">
              {["EN", "ES", "JA"].map((l) => (
                <span key={l} className="text-[7px] px-1 py-0.5 rounded bg-white/5 text-white/25 font-[family-name:var(--font-syne)]">
                  {l}
                </span>
              ))}
              <span className="text-[7px] px-1 py-0.5 rounded bg-[#7C3AED]/10 text-[#a78bfa]/60 font-[family-name:var(--font-syne)]">
                +{p.langs - 3}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2">
        <Download className="w-3 h-3 text-[#F59E0B]/30" />
        <span className="text-[#F59E0B]/30 text-[9px] font-[family-name:var(--font-syne)]">19 videos distributed across 3 platforms</span>
      </div>
    </div>
  );
}

// 4. Corporate Training mockup
export function CorporateTrainingMockup() {
  const teams = [
    { region: "Americas", langs: ["EN", "ES", "PT"], progress: 100 },
    { region: "Europe", langs: ["DE", "FR", "IT"], progress: 85 },
    { region: "Asia-Pacific", langs: ["JA", "KO", "ZH"], progress: 60 },
  ];

  return (
    <div className="aspect-video bg-[#0c0928] p-4 sm:p-5 flex flex-col gap-3">
      <div className="flex items-center gap-2 mb-1">
        <Users className="w-3.5 h-3.5 text-white/20" />
        <span className="text-white/30 text-[10px] font-[family-name:var(--font-syne)] uppercase tracking-wider">
          Team Training Rollout
        </span>
        <span className="ml-auto text-[#F59E0B]/40 text-[9px] font-[family-name:var(--font-syne)]">Q1 2026</span>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        {teams.map((t) => (
          <div key={t.region} className="px-3 py-2 rounded-lg bg-white/[0.03] border border-white/5">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-white/40 text-[10px] font-[family-name:var(--font-syne)] font-medium">{t.region}</span>
              <div className="flex gap-1">
                {t.langs.map((l) => (
                  <span key={l} className="text-[7px] px-1 py-0.5 rounded bg-[#7C3AED]/10 text-[#a78bfa]/60 font-[family-name:var(--font-syne)]">
                    {l}
                  </span>
                ))}
              </div>
            </div>
            {/* Progress bar */}
            <div className="h-1 rounded-full bg-white/5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#7C3AED]/40 to-[#F59E0B]/40"
                style={{ width: `${t.progress}%` }}
              />
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-white/15 text-[8px]">{t.progress}% rolled out</span>
              <span className={`text-[8px] ${t.progress === 100 ? "text-green-400/50" : "text-[#F59E0B]/40"}`}>
                {t.progress === 100 ? "Complete" : "In progress"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
