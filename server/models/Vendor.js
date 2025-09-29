const mongoose = require('mongoose')

const vendorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    street: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    zipCode: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true,
      default: 'United States'
    }
  },
  businessType: {
    type: String,
    required: true,
    enum: ['manufacturer', 'retailer', 'designer', 'wholesaler', 'distributor']
  },
  specialties: [{
    type: String,
    trim: true
  }],
  portfolio: [{
    url: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    category: {
      type: String
    }
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
  isVerified: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  commissionRate: {
    type: Number,
    default: 10, // Percentage
    min: 0,
    max: 50
  },
  paymentInfo: {
    bankAccount: {
      type: String,
      required: true
    },
    taxId: {
      type: String,
      required: true
    },
    paymentMethod: {
      type: String,
      enum: ['bank_transfer', 'paypal', 'stripe'],
      default: 'bank_transfer'
    }
  },
  businessInfo: {
    website: {
      type: String
    },
    foundedYear: {
      type: Number
    },
    employeeCount: {
      type: String,
      enum: ['1-10', '11-50', '51-200', '201-500', '500+']
    },
    annualRevenue: {
      type: String,
      enum: ['under-100k', '100k-500k', '500k-1m', '1m-5m', '5m-10m', 'over-10m']
    }
  },
  shippingInfo: {
    freeShippingThreshold: {
      type: Number,
      default: 0
    },
    shippingZones: [{
      country: String,
      cost: Number,
      estimatedDays: Number
    }],
    returnPolicy: {
      type: String,
      default: '30 days return policy'
    }
  },
  contactInfo: {
    primaryContact: {
      name: String,
      email: String,
      phone: String
    },
    supportHours: {
      type: String,
      default: 'Monday-Friday 9AM-5PM'
    }
  },
  documents: [{
    type: {
      type: String,
      enum: ['business_license', 'tax_certificate', 'insurance', 'other']
    },
    url: String,
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  }],
  stats: {
    totalProducts: {
      type: Number,
      default: 0
    },
    totalOrders: {
      type: Number,
      default: 0
    },
    totalRevenue: {
      type: Number,
      default: 0
    },
    lastOrderDate: {
      type: Date
    }
  }
}, {
  timestamps: true
})

// Indexes for better query performance
vendorSchema.index({ email: 1 })
vendorSchema.index({ company: 1 })
vendorSchema.index({ businessType: 1 })
vendorSchema.index({ isVerified: 1 })
vendorSchema.index({ isActive: 1 })
vendorSchema.index({ 'rating.average': -1 })
vendorSchema.index({ specialties: 1 })

// Virtual for full address
vendorSchema.virtual('fullAddress').get(function() {
  return `${this.address.street}, ${this.address.city}, ${this.address.state} ${this.address.zipCode}, ${this.address.country}`
})

// Method to update rating
vendorSchema.methods.updateRating = function() {
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
vendorSchema.methods.addReview = function(userId, rating, comment) {
  this.reviews.push({
    user: userId,
    rating: rating,
    comment: comment
  })
  return this.updateRating()
}

// Method to verify vendor
vendorSchema.methods.verify = function() {
  this.isVerified = true
  return this.save()
}

// Method to update stats
vendorSchema.methods.updateStats = function() {
  // This would be called when products/orders are added
  return this.save()
}

// Static method to find verified vendors
vendorSchema.statics.findVerifiedVendors = function() {
  return this.find({
    isVerified: true,
    isActive: true
  }).sort({ 'rating.average': -1 })
}

// Static method to find vendors by specialty
vendorSchema.statics.findBySpecialty = function(specialty) {
  return this.find({
    specialties: specialty,
    isVerified: true,
    isActive: true
  }).sort({ 'rating.average': -1 })
}

// Static method to find top vendors
vendorSchema.statics.findTopVendors = function(limit = 10) {
  return this.find({
    isVerified: true,
    isActive: true
  })
  .sort({ 'rating.average': -1, 'stats.totalOrders': -1 })
  .limit(limit)
}

module.exports = mongoose.model('Vendor', vendorSchema)
