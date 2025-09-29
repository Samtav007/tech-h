import { Sofa, Palette, Lightbulb, Square, Sparkles, ArrowRight } from 'lucide-react'

export default function ProductCategories() {
  const categories = [
    {
      icon: Sofa,
      name: 'Furniture',
      count: '2,500+ items',
      description: 'Sofas, chairs, tables, and storage solutions',
      image: '/api/placeholder/400/300',
      popular: true,
      subcategories: ['Living Room', 'Bedroom', 'Dining', 'Office', 'Outdoor'],
    },
    {
      icon: Palette,
      name: 'Paint & Wall Coverings',
      count: '500+ colors',
      description: 'Premium paints, wallpapers, and decorative finishes',
      image: '/api/placeholder/400/300',
      popular: false,
      subcategories: ['Interior Paint', 'Exterior Paint', 'Wallpaper', 'Stains', 'Primers'],
    },
    {
      icon: Lightbulb,
      name: 'Lighting',
      count: '800+ fixtures',
      description: 'Chandeliers, lamps, and smart lighting solutions',
      image: '/api/placeholder/400/300',
      popular: true,
      subcategories: ['Ceiling Lights', 'Table Lamps', 'Floor Lamps', 'Outdoor', 'Smart'],
    },
    {
      icon: Square,
      name: 'Flooring',
      count: '1,200+ options',
      description: 'Hardwood, tile, carpet, and luxury vinyl',
      image: '/api/placeholder/400/300',
      popular: false,
      subcategories: ['Hardwood', 'Tile', 'Carpet', 'Vinyl', 'Laminate'],
    },
    {
      icon: Sparkles,
      name: 'Decor & Accessories',
      count: '3,000+ pieces',
      description: 'Art, mirrors, plants, and decorative accents',
      image: '/api/placeholder/400/300',
      popular: true,
      subcategories: ['Wall Art', 'Mirrors', 'Plants', 'Vases', 'Candles'],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our carefully curated collections organized by room and style. 
            Every product is handpicked by our design experts and AI algorithms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <Icon className="h-16 w-16 text-gray-400" />
                  </div>
                  
                  {category.popular && (
                    <div className="absolute top-4 left-4 bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <button className="opacity-0 group-hover:opacity-100 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold transition-opacity">
                      Shop Now
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-primary-100 p-2 rounded-lg">
                      <Icon className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-600">{category.count}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Popular Subcategories:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.subcategories.slice(0, 3).map((sub, subIndex) => (
                        <span key={subIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {sub}
                        </span>
                      ))}
                      {category.subcategories.length > 3 && (
                        <span className="text-gray-500 text-xs">
                          +{category.subcategories.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <button className="w-full btn-primary flex items-center justify-center space-x-2">
                    <span>Browse {category.name}</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* AI Recommendations */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="h-6 w-6" />
              <span className="text-lg font-semibold">AI-Powered Recommendations</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Get Personalized Product Suggestions
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Our AI analyzes your design preferences and room dimensions to recommend 
              the perfect products for your space. Get started with a free room scan.
            </p>
            <button className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-colors">
              Get AI Recommendations
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
