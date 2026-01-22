'use client';

import { useEffect, useState } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-03-06T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-gradient-to-br from-medici-teal/10 to-ttf-blue/10 rounded-2xl p-6 sm:p-8 border border-medici-teal/30">
        <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6">
          Event Countdown
        </h3>
        <div className="grid grid-cols-4 gap-3 sm:gap-6">
          <div className="bg-black/50 rounded-lg p-3 sm:p-4 text-center">
            <div className="text-3xl sm:text-5xl font-bold text-medici-teal mb-1">
              {timeLeft.days}
            </div>
            <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">
              Days
            </div>
          </div>
          <div className="bg-black/50 rounded-lg p-3 sm:p-4 text-center">
            <div className="text-3xl sm:text-5xl font-bold text-medici-teal mb-1">
              {timeLeft.hours}
            </div>
            <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">
              Hours
            </div>
          </div>
          <div className="bg-black/50 rounded-lg p-3 sm:p-4 text-center">
            <div className="text-3xl sm:text-5xl font-bold text-medici-teal mb-1">
              {timeLeft.minutes}
            </div>
            <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">
              Minutes
            </div>
          </div>
          <div className="bg-black/50 rounded-lg p-3 sm:p-4 text-center">
            <div className="text-3xl sm:text-5xl font-bold text-medici-teal mb-1">
              {timeLeft.seconds}
            </div>
            <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">
              Seconds
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
