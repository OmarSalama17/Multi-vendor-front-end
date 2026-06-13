'use client';

import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export default function FeaturedStores() {
  const stores = [
    { name: "Street Style", category: "T-shirts / Casual" },
    { name: "Elegance", category: "Formal" },
    { name: "Fashion Bazaar", category: "Dresses / Women" },
    { name: "Sport Zone", category: "Sportswear" },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    direction: 'rtl', 
    align: 'start',
    dragFree: true 
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-12 px-section-padding container mx-auto w-full">
      <div className="flex justify-between items-center mb-8 flex-row-reverse">
        <div className="text-right">
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">متاجر مميزة</h2>
          <p className="font-body-lg text-on-surface-variant mt-1">محلات موثوقة</p>
        </div>

        <div className="hidden md:flex gap-2 flex-row-reverse">
          <button 
            onClick={scrollPrev} 
            className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-colors"
            aria-label="السابق"
          >
            <span className="material-symbols-outlined text-[20px]">chevron_right</span>
          </button>
          <button 
            onClick={scrollNext} 
            className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-colors"
            aria-label="التالي"
          >
            <span className="material-symbols-outlined text-[20px]">chevron_left</span>
          </button>
        </div>
      </div>

      <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef} dir="rtl">
        <div className="flex gap-6 pb-4">
          {stores.map((store, index) => (
            <div key={index} className="flex-none min-w-[280px] w-[280px] dark-card rounded-xl overflow-hidden border border-outline-variant group">
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
      </div>
    </section>
  );
}