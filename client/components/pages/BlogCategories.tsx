import { TrendingUp, Wrench, Palette, Home, Lightbulb, Camera, ArrowRight } from 'lucide-react'

export default function BlogCategories() {
  const categories = [
    {
      icon: TrendingUp,
      name: 'Interior Trends',
      count: 45,
      description: 'Latest design trends and style insights',
      color: 'from-blue-500 to-blue-600',
      recentPosts: [
        '10 AI Design Trends That Will Dominate 2024',
        'Sustainable Design: The Future of Interior Design',
        'Maximalism vs Minimalism: Which Style Wins?',
      ],
    },
    {
      icon: Wrench,
      name: 'DIY Tips',
      count: 32,
      description: 'Step-by-step home improvement guides',
      color: 'from-green-500 to-green-600',
      recentPosts: [
        'DIY: Transform Your Bedroom in 48 Hours',
        'How to Paint Like a Pro: Complete Guide',
        'Build Your Own Floating Shelves',
      ],
    },
    {
      icon: Palette,
      name: 'Design Hacks',
      count: 28,
      description: 'Professional tips and tricks',
      color: 'from-purple-500 to-purple-600',
      recentPosts: [
        '5 Design Hacks That Make Small Spaces Feel Huge',
        'Color Psychology in Interior Design',
        'Lighting Tricks That Transform Any Room',
      ],
    },
    {
      icon: Home,
      name: 'Room Makeovers',
      count: 38,
      description: 'Before and after transformations',
      color: 'from-orange-500 to-orange-600',
      recentPosts: [
        'Living Room Makeover: From Drab to Fab',
        'Kitchen Transformation on a Budget',
        'Small Apartment Optimization',
      ],
    },
    {
      icon: Lightbulb,
      name: 'Smart Home',
      count: 22,
      description: 'Technology meets interior design',
      color: 'from-yellow-500 to-yellow-600',
      recentPosts: [
        'Smart Lighting: The Future of Home Design',
        'Voice-Controlled Home Automation',
        'Energy-Efficient Design Solutions',
      ],
    },
    {
      icon: Camera,
      name: 'Photography',
      count: 18,
      description: 'How to photograph your space',
      color: 'from-pink-500 to-pink-600',
      recentPosts: [
        'How to Photograph Your Home Like a Pro',
        'Lighting Tips for Interior Photography',
        'Staging Your Home for Photos',
      ],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our comprehensive collection of design articles, tutorials, and inspiration 
            organized by topic and skill level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className={`bg-gradient-to-r ${category.color} p-8 text-white`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <Icon className="h-8 w-8" />
                    <div>
                      <h3 className="text-xl font-bold">{category.name}</h3>
                      <p className="text-white/80">{category.count} articles</p>
                    </div>
                  </div>
                  <p className="text-white/90">{category.description}</p>
                </div>

                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Recent Posts</h4>
                  <ul className="space-y-2 mb-6">
                    {category.recentPosts.map((post, postIndex) => (
                      <li key={postIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700 hover:text-primary-600 cursor-pointer transition-colors">
                          {post}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full btn-primary flex items-center justify-center space-x-2">
                    <span>View All Articles</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Popular Tags */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Popular Tags
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Modern Design',
              'Small Spaces',
              'Budget Decor',
              'Color Schemes',
              'Furniture',
              'Lighting',
              'Storage Solutions',
              'Wall Decor',
              'Flooring',
              'Kitchen Design',
              'Bathroom Ideas',
              'Outdoor Spaces',
              'Sustainable Design',
              'Smart Home',
              'Vintage Style',
            ].map((tag, index) => (
              <button
                key={index}
                className="bg-white hover:bg-primary-50 text-gray-700 hover:text-primary-600 px-4 py-2 rounded-full border border-gray-200 hover:border-primary-300 transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
