'use client';
import React from 'react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Shield, Heart, Sparkles } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <ul className="flex justify-center space-x-6">
            <li><a href="/" className="text-amber-600 hover:text-amber-800 font-semibold">Home</a></li>
            <li><a href="/premium-food" className="text-amber-600 hover:text-amber-800 font-semibold">Premium Food</a></li>
            <li><a href="/accessories" className="text-amber-600 hover:text-amber-800 font-semibold">Accessories</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background Image with Vignette */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 z-10" />
          <img
            src="/api/placeholder/1920/1080"
            alt="Stylish dog with sunglasses"
            className="object-cover w-full h-full filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-amber-50/90 to-transparent z-20" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-30 container mx-auto px-4 h-full flex items-center justify-end">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl"
            style={{ marginTop: '15%', marginRight: '5%' }}
          >
            <h1 className="font-sans text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              OPTI-DOG
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-4">
              Premium Nutrition & Lifestyle Essentials
            </p>
            <div className="prose prose-sm text-gray-600 mb-6">
              <p>
                Look at it this way: it&apos;s either premium dog food, or an incredibly reasonable investment in your best friend&apos;s health. The Opti-Dog difference isn&apos;t built to the standards of mere pet supplies, but to the impossibly high standards of love itself.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a href="/premium-food">
                  <Button size="lg" className="w-full bg-amber-600 hover:bg-amber-700">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Shop Premium Food
                  </Button>
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a href="/accessories">
                  <Button size="lg" variant="outline" className="w-full border-amber-600 text-amber-600 hover:bg-amber-50">
                    <Heart className="mr-2 h-5 w-5" />
                    Browse Accessories
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-amber-50 rounded-xl shadow-lg"
            >
              <Shield className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Organic, fresh ingredients prepared with your dog&apos;s optimal health in mind.</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-amber-50 rounded-xl shadow-lg"
            >
              <Sparkles className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Lifestyle Essentials</h3>
              <p className="text-gray-600">Carefully curated accessories for the modern, active dog.</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="p-6 bg-amber-50 rounded-xl shadow-lg"
            >
              <Heart className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Health First</h3>
              <p className="text-gray-600">Every product selected with your dog&apos;s wellbeing as the priority.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}