import { MapPin, Clock, Users, ArrowRight, Filter, Search } from 'lucide-react'

export default function OpenPositions() {
  const positions = [
    {
      id: 1,
      title: 'Senior AI/ML Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of our AI design recommendation engine and machine learning models.',
      requirements: ['Python, TensorFlow/PyTorch', 'Computer Vision', 'NLP', '5+ years ML experience'],
      posted: '2 days ago',
      applicants: 24,
    },
    {
      id: 2,
      title: 'Product Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Design intuitive user experiences for our AI-powered interior design platform.',
      requirements: ['Figma, Sketch', 'User Research', 'Prototyping', '3+ years UX/UI experience'],
      posted: '1 week ago',
      applicants: 18,
    },
    {
      id: 3,
      title: 'Frontend Developer (React)',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build responsive, interactive interfaces for our web and mobile applications.',
      requirements: ['React, TypeScript', 'Next.js', 'Tailwind CSS', '3+ years frontend experience'],
      posted: '3 days ago',
      applicants: 31,
    },
    {
      id: 4,
      title: 'Interior Design Consultant',
      department: 'Design Services',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Provide expert design consultation and support to our premium customers.',
      requirements: ['Interior Design Degree', 'AutoCAD/SketchUp', 'Client Management', '2+ years experience'],
      posted: '5 days ago',
      applicants: 12,
    },
    {
      id: 5,
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Lead our marketing initiatives and grow our user base through creative campaigns.',
      requirements: ['Digital Marketing', 'Content Strategy', 'Analytics', '4+ years marketing experience'],
      posted: '1 week ago',
      applicants: 22,
    },
    {
      id: 6,
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Remote',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Help customers achieve their design goals and ensure high satisfaction rates.',
      requirements: ['Customer Service', 'CRM Tools', 'Problem Solving', '2+ years CS experience'],
      posted: '4 days ago',
      applicants: 15,
    },
  ]

  const departments = ['All', 'Engineering', 'Design', 'Marketing', 'Customer Success', 'Design Services']
  const locations = ['All', 'San Francisco, CA', 'New York, NY', 'Austin, TX', 'Remote']

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Open Positions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our growing team and help shape the future of interior design. 
            We're looking for passionate individuals who share our vision.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-gray-50 rounded-xl p-6 mb-12">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search positions..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <select className="border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>
              
              <select className="border border-gray-300 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
                {locations.map((location) => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          {positions.map((position) => (
            <div key={position.id} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary-600 transition-colors cursor-pointer">
                    {position.title}
                  </h3>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{position.department}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{position.type}</span>
                    </div>
                    <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded text-xs font-semibold">
                      {position.experience}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-4">
                    {position.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {position.requirements.slice(0, 3).map((req, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {req}
                      </span>
                    ))}
                    {position.requirements.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        +{position.requirements.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-col items-end space-y-3">
                  <div className="text-right text-sm text-gray-500">
                    <div>Posted {position.posted}</div>
                    <div>{position.applicants} applicants</div>
                  </div>
                  
                  <button className="btn-primary flex items-center space-x-2">
                    <span>Apply Now</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn-secondary px-8 py-3">
            Load More Positions
          </button>
        </div>

        {/* No Open Positions? */}
        <div className="mt-16 bg-primary-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Don't See Your Dream Role?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We're always looking for exceptional talent. Send us your resume and let us know 
            how you'd like to contribute to our mission.
          </p>
          <button className="btn-primary">
            Submit Your Resume
          </button>
        </div>
      </div>
    </section>
  )
}
