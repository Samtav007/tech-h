import { Wrench, Shield, Clock, CheckCircle, Star, Users, Award, Truck } from 'lucide-react'

export default function InstallationServices() {
  const services = [
    {
      icon: Wrench,
      title: 'Furniture Assembly',
      description: 'Professional assembly of all furniture purchases',
      features: [
        'Expert assembly team',
        'All tools provided',
        'Quality inspection',
        'Cleanup included',
      ],
      price: 'Starting at $49',
    },
    {
      icon: Truck,
      title: 'Delivery & Setup',
      description: 'White-glove delivery and room placement',
      features: [
        'Careful handling',
        'Room placement',
        'Protection of existing items',
        'Removal of packaging',
      ],
      price: 'Starting at $79',
    },
    {
      icon: Shield,
      title: 'Installation Warranty',
      description: 'Comprehensive warranty on all installation work',
      features: [
        '1-year warranty',
        'Free repairs',
        'Replacement parts',
        'Priority support',
      ],
      price: 'Included',
    },
  ]

  const process = [
    {
      step: '1',
      title: 'Schedule Installation',
      description: 'Book your installation when you purchase products or separately',
    },
    {
      step: '2',
      title: 'Preparation',
      description: 'We\'ll contact you to confirm details and prepare your space',
    },
    {
      step: '3',
      title: 'Professional Installation',
      description: 'Our expert team arrives with all necessary tools and equipment',
    },
    {
      step: '4',
      title: 'Quality Check',
      description: 'We inspect everything and ensure you\'re completely satisfied',
    },
  ]

  const benefits = [
    {
      icon: Clock,
      title: 'Fast & Reliable',
      description: 'Most installations completed within 2-4 hours',
    },
    {
      icon: Shield,
      title: 'Insured & Bonded',
      description: 'Full insurance coverage for your peace of mind',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Trained professionals with years of experience',
    },
    {
      icon: Award,
      title: 'Satisfaction Guarantee',
      description: '100% satisfaction guarantee on all work',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Installation Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let our expert installation team handle the heavy lifting. We provide professional 
            assembly, delivery, and setup services to ensure your new furniture is perfectly 
            installed and ready to enjoy.
          </p>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mb-6">
                  <Icon className="h-8 w-8 text-primary-600 mx-auto" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-2">
                    {service.price}
                  </div>
                  <button className="btn-primary w-full">
                    Learn More
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Installation Process */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Installation Process
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="text-center">
                <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <Icon className="h-8 w-8 text-primary-600 mx-auto" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            )
          })}
        </div>

        {/* Pricing & Packages */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Installation Packages
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Basic Package</h4>
              <div className="text-3xl font-bold text-primary-600 mb-4">$49</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Furniture assembly</span>
                </li>
                <li className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Basic cleanup</span>
                </li>
                <li className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Quality check</span>
                </li>
              </ul>
              <button className="w-full btn-secondary">Choose Basic</button>
            </div>

            <div className="bg-primary-50 rounded-xl p-6 ring-2 ring-primary-500">
              <div className="text-center mb-4">
                <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">Premium Package</h4>
              <div className="text-3xl font-bold text-primary-600 mb-4">$99</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Everything in Basic</span>
                </li>
                <li className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>White-glove delivery</span>
                </li>
                <li className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Room placement</span>
                </li>
                <li className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Extended warranty</span>
                </li>
              </ul>
              <button className="w-full btn-primary">Choose Premium</button>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Complete Package</h4>
              <div className="text-3xl font-bold text-primary-600 mb-4">$149</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Everything in Premium</span>
                </li>
                <li className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Design consultation</span>
                </li>
                <li className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Follow-up service</span>
                </li>
                <li className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Priority support</span>
                </li>
              </ul>
              <button className="w-full btn-secondary">Choose Complete</button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="bg-primary-600 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Book your installation service today and let our experts handle everything. 
              Available nationwide with flexible scheduling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-colors">
                Book Installation
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-6 rounded-lg transition-colors">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
