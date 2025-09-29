import { Mail, CheckCircle, Users, TrendingUp, Gift } from 'lucide-react'

export default function NewsletterSignup() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Latest Trends',
      description: 'Get the newest design trends before they go mainstream',
    },
    {
      icon: Gift,
      title: 'Exclusive Offers',
      description: 'Special discounts and early access to new products',
    },
    {
      icon: Users,
      title: 'Community Access',
      description: 'Join our private community of design enthusiasts',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-white/20 p-3 rounded-full">
                  <Mail className="h-6 w-6" />
                </div>
                <h2 className="text-3xl font-bold">Stay in the Loop</h2>
              </div>
              
              <p className="text-primary-100 mb-8 text-lg leading-relaxed">
                Join 50,000+ design enthusiasts who get our weekly newsletter with the latest trends, 
                expert tips, and exclusive content. Never miss a design inspiration again.
              </p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent-400 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-white mb-1">{benefit.title}</h4>
                        <p className="text-primary-100 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-semibold mb-3">What you'll get:</h4>
                <ul className="space-y-2 text-sm text-primary-100">
                  <li>• Weekly design trend reports</li>
                  <li>• Exclusive DIY tutorials</li>
                  <li>• Early access to new products</li>
                  <li>• Member-only discounts</li>
                  <li>• Behind-the-scenes content</li>
                </ul>
              </div>
            </div>

            {/* Right Side - Signup Form */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/20 text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your first name"
                    className="w-full px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/20 text-gray-900"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Design Interests
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'Interior Trends',
                      'DIY Projects',
                      'Smart Home',
                      'Small Spaces',
                      'Color Schemes',
                      'Furniture',
                    ].map((interest, index) => (
                      <label key={index} className="flex items-center space-x-2 text-sm">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="text-white">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label className="text-sm text-primary-100">
                    I agree to receive marketing emails and understand I can unsubscribe at any time. 
                    <a href="/legal/privacy" className="text-white hover:underline ml-1">Privacy Policy</a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-primary-600 hover:bg-gray-50 font-semibold py-4 px-6 rounded-lg transition-colors"
                >
                  Subscribe to Newsletter
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-primary-100">
                  Join 50,000+ subscribers • Unsubscribe anytime
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Trusted by Design Enthusiasts Worldwide
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">50K+</div>
              <div className="text-gray-600">Newsletter Subscribers</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">95%</div>
              <div className="text-gray-600">Open Rate</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Reader Rating</div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">Weekly</div>
              <div className="text-gray-600">Fresh Content</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
