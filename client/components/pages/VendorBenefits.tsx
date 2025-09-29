import { Users, DollarSign, Wrench, Shield, Globe, Star, Clock, Award } from 'lucide-react'

export default function VendorBenefits() {
  const designerBenefits = [
    {
      icon: Users,
      title: 'Access to Qualified Leads',
      description: 'Get matched with customers who are ready to invest in professional design services',
      details: [
        'AI-powered customer matching',
        'Pre-qualified leads',
        'No cold calling required',
        'Higher conversion rates',
      ],
    },
    {
      icon: Wrench,
      title: 'AI Design Tools',
      description: 'Use our advanced AI tools to create stunning designs faster and more efficiently',
      details: [
        'Instant design generation',
        '3D visualization tools',
        'Material and color matching',
        'Client presentation tools',
      ],
    },
    {
      icon: DollarSign,
      title: 'Flexible Pricing',
      description: 'Set your own rates and keep 80-90% of your earnings with transparent fee structure',
      details: [
        'Set your own prices',
        'Keep 80-90% of earnings',
        'Transparent fee structure',
        'Monthly payout system',
      ],
    },
    {
      icon: Shield,
      title: 'Professional Support',
      description: 'Get dedicated support, training, and resources to help you succeed',
      details: [
        'Dedicated account manager',
        'Training and certification',
        'Marketing support',
        'Technical assistance',
      ],
    },
  ]

  const vendorBenefits = [
    {
      icon: Globe,
      title: 'Global Marketplace',
      description: 'Reach customers worldwide through our AI-powered product recommendation system',
      details: [
        'Global customer base',
        'AI product matching',
        'Automated inventory sync',
        'Multi-channel selling',
      ],
    },
    {
      icon: Star,
      title: 'Quality Assurance',
      description: 'All products are vetted for quality, ensuring customer satisfaction and repeat business',
      details: [
        'Quality vetting process',
        'Customer reviews system',
        'Return management',
        'Brand protection',
      ],
    },
    {
      icon: Clock,
      title: 'Streamlined Operations',
      description: 'Automated order processing, inventory management, and customer service tools',
      details: [
        'Automated order processing',
        'Inventory management',
        'Customer service tools',
        'Analytics dashboard',
      ],
    },
    {
      icon: Award,
      title: 'Growth Opportunities',
      description: 'Access to marketing tools, promotional opportunities, and business insights',
      details: [
        'Marketing tools',
        'Promotional campaigns',
        'Business analytics',
        'Growth recommendations',
      ],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Partnership Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're a designer or vendor, we provide the tools, support, and opportunities 
            you need to grow your business and succeed in the digital age.
          </p>
        </div>

        {/* Designer Benefits */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              For Interior Designers
            </h3>
            <p className="text-lg text-gray-600">
              Join our network of professional designers and access cutting-edge tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designerBenefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mb-6">
                    <Icon className="h-8 w-8 text-primary-600 mx-auto" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {benefit.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        {/* Vendor Benefits */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              For Product Vendors
            </h3>
            <p className="text-lg text-gray-600">
              Sell your products to our global customer base with AI-powered recommendations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {vendorBenefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                  <div className="bg-secondary-100 p-4 rounded-full w-16 h-16 mb-6">
                    <Icon className="h-8 w-8 text-secondary-600 mx-auto" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {benefit.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {benefit.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-secondary-600 rounded-full flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        {/* Revenue Sharing */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Transparent Revenue Sharing
            </h3>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              We believe in fair partnerships. Keep the majority of your earnings while we handle 
              the technology, marketing, and customer acquisition.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4">Designers</h4>
                <div className="text-3xl font-bold mb-2">80-90%</div>
                <p className="text-primary-100 text-sm">You keep 80-90% of your consultation fees</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4">Vendors</h4>
                <div className="text-3xl font-bold mb-2">85-95%</div>
                <p className="text-primary-100 text-sm">You keep 85-95% of your product sales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
