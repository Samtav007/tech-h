import { Play, Clock, Users, Star, ArrowRight } from 'lucide-react'

export default function DemoVideo() {
  const videoStats = [
    {
      icon: Clock,
      number: '2:30',
      label: 'Demo Duration',
    },
    {
      icon: Users,
      number: '50K+',
      label: 'Views',
    },
    {
      icon: Star,
      number: '4.9/5',
      label: 'Rating',
    },
  ]

  const demoFeatures = [
    'Real-time AI design generation',
    'Interactive product browsing',
    '3D room visualization',
    'Instant price calculations',
    'One-click purchase flow',
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how our AI transforms a living room from drab to fab in just 2 minutes. 
            See the magic happen with real-time design generation and product recommendations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Player */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl shadow-2xl overflow-hidden">
              {/* Video Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white/30 transition-colors cursor-pointer">
                    <Play className="h-8 w-8 ml-1" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Watch Demo</h3>
                  <p className="text-white/80">2:30 minutes</p>
                </div>
              </div>
              
              {/* Video Stats Overlay */}
              <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center space-x-4 text-white text-sm">
                  {videoStats.map((stat, index) => {
                    const Icon = stat.icon
                    return (
                      <div key={index} className="flex items-center space-x-1">
                        <Icon className="h-4 w-4" />
                        <span>{stat.number}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Video Description */}
            <div className="mt-6 p-6 bg-white rounded-xl shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-3">What You'll See:</h4>
              <ul className="space-y-2">
                {demoFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Demo Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Experience the Future of Interior Design
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <Play className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Real-Time Transformation</h4>
                  <p className="text-gray-600">
                    Watch as our AI analyzes the room and generates design recommendations in real-time, 
                    showing you exactly how your space could look.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-secondary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Interactive Shopping</h4>
                  <p className="text-gray-600">
                    See how easy it is to browse and purchase recommended products, 
                    with instant price updates and availability checks.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent-100 p-3 rounded-full">
                  <Star className="h-6 w-6 text-accent-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">3D Visualization</h4>
                  <p className="text-gray-600">
                    Experience your new design in 3D before making any purchases, 
                    ensuring everything looks perfect in your space.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-primary-50 rounded-xl">
              <h4 className="font-semibold text-primary-900 mb-3">Ready to Try It Yourself?</h4>
              <p className="text-primary-700 mb-4">
                Start your own design journey with our free AI tool. No credit card required.
              </p>
              <button className="btn-primary flex items-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Additional Demo Videos */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            More Demo Videos
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Bedroom Makeover',
                duration: '1:45',
                description: 'Transform a cluttered bedroom into a modern sanctuary',
              },
              {
                title: 'Kitchen Redesign',
                duration: '3:20',
                description: 'Complete kitchen transformation with smart storage solutions',
              },
              {
                title: 'Small Space Optimization',
                duration: '2:10',
                description: 'Maximize a 500 sq ft apartment with clever design tricks',
              },
            ].map((video, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Play className="h-6 w-6 text-white ml-1" />
                    </div>
                    <p className="text-sm text-gray-600">{video.duration}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{video.title}</h4>
                  <p className="text-sm text-gray-600">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
