"use client"

import Image from "next/image";
import React, { useState } from "react";
import step1 from "../../../public/images/language.png";
import step2 from "../../../public/images/bgstep1.png";
import step3 from "../../../public/images/steprenew.png";
import step from "../../../public/images/step1.png";
import play from "../../../public/images/Play.gif";

const HowItsWork = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [videoId, setVideoId] = useState("");

  // Function to extract YouTube video ID from URL
  const extractVideoId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Handle URL input change
  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value;
    setVideoUrl(url);
    
    if (url) {
      const id = extractVideoId(url);
      if (id) {
        setVideoId(id);
      }
    } else {
      setVideoId("");
    }
  };

  // const steps = [
  //   {
  //     number: 1,
  //     title: "Paste Your Video URL",
  //     description: "Paste your YouTube link and dub it now.",
  //     image: step2,
  //     alt: "Paste video URL step",
  //   },
  //   {
  //     number: 2,
  //     title: "Choose Languages",
  //     description:
  //       "Select your target language(s), your cloned voice, and subtitle format.",
  //     image: step1,
  //     alt: "Choose languages step",
  //   },
  //   {
  //     number: 3,
  //     title: "Get Magic Back",
  //     description:
  //       "Get 1080p MP4 + .srt / .vtt files — optimized for every platform.",
  //     image: step3,
  //     alt: "Get results step",
  //   },
  // ];
  return (
    <div className="max-w-[1920px] mx-auto">
      <div className="md:max-w-[85%] px-4 md:px-0 mx-auto">
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center md:mb-16 mb-5">
          How It&apos;s Work
        </h2>

        <div className="grid lg:grid-cols-3 gap-10 md:gap-16 lg:gap-20">
          {/* Step 1 - Functional Video Preview */}
          <div className="flex flex-col items-center justify-between gap-2 lg:gap-5 relative">
            <div className="flex flex-col items-center mb-10">
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-[#7C3AED] rounded-full flex items-center justify-center mx-auto mb-2 lg:mb-6">
                <span className="text-white text-lg lg:text-2xl font-bold">1</span>
              </div>
              <h3 className="text-white lg:text-2xl md:text-xl text-lg text-center font-bold mb-2 lg:mb-4">
                Paste Your Video URL
              </h3>
              <p className="text-white font-normal text-center text-sm md:text-base">
                Paste your YouTube link and dub it now.
              </p>
            </div>

            {/* Video Preview Container */}
            <div className="mx-auto bg-cover relative bg-center rounded-lg bg-no-repeat md:h-[400px] lg:h-[270px] h-[350px] w-[350px]" style={{ backgroundImage: `url(${step2.src})` }}>
              {/* Video Player Area */}
              <div className="bg-gray-900 rounded-lg overflow-hidden mb-4 aspect-video absolute right-0 top-0 lg:-top-10 lg:w-[250px] w-full md:w-full">
               
                  {videoId ? (
                    <img
                      src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                      alt="Video thumbnail"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <Image src={step} alt="Video thumbnail" className="w-full h-full object-cover" />
                      {/* <div className="text-center">
                        <svg className="w-16 h-16 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 002 2v8a2 2 0 002 2z" />
                        </svg>
                        <p className="text-sm">Video preview will appear here</p>
                      </div> */}
                    </div>
                  )}
              
              </div>

              {/* URL Input */}
              <div className="relative">
               
                <input
                  type="url"
                  value={videoUrl}
                  onChange={handleUrlChange}
                  placeholder="Paste video URL"
                  className="lg:w-[320px] w-full h-[50px] pl-10 pr-4 py-3 border bg-[A6A6A6] border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-all duration-200 absolute lg:left-20 lg:-bottom-70 md:-bottom-100 -bottom-85 lg:-translate-x-1/2 lg:-translate-y-1/2"
                />
                 {/* <div className="absolute bottom-0 pl-3 flex items-center pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div> */}
              </div>
            </div>
          </div> 

          {/* Step 2 */}
          <div className="flex flex-col items-center justify-between gap-2 lg:gap-5">
            <div className="flex flex-col items-center mb-5">
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-[#7C3AED] rounded-full flex items-center justify-center mx-auto mb-2 lg:mb-6">
                <span className="text-white text-lg lg:text-2xl font-bold">2</span>
              </div>
              <h3 className="text-white lg:text-2xl md:text-xl text-lg text-center font-bold mb-2 lg:mb-4">
                Choose Languages
              </h3>
              <p className="text-white font-normal text-center text-sm md:text-base">
                Select your target language(s), your cloned voice, and subtitle
                format.
              </p>
            </div>

            <Image
              src={step1}
              alt="step2"
              width={450}
              height={390}
              className=""
            />
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center justify-between gap-2 lg:gap-5">
            <div className="flex flex-col items-center mb-5">
              <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-[#7C3AED] rounded-full flex items-center justify-center mx-auto mb-2 lg:mb-6">
                <span className="text-white text-lg lg:text-2xl font-bold">3</span>
              </div>
              <h3 className="text-white lg:text-2xl md:text-xl text-lg text-center font-bold mb-2 lg:mb-4">
                Get Magic Back
              </h3>
              <p className="text-white font-normal text-center text-sm md:text-base">
                Get 1080p MP4 + .srt / .vtt files — optimized for every
                platform.
              </p>
            </div>
            <div className="relative">
            <Image
              src={step3}
              alt="step3"
              width={450}
              height={390}
              
            />
            <Image src={play} alt="step3" width={200} height={200} className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="w-full py-12 md:py-16 lg:py-20">
    //   <div className="max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
    //     {/* Section Header */}
    //     <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 lg:mb-16">
    //       How It Works
    //     </h2>

    //     {/* Steps Grid */}
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 xl:gap-1">
    //       {steps.map((step, index) => (
    //         <div
    //           key={step.number}
    //           className="flex flex-col items-center justify-between text-center group mx-auto"
    //         >
    //           <div className="flex flex-col items-center  mb-6 md:mb-8 mx-auto">
    //             <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#7C3AED] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-[#6D28D9] transition-colors duration-300">
    //               <span className="text-white text-lg sm:text-xl md:text-2xl font-bold">
    //                 {step.number}
    //               </span>
    //             </div>

    //             <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 leading-tight">
    //               {step.title}
    //             </h3>

    //             <p className="text-white/80 font-normal text-sm sm:text-sm leading-relaxed max-w-xs">
    //               {step.description}
    //             </p>
    //           </div>

    //           <div className="relative w-full max-w-sm  mx-auto group-hover:scale-105 transition-transform duration-300">
    //             <Image
    //               src={step.image || "/placeholder.svg"}
    //                 alt={step.alt}
    //                 width={480}
    //                 height={450}
    //               className="w-full h-auto rounded-lg shadow-lg object-contain"
    //             />

    //           </div>
    //         </div>
    //       ))}
    //     </div>

    //     {/* Bottom CTA or Additional Info */}
    //     <div className="text-center mt-12 md:mt-16 lg:mt-20">
    //       <p className="text-white/60 text-sm md:text-base">
    //         Ready to transform your content? Get started in just 3 simple steps.
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default HowItsWork;
