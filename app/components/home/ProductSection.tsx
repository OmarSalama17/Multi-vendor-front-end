"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ProductCard from "./ProductCard";

interface ProductSectionProps {
  title: string;
  products: any[];
}

export default function ProductSection({
  title,
  products,
}: ProductSectionProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    direction: "rtl",
    align: "start",
    dragFree: true,
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
        <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
          {title}
        </h2>

        <div className="flex items-center gap-4 flex-row-reverse">
          <a
            className="text-primary hover:underline font-label-lg flex items-center gap-1"
            href="#"
          >
            عرض الكل{" "}
            <span className="material-symbols-outlined text-[18px]">
              arrow_back
            </span>
          </a>

          <div className="hidden md:flex gap-2 flex-row-reverse">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-colors"
              aria-label="السابق"
            >
              <span className="material-symbols-outlined text-[20px]">
                chevron_right
              </span>
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-variant hover:text-on-surface transition-colors"
              aria-label="التالي"
            >
              <span className="material-symbols-outlined text-[20px]">
                chevron_left
              </span>
            </button>
          </div>
        </div>
      </div>

      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing"
        ref={emblaRef}
        dir="rtl"
      >
        <div className="flex gap-6 pb-4">
          {products.map((prod, idx) => (
            <div className="flex-none" key={idx}>
              <ProductCard
                storeName={prod.storeName}
                productName={prod.productName}
                price={prod.price}
                isNew={prod.isNew}
                colors={prod.colors}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
