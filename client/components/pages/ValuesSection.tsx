import { Target, Users, Globe, Zap, Shield, Heart } from 'lucide-react'

export default function ValuesSection() {
  const values = [
    {
      icon: Target,
      title: 'Accessibility',
      description: 'Making professional interior design accessible to everyone, regardless of budget or location.',
      details: [
        'Free AI design tool for everyone',
        'Affordable premium services',
        'Global availability',
        'Multiple language support',
      ],
    },
    {
      icon: Users,
      title: 'Empowerment',
      description: 'Empowering both homeowners and designers with tools and technology to create amazing spaces.',
      details: [
        'AI-assisted design process',
        'Designer network platform',
        'Educational resources',
        'Community support',
      ],
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Promoting eco-friendly design choices and sustainable living through our recommendations.',
      details: [
        'Eco-friendly product filters',
        'Sustainable material options',
        'Energy-efficient recommendations',
        'Waste reduction strategies',
      ],
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuously pushing the boundaries of what\'s possible with AI and design technology.',
      details: [
        'Cutting-edge AI algorithms',
        'Regular feature updates',
        'Research partnerships',
        'Technology leadership',
      ],
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Building trust through transparency, quality guarantees, and exceptional customer service.',
      details: [
        '30-day money-back guarantee',
        'Transparent pricing',
        'Secure data handling',
        'Customer testimonials',
      ],
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'Fostering a supportive community of design enthusiasts, homeowners, and professionals.',
      details: [
        'Design inspiration sharing',
        'Community forums',
        'Designer mentorship',
        'Local meetups',
      ],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These values guide everything we do, from product development to customer service. 
            They're not just words on a wall—they're the foundation of our company culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mb-6">
                  <Icon className="h-8 w-8 text-primary-600 mx-auto" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {value.description}
                </p>
                
                <ul className="space-y-2">
                  {value.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Join Our Mission
          </h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Be part of the revolution that's making beautiful, functional design accessible to everyone. 
            Whether you're a homeowner, designer, or just passionate about great design, there's a place for you in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-colors">
              Start Designing
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-6 rounded-lg transition-colors">
              Join Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
