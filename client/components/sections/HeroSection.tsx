'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, Sparkles, Wand2, Home, Palette } from 'lucide-react'

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)
  
  const heroImages = [
    '/api/placeholder/800/600',
    '/api/placeholder/800/600',
    '/api/placeholder/800/600',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="gradient-bg min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary-600 font-semibold">
                <Sparkles className="h-5 w-5" />
                <span>Powered by AI</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your Space with{' '}
                <span className="text-gradient">AI Design</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Get personalized interior design recommendations, shop curated products, 
                and connect with professional designers. All powered by cutting-edge AI technology.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="btn-primary text-lg px-8 py-4 flex items-center justify-center space-x-2">
                <span>Try Free AI Design</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <button className="btn-secondary text-lg px-8 py-4 flex items-center justify-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">10K+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">50K+</div>
                <div className="text-gray-600">Designs Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">95%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Hook */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8">
              {/* AI Room Transformation Demo */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900">AI Room Transformation</h3>
                  <div className="flex items-center space-x-2 text-primary-600">
                    <Wand2 className="h-5 w-5" />
                    <span className="font-semibold">AI Powered</span>
                  </div>
                </div>

                {/* Before/After Slider */}
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-gray-600">Before</div>
                      <div className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center">
                        <Home className="h-12 w-12 text-gray-400" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-semibold text-gray-600">After</div>
                      <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center">
                        <Palette className="h-12 w-12 text-primary-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Features */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-700">Smart furniture placement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-700">Color scheme optimization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-700">Lighting recommendations</span>
                  </div>
                </div>

                <button className="w-full btn-primary">
                  Try AI Design Tool
                </button>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent-500 text-white p-3 rounded-full shadow-lg animate-bounce-slow">
              <Sparkles className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-secondary-500 text-white p-3 rounded-full shadow-lg animate-bounce-slow" style={{ animationDelay: '1s' }}>
              <Wand2 className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
