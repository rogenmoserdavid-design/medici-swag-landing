'use client';

import React from 'react';

export default function Hero() {
  return (
    <section aria-label="Hero section" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#21CE99] rounded-full filter blur-[128px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#005d97] rounded-full filter blur-[128px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center stagger-children">
          {/* Logo placeholders */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 mb-12 md:mb-16">
            {/* Tim Tebow Foundation Logo Placeholder */}
            <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center">
              <span className="text-xs sm:text-sm text-gray-500 font-semibold text-center px-4">TTF<br/>Logo</span>
            </div>

            {/* Medici Logo Placeholder */}
            <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-lg bg-gradient-to-br from-[#21CE99]/20 to-[#005d97]/20 border border-[#21CE99]/50 flex items-center justify-center glow-teal">
              <span className="text-xs sm:text-sm text-[#21CE99] font-semibold text-center px-4">Medici<br/>Logo</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 md:mb-8 tracking-tight leading-[0.9]">
            Medici Day <span className="gradient-text">2026</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light mb-8 md:mb-12 max-w-3xl mx-auto tracking-wide">
            March 6 <span className="text-[#21CE99] mx-2">•</span> 100 Golfers <span className="text-[#21CE99] mx-2">•</span> One Epic Swag Bag
          </p>

          {/* Tagline */}
          <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#21CE99]/10 to-[#005d97]/10 border border-[#21CE99]/30">
            <p className="text-base sm:text-lg text-gray-400">
              Building something special for an incredible cause
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce" aria-label="Scroll down for more information" role="img">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-[#21CE99] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
