import Link from 'next/link'
import { ArrowRight, Sparkles, Users, Award, CheckCircle } from 'lucide-react'

export default function CTASection() {
  const benefits = [
    'Free AI design tool',
    'Unlimited design generations',
    'Professional consultation',
    'Curated product catalog',
    'Installation services',
    '30-day money-back guarantee',
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Sparkles className="h-8 w-8" />
            <span className="text-xl font-semibold">Ready to Transform Your Space?</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Start Your Design Journey Today
          </h2>
          
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who have transformed their spaces with our AI-powered design platform. 
            Get started for free and upgrade when you're ready for premium features.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Benefits */}
          <div>
            <h3 className="text-2xl font-bold mb-6">What You Get:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent-400 flex-shrink-0" />
                  <span className="text-primary-100">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Social Proof */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold mb-1">10K+</div>
                  <div className="text-sm text-primary-200">Happy Customers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">50K+</div>
                  <div className="text-sm text-primary-200">Designs Created</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">4.9/5</div>
                  <div className="text-sm text-primary-200">Rating</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - CTA */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Get Started in 2 Minutes</h3>
              <p className="text-primary-100">
                No credit card required. Start designing your dream space right away.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <Link
                href="/services"
                className="w-full bg-white text-primary-600 hover:bg-gray-50 font-semibold py-4 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 text-lg"
              >
                <Sparkles className="h-5 w-5" />
                <span>Try Free AI Design Tool</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              
              <Link
                href="/contact"
                className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 text-lg"
              >
                <Users className="h-5 w-5" />
                <span>Book Design Consultation</span>
              </Link>
            </div>

            <div className="text-center">
              <p className="text-sm text-primary-200 mb-4">
                Trusted by professionals and homeowners worldwide
              </p>
              <div className="flex items-center justify-center space-x-6 opacity-60">
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4" />
                  <span className="text-sm">SSL Secured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm">30-Day Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-primary-100 mb-6">
            Questions? Our AI assistant is here to help 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/how-it-works"
              className="text-white hover:text-accent-400 font-semibold inline-flex items-center space-x-2 transition-colors"
            >
              <span>How It Works</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <span className="hidden sm:block text-primary-300">•</span>
            <Link
              href="/testimonials"
              className="text-white hover:text-accent-400 font-semibold inline-flex items-center space-x-2 transition-colors"
            >
              <span>See Success Stories</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <span className="hidden sm:block text-primary-300">•</span>
            <Link
              href="/contact"
              className="text-white hover:text-accent-400 font-semibold inline-flex items-center space-x-2 transition-colors"
            >
              <span>Contact Support</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
