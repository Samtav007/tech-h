import VendorsHero from '@/components/pages/VendorsHero'
import VendorBenefits from '@/components/pages/VendorBenefits'
import SuccessStories from '@/components/pages/SuccessStories'
import PartnershipTypes from '@/components/pages/PartnershipTypes'
import VendorSignup from '@/components/pages/VendorSignup'
import CTASection from '@/components/sections/CTASection'

export const metadata = {
  title: 'For Designers & Vendors - HOMY | Partner with Us',
  description: 'Join HOMY as a designer or vendor partner. Access our AI-powered platform, reach new customers, and grow your business with our innovative tools.',
  keywords: 'interior designer partnership, vendor program, design business, AI design tools, designer network',
}

export default function VendorsPage() {
  return (
    <div className="min-h-screen">
      <VendorsHero />
      <VendorBenefits />
      <SuccessStories />
      <PartnershipTypes />
      <VendorSignup />
      <CTASection />
    </div>
  )
}
