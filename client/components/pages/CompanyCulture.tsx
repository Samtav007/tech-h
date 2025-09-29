import { Heart, Users, Lightbulb, Trophy, Coffee, Globe, BookOpen, Gamepad2 } from 'lucide-react'

export default function CompanyCulture() {
  const values = [
    {
      icon: Heart,
      title: 'User-First Mindset',
      description: 'Every decision we make is guided by what\'s best for our users. We obsess over creating exceptional experiences.',
      color: 'bg-red-100 text-red-600',
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Creativity',
      description: 'We encourage bold thinking and aren\'t afraid to challenge the status quo. Innovation is in our DNA.',
      color: 'bg-yellow-100 text-yellow-600',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe the best solutions come from diverse teams working together. Everyone\'s voice matters.',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Trophy,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from our products to our customer service.',
      color: 'bg-purple-100 text-purple-600',
    },
  ]

  const cultureHighlights = [
    {
      icon: Coffee,
      title: 'Flexible Work Environment',
      description: 'Work from anywhere with flexible hours and unlimited PTO',
    },
    {
      icon: BookOpen,
      title: 'Learning & Development',
      description: '$2,000 annual learning budget and conference attendance',
    },
    {
      icon: Gamepad2,
      title: 'Fun & Games',
      description: 'Regular team events, game nights, and company retreats',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Help millions of people create beautiful spaces worldwide',
    },
  ]

  const teamStats = [
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Countries Represented' },
    { number: '60%', label: 'Women in Leadership' },
    { number: '95%', label: 'Employee Satisfaction' },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Culture & Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At HOMY, we're building more than just a company – we're creating a community 
            of passionate individuals who share our vision of democratizing interior design.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className={`p-4 rounded-full w-16 h-16 ${value.color} mx-auto mb-6`}>
                  <Icon className="h-8 w-8 mx-auto" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Culture Highlights */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What Makes HOMY Special
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cultureHighlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-full flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-600">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Team Stats */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Diverse Team
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Employee Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-gray-400" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Sarah Chen</h4>
                <p className="text-primary-600 text-sm">Senior AI Engineer</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Working at HOMY has been incredible. The team is passionate about using AI to solve real problems, 
              and I love seeing how our work directly impacts people's lives."
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-gray-400" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Mike Rodriguez</h4>
                <p className="text-primary-600 text-sm">Product Designer</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "The culture here is amazing. Everyone is supportive, collaborative, and genuinely excited about 
              what we're building. It's the best place I've ever worked."
            </p>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <Users className="h-6 w-6 text-gray-400" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Emily Johnson</h4>
                <p className="text-primary-600 text-sm">Marketing Manager</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "HOMY gives me the freedom to be creative and take ownership of my work. The growth opportunities 
              are endless, and the mission is something I'm proud to be part of."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
