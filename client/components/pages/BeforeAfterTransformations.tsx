'use client'

import { Camera, ArrowRight, Star, MapPin, DollarSign, Clock, Users } from 'lucide-react'

export default function BeforeAfterTransformations() {
  const transformations = [
    {
      id: 1,
      title: 'Modern Living Room Makeover',
      client: 'Sarah & John Thompson',
      location: 'Seattle, WA',
      budget: '$5,000',
      duration: '2 weeks',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      description: 'Transformed a dated 1980s living room into a modern, functional space using AI recommendations and curated products.',
      rating: 5,
      tags: ['Modern', 'Living Room', 'Budget-Friendly'],
    },
    {
      id: 2,
      title: 'Small Apartment Optimization',
      client: 'Maria Garcia',
      location: 'Brooklyn, NY',
      budget: '$2,500',
      duration: '1 week',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      description: 'Maximized space in a 500 sq ft apartment with smart storage solutions and multi-functional furniture.',
      rating: 5,
      tags: ['Small Space', 'Storage', 'Multi-functional'],
    },
    {
      id: 3,
      title: 'Kitchen Renovation on a Budget',
      client: 'David & Lisa Kim',
      location: 'Portland, OR',
      budget: '$8,000',
      duration: '3 weeks',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      description: 'Complete kitchen transformation using smart design choices and budget-friendly materials.',
      rating: 5,
      tags: ['Kitchen', 'Renovation', 'Budget'],
    },
    {
      id: 4,
      title: 'Bedroom Sanctuary Creation',
      client: 'Emily Rodriguez',
      location: 'Austin, TX',
      budget: '$3,200',
      duration: '1 week',
      beforeImage: '/api/placeholder/400/300',
      afterImage: '/api/placeholder/400/300',
      description: 'Created a peaceful bedroom retreat with calming colors and smart organization solutions.',
      rating: 5,
      tags: ['Bedroom', 'Calming', 'Organization'],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Before & After Transformations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See the incredible transformations our customers have achieved with HOMY. 
            From small updates to complete makeovers, every project tells a story of transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {transformations.map((transformation) => (
            <div key={transformation.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              {/* Before/After Images */}
              <div className="grid grid-cols-2 gap-4 p-6">
                <div>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                    <div className="text-center">
                      <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">Before</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 text-center font-medium">Before</p>
                </div>
                <div>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                    <div className="text-center">
                      <Camera className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500">After</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 text-center font-medium">After</p>
                </div>
              </div>

              <div className="p-6 border-t">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {transformation.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {transformation.description}
                </p>

                {/* Project Details */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">{transformation.client}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">{transformation.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <DollarSign className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">{transformation.budget}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">{transformation.duration}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(transformation.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">Perfect 5-star rating</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {transformation.tags.map((tag, index) => (
                    <span key={index} className="bg-primary-100 text-primary-600 px-2 py-1 rounded text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full btn-primary flex items-center justify-center space-x-2">
                  <span>View Full Case Study</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Transformations */}
        <div className="text-center mt-12">
          <button className="btn-secondary px-8 py-3">
            View All Transformations
          </button>
        </div>
      </div>
    </section>
  )
}
