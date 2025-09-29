'use client'

import { Users, Award, Heart, Lightbulb } from 'lucide-react'

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Chirag D Raghuvanshi',
      role: 'Founder',
      image: '/images/team/chirag-raguvanshi.jpg',
      expertise: 'Operations & Market Outreach',
      background: 'Operationalizing the Vision. Brings deep, real-world experience as COO @Dyndox Technologies, ensuring our AI workflow translates directly into scalable, predictable operations. Also leads market outreach through his platform, JAZBA TALK.',
    },
    {
      name: 'Samarth Sehgal',
      role: 'Founder',
      image: '/images/team/samarth-sehgal.jpg',
      expertise: 'AI Technology & Development',
      background: 'The Core Technical Moat. Leads the development of our Proprietary AI Knowledge Engine (PPA Filed). A specialized Tech Expert and Freelancer in AI-Based Tech, driving the 50% reduction in design churn.',
    },
    {
      name: 'Yashika Nailwal',
      role: 'CMO',
      image: '/images/team/yashika-nailwal.jpg',
      expertise: 'Digital Growth & Brand Development',
      background: 'The Scale Accelerator. Expert in digital growth and brand development, responsible for scaling our YouTube Content Loop into a dominant, low-cost user acquisition funnel (driving down CAC vs. industry standard).',
    },
    {
      name: 'Jatin Takkar',
      role: 'CFO',
      image: '/images/team/jatin-takkar.jpg',
      expertise: 'Financial Management & Capital Efficiency',
      background: 'Capital Efficiency & Growth. A vital blend of Tech Expertise and Financial Management, guaranteeing our low CAC model remains profitable and our capital ask is rigorously deployed for scale, not burn.',
    },
  ]

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Every decision we make is guided by what\'s best for our customers and their homes.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI and design technology.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe the best results come from combining AI with human creativity and expertise.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do, from code to customer service.',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            A Tech-First Team for Scalable Execution
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our leadership team combines deep technical expertise with proven operational experience, 
            ensuring our AI-powered platform delivers scalable, profitable growth.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary-100">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    e.currentTarget.style.display = 'none'
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement
                    if (nextElement) {
                      nextElement.style.display = 'flex'
                    }
                  }}
                />
                <div className="w-full h-full bg-gray-200 flex items-center justify-center" style={{display: 'none'}}>
                  <Users className="h-12 w-12 text-gray-400" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
              <p className="text-sm text-gray-600 mb-2">{member.expertise}</p>
              <p className="text-xs text-gray-500">{member.background}</p>
            </div>
          ))}
        </div>

        {/* Company Values */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary-600 mx-auto" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
