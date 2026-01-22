export default function HowToHelp() {
  return (
    <section className="py-16 px-4 sm:py-24 bg-gradient-to-b from-black to-medici-black">
      <div className="max-w-3xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 sm:mb-6">
          How You Can Help
        </h2>

        {/* Key Message */}
        <p className="text-xl sm:text-3xl text-medici-teal font-semibold mb-3 sm:mb-4">
          Know someone at a brand?
        </p>

        <p className="text-base sm:text-xl text-gray-300 mb-10 sm:mb-12 max-w-2xl mx-auto">
          Just send us the intro — we'll handle the pitch.
        </p>

        {/* Contact Info */}
        <div className="mb-8 sm:mb-10 space-y-3">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10 inline-block">
            <p className="text-gray-400 text-sm mb-2">Primary Contact</p>
            <p className="text-white font-semibold text-lg sm:text-xl">
              Dave Rogenmoser
            </p>
            <p className="text-medici-teal text-base sm:text-lg">
              650-656-5551
            </p>
          </div>
        </div>

        {/* Primary CTA Button */}
        <a
          href="sms:6506565551"
          className="inline-block bg-medici-teal hover:bg-medici-teal/90 text-black font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full transition-all duration-300 pulse-glow transform hover:scale-105"
        >
          Text Dave
        </a>

        {/* Secondary Message */}
        <p className="text-gray-400 text-sm sm:text-base mt-8 sm:mt-10">
          Whether it's a warm intro or just a name, every connection helps us build something special for this community.
        </p>
      </div>
    </section>
  );
}
