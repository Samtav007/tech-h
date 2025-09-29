import { Crown, CheckCircle, Star, Zap, Users, ArrowRight } from 'lucide-react'

export default function PremiumUpgrade() {
  const premiumFeatures = [
    {
      icon: Zap,
      title: 'Unlimited AI Designs',
      description: 'Create unlimited room designs with our AI',
    },
    {
      icon: Users,
      title: 'Expert Consultation',
      description: '1-on-1 sessions with professional designers',
    },
    {
      icon: Star,
      title: 'Priority Support',
      description: '24/7 priority customer support',
    },
  ]

  return (
    <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-xl p-8 text-white">
      <div className="text-center mb-6">
        <div className="bg-white/20 p-3 rounded-full w-16 h-16 mx-auto mb-4">
          <Crown className="h-10 w-10 text-white mx-auto" />
        </div>
        <h3 className="text-xl font-bold mb-2">Upgrade to Premium</h3>
        <p className="text-primary-100 text-sm">
          Unlock unlimited designs and expert consultations
        </p>
      </div>

      <div className="space-y-4 mb-6">
        {premiumFeatures.map((feature, index) => {
          const Icon = feature.icon
          return (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-accent-400 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-white text-sm">{feature.title}</h4>
                <p className="text-primary-100 text-xs">{feature.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      <div className="text-center mb-6">
        <div className="text-3xl font-bold mb-1">$29</div>
        <div className="text-primary-100 text-sm">per month</div>
      </div>

      <button className="w-full bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
        <span>Upgrade Now</span>
        <ArrowRight className="h-4 w-4" />
      </button>

      <div className="text-center mt-4">
        <p className="text-primary-100 text-xs">
          Cancel anytime • 7-day free trial
        </p>
      </div>
    </div>
  )
}
