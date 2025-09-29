import { Users, Rocket, Heart, Award, TrendingUp, ArrowRight } from 'lucide-react'

export default function CareersHero() {
  const stats = [
    {
      icon: Users,
      number: '50+',
      label: 'Team Members',
    },
    {
      icon: Rocket,
      number: '3',
      label: 'Years Growing',
    },
    {
      icon: Heart,
      number: '95%',
      label: 'Employee Satisfaction',
    },
    {
      icon: Award,
      number: '4.8/5',
      label: 'Glassdoor Rating',
    },
  ]

  return (
    <section className="gradient-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary-600 font-semibold mb-6">
            <Users className="h-5 w-5" />
            <span>Join Our Team</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Build the Future of{' '}
            <span className="text-gradient">Interior Design</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Join a passionate team of designers, engineers, and innovators who are revolutionizing 
            how people create beautiful spaces. At HOMY, you'll work with cutting-edge AI technology 
            and help millions of people transform their homes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4 flex items-center space-x-2">
              <span>View Open Positions</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="btn-secondary text-lg px-8 py-4 flex items-center space-x-2">
              <span>Learn About Our Culture</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We're democratizing interior design by making professional-quality design 
                accessible to everyone through AI technology. Our team is building tools 
                that help people create beautiful, functional spaces regardless of their 
                budget or design experience.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <TrendingUp className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Innovation First</h4>
                    <p className="text-gray-600">We're always pushing the boundaries of what's possible with AI and design.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Heart className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">User-Centric</h4>
                    <p className="text-gray-600">Every decision we make is guided by what's best for our users.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Collaborative</h4>
                    <p className="text-gray-600">We believe the best solutions come from diverse teams working together.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-gray-600 font-medium">Team Video</p>
                  <p className="text-sm text-gray-500">Meet the HOMY Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
