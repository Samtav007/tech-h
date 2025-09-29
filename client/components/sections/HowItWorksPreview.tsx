import Link from 'next/link'
import { Camera, Sparkles, ShoppingBag, Hammer, ArrowRight } from 'lucide-react'

export default function HowItWorksPreview() {
  const steps = [
    {
      number: '01',
      icon: Camera,
      title: 'Scan Your Space',
      description: 'Upload photos or use our AR scanner to capture your room dimensions and current setup.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      number: '02',
      icon: Sparkles,
      title: 'AI Design',
      description: 'Our AI analyzes your space and generates personalized design recommendations in seconds.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      number: '03',
      icon: ShoppingBag,
      title: 'Shop Products',
      description: 'Browse curated furniture, decor, and materials that match your design perfectly.',
      color: 'from-green-500 to-green-600',
    },
    {
      number: '04',
      icon: Hammer,
      title: 'Build & Enjoy',
      description: 'Get installation help or DIY guides to bring your new design to life.',
      color: 'from-orange-500 to-orange-600',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your space in 4 simple steps. Our AI-powered platform makes interior design 
            accessible, affordable, and personalized for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gray-300 z-0" 
                       style={{ width: 'calc(100% - 2rem)' }}>
                    <div className="absolute right-0 top-0 w-0 h-0 border-l-4 border-l-gray-300 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                  </div>
                )}

                <div className="relative z-10 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} text-white mb-6`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  
                  <div className="absolute -top-2 -right-2 bg-gray-900 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {step.number}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Demo Video Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                See It In Action
              </h3>
              <p className="text-gray-600 mb-6">
                Watch how our AI transforms a living room from drab to fab in just 2 minutes. 
                See the magic happen with real-time design generation and product recommendations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">Real-time AI design generation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">Instant product recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <span className="text-gray-700">3D visualization preview</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium">Demo Video</p>
                  <p className="text-sm text-gray-500">2:30 min</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/how-it-works" className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2">
            <span>Learn More</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
