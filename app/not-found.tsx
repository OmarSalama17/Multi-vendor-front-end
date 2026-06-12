import Link from "next/link";
import "./globals.css";
export default function NotFound() {
  return (
    <div className="bg-background text-on-background font-body-lg min-h-screen flex flex-col antialiased selection:bg-primary-container selection:text-on-primary-container">
      <main className="flex-grow flex items-center justify-center relative overflow-hidden radial-glow px-section-padding py-stack-lg">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary opacity-5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-tertiary opacity-5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl w-full z-10 flex flex-col items-center text-center">
          <div className="relative w-full flex justify-center items-center mb-stack-lg h-64 md:h-96">
            <div className="absolute inset-0 flex items-center justify-center opacity-80 pointer-events-none">
              <span className="text-[120px] md:text-[200px] font-display-lg font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary-fixed to-primary-container glass-404 rounded-3xl px-8 py-4">
                ٤٠٤
              </span>
            </div>

            <div className="relative z-20 w-48 h-48 md:w-72 md:h-72 floating-bag">
              <img
                alt="Floating shopping bag portal"
                className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(164,205,220,0.4)]"
                data-alt="A highly detailed 3D illustration of a floating, glowing shopping bag acting as a mystical portal. The bag is sleek, semi-transparent, and emits a vibrant, deep teal radial glow against a pitch-black background. Inside the bag, swirling neon lights suggest an infinite cosmic market. The lighting is cinematic, highlighting the smooth, premium texture of the bag, emphasizing a modern, luxurious, and slightly surreal e-commerce aesthetic."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnzwp5tPC2QxrXR60cmEvuunfnP5jLMcj2GBTAz4sAPs3OLXduiI5YhG4Mn1hgaZh6okt87EeuBD7VrI9chYsy90rKMN5jDwK7fa11gzp3UsXOWT4R54t4BV9jckcy7Vqn4S6riPUaKwnFPyIzzg-oOcFTB3aiFAa3DpaTqYDLoDlwwPBQBqoUhsRAyD2FO7q9CvFztSwNsUsS5-6h6vttxR1nFTvptwTFkCI38uycqJYB5pcTpi_zb2-51220YtBBu5z9vtNqy16_"
              />
            </div>
          </div>

          <div className="max-w-2xl mx-auto space-y-stack-md">
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-stack-sm">
              عذراً، الصفحة تاهت في سوقنا
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg">
              الرابط اللي بتدور عليه مش موجود، بس تقدر ترجع تكتشف أحدث صيحات
              الموضة عندنا.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-grid-gap pt-stack-sm">
              <Link href={'/'} className="w-full sm:w-auto h-11 px-8 rounded-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-label-lg text-label-lg glow-button flex items-center justify-center gap-2">
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  home
                </span>
                الرئيسية
              </Link>

              <Link href={'/products'} className="w-full sm:w-auto h-11 px-8 rounded-full text-primary font-label-lg text-label-lg glass-button flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">explore</span>
                تصفح الموضة
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
