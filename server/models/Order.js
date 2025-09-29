const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  orderNumber: {
    type: String,
    required: true,
    unique: true
  },
  items: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    vendorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Vendor',
      required: true
    },
    customizations: {
      color: String,
      material: String,
      size: String
    }
  }],
  pricing: {
    subtotal: {
      type: Number,
      required: true,
      min: 0
    },
    tax: {
      type: Number,
      default: 0,
      min: 0
    },
    shipping: {
      type: Number,
      default: 0,
      min: 0
    },
    discount: {
      type: Number,
      default: 0,
      min: 0
    },
    total: {
      type: Number,
      required: true,
      min: 0
    }
  },
  currency: {
    type: String,
    default: 'USD',
    enum: ['USD', 'EUR', 'GBP', 'CAD', 'AUD']
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded'],
    default: 'pending'
  },
  shippingAddress: {
    name: {
      type: String,
      required: true
    },
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
    },
    phone: {
      type: String
    },
    instructions: {
      type: String
    }
  },
  billingAddress: {
    name: {
      type: String,
      required: true
    },
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
  paymentInfo: {
    method: {
      type: String,
      enum: ['card', 'paypal', 'bank_transfer', 'apple_pay', 'google_pay'],
      required: true
    },
    transactionId: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ['pending', 'completed', 'failed', 'refunded'],
      default: 'pending'
    },
    paidAt: {
      type: Date
    }
  },
  trackingInfo: [{
    carrier: {
      type: String,
      required: true
    },
    trackingNumber: {
      type: String,
      required: true
    },
    estimatedDelivery: {
      type: Date
    },
    status: {
      type: String,
      enum: ['pending', 'in_transit', 'out_for_delivery', 'delivered', 'exception'],
      default: 'pending'
    },
    updates: [{
      status: String,
      location: String,
      timestamp: {
        type: Date,
        default: Date.now
      },
      description: String
    }]
  }],
  timeline: [{
    status: {
      type: String,
      required: true
    },
    timestamp: {
      type: Date,
      default: Date.now
    },
    note: {
      type: String
    },
    updatedBy: {
      type: String,
      enum: ['system', 'user', 'vendor', 'admin']
    }
  }],
  notes: {
    customer: {
      type: String
    },
    internal: {
      type: String
    }
  },
  refundInfo: {
    amount: {
      type: Number,
      min: 0
    },
    reason: {
      type: String
    },
    processedAt: {
      type: Date
    },
    transactionId: {
      type: String
    }
  }
}, {
  timestamps: true
})

// Indexes for better query performance
orderSchema.index({ userId: 1 })
orderSchema.index({ orderNumber: 1 })
orderSchema.index({ status: 1 })
orderSchema.index({ createdAt: -1 })
orderSchema.index({ 'paymentInfo.transactionId': 1 })

// Pre-save middleware to generate order number
orderSchema.pre('save', async function(next) {
  if (this.isNew && !this.orderNumber) {
    const count = await this.constructor.countDocuments()
    this.orderNumber = `HOMY-${Date.now()}-${(count + 1).toString().padStart(4, '0')}`
  }
  next()
})

// Method to calculate totals
orderSchema.methods.calculateTotals = function() {
  this.pricing.subtotal = this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  this.pricing.total = this.pricing.subtotal + this.pricing.tax + this.pricing.shipping - this.pricing.discount
  return this.save()
}

// Method to update status
orderSchema.methods.updateStatus = function(newStatus, note = '', updatedBy = 'system') {
  this.status = newStatus
  this.timeline.push({
    status: newStatus,
    note: note,
    updatedBy: updatedBy
  })
  return this.save()
}

// Method to add tracking info
orderSchema.methods.addTracking = function(carrier, trackingNumber, estimatedDelivery) {
  this.trackingInfo.push({
    carrier: carrier,
    trackingNumber: trackingNumber,
    estimatedDelivery: estimatedDelivery
  })
  return this.save()
}

// Method to process refund
orderSchema.methods.processRefund = function(amount, reason, transactionId) {
  this.refundInfo = {
    amount: amount,
    reason: reason,
    processedAt: new Date(),
    transactionId: transactionId
  }
  this.status = 'refunded'
  this.timeline.push({
    status: 'refunded',
    note: `Refund processed: $${amount} - ${reason}`,
    updatedBy: 'admin'
  })
  return this.save()
}

// Static method to find orders by user
orderSchema.statics.findByUser = function(userId, limit = 20) {
  return this.find({ userId: userId })
    .populate('items.productId', 'name images price')
    .populate('items.vendorId', 'company')
    .sort({ createdAt: -1 })
    .limit(limit)
}

// Static method to find orders by status
orderSchema.statics.findByStatus = function(status, limit = 50) {
  return this.find({ status: status })
    .populate('userId', 'name email')
    .populate('items.productId', 'name')
    .populate('items.vendorId', 'company')
    .sort({ createdAt: -1 })
    .limit(limit)
}

// Static method to get order statistics
orderSchema.statics.getStats = function(startDate, endDate) {
  const matchStage = {}
  if (startDate && endDate) {
    matchStage.createdAt = { $gte: startDate, $lte: endDate }
  }

  return this.aggregate([
    { $match: matchStage },
    {
      $group: {
        _id: null,
        totalOrders: { $sum: 1 },
        totalRevenue: { $sum: '$pricing.total' },
        averageOrderValue: { $avg: '$pricing.total' },
        statusCounts: {
          $push: '$status'
        }
      }
    }
  ])
}

module.exports = mongoose.model('Order', orderSchema)
