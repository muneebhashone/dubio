"use client";

import { useEffect, useRef, useState } from "react";

const translations = [
  { text: "Your Voice", lang: "English" },
  { text: "Tu Voz", lang: "Spanish" },
  { text: "あなたの声", lang: "Japanese" },
  { text: "Votre Voix", lang: "French" },
  { text: "صوتك", lang: "Arabic" },
  { text: "Sua Voz", lang: "Portuguese" },
  { text: "Deine Stimme", lang: "German" },
  { text: "너의 목소리", lang: "Korean" },
  { text: "La Tua Voce", lang: "Italian" },
  { text: "आपकी आवाज़", lang: "Hindi" },
];

const CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&";

function useScrambleText(texts: string[], interval = 4000) {
  const [display, setDisplay] = useState(texts[0]);
  const [index, setIndex] = useState(0);
  const [isScrambling, setIsScrambling] = useState(false);
  const displayRef = useRef(display);
  displayRef.current = display;

  useEffect(() => {
    const timer = setInterval(() => {
      setIsScrambling(true);
      const nextIndex = (index + 1) % texts.length;
      const target = texts[nextIndex];
      const currentDisplay = displayRef.current;
      const maxLen = Math.max(currentDisplay.length, target.length);
      let iteration = 0;
      const totalIterations = 14;

      const scramble = setInterval(() => {
        iteration++;
        const progress = iteration / totalIterations;
        let result = "";

        for (let i = 0; i < maxLen; i++) {
          if (i < target.length) {
            if (progress > (i / maxLen) * 0.8 + 0.2) {
              result += target[i];
            } else {
              result += CHARS[Math.floor(Math.random() * CHARS.length)];
            }
          }
        }

        setDisplay(result);

        if (iteration >= totalIterations) {
          clearInterval(scramble);
          setDisplay(target);
          setIndex(nextIndex);
          setIsScrambling(false);
        }
      }, 40);
    }, interval);

    return () => clearInterval(timer);
  }, [index, texts, interval]);

  const currentLang =
    translations.find((t) => t.text === display)?.lang ?? "";

  return { display, isScrambling, currentLang };
}

export default function ScrambleHeadline() {
  const { display, isScrambling, currentLang } = useScrambleText(
    translations.map((t) => t.text),
    3500,
  );

  return (
    <div className="mb-6">
      <h1 className="font-[family-name:var(--font-instrument-serif)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-white">
        <span
          className={`inline-block min-w-[200px] ${isScrambling ? "scramble-cursor" : ""}`}
        >
          <span className={isScrambling ? "text-[#F59E0B]" : "text-white"}>
            {display}
          </span>
        </span>
        <span className="text-white/30">.</span>
        <br />
        <span className="italic text-white/80">Every Language.</span>
      </h1>
      <p className="text-[#7C3AED]/60 text-sm mt-3 font-[family-name:var(--font-syne)] h-5">
        {currentLang}
      </p>
    </div>
  );
}
