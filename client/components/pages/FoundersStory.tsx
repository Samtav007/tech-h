'use client'

import { GraduationCap, Briefcase, Lightbulb, Users, Award, Globe } from 'lucide-react'

export default function FoundersStory() {
  const founders = [
    {
      name: 'Samarth Sehgal',
      role: 'Founder',
      image: '/images/team/samarth-sehgal.jpg',
      background: {
        education: 'AI Technology & Development',
        experience: 'Specialized Tech Expert and Freelancer in AI-Based Tech',
        expertise: 'Proprietary AI Knowledge Engine, Technical Innovation',
      },
      story: 'Samarth is the Core Technical Moat of hömy. He leads the development of our Proprietary AI Knowledge Engine (PPA Filed) and drives the 50% reduction in design churn through cutting-edge AI technology.',
      achievements: [
        'Developed Proprietary AI Knowledge Engine (PPA Filed)',
        'Achieved 50% reduction in design churn',
        'Specialized AI-Based Tech Expert',
      ],
    },
    {
      name: 'Chirag D Raghuvanshi',
      role: 'Founder',
      image: '/images/team/chirag-raguvanshi.jpg',
      background: {
        education: 'Operations & Market Strategy',
        experience: 'COO @Dyndox Technologies, Market Outreach Expert',
        expertise: 'Operational Excellence, Scalable Operations, Market Growth',
      },
      story: 'Chirag operationalizes the vision at hömy. He brings deep, real-world experience as COO @Dyndox Technologies, ensuring our AI workflow translates directly into scalable, predictable operations. He also leads market outreach through his platform, JAZBA TALK.',
      achievements: [
        'Former COO @Dyndox Technologies',
        'Founder of JAZBA TALK platform',
        'Expert in scalable operations and market outreach',
      ],
    },
  ]

  const companyJourney = [
    {
      year: '2023',
      title: 'The Vision',
      description: 'Chirag and Samarth identified the opportunity to revolutionize interior design through AI technology and scalable operations.',
      icon: Lightbulb,
    },
    {
      year: '2024 Q1',
      title: 'Team Assembly',
      description: 'Built our tech-first leadership team with Yashika (CMO) and Jatin (CFO) to drive scalable execution.',
      icon: Users,
    },
    {
      year: '2024 Q2',
      title: 'AI Engine Development',
      description: 'Developed our Proprietary AI Knowledge Engine (PPA Filed) achieving 50% reduction in design churn.',
      icon: Award,
    },
    {
      year: '2024 Q3',
      title: 'Platform Launch',
      description: 'Launched hömy with integrated AI design tools, YouTube content loop, and low-cost user acquisition.',
      icon: Globe,
    },
    {
      year: '2024 Q4',
      title: 'Scale & Growth',
      description: 'Expanding our market reach through JAZBA TALK platform and preparing for next phase of growth.',
      icon: Briefcase,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet the Founders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Two visionary founders leading a tech-first team on a mission to revolutionize interior design 
            through AI innovation and scalable operations.
          </p>
        </div>

        {/* Founders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {founders.map((founder, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-primary-100">
                  <img 
                    src={founder.image} 
                    alt={founder.name}
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
                    <Users className="h-16 w-16 text-gray-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                <p className="text-primary-600 font-semibold">{founder.role}</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <GraduationCap className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Education</h4>
                    <p className="text-gray-600 text-sm">{founder.background.education}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Briefcase className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Experience</h4>
                    <p className="text-gray-600 text-sm">{founder.background.experience}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="h-5 w-5 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Expertise</h4>
                    <p className="text-gray-600 text-sm">{founder.background.expertise}</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {founder.story}
              </p>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {founder.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      <span className="text-gray-600 text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Company Journey */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
            
            <div className="space-y-8">
              {companyJourney.map((milestone, index) => {
                const Icon = milestone.icon
                return (
                  <div key={index} className="relative flex items-start space-x-6">
                    <div className="bg-primary-600 p-3 rounded-full flex-shrink-0 relative z-10">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-2">
                        <span className="text-primary-600 font-semibold">{milestone.year}</span>
                        <h4 className="text-xl font-bold text-gray-900">{milestone.title}</h4>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
