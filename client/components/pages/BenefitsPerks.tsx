import { Heart, DollarSign, Home, BookOpen, Coffee, Plane, Shield, Users } from 'lucide-react'

export default function BenefitsPerks() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Above-market salaries with equity options and performance bonuses',
      category: 'Financial',
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family',
      category: 'Health',
    },
    {
      icon: Home,
      title: 'Flexible Work',
      description: 'Work from anywhere with flexible hours and unlimited PTO',
      category: 'Work-Life',
    },
    {
      icon: BookOpen,
      title: 'Learning Budget',
      description: '$2,000 annual budget for courses, conferences, and professional development',
      category: 'Development',
    },
    {
      icon: Coffee,
      title: 'Office Perks',
      description: 'Free meals, snacks, and beverages in our beautiful office spaces',
      category: 'Office',
    },
    {
      icon: Plane,
      title: 'Travel & Retreats',
      description: 'Annual company retreats and team building events in amazing locations',
      category: 'Travel',
    },
    {
      icon: Shield,
      title: 'Security & Support',
      description: 'Life insurance, disability coverage, and mental health support programs',
      category: 'Security',
    },
    {
      icon: Users,
      title: 'Family Benefits',
      description: 'Paid parental leave, childcare support, and family-friendly policies',
      category: 'Family',
    },
  ]

  const categories = ['All', 'Financial', 'Health', 'Work-Life', 'Development', 'Office', 'Travel', 'Security', 'Family']

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Benefits & Perks
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe in taking care of our team. That's why we offer comprehensive benefits 
            and unique perks that support your personal and professional growth.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                category === 'All'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow group">
                <div className="bg-white p-4 rounded-full w-16 h-16 mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-8 w-8 text-primary-600 mx-auto" />
                </div>
                
                <div className="mb-3">
                  <span className="bg-primary-100 text-primary-600 px-2 py-1 rounded text-xs font-semibold">
                    {benefit.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Additional Perks */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">And So Much More!</h3>
            <p className="text-primary-100 text-lg max-w-2xl mx-auto">
              We're constantly adding new perks and benefits based on what our team values most.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Coffee className="h-8 w-8 text-white mx-auto" />
              </div>
              <h4 className="font-semibold mb-2">Free Coffee & Snacks</h4>
              <p className="text-primary-100 text-sm">Premium coffee, healthy snacks, and catered meals</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white mx-auto" />
              </div>
              <h4 className="font-semibold mb-2">Book Club</h4>
              <p className="text-primary-100 text-sm">Monthly book discussions and learning sessions</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Users className="h-8 w-8 text-white mx-auto" />
              </div>
              <h4 className="font-semibold mb-2">Mentorship Program</h4>
              <p className="text-primary-100 text-sm">Pair with senior team members for career growth</p>
            </div>
            
            <div className="text-center">
              <div className="bg-white/20 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Heart className="h-8 w-8 text-white mx-auto" />
              </div>
              <h4 className="font-semibold mb-2">Volunteer Time</h4>
              <p className="text-primary-100 text-sm">Paid time off to volunteer for causes you care about</p>
            </div>
          </div>
        </div>

        {/* Total Compensation */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Total Compensation Package
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">$120K+</div>
                <div className="text-gray-600">Average Base Salary</div>
                <div className="text-sm text-gray-500 mt-1">For Senior Roles</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">$15K+</div>
                <div className="text-gray-600">Annual Benefits Value</div>
                <div className="text-sm text-gray-500 mt-1">Per Employee</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">0.1%+</div>
                <div className="text-gray-600">Equity Options</div>
                <div className="text-sm text-gray-500 mt-1">For Early Employees</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
