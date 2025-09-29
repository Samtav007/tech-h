import TestimonialsHero from '@/components/pages/TestimonialsHero'
import VideoTestimonials from '@/components/pages/VideoTestimonials'
import BeforeAfterTransformations from '@/components/pages/BeforeAfterTransformations'
import ClientSuccessStories from '@/components/pages/ClientSuccessStories'
import PressMentions from '@/components/pages/PressMentions'
import CTASection from '@/components/sections/CTASection'

export const metadata = {
  title: 'Testimonials & Case Studies - HOMY | Customer Success Stories',
  description: 'See real transformations and hear from satisfied customers. Browse our collection of before/after photos, video testimonials, and success stories.',
  keywords: 'customer testimonials, before after photos, interior design reviews, success stories, case studies',
}

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <TestimonialsHero />
      <VideoTestimonials />
      <BeforeAfterTransformations />
      <ClientSuccessStories />
      <PressMentions />
      <CTASection />
    </div>
  )
}
