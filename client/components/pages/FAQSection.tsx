'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How does the AI design process work?',
      answer: 'Our AI analyzes your uploaded photos or scanned room data to understand your space, lighting, and existing furniture. It then generates personalized design recommendations based on your style preferences, budget, and functional needs. The entire process takes less than 30 seconds.',
    },
    {
      question: 'Is the AI design tool really free?',
      answer: 'Yes! Our basic AI design tool is completely free to use. You get 5 design generations per month, access to our standard product catalog, and basic room scanning. Premium features like unlimited generations, designer consultation, and installation services are available with our paid plans.',
    },
    {
      question: 'How accurate are the AI recommendations?',
      answer: 'Our AI has a 95% accuracy rate in matching user preferences and creating functional designs. The system learns from thousands of successful projects and continuously improves. However, we always recommend consulting with our professional designers for complex projects.',
    },
    {
      question: 'Can I work with a human designer?',
      answer: 'Absolutely! Our platform combines AI efficiency with human expertise. You can book consultations with our network of vetted professional designers, get personalized advice, and have them review and refine your AI-generated designs.',
    },
    {
      question: 'What if I don\'t like the AI recommendations?',
      answer: 'You can regenerate designs as many times as you want (within your plan limits), adjust your preferences, or work with a human designer to refine the recommendations. We also offer a 30-day money-back guarantee on all services.',
    },
    {
      question: 'How do you ensure product quality?',
      answer: 'All products in our catalog are vetted for quality, durability, and style consistency. We partner with reputable vendors and manufacturers, and every product comes with our quality guarantee. You can also read reviews from other customers.',
    },
    {
      question: 'Do you offer installation services?',
      answer: 'Yes! We offer professional installation services for furniture and home improvement items. Installation is included with premium plans and available at discounted rates for free plan users. We also provide detailed DIY guides for those who prefer to install themselves.',
    },
    {
      question: 'Is my data secure and private?',
      answer: 'Absolutely. We use enterprise-grade security to protect your personal information and room data. Your photos and design preferences are encrypted and never shared with third parties without your consent. We\'re fully compliant with privacy regulations.',
    },
    {
      question: 'Can I use HOMY for commercial projects?',
      answer: 'Yes! We offer special plans for interior designers, real estate professionals, and commercial projects. These include bulk pricing, white-label options, and dedicated support. Contact our sales team for more information.',
    },
    {
      question: 'What if I need help or have questions?',
      answer: 'We offer 24/7 AI chat support, comprehensive help documentation, and video tutorials. Premium users get priority support and direct access to our design team. You can also join our community forum to connect with other users.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about how HOMY works and how it can help transform your space.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-12 bg-white rounded-xl p-8 shadow-lg text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our support team is here to help. Get in touch and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Contact Support
            </button>
            <button className="btn-secondary">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
