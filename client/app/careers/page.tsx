import CareersHero from '@/components/pages/CareersHero'
import OpenPositions from '@/components/pages/OpenPositions'
import CompanyCulture from '@/components/pages/CompanyCulture'
import BenefitsPerks from '@/components/pages/BenefitsPerks'
import ApplicationProcess from '@/components/pages/ApplicationProcess'
import CTASection from '@/components/sections/CTASection'

export const metadata = {
  title: 'Careers at HOMY | Join Our Design Innovation Team',
  description: 'Join HOMY and help revolutionize interior design with AI. Explore open positions, learn about our culture, and discover why HOMY is the best place to grow your career.',
  keywords: 'careers at homy, jobs, interior design jobs, AI jobs, tech careers, design careers',
}

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <CareersHero />
      <OpenPositions />
      <CompanyCulture />
      <BenefitsPerks />
      <ApplicationProcess />
      <CTASection />
    </div>
  )
}
