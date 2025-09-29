import HeroSection from '@/components/sections/HeroSection'
import TrustMarkers from '@/components/sections/TrustMarkers'
import HowItWorksPreview from '@/components/sections/HowItWorksPreview'
import ServicesPreview from '@/components/sections/ServicesPreview'
import ProductsPreview from '@/components/sections/ProductsPreview'
import TestimonialsPreview from '@/components/sections/TestimonialsPreview'
import BlogPreview from '@/components/sections/BlogPreview'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrustMarkers />
      <HowItWorksPreview />
      <ServicesPreview />
      <ProductsPreview />
      <TestimonialsPreview />
      <BlogPreview />
      <CTASection />
    </div>
  )
}
