import { Users, TrendingUp, Globe, Award, Star, ArrowRight } from 'lucide-react'

export default function VendorsHero() {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Active Partners',
    },
    {
      icon: TrendingUp,
      number: '150%',
      label: 'Avg. Revenue Growth',
    },
    {
      icon: Globe,
      number: '50+',
      label: 'Countries',
    },
    {
      icon: Award,
      number: '4.9/5',
      label: 'Partner Rating',
    },
  ]

  return (
    <section className="gradient-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary-600 font-semibold mb-6">
            <Users className="h-5 w-5" />
            <span>For Designers & Vendors</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Grow Your Business with{' '}
            <span className="text-gradient">AI-Powered Design</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Join our network of successful designers and vendors. Access cutting-edge AI tools, 
            reach new customers, and scale your business with our innovative platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-4 flex items-center space-x-2">
              <span>Join as Designer</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="btn-secondary text-lg px-8 py-4 flex items-center space-x-2">
              <span>Join as Vendor</span>
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

        {/* Why Partner with HOMY */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Partner with HOMY?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're revolutionizing the interior design industry, and we want you to be part of it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Scale Your Business</h3>
              <p className="text-gray-600">
                Access our AI-powered tools to serve more clients efficiently and grow your revenue.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Globe className="h-8 w-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reach New Markets</h3>
              <p className="text-gray-600">
                Connect with customers worldwide through our global platform and AI matching system.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Award className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Build Your Reputation</h3>
              <p className="text-gray-600">
                Showcase your work, get reviews, and build a strong portfolio on our platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
