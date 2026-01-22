'use client';

export default function HowToHelp() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Medici Day 2026 - Swag Partnership',
          text: 'Help us create an unforgettable experience for 100 influential golfers and support the Tim Tebow Foundation!',
          url: window.location.href,
        });
      } catch (err) {
        // User cancelled or share failed
        console.log('Share cancelled');
      }
    }
  };

  return (
    <section id="how-to-help" className="py-16 px-4 sm:py-24 bg-gradient-to-b from-black to-medici-black">
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
          className="inline-block bg-medici-teal hover:bg-medici-teal/90 text-black font-bold text-lg sm:text-xl px-8 sm:px-12 py-5 sm:py-6 min-h-[56px] rounded-full transition-all duration-300 pulse-glow transform hover:scale-105 hover:shadow-2xl hover:shadow-medici-teal/50 active:scale-95"
        >
          Text Dave
        </a>

        {/* Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <a
            href="mailto:dave@mediciday.com"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-medici-teal/50 text-medici-teal rounded-full hover:bg-medici-teal/10 hover:border-medici-teal transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Instead
          </a>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-medici-teal/50 text-medici-teal rounded-full hover:bg-medici-teal/10 hover:border-medici-teal transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Share This
          </button>
        </div>

        {/* Secondary Message */}
        <p className="text-gray-400 text-sm sm:text-base mt-8 sm:mt-10">
          Whether it's a warm intro or just a name, every connection helps us build something special for this community.
        </p>
      </div>
    </section>
  );
}
