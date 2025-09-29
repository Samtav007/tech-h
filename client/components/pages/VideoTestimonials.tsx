import { Play, Star, MapPin, Clock, Users } from 'lucide-react'

export default function VideoTestimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'San Francisco, CA',
      project: 'Living Room Makeover',
      duration: '2:30',
      rating: 5,
      quote: 'The AI recommendations were incredible. It understood my style perfectly and suggested pieces I never would have thought of.',
      image: '/api/placeholder/300/300',
      views: '12.5K',
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      location: 'New York, NY',
      project: 'Small Apartment Design',
      duration: '3:15',
      rating: 5,
      quote: 'As a busy professional, I loved how quick and easy the process was. The results speak for themselves.',
      image: '/api/placeholder/300/300',
      views: '8.7K',
    },
    {
      id: 3,
      name: 'Emily Chen',
      location: 'Austin, TX',
      project: 'Bedroom Transformation',
      duration: '2:45',
      rating: 5,
      quote: 'HOMY helped me create my dream bedroom on a budget. The quality of recommendations was outstanding.',
      image: '/api/placeholder/300/300',
      views: '15.2K',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Video Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear directly from our customers about their transformation journey. 
            Watch real stories from real people who've experienced the HOMY difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors cursor-pointer">
                      <Play className="h-8 w-8 ml-1" />
                    </div>
                    <p className="text-sm font-medium">Watch Testimonial</p>
                    <p className="text-xs text-white/80">{testimonial.duration}</p>
                  </div>
                </div>
                
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
                  <span className="text-white text-sm">{testimonial.duration}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="h-3 w-3" />
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h5 className="font-semibold text-primary-600 mb-2">{testimonial.project}</h5>
                  <p className="text-gray-700 italic text-sm leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Users className="h-3 w-3" />
                    <span>{testimonial.views} views</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Videos CTA */}
        <div className="text-center mt-12">
          <button className="btn-secondary px-8 py-3">
            Watch More Testimonials
          </button>
        </div>
      </div>
    </section>
  )
}
