export default function TheAudience() {
  const celebrities = [
    { name: "Tim Tebow", role: "NFL Legend & TTF Founder" },
    { name: "Demi-Leigh Tebow", role: "Miss Universe 2017" },
    { name: "Bo Nix", role: "NFL Quarterback" },
    { name: "Urban Meyer", role: "Championship Coach" },
    { name: "Lance Armstrong", role: "Cycling Icon" },
    { name: "The Undertaker", role: "WWE Legend" },
  ]

  const stats = [
    { number: "100", label: "Influential Golfers" },
    { number: "6+", label: "Celebrity Participants" },
    { number: "3K+", label: "TTF Content Reach" },
  ]

  return (
    <section className="relative bg-medici-black py-20 px-6 md:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            The Audience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your brand in the hands of influential golfers, celebrity participants, and millions of Tim Tebow Foundation supporters
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-medici-teal/10 to-ttf-blue/10 border border-medici-teal/30 rounded-lg p-8 text-center hover:border-medici-teal transition-all duration-300"
            >
              <div className="text-5xl md:text-6xl font-bold text-medici-teal mb-2">
                {stat.number}
              </div>
              <div className="text-lg text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Celebrity Participants */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
            Confirmed Celebrity Participants
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {celebrities.map((celebrity, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-ttf-blue/20 to-medici-teal/20 border border-ttf-blue/40 rounded-lg p-6 hover:border-medici-teal hover:shadow-lg hover:shadow-medici-teal/20 transition-all duration-300"
              >
                <div className="text-xl font-bold text-white mb-1 group-hover:text-medici-teal transition-colors">
                  {celebrity.name}
                </div>
                <div className="text-base text-gray-400">{celebrity.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefit Badges */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <div className="bg-medici-teal/10 border border-medici-teal/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 hover:bg-medici-teal/20 hover:border-medici-teal transition-all duration-300">
              <span className="text-medici-teal font-semibold text-sm sm:text-base">Celebrity Exposure</span>
            </div>
            <div className="bg-medici-teal/10 border border-medici-teal/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 hover:bg-medici-teal/20 hover:border-medici-teal transition-all duration-300">
              <span className="text-medici-teal font-semibold text-sm sm:text-base">Premium Placement</span>
            </div>
            <div className="bg-medici-teal/10 border border-medici-teal/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 hover:bg-medici-teal/20 hover:border-medici-teal transition-all duration-300">
              <span className="text-medici-teal font-semibold text-sm sm:text-base">3K+ Social Reach</span>
            </div>
            <div className="bg-medici-teal/10 border border-medici-teal/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 hover:bg-medici-teal/20 hover:border-medici-teal transition-all duration-300">
              <span className="text-medici-teal font-semibold text-sm sm:text-base">Tax Deductible</span>
            </div>
            <div className="bg-medici-teal/10 border border-medici-teal/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 hover:bg-medici-teal/20 hover:border-medici-teal transition-all duration-300">
              <span className="text-medici-teal font-semibold text-sm sm:text-base">Content Rights</span>
            </div>
            <div className="bg-medici-teal/10 border border-medici-teal/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 hover:bg-medici-teal/20 hover:border-medici-teal transition-all duration-300">
              <span className="text-medici-teal font-semibold text-sm sm:text-base">Exclusive Network</span>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-ttf-blue/30 to-medici-teal/30 border border-medici-teal/50 rounded-xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
            Why Partner With Medici Day?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-200">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-medici-teal flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Premium Placement</p>
                <p className="text-base text-gray-300">Your swag directly in the hands of 100 influential golfers</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-medici-teal flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Celebrity Exposure</p>
                <p className="text-base text-gray-300">Products used by Tim Tebow, Bo Nix, and other stars</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-medici-teal flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Content Opportunities</p>
                <p className="text-base text-gray-300">TTF social media reach and event photography</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-medici-teal flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Charitable Impact</p>
                <p className="text-base text-gray-300">Supporting children with special needs through TTF</p>
              </div>
            </div>
          </div>
        </div>

        {/* Charity Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm md:text-base">
            This is a charitable event benefiting the{" "}
            <span className="text-ttf-blue font-semibold">Tim Tebow Foundation</span>,
            empowering children with special needs around the world.
          </p>
        </div>
      </div>
    </section>
  )
}
