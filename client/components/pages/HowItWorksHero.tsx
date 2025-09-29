import { Camera, Sparkles, ShoppingBag, Hammer, Clock, Users, Award } from 'lucide-react'

export default function HowItWorksHero() {
  const benefits = [
    {
      icon: Clock,
      title: '10 Minutes',
      description: 'From scan to design recommendations',
    },
    {
      icon: Users,
      title: '10,000+',
      description: 'Happy customers transformed',
    },
    {
      icon: Award,
      title: '95%',
      description: 'Customer satisfaction rate',
    },
  ]

  return (
    <section className="gradient-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary-600 font-semibold mb-6">
            <Sparkles className="h-5 w-5" />
            <span>How It Works</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Space in{' '}
            <span className="text-gradient">4 Simple Steps</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our AI-powered platform makes interior design accessible to everyone. 
            From scanning your space to shopping for products, we guide you through 
            every step of your design journey.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg mb-4">
                  <Icon className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{benefit.title}</div>
                  <div className="text-gray-600 font-medium">{benefit.description}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Process Overview */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Camera className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">1. Scan</h3>
              <p className="text-gray-600 text-sm">Upload photos or use AR scanner</p>
            </div>
            
            <div className="text-center">
              <div className="bg-secondary-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-secondary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">2. AI Design</h3>
              <p className="text-gray-600 text-sm">Get instant recommendations</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <ShoppingBag className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">3. Shop</h3>
              <p className="text-gray-600 text-sm">Browse curated products</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Hammer className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">4. Build</h3>
              <p className="text-gray-600 text-sm">Install and enjoy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
