import { Search, Filter, Sparkles, ShoppingBag, Star, Truck, Shield } from 'lucide-react'

export default function ProductsHero() {
  const stats = [
    {
      icon: ShoppingBag,
      number: '10,000+',
      label: 'Products',
    },
    {
      icon: Star,
      number: '4.9/5',
      label: 'Rating',
    },
    {
      icon: Truck,
      number: 'Free',
      label: 'Shipping',
    },
    {
      icon: Shield,
      number: '30-Day',
      label: 'Returns',
    },
  ]

  return (
    <section className="gradient-bg py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-primary-600 font-semibold mb-6">
            <Sparkles className="h-5 w-5" />
            <span>Curated Products</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Discover Your{' '}
            <span className="text-gradient">Perfect Pieces</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Handpicked furniture, decor, and home essentials that perfectly match your AI-generated designs. 
            Every product is vetted for quality, style, and value.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for furniture, decor, lighting..."
                className="w-full px-6 py-4 pl-12 pr-32 rounded-full border-2 border-gray-200 focus:border-primary-500 focus:outline-none text-lg"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-full transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-2xl shadow-lg mb-4">
                  <Icon className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Quick Categories */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: 'Furniture', count: '2,500+', color: 'bg-blue-100 text-blue-600' },
              { name: 'Lighting', count: '800+', color: 'bg-yellow-100 text-yellow-600' },
              { name: 'Decor', count: '3,000+', color: 'bg-purple-100 text-purple-600' },
              { name: 'Paint', count: '500+', color: 'bg-green-100 text-green-600' },
              { name: 'Flooring', count: '1,200+', color: 'bg-orange-100 text-orange-600' },
            ].map((category, index) => (
              <button
                key={index}
                className="group p-6 rounded-xl border-2 border-gray-200 hover:border-primary-500 hover:shadow-lg transition-all"
              >
                <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <span className="text-lg font-bold">{category.name[0]}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600">{category.count}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
