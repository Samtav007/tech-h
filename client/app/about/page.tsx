import AboutHero from '@/components/pages/AboutHero'
import VisionMission from '@/components/pages/VisionMission'
import FoundersStory from '@/components/pages/FoundersStory'
import CompetitiveAdvantages from '@/components/pages/CompetitiveAdvantages'
import TeamSection from '@/components/pages/TeamSection'
import ValuesSection from '@/components/pages/ValuesSection'
import CTASection from '@/components/sections/CTASection'

export const metadata = {
  title: 'About Us - HOMY | AI-Powered Interior Design',
  description: 'Learn about HOMY\'s mission to democratize interior design through AI technology. Meet founders Chirag & Samarth and discover our 5-phase journey.',
  keywords: 'about homy, interior design company, AI design founders, techie home story',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <VisionMission />
      <FoundersStory />
      <CompetitiveAdvantages />
      <TeamSection />
      <ValuesSection />
      <CTASection />
    </div>
  )
}
