interface ProductCardProps {
  storeName: string;
  productName: string;
  price: number;
  isNew?: boolean;
  colors?: string[];
}

export default function ProductCard({ storeName, productName, price, isNew = false, colors = [] }: ProductCardProps) {
  return (
    <div className="min-w-[240px] w-[240px] flex-shrink-0 snap-start group cursor-pointer">
      <div className="relative h-[320px] rounded-lg overflow-hidden bg-surface-container-high mb-3">
        {isNew && (
          <div className="absolute top-2 left-2 z-10 bg-secondary text-on-secondary px-2 py-1 rounded text-xs font-bold">
            جديد
          </div>
        )}
        <div className="w-full h-full bg-[#1A1A1A]"></div>
      </div>
      <div className="text-right">
        <div className="text-on-surface-variant text-sm mb-1">{storeName}</div>
        <h3 className="font-title-lg text-on-surface truncate mb-1 group-hover:text-primary transition-colors">
          {productName}
        </h3>
        {colors.length > 0 && (
          <div className="flex gap-1 justify-end mb-2">
            {colors.map((color, index) => (
              <div
                key={index}
                className="w-3 h-3 rounded-full border border-outline-variant"
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>
        )}
        <div className="font-bold text-on-surface">{price} جنيه</div>
      </div>
    </div>
  );
}