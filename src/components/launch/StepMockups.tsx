"use client";

import { Upload, Play, Download, Globe, Mic } from "lucide-react";

export function UploadMockup() {
  return (
    <div className="aspect-[16/10] bg-[#0c0928] p-6 flex flex-col items-center justify-center gap-4">
      <div className="w-full max-w-[200px] aspect-square border-2 border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center gap-3">
        <Upload className="w-8 h-8 text-white/15" />
        <span className="text-white/20 text-[10px] uppercase tracking-wider font-[family-name:var(--font-syne)]">
          Drop file here
        </span>
      </div>
      <div className="w-full max-w-[260px] h-9 rounded-lg bg-white/5 border border-white/5 flex items-center px-3 gap-2">
        <Play className="w-3.5 h-3.5 text-red-500/40" />
        <span className="text-white/15 text-xs truncate">https://youtube.com/watch?v=...</span>
      </div>
    </div>
  );
}

export function LanguageMockup() {
  const languages = [
    { code: "EN", active: false },
    { code: "ES", active: true },
    { code: "JA", active: false },
    { code: "FR", active: false },
    { code: "AR", active: false },
    { code: "PT", active: false },
    { code: "DE", active: false },
    { code: "KO", active: false },
    { code: "HI", active: false },
  ];
  return (
    <div className="aspect-[16/10] bg-[#0c0928] p-6 flex flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-2 mb-1">
        <Globe className="w-4 h-4 text-white/20" />
        <span className="text-white/25 text-[10px] uppercase tracking-wider font-[family-name:var(--font-syne)]">
          Select target languages
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 w-full max-w-[240px]">
        {languages.map((lang) => (
          <div
            key={lang.code}
            className={`h-8 rounded-lg flex items-center justify-center text-xs font-[family-name:var(--font-syne)] font-medium transition-colors ${
              lang.active
                ? "bg-[#7C3AED]/20 text-[#a78bfa] border border-[#7C3AED]/30"
                : "bg-white/5 text-white/25 border border-white/5"
            }`}
          >
            {lang.code}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 mt-1">
        <Mic className="w-3.5 h-3.5 text-white/20" />
        <span className="text-white/20 text-[10px] font-[family-name:var(--font-syne)]">
          Voice cloning enabled
        </span>
        <div className="w-7 h-4 rounded-full bg-[#7C3AED]/30 relative">
          <div className="absolute right-0.5 top-0.5 w-3 h-3 rounded-full bg-[#7C3AED]" />
        </div>
      </div>
    </div>
  );
}

export function OutputMockup() {
  return (
    <div className="aspect-[16/10] bg-[#0c0928] p-6 flex flex-col items-center justify-center gap-4">
      {/* Mock video player */}
      <div className="w-full max-w-[280px] aspect-video bg-black/40 rounded-lg relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <Play className="w-4 h-4 text-white/40 ml-0.5" />
          </div>
        </div>
        {/* Subtitle bar */}
        <div className="absolute bottom-2 left-3 right-3">
          <div className="bg-black/60 rounded px-2 py-1 text-center">
            <span className="text-white/50 text-[10px]">Hello, welcome to our channel</span>
          </div>
        </div>
        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10">
          <div className="h-full w-[65%] bg-[#7C3AED]/60" />
        </div>
      </div>
      {/* Download button */}
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20">
        <Download className="w-3.5 h-3.5 text-[#F59E0B]/50" />
        <span className="text-[#F59E0B]/50 text-[10px] font-[family-name:var(--font-syne)] uppercase tracking-wider">
          Download ready
        </span>
      </div>
    </div>
  );
}
