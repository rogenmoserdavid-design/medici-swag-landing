'use client';

import React from 'react';

interface ConfirmedBrand {
  name: string;
  contribution: string;
  description?: string;
}

const confirmedBrands: ConfirmedBrand[] = [
  {
    name: 'TurtleBox',
    contribution: '$40K',
    description: 'Premium audio equipment'
  },
  {
    name: 'Adidas',
    contribution: '$32.5K',
    description: '$25K + $7.5K worth of gear'
  },
  {
    name: 'Jaxxon',
    contribution: '$15K',
    description: 'Luxury jewelry'
  },
  {
    name: 'Ray-Ban',
    contribution: '$10K',
    description: 'Iconic eyewear'
  },
  {
    name: 'Three Nails',
    contribution: '$5K',
    description: 'Premium apparel'
  },
  {
    name: 'Faith Hope Love',
    contribution: '$4K',
    description: 'Lifestyle brand'
  }
];

const totalSecured = 106.5; // in thousands

export default function Confirmed() {
  return (
    <section className="w-full bg-medici-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Already Confirmed
            </h2>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-medici-teal flex items-center justify-center flex-shrink-0">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-medici-black"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Leading brands are already on board. Join the movement.
          </p>
        </div>

        {/* Total Secured Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-medici-teal/10 border border-medici-teal/30">
            <span className="text-sm sm:text-base text-gray-400 font-medium">Total Secured:</span>
            <span className="text-2xl sm:text-3xl font-bold text-medici-teal">${totalSecured}K</span>
          </div>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 stagger-children">
          {confirmedBrands.map((brand, index) => (
            <div
              key={brand.name}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-700 hover:border-medici-teal/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-medici-teal/20 overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Gradient border glow on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-medici-teal to-ttf-blue rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300 -z-10"></div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-medici-teal/0 group-hover:bg-medici-teal/5 transition-all duration-300"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Brand name */}
                <div className="mb-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {brand.name}
                  </h3>
                  {brand.description && (
                    <p className="text-xs sm:text-sm text-gray-400">
                      {brand.description}
                    </p>
                  )}
                </div>

                {/* Contribution amount */}
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-bold text-medici-teal">
                    {brand.contribution}
                  </span>
                  <span className="text-sm text-gray-500">
                    committed
                  </span>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-4 h-4 bg-medici-teal/20 rotate-45 transform translate-x-2 -translate-y-2"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-12">
          <p className="text-base sm:text-lg text-gray-400">
            Be part of something bigger.{' '}
            <span className="text-medici-teal font-semibold">
              Your brand could be next.
            </span>
          </p>
        </div>
      </div>

      {/* Stagger animation styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stagger-children > * {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
