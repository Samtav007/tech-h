import BlogHero from '@/components/pages/BlogHero'
import BlogCategories from '@/components/pages/BlogCategories'
import FeaturedPosts from '@/components/pages/FeaturedPosts'
import RecentPosts from '@/components/pages/RecentPosts'
import SocialMediaHub from '@/components/pages/SocialMediaHub'
import NewsletterSignup from '@/components/pages/NewsletterSignup'

export const metadata = {
  title: 'Blog & Inspiration Hub - HOMY | Interior Design Tips & Trends',
  description: 'Discover the latest interior design trends, DIY tips, and design inspiration. Get expert advice and transform your space with our comprehensive design guides.',
  keywords: 'interior design blog, design trends, DIY home decor, design inspiration, home improvement tips',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <BlogHero />
      <BlogCategories />
      <FeaturedPosts />
      <RecentPosts />
      <SocialMediaHub />
      <NewsletterSignup />
    </div>
  )
}
