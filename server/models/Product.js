const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['furniture', 'decor', 'lighting', 'textiles', 'storage', 'outdoor']
  },
  subcategory: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  currency: {
    type: String,
    default: 'USD',
    enum: ['USD', 'EUR', 'GBP', 'CAD', 'AUD']
  },
  images: [{
    url: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    isPrimary: {
      type: Boolean,
      default: false
    }
  }],
  dimensions: {
    length: {
      type: Number,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    unit: {
      type: String,
      default: 'inches',
      enum: ['inches', 'cm', 'feet', 'meters']
    }
  },
  materials: [{
    type: String,
    trim: true
  }],
  colors: [{
    type: String,
    trim: true
  }],
  brand: {
    type: String,
    required: true,
    trim: true
  },
  vendor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Vendor',
    required: true
  },
  stock: {
    type: Number,
    default: 0,
    min: 0
  },
  isActive: {
    type: Boolean,
    default: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  rating: {
    average: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    count: {
      type: Number,
      default: 0
    }
  },
  reviews: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    comment: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  specifications: {
    weight: {
      type: Number
    },
    assembly: {
      required: {
        type: Boolean,
        default: false
      },
      time: {
        type: String
      }
    },
    warranty: {
      type: String
    }
  }
}, {
  timestamps: true
})

// Indexes for better query performance
productSchema.index({ name: 'text', description: 'text' })
productSchema.index({ category: 1, subcategory: 1 })
productSchema.index({ price: 1 })
productSchema.index({ brand: 1 })
productSchema.index({ vendor: 1 })
productSchema.index({ isActive: 1 })
productSchema.index({ 'rating.average': -1 })

// Virtual for primary image
productSchema.virtual('primaryImage').get(function() {
  const primary = this.images.find(img => img.isPrimary)
  return primary ? primary.url : (this.images[0] ? this.images[0].url : null)
})

// Method to update rating
productSchema.methods.updateRating = function() {
  if (this.reviews.length === 0) {
    this.rating.average = 0
    this.rating.count = 0
  } else {
    const totalRating = this.reviews.reduce((sum, review) => sum + review.rating, 0)
    this.rating.average = totalRating / this.reviews.length
    this.rating.count = this.reviews.length
  }
  return this.save()
}

// Method to add review
productSchema.methods.addReview = function(userId, rating, comment) {
  this.reviews.push({
    user: userId,
    rating: rating,
    comment: comment
  })
  return this.updateRating()
}

// Static method to find products by category
productSchema.statics.findByCategory = function(category, limit = 20) {
  return this.find({ 
    category: category,
    isActive: true 
  }).limit(limit)
}

// Static method to search products
productSchema.statics.searchProducts = function(query, filters = {}) {
  const searchQuery = {
    $text: { $search: query },
    isActive: true,
    ...filters
  }
  
  return this.find(searchQuery, { score: { $meta: 'textScore' } })
    .sort({ score: { $meta: 'textScore' } })
}

module.exports = mongoose.model('Product', productSchema)
