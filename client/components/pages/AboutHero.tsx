import { Sparkles, Users, Target, Lightbulb } from 'lucide-react'

export default function AboutHero() {
  const stats = [
    {
      icon: Users,
      number: '10,000+',
      label: 'Happy Customers',
    },
    {
      icon: Target,
      number: '50,000+',
      label: 'Designs Created',
    },
    {
      icon: Sparkles,
      number: '500+',
      label: 'Design Partners',
    },
    {
      icon: Lightbulb,
      number: '95%',
      label: 'Satisfaction Rate',
    },
  ]

  return (
    <section className="gradient-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary-600 font-semibold mb-6">
            <Sparkles className="h-5 w-5" />
            <span>About HOMY</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Democratizing Interior Design with{' '}
            <span className="text-gradient">AI Technology</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We believe everyone deserves a beautiful, functional home. That's why we're using cutting-edge AI 
            to make professional interior design accessible, affordable, and personalized for everyone.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg mb-4">
                  <Icon className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              To revolutionize the interior design industry by making professional design services 
              accessible to everyone through AI-powered technology, while empowering designers 
              and creating beautiful, functional spaces that enhance people's lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-primary-50 p-4 rounded-lg">
                <h3 className="font-semibold text-primary-900 mb-2">Accessibility</h3>
                <p className="text-primary-700 text-sm">Making design available to everyone</p>
              </div>
              <div className="bg-secondary-50 p-4 rounded-lg">
                <h3 className="font-semibold text-secondary-900 mb-2">Innovation</h3>
                <p className="text-secondary-700 text-sm">Leading with AI technology</p>
              </div>
              <div className="bg-accent-50 p-4 rounded-lg">
                <h3 className="font-semibold text-accent-900 mb-2">Quality</h3>
                <p className="text-accent-700 text-sm">Professional results every time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
