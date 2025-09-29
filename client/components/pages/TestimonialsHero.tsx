import { Star, Users, Camera, Award, TrendingUp, ArrowRight } from 'lucide-react'

export default function TestimonialsHero() {
  const stats = [
    {
      icon: Users,
      number: '10,000+',
      label: 'Happy Customers',
    },
    {
      icon: Camera,
      number: '50,000+',
      label: 'Transformations',
    },
    {
      icon: Star,
      number: '4.9/5',
      label: 'Average Rating',
    },
    {
      icon: Award,
      number: '95%',
      label: 'Satisfaction Rate',
    },
  ]

  return (
    <section className="gradient-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary-600 font-semibold mb-6">
            <Star className="h-5 w-5" />
            <span>Success Stories</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Real Results from{' '}
            <span className="text-gradient">Real Customers</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            See how HOMY has transformed thousands of spaces and lives. From small apartments 
            to large homes, our AI-powered design platform delivers exceptional results every time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4 flex items-center space-x-2">
              <span>Start Your Transformation</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="btn-secondary text-lg px-8 py-4 flex items-center space-x-2">
              <span>View All Case Studies</span>
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

        {/* Featured Testimonial */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-2xl font-medium text-gray-900 mb-6 leading-relaxed">
                "HOMY completely transformed our living room. The AI recommendations were spot-on, 
                and the shopping experience was seamless. We saved so much time and money, and 
                the results exceeded our expectations."
              </blockquote>
              
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-gray-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Sarah & John Thompson</h4>
                  <p className="text-gray-600">Seattle, WA • Living Room Makeover</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-gray-600 font-medium">Before & After</p>
                  <p className="text-sm text-gray-500">Living Room Transformation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
