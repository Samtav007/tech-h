'use client'

import { useState } from 'react'
import { Filter, X, ChevronDown, ChevronUp } from 'lucide-react'

export default function ProductFilters() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedFilters, setSelectedFilters] = useState({
    price: '',
    style: [] as string[],
    material: [] as string[],
    color: [] as string[],
    brand: [] as string[],
    rating: '',
  })

  const filterOptions = {
    price: [
      { label: 'Under $100', value: '0-100' },
      { label: '$100 - $500', value: '100-500' },
      { label: '$500 - $1000', value: '500-1000' },
      { label: '$1000 - $2500', value: '1000-2500' },
      { label: 'Over $2500', value: '2500+' },
    ],
    style: [
      'Modern',
      'Traditional',
      'Minimalist',
      'Bohemian',
      'Industrial',
      'Scandinavian',
      'Mid-Century',
      'Rustic',
    ],
    material: [
      'Wood',
      'Metal',
      'Glass',
      'Fabric',
      'Leather',
      'Marble',
      'Ceramic',
      'Plastic',
    ],
    color: [
      'White',
      'Black',
      'Gray',
      'Brown',
      'Blue',
      'Green',
      'Red',
      'Yellow',
      'Pink',
      'Purple',
    ],
    brand: [
      'IKEA',
      'West Elm',
      'CB2',
      'Crate & Barrel',
      'Pottery Barn',
      'Article',
      'AllModern',
      'Wayfair',
    ],
    rating: [
      { label: '4+ Stars', value: '4+' },
      { label: '4.5+ Stars', value: '4.5+' },
      { label: '5 Stars', value: '5' },
    ],
  }

  const handleFilterChange = (category: string, value: string) => {
    setSelectedFilters(prev => {
      if (category === 'price' || category === 'rating') {
        return { ...prev, [category]: value }
      } else {
        const currentValues = prev[category as keyof typeof prev] as string[]
        const newValues = currentValues.includes(value)
          ? currentValues.filter(v => v !== value)
          : [...currentValues, value]
        return { ...prev, [category]: newValues }
      }
    })
  }

  const clearAllFilters = () => {
    setSelectedFilters({
      price: '',
      style: [],
      material: [],
      color: [],
      brand: [],
      rating: '',
    })
  }

  const getActiveFilterCount = () => {
    let count = 0
    if (selectedFilters.price) count++
    if (selectedFilters.rating) count++
    count += selectedFilters.style.length
    count += selectedFilters.material.length
    count += selectedFilters.color.length
    count += selectedFilters.brand.length
    return count
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg"
        >
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5" />
            <span className="font-semibold">Filters</span>
            {getActiveFilterCount() > 0 && (
              <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                {getActiveFilterCount()}
              </span>
            )}
          </div>
          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </button>
      </div>

      {/* Filter Content */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-gray-900">Filters</h3>
          {getActiveFilterCount() > 0 && (
            <button
              onClick={clearAllFilters}
              className="text-sm text-primary-600 hover:text-primary-700 flex items-center space-x-1"
            >
              <X className="h-4 w-4" />
              <span>Clear All</span>
            </button>
          )}
        </div>

        {/* Price Filter */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Price Range</h4>
          <div className="space-y-2">
            {filterOptions.price.map((option) => (
              <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="price"
                  value={option.value}
                  checked={selectedFilters.price === option.value}
                  onChange={(e) => handleFilterChange('price', e.target.value)}
                  className="text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Style Filter */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Style</h4>
          <div className="space-y-2">
            {filterOptions.style.map((style) => (
              <label key={style} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedFilters.style.includes(style)}
                  onChange={() => handleFilterChange('style', style)}
                  className="text-primary-600 focus:ring-primary-500 rounded"
                />
                <span className="text-sm text-gray-700">{style}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Material Filter */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Material</h4>
          <div className="space-y-2">
            {filterOptions.material.map((material) => (
              <label key={material} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedFilters.material.includes(material)}
                  onChange={() => handleFilterChange('material', material)}
                  className="text-primary-600 focus:ring-primary-500 rounded"
                />
                <span className="text-sm text-gray-700">{material}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Color Filter */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Color</h4>
          <div className="grid grid-cols-2 gap-2">
            {filterOptions.color.map((color) => (
              <label key={color} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedFilters.color.includes(color)}
                  onChange={() => handleFilterChange('color', color)}
                  className="text-primary-600 focus:ring-primary-500 rounded"
                />
                <span className="text-sm text-gray-700">{color}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Brand Filter */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Brand</h4>
          <div className="space-y-2">
            {filterOptions.brand.map((brand) => (
              <label key={brand} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedFilters.brand.includes(brand)}
                  onChange={() => handleFilterChange('brand', brand)}
                  className="text-primary-600 focus:ring-primary-500 rounded"
                />
                <span className="text-sm text-gray-700">{brand}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Rating Filter */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 mb-3">Customer Rating</h4>
          <div className="space-y-2">
            {filterOptions.rating.map((option) => (
              <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="rating"
                  value={option.value}
                  checked={selectedFilters.rating === option.value}
                  onChange={(e) => handleFilterChange('rating', e.target.value)}
                  className="text-primary-600 focus:ring-primary-500"
                />
                <span className="text-sm text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Apply Filters Button */}
        <button className="w-full btn-primary">
          Apply Filters ({getActiveFilterCount()})
        </button>
      </div>
    </div>
  )
}
