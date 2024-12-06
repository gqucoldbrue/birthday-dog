import React from 'react'
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Leaf, Shield, Apple } from 'lucide-react'

export default function PremiumFoodPage() {
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
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
          Premium Raw Dog Food
        </h1>
        <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          For your precious family member, only the highest quality ingredients will do. They&apos;re worth it.
        </p>

        {/* Main Product Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[400px] md:h-[600px]">
              {/* Replaced Next.js Image with standard img tag */}
              <img
                src="/api/placeholder/800/600"
                alt="Premium chicken and vegetables blend"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">Artisanal Chicken Blend</h2>
              <div className="prose prose-amber mb-8">
                <p className="text-gray-600 text-lg">
                  This isn&apos;t just chicken and vegetables - it&apos;s a masterclass in canine nutrition. Built not to the standards of conventional pet food, but to the impossibly high standards of whole-animal nutrition and premium ingredients.
                </p>
                <p className="text-gray-600 text-lg mt-4">
                  While others merely meet the baseline, we&apos;ve engineered a formula that transcends ordinary dog food. Our signature blend delivers a complete spectrum of essential nutrients: vitamins B, D, A, iron, phosphorus, and precision-balanced electrolytes.
                </p>
                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>Premium whole-animal protein</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Leaf className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>Fresh, nutrient-rich vegetables</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Apple className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>Complete vitamin & mineral profile</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Order Now
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Nutritional Excellence Section */}
        <div className="mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <Shield className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Crafted with whole-animal protein and fresh vegetables for optimal nutrition.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <Leaf className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Fresh Ingredients</h3>
              <p className="text-gray-600">
                Every batch prepared with restaurant-grade ingredients for superior taste.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <Apple className="h-12 w-12 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Complete Nutrition</h3>
              <p className="text-gray-600">
                Balanced blend of vitamins, minerals, and nutrients for optimal health.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}