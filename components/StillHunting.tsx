export default function StillHunting() {
  const targetBrands = [
    {
      category: 'Apparel',
      brands: ['Peter Millar', 'Rhone', 'Vuori', 'G/Fore']
    },
    {
      category: 'Equipment',
      brands: ['Ping', 'Bettinardi', 'Titleist']
    },
    {
      category: 'Tech',
      brands: ['Oura', 'Whoop', '8 Sleep']
    },
    {
      category: 'Lifestyle',
      brands: ['Yeti', 'Melin', 'Cuts']
    }
  ];

  return (
    <section className="py-16 px-4 sm:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 text-medici-teal"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <circle cx="12" cy="12" r="6" strokeWidth="2" />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
              <line x1="12" y1="2" x2="12" y2="6" strokeWidth="2" />
              <line x1="12" y1="18" x2="12" y2="22" strokeWidth="2" />
              <line x1="2" y1="12" x2="6" y2="12" strokeWidth="2" />
              <line x1="18" y1="12" x2="22" y2="12" strokeWidth="2" />
            </svg>
            <h2 className="text-3xl sm:text-5xl font-bold text-white">
              Still Hunting
            </h2>
          </div>
          <p className="text-gray-400 text-base sm:text-lg">
            These premium brands are on our radar. Know someone? Let's connect.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {targetBrands.map((category, idx) => (
            <div
              key={category.category}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-medici-teal/30 transition-all duration-300 fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Category Header */}
              <h3 className="text-medici-teal font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-medici-teal"></span>
                {category.category}
              </h3>

              {/* Brand Chips */}
              <div className="flex flex-wrap gap-2">
                {category.brands.map((brand) => (
                  <span
                    key={brand}
                    className="px-3 py-1.5 bg-white/10 rounded-full text-white text-sm border border-white/20 hover:border-medici-teal/50 hover:bg-medici-teal/10 transition-all duration-200"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 text-sm sm:text-base">
            Have a connection at one of these brands?{' '}
            <span className="text-medici-teal font-semibold">We'd love to chat.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
