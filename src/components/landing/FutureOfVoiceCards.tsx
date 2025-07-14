// "use client";

// import Image from "next/image";
// import React, { useEffect, useRef, useState } from "react";
// import dubbing from "../../../public/images/bgwave.png";
// import dubbing1 from "../../../public/images/bgwaveright.png";
// import ai from "../../../public/images/R1.png";
// import ai1 from "../../../public/images/R@.png";
// import ai2 from "../../../public/images/R3.png";
// import ai3 from "../../../public/images/R5.png";
// import ai4 from "../../../public/images/R4.png";
// const FutureOfVoiceCards = () => {
//   const [visibleCards, setVisibleCards] = useState([
//     false,
//     false,
//     false,
//     false,
//     false,
//   ]);
//   const cardRefs = [
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//     useRef(null),
//   ];

//   useEffect(() => {
//     const observerOptions = {
//       threshold: 0.3,
//       rootMargin: "-100px 0px -100px 0px",
//     };

//     const observerCallback = (entries: IntersectionObserverEntry[]) => {
//       entries.forEach((entry: IntersectionObserverEntry) => {
//         const cardIndex = cardRefs.findIndex(
//           (ref) => ref.current === entry.target
//         );
//         if (cardIndex !== -1) {
//           setVisibleCards((prev) => {
//             const newVisible = [...prev];
//             newVisible[cardIndex] = entry.isIntersecting;
//             return newVisible;
//           });
//         }
//       });
//     };

//     const observer = new IntersectionObserver(
//       observerCallback,
//       observerOptions
//     );

//     cardRefs.forEach((ref) => {
//       if (ref.current) observer.observe(ref.current);
//     });

//     return () => {
//       cardRefs.forEach((ref) => {
//         if (ref.current) observer.unobserve(ref.current);
//       });
//     };
//   }, []);

// const cardData = [
//   {
//     title: "Core Dubbing",
//     description:
//       "Paste any video link  Dubio dubs it in your voice, with subtitles and lip-sync. No uploads, no editing. Just magic",
//     icon: ai,
//     side: "left",
//   },
//   {
//     title: " Shareability & Branding",
//     description:
//       "Every dubbed video is ready to share with one click   complete with light branding to boost your reach",
//     icon: ai1,
//     side: "right",
//   },
//   {
//     title: "Podcast Dubbing",
//     description:
//       "Dub your episodes into any language same voice, same vibe, global reach.",
//     icon: ai2,
//     side: "left",
//   },
//   {
//     title: "Voice Marketplace",
//     description:
//       "Turn your voice into income  list your cloned voice for others to license, use, and remix across languages and content types",
//     icon: ai4,
//     side: "right",
//   },
//   {
//     title: "Emotional Presets",
//     description:
//       "Add emotion to every word  choose tones like calm, excited, or serious to match your message perfectly",
//     icon: ai3,
//     side: "left",
//   },
// ];

//   return (
//     <div className="max-w-[1920px] mx-auto pt-20 relative">
//       <div className="max-w-[100%] mx-auto relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-white text-5xl font-bold mb-6">
//             The Future of Voice Technology
//           </h2>
//           <p className="text-white/80 text-xl font-normal max-w-3xl mx-auto">
//             Revolutionary AI-powered dubbing that preserves your unique voice
//             across any language
//           </p>
//         </div>

//         {/* Cards Container */}
//         <div className="space-y-32">
//           {cardData.map((card, index) => (
//             <div
//               key={index}
//               ref={cardRefs[index]}
//               className="grid grid-cols-2 gap-16 items-center min-h-[400px] relative px-40"
//             >
// {/* Background Wave Image for each section */}
// <div className="absolute inset-0 -z-10 overflow-hidden">
//   {card.side === "left" ? (
//     <div className="absolute -left-32 top-1/2 -translate-y-1/2">
//       <Image
//         src={dubbing}
//         alt="background wave"
//         width={1200}
//         height={400}
//       />
//     </div>
//   ) : (
//     <div className="absolute -right-32 top-1/2 -translate-y-1/2">
//       <Image
//         src={dubbing1}
//         alt="background wave"
//         width={1200}
//         height={600}
//         className="opacity-30"
//       />
//     </div>
//   )}
// </div>

// {/* Left Side Content */}
// <div
//   className={`${
//     card.side === "left"
//       ? "order-1 text-left"
//       : "order-2 text-right"
//   } transition-all duration-1000 ease-out ${
//     visibleCards[index]
//       ? "transform translate-x-0 opacity-100"
//       : card.side === "left"
//       ? "transform -translate-x-full opacity-0"
//       : "transform translate-x-full opacity-0"
//   } relative z-20`}
// >
//   {/* <div className='bg-gradient-to-br from-[#2A1F3A] to-[#1A1630] p-8 rounded-3xl border border-[#7C3AED]/20 backdrop-blur-sm hover:border-[#7C3AED]/50 transition-all duration-300'> */}
//   <div>
//     {/* <div className='text-6xl mb-6'>{card.icon}</div> */}
//     <div
//       className={`${
//         index == 3 ? "block" : "hidden"
//       } border border-white/80 text-white/80 text-sm font-bold px-4 py-2 rounded-full w-max justify-self-end`}
//     >
//       Futire Phase 🚀
//     </div>
//     <h3 className="text-white text-5xl font-bold mb-4 mt-4">
//       {card.title}
//     </h3>
//     <p className="text-white/70 text-lg leading-relaxed">
//       {card.description}
//     </p>
//   </div>
// </div>

//               {/* Right Side Visual */}
//               <div
//                 className={`${
//                   card.side === "left"
//                     ? "order-2 text-left"
//                     : "order-1 text-right"
//                 } transition-all duration-1000 ease-out delay-200 ${
//                   visibleCards[index]
//                     ? "transform translate-x-0 opacity-100"
//                     : card.side === "left"
//                     ? "transform translate-x-full opacity-0"
//                     : "transform -translate-x-full opacity-0"
//                 } relative z-20`}
//               >
//                 <div className="relative">
//                   {/* Main Visual Container */}
//                   <div
//                     className={`rounded-3xl overflow-hidden  ${
//                       index === cardData.length - 1
//                         ? "p-0"
//                         : "p-2 bg-[#1a1530] border border-[#7C3AED]/30"
//                     }  backdrop-blur-sm min-h-[300px] flex items-center justify-center`}
//                   >
//                     <Image
//                       src={card.icon}
//                       alt="icon"
//                       width={1000}
//                       height={1000}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>

//                   {/* Floating Elements */}
//                   <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#7C3AED]/30 rounded-full animate-ping"></div>
//                   <div
//                     className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#7C3AED]/20 rounded-full animate-ping"
//                     style={{ animationDelay: "1s" }}
//                   ></div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="text-center mt-20">
//           <div
//             className={`transition-all duration-1000 ease-out delay-500 ${
//               visibleCards[2]
//                 ? "transform translate-y-0 opacity-100"
//                 : "transform translate-y-10 opacity-0"
//             }`}
//           >
//             <button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#7C3AED]/25">
//               Experience the Future
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FutureOfVoiceCards;

"use client";


import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ai from "../../../public/images/R1.png";
import ai1 from "../../../public/images/R@.png";
import ai2 from "../../../public/images/R3.png";
import ai3 from "../../../public/images/R5.png";
import ai4 from "../../../public/images/R4.png";
import dubbing from "../../../public/images/bgwave.png";
import dubbing1 from "../../../public/images/bgwaveright.png";

const FutureOfVoiceCards = () => {
  const [visibleCards, setVisibleCards] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const cardRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "-50px 0px -50px 0px",
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        const cardIndex = cardRefs.findIndex(
          (ref) => ref.current === entry.target
        );
        if (cardIndex !== -1) {
          setVisibleCards((prev) => {
            const newVisible = [...prev];
            newVisible[cardIndex] = entry.isIntersecting;
            return newVisible;
          });
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    cardRefs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      cardRefs.forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  const cardData = [
    {
      title: "Core Dubbing",
      description:
        "Paste any video link  Dubio dubs it in your voice, with subtitles and lip-sync. No uploads, no editing. Just magic",
      icon: ai,
      side: "left",
    },
    {
      title: " Shareability & Branding",
      description:
        "Every dubbed video is ready to share with one click   complete with light branding to boost your reach",
      icon: ai1,
      side: "right",
    },
    {
      title: "Podcast Dubbing",
      description:
        "Dub your episodes into any language same voice, same vibe, global reach.",
      icon: ai2,
      side: "left",
    },
    {
      title: "Voice Marketplace",
      description:
        "Turn your voice into income  list your cloned voice for others to license, use, and remix across languages and content types",
      icon: ai4,
      side: "right",
    },
    {
      title: "Emotional Presets",
      description:
        "Add emotion to every word  choose tones like calm, excited, or serious to match your message perfectly",
      icon: ai3,
      side: "left",
    },
  ];

  return (
    <div className="w-full max-w-[1920px] mx-auto pt-10 md:pt-20 relative min-h-screen">
      <div className="w-[85%] mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            The Future of Voice Technology
          </h2>
          <p className="text-white/80 text-base sm:text-lg md:text-xl font-normal max-w-3xl mx-auto px-4">
            Revolutionary AI-powered dubbing that preserves your unique voice
            across any language
          </p>
        </div>

        {/* Cards Container */}
        <div className="space-y-16 md:space-y-24 lg:space-y-32">
          {cardData.map((card, index) => (
            <div key={index} ref={cardRefs[index]} className="relative">
              {/* Background Wave Images - Hidden on mobile for better performance */}
              <div className="absolute inset-0 -z-10 overflow-hidden hidden lg:block">
                {card.side === "left" ? (
                  <div className="absolute -left-32 top-1/2 -translate-y-1/2 opacity-20">
                    <Image
                      src="/placeholder.svg?height=400&width=1200"
                      alt="background wave"
                      width={1200}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                ) : (
                  <div className="absolute -right-32 top-1/2 -translate-y-1/2 opacity-20">
                    <Image
                      src="/placeholder.svg?height=600&width=1200"
                      alt="background wave"
                      width={1200}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[300px] md:min-h-[400px]">
                {/* Content Section */}
                <div
                  className={`${
                    card.side === "left"
                      ? "lg:order-1 text-center lg:text-left"
                      : "lg:order-2 text-center lg:text-right"
                  } transition-all duration-1000 ease-out ${
                    visibleCards[index]
                      ? "transform translate-x-0 opacity-100"
                      : card.side === "left"
                      ? "transform -translate-x-8 lg:-translate-x-full opacity-0"
                      : "transform translate-x-8 lg:translate-x-full opacity-0"
                  } relative z-20`}
                >
                  <div className="space-y-4 md:space-y-6">
                    {/* Future Phase Badge */}
                    {index === 3 && (
                      <div className="inline-flex border border-white/80 text-white/80 text-xs sm:text-sm font-bold px-3 py-1.5 md:px-4 md:py-2 rounded-full">
                        Future Phase 🚀
                      </div>
                    )}

                    <h3 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                      {card.title}
                    </h3>

                    <p className="text-white/70 text-sm sm:text-base  leading-relaxed max-w-full">
                      {card.description}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 -z-10 ">
                  {card.side === "left" ? (
                    <div className="absolute -left-36 top-1/2 -translate-y-1/2">
                      <Image
                        src={dubbing}
                        alt="background wave"
                        width={1200}
                        height={400}
                      />
                    </div>
                  ) : (
                    <div className="absolute -right-36 top-1/2 -translate-y-1/2">
                      <Image
                        src={dubbing1}
                        alt="background wave"
                        width={1200}
                        height={600}
                        className="opacity-30"
                      />
                    </div>
                  )}
                </div>

                {/* Visual Section */}
                <div
                  className={`${
                    card.side === "left" ? "lg:order-2" : "lg:order-1"
                  } transition-all duration-1000 ease-out delay-200 ${
                    visibleCards[index]
                      ? "transform translate-x-0 opacity-100"
                      : card.side === "left"
                      ? "transform translate-x-8 lg:translate-x-full opacity-0"
                      : "transform -translate-x-8 lg:-translate-x-full opacity-0"
                  } relative z-20`}
                >
                  <div className="relative max-w-md mx-auto lg:max-w-none">
                    {/* Main Visual Container */}
                    <div
                      className={`rounded-2xl md:rounded-3xl overflow-hidden ${
                        index === cardData.length - 1
                          ? "p-0"
                          : "p-1.5 md:p-2 bg-[#1a1530] border border-[#7C3AED]/30"
                      } backdrop-blur-sm min-h-[200px] md:min-h-[300px] flex items-center justify-center`}
                    >
                      <Image
                        src={card.icon || "/placeholder.svg"}
                        alt={`${card.title} illustration`}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 w-4 h-4 md:w-8 md:h-8 bg-[#7C3AED]/30 rounded-full animate-ping"></div>
                    <div
                      className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 w-3 h-3 md:w-6 md:h-6 bg-[#7C3AED]/20 rounded-full animate-ping"
                      style={{ animationDelay: "1s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-20 pb-10 md:pb-20">
          <div
            className={`transition-all duration-1000 ease-out delay-500 ${
              visibleCards[2]
                ? "transform translate-y-0 opacity-100"
                : "transform translate-y-10 opacity-0"
            }`}
          >
            <button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-8 py-3 md:px-12 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#7C3AED]/25 w-full sm:w-auto">
              Experience the Future
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureOfVoiceCards;
