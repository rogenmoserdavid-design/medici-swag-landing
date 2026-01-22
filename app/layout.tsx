import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://medici-swag-landing.vercel.app'),
  title: 'Medici Day 2026 - Swag Initiative',
  description: 'Join us in creating an unforgettable swag experience for 100 golfers at Medici Day 2026, supporting the Tim Tebow Foundation. March 6, 2026.',
  keywords: 'Medici Day, Tim Tebow Foundation, golf tournament, swag, charity event',
  authors: [{ name: 'Medici' }],
  openGraph: {
    type: 'website',
    title: 'Medici Day 2026 - Swag Initiative',
    description: '100 Golfers. One Epic Swag Bag. Supporting an incredible cause.',
    siteName: 'Medici Day 2026',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Medici Day 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medici Day 2026 - Swag Initiative',
    description: '100 Golfers. One Epic Swag Bag. Supporting an incredible cause.',
    images: ['/og-image.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Medici Day 2026",
    "description": "Exclusive golf tournament supporting the Tim Tebow Foundation",
    "startDate": "2026-03-06",
    "endDate": "2026-03-06",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": { "@type": "Place", "name": "Private Golf Club" },
    "organizer": { "@type": "Organization", "name": "Medici" },
    "sponsor": { "@type": "Organization", "name": "Tim Tebow Foundation" }
  };

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
