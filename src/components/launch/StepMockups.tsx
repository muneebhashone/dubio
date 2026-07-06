"use client";

import Image from "next/image";
export function UploadMockup() {
  return (
    <div className="w-[80%] mx-auto mt-10">
      <Image
        src="/images/howirworks1.png"
        alt="Upload your video"
        width={402}
        height={293}
        sizes="(min-width: 768px) 402px, 80vw"
        loading="lazy"
        className="w-full h-auto object-cover"
        unoptimized
      />
    </div>
  );
}

export function LanguageMockup() {
  return (
    <div className="w-[80%] mx-auto mt-10">
      <Image
        src="/images/howitworks2.png"
        alt="Pick language and voice"
        width={486}
        height={291}
        sizes="(min-width: 768px) 486px, 80vw"
        loading="lazy"
        className="w-full h-auto object-cover"
        unoptimized
      />
    </div>
  );
}

export function OutputMockup() {
  return (
    <div className="w-[80%] mx-auto mt-10">
      <Image
        src="/images/howitworks3.png"
        alt="Download and share"
        width={478}
        height={287}
        sizes="(min-width: 768px) 478px, 80vw"
        loading="lazy"
        className="w-full h-auto object-cover"
        unoptimized
      />
    </div>
  );
}
