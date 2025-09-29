import Link from 'next/link'
import { Sparkles, Users, Wrench, Crown, Check, ArrowRight } from 'lucide-react'

export default function ServicesPreview() {
  const services = [
    {
      icon: Sparkles,
      title: 'AI Design Tool',
      description: 'Get instant design recommendations powered by advanced AI technology.',
      features: ['Room scanning', 'Style matching', 'Color coordination', '3D visualization'],
      popular: false,
    },
    {
      icon: Users,
      title: 'Design Consultation',
      description: 'Connect with professional designers for personalized guidance.',
      features: ['1-on-1 sessions', 'Expert advice', 'Custom solutions', 'Follow-up support'],
      popular: true,
    },
    {
      icon: Wrench,
      title: 'Installation Services',
      description: 'Professional installation and setup for all your purchases.',
      features: ['Expert installation', 'Quality guarantee', 'Cleanup included', 'Warranty support'],
      popular: false,
    },
  ]

  const planComparison = {
    free: {
      name: 'Free Plan',
      price: '$0',
      period: 'forever',
      features: [
        'Basic AI design tool',
        '5 design generations/month',
        'Standard product catalog',
        'Community support',
        'Basic room scanning',
      ],
      limitations: [
        'Limited design variations',
        'No premium products',
        'No designer consultation',
      ],
    },
    premium: {
      name: 'Premium Plan',
      price: '$29',
      period: 'per month',
      features: [
        'Advanced AI design tool',
        'Unlimited design generations',
        'Premium product catalog',
        'Priority support',
        'Advanced room scanning',
        'Designer consultation (2/month)',
        'Installation services (discounted)',
        '3D visualization',
        'Export designs',
      ],
      popular: true,
    },
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From AI-powered design tools to professional consultation, we offer everything 
            you need to transform your space into your dream home.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="relative">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-accent-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Crown className="h-4 w-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}
                
                <div className={`card h-full ${service.popular ? 'ring-2 ring-accent-500' : ''}`}>
                  <div className="bg-primary-100 p-4 rounded-xl w-16 h-16 mb-6">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-primary-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full btn-primary">
                    Learn More
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Plan Comparison */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h3>
            <p className="text-gray-600">
              Start free and upgrade when you're ready for premium features
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  {planComparison.free.name}
                </h4>
                <div className="text-4xl font-bold text-gray-900 mb-1">
                  {planComparison.free.price}
                </div>
                <div className="text-gray-600">
                  {planComparison.free.period}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {planComparison.free.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full btn-secondary">
                Get Started Free
              </button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-xl p-8 shadow-lg relative ring-2 ring-primary-500">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>

              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  {planComparison.premium.name}
                </h4>
                <div className="text-4xl font-bold text-primary-600 mb-1">
                  {planComparison.premium.price}
                </div>
                <div className="text-gray-600">
                  {planComparison.premium.period}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {planComparison.premium.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full btn-primary">
                Start Premium Trial
              </button>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/services" className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center space-x-2">
              <span>View All Services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
