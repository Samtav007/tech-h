import { Sparkles, Users, Wrench, Zap, Shield, Award, Clock, Globe } from 'lucide-react'

export default function ServiceFeatures() {
  const features = [
    {
      icon: Sparkles,
      title: 'AI Design Tool',
      description: 'Our core AI-powered design recommendation engine',
      benefits: [
        'Instant design generation',
        'Style preference learning',
        '3D room visualization',
        'Color scheme optimization',
        'Furniture placement suggestions',
      ],
      stats: {
        number: '30s',
        label: 'Average generation time',
      },
    },
    {
      icon: Users,
      title: 'Designer Network',
      description: 'Connect with vetted professional interior designers',
      benefits: [
        '1-on-1 consultation sessions',
        'Custom design solutions',
        'Expert advice and guidance',
        'Project review and refinement',
        'Ongoing support',
      ],
      stats: {
        number: '500+',
        label: 'Professional designers',
      },
    },
    {
      icon: Wrench,
      title: 'Installation Services',
      description: 'Professional setup and installation for all purchases',
      benefits: [
        'Expert installation team',
        'Quality guarantee',
        'Cleanup included',
        'Warranty support',
        'Maintenance services',
      ],
      stats: {
        number: '95%',
        label: 'Customer satisfaction',
      },
    },
  ]

  const additionalFeatures = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Get design recommendations in under 30 seconds',
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your data is protected with enterprise-grade security',
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: '30-day money-back guarantee on all services',
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'AI chatbot and human support available around the clock',
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Available worldwide with localized design preferences',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Service Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of services combines AI technology with human expertise 
            to deliver exceptional results for every project.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mb-6">
                  <Icon className="h-8 w-8 text-primary-600 mx-auto" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-1">
                    {feature.stats.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {feature.stats.label}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Features */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Why Choose HOMY?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary-600 mx-auto" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Service Process */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">How Our Services Work</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Choose Your Service</h4>
              <p className="text-primary-100 text-sm">Select from AI tool, consultation, or installation</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Get Started</h4>
              <p className="text-primary-100 text-sm">Upload photos or book your consultation</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Receive Results</h4>
              <p className="text-primary-100 text-sm">Get your design or consultation within hours</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h4 className="font-semibold mb-2">Transform Your Space</h4>
              <p className="text-primary-100 text-sm">Shop products and bring your design to life</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
