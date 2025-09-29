import { Camera, Sparkles, ShoppingBag, Hammer, Zap, Shield, Users, Award } from 'lucide-react'

export default function FeaturesBreakdown() {
  const features = [
    {
      category: 'Scan & Analysis',
      icon: Camera,
      color: 'from-blue-500 to-blue-600',
      features: [
        {
          title: 'AR Room Scanning',
          description: 'Use your phone camera to create accurate 3D room models',
          benefits: ['Accurate measurements', 'Real-time scanning', 'Easy to use'],
        },
        {
          title: 'Photo Upload',
          description: 'Upload existing photos for instant analysis',
          benefits: ['Multiple formats', 'Batch processing', 'Cloud storage'],
        },
        {
          title: 'Smart Recognition',
          description: 'AI automatically identifies furniture, colors, and materials',
          benefits: ['Automatic detection', 'Style analysis', 'Condition assessment'],
        },
      ],
    },
    {
      category: 'AI Design Engine',
      icon: Sparkles,
      color: 'from-purple-500 to-purple-600',
      features: [
        {
          title: 'Style Matching',
          description: 'Learn your preferences and suggest matching designs',
          benefits: ['Personalized recommendations', 'Style evolution', 'Preference learning'],
        },
        {
          title: 'Color Optimization',
          description: 'AI-optimized color schemes for your space',
          benefits: ['Harmony analysis', 'Lighting consideration', 'Mood enhancement'],
        },
        {
          title: 'Space Planning',
          description: 'Optimal furniture placement and space utilization',
          benefits: ['Traffic flow', 'Functionality', 'Aesthetic balance'],
        },
      ],
    },
    {
      category: 'Shopping Experience',
      icon: ShoppingBag,
      color: 'from-green-500 to-green-600',
      features: [
        {
          title: 'Curated Catalog',
          description: 'Handpicked products that match your design',
          benefits: ['Quality assurance', 'Style consistency', 'Price optimization'],
        },
        {
          title: 'Smart Filters',
          description: 'Filter by style, budget, material, and vendor',
          benefits: ['Precise matching', 'Budget control', 'Quality selection'],
        },
        {
          title: 'AR Preview',
          description: 'See how products look in your space before buying',
          benefits: ['Visual confirmation', 'Size verification', 'Style matching'],
        },
      ],
    },
    {
      category: 'Implementation',
      icon: Hammer,
      color: 'from-orange-500 to-orange-600',
      features: [
        {
          title: 'Installation Services',
          description: 'Professional setup and installation',
          benefits: ['Expert installation', 'Quality guarantee', 'Cleanup included'],
        },
        {
          title: 'DIY Guides',
          description: 'Step-by-step instructions for DIY projects',
          benefits: ['Detailed instructions', 'Video tutorials', 'Tool recommendations'],
        },
        {
          title: 'Project Management',
          description: 'Track your project from start to finish',
          benefits: ['Timeline tracking', 'Progress updates', 'Issue resolution'],
        },
      ],
    },
  ]

  const technicalFeatures = [
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
      icon: Users,
      title: 'Human + AI',
      description: 'Combine AI efficiency with human creativity',
    },
    {
      icon: Award,
      title: 'Quality Guaranteed',
      description: '30-day money-back guarantee on all services',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines cutting-edge AI technology with human expertise 
            to deliver the most comprehensive interior design solution available.
          </p>
        </div>

        {/* Feature Categories */}
        <div className="space-y-16">
          {features.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`p-4 rounded-full bg-gradient-to-r ${category.color}`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h4>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-2 text-sm">
                            <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Technical Features */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Technical Excellence
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-white p-6 rounded-xl shadow-lg mb-4">
                    <Icon className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                    <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">Performance Metrics</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">30s</div>
              <div className="text-primary-100">Average Design Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-primary-100">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-primary-100">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-primary-100">AI Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
