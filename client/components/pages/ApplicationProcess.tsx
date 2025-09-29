import { FileText, Users, MessageCircle, CheckCircle, ArrowRight, Clock, Mail, Phone } from 'lucide-react'

export default function ApplicationProcess() {
  const steps = [
    {
      number: 1,
      title: 'Submit Application',
      description: 'Fill out our application form and upload your resume',
      icon: FileText,
      duration: '5 minutes',
      details: ['Complete application form', 'Upload resume and portfolio', 'Answer screening questions'],
    },
    {
      number: 2,
      title: 'Initial Review',
      description: 'Our team reviews your application and qualifications',
      icon: Users,
      duration: '2-3 days',
      details: ['HR team review', 'Skills assessment', 'Cultural fit evaluation'],
    },
    {
      number: 3,
      title: 'Phone/Video Interview',
      description: '30-minute conversation with our hiring team',
      icon: Phone,
      duration: '30 minutes',
      details: ['Get to know each other', 'Discuss role and expectations', 'Answer your questions'],
    },
    {
      number: 4,
      title: 'Technical/Design Review',
      description: 'Showcase your skills with a practical assessment',
      icon: MessageCircle,
      duration: '1-2 hours',
      details: ['Technical challenge or design task', 'Portfolio review', 'Skills demonstration'],
    },
    {
      number: 5,
      title: 'Final Interview',
      description: 'Meet the team and discuss your potential impact',
      icon: Users,
      duration: '1 hour',
      details: ['Meet your future team', 'Discuss company culture', 'Final questions and answers'],
    },
    {
      number: 6,
      title: 'Decision & Offer',
      description: 'We make our decision and extend an offer',
      icon: CheckCircle,
      duration: '1-2 days',
      details: ['Team deliberation', 'Reference checks', 'Offer letter and negotiation'],
    },
  ]

  const tips = [
    {
      title: 'Research HOMY',
      description: 'Learn about our mission, products, and culture before applying',
    },
    {
      title: 'Show Your Passion',
      description: 'Demonstrate genuine interest in interior design and AI technology',
    },
    {
      title: 'Prepare Examples',
      description: 'Have specific examples of your work and achievements ready',
    },
    {
      title: 'Ask Questions',
      description: 'Come prepared with thoughtful questions about the role and company',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Application Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our hiring process is designed to be transparent, efficient, and fair. 
            Here's what you can expect when you apply to join our team.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-primary-200 z-0"></div>
                  )}
                  
                  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                        {step.number}
                      </div>
                      <div className="bg-primary-100 p-3 rounded-full">
                        <Icon className="h-6 w-6 text-primary-600" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {step.description}
                    </p>
                    
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                      <Clock className="h-4 w-4" />
                      <span>{step.duration}</span>
                    </div>
                    
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Typical Timeline
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary-600 mx-auto" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Application to Interview</h4>
              <p className="text-gray-600">3-5 business days</p>
            </div>
            
            <div className="text-center">
              <div className="bg-secondary-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Users className="h-8 w-8 text-secondary-600 mx-auto" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Interview Process</h4>
              <p className="text-gray-600">1-2 weeks</p>
            </div>
            
            <div className="text-center">
              <div className="bg-accent-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-accent-600 mx-auto" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Decision & Offer</h4>
              <p className="text-gray-600">1-2 business days</p>
            </div>
          </div>
        </div>

        {/* Application Tips */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Application Tips
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tips.map((tip, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {tip.title}
                </h4>
                <p className="text-gray-600">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Join Our Team?
          </h3>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto text-lg">
            We're always looking for exceptional talent. Start your application today 
            and become part of the future of interior design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-lg transition-colors flex items-center space-x-2">
              <span>View Open Positions</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-colors flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>Contact Recruiting</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
