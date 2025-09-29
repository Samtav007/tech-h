import { MessageCircle, Phone, Clock, CheckCircle, ArrowRight } from 'lucide-react'

export default function WhatsAppCTA() {
  const benefits = [
    {
      icon: Clock,
      title: 'Instant Response',
      description: 'Get immediate answers to your questions',
    },
    {
      icon: CheckCircle,
      title: 'Expert Support',
      description: 'Chat with our design professionals',
    },
    {
      icon: Phone,
      title: 'Voice Messages',
      description: 'Send voice notes for complex questions',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-white/20 p-3 rounded-full">
                  <MessageCircle className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold">Chat with Us on WhatsApp</h2>
              </div>
              
              <p className="text-green-100 mb-8 text-lg leading-relaxed">
                Get instant design help and support through WhatsApp. Our team of design experts 
                is available to answer your questions, provide recommendations, and guide you 
                through your design journey.
              </p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon className="h-6 w-6 text-green-200 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                        <p className="text-green-100 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-semibold mb-3">What you can ask:</h4>
                <ul className="space-y-2 text-sm text-green-100">
                  <li>• Design advice and recommendations</li>
                  <li>• Product questions and specifications</li>
                  <li>• Technical support and troubleshooting</li>
                  <li>• Project planning and consultation</li>
                  <li>• Partnership and business inquiries</li>
                </ul>
              </div>
            </div>

            {/* Right Side - WhatsApp Button */}
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="bg-white rounded-full p-6 w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                  <MessageCircle className="h-16 w-16 text-green-600" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4">
                  Start a Conversation
                </h3>
                
                <p className="text-green-100 mb-8">
                  Click the button below to open WhatsApp and start chatting with our team.
                </p>

                <a
                  href="https://chat.whatsapp.com/KWTwHE1NGGZA5yD57YOYsk?mode=ems_wa_c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-white text-green-600 hover:bg-gray-50 font-bold py-4 px-8 rounded-full transition-colors text-lg"
                >
                  <MessageCircle className="h-6 w-6" />
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="h-5 w-5" />
                </a>

                <div className="mt-6 text-sm text-green-100">
                  <p>Available 24/7 for Premium users</p>
                  <p>Mon-Fri 9AM-6PM for Free users</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Alternative Contact Methods */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
              <Phone className="h-8 w-8 text-blue-600 mx-auto" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Phone Support</h4>
            <p className="text-gray-600 mb-4">Speak directly with our team</p>
            <a href="tel:+15551234567" className="text-blue-600 hover:text-blue-700 font-semibold">
              +1 (555) 123-4567
            </a>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-purple-600 mx-auto" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Live Chat</h4>
            <p className="text-gray-600 mb-4">AI-powered instant support</p>
            <button className="text-purple-600 hover:text-purple-700 font-semibold">
              Start Chat
            </button>
          </div>
          
          <div className="text-center">
            <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-orange-600 mx-auto" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">Email Support</h4>
            <p className="text-gray-600 mb-4">Detailed inquiries and support</p>
            <a href="mailto:nirmantech8@gmail.com" className="text-orange-600 hover:text-orange-700 font-semibold">
              nirmantech8@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
