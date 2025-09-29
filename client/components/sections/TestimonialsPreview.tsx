import Link from 'next/link'
import { Star, Quote, Play, ArrowRight, Camera, Users, Award, TrendingUp } from 'lucide-react'

export default function TestimonialsPreview() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner',
      location: 'San Francisco, CA',
      rating: 5,
      text: 'HOMY transformed my living room completely! The AI recommendations were spot-on, and the shopping experience was seamless. I saved so much time and money.',
      image: '/api/placeholder/80/80',
      beforeImage: '/api/placeholder/200/150',
      afterImage: '/api/placeholder/200/150',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Interior Designer',
      location: 'New York, NY',
      rating: 5,
      text: 'As a professional designer, I was skeptical about AI tools. But HOMY has become an essential part of my workflow. It helps me present ideas to clients faster.',
      image: '/api/placeholder/80/80',
      beforeImage: '/api/placeholder/200/150',
      afterImage: '/api/placeholder/200/150',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Homeowner',
      location: 'Austin, TX',
      rating: 5,
      text: 'The before and after transformation was incredible! My bedroom went from cluttered and outdated to a modern sanctuary. The AI understood my style perfectly.',
      image: '/api/placeholder/80/80',
      beforeImage: '/api/placeholder/200/150',
      afterImage: '/api/placeholder/200/150',
    },
  ]

  const stats = [
    {
      icon: Users,
      number: '10,000+',
      label: 'Happy Customers',
      description: 'Satisfied homeowners and designers',
    },
    {
      icon: Camera,
      number: '50,000+',
      label: 'Transformations',
      description: 'Before & after makeovers',
    },
    {
      icon: Star,
      number: '4.9/5',
      label: 'Average Rating',
      description: 'Based on customer reviews',
    },
    {
      icon: Award,
      number: '95%',
      label: 'Satisfaction Rate',
      description: 'Would recommend to friends',
    },
  ]

  const caseStudies = [
    {
      title: 'Modern Living Room Makeover',
      client: 'Sarah & John Thompson',
      location: 'Seattle, WA',
      budget: '$5,000',
      duration: '2 weeks',
      beforeImage: '/api/placeholder/300/200',
      afterImage: '/api/placeholder/300/200',
      description: 'Transformed a dated 1980s living room into a modern, functional space using AI recommendations and curated products.',
    },
    {
      title: 'Small Apartment Optimization',
      client: 'Maria Garcia',
      location: 'Brooklyn, NY',
      budget: '$2,500',
      duration: '1 week',
      beforeImage: '/api/placeholder/300/200',
      afterImage: '/api/placeholder/300/200',
      description: 'Maximized space in a 500 sq ft apartment with smart storage solutions and multi-functional furniture.',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how HOMY has transformed thousands of spaces and lives. 
            Real customers, real results, real transformations.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <Icon className="h-8 w-8 text-primary-600 mx-auto" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            )
          })}
        </div>

        {/* Video Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Video Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{testimonial.location}</span>
                  <button className="flex items-center space-x-2 text-primary-600 hover:text-primary-700">
                    <Play className="h-4 w-4" />
                    <span className="text-sm font-medium">Watch Video</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Before & After Transformations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Before & After Transformations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-2 gap-4 p-6">
                  <div>
                    <div className="aspect-video bg-gray-200 rounded-lg mb-2 flex items-center justify-center">
                      <Camera className="h-8 w-8 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-600 text-center">Before</p>
                  </div>
                  <div>
                    <div className="aspect-video bg-gray-200 rounded-lg mb-2 flex items-center justify-center">
                      <Camera className="h-8 w-8 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-600 text-center">After</p>
                  </div>
                </div>
                
                <div className="p-6 border-t">
                  <h4 className="font-bold text-gray-900 mb-2">{study.title}</h4>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-500">Client</div>
                      <div className="font-semibold">{study.client}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Budget</div>
                      <div className="font-semibold">{study.budget}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Duration</div>
                      <div className="font-semibold">{study.duration}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Press Mentions */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Press Mentions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400 mb-2">Interior Design Magazine</div>
              <p className="text-gray-600 italic">"HOMY is revolutionizing interior design with AI"</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400 mb-2">Home & Garden</div>
              <p className="text-gray-600 italic">"The future of home design is here"</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-400 mb-2">TechCrunch</div>
              <p className="text-gray-600 italic">"AI meets interior design in this innovative platform"</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/testimonials" className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2">
            <span>View All Success Stories</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
