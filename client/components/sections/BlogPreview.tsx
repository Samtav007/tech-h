import Link from 'next/link'
import { Calendar, User, ArrowRight, TrendingUp, Wrench, Palette, Youtube, Instagram } from 'lucide-react'

export default function BlogPreview() {
  const featuredPosts = [
    {
      id: 1,
      title: '10 AI Design Trends That Will Dominate 2024',
      excerpt: 'Discover the latest interior design trends powered by AI insights and data from thousands of successful projects.',
      author: 'Sarah Chen',
      date: 'Dec 15, 2023',
      readTime: '5 min read',
      category: 'Trends',
      image: '/api/placeholder/400/250',
      featured: true,
    },
    {
      id: 2,
      title: 'DIY: Transform Your Bedroom in 48 Hours',
      excerpt: 'Step-by-step guide to completely revamp your bedroom using budget-friendly tips and AI-recommended products.',
      author: 'Mike Rodriguez',
      date: 'Dec 12, 2023',
      readTime: '8 min read',
      category: 'DIY Tips',
      image: '/api/placeholder/400/250',
      featured: false,
    },
    {
      id: 3,
      title: '5 Design Hacks That Make Small Spaces Feel Huge',
      excerpt: 'Professional designer secrets for maximizing space and creating the illusion of larger rooms.',
      author: 'Emily Johnson',
      date: 'Dec 10, 2023',
      readTime: '6 min read',
      category: 'Design Hacks',
      image: '/api/placeholder/400/250',
      featured: false,
    },
  ]

  const categories = [
    {
      icon: TrendingUp,
      name: 'Interior Trends',
      count: 45,
      description: 'Latest design trends and style insights',
    },
    {
      icon: Wrench,
      name: 'DIY Tips',
      count: 32,
      description: 'Step-by-step home improvement guides',
    },
    {
      icon: Palette,
      name: 'Design Hacks',
      count: 28,
      description: 'Professional tips and tricks',
    },
  ]

  const socialContent = [
    {
      platform: 'YouTube',
      icon: Youtube,
      title: 'Property Tours & Education',
      description: 'Watch our latest home tours and design tutorials',
      link: 'https://youtube.com/@homy',
      color: 'text-red-600',
    },
    {
      platform: 'Instagram',
      icon: Instagram,
      title: 'Daily Design Inspiration',
      description: 'Follow us for daily design tips and transformations',
      link: 'https://instagram.com/homy',
      color: 'text-pink-600',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Design Inspiration Hub
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest interior design trends, DIY tips, and professional insights. 
            Our blog is your go-to resource for all things home design.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto bg-gray-200 flex items-center justify-center">
                <TrendingUp className="h-16 w-16 text-gray-400" />
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                    {featuredPosts[0].category}
                  </span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                  {featuredPosts[0].title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPosts[0].excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPosts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPosts[0].date}</span>
                    </div>
                    <span>{featuredPosts[0].readTime}</span>
                  </div>
                </div>
                
                <Link href={`/blog/${featuredPosts[0].id}`} className="btn-primary">
                  Read Full Article
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Explore Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <Link
                  key={index}
                  href={`/blog?category=${category.name.toLowerCase().replace(' ', '-')}`}
                  className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mb-6 group-hover:bg-primary-200 transition-colors">
                    <Icon className="h-8 w-8 text-primary-600" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {category.name}
                  </h4>
                  
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{category.count} articles</span>
                    <ArrowRight className="h-4 w-4 text-primary-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Recent Posts */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Recent Articles</h3>
            <Link href="/blog" className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center space-x-2">
              <span>View All</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredPosts.slice(1).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <Palette className="h-12 w-12 text-gray-400" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      {post.category}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-3">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Social Media Integration */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Follow Us for More Inspiration</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {socialContent.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className={`p-3 rounded-full bg-gray-200 group-hover:bg-white transition-colors`}>
                    <Icon className={`h-6 w-6 ${social.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {social.title}
                    </h4>
                    <p className="text-sm text-gray-600">{social.description}</p>
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
