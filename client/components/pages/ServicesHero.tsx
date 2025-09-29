import { Sparkles, Users, Wrench, Crown, CheckCircle, ArrowRight } from 'lucide-react'

export default function ServicesHero() {
  const services = [
    {
      icon: Sparkles,
      title: 'AI Design Tool',
      description: 'Get instant design recommendations powered by advanced AI',
      features: ['Room scanning', 'Style matching', '3D visualization'],
    },
    {
      icon: Users,
      title: 'Design Consultation',
      description: 'Connect with professional designers for personalized guidance',
      features: ['1-on-1 sessions', 'Expert advice', 'Custom solutions'],
    },
    {
      icon: Wrench,
      title: 'Installation Services',
      description: 'Professional setup and installation for all your purchases',
      features: ['Expert installation', 'Quality guarantee', 'Cleanup included'],
    },
  ]

  return (
    <section className="gradient-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary-600 font-semibold mb-6">
            <Sparkles className="h-5 w-5" />
            <span>Our Services</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Choose Your{' '}
            <span className="text-gradient">Design Journey</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From free AI-powered design tools to premium professional services, 
            we offer everything you need to transform your space. Start free and 
            upgrade when you're ready for more.
          </p>
        </div>

        {/* Services Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mb-6">
                  <Icon className="h-8 w-8 text-primary-600 mx-auto" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full btn-primary">
                  Learn More
                </button>
              </div>
            )
          })}
        </div>

        {/* Free vs Premium CTA */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Start Free Today</h2>
              </div>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Try our AI design tool completely free. Get 5 design generations, 
                access to our product catalog, and basic room scanning. No credit card required.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">5 free design generations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Access to product catalog</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Basic room scanning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Community support</span>
                </div>
              </div>
              
              <button className="btn-primary text-lg px-8 py-4 flex items-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
                <div className="text-center">
                  <div className="bg-primary-600 p-4 rounded-full w-20 h-20 mx-auto mb-6">
                    <Crown className="h-10 w-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Ready for Premium?
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    Unlock unlimited designs, professional consultation, 
                    and installation services.
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Unlimited designs</span>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Designer consultation</span>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Installation services</span>
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                  </div>
                  
                  <button className="btn-secondary w-full">
                    View Premium Plans
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
