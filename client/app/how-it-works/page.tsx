import HowItWorksHero from '@/components/pages/HowItWorksHero'
import ProcessSteps from '@/components/pages/ProcessSteps'
import DemoVideo from '@/components/pages/DemoVideo'
import FeaturesBreakdown from '@/components/pages/FeaturesBreakdown'
import FAQSection from '@/components/pages/FAQSection'
import CTASection from '@/components/sections/CTASection'

export const metadata = {
  title: 'How It Works - HOMY | AI-Powered Interior Design Process',
  description: 'Learn how HOMY\'s AI-powered interior design process works in 4 simple steps: Scan, AI Design, Shop, and Build. See the magic happen in minutes.',
  keywords: 'how homy works, AI design process, interior design steps, room transformation',
}

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen">
      <HowItWorksHero />
      <ProcessSteps />
      <DemoVideo />
      <FeaturesBreakdown />
      <FAQSection />
      <CTASection />
    </div>
  )
}
