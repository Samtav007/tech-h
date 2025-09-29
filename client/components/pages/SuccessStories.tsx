import { Star, TrendingUp, Users, Award, Quote } from 'lucide-react'

export default function SuccessStories() {
  const designerStories = [
    {
      name: 'Sarah Chen',
      location: 'San Francisco, CA',
      specialty: 'Modern Minimalist',
      experience: '5 years',
      image: '/api/placeholder/80/80',
      quote: 'HOMY has transformed my business. I can now serve 3x more clients with the same amount of time, thanks to their AI tools.',
      stats: {
        revenue: '+200%',
        clients: '+150%',
        rating: '4.9/5',
      },
    },
    {
      name: 'Mike Rodriguez',
      location: 'New York, NY',
      specialty: 'Traditional Classic',
      experience: '8 years',
      image: '/api/placeholder/80/80',
      quote: 'The AI matching system brings me clients who are serious about investing in quality design. My conversion rate has doubled.',
      stats: {
        revenue: '+180%',
        clients: '+120%',
        rating: '4.8/5',
      },
    },
  ]

  const vendorStories = [
    {
      name: 'Modern Furniture Co.',
      location: 'Los Angeles, CA',
      specialty: 'Contemporary Furniture',
      experience: '10 years',
      image: '/api/placeholder/80/80',
      quote: 'Our sales have increased by 300% since joining HOMY. The AI recommendations help customers find our products.',
      stats: {
        sales: '+300%',
        reach: '+500%',
        rating: '4.9/5',
      },
    },
    {
      name: 'Artisan Lighting',
      location: 'Portland, OR',
      specialty: 'Handcrafted Lighting',
      experience: '15 years',
      image: '/api/placeholder/80/80',
      quote: 'HOMY has helped us reach customers we never would have found on our own. The global reach is incredible.',
      stats: {
        sales: '+250%',
        reach: '+400%',
        rating: '4.8/5',
      },
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our partners have grown their businesses and achieved remarkable results 
            with our AI-powered platform.
          </p>
        </div>

        {/* Designer Success Stories */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Designer Success Stories
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designerStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{story.name}</h4>
                    <p className="text-primary-600 font-semibold">{story.specialty}</p>
                    <p className="text-sm text-gray-600">{story.location} • {story.experience}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <Quote className="h-6 w-6 text-primary-600 mb-3" />
                  <p className="text-gray-700 italic">"{story.quote}"</p>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">{story.stats.revenue}</div>
                    <div className="text-sm text-gray-600">Revenue Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{story.stats.clients}</div>
                    <div className="text-sm text-gray-600">More Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600 mb-1">{story.stats.rating}</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vendor Success Stories */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Vendor Success Stories
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vendorStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <Award className="h-8 w-8 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{story.name}</h4>
                    <p className="text-secondary-600 font-semibold">{story.specialty}</p>
                    <p className="text-sm text-gray-600">{story.location} • {story.experience}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <Quote className="h-6 w-6 text-secondary-600 mb-3" />
                  <p className="text-gray-700 italic">"{story.quote}"</p>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">{story.stats.sales}</div>
                    <div className="text-sm text-gray-600">Sales Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{story.stats.reach}</div>
                    <div className="text-sm text-gray-600">Market Reach</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600 mb-1">{story.stats.rating}</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Overall Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Partner Success Metrics
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary-600 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">150%</div>
              <div className="text-gray-600">Average Revenue Growth</div>
            </div>
            
            <div className="text-center">
              <div className="bg-secondary-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary-600 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">200%</div>
              <div className="text-gray-600">More Customers</div>
            </div>
            
            <div className="text-center">
              <div className="bg-accent-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Star className="h-8 w-8 text-accent-600 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">4.9/5</div>
              <div className="text-gray-600">Partner Satisfaction</div>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600 mx-auto" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
              <div className="text-gray-600">Retention Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
