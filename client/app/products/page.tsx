import ProductsHero from '@/components/pages/ProductsHero'
import ProductCategories from '@/components/pages/ProductCategories'
import ProductFilters from '@/components/pages/ProductFilters'
import ProductGrid from '@/components/pages/ProductGrid'
import ARPreview from '@/components/pages/ARPreview'
import ShoppingCart from '@/components/pages/ShoppingCart'
import CTASection from '@/components/sections/CTASection'

export const metadata = {
  title: 'Products - HOMY | Curated Furniture, Decor & Home Essentials',
  description: 'Discover handpicked furniture, decor, lighting, and home essentials. All products are AI-recommended and vetted for quality. Shop with confidence.',
  keywords: 'furniture, home decor, lighting, flooring, paint, interior design products, curated home goods',
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <ProductsHero />
      <ProductCategories />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ProductFilters />
          </div>
          <div className="lg:col-span-3">
            <ProductGrid />
          </div>
        </div>
      </div>
      <ARPreview />
      <ShoppingCart />
      <CTASection />
    </div>
  )
}
