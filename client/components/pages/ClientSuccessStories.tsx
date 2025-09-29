import { Quote, Star, TrendingUp, Users, Award, ArrowRight } from 'lucide-react'

export default function ClientSuccessStories() {
  const successStories = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Marketing Manager',
      location: 'San Francisco, CA',
      project: 'Complete Home Makeover',
      image: '/api/placeholder/80/80',
      quote: 'HOMY transformed our entire home in just 3 weeks. The AI recommendations were spot-on, and the shopping experience was seamless. We saved thousands compared to hiring a traditional designer.',
      results: {
        timeSaved: '80%',
        costSaved: '$15,000',
        satisfaction: '100%',
      },
      rating: 5,
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      role: 'Software Engineer',
      location: 'New York, NY',
      project: 'Small Apartment Design',
      image: '/api/placeholder/80/80',
      quote: 'As a busy professional, I loved how quick and easy the process was. The AI understood my minimalist style and suggested perfect pieces. The results exceeded my expectations.',
      results: {
        timeSaved: '90%',
        costSaved: '$8,000',
        satisfaction: '100%',
      },
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Johnson',
      role: 'Teacher',
      location: 'Austin, TX',
      project: 'Budget Bedroom Makeover',
      image: '/api/placeholder/80/80',
      quote: 'I was skeptical about AI design, but HOMY proved me wrong. They helped me create my dream bedroom on a tight budget. The quality of recommendations was outstanding.',
      results: {
        timeSaved: '75%',
        costSaved: '$3,500',
        satisfaction: '100%',
      },
      rating: 5,
    },
  ]

  const metrics = [
    {
      icon: TrendingUp,
      number: '150%',
      label: 'Average Time Savings',
      description: 'Compared to traditional design process',
    },
    {
      icon: Users,
      number: '95%',
      label: 'Customer Satisfaction',
      description: 'Would recommend to friends',
    },
    {
      icon: Award,
      number: '4.9/5',
      label: 'Average Rating',
      description: 'Based on 10,000+ reviews',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real customers who've transformed their spaces and lives with HOMY. 
            Discover how our AI-powered platform delivers exceptional results every time.
          </p>
        </div>

        {/* Success Stories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {successStories.map((story) => (
            <div key={story.id} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-gray-400" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{story.name}</h4>
                  <p className="text-primary-600 font-semibold">{story.role}</p>
                  <p className="text-sm text-gray-600">{story.location}</p>
                </div>
              </div>

              <div className="mb-6">
                <Quote className="h-6 w-6 text-primary-600 mb-3" />
                <p className="text-gray-700 italic leading-relaxed">
                  "{story.quote}"
                </p>
              </div>

              <div className="mb-6">
                <h5 className="font-semibold text-gray-900 mb-3">Project Results</h5>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-600">{story.results.timeSaved}</div>
                    <div className="text-xs text-gray-600">Time Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{story.results.costSaved}</div>
                    <div className="text-xs text-gray-600">Cost Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-purple-600">{story.results.satisfaction}</div>
                    <div className="text-xs text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">{story.project}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">Success Metrics</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white mx-auto" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{metric.number}</div>
                  <div className="font-semibold mb-2">{metric.label}</div>
                  <div className="text-primary-100 text-sm">{metric.description}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Create Your Success Story?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their spaces with HOMY. 
            Start your transformation journey today.
          </p>
          <button className="btn-primary px-8 py-4 flex items-center space-x-2 mx-auto">
            <span>Start Your Transformation</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
