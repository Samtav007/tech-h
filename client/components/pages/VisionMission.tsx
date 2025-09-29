import { Eye, Target, ArrowRight, CheckCircle } from 'lucide-react'

export default function VisionMission() {
  const phases = [
    {
      number: 'Phase 1',
      title: 'AI Design Tool Launch',
      description: 'Launch our core AI-powered design recommendation engine',
      status: 'completed',
      year: '2023',
    },
    {
      number: 'Phase 2',
      title: 'E-commerce Integration',
      description: 'Build curated product catalog with seamless shopping experience',
      status: 'completed',
      year: '2023',
    },
    {
      number: 'Phase 3',
      title: 'Designer Network',
      description: 'Connect homeowners with professional interior designers',
      status: 'in-progress',
      year: '2024',
    },
    {
      number: 'Phase 4',
      title: 'AR/VR Experience',
      description: 'Implement augmented reality for virtual room previews',
      status: 'planned',
      year: '2024',
    },
    {
      number: 'Phase 5',
      title: 'Global Expansion',
      description: 'Scale to international markets with localized design preferences',
      status: 'planned',
      year: '2025',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Vision */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-primary-100 p-3 rounded-full">
                <Eye className="h-6 w-6 text-primary-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              To become the world's leading AI-powered interior design platform, where anyone can 
              create their dream home with the help of cutting-edge technology and expert guidance. 
              We envision a future where beautiful, functional design is accessible to everyone, 
              regardless of budget or location.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Global Accessibility</h4>
                  <p className="text-gray-600 text-sm">Making design available worldwide</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">AI Innovation</h4>
                  <p className="text-gray-600 text-sm">Leading with cutting-edge technology</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">Sustainable Design</h4>
                  <p className="text-gray-600 text-sm">Promoting eco-friendly choices</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-secondary-100 p-3 rounded-full">
                <Target className="h-6 w-6 text-secondary-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              To democratize interior design by combining artificial intelligence with human expertise, 
              creating a platform that empowers homeowners to transform their spaces while supporting 
              professional designers in growing their businesses.
            </p>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">5-Phase Journey</h3>
              <div className="space-y-3">
                {phases.map((phase, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      phase.status === 'completed' ? 'bg-green-500' :
                      phase.status === 'in-progress' ? 'bg-yellow-500' :
                      'bg-gray-300'
                    }`}></div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900">{phase.title}</span>
                        <span className="text-sm text-gray-500">{phase.year}</span>
                      </div>
                      <p className="text-sm text-gray-600">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
