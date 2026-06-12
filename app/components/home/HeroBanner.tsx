import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[819px] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
        fill
          alt="Hero Background"
          className="w-full h-full object-cover object-center opacity-40"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOMoLVMF8hJu-FHo6lX-5W65RelzLtIg-82FndC0P1hOe0Ko_g4BCXoVjIFMWUAYKtaKcr_cTwjvxzb-9_IwUnqo3nHnT1N1__qYQTS0LO9LFGnWKmRWqSorxusJBf9nUCmMd-3SNbK9FK7En7pziTfSlB4jXpREnduiwYooxjTuL4zTuaPJHncBLPLpqxGh6EHyCTrd97j98aGOKXRZa9BHEa_yu57yDWPkZjpeS4APwrQmL-LSjvVpchGhKzZEroJwtbSBbQFdi-"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-transparent rtl:bg-gradient-to-l"></div>
      </div>
      <div className="relative z-10 w-full max-w-container-max mx-auto px-section-padding text-right">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 mb-4 rounded-full bg-surface-variant text-primary font-label-sm text-label-sm uppercase tracking-wider border border-outline-variant">
            مجموعة صيف ٢٠٢٥
          </span>
          <h1 className="font-display-lg text-display-lg text-on-surface font-bold leading-tight mb-6">
            أحدث صيحات الموضة من أحسن المحلات المحلية
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl">
            ملابس رجالي ونسائي من محلات موثوقة — بتوصيل لحد بيتك. اكتشف تشكيلة
            واسعة تناسب كل الأذواق.
          </p>
          <div className="flex gap-4 flex-row-reverse">
            <button className="h-[44px] px-8 rounded bg-gradient-to-r from-secondary to-secondary-container text-on-secondary font-label-lg text-label-lg hover:opacity-90 transition-opacity">
              تسوق دلوقتي
            </button>
            <button className="h-[44px] px-8 rounded bg-surface border border-primary text-primary font-label-lg text-label-lg hover:bg-surface-bright transition-colors">
              سجّل متجرك
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
