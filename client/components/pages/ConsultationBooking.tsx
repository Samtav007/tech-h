'use client'

import { useState } from 'react'
import { Calendar, Clock, Users, Star, CheckCircle, ArrowRight } from 'lucide-react'

export default function ConsultationBooking() {
  const [selectedType, setSelectedType] = useState('video')

  const consultationTypes = [
    {
      id: 'video',
      name: 'Video Consultation',
      duration: '60 minutes',
      price: '$99',
      description: 'One-on-one video call with a professional designer',
      features: [
        'Personalized design advice',
        'Room layout suggestions',
        'Color scheme recommendations',
        'Product recommendations',
        'Follow-up email summary',
      ],
    },
    {
      id: 'in-person',
      name: 'In-Person Visit',
      duration: '2 hours',
      price: '$199',
      description: 'Designer visits your home for hands-on consultation',
      features: [
        'On-site room assessment',
        'Detailed measurements',
        'Material samples',
        'Immediate feedback',
        'Written design plan',
      ],
    },
    {
      id: 'design-review',
      name: 'Design Review',
      duration: '30 minutes',
      price: '$49',
      description: 'Review and refine your AI-generated designs',
      features: [
        'AI design analysis',
        'Improvement suggestions',
        'Product alternatives',
        'Budget optimization',
        'Implementation tips',
      ],
    },
  ]

  const designers = [
    {
      name: 'Sarah Chen',
      specialty: 'Modern & Minimalist',
      experience: '8 years',
      rating: 4.9,
      reviews: 127,
      image: '/api/placeholder/80/80',
    },
    {
      name: 'Mike Rodriguez',
      specialty: 'Traditional & Classic',
      experience: '12 years',
      rating: 4.8,
      reviews: 89,
      image: '/api/placeholder/80/80',
    },
    {
      name: 'Emily Johnson',
      specialty: 'Eclectic & Bohemian',
      experience: '6 years',
      rating: 4.9,
      reviews: 156,
      image: '/api/placeholder/80/80',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Book a Design Consultation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get personalized advice from our network of professional interior designers. 
            Choose the consultation type that works best for your needs and schedule.
          </p>
        </div>

        {/* Consultation Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {consultationTypes.map((type) => (
            <div
              key={type.id}
              className={`bg-white rounded-2xl p-8 shadow-lg cursor-pointer transition-all ${
                selectedType === type.id
                  ? 'ring-2 ring-primary-500 shadow-xl'
                  : 'hover:shadow-xl'
              }`}
              onClick={() => setSelectedType(type.id)}
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{type.name}</h3>
                <div className="flex items-center justify-center space-x-4 mb-2">
                  <div className="flex items-center space-x-1 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{type.duration}</span>
                  </div>
                  <div className="text-2xl font-bold text-primary-600">{type.price}</div>
                </div>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </div>

              <ul className="space-y-2 mb-6">
                {type.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full ${
                selectedType === type.id ? 'btn-primary' : 'btn-secondary'
              }`}>
                {selectedType === type.id ? 'Selected' : 'Select'}
              </button>
            </div>
          ))}
        </div>

        {/* Available Designers */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Meet Our Designers
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {designers.map((designer, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{designer.name}</h4>
                    <p className="text-primary-600 text-sm">{designer.specialty}</p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Experience</span>
                    <span className="font-medium">{designer.experience}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Rating</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{designer.rating}</span>
                      <span className="text-gray-500">({designer.reviews})</span>
                    </div>
                  </div>
                </div>
                
                <button className="w-full btn-secondary text-sm">
                  Book with {designer.name.split(' ')[0]}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Booking Process */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              How to Book Your Consultation
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">1. Choose Your Time</h4>
                  <p className="text-gray-600">
                    Select from available time slots that work with your schedule. 
                    We offer flexible booking including evenings and weekends.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-secondary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">2. Select Your Designer</h4>
                  <p className="text-gray-600">
                    Choose from our network of vetted professionals based on their 
                    specialty, experience, and availability.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-accent-100 p-3 rounded-full">
                  <CheckCircle className="h-6 w-6 text-accent-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">3. Prepare & Meet</h4>
                  <p className="text-gray-600">
                    We'll send you a preparation guide. Then meet with your designer 
                    and get personalized advice for your space.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-xl font-bold text-gray-900 mb-6">Ready to Book?</h4>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Consultation Type</span>
                <span className="font-semibold">
                  {consultationTypes.find(t => t.id === selectedType)?.name}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Duration</span>
                <span className="font-semibold">
                  {consultationTypes.find(t => t.id === selectedType)?.duration}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Price</span>
                <span className="font-bold text-primary-600">
                  {consultationTypes.find(t => t.id === selectedType)?.price}
                </span>
              </div>
            </div>

            <button className="w-full btn-primary mb-4 flex items-center justify-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Book Now</span>
            </button>
            
            <p className="text-sm text-gray-500 text-center">
              Free cancellation up to 24 hours before your appointment
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
