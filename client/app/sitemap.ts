import { MetadataRoute } from 'next'
import { generateSitemap } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapData = generateSitemap()
  
  return sitemapData.map(item => ({
    url: item.url,
    lastModified: item.lastModified,
    changeFrequency: item.changeFrequency as any,
    priority: item.priority,
  }))
}
