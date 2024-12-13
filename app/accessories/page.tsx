'use client';
import React from 'react'
import { motion } from "framer-motion"

export default function AccessoriesPage() {
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

      {/* Header Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4"
        >
          Premium Dog Accessories
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-600 text-xl max-w-3xl mx-auto mb-12"
        >
          Look at it this way: it&apos;s either standard pet gear, or an incredibly reasonable
          investment in your best friend&apos;s comfort and style.
        </motion.p>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Winter Coat Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative h-[400px]">
              <img
                src="/api/placeholder/800/600"
                alt="Dog wearing premium winter coat"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3">Premium Winter Coat</h3>
              <p className="text-gray-600 text-lg">
                Luxurious warmth and style for cold weather adventures. 
                Crafted with premium materials for maximum comfort and durability.
              </p>
              <div className="mt-6">
                <a 
                  href="#"
                  className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors duration-200"
                >
                  Learn More
                </a>
              </div>
            </div>
          </motion.div>

          {/* Comfort Accessories Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="relative h-[400px]">
              <img
                src="/api/placeholder/800/600"
                alt="Premium adjustable comfort accessories"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3">Adjustable Comfort</h3>
              <p className="text-gray-600 text-lg">
                Perfectly sized accessories for your dog&apos;s needs. 
                Each piece is adjustable and customizable for the perfect fit.
              </p>
              <div className="mt-6">
                <a 
                  href="#"
                  className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors duration-200"
                >
                  Learn More
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}