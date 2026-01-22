'use client';

export default function WhatWereBuilding() {
  const categories = [
    {
      icon: '👕',
      title: 'Golf Apparel',
      description: 'Premium performance wear'
    },
    {
      icon: '⛳',
      title: 'Golf Equipment',
      description: 'Top-tier gear & accessories'
    },
    {
      icon: '⌚',
      title: 'Tech & Wearables',
      description: 'Smart devices & gadgets'
    },
    {
      icon: '🎁',
      title: 'Luxury Accessories',
      description: 'Exclusive branded items'
    },
    {
      icon: '❤️',
      title: 'Nutrition & Wellness',
      description: 'Health & recovery products'
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
          What We're Building
        </h2>
        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-400">
          <span className="text-medici-teal font-bold">$1,500</span> worth of premium gear per golfer
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 stagger-children">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-xl p-6 sm:p-8 border border-zinc-800 hover:border-medici-teal transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-medici-teal/20 group min-h-[180px] flex flex-col items-center justify-center text-center"
          >
            {/* Icon */}
            <div className="text-6xl sm:text-5xl lg:text-6xl mb-4 transition-transform duration-300 group-hover:scale-110">
              {category.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-medici-teal transition-colors duration-300">
              {category.title}
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              {category.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom CTA hint */}
      <div className="text-center mt-12 sm:mt-16">
        <p className="text-gray-500 text-sm sm:text-base">
          Every dollar raised goes directly toward maximizing value for our golfers
        </p>
      </div>
    </div>
  );
}
