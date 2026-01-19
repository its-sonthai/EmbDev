import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'EmbDev - Embedded Systems Knowledge Base',
    template: '%s | EmbDev',
  },
  description:
    'Deep dive into embedded systems: Linux, RTOS, Android, and AUTOSAR. Technical insights for engineers.',
  keywords: ['Embedded Linux', 'RTOS', 'Android', 'AOSP', 'AUTOSAR', 'Embedded Systems'],
  authors: [{ name: 'EmbDev Author' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://embdev.vercel.app',
    title: 'EmbDev - Embedded Systems Knowledge Base',
    description: 'Deep dive into embedded systems: Linux, RTOS, Android, and AUTOSAR.',
    images: [
      {
        url: 'https://embdev.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'EmbDev',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EmbDev',
    description: 'Embedded Systems Knowledge Base',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%2360a5fa'>&lt;/&gt;</text></svg>" />
      </head>
      <body className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
        {/* Navigation Header */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
