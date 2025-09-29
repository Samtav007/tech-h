import { MapPin, Phone, Mail, Clock, Users, Building, Globe, Award } from 'lucide-react'

export default function ContactInfo() {
  const offices = [
    {
      city: 'San Francisco',
      address: '123 Design Street, San Francisco, CA 94105',
      phone: '+1 (555) 123-4567',
      email: 'nirmantech8@gmail.com',
      hours: 'Mon-Fri 9AM-6PM PST',
      isHeadquarters: true,
    },
    {
      city: 'New York',
      address: '456 Innovation Ave, New York, NY 10001',
      phone: '+1 (555) 234-5678',
      email: 'ny@homy.com',
      hours: 'Mon-Fri 9AM-6PM EST',
      isHeadquarters: false,
    },
    {
      city: 'London',
      address: '789 Tech Lane, London, UK EC1A 1BB',
      phone: '+44 20 7123 4567',
      email: 'london@homy.com',
      hours: 'Mon-Fri 9AM-6PM GMT',
      isHeadquarters: false,
    },
  ]

  const departments = [
    {
      name: 'Customer Support',
      email: 'nirmantech8@gmail.com',
      phone: '+1 (555) 123-4567',
      description: 'Technical support and account assistance',
    },
    {
      name: 'Design Consultation',
      email: 'nirmantech8@gmail.com',
      phone: '+1 (555) 123-4568',
      description: 'Professional design services and consultations',
    },
    {
      name: 'Partnerships',
      email: 'nirmantech8@gmail.com',
      phone: '+1 (555) 123-4569',
      description: 'Business partnerships and vendor relations',
    },
    {
      name: 'Media & Press',
      email: 'nirmantech8@gmail.com',
      phone: '+1 (555) 123-4570',
      description: 'Media inquiries and press relations',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Locations & Departments
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We have offices around the world and dedicated teams to help you with any inquiry. 
            Find the right contact for your needs.
          </p>
        </div>

        {/* Office Locations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Offices</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                {office.isHeadquarters && (
                  <div className="flex items-center space-x-2 mb-4">
                    <Award className="h-5 w-5 text-primary-600" />
                    <span className="text-sm font-semibold text-primary-600">Headquarters</span>
                  </div>
                )}
                
                <h4 className="text-xl font-bold text-gray-900 mb-4">{office.city}</h4>
                
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-gray-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{office.address}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    <span className="text-gray-700">{office.phone}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    <span className="text-gray-700">{office.email}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    <span className="text-gray-700">{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Departments */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Contact by Department</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-primary-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{dept.name}</h4>
                </div>
                
                <p className="text-gray-600 mb-6">{dept.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    <a href={`mailto:${dept.email}`} className="text-primary-600 hover:text-primary-700 font-medium">
                      {dept.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    <a href={`tel:${dept.phone}`} className="text-primary-600 hover:text-primary-700 font-medium">
                      {dept.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Presence */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Globe className="h-8 w-8 text-primary-600" />
              <h3 className="text-2xl font-bold text-gray-900">Global Presence</h3>
            </div>
            
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              While we have physical offices in key locations, our AI-powered platform 
              serves customers worldwide with 24/7 support in multiple languages.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-gray-600">Languages Supported</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-gray-600">AI Support Available</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
                <div className="text-gray-600">Time Zones Covered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
