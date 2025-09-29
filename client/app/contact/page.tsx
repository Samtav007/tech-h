import ContactHero from '@/components/pages/ContactHero'
import ContactForm from '@/components/pages/ContactForm'
import ContactInfo from '@/components/pages/ContactInfo'
import WhatsAppCTA from '@/components/pages/WhatsAppCTA'
import FAQSection from '@/components/pages/FAQSection'
import CTASection from '@/components/sections/CTASection'

export const metadata = {
  title: 'Contact Us - HOMY | Get in Touch with Our Design Team',
  description: 'Contact HOMY for design consultations, support, or partnership opportunities. Get in touch via form, WhatsApp, or visit our office. We\'re here to help!',
  keywords: 'contact homy, design consultation, customer support, partnership inquiry, interior design help',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <WhatsAppCTA />
      <FAQSection />
      <CTASection />
    </div>
  )
}
