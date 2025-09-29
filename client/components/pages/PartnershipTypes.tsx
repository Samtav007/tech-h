import { Users, Package, Crown, Star, CheckCircle, ArrowRight, X } from 'lucide-react'

export default function PartnershipTypes() {
  const partnershipTypes = [
    {
      type: 'Designer',
      icon: Users,
      color: 'from-primary-500 to-primary-600',
      description: 'Join as a professional interior designer',
      features: [
        'Access to qualified leads',
        'AI design tools',
        'Client management system',
        'Portfolio showcase',
        'Flexible pricing',
        '80-90% revenue share',
      ],
      requirements: [
        'Professional design certification',
        'Portfolio of completed projects',
        'Insurance coverage',
        'Business license',
      ],
      process: [
        'Submit application',
        'Portfolio review',
        'Background check',
        'Platform training',
        'Start accepting clients',
      ],
    },
    {
      type: 'Vendor',
      icon: Package,
      color: 'from-secondary-500 to-secondary-600',
      description: 'Sell your products on our platform',
      features: [
        'Global marketplace access',
        'AI product matching',
        'Automated order processing',
        'Inventory management',
        'Customer service tools',
        '85-95% revenue share',
      ],
      requirements: [
        'Quality product catalog',
        'Reliable shipping',
        'Customer service',
        'Business registration',
      ],
      process: [
        'Submit vendor application',
        'Product quality review',
        'Integration setup',
        'Inventory upload',
        'Start selling',
      ],
    },
    {
      type: 'Premium Partner',
      icon: Crown,
      color: 'from-accent-500 to-accent-600',
      description: 'Exclusive partnership with enhanced benefits',
      features: [
        'All Designer/Vendor features',
        'Priority customer matching',
        'Dedicated account manager',
        'Custom integrations',
        'Marketing support',
        'Higher revenue share',
      ],
      requirements: [
        'Established business',
        'High-quality standards',
        'Strong customer reviews',
        'Commitment to growth',
      ],
      process: [
        'Invitation or application',
        'Business evaluation',
        'Partnership agreement',
        'Custom onboarding',
        'Launch partnership',
      ],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Partnership Types
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the partnership type that best fits your business needs and goals. 
            All partnerships include access to our AI-powered platform and tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {partnershipTypes.map((partnership, index) => {
            const Icon = partnership.icon
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`bg-gradient-to-r ${partnership.color} p-8 text-white`}>
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon className="h-8 w-8" />
                    <h3 className="text-2xl font-bold">{partnership.type}</h3>
                  </div>
                  <p className="text-white/90">{partnership.description}</p>
                </div>

                <div className="p-8">
                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">What You Get</h4>
                    <ul className="space-y-2">
                      {partnership.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Requirements */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Requirements</h4>
                    <ul className="space-y-2">
                      {partnership.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Process */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">Application Process</h4>
                    <div className="space-y-2">
                      {partnership.process.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-center space-x-3">
                          <div className="bg-primary-100 text-primary-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                            {stepIndex + 1}
                          </div>
                          <span className="text-gray-700 text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <button className={`w-full ${
                    index === 2 ? 'btn-primary' : 'btn-secondary'
                  } flex items-center justify-center space-x-2`}>
                    <span>Apply as {partnership.type}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Comparison Table */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Partnership Comparison
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Features</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Designer</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Vendor</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Premium Partner</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  'AI-powered tools',
                  'Customer matching',
                  'Revenue share',
                  'Dedicated support',
                  'Marketing tools',
                  'Custom integrations',
                  'Priority placement',
                  'Account manager',
                ].map((feature, index) => (
                  <tr key={index}>
                    <td className="py-4 px-4 font-medium text-gray-900">{feature}</td>
                    <td className="py-4 px-4 text-center">
                      {index < 3 ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {index < 3 ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
