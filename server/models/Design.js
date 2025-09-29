const mongoose = require('mongoose')

const designSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  roomType: {
    type: String,
    required: true,
    enum: ['living', 'bedroom', 'kitchen', 'bathroom', 'dining', 'office', 'outdoor']
  },
  style: {
    type: String,
    required: true,
    enum: ['modern', 'traditional', 'minimalist', 'bohemian', 'industrial', 'scandinavian']
  },
  products: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    position: {
      x: {
        type: Number,
        required: true
      },
      y: {
        type: Number,
        required: true
      },
      z: {
        type: Number,
        default: 0
      }
    },
    rotation: {
      type: Number,
      default: 0
    },
    scale: {
      type: Number,
      default: 1
    },
    customizations: {
      color: String,
      material: String,
      size: String
    }
  }],
  roomLayout: {
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    },
    floorPlan: {
      type: String // Base64 encoded image or URL
    },
    wallColor: {
      type: String,
      default: '#ffffff'
    },
    floorType: {
      type: String,
      enum: ['hardwood', 'carpet', 'tile', 'laminate', 'concrete']
    }
  },
  isPublic: {
    type: Boolean,
    default: false
  },
  isTemplate: {
    type: Boolean,
    default: false
  },
  likes: {
    type: Number,
    default: 0
  },
  views: {
    type: Number,
    default: 0
  },
  tags: [{
    type: String,
    trim: true
  }],
  totalCost: {
    type: Number,
    default: 0
  },
  budget: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 10000
    }
  },
  status: {
    type: String,
    enum: ['draft', 'completed', 'archived'],
    default: 'draft'
  },
  collaborators: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    role: {
      type: String,
      enum: ['viewer', 'editor', 'admin'],
      default: 'viewer'
    },
    addedAt: {
      type: Date,
      default: Date.now
    }
  }],
  comments: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    text: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }]
}, {
  timestamps: true
})

// Indexes for better query performance
designSchema.index({ userId: 1 })
designSchema.index({ roomType: 1, style: 1 })
designSchema.index({ isPublic: 1 })
designSchema.index({ isTemplate: 1 })
designSchema.index({ likes: -1 })
designSchema.index({ views: -1 })
designSchema.index({ createdAt: -1 })
designSchema.index({ name: 'text', description: 'text' })

// Virtual for design thumbnail
designSchema.virtual('thumbnail').get(function() {
  // This would be generated from the 3D scene
  return `/api/designs/${this._id}/thumbnail`
})

// Method to calculate total cost
designSchema.methods.calculateTotalCost = function() {
  let total = 0
  this.products.forEach(item => {
    // This would fetch the actual product price
    // For now, we'll use a placeholder
    total += 100 // Placeholder price
  })
  this.totalCost = total
  return this.save()
}

// Method to add product to design
designSchema.methods.addProduct = function(productId, position, rotation = 0, scale = 1) {
  this.products.push({
    productId: productId,
    position: position,
    rotation: rotation,
    scale: scale
  })
  return this.calculateTotalCost()
}

// Method to remove product from design
designSchema.methods.removeProduct = function(productId) {
  this.products = this.products.filter(p => p.productId.toString() !== productId.toString())
  return this.calculateTotalCost()
}

// Method to like design
designSchema.methods.like = function() {
  this.likes += 1
  return this.save()
}

// Method to view design
designSchema.methods.incrementViews = function() {
  this.views += 1
  return this.save()
}

// Static method to find public designs
designSchema.statics.findPublicDesigns = function(filters = {}, limit = 20) {
  return this.find({
    isPublic: true,
    ...filters
  })
  .populate('userId', 'name photoURL')
  .sort({ likes: -1, views: -1 })
  .limit(limit)
}

// Static method to find designs by room type and style
designSchema.statics.findByRoomAndStyle = function(roomType, style, limit = 20) {
  return this.find({
    roomType: roomType,
    style: style,
    isPublic: true
  })
  .populate('userId', 'name photoURL')
  .sort({ likes: -1 })
  .limit(limit)
}

module.exports = mongoose.model('Design', designSchema)
