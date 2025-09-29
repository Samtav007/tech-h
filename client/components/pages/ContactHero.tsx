import { MessageCircle, Phone, Mail, MapPin, Clock, Users } from 'lucide-react'

export default function ContactHero() {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Get instant help from our AI assistant',
      availability: '24/7',
      response: 'Instant',
      color: 'bg-green-100 text-green-600',
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak with our design experts',
      availability: 'Mon-Fri 9AM-6PM',
      response: 'Immediate',
      color: 'bg-blue-100 text-blue-600',
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us your questions anytime',
      availability: '24/7',
      response: 'Within 24 hours',
      color: 'bg-purple-100 text-purple-600',
    },
  ]

  return (
    <section className="gradient-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary-600 font-semibold mb-6">
            <MessageCircle className="h-5 w-5" />
            <span>Get in Touch</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            We're Here to{' '}
            <span className="text-gradient">Help You Succeed</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Have questions about our AI design platform? Need help with your project? 
            Want to become a partner? We're here to help you every step of the way.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                <div className={`p-4 rounded-full w-16 h-16 ${method.color} mx-auto mb-6`}>
                  <Icon className="h-8 w-8 mx-auto" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {method.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {method.description}
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">{method.availability}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">Response: {method.response}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Quick Contact Info */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Get Started?
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're looking for design inspiration, need technical support, 
                or want to explore partnership opportunities, our team is ready to help.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-secondary-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-secondary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">nirmantech8@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-accent-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-accent-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Office</h4>
                    <p className="text-gray-600">123 Design Street, San Francisco, CA 94105</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Business Hours
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Monday - Friday</span>
                  <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Saturday</span>
                  <span className="font-semibold text-gray-900">10:00 AM - 4:00 PM PST</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Sunday</span>
                  <span className="font-semibold text-gray-900">Closed</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary-50 rounded-lg">
                <h4 className="font-semibold text-primary-900 mb-2">Emergency Support</h4>
                <p className="text-primary-700 text-sm">
                  For urgent technical issues, our AI assistant is available 24/7, 
                  and premium users get priority phone support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
