"use client"

import Image from "next/image";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import step1 from "../../../public/images/section1.png";
import step3 from "../../../public/images/section3.png";

const HowItsWork = () => {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [selectedLang, setSelectedLang] = useState("Spanish");
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const handleDemo = () => {
    if (!youtubeUrl) return;
    setIsProcessing(true);
    setCurrentStep(1);
    
    setTimeout(() => {
      setCurrentStep(2);
      setTimeout(() => {
        setIsProcessing(false);
        setCurrentStep(0);
      }, 2000);
    }, 2000);
  };

  return (
    <div className="max-w-[1920px] mx-auto py-10 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-[85%] mx-auto relative z-10">
        {/* Enhanced Header with Gradient Text */}
        <div className="text-center mb-12">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-blue-200 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Dub Your Content into Any
          </h1>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            Language — In Your Own Voice
          </h1>
          <p className="text-white/80 text-center text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Empower your videos to speak globally. Auto-translate, voice-clone, and subtitle — with emotional tone presets.
          </p>
        </div>

        {/* Enhanced Interactive Demo */}
        <div className="bg-gradient-to-br from-[#2A1F3A]/80 to-[#1A1630]/80 backdrop-blur-xl border-2 border-[#3D9FFE]/50 rounded-3xl p-8 mb-16 max-w-5xl mx-auto relative overflow-hidden shadow-2xl shadow-purple-500/20">
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-blue-500 to-transparent animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10">
            {/* Demo Header */}
            <div className="text-center mb-8">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                Try It Now - Live Demo
              </h3>
              <p className="text-white/70 text-sm md:text-base">
                Paste any YouTube URL and see the magic happen
              </p>
            </div>

            {/* Input Section */}
            <div className="flex flex-col lg:flex-row gap-6 items-center mb-8">
              {/* Enhanced YouTube URL Input */}
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500 group-focus-within:text-red-400 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                  <Input
                    type="text"
                    placeholder="https://youtube.com/watch?v=..."
                    value={youtubeUrl}
                    onChange={(e) => setYoutubeUrl(e.target.value)}
                    className="pl-14 h-16 bg-white/10 border-white/30 hover:border-white/50 focus:border-[#3D9FFE] text-white placeholder:text-gray-400 rounded-2xl text-lg transition-all duration-300 group-focus-within:shadow-lg group-focus-within:shadow-blue-500/20"
                  />
                  {youtubeUrl && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
              </div>

              {/* Enhanced Language Selector */}
              <div className="lg:w-80 w-full">
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                  <select
                    value={selectedLang}
                    onChange={(e) => setSelectedLang(e.target.value)}
                    className="w-full h-16 pl-12 bg-white/10 border border-white/30 hover:border-white/50 text-white rounded-2xl px-4 text-lg appearance-none cursor-pointer transition-all duration-300"
                  >
                    <option value="Spanish" className="bg-[#1A1630] text-white">🇪🇸 English → Spanish</option>
                    <option value="Japanese" className="bg-[#1A1630] text-white">🇯🇵 English → Japanese</option>
                    <option value="French" className="bg-[#1A1630] text-white">🇫🇷 English → French</option>
                    <option value="German" className="bg-[#1A1630] text-white">🇩🇪 English → German</option>
                    <option value="Hindi" className="bg-[#1A1630] text-white">🇮🇳 English → Hindi</option>
                    <option value="Portuguese" className="bg-[#1A1630] text-white">🇧🇷 English → Portuguese</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <div className="text-center">
              <Button 
                onClick={handleDemo}
                disabled={!youtubeUrl || isProcessing}
                className="bg-gradient-to-r from-[#3D9FFE] to-[#7C3AED] hover:from-[#2D8FEE] hover:to-[#6D28D9] disabled:from-gray-600 disabled:to-gray-700 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 disabled:scale-100 disabled:shadow-none"
              >
                {isProcessing ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Processing...
                  </div>
                ) : (
                  "✨ Create Magic Now"
                )}
              </Button>
            </div>

            {/* Enhanced Additional Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 text-gray-400 text-sm">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>Invite 3 friends → Get 5 bonus dubs at launch</span>
              </div>
              <div className="flex gap-4">
                <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                  Share link
                </span>
                <span className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced How It Works Section */}
        <div className="text-center mb-16">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How It Works
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3D9FFE] to-[#7C3AED] mx-auto rounded-full"></div>
        </div>

        {/* Enhanced Steps with Interactive Cards */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
          {/* Step 1 - Enhanced */}
          <div className={`group cursor-pointer transition-all duration-500 ${currentStep === 1 ? 'scale-105' : 'hover:scale-102'}`}>
            <div className="bg-gradient-to-br from-[#2A1F3A]/40 to-[#1A1630]/40 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-8 h-full relative overflow-hidden">
              
              {/* Animated Border */}
              <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/50 to-blue-500/50 rounded-3xl transition-opacity duration-500 ${currentStep === 1 ? 'opacity-100' : 'opacity-0 group-hover:opacity-30'}`}></div>
              <div className="absolute inset-[2px] bg-gradient-to-br from-[#2A1F3A]/90 to-[#1A1630]/90 rounded-3xl"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center h-full">
                <div className="flex flex-col items-center mb-8">
                  <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#7C3AED] to-[#3D9FFE] rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-500 ${currentStep === 1 ? 'animate-pulse scale-110' : 'group-hover:scale-110'}`}>
                    <span className="text-white text-xl md:text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-4 leading-tight">
                    Select Languages to Auto-dub and Generate Subtitles
                  </h3>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">
                    Choose from 40+ languages with AI-powered voice cloning
                  </p>
                </div>
                
                <div className="relative group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={step1}
                    alt="Language Selection Interface"
                    width={450}
                    height={390}
                    className="rounded-2xl shadow-2xl"
                  />
                  {currentStep === 1 && (
                    <div className="absolute inset-0 bg-purple-500/20 rounded-2xl animate-pulse"></div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 - Enhanced */}
          <div className={`group cursor-pointer transition-all duration-500 ${currentStep === 2 ? 'scale-105' : 'hover:scale-102'}`}>
            <div className="bg-gradient-to-br from-[#2A1F3A]/40 to-[#1A1630]/40 backdrop-blur-sm border border-blue-500/30 rounded-3xl p-8 h-full relative overflow-hidden">
              
              {/* Animated Border */}
              <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-3xl transition-opacity duration-500 ${currentStep === 2 ? 'opacity-100' : 'opacity-0 group-hover:opacity-30'}`}></div>
              <div className="absolute inset-[2px] bg-gradient-to-br from-[#2A1F3A]/90 to-[#1A1630]/90 rounded-3xl"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center h-full">
                <div className="flex flex-col items-center mb-8">
                  <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#3D9FFE] to-[#7C3AED] rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-500 ${currentStep === 2 ? 'animate-pulse scale-110' : 'group-hover:scale-110'}`}>
                    <span className="text-white text-xl md:text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-4 leading-tight">
                    Export Video with Subtitle Watermarks
                  </h3>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">
                    Get 1080p MP4 + .srt files optimized for every platform
                  </p>
                </div>
                
                <div className="relative group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={step3}
                    alt="Video Export Interface"
                    width={450}
                    height={390}
                    className="rounded-2xl shadow-2xl"
                  />
                  {currentStep === 2 && (
                    <div className="absolute inset-0 bg-blue-500/20 rounded-2xl animate-pulse"></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
              Ready to transform your content?
            </h3>
            <p className="text-white/70 mb-6">
              Join thousands of creators already using Dubio to reach global audiences
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-green-400 text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Free during beta
              </div>
              <div className="flex items-center gap-2 text-blue-400 text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No watermarks
              </div>
              <div className="flex items-center gap-2 text-purple-400 text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Premium quality
              </div>
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
