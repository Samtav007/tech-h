import { Shield, Award, Users, Star, CheckCircle, Zap } from 'lucide-react'

export default function TrustMarkers() {
  const trustFeatures = [
    {
      icon: Shield,
      title: 'SSL Secured',
      description: 'Your data is protected with enterprise-grade security',
    },
    {
      icon: Award,
      title: 'Trusted by Designers',
      description: '500+ professional designers use our platform',
    },
    {
      icon: Users,
      title: '10,000+ Happy Customers',
      description: 'Join thousands of satisfied homeowners',
    },
    {
      icon: Star,
      title: '4.9/5 Rating',
      description: 'Highly rated by users and industry experts',
    },
    {
      icon: CheckCircle,
      title: 'Money-Back Guarantee',
      description: '30-day satisfaction guarantee on all services',
    },
    {
      icon: Zap,
      title: 'AI-Powered',
      description: 'Cutting-edge technology for better results',
    },
  ]

  const logos = [
    'Interior Design Magazine',
    'Home & Garden',
    'Design Weekly',
    'Modern Living',
    'Style & Space',
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Features */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {trustFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center group">
                <div className="bg-primary-50 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-primary-100 transition-colors">
                  <Icon className="h-8 w-8 text-primary-600 mx-auto" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Featured In */}
        <div className="text-center">
          <p className="text-gray-500 text-sm font-medium mb-8">Featured in</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="text-gray-400 font-semibold text-lg hover:text-gray-600 transition-colors cursor-pointer"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Designers & Homeowners
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their spaces with our AI-powered design platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Professional Designers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">10,000+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">50,000+</div>
              <div className="text-gray-600">Designs Created</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
