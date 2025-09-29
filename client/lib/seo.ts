// SEO optimization utilities for HOMY
// This file provides structured data, meta tags, and SEO helpers

export interface SEOData {
  title: string
  description: string
  keywords: string
  canonical?: string
  ogImage?: string
  ogType?: string
  twitterCard?: string
  structuredData?: any
}

// Default SEO configuration
export const defaultSEO: SEOData = {
  title: 'HOMY - AI-Powered Interior Design Platform',
  description: 'Transform your space with AI-powered interior design. Get personalized recommendations, shop curated products, and connect with professional designers.',
  keywords: 'interior design, AI design, home decor, furniture, design consultation, room design',
  ogType: 'website',
  twitterCard: 'summary_large_image',
}

// Page-specific SEO configurations
export const pageSEO = {
  home: {
    title: 'HOMY - AI-Powered Interior Design Platform | Transform Your Space',
    description: 'Transform your space with AI-powered interior design. Get personalized recommendations, shop curated products, and connect with professional designers. Start your design journey today!',
    keywords: 'interior design, AI design, home decor, furniture, design consultation, room design, home improvement',
  },
  
  about: {
    title: 'About HOMY - Revolutionizing Interior Design with AI Technology',
    description: 'Learn about HOMY\'s mission to democratize interior design through AI technology. Meet our founders and discover how we\'re transforming the design industry.',
    keywords: 'about homy, interior design company, AI technology, design innovation, founders story',
  },
  
  services: {
    title: 'HOMY Services - AI Design Consultation & Premium Interior Design',
    description: 'Explore HOMY\'s comprehensive design services. From free AI recommendations to premium design consultations, we have the perfect solution for your space.',
    keywords: 'design services, AI consultation, premium design, interior design services, design consultation',
  },
  
  products: {
    title: 'HOMY Products - Curated Furniture, Decor & Home Essentials',
    description: 'Shop HOMY\'s curated collection of furniture, decor, and home essentials. AI-recommended products for every style and budget.',
    keywords: 'furniture, home decor, interior design products, curated furniture, home essentials',
  },
  
  blog: {
    title: 'HOMY Blog - Interior Design Tips, Trends & Inspiration',
    description: 'Discover the latest interior design trends, DIY tips, and design inspiration on the HOMY blog. Expert advice for every space.',
    keywords: 'interior design blog, design trends, DIY tips, design inspiration, home improvement',
  },
  
  testimonials: {
    title: 'HOMY Testimonials - Real Customer Success Stories & Reviews',
    description: 'Read real customer testimonials and see amazing before/after transformations. Discover why thousands trust HOMY for their interior design needs.',
    keywords: 'homy reviews, customer testimonials, design transformations, success stories',
  },
  
  careers: {
    title: 'Careers at HOMY - Join Our Design Innovation Team',
    description: 'Join HOMY and help revolutionize interior design with AI. Explore open positions, learn about our culture, and discover why HOMY is the best place to grow your career.',
    keywords: 'careers at homy, jobs, interior design jobs, AI jobs, tech careers, design careers',
  },
  
  contact: {
    title: 'Contact HOMY - Get in Touch with Our Design Team',
    description: 'Contact HOMY for design consultations, support, or partnership opportunities. Get in touch via form, WhatsApp, or visit our office.',
    keywords: 'contact homy, design consultation, customer support, partnership inquiry, interior design help',
  },
  
  vendors: {
    title: 'Join HOMY as a Designer or Vendor - Partnership Opportunities',
    description: 'Join HOMY\'s partner network and grow your design business. Earn commissions, reach new customers, and access our AI-powered platform.',
    keywords: 'designer partnership, vendor program, interior design partnership, design business',
  },
}

// Generate structured data for different page types
export const generateStructuredData = {
  organization: () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HOMY',
    alternateName: 'Techie Home',
    url: 'https://homy.com',
    logo: 'https://homy.com/logo.png',
    description: 'AI-powered interior design platform that helps people transform their spaces',
    foundingDate: '2021',
    founders: [
      {
        '@type': 'Person',
        name: 'Chirag Sharma',
        jobTitle: 'Co-Founder & CEO',
      },
      {
        '@type': 'Person',
        name: 'Samarth Sehgal',
        jobTitle: 'Co-Founder & CTO',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Design Street',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      postalCode: '94105',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      email: 'nirmantech8@gmail.com',
    },
    sameAs: [
      'https://www.youtube.com/@TechieHome-x6g',
      'https://www.instagram.com/techiehome007',
      'https://www.linkedin.com/company/techie-home',
    ],
  }),
  
  website: () => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'HOMY',
    url: 'https://homy.com',
    description: 'AI-powered interior design platform',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://homy.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }),
  
  product: (product: any) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images,
    brand: {
      '@type': 'Brand',
      name: 'HOMY',
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'HOMY',
      },
    },
    aggregateRating: product.rating ? {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    } : undefined,
  }),
  
  article: (article: any) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'HOMY',
      logo: {
        '@type': 'ImageObject',
        url: 'https://homy.com/logo.png',
      },
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
  }),
  
  service: () => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'AI-Powered Interior Design',
    description: 'Professional interior design services powered by artificial intelligence',
    provider: {
      '@type': 'Organization',
      name: 'HOMY',
    },
    areaServed: 'Worldwide',
    serviceType: 'Interior Design',
    offers: [
      {
        '@type': 'Offer',
        name: 'Free AI Design',
        description: 'Basic AI-powered design recommendations',
        price: '0',
        priceCurrency: 'USD',
      },
      {
        '@type': 'Offer',
        name: 'Premium Design Consultation',
        description: 'Professional design consultation with expert designers',
        price: '29',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '29',
          priceCurrency: 'USD',
          billingIncrement: '1',
          unitText: 'MONTH',
        },
      },
    ],
  }),
}

// Generate meta tags for a page
export const generateMetaTags = (seoData: SEOData) => {
  const title = seoData.title || defaultSEO.title
  const description = seoData.description || defaultSEO.description
  const keywords = seoData.keywords || defaultSEO.keywords
  const canonical = seoData.canonical || ''
  const ogImage = seoData.ogImage || '/og-image.jpg'
  
  return {
    title,
    description,
    keywords,
    canonical,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'HOMY',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: seoData.ogType || 'website',
    },
    twitter: {
      card: seoData.twitterCard || 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

// Generate sitemap data
export const generateSitemap = () => {
  const baseUrl = 'https://homy.com'
  const currentDate = new Date().toISOString()
  
  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/vendors`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ]
}
