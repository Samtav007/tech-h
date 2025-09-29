const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'hömy API',
      version: '1.0.0',
      description: 'AI-Powered Interior Design Platform API',
      contact: {
        name: 'hömy Team',
        email: 'api@homy.com',
        url: 'https://homy.com'
      },
      license: {
        name: 'MIT',
        url: 'https://opensource.org/licenses/MIT'
      }
    },
    servers: [
      {
        url: process.env.NODE_ENV === 'production' 
          ? 'https://homy-api.onrender.com' 
          : 'http://localhost:5000',
        description: process.env.NODE_ENV === 'production' 
          ? 'Production server' 
          : 'Development server'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        },
        firebaseAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'Firebase ID Token'
        }
      },
      schemas: {
        User: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              description: 'User ID'
            },
            firebaseUid: {
              type: 'string',
              description: 'Firebase UID'
            },
            email: {
              type: 'string',
              format: 'email',
              description: 'User email address'
            },
            name: {
              type: 'string',
              description: 'User full name'
            },
            photoURL: {
              type: 'string',
              format: 'uri',
              description: 'User profile photo URL'
            },
            phone: {
              type: 'string',
              description: 'User phone number'
            },
            company: {
              type: 'string',
              description: 'User company name'
            },
            isPremium: {
              type: 'boolean',
              description: 'Whether user has premium subscription'
            },
            subscription: {
              type: 'object',
              properties: {
                plan: {
                  type: 'string',
                  enum: ['free', 'premium', 'enterprise'],
                  description: 'Subscription plan type'
                },
                startDate: {
                  type: 'string',
                  format: 'date-time',
                  description: 'Subscription start date'
                },
                endDate: {
                  type: 'string',
                  format: 'date-time',
                  description: 'Subscription end date'
                }
              }
            },
            preferences: {
              type: 'object',
              properties: {
                designStyle: {
                  type: 'array',
                  items: {
                    type: 'string',
                    enum: ['modern', 'traditional', 'minimalist', 'bohemian', 'industrial', 'scandinavian']
                  }
                },
                budgetRange: {
                  type: 'string',
                  enum: ['under-1000', '1000-5000', '5000-10000', '10000-25000', 'over-25000']
                },
                roomTypes: {
                  type: 'array',
                  items: {
                    type: 'string',
                    enum: ['living', 'bedroom', 'kitchen', 'bathroom', 'dining', 'office', 'outdoor']
                  }
                }
              }
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'User creation timestamp'
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              description: 'User last update timestamp'
            }
          }
        },
        Product: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              description: 'Product ID'
            },
            name: {
              type: 'string',
              description: 'Product name'
            },
            description: {
              type: 'string',
              description: 'Product description'
            },
            category: {
              type: 'string',
              enum: ['furniture', 'decor', 'lighting', 'textiles', 'storage', 'outdoor'],
              description: 'Product category'
            },
            subcategory: {
              type: 'string',
              description: 'Product subcategory'
            },
            price: {
              type: 'number',
              minimum: 0,
              description: 'Product price'
            },
            currency: {
              type: 'string',
              enum: ['USD', 'EUR', 'GBP', 'CAD', 'AUD'],
              description: 'Product currency'
            },
            images: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  url: {
                    type: 'string',
                    format: 'uri'
                  },
                  alt: {
                    type: 'string'
                  },
                  isPrimary: {
                    type: 'boolean'
                  }
                }
              }
            },
            dimensions: {
              type: 'object',
              properties: {
                length: {
                  type: 'number'
                },
                width: {
                  type: 'number'
                },
                height: {
                  type: 'number'
                },
                unit: {
                  type: 'string',
                  enum: ['inches', 'cm', 'feet', 'meters']
                }
              }
            },
            materials: {
              type: 'array',
              items: {
                type: 'string'
              }
            },
            colors: {
              type: 'array',
              items: {
                type: 'string'
              }
            },
            brand: {
              type: 'string',
              description: 'Product brand'
            },
            vendor: {
              type: 'string',
              description: 'Vendor ID'
            },
            stock: {
              type: 'number',
              minimum: 0,
              description: 'Available stock quantity'
            },
            isActive: {
              type: 'boolean',
              description: 'Whether product is active'
            },
            rating: {
              type: 'object',
              properties: {
                average: {
                  type: 'number',
                  minimum: 0,
                  maximum: 5
                },
                count: {
                  type: 'number',
                  minimum: 0
                }
              }
            }
          }
        },
        Design: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              description: 'Design ID'
            },
            userId: {
              type: 'string',
              description: 'User ID who created the design'
            },
            name: {
              type: 'string',
              description: 'Design name'
            },
            description: {
              type: 'string',
              description: 'Design description'
            },
            roomType: {
              type: 'string',
              enum: ['living', 'bedroom', 'kitchen', 'bathroom', 'dining', 'office', 'outdoor'],
              description: 'Room type'
            },
            style: {
              type: 'string',
              enum: ['modern', 'traditional', 'minimalist', 'bohemian', 'industrial', 'scandinavian'],
              description: 'Design style'
            },
            products: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  productId: {
                    type: 'string'
                  },
                  position: {
                    type: 'object',
                    properties: {
                      x: { type: 'number' },
                      y: { type: 'number' },
                      z: { type: 'number' }
                    }
                  },
                  rotation: {
                    type: 'number'
                  },
                  scale: {
                    type: 'number'
                  }
                }
              }
            },
            isPublic: {
              type: 'boolean',
              description: 'Whether design is public'
            },
            likes: {
              type: 'number',
              minimum: 0,
              description: 'Number of likes'
            },
            views: {
              type: 'number',
              minimum: 0,
              description: 'Number of views'
            },
            totalCost: {
              type: 'number',
              minimum: 0,
              description: 'Total cost of design'
            },
            status: {
              type: 'string',
              enum: ['draft', 'completed', 'archived'],
              description: 'Design status'
            }
          }
        },
        Order: {
          type: 'object',
          properties: {
            _id: {
              type: 'string',
              description: 'Order ID'
            },
            userId: {
              type: 'string',
              description: 'User ID who placed the order'
            },
            orderNumber: {
              type: 'string',
              description: 'Unique order number'
            },
            items: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  productId: {
                    type: 'string'
                  },
                  quantity: {
                    type: 'number',
                    minimum: 1
                  },
                  price: {
                    type: 'number',
                    minimum: 0
                  },
                  vendorId: {
                    type: 'string'
                  }
                }
              }
            },
            pricing: {
              type: 'object',
              properties: {
                subtotal: {
                  type: 'number',
                  minimum: 0
                },
                tax: {
                  type: 'number',
                  minimum: 0
                },
                shipping: {
                  type: 'number',
                  minimum: 0
                },
                discount: {
                  type: 'number',
                  minimum: 0
                },
                total: {
                  type: 'number',
                  minimum: 0
                }
              }
            },
            status: {
              type: 'string',
              enum: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded'],
              description: 'Order status'
            },
            shippingAddress: {
              type: 'object',
              properties: {
                name: { type: 'string' },
                street: { type: 'string' },
                city: { type: 'string' },
                state: { type: 'string' },
                zipCode: { type: 'string' },
                country: { type: 'string' },
                phone: { type: 'string' }
              }
            },
            paymentInfo: {
              type: 'object',
              properties: {
                method: {
                  type: 'string',
                  enum: ['card', 'paypal', 'bank_transfer', 'apple_pay', 'google_pay']
                },
                transactionId: {
                  type: 'string'
                },
                status: {
                  type: 'string',
                  enum: ['pending', 'completed', 'failed', 'refunded']
                }
              }
            }
          }
        },
        Error: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: false
            },
            error: {
              type: 'string',
              description: 'Error message'
            },
            details: {
              type: 'object',
              description: 'Additional error details'
            }
          }
        },
        Success: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: true
            },
            message: {
              type: 'string',
              description: 'Success message'
            },
            data: {
              type: 'object',
              description: 'Response data'
            }
          }
        }
      }
    },
    security: [
      {
        firebaseAuth: []
      }
    ]
  },
  apis: ['./routes/*.js', './models/*.js'] // paths to files containing OpenAPI definitions
}

const specs = swaggerJsdoc(options)

module.exports = {
  specs,
  swaggerUi
}
