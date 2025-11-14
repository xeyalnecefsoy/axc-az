import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Azərbaycan Xalq Cümhuriyyəti (ADR) – Tarix və Qurucular',
  description: 'ADR haqqında məlumat: yaranma tarixi, dövlətçilik, diplomatiya, islahatlar və qurucu şəxsiyyətlər.',
  keywords: ['ADR', 'Azərbaycan Xalq Cümhuriyyəti', 'tarix', 'qurucular', '1918', 'Cümhuriyyət'],
  authors: [{ name: 'ADR Layihəsi' }],
  metadataBase: new URL('https://example.local'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Azərbaycan Xalq Cümhuriyyəti (ADR) – Tarix və Qurucular',
    description: 'ADR haqqında məlumat: yaranma tarixi, dövlətçilik, diplomatiya, islahatlar və qurucu şəxsiyyətlər.',
    url: 'https://example.local/',
    siteName: 'ADR',
    locale: 'az_AZ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Azərbaycan Xalq Cümhuriyyəti (ADR) – Tarix və Qurucular',
    description: 'ADR haqqında məlumat: yaranma tarixi, dövlətçilik, diplomatiya, islahatlar və qurucu şəxsiyyətlər.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="az">
      <body className="min-h-screen flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Azərbaycan Xalq Cümhuriyyəti',
              url: 'https://example.local/',
              inLanguage: 'az',
            }),
          }}
        />
        <Navbar />
        <main className="flex-1 container-px max-w-6xl mx-auto w-full py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
