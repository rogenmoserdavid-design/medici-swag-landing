'use client';

import { useEffect, useState } from 'react';

export default function StickyProgress() {
  const [isVisible, setIsVisible] = useState(false);

  const currentAmount = 91500;
  const goalAmount = 150000;
  const percentage = Math.round((currentAmount / goalAmount) * 100);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling past hero (approximately one viewport height)
      setIsVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-zinc-800 z-50 safe-area-bottom">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Progress Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-white font-semibold text-sm sm:text-base">
                {percentage}% Funded
              </span>
              <span className="text-gray-400 text-xs sm:text-sm">
                ${currentAmount.toLocaleString()} / ${goalAmount.toLocaleString()}
              </span>
            </div>
            {/* Mini Progress Bar */}
            <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-medici-teal to-ttf-blue rounded-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="#how-to-help"
            className="flex-shrink-0 bg-medici-teal hover:bg-medici-teal/90 text-black font-bold px-6 py-2 sm:px-8 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105 text-sm sm:text-base whitespace-nowrap"
          >
            Help Out
          </a>
        </div>
      </div>
    </div>
  );
}
