'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Ruler, Shield } from 'lucide-react'

export default function AccessoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-6">
            <li><Link href="/" className="text-amber-600 hover:text-amber-800 font-semibold">Home</Link></li>
            <li><Link href="/premium-food" className="text-amber-600 hover:text-amber-800 font-semibold">Premium Food</Link></li>
            <li><Link href="/accessories" className="text-amber-600 hover:text-amber-800 font-semibold">Accessories</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Premium Dog Accessories
        </h1>
        <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Look at it this way: it's either standard pet gear, or an incredibly reasonable investment in your best friend's comfort and style.
        </p>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Winter Coat Product */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="relative h-96">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/APNK8n5fTYW1UDVlzBk03w-rJYv66CZNReg8p2X6hNBnLxosjAlvw.webp"
                alt="Dog wearing premium winter coat"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">All-Weather Performance Onesie</h2>
              <div className="prose prose-amber mb-6">
                <p className="text-gray-600">
                  Suit up your pup and keep their fur clean from rain, mud, slush, and snow. This best-selling full coverage dog onesie isn't built to the standards of mere pet clothing, but to the impossibly high standards of adventure itself.
                </p>
                <ul className="mt-4 space-y-2">
                  <li>Water-resistant shell with premium coverage</li>
                  <li>Adjustable funnel neck with wind protection</li>
                  <li>Custom fit with side zipper closure</li>
                  <li>Adaptable pant length with button snaps</li>
                </ul>
              </div>
              <div className="flex gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Shop Now
                </Button>
                <Button size="lg" variant="outline">
                  <Ruler className="mr-2 h-5 w-5" />
                  Size Guide
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Boots Product */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="relative h-[400px]"> // Fixed height instead of flexible
                <Image
                src="/images/westipoo-boots-1.png"
                alt="..."
                fill
                className="object-cover"
                priority
            />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">All-Terrain Premium Boots</h2>
              <div className="prose prose-amber mb-6">
                <p className="text-gray-600">
                  These aren't just dog boots - they're a masterclass in paw protection. Built with the precision of performance footwear and the comfort your companion deserves. Each set of four boots represents our commitment to excellence in every step.
                </p>
                <ul className="mt-4 space-y-2">
                  <li>Water-resistant upper shell with premium grip</li>
                  <li>Reflective safety features for visibility</li>
                  <li>Innovative easy-wear design</li>
                  <li>Adjustable secure-fit system</li>
                </ul>
              </div>
              <div className="flex gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Shop Now
                </Button>
                <Button size="lg" variant="outline">
                  <Ruler className="mr-2 h-5 w-5" />
                  Size Guide
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quality Promise Section */}
        <div className="mt-20 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto"
          >
            <Shield className="h-12 w-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">The Opti-Dog Promise</h3>
            <p className="text-gray-600">
              Every accessory in our collection is crafted to the highest standards of quality and comfort. 
              That extra percentage that separates the truly exceptional from the merely good doesn't come easily or cheaply. 
              But after one adventure with our gear, we're confident you'll agree - it's worth every penny.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}