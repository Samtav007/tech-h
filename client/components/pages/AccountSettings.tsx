import { User, Mail, Phone, MapPin, Shield, Bell, CreditCard, LogOut } from 'lucide-react'

export default function AccountSettings() {
  const settings = [
    {
      icon: User,
      title: 'Profile Settings',
      description: 'Update your personal information',
      href: '#',
    },
    {
      icon: Mail,
      title: 'Email Preferences',
      description: 'Manage notifications and newsletters',
      href: '#',
    },
    {
      icon: Phone,
      title: 'Phone & Security',
      description: 'Two-factor authentication',
      href: '#',
    },
    {
      icon: MapPin,
      title: 'Addresses',
      description: 'Manage shipping addresses',
      href: '#',
    },
    {
      icon: CreditCard,
      title: 'Payment Methods',
      description: 'Update billing information',
      href: '#',
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Customize your alerts',
      href: '#',
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Data and privacy settings',
      href: '#',
    },
  ]

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-1">Account Settings</h3>
        <p className="text-gray-600 text-sm">Manage your account preferences</p>
      </div>

      <div className="space-y-3">
        {settings.map((setting, index) => {
          const Icon = setting.icon
          return (
            <button
              key={index}
              className="w-full flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors text-left"
            >
              <div className="bg-gray-100 p-2 rounded-lg">
                <Icon className="h-5 w-5 text-gray-600" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 text-sm">{setting.title}</h4>
                <p className="text-xs text-gray-600">{setting.description}</p>
              </div>
            </button>
          )
        })}
      </div>

      <div className="border-t border-gray-200 mt-6 pt-6">
        <button className="w-full flex items-center space-x-4 p-3 rounded-lg hover:bg-red-50 transition-colors text-left text-red-600">
          <div className="bg-red-100 p-2 rounded-lg">
            <LogOut className="h-5 w-5 text-red-600" />
          </div>
          <div>
            <h4 className="font-medium text-sm">Sign Out</h4>
            <p className="text-xs text-red-500">Log out of your account</p>
          </div>
        </button>
      </div>
    </div>
  )
}
