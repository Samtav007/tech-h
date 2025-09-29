import { Search, TrendingUp, Wrench, Palette, Youtube, Instagram, ArrowRight } from 'lucide-react'

export default function BlogHero() {
  const categories = [
    {
      icon: TrendingUp,
      name: 'Interior Trends',
      count: '45 articles',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Wrench,
      name: 'DIY Tips',
      count: '32 articles',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Palette,
      name: 'Design Hacks',
      count: '28 articles',
      color: 'bg-purple-100 text-purple-600',
    },
  ]

  const socialStats = [
    {
      platform: 'YouTube',
      icon: Youtube,
      followers: '50K+',
      description: 'Design tutorials & home tours',
      color: 'text-red-600',
    },
    {
      platform: 'Instagram',
      icon: Instagram,
      followers: '25K+',
      description: 'Daily design inspiration',
      color: 'text-pink-600',
    },
  ]

  return (
    <section className="gradient-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary-600 font-semibold mb-6">
            <Palette className="h-5 w-5" />
            <span>Design Inspiration Hub</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Space with{' '}
            <span className="text-gradient">Expert Design Tips</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover the latest interior design trends, DIY projects, and professional tips. 
            Get inspired by real transformations and learn from industry experts.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for design tips, trends, DIY projects..."
                className="w-full px-6 py-4 pl-12 pr-32 rounded-full border-2 border-gray-200 focus:border-primary-500 focus:outline-none text-lg"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
                <div className={`p-4 rounded-full w-16 h-16 ${category.color} mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="h-8 w-8 mx-auto" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {category.count}
                </p>
                
                <button className="text-primary-600 hover:text-primary-700 font-semibold flex items-center space-x-2 group-hover:translate-x-1 transition-transform">
                  <span>Explore Articles</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )
          })}
        </div>

        {/* Social Media Stats */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Follow Us for Daily Inspiration
            </h2>
            <p className="text-gray-600">
              Get the latest design trends, behind-the-scenes content, and exclusive tips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {socialStats.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href="#"
                  className="group flex items-center space-x-6 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="bg-white p-4 rounded-full group-hover:scale-110 transition-transform">
                    <Icon className={`h-8 w-8 ${social.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {social.platform}
                    </h3>
                    <div className="text-2xl font-bold text-primary-600 mb-1">
                      {social.followers}
                    </div>
                    <p className="text-gray-600 text-sm">{social.description}</p>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
