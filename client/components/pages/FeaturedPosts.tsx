import { Calendar, User, Clock, Star, ArrowRight, TrendingUp, Eye } from 'lucide-react'

export default function FeaturedPosts() {
  const featuredPosts = [
    {
      id: 1,
      title: '10 AI Design Trends That Will Dominate 2024',
      excerpt: 'Discover the latest interior design trends powered by AI insights and data from thousands of successful projects. From sustainable materials to smart home integration.',
      author: 'Sarah Chen',
      date: 'Dec 15, 2023',
      readTime: '8 min read',
      category: 'Interior Trends',
      image: '/api/placeholder/600/400',
      featured: true,
      views: '12.5K',
      rating: 4.9,
      tags: ['AI Design', 'Trends 2024', 'Future of Design'],
    },
    {
      id: 2,
      title: 'DIY: Transform Your Bedroom in 48 Hours',
      excerpt: 'Step-by-step guide to completely revamp your bedroom using budget-friendly tips and AI-recommended products. Perfect for weekend warriors.',
      author: 'Mike Rodriguez',
      date: 'Dec 12, 2023',
      readTime: '12 min read',
      category: 'DIY Tips',
      image: '/api/placeholder/600/400',
      featured: true,
      views: '8.2K',
      rating: 4.8,
      tags: ['DIY', 'Bedroom', 'Budget Decor'],
    },
    {
      id: 3,
      title: '5 Design Hacks That Make Small Spaces Feel Huge',
      excerpt: 'Professional designer secrets for maximizing space and creating the illusion of larger rooms. These tricks work in any space under 500 sq ft.',
      author: 'Emily Johnson',
      date: 'Dec 10, 2023',
      readTime: '6 min read',
      category: 'Design Hacks',
      image: '/api/placeholder/600/400',
      featured: true,
      views: '15.3K',
      rating: 4.9,
      tags: ['Small Spaces', 'Design Hacks', 'Space Optimization'],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary-600 font-semibold mb-4">
            <TrendingUp className="h-5 w-5" />
            <span>Featured Articles</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Most Popular This Week
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our most-read articles featuring the latest trends, expert tips, and inspiring transformations.
          </p>
        </div>

        <div className="space-y-12">
          {featuredPosts.map((post, index) => (
            <div key={post.id} className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
              index === 0 ? 'lg:flex' : 'lg:flex'
            }`}>
              {/* Featured Badge */}
              {post.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Featured</span>
                  </div>
                </div>
              )}

              {/* Image */}
              <div className={`${index === 0 ? 'lg:w-1/2' : 'lg:w-1/3'} relative`}>
                <div className="aspect-video lg:aspect-auto bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-2"></div>
                    <p className="text-sm text-gray-500">Featured Image</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index === 0 ? 'lg:w-1/2' : 'lg:w-2/3'} p-8 lg:p-12`}>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Eye className="h-4 w-4" />
                    <span className="text-sm">{post.views} views</span>
                  </div>
                </div>

                <h3 className={`font-bold text-gray-900 mb-4 hover:text-primary-600 transition-colors cursor-pointer ${
                  index === 0 ? 'text-3xl lg:text-4xl' : 'text-2xl'
                }`}>
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Meta Info */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-gray-700">{post.rating}</span>
                  </div>
                </div>

                <button className="btn-primary flex items-center space-x-2">
                  <span>Read Full Article</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Featured */}
        <div className="text-center mt-12">
          <button className="btn-secondary px-8 py-3">
            View All Featured Articles
          </button>
        </div>
      </div>
    </section>
  )
}
