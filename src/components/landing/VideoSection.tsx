import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AnimatedButton from "../ui/AnimatedButton";
import bgwave from "../../../public/images/bgwave.png";
import bgwaveright from "../../../public/images/bgwaveright.png";

const VideoSection = () => {
  return (
    <div className="max-w-[1920px] mx-auto py-10 sm:py-16 lg:py-20 relative overflow-hidden">
      
      {/* Background Wave Effects - Hidden on mobile for better performance */}
      <div className="absolute inset-0 -z-10 hidden md:block">
        {/* Left Wave */}
        <div className="absolute -left-32 lg:-left-32 xl:-left-20 top-1/2 -translate-y-1/2 opacity-20">
          <Image 
            src={bgwave} 
            alt="background wave" 
            width={1200} 
            height={400}
            className="w-full h-auto max-w-[800px] lg:max-w-[1200px]"
          />
        </div>
        
        {/* Right Wave */}
        <div className="absolute -right-32 lg:-right-32 xl:-right-20 top-1/2 -translate-y-1/2 opacity-15">
          <Image 
            src={bgwaveright} 
            alt="background wave right" 
            width={1200} 
            height={600}
            className="w-full h-auto max-w-[800px] lg:max-w-[1200px]"
          />
        </div>

        {/* Additional floating elements - Only on larger screens */}
        <div className="absolute top-10 left-1/4 w-3 h-3 lg:w-4 lg:h-4 bg-purple-400/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 right-1/4 w-2 h-2 lg:w-3 lg:h-3 bg-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-10 w-1 h-1 lg:w-2 lg:h-2 bg-cyan-400/40 rounded-full animate-ping"></div>
      </div>

             <div className="max-w-[90%] sm:max-w-[85%] mx-auto relative z-10 px-4 sm:px-0">
        <div>
          {/* Teaser Coming Soon Container - Increased Size */}
          <div className="relative w-full max-w-[98%] sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%] mx-auto aspect-auto lg:aspect-auto bg-gradient-to-br from-[#2A1F3A]/90 to-[#1A1630]/90 rounded-2xl sm:rounded-3xl border border-[#7C3AED]/30 overflow-hidden backdrop-blur-sm">
            
            {/* Enhanced Background Gradient Effects - Responsive sizing */}
            <div className="absolute inset-0">
              {/* Multiple layered gradients for depth */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10"></div>
              <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-purple-500/15 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-blue-500/15 rounded-full blur-xl sm:blur-2xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-cyan-400/10 rounded-full blur-lg sm:blur-xl"></div>
              
              {/* Moving gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent animate-pulse"></div>
            </div>

                         
             <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 text-center">
               
               {/* Header Text */}
               <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-8 px-2">
                 See Dubio in Action
               </h2>

               {/* Enhanced Video Placeholder - Increased Size */}
               <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl aspect-video bg-gradient-to-br from-[#0a0724] via-[#1a1530] to-[#0a0724] rounded-xl sm:rounded-2xl border border-[#7C3AED]/40 mb-6 sm:mb-8 flex items-center justify-center overflow-hidden shadow-xl sm:shadow-2xl shadow-purple-500/20">
                 
                 {/* Enhanced Animated waveform background */}
                 <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-purple-900/30 animate-pulse"></div>
                 
                 {/* Additional wave layers */}
                 <div className="absolute inset-0 bg-gradient-to-t from-transparent via-cyan-900/10 to-transparent"></div>
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-900/10 to-transparent"></div>
                 
                                   {/* Floating particles - Responsive sizing */}
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white/40 rounded-full animate-ping"></div>
                  <div className="absolute top-4 sm:top-8 right-4 sm:right-8 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-purple-400/60 rounded-full animate-bounce"></div>
                  <div className="absolute bottom-3 sm:bottom-6 left-4 sm:left-8 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-blue-400/40 rounded-full animate-pulse"></div>
                  
                  {/* Enhanced Play Button - Increased Size */}
                  <div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] rounded-full flex items-center justify-center group hover:from-[#6D28D9] hover:to-[#5B21B6] transition-all duration-300 cursor-pointer shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 hover:scale-110">
                    {/* Play icon - Increased Size */}
                    <div className="w-0 h-0 border-l-[18px] sm:border-l-[24px] md:border-l-[28px] lg:border-l-[32px] border-l-white border-t-[11px] sm:border-t-[14px] md:border-t-[16px] lg:border-t-[18px] border-t-transparent border-b-[11px] sm:border-b-[14px] md:border-b-[16px] lg:border-b-[18px] border-b-transparent ml-0.5 sm:ml-1 group-hover:border-l-[20px] sm:group-hover:border-l-[26px] md:group-hover:border-l-[30px] lg:group-hover:border-l-[34px] transition-all duration-300"></div>
                    
                    {/* Ring effect */}
                    <div className="absolute inset-0 rounded-full border border-white/20 sm:border-2 animate-ping"></div>
                  </div>

                                   {/* Enhanced Teaser Coming Soon Overlay - Responsive */}
                  <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4">
                    <div className="bg-black/60 backdrop-blur-md rounded-lg sm:rounded-xl px-2 sm:px-4 py-2 sm:py-3 border border-purple-500/20">
                      <p className="text-white text-xs sm:text-sm font-medium tracking-wide">Teaser coming soon</p>
                      <div className="w-full h-0.5 sm:h-1 bg-gray-700 rounded-full mt-1 sm:mt-2 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse w-3/4"></div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Animated pulse effects - Responsive */}
                  <div className="absolute inset-0 border border-[#7C3AED]/40 sm:border-2 rounded-xl sm:rounded-2xl animate-pulse"></div>
                  <div className="absolute inset-0 border border-purple-400/20 rounded-xl sm:rounded-2xl animate-ping"></div>
                </div>

               {/* Tagline - Responsive */}
               <p className="text-white/80 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-xs sm:max-w-md px-2">
                 Your voice. Any language. One click.
               </p>

               {/* CTA Button */}
               <div className="flex items-center justify-center mb-4 sm:mb-0">
                 <Button className="bg-transparent hover:bg-transparent p-0 scale-90 sm:scale-100">
                   <AnimatedButton />
                 </Button>
               </div>

               {/* Additional Info - Responsive */}
               <p className="text-white/60 text-xs sm:text-sm mt-4 sm:mt-6 max-w-xs sm:max-w-lg px-2 leading-relaxed">
                 Experience the magic of AI-powered dubbing that preserves your unique voice across any language. Coming soon to revolutionize content creation.
               </p>
            </div>

                         {/* Enhanced Decorative Elements - Responsive */}
             <div className="absolute top-3 sm:top-6 right-3 sm:right-6 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-[#7C3AED] rounded-full animate-ping shadow-md sm:shadow-lg shadow-purple-500/50"></div>
             <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-blue-400 rounded-full animate-pulse shadow-md sm:shadow-lg shadow-blue-500/50"></div>
             <div className="absolute top-1/3 left-4 sm:left-8 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full animate-bounce hidden sm:block"></div>
             <div className="absolute bottom-1/3 right-4 sm:right-8 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-pink-400 rounded-full animate-ping hidden sm:block"></div>
             
             {/* Floating orbs - Hidden on mobile */}
             <div className="absolute top-4 left-1/4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-sm animate-pulse hidden md:block"></div>
             <div className="absolute bottom-4 right-1/4 w-5 h-5 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-400/15 to-cyan-400/15 rounded-full blur-md animate-bounce hidden md:block"></div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
