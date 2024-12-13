import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Opti-Dog Premium Care',
  description: 'Premium dog food and accessories for your beloved pets',
  keywords: 'premium dog food, dog accessories, pet care, dog nutrition',
  metadataBase: new URL('https://gqu-portfolio-website-ifo3iogsq-gqucoldbrues-projects.vercel.app'),
  robots: 'index, follow'
}

export const viewport = {
  width: 'device-width',
  initialScale: 1
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

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