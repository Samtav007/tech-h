import { Check, X, Crown, Star, ArrowRight } from 'lucide-react'

export default function PlanComparison() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for trying out our AI design tool',
      popular: false,
      features: [
        { name: '5 design generations per month', included: true },
        { name: 'Basic room scanning', included: true },
        { name: 'Standard product catalog', included: true },
        { name: 'Community support', included: true },
        { name: 'Basic 3D visualization', included: true },
        { name: 'Design export (low-res)', included: true },
        { name: 'Premium product access', included: false },
        { name: 'Designer consultation', included: false },
        { name: 'Installation services', included: false },
        { name: 'Priority support', included: false },
        { name: 'Advanced 3D visualization', included: false },
        { name: 'Design export (high-res)', included: false },
      ],
      cta: 'Start Free',
      ctaStyle: 'btn-secondary',
    },
    {
      name: 'Premium',
      price: '$29',
      period: 'per month',
      description: 'Everything you need for professional results',
      popular: true,
      features: [
        { name: 'Unlimited design generations', included: true },
        { name: 'Advanced room scanning', included: true },
        { name: 'Premium product catalog', included: true },
        { name: 'Priority support', included: true },
        { name: 'Advanced 3D visualization', included: true },
        { name: 'Design export (high-res)', included: true },
        { name: '2 designer consultations per month', included: true },
        { name: 'Installation services (20% off)', included: true },
        { name: 'Custom design requests', included: true },
        { name: 'Project timeline planning', included: true },
        { name: 'White-label options', included: false },
        { name: 'API access', included: false },
      ],
      cta: 'Start Premium Trial',
      ctaStyle: 'btn-primary',
    },
    {
      name: 'Pro',
      price: '$99',
      period: 'per month',
      description: 'For designers and businesses',
      popular: false,
      features: [
        { name: 'Everything in Premium', included: true },
        { name: 'Unlimited designer consultations', included: true },
        { name: 'Installation services (50% off)', included: true },
        { name: 'White-label options', included: true },
        { name: 'API access', included: true },
        { name: 'Custom integrations', included: true },
        { name: 'Dedicated account manager', included: true },
        { name: 'Bulk project management', included: true },
        { name: 'Custom branding', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Team collaboration tools', included: true },
        { name: 'Priority feature requests', included: true },
      ],
      cta: 'Contact Sales',
      ctaStyle: 'btn-secondary',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start free and upgrade when you're ready. All plans include our core AI design tool 
            with different levels of features and support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-lg overflow-hidden ${
              plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''
            }`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Crown className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">/{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 mt-0.5 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${
                        feature.included ? 'text-gray-700' : 'text-gray-400'
                      }`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full ${
                  plan.ctaStyle === 'btn-primary' ? 'btn-primary' : 'btn-secondary'
                }`}>
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Plan Comparison Table */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Detailed Feature Comparison
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Features</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Free</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Premium</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Pro</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  'Design generations per month',
                  'Room scanning quality',
                  'Product catalog access',
                  '3D visualization',
                  'Design export quality',
                  'Designer consultations',
                  'Installation services discount',
                  'Support level',
                  'API access',
                  'White-label options',
                ].map((feature, index) => (
                  <tr key={index}>
                    <td className="py-4 px-4 font-medium text-gray-900">{feature}</td>
                    <td className="py-4 px-4 text-center">
                      {index < 5 ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                    <td className="py-4 px-4 text-center">
                      <Check className="h-5 w-5 text-green-500 mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-12 text-center">
          <div className="bg-green-50 rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Star className="h-6 w-6 text-green-600" />
              <h4 className="text-lg font-semibold text-green-900">30-Day Money-Back Guarantee</h4>
            </div>
            <p className="text-green-700">
              Not satisfied with your premium plan? Get a full refund within 30 days, no questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
