import { Sparkles, Users, DollarSign, Clock, Shield, Zap, Target, TrendingUp } from 'lucide-react'

export default function CompetitiveAdvantages() {
  const advantages = [
    {
      icon: Sparkles,
      title: 'AI-Powered Design',
      description: 'Our proprietary AI analyzes your space and preferences to generate personalized design recommendations in seconds.',
      comparison: {
        us: 'Instant AI recommendations',
        competitors: 'Manual design process',
      },
    },
    {
      icon: DollarSign,
      title: 'Freemium Model',
      description: 'Start free with basic features, upgrade only when you need premium services. No upfront costs.',
      comparison: {
        us: 'Free to start, pay as you grow',
        competitors: 'High upfront consultation fees',
      },
    },
    {
      icon: Users,
      title: 'Designer Network',
      description: 'Connect with vetted professional designers for personalized consultation when you need human expertise.',
      comparison: {
        us: 'AI + Human expertise',
        competitors: 'Either AI or human, not both',
      },
    },
    {
      icon: Clock,
      title: 'Instant Results',
      description: 'Get design recommendations in minutes, not weeks. See your space transformed immediately.',
      comparison: {
        us: 'Minutes to results',
        competitors: 'Weeks for consultation',
      },
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: '30-day money-back guarantee on all services. We stand behind our AI recommendations.',
      comparison: {
        us: 'Risk-free guarantee',
        competitors: 'No guarantees',
      },
    },
    {
      icon: Zap,
      title: 'Continuous Learning',
      description: 'Our AI learns from every project, getting smarter and more accurate with each design.',
      comparison: {
        us: 'Improving with every use',
        competitors: 'Static recommendations',
      },
    },
  ]

  const competitors = [
    {
      name: 'Traditional Designers',
      pros: ['Personal touch', 'Custom solutions'],
      cons: ['Expensive', 'Time-consuming', 'Limited availability'],
    },
    {
      name: 'DIY Apps',
      pros: ['Low cost', 'Quick setup'],
      cons: ['Limited expertise', 'Generic solutions', 'No professional guidance'],
    },
    {
      name: 'Furniture Stores',
      pros: ['Product focus', 'Showroom experience'],
      cons: ['Sales-driven', 'Limited design help', 'No space planning'],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why HOMY is Different
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine the best of AI technology with human expertise to deliver 
            superior results at a fraction of the cost and time.
          </p>
        </div>

        {/* Competitive Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon
            return (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="bg-primary-100 p-3 rounded-full w-12 h-12 mb-4">
                  <Icon className="h-6 w-6 text-primary-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {advantage.description}
                </p>
                
                <div className="bg-white rounded-lg p-4 border-l-4 border-primary-500">
                  <div className="text-sm">
                    <div className="font-semibold text-green-600 mb-1">✓ HOMY</div>
                    <div className="text-gray-700 mb-2">{advantage.comparison.us}</div>
                    <div className="font-semibold text-red-600 mb-1">✗ Others</div>
                    <div className="text-gray-700">{advantage.comparison.competitors}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Competitor Comparison */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            How We Compare
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {competitors.map((competitor, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">
                  {competitor.name}
                </h4>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-green-600 mb-2">Pros</h5>
                    <ul className="space-y-1">
                      {competitor.pros.map((pro, proIndex) => (
                        <li key={proIndex} className="flex items-center space-x-2 text-sm">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-red-600 mb-2">Cons</h5>
                    <ul className="space-y-1">
                      {competitor.cons.map((con, conIndex) => (
                        <li key={conIndex} className="flex items-center space-x-2 text-sm">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-gray-700">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* HOMY Advantage Summary */}
          <div className="mt-8 bg-primary-50 rounded-xl p-6">
            <div className="text-center">
              <h4 className="text-xl font-bold text-primary-900 mb-4">
                The HOMY Advantage
              </h4>
              <p className="text-primary-700 mb-6">
                We combine the personal touch of traditional designers, the speed of DIY apps, 
                and the product focus of furniture stores, all enhanced by cutting-edge AI technology.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">90%</div>
                  <div className="text-sm text-primary-700">Cost Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">10x</div>
                  <div className="text-sm text-primary-700">Faster Results</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">24/7</div>
                  <div className="text-sm text-primary-700">AI Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">95%</div>
                  <div className="text-sm text-primary-700">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
