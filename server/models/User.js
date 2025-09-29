const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  firebaseUid: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  photoURL: {
    type: String,
    default: null
  },
  phone: {
    type: String,
    trim: true
  },
  company: {
    type: String,
    trim: true
  },
  isPremium: {
    type: Boolean,
    default: false
  },
  subscription: {
    plan: {
      type: String,
      enum: ['free', 'premium', 'enterprise'],
      default: 'free'
    },
    startDate: {
      type: Date,
      default: Date.now
    },
    endDate: {
      type: Date
    },
    autoRenew: {
      type: Boolean,
      default: false
    }
  },
  preferences: {
    designStyle: [{
      type: String,
      enum: ['modern', 'traditional', 'minimalist', 'bohemian', 'industrial', 'scandinavian']
    }],
    budgetRange: {
      type: String,
      enum: ['under-1000', '1000-5000', '5000-10000', '10000-25000', 'over-25000']
    },
    roomTypes: [{
      type: String,
      enum: ['living', 'bedroom', 'kitchen', 'bathroom', 'dining', 'office', 'outdoor']
    }]
  },
  lastLogin: {
    type: Date,
    default: Date.now
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
})

// Indexes for better query performance
userSchema.index({ email: 1 })
userSchema.index({ firebaseUid: 1 })
userSchema.index({ isPremium: 1 })
userSchema.index({ 'subscription.plan': 1 })

// Virtual for user's full name
userSchema.virtual('fullName').get(function() {
  return this.name
})

// Method to check if user has active subscription
userSchema.methods.hasActiveSubscription = function() {
  if (!this.subscription.endDate) return false
  return this.subscription.endDate > new Date()
}

// Method to upgrade user to premium
userSchema.methods.upgradeToPremium = function(months = 1) {
  this.isPremium = true
  this.subscription.plan = 'premium'
  this.subscription.startDate = new Date()
  this.subscription.endDate = new Date(Date.now() + (months * 30 * 24 * 60 * 60 * 1000))
  this.subscription.autoRenew = true
  return this.save()
}

// Static method to find premium users
userSchema.statics.findPremiumUsers = function() {
  return this.find({ 
    isPremium: true,
    'subscription.endDate': { $gt: new Date() }
  })
}

module.exports = mongoose.model('User', userSchema)
