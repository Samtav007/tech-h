import Link from 'next/link'
import { Sofa, Palette, Lightbulb, Square, Sparkles, Star, ShoppingCart, Eye, ArrowRight } from 'lucide-react'

export default function ProductsPreview() {
  const categories = [
    {
      icon: Sofa,
      name: 'Furniture',
      count: '2,500+ items',
      image: '/api/placeholder/300/200',
      popular: true,
    },
    {
      icon: Palette,
      name: 'Paint',
      count: '500+ colors',
      image: '/api/placeholder/300/200',
      popular: false,
    },
    {
      icon: Lightbulb,
      name: 'Lighting',
      count: '800+ fixtures',
      image: '/api/placeholder/300/200',
      popular: false,
    },
    {
      icon: Square,
      name: 'Flooring',
      count: '1,200+ options',
      image: '/api/placeholder/300/200',
      popular: false,
    },
    {
      icon: Sparkles,
      name: 'Decor',
      count: '3,000+ pieces',
      image: '/api/placeholder/300/200',
      popular: true,
    },
  ]

  const featuredProducts = [
    {
      id: 1,
      name: 'Modern Sectional Sofa',
      price: '$1,299',
      originalPrice: '$1,599',
      rating: 4.8,
      reviews: 124,
      image: '/api/placeholder/300/300',
      category: 'Furniture',
      badge: 'Best Seller',
      badgeColor: 'bg-green-500',
    },
    {
      id: 2,
      name: 'Smart LED Strip Lights',
      price: '$89',
      originalPrice: '$129',
      rating: 4.9,
      reviews: 89,
      image: '/api/placeholder/300/300',
      category: 'Lighting',
      badge: 'AI Recommended',
      badgeColor: 'bg-primary-500',
    },
    {
      id: 3,
      name: 'Premium Paint Set',
      price: '$45',
      originalPrice: '$65',
      rating: 4.7,
      reviews: 203,
      image: '/api/placeholder/300/300',
      category: 'Paint',
      badge: 'Trending',
      badgeColor: 'bg-accent-500',
    },
  ]

  const filters = [
    { name: 'Style', options: ['Modern', 'Traditional', 'Minimalist', 'Bohemian'] },
    { name: 'Budget', options: ['Under $100', '$100-500', '$500-1000', '$1000+'] },
    { name: 'Material', options: ['Wood', 'Metal', 'Fabric', 'Glass'] },
    { name: 'Vendor', options: ['IKEA', 'West Elm', 'CB2', 'Local'] },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Curated Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover handpicked furniture, decor, and materials that perfectly match your AI-generated designs. 
            Every product is vetted for quality and style compatibility.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <Link
                key={index}
                href={`/products?category=${category.name.toLowerCase()}`}
                className="group relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {category.popular && (
                  <div className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                    Popular
                  </div>
                )}
                
                <div className="text-center">
                  <div className="bg-primary-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                    <Icon className="h-8 w-8 text-primary-600 mx-auto" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600">{category.count}</p>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Featured Products */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Featured Products</h3>
            <Link href="/products" className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center space-x-2">
              <span>View All</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="relative">
                  <div className="aspect-square bg-gray-200 flex items-center justify-center">
                    <Sofa className="h-16 w-16 text-gray-400" />
                  </div>
                  
                  <div className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs px-2 py-1 rounded-full font-semibold`}>
                    {product.badge}
                  </div>
                  
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                      <Eye className="h-4 w-4 text-gray-600" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-1">{product.category}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{product.name}</h4>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-gray-900">{product.price}</span>
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    </div>
                    <button className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-lg transition-colors">
                      <ShoppingCart className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filters Preview */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Smart Filters</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {filters.map((filter, index) => (
              <div key={index}>
                <h4 className="font-semibold text-gray-900 mb-3">{filter.name}</h4>
                <div className="space-y-2">
                  {filter.options.slice(0, 2).map((option, optionIndex) => (
                    <label key={optionIndex} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                  {filter.options.length > 2 && (
                    <button className="text-sm text-primary-600 hover:text-primary-700">
                      +{filter.options.length - 2} more
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/products" className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2">
            <span>Shop All Products</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
