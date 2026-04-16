"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";

const paragraphs: Record<string, string> = {
  English:
    "Welcome to the future of content creation. Your voice deserves to be heard by everyone, everywhere. With Dubio, language is no longer a barrier — it's a bridge.",
  Spanish:
    "Bienvenido al futuro de la creación de contenido. Tu voz merece ser escuchada por todos, en todas partes. Con Dubio, el idioma ya no es una barrera, es un puente.",
  French:
    "Bienvenue dans le futur de la création de contenu. Votre voix mérite d'être entendue par tous, partout. Avec Dubio, la langue n'est plus une barrière — c'est un pont.",
  Japanese:
    "コンテンツ制作の未来へようこそ。あなたの声は、世界中のすべての人に届くべきです。Dubioがあれば、言語はもはや壁ではなく、橋になります。",
  Portuguese:
    "Bem-vindo ao futuro da criação de conteúdo. Sua voz merece ser ouvida por todos, em todo lugar. Com o Dubio, o idioma não é mais uma barreira — é uma ponte.",
  Hindi:
    "कंटेंट क्रिएशन के भविष्य में आपका स्वागत है। आपकी आवाज़ हर किसी तक पहुँचने की हकदार है, हर जगह। Dubio के साथ, भाषा अब बाधा नहीं — यह एक पुल है।",
  Arabic:
    "مرحبًا بك في مستقبل صناعة المحتوى. صوتك يستحق أن يُسمع من الجميع، في كل مكان. مع Dubio، لم تعد اللغة حاجزًا — بل أصبحت جسرًا.",
  Korean:
    "콘텐츠 제작의 미래에 오신 것을 환영합니다. 당신의 목소리는 어디서나 모든 사람에게 들릴 자격이 있습니다. Dubio와 함께라면, 언어는 더 이상 장벽이 아니라 다리입니다.",
};

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const languages = Object.keys(paragraphs);

export default function LiveTranslation() {
  const [activeLang, setActiveLang] = useState("English");
  const [displayText, setDisplayText] = useState(paragraphs["English"]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const morphTo = useCallback((targetLang: string) => {
    if (targetLang === activeLang || isTransitioning) return;
    setIsTransitioning(true);
    setActiveLang(targetLang);

    const target = paragraphs[targetLang];
    const maxLen = Math.max(displayText.length, target.length);
    let iteration = 0;
    const totalIterations = 20;

    const interval = setInterval(() => {
      iteration++;
      const progress = iteration / totalIterations;
      let result = "";

      for (let i = 0; i < maxLen; i++) {
        if (i >= target.length) {
          if (progress < 0.5) {
            result += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          }
          continue;
        }

        const charProgress = progress - (i / maxLen) * 0.4;
        if (charProgress > 0.6) {
          result += target[i];
        } else if (charProgress > 0) {
          if (target[i] === " ") {
            result += " ";
          } else {
            result += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          }
        } else {
          if (i < displayText.length) {
            result += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          } else {
            result += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
          }
        }
      }

      setDisplayText(result);

      if (iteration >= totalIterations) {
        clearInterval(interval);
        setDisplayText(target);
        setIsTransitioning(false);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [activeLang, isTransitioning, displayText]);

  return (
    <section id="demo" className="py-24 sm:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#7C3AED] font-[family-name:var(--font-syne)] font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Live Demo
          </p>
          <h2 className="font-[family-name:var(--font-instrument-serif)] text-white text-3xl sm:text-4xl md:text-5xl italic mb-3">
            See Translation in Action
          </h2>
          <p className="text-white/40 text-base max-w-lg mx-auto">
            Click any language below and watch the text (and voice) transform instantly in real time.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => morphTo(lang)}
              disabled={isTransitioning}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 font-[family-name:var(--font-syne)] ${
                activeLang === lang
                  ? "bg-[#7C3AED] text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]"
                  : "bg-white/5 text-white/50 hover:text-white hover:bg-white/10 border border-white/5"
              } disabled:cursor-wait`}
            >
              {lang}
            </button>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative"
        >
          <div className="film-frame p-8 sm:p-12 min-h-[200px] flex items-center justify-center">
            <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#7C3AED]/30 rounded-tl" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#7C3AED]/30 rounded-tr" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#7C3AED]/30 rounded-bl" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#7C3AED]/30 rounded-br" />

            <p
              className={`text-lg sm:text-xl md:text-2xl leading-relaxed text-center font-[family-name:var(--font-instrument-serif)] transition-colors duration-300 ${
                isTransitioning ? "text-[#a78bfa]" : "text-white/80"
              }`}
            >
              {displayText}
            </p>
          </div>

          <div className="flex justify-center mt-4">
            <span className="text-white/20 text-xs uppercase tracking-[0.3em] font-[family-name:var(--font-syne)]">
              {activeLang}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
