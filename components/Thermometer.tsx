'use client';

import { useEffect, useState, useRef } from 'react';

export default function Thermometer() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const currentAmount = 91500;
  const goalAmount = 150000;
  const percentage = Math.round((currentAmount / goalAmount) * 100);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const formatCurrency = (amount: number): string => {
    return `$${amount.toLocaleString('en-US')}`;
  };

  return (
    <div ref={sectionRef} className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-zinc-900 rounded-2xl p-6 sm:p-8 border border-zinc-800">
        {/* Header */}
        <div className="flex justify-between items-baseline mb-4 flex-wrap gap-2">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Campaign Progress
          </h3>
          <div className="text-medici-teal text-xl sm:text-2xl font-bold">
            {percentage}% to goal
          </div>
        </div>

        {/* Thermometer Container */}
        <div className="relative mb-4">
          {/* Background bar */}
          <div className="w-full h-8 sm:h-10 bg-zinc-800 rounded-full overflow-hidden">
            {/* Fill bar */}
            <div
              className="h-full bg-gradient-to-r from-medici-teal to-ttf-blue rounded-full glow-teal relative transition-all duration-[2000ms] ease-out"
              style={{ width: isVisible ? `${percentage}%` : '0%' }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer"></div>
            </div>
          </div>
        </div>

        {/* Amount labels */}
        <div className="flex justify-between items-center text-sm sm:text-base">
          <div className="text-gray-400">
            <span className="text-white font-semibold text-lg sm:text-xl">
              {formatCurrency(currentAmount)}
            </span>
            <span className="ml-1">raised</span>
          </div>
          <div className="text-gray-400">
            Goal: <span className="text-white font-semibold">
              {formatCurrency(goalAmount)}
            </span>
          </div>
        </div>

        {/* Remaining amount */}
        <div className="mt-4 pt-4 border-t border-zinc-800 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            <span className="text-medici-teal font-bold text-lg sm:text-xl">
              {formatCurrency(goalAmount - currentAmount)}
            </span>
            {' '}remaining to unlock full swag package
          </p>
        </div>

        {/* Social Proof Ticker */}
        <div className="mt-4 pt-4 border-t border-zinc-800">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <div className="w-2 h-2 rounded-full bg-medici-teal animate-pulse"></div>
            <p><span className="text-medici-teal font-semibold">4 new commitments</span> in the last 48 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}
