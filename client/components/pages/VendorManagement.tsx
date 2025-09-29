import { Building, TrendingUp, DollarSign, Users, Eye, Edit, Plus } from 'lucide-react'

export default function VendorManagement() {
  const vendorStats = [
    {
      icon: DollarSign,
      number: '$2,450',
      label: 'Total Earnings',
    },
    {
      icon: TrendingUp,
      number: '12',
      label: 'Active Listings',
    },
    {
      icon: Users,
      number: '156',
      label: 'Customers Served',
    },
  ]

  const recentOrders = [
    {
      id: 'ORD-001',
      customer: 'Sarah Johnson',
      product: 'Modern Sofa',
      amount: '$899.00',
      commission: '$89.90',
      status: 'Completed',
    },
    {
      id: 'ORD-002',
      customer: 'Mike Chen',
      product: 'Dining Table Set',
      amount: '$1,299.00',
      commission: '$129.90',
      status: 'Processing',
    },
    {
      id: 'ORD-003',
      customer: 'Emily Davis',
      product: 'Bedroom Furniture',
      amount: '$2,100.00',
      commission: '$210.00',
      status: 'Completed',
    },
  ]

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">Vendor Dashboard</h3>
          <p className="text-gray-600 text-sm">Manage your products and earnings</p>
        </div>
        <button className="btn-primary text-sm flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Add Product</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {vendorStats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={index} className="text-center">
              <div className="bg-gray-50 rounded-lg p-3">
                <Icon className="h-5 w-5 text-primary-600 mx-auto mb-1" />
                <div className="text-lg font-bold text-gray-900">{stat.number}</div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Recent Orders */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Recent Orders</h4>
        <div className="space-y-3">
          {recentOrders.map((order) => (
            <div key={order.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <div className="flex items-center space-x-3">
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{order.product}</p>
                    <p className="text-xs text-gray-600">{order.customer}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    order.status === 'Completed' 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900 text-sm">{order.amount}</p>
                <p className="text-xs text-green-600">+{order.commission}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-y-3">
        <button className="w-full btn-secondary text-sm flex items-center justify-center space-x-2">
          <Eye className="h-4 w-4" />
          <span>View All Products</span>
        </button>
        <button className="w-full btn-secondary text-sm flex items-center justify-center space-x-2">
          <Edit className="h-4 w-4" />
          <span>Manage Store</span>
        </button>
        <button className="w-full btn-secondary text-sm flex items-center justify-center space-x-2">
          <TrendingUp className="h-4 w-4" />
          <span>Analytics</span>
        </button>
      </div>
    </div>
  )
}
