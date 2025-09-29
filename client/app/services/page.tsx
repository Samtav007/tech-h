import ServicesHero from '@/components/pages/ServicesHero'
import PlanComparison from '@/components/pages/PlanComparison'
import ServiceFeatures from '@/components/pages/ServiceFeatures'
import ConsultationBooking from '@/components/pages/ConsultationBooking'
import InstallationServices from '@/components/pages/InstallationServices'
import CTASection from '@/components/sections/CTASection'

export const metadata = {
  title: 'Services - HOMY | AI Design Tool & Professional Consultation',
  description: 'Choose from our free AI design tool or premium services including professional consultation and installation. Start free and upgrade when ready.',
  keywords: 'interior design services, AI design tool, design consultation, installation services, freemium plans',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <PlanComparison />
      <ServiceFeatures />
      <ConsultationBooking />
      <InstallationServices />
      <CTASection />
    </div>
  )
}
