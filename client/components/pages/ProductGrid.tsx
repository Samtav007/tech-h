'use client'

import { useState } from 'react'
import { Star, Heart, ShoppingCart, Eye, Filter, Grid, List, ArrowUpDown } from 'lucide-react'

export default function ProductGrid() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('featured')

  const products = [
    {
      id: 1,
      name: 'Modern Sectional Sofa',
      price: 1299,
      originalPrice: 1599,
      rating: 4.8,
      reviews: 124,
      image: '/api/placeholder/300/300',
      category: 'Furniture',
      brand: 'West Elm',
      badge: 'Best Seller',
      badgeColor: 'bg-green-500',
      inStock: true,
      colors: ['Gray', 'Blue', 'Beige'],
      materials: ['Fabric', 'Wood'],
    },
    {
      id: 2,
      name: 'Smart LED Strip Lights',
      price: 89,
      originalPrice: 129,
      rating: 4.9,
      reviews: 89,
      image: '/api/placeholder/300/300',
      category: 'Lighting',
      brand: 'Philips',
      badge: 'AI Recommended',
      badgeColor: 'bg-primary-500',
      inStock: true,
      colors: ['White', 'RGB'],
      materials: ['Plastic', 'LED'],
    },
    {
      id: 3,
      name: 'Premium Paint Set',
      price: 45,
      originalPrice: 65,
      rating: 4.7,
      reviews: 203,
      image: '/api/placeholder/300/300',
      category: 'Paint',
      brand: 'Sherwin Williams',
      badge: 'Trending',
      badgeColor: 'bg-accent-500',
      inStock: true,
      colors: ['White', 'Gray', 'Blue'],
      materials: ['Latex'],
    },
    {
      id: 4,
      name: 'Minimalist Coffee Table',
      price: 299,
      originalPrice: 399,
      rating: 4.6,
      reviews: 67,
      image: '/api/placeholder/300/300',
      category: 'Furniture',
      brand: 'IKEA',
      badge: null,
      badgeColor: '',
      inStock: false,
      colors: ['White', 'Black', 'Oak'],
      materials: ['Wood', 'Glass'],
    },
    {
      id: 5,
      name: 'Ceramic Floor Lamp',
      price: 199,
      originalPrice: 249,
      rating: 4.8,
      reviews: 156,
      image: '/api/placeholder/300/300',
      category: 'Lighting',
      brand: 'CB2',
      badge: 'New',
      badgeColor: 'bg-blue-500',
      inStock: true,
      colors: ['White', 'Black'],
      materials: ['Ceramic', 'Metal'],
    },
    {
      id: 6,
      name: 'Bohemian Throw Pillows',
      price: 39,
      originalPrice: 59,
      rating: 4.5,
      reviews: 234,
      image: '/api/placeholder/300/300',
      category: 'Decor',
      brand: 'Urban Outfitters',
      badge: 'Sale',
      badgeColor: 'bg-red-500',
      inStock: true,
      colors: ['Multicolor', 'Pink', 'Blue'],
      materials: ['Cotton', 'Polyester'],
    },
  ]

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Customer Rating' },
    { value: 'newest', label: 'Newest' },
    { value: 'popular', label: 'Most Popular' },
  ]

  return (
    <div>
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">All Products</h2>
          <p className="text-gray-600">Showing {products.length} products</p>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Sort */}
          <div className="flex items-center space-x-2">
            <ArrowUpDown className="h-4 w-4 text-gray-500" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          
          {/* View Mode */}
          <div className="flex items-center border border-gray-300 rounded-lg">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 ${viewMode === 'grid' ? 'bg-primary-600 text-white' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <Grid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 ${viewMode === 'list' ? 'bg-primary-600 text-white' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Grid/List */}
      <div className={`${
        viewMode === 'grid' 
          ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' 
          : 'space-y-6'
      }`}>
        {products.map((product) => (
          <div
            key={product.id}
            className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group ${
              viewMode === 'list' ? 'flex' : ''
            }`}
          >
            {/* Product Image */}
            <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'aspect-square'}`}>
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-2"></div>
                  <p className="text-sm text-gray-500">Product Image</p>
                </div>
              </div>
              
              {product.badge && (
                <div className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs px-2 py-1 rounded-full font-semibold`}>
                  {product.badge}
                </div>
              )}
              
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                  <Heart className="h-4 w-4 text-gray-600" />
                </button>
              </div>
              
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                  <Eye className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
              <div className="mb-2">
                <span className="text-sm text-gray-500">{product.brand}</span>
                <span className="text-sm text-gray-500 mx-2">•</span>
                <span className="text-sm text-gray-500">{product.category}</span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                {product.name}
              </h3>
              
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
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-gray-900">${product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>
                {!product.inStock && (
                  <span className="text-sm text-red-600 font-medium">Out of Stock</span>
                )}
              </div>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-1 mb-2">
                  {product.colors.slice(0, 3).map((color, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {color}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1">
                  {product.materials.map((material, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {material}
                    </span>
                  ))}
                </div>
              </div>
              
              <button 
                className={`w-full flex items-center justify-center space-x-2 ${
                  product.inStock 
                    ? 'bg-primary-600 hover:bg-primary-700 text-white' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                } py-3 px-4 rounded-lg transition-colors`}
                disabled={!product.inStock}
              >
                <ShoppingCart className="h-4 w-4" />
                <span>{product.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="mt-12 text-center">
        <button className="btn-secondary px-8 py-3">
          Load More Products
        </button>
      </div>
    </div>
  )
}
