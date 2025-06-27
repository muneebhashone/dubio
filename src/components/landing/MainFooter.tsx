import React from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AnimatedButton from "../ui/AnimatedButton";
import logo from "../../../public/images/UpdatedLogo.png";
import Image from "next/image";
const MainFooter = () => {
  return (
    <footer
      className="w-full py-12 md:py-16 lg:py-20"
      style={{
        background:
          "linear-gradient(360deg, rgba(32, 24, 101, 0) 30%, #702CFD 100%)",
      }}
    >
      <div className="max-w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:font-extrabold font-bold mb-4 md:mb-6 leading-tight">
            Be among the first 100 creators
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            to try Dubio
          </h2>
          <p className="text-white/80 text-base font-normal mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            Join the waitlist and get exclusive early access when we launch
          </p>

          {/* Email Signup */}
          <div className="relative max-w-sm sm:max-w-md md:max-w-xl md:h-16 lg:h-[70px] mx-auto px-4 sm:px-0">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="w-full bg-[#2A1F3A]/80 border-[#3D2A50] text-white placeholder:text-gray-300 
                       h-12 sm:h-14 md:h-16 lg:h-[70px] 
                       px-4 sm:px-6 pr-0 md:pr-40 lg:pr-48 
                       rounded-full text-sm sm:text-base md:text-lg"
            />
            <Button className="md:absolute right-5 lg:right-4 h-max top-1/2 md:mt-0 mt-4 md:-translate-y-1/2 bg-transparent hover:bg-transparent p-0">
              <AnimatedButton />
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 md:gap-4 pt-8 md:pt-16">
          {/* Left Side - Branding */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Image
              src={logo}
              alt="Dubio Logo"
              width={100}
              height={80}
              className="w-20 sm:w-24 h-auto md:w-28 object-contain"
            />
            <p className="text-white/70 text-sm md:text-base text-center md:text-left">
              The future of creator voice technology
            </p>
          </div>

          {/* Right Side - Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <p className="text-white/70 text-sm md:text-base mb-3 md:mb-4">
              Find us on Social
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              {/* Instagram */}
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full"
                aria-label="Follow us on Instagram"
              >
                <svg
                  width="20"
                  height="20"
                  className="sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full"
                aria-label="Follow us on Facebook"
              >
                <svg
                  width="20"
                  height="20"
                  className="sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Twitter */}
              <a
                href="#"
                className="text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-full"
                aria-label="Follow us on Twitter"
              >
                <svg
                  width="20"
                  height="20"
                  className="sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
      </div>
      <div className="text-center pt-6 md:pt-8 mt-8 md:mt-12 border-t border-white/10">
        <p className="text-white/60 text-sm md:text-base">
          © Copyright 2025 All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default MainFooter;
