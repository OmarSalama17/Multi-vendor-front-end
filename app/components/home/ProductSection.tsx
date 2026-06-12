import ProductCard from './ProductCard';

interface ProductSectionProps {
  title: string;
  products: any[];
}

export default function ProductSection({ title, products }: ProductSectionProps) {
  return (
    <section className="py-12 px-section-padding container mx-auto w-full">
      <div className="flex justify-between items-center mb-8 flex-row-reverse">
        <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">{title}</h2>
        <a className="text-primary hover:underline font-label-lg flex items-center gap-1" href="#">
          عرض الكل <span className="material-symbols-outlined text-[18px]">arrow_back</span>
        </a>
      </div>
      <div className="flex overflow-x-auto hide-scrollbar gap-6 pb-4 flex-row-reverse snap-x">
        {products.map((prod, idx) => (
          <ProductCard 
            key={idx}
            storeName={prod.storeName}
            productName={prod.productName}
            price={prod.price}
            isNew={prod.isNew}
            colors={prod.colors}
          />
        ))}
      </div>
    </section>
  );
}