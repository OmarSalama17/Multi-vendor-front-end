export default function ShopByCategory() {
  const menCategories = ["تيشيرتات", "قمصان", "بناطيل", "شورتات", "جاكيتات", "بدل", "رياضي"];
//   const womenCategories = ["فساتين", "بلوزات", "جيبات", "عباءات", "رياضي", "ملابس بيت"]; soon

  return (
    <section className="py-12 px-section-padding container mx-auto w-full">
      <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mb-8 text-right">
        تسوق حسب الفئة
      </h2>
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4 flex-row-reverse">
          <span className="font-title-lg text-title-lg text-on-surface whitespace-nowrap min-w-[80px]">👔 رجالي</span>
          <div className="flex overflow-x-auto flex-wrap hide-scrollbar gap-3 pb-2 flex-row-reverse flex-1">
            {menCategories.map((cat, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full border font-label-lg whitespace-nowrap transition-colors ${
                  index === 0
                    ? "border-primary bg-primary/10 text-primary hover:bg-primary/20"
                    : "border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* <div className="flex items-center gap-4 flex-row-reverse">
          <span className="font-title-lg text-title-lg text-on-surface whitespace-nowrap min-w-[80px]">👗 حريمي</span>
          <div className="flex overflow-x-auto hide-scrollbar gap-3 pb-2 flex-row-reverse flex-1">
            {womenCategories.map((cat, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded-full border border-outline-variant text-on-surface-variant font-label-lg whitespace-nowrap hover:border-primary hover:text-primary transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>
        </div> */} {/*soon*/}
      </div>
    </section>
  );
}