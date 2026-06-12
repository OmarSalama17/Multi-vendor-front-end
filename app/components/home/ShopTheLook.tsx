export default function ShopTheLook() {
  const looks = [
    { title: "اللوك الكاجوال", heightClass: "h-[400px] md:h-[450px]" },
    { title: "اللوك الرسمي", heightClass: "h-[400px] md:h-[500px] md:-mt-6" },
    { title: "اللوك الرياضي", heightClass: "h-[400px] md:h-[450px]" },
  ];

  return (
    <section className="py-12 px-section-padding container mx-auto w-full">
      <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold mb-8 text-right">اختار لوكك</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {looks.map((look, index) => (
          <div key={index} className={`relative ${look.heightClass} rounded-xl overflow-hidden group cursor-pointer`}>
            <div className="absolute inset-0 bg-[#1A1A1A]"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 text-right">
              <h3 className="font-headline-md text-headline-md text-white font-bold mb-4">{look.title}</h3>
              <button className="px-6 py-2 rounded bg-secondary text-on-secondary font-label-lg hover:bg-secondary-container transition-colors w-max ml-auto">
                تسوق اللوك
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}