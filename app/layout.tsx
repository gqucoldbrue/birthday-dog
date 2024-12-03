import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

// Loading Inter font with expanded character sets for better typography
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',  // Ensures text remains visible during font load
  variable: '--font-inter'  // Allows usage in Tailwind as font-inter
})

export const metadata: Metadata = {
  title: 'Opti-Dog Premium Care',
  description: 'Premium dog food and accessories for your beloved pets',
  keywords: 'premium dog food, dog accessories, pet care, dog nutrition',
  openGraph: {
    title: 'Opti-Dog Premium Care',
    description: 'Premium dog food and accessories for your beloved pets',
    type: 'website',
    locale: 'en_US',
    siteName: 'Opti-Dog'
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-amber-50 to-amber-100`}>
        {/* The bg-gradient matches your pages' theme */}
        <main className="flex flex-col min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
}