import { Calendar, User, Clock, ArrowRight, Filter, Grid, List } from 'lucide-react'

export default function RecentPosts() {
  const recentPosts = [
    {
      id: 4,
      title: 'Sustainable Design: The Future of Interior Design',
      excerpt: 'Learn how to create beautiful spaces while being environmentally conscious. Tips for eco-friendly materials and energy-efficient design.',
      author: 'David Kim',
      date: 'Dec 8, 2023',
      readTime: '7 min read',
      category: 'Interior Trends',
      image: '/api/placeholder/300/200',
      views: '5.2K',
    },
    {
      id: 5,
      title: 'How to Choose the Perfect Paint Color',
      excerpt: 'Master the art of color selection with our comprehensive guide. From undertones to lighting considerations.',
      author: 'Lisa Wang',
      date: 'Dec 6, 2023',
      readTime: '5 min read',
      category: 'Design Hacks',
      image: '/api/placeholder/300/200',
      views: '7.8K',
    },
    {
      id: 6,
      title: 'Smart Home Integration for Modern Living',
      excerpt: 'Discover how to seamlessly integrate smart technology into your home design without compromising aesthetics.',
      author: 'Alex Chen',
      date: 'Dec 4, 2023',
      readTime: '9 min read',
      category: 'Smart Home',
      image: '/api/placeholder/300/200',
      views: '4.1K',
    },
    {
      id: 7,
      title: 'Maximalism vs Minimalism: Which Style Wins?',
      excerpt: 'Explore the pros and cons of both design philosophies and find the perfect balance for your space.',
      author: 'Maria Garcia',
      date: 'Dec 2, 2023',
      readTime: '6 min read',
      category: 'Interior Trends',
      image: '/api/placeholder/300/200',
      views: '6.5K',
    },
    {
      id: 8,
      title: 'Kitchen Transformation on a Budget',
      excerpt: 'See how we transformed a dated kitchen into a modern masterpiece for under $5,000 using smart design choices.',
      author: 'Tom Wilson',
      date: 'Nov 30, 2023',
      readTime: '10 min read',
      category: 'Room Makeovers',
      image: '/api/placeholder/300/200',
      views: '9.3K',
    },
    {
      id: 9,
      title: 'Lighting Tricks That Transform Any Room',
      excerpt: 'Professional lighting techniques that can make any space feel larger, cozier, or more dramatic.',
      author: 'Sarah Chen',
      date: 'Nov 28, 2023',
      readTime: '4 min read',
      category: 'Design Hacks',
      image: '/api/placeholder/300/200',
      views: '8.7K',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with our newest design tips, trends, and inspiration
            </p>
          </div>
          
          <div className="flex items-center space-x-4 mt-6 sm:mt-0">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>All Categories</option>
                <option>Interior Trends</option>
                <option>DIY Tips</option>
                <option>Design Hacks</option>
                <option>Room Makeovers</option>
                <option>Smart Home</option>
              </select>
            </div>
            
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button className="p-2 bg-primary-600 text-white">
                <Grid className="h-4 w-4" />
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-300 rounded-lg mx-auto mb-2"></div>
                    <p className="text-sm text-gray-500">Article Image</p>
                  </div>
                </div>
                
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors cursor-pointer">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <button className="w-full btn-primary text-sm flex items-center justify-center space-x-2">
                  <span>Read Article</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn-secondary px-8 py-3">
            Load More Articles
          </button>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Never Miss a Design Tip
          </h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest design trends, DIY tips, and exclusive content 
            delivered straight to your inbox every week.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/20 text-gray-900"
            />
            <button className="bg-white text-primary-600 hover:bg-gray-50 px-6 py-3 rounded-r-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
