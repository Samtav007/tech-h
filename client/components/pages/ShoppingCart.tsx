'use client'

import { useState } from 'react'
import { ShoppingCart, Plus, Minus, Trash2, CreditCard, Truck, Shield, ArrowRight } from 'lucide-react'

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Modern Sectional Sofa',
      price: 1299,
      quantity: 1,
      image: '/api/placeholder/100/100',
      color: 'Gray',
      size: 'Large',
      inStock: true,
    },
    {
      id: 2,
      name: 'Smart LED Strip Lights',
      price: 89,
      quantity: 2,
      image: '/api/placeholder/100/100',
      color: 'White',
      size: '10ft',
      inStock: true,
    },
    {
      id: 3,
      name: 'Premium Paint Set',
      price: 45,
      quantity: 1,
      image: '/api/placeholder/100/100',
      color: 'Blue',
      size: '1 Gallon',
      inStock: true,
    },
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id))
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ))
    }
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal > 500 ? 0 : 49
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Shopping Cart
          </h2>
          <p className="text-xl text-gray-600">
            Review your items and proceed to checkout
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  Cart Items ({cartItems.length})
                </h3>
              </div>
              
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6">
                    <div className="flex items-center space-x-4">
                      {/* Product Image */}
                      <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <ShoppingCart className="h-8 w-8 text-gray-400" />
                      </div>
                      
                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">
                          {item.name}
                        </h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                          <span>Color: {item.color}</span>
                          <span>Size: {item.size}</span>
                        </div>
                        <div className="text-lg font-bold text-gray-900">
                          ${item.price}
                        </div>
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      
                      {/* Price */}
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                      
                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Continue Shopping */}
            <div className="mt-6">
              <button className="text-primary-600 hover:text-primary-700 font-semibold flex items-center space-x-2">
                <ArrowRight className="h-4 w-4" />
                <span>Continue Shopping</span>
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Order Summary
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-lg font-bold text-gray-900">${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Shipping Info */}
              {shipping > 0 && (
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center space-x-2 text-blue-800">
                    <Truck className="h-4 w-4" />
                    <span className="text-sm font-semibold">Free shipping on orders over $500</span>
                  </div>
                  <p className="text-sm text-blue-700 mt-1">
                    Add ${(500 - subtotal).toFixed(2)} more for free shipping
                  </p>
                </div>
              )}

              {/* Checkout Button */}
              <button className="w-full btn-primary mb-4 flex items-center justify-center space-x-2">
                <CreditCard className="h-5 w-5" />
                <span>Proceed to Checkout</span>
              </button>

              {/* Security */}
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                <Shield className="h-4 w-4" />
                <span>Secure checkout with SSL encryption</span>
              </div>

              {/* Payment Methods */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-3">We accept:</p>
                <div className="flex items-center space-x-2">
                  {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((method) => (
                    <div key={method} className="bg-gray-100 px-2 py-1 rounded text-xs font-semibold">
                      {method}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
              <Truck className="h-8 w-8 text-green-600 mx-auto" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Free Shipping</h4>
            <p className="text-gray-600 text-sm">On orders over $500</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
              <Shield className="h-8 w-8 text-blue-600 mx-auto" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">30-Day Returns</h4>
            <p className="text-gray-600 text-sm">Hassle-free returns</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
              <CreditCard className="h-8 w-8 text-purple-600 mx-auto" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Secure Payment</h4>
            <p className="text-gray-600 text-sm">SSL encrypted checkout</p>
          </div>
        </div>
      </div>
    </section>
  )
}
