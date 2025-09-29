import { Camera, Sparkles, ShoppingBag, Hammer, ArrowRight, CheckCircle, Smartphone, Upload, Wand2, Palette, CreditCard, Wrench } from 'lucide-react'

export default function ProcessSteps() {
  const steps = [
    {
      number: '01',
      title: 'Scan Your Space',
      subtitle: 'Capture your room in minutes',
      icon: Camera,
      color: 'from-blue-500 to-blue-600',
      description: 'Upload photos of your space or use our AR scanner to capture room dimensions, lighting, and current furniture placement.',
      features: [
        'Upload existing photos',
        'AR room scanning',
        'Automatic dimension detection',
        'Lighting analysis',
        'Furniture recognition',
      ],
      details: [
        {
          icon: Smartphone,
          title: 'Mobile App',
          description: 'Use your phone camera for quick room scanning',
        },
        {
          icon: Upload,
          title: 'Photo Upload',
          description: 'Upload existing photos from any device',
        },
      ],
    },
    {
      number: '02',
      title: 'AI Design',
      subtitle: 'Get instant recommendations',
      icon: Sparkles,
      color: 'from-purple-500 to-purple-600',
      description: 'Our advanced AI analyzes your space, preferences, and style to generate personalized design recommendations in seconds.',
      features: [
        'Style preference analysis',
        'Color scheme optimization',
        'Furniture placement suggestions',
        'Lighting recommendations',
        'Budget considerations',
      ],
      details: [
        {
          icon: Wand2,
          title: 'AI Magic',
          description: 'Advanced algorithms create perfect designs',
        },
        {
          icon: Palette,
          title: 'Style Matching',
          description: 'Learn your preferences and suggest matches',
        },
      ],
    },
    {
      number: '03',
      title: 'Shop Products',
      subtitle: 'Find perfect items',
      icon: ShoppingBag,
      color: 'from-green-500 to-green-600',
      description: 'Browse our curated catalog of furniture, decor, and materials that perfectly match your AI-generated design.',
      features: [
        'Curated product catalog',
        'AI-recommended items',
        'Price range filtering',
        'Vendor partnerships',
        'Quality guarantees',
      ],
      details: [
        {
          icon: CreditCard,
          title: 'Secure Checkout',
          description: 'Safe and secure payment processing',
        },
        {
          icon: CheckCircle,
          title: 'Quality Assured',
          description: 'All products vetted for quality',
        },
      ],
    },
    {
      number: '04',
      title: 'Build & Enjoy',
      subtitle: 'Bring your design to life',
      icon: Hammer,
      color: 'from-orange-500 to-orange-600',
      description: 'Get professional installation help or use our DIY guides to transform your space into your dream home.',
      features: [
        'Professional installation',
        'DIY guides and tutorials',
        'Project timeline planning',
        'Quality assurance',
        'Ongoing support',
      ],
      details: [
        {
          icon: Wrench,
          title: 'Installation',
          description: 'Professional setup and installation',
        },
        {
          icon: CheckCircle,
          title: 'Support',
          description: 'Ongoing help and maintenance',
        },
      ],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Complete Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial scan to final installation, we guide you through every step 
            of your interior design journey with AI-powered precision.
          </p>
        </div>

        <div className="space-y-20">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-32 left-1/2 transform -translate-x-1/2 w-0.5 h-20 bg-gray-200 z-0"></div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left Side - Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} text-white`}>
                        <Icon className="h-8 w-8" />
                      </div>
                      <div>
                        <div className="text-4xl font-bold text-gray-400 mb-1">{step.number}</div>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                        <p className="text-primary-600 font-semibold">{step.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      {step.details.map((detail, detailIndex) => {
                        const DetailIcon = detail.icon
                        return (
                          <div key={detailIndex} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                            <DetailIcon className="h-5 w-5 text-primary-600 flex-shrink-0" />
                            <div>
                              <div className="font-semibold text-gray-900 text-sm">{detail.title}</div>
                              <div className="text-gray-600 text-xs">{detail.description}</div>
                            </div>
                          </div>
                        )
                      })}
                    </div>

                    <ul className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Side - Visual */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-gray-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                      <div className="text-center">
                        <div className={`w-24 h-24 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                          <Icon className="h-12 w-12 text-white" />
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                        <p className="text-gray-600">{step.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Process Summary */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their spaces with our AI-powered design platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="text-center">
                  <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-gray-900">{step.title}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
