import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Medici Day 2026 - Swag Initiative',
  description: 'Join us in creating an unforgettable swag experience for 100 golfers at Medici Day 2026, supporting the Tim Tebow Foundation. March 6, 2026.',
  keywords: 'Medici Day, Tim Tebow Foundation, golf tournament, swag, charity event',
  authors: [{ name: 'Medici' }],
  themeColor: '#000000',
  colorScheme: 'dark',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    title: 'Medici Day 2026 - Swag Initiative',
    description: '100 Golfers. One Epic Swag Bag. Supporting an incredible cause.',
    siteName: 'Medici Day 2026',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medici Day 2026 - Swag Initiative',
    description: '100 Golfers. One Epic Swag Bag. Supporting an incredible cause.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
