import { ExternalLink, Star, Calendar, Users } from 'lucide-react'

export default function PressMentions() {
  const pressMentions = [
    {
      id: 1,
      publication: 'Interior Design Magazine',
      title: 'HOMY is Revolutionizing Interior Design with AI',
      excerpt: 'The startup is making professional interior design accessible to everyone through cutting-edge AI technology.',
      date: 'Dec 10, 2023',
      author: 'Jennifer Smith',
      image: '/api/placeholder/300/200',
      category: 'Technology',
      readTime: '5 min read',
    },
    {
      id: 2,
      publication: 'Home & Garden',
      title: 'The Future of Home Design is Here',
      excerpt: 'HOMY\'s AI-powered platform is changing how people approach interior design, making it faster and more affordable.',
      date: 'Dec 5, 2023',
      author: 'Michael Brown',
      image: '/api/placeholder/300/200',
      category: 'Innovation',
      readTime: '4 min read',
    },
    {
      id: 3,
      publication: 'TechCrunch',
      title: 'AI Meets Interior Design in This Innovative Platform',
      excerpt: 'HOMY raises $10M to expand its AI-powered interior design platform that\'s already transforming thousands of homes.',
      date: 'Nov 28, 2023',
      author: 'Sarah Wilson',
      image: '/api/placeholder/300/200',
      category: 'Startup',
      readTime: '6 min read',
    },
    {
      id: 4,
      publication: 'Architectural Digest',
      title: 'How AI is Democratizing Interior Design',
      excerpt: 'HOMY\'s platform makes professional design accessible to everyone, regardless of budget or location.',
      date: 'Nov 20, 2023',
      author: 'David Lee',
      image: '/api/placeholder/300/200',
      category: 'Design',
      readTime: '7 min read',
    },
  ]

  const awards = [
    {
      title: 'Best AI Innovation 2023',
      organization: 'Design Innovation Awards',
      year: '2023',
    },
    {
      title: 'Startup of the Year',
      organization: 'TechCrunch Disrupt',
      year: '2023',
    },
    {
      title: 'Best User Experience',
      organization: 'UX Design Awards',
      year: '2023',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Press & Recognition
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what industry experts and media outlets are saying about HOMY. 
            We're proud to be recognized for our innovation and impact.
          </p>
        </div>

        {/* Press Mentions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {pressMentions.map((mention) => (
            <article key={mention.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-2"></div>
                    <p className="text-sm text-gray-500">Article Image</p>
                  </div>
                </div>
                
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded text-xs font-semibold">
                    {mention.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm font-semibold text-primary-600">{mention.publication}</span>
                  <ExternalLink className="h-3 w-3 text-gray-400" />
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors cursor-pointer">
                  {mention.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {mention.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <Users className="h-3 w-3" />
                      <span>{mention.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{mention.date}</span>
                    </div>
                  </div>
                  <span>{mention.readTime}</span>
                </div>

                <button className="w-full btn-primary text-sm flex items-center justify-center space-x-2">
                  <span>Read Full Article</span>
                  <ExternalLink className="h-3 w-3" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Awards & Recognition */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Awards & Recognition
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-100 p-6 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  <Star className="h-10 w-10 text-primary-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{award.title}</h4>
                <p className="text-primary-600 font-semibold mb-1">{award.organization}</p>
                <p className="text-gray-600 text-sm">{award.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Media Kit */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Media Resources
          </h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Press kit, high-resolution images, and company information for media inquiries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-colors">
              Download Press Kit
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-6 rounded-lg transition-colors">
              Contact Media Team
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
