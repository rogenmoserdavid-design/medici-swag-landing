export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-medici-black border-t border-medici-teal/20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Medici Day Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-medici-teal mb-2">
              Medici Day 2026
            </h3>
            <p className="text-gray-400 text-sm">
              An exclusive golf experience supporting the Tim Tebow Foundation
            </p>
          </div>

          {/* Event Details */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-3">Event Details</h4>
            <div className="space-y-1 text-sm text-gray-400">
              <p>March 6, 2026</p>
              <p>Private Golf Club</p>
              <p>100 Exclusive Participants</p>
            </div>
          </div>

          {/* Tim Tebow Foundation */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-semibold mb-3">Benefiting</h4>
            <div className="inline-flex items-center space-x-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-ttf-blue flex items-center justify-center">
                <span className="text-white font-bold text-xs">TTF</span>
              </div>
              <span className="text-ttf-blue font-semibold">
                Tim Tebow Foundation
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering children with special needs
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-medici-teal/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-500 text-sm">
              © {currentYear} Medici Day. All rights reserved.
            </div>

            {/* Links */}
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a
                href="https://www.timtebowfoundation.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-medici-teal transition-colors"
              >
                Tim Tebow Foundation
              </a>
              <span className="text-gray-600">•</span>
              <a
                href="mailto:swag@mediciday.com"
                className="hover:text-medici-teal transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Small Print */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-xs">
            Brand partnerships and swag contributions support event operations and charitable giving.
          </p>
        </div>
      </div>
    </footer>
  )
}
