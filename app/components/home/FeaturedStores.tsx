export default function FeaturedStores() {
  const stores = [
    { name: "Street Style", category: "T-shirts / Casual" },
    { name: "Elegance", category: "Formal" },
    { name: "Fashion Bazaar", category: "Dresses / Women" },
    { name: "Sport Zone", category: "Sportswear" },
  ];

  return (
    <section className="py-12 px-section-padding container mx-auto w-full">
      <div className="text-right mb-8">
        <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">متاجر مميزة</h2>
        <p className="font-body-lg text-on-surface-variant">محلات موثوقة</p>
      </div>
      <div className="flex overflow-x-auto hide-scrollbar gap-6 pb-4 flex-row-reverse snap-x">
        {stores.map((store, index) => (
          <div key={index} className="min-w-[280px] w-[280px] flex-shrink-0 snap-start dark-card rounded-xl overflow-hidden border border-outline-variant group">
            <div className="h-32 bg-[#2A2A2A] relative">
              <div className="absolute -bottom-6 right-4 w-16 h-16 rounded-full bg-surface border-4 border-[#1C1C1C] flex items-center justify-center text-primary font-bold text-xl overflow-hidden">
                <span className="material-symbols-outlined">storefront</span>
              </div>
            </div>
            <div className="p-4 pt-8 text-right">
              <h3 className="font-title-lg text-on-surface font-bold mb-1">{store.name}</h3>
              <p className="text-sm text-on-surface-variant mb-4">{store.category}</p>
              <button className="w-full py-2 rounded border border-primary text-primary font-label-lg hover:bg-primary/10 transition-colors flex items-center justify-center gap-2">
                زيارة المتجر <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}