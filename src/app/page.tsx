import React from 'react';
import SidebarFilters from '@/components/SidebarFilters';
import ProductCard from '@/components/ProductCard';
import { MOCK_PRODUCTS } from '@/data/products';
import { Star } from 'lucide-react';

interface HomePageProps {
  searchParams: Promise<{
    category?: string;
    price?: string;
    search?: string;
  }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const resolvedParams = await searchParams;
  const targetCategory = resolvedParams.category || 'All';
  const targetPriceMax = parseInt(resolvedParams.price || '1000', 10);
  const targetSearch = resolvedParams.search?.toLowerCase() || '';

  // Multi-tier search filtering logic
  const filteredProducts = MOCK_PRODUCTS.filter((product) => {
    const matchesCategory = targetCategory === 'All' || product.category === targetCategory;
    const matchesPrice = product.price <= targetPriceMax;
    const matchesSearch = product.title.toLowerCase().includes(targetSearch) || 
                          product.description.toLowerCase().includes(targetSearch);
    return matchesCategory && matchesPrice && matchesSearch;
  });

  // Special featured layout extraction for the target item shown in the mockup
  const featuredProduct = filteredProducts.find(p => p.id === '8');
  const standardGridProducts = filteredProducts.filter(p => p.id !== '8');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Left Side Filter Panels */}
        <aside className="lg:col-span-1">
          <SidebarFilters />
        </aside>

        {/* Right Side Main Viewport */}
        <main className="lg:col-span-3 space-y-6">
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Product Listing</h1>
          
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 border border-dashed border-slate-200 rounded-xl">
              <p className="text-slate-500 font-medium">No components found matching current filters.</p>
            </div>
          ) : (
            /* START OF INTEGRATED SYSTEM GRID CONTAINER */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start">
              
              {/* Standard Products (IDs 1 to 7) */}
              {standardGridProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}

              {/* Banner Component for Featured item (Smartphone) - Positioned INSIDE the grid */}
              {featuredProduct && (
                <div className="col-span-1 sm:col-span-2 md:col-span-2 bg-white border border-slate-100 rounded-xl p-5 shadow-sm flex flex-row gap-6 min-h-[350px]">
                  
                  {/* Left Side: Product Image Canvas */}
                  <div className="w-2/5 relative flex items-center justify-center bg-slate-50 rounded-lg overflow-hidden p-2">
                    <img 
                      src={featuredProduct.image} 
                      alt={featuredProduct.title} 
                      className="object-contain max-h-full w-auto"
                    />
                  </div>

                  {/* Right Side: Details and Meta Information */}
                  <div className="w-3/5 flex flex-col justify-between py-1">
                    <div className="space-y-2">
                      <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                        {featuredProduct.title}
                      </h2>
                      <p className="text-lg font-bold text-slate-800">
                        ${featuredProduct.price}
                      </p>
                      
                      {/* Rating Stars */}
                      <div className="flex items-center gap-0.5 text-amber-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>

                      {/* Description */}
                      <p className="text-xs text-slate-500 leading-relaxed pr-2 line-clamp-4">
                        {featuredProduct.description}
                      </p>
                      
                      {/* Category Label */}
                      <div className="pt-1 text-xs">
                        <span className="text-slate-400 block font-medium">Category</span>
                        <span className="text-slate-700 font-semibold">{featuredProduct.category}</span>
                      </div>
                    </div>

                    {/* Action Button positioned to the bottom right edge */}
                    <div className="flex justify-end pt-2">
                      <button className="bg-[#0052B4] hover:bg-[#004395] text-white font-medium text-xs py-2 px-6 rounded-md transition-colors w-full sm:w-auto">
                        Add to Cart
                      </button>
                    </div>
                  </div>

                </div>
              )}
            </div>
            /* END OF INTEGRATED SYSTEM GRID CONTAINER */
          )}
        </main>
      </div>
    </div>
  );
}