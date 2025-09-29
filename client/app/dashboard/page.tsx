import DashboardHero from '@/components/pages/DashboardHero'
import SavedDesigns from '@/components/pages/SavedDesigns'
import PurchaseHistory from '@/components/pages/PurchaseHistory'
import PremiumUpgrade from '@/components/pages/PremiumUpgrade'
import VendorManagement from '@/components/pages/VendorManagement'
import AccountSettings from '@/components/pages/AccountSettings'

export const metadata = {
  title: 'Dashboard - HOMY | Your Design Hub',
  description: 'Manage your saved designs, view purchase history, upgrade to premium, and access your HOMY account dashboard.',
  keywords: 'homy dashboard, saved designs, purchase history, premium upgrade, account management',
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <SavedDesigns />
            <PurchaseHistory />
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            <PremiumUpgrade />
            <VendorManagement />
            <AccountSettings />
          </div>
        </div>
      </div>
    </div>
  )
}
