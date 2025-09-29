import { Package, Download, Eye, Star, Calendar, DollarSign, Truck, CheckCircle } from 'lucide-react'

export default function PurchaseHistory() {
  const purchases = [
    {
      id: 'HOMY-2023-001',
      date: 'Dec 15, 2023',
      status: 'Delivered',
      total: '$1,247.50',
      items: 8,
      image: '/api/placeholder/80/80',
      itemsList: [
        { name: 'Modern Sofa - Gray', quantity: 1, price: '$899.00' },
        { name: 'Coffee Table - Oak', quantity: 1, price: '$299.00' },
        { name: 'Throw Pillows (Set of 2)', quantity: 1, price: '$49.50' },
      ],
      tracking: 'TRK123456789',
      deliveryDate: 'Dec 18, 2023',
    },
    {
      id: 'HOMY-2023-002',
      date: 'Dec 8, 2023',
      status: 'Shipped',
      total: '$456.75',
      items: 4,
      image: '/api/placeholder/80/80',
      itemsList: [
        { name: 'Dining Table - White', quantity: 1, price: '$399.00' },
        { name: 'Dining Chairs (Set of 4)', quantity: 1, price: '$199.00' },
      ],
      tracking: 'TRK987654321',
      deliveryDate: 'Dec 20, 2023',
    },
    {
      id: 'HOMY-2023-003',
      date: 'Nov 28, 2023',
      status: 'Delivered',
      total: '$234.99',
      items: 3,
      image: '/api/placeholder/80/80',
      itemsList: [
        { name: 'Bedside Lamps (Pair)', quantity: 1, price: '$89.99' },
        { name: 'Wall Art - Abstract', quantity: 1, price: '$79.99' },
        { name: 'Decorative Vase', quantity: 1, price: '$65.01' },
      ],
      tracking: 'TRK456789123',
      deliveryDate: 'Dec 2, 2023',
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-600'
      case 'Shipped':
        return 'bg-blue-100 text-blue-600'
      case 'Processing':
        return 'bg-yellow-100 text-yellow-600'
      case 'Cancelled':
        return 'bg-red-100 text-red-600'
      default:
        return 'bg-gray-100 text-gray-600'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Delivered':
        return CheckCircle
      case 'Shipped':
        return Truck
      default:
        return Package
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Purchase History</h2>
          <p className="text-gray-600">Track your orders and download receipts</p>
        </div>
        
        <button className="btn-secondary flex items-center space-x-2">
          <Download className="h-4 w-4" />
          <span>Export All</span>
        </button>
      </div>

      <div className="space-y-6">
        {purchases.map((purchase) => {
          const StatusIcon = getStatusIcon(purchase.status)
          return (
            <div key={purchase.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div className="flex items-center space-x-4 mb-4 lg:mb-0">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                    <Package className="h-8 w-8 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Order #{purchase.id}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{purchase.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Package className="h-3 w-3" />
                        <span>{purchase.items} items</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-3 w-3" />
                        <span>{purchase.total}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(purchase.status)}`}>
                    <StatusIcon className="h-4 w-4 inline mr-1" />
                    {purchase.status}
                  </span>
                  
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors">
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Order Items */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-3">Items Ordered</h4>
                <div className="space-y-2">
                  {purchase.itemsList.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span className="text-gray-700">{item.name} × {item.quantity}</span>
                      <span className="font-semibold text-gray-900">{item.price}</span>
                    </div>
                  ))}
                  {purchase.items > purchase.itemsList.length && (
                    <div className="text-sm text-gray-500">
                      +{purchase.items - purchase.itemsList.length} more items
                    </div>
                  )}
                </div>
              </div>

              {/* Tracking Info */}
              {purchase.status === 'Shipped' && (
                <div className="bg-blue-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Truck className="h-4 w-4 text-blue-600" />
                    <span className="font-semibold text-blue-900">Tracking Information</span>
                  </div>
                  <div className="text-sm text-blue-800">
                    <p>Tracking Number: <span className="font-mono">{purchase.tracking}</span></p>
                    <p>Expected Delivery: {purchase.deliveryDate}</p>
                  </div>
                </div>
              )}

              {purchase.status === 'Delivered' && (
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="font-semibold text-green-900">Delivered</span>
                  </div>
                  <div className="text-sm text-green-800">
                    <p>Delivered on: {purchase.deliveryDate}</p>
                    <p>Tracking Number: <span className="font-mono">{purchase.tracking}</span></p>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center space-x-4">
                <button className="btn-primary text-sm">
                  Track Package
                </button>
                <button className="btn-secondary text-sm">
                  Reorder Items
                </button>
                <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                  Leave Review
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* Load More */}
      <div className="text-center mt-8">
        <button className="btn-secondary">
          Load More Orders
        </button>
      </div>
    </div>
  )
}
