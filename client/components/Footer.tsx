import Link from 'next/link'
import { Youtube, Instagram, Linkedin, Mail } from 'lucide-react'
import HomyLogo from './HomyLogo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'How It Works', href: '/how-it-works' },
      { name: 'Services', href: '/services' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    products: [
      { name: 'Furniture', href: '/products?category=furniture' },
      { name: 'Paint', href: '/products?category=paint' },
      { name: 'Lighting', href: '/products?category=lighting' },
      { name: 'Flooring', href: '/products?category=flooring' },
      { name: 'Decor', href: '/products?category=decor' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Testimonials', href: '/testimonials' },
      { name: 'Design Hacks', href: '/blog?category=design-hacks' },
      { name: 'Interior Trends', href: '/blog?category=trends' },
      { name: 'DIY Tips', href: '/blog?category=diy' },
    ],
    partners: [
      { name: 'For Designers', href: '/vendors' },
      { name: 'Vendor Benefits', href: '/vendors#benefits' },
      { name: 'Join as Partner', href: '/contact?type=partner' },
      { name: 'Premium Upgrade', href: '/services#premium' },
    ],
    legal: [
      { name: 'Terms & Conditions', href: '/legal/terms' },
      { name: 'Privacy Policy', href: '/legal/privacy' },
      { name: 'Refund Policy', href: '/legal/refunds' },
    ],
  }

  const socialLinks = [
    { name: 'YouTube', href: 'https://www.youtube.com/@TechieHome-x6g', icon: Youtube },
    { name: 'Instagram', href: 'https://www.instagram.com/techiehome007?utm_source=qr&igsh=MWpvMWRuY2pmeHc1Zg==', icon: Instagram },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/techie-home/about/?viewAsMember=true', icon: Linkedin },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <HomyLogo size="lg" className="text-white" />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transform your space with AI-powered interior design. Get personalized recommendations, 
              shop curated products, and connect with professional designers.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Get Design Ideas & Offers</h3>
              <p className="text-gray-400 text-sm mb-3">Weekly design tips, trends, and exclusive offers</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-r-lg transition-colors">
                  <Mail className="h-5 w-5" />
                </button>
              </div>
              <p className="text-gray-500 text-xs mt-2">Join 50,000+ design enthusiasts</p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Partners</h3>
            <ul className="space-y-2">
              {footerLinks.partners.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} Techie Home. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
