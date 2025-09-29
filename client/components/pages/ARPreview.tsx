import { Smartphone, Eye, RotateCcw, Download, Share2 } from 'lucide-react'

export default function ARPreview() {
  const features = [
    {
      icon: Eye,
      title: 'See in Your Space',
      description: 'Use your phone camera to see how products look in your actual room',
    },
    {
      icon: RotateCcw,
      title: '360° View',
      description: 'Rotate and examine products from every angle before buying',
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Works seamlessly on iOS and Android devices',
    },
  ]

  const steps = [
    {
      step: '1',
      title: 'Scan Your Room',
      description: 'Point your phone camera at the space where you want to place the item',
    },
    {
      step: '2',
      title: 'Place the Product',
      description: 'Tap to place the 3D model in your room and see how it fits',
    },
    {
      step: '3',
      title: 'Adjust & Compare',
      description: 'Move, rotate, and try different colors or sizes in real-time',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Try Before You Buy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use our AR technology to see how products look in your space before making a purchase. 
            No more guessing - see exactly how everything fits and looks together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* AR Demo */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl p-8 aspect-square flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AR Preview</h3>
                <p className="text-white/80 mb-4">Point your camera at your space</p>
                <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Try AR Now
                </button>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-primary-600 text-white p-3 rounded-full shadow-lg">
              <Eye className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-accent-500 text-white p-3 rounded-full shadow-lg">
              <RotateCcw className="h-6 w-6" />
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Experience Products in Your Space
            </h3>
            
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-full">
                      <Icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-4">How It Works</h4>
              <div className="space-y-3">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="bg-primary-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{step.title}</div>
                      <div className="text-sm text-gray-600">{step.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AR Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
              <Eye className="h-8 w-8 text-blue-600 mx-auto" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Real-Time Preview</h4>
            <p className="text-gray-600 text-sm">
              See products in your space instantly with accurate sizing and placement
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
              <RotateCcw className="h-8 w-8 text-green-600 mx-auto" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Interactive Controls</h4>
            <p className="text-gray-600 text-sm">
              Move, rotate, and resize products to find the perfect fit and arrangement
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
              <Download className="h-8 w-8 text-purple-600 mx-auto" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Save & Share</h4>
            <p className="text-gray-600 text-sm">
              Save your AR setups and share them with family or designers for feedback
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Try AR Shopping?
          </h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Download our mobile app or use the web version to start experiencing products 
            in your space today. No app download required for web users.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg transition-colors">
              Try AR on Web
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-6 rounded-lg transition-colors">
              Download App
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
