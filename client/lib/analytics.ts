// Analytics integration for HOMY
// This file handles Google Analytics, Hotjar, and custom event tracking

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    hj: (...args: any[]) => void
  }
}

// Google Analytics 4 Configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    })
  }
}

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      page_title: title || document.title,
    })
  }
}

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// HOMY-specific event tracking
export const trackHOMYEvents = {
  // Design events
  designCreated: (roomType: string, style: string) => {
    trackEvent('design_created', 'Design', `${roomType}_${style}`)
  },
  
  designShared: (designId: string) => {
    trackEvent('design_shared', 'Social', designId)
  },
  
  // E-commerce events
  productViewed: (productId: string, category: string) => {
    trackEvent('view_item', 'E-commerce', productId)
  },
  
  addToCart: (productId: string, value: number) => {
    trackEvent('add_to_cart', 'E-commerce', productId, value)
  },
  
  purchase: (transactionId: string, value: number, items: any[]) => {
    trackEvent('purchase', 'E-commerce', transactionId, value)
    // Track individual items
    items.forEach(item => {
      trackEvent('purchase_item', 'E-commerce', item.id, item.price)
    })
  },
  
  // User engagement
  aiChatbotUsed: (query: string) => {
    trackEvent('ai_chatbot_used', 'Engagement', query.substring(0, 50))
  },
  
  consultationBooked: (type: string) => {
    trackEvent('consultation_booked', 'Conversion', type)
  },
  
  premiumUpgrade: (plan: string) => {
    trackEvent('premium_upgrade', 'Conversion', plan)
  },
  
  // Content engagement
  blogPostRead: (postId: string, category: string) => {
    trackEvent('blog_post_read', 'Content', postId)
  },
  
  videoWatched: (videoId: string, duration: number) => {
    trackEvent('video_watched', 'Content', videoId, duration)
  },
  
  // Vendor events
  vendorSignup: (vendorType: string) => {
    trackEvent('vendor_signup', 'Partnership', vendorType)
  },
  
  vendorProductAdded: (productId: string) => {
    trackEvent('vendor_product_added', 'Partnership', productId)
  },
}

// Hotjar integration
export const initHotjar = () => {
  if (typeof window !== 'undefined' && window.hj) {
    // Hotjar is already initialized via script tag
    console.log('Hotjar initialized')
  }
}

// Performance tracking
export const trackPerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
        
        if (perfData && window.gtag) {
          window.gtag('event', 'timing_complete', {
            name: 'load',
            value: Math.round(perfData.loadEventEnd - perfData.fetchStart),
          })
        }
      }, 0)
    })
  }
}

// Error tracking
export const trackError = (error: Error, context?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'exception', {
      description: error.message,
      fatal: false,
      custom_map: {
        context: context || 'unknown',
      },
    })
  }
}

// Conversion tracking for key actions
export const trackConversions = {
  leadGenerated: (source: string) => {
    trackEvent('lead_generated', 'Conversion', source)
  },
  
  trialStarted: (plan: string) => {
    trackEvent('trial_started', 'Conversion', plan)
  },
  
  subscriptionCreated: (plan: string, value: number) => {
    trackEvent('subscription_created', 'Conversion', plan, value)
  },
}

// Initialize all analytics
export const initAnalytics = () => {
  initGA()
  initHotjar()
  trackPerformance()
  
  // Track initial page view
  trackPageView(window.location.pathname)
}
