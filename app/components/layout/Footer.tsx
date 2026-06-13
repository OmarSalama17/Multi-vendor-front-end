import Link from 'next/link';

type FooterLink = {
  name: string;
  href: string;
};

const categoryLinks: FooterLink[] = [
  { name: 'الرجال', href: '/category/mens' },
  { name: 'النساء', href: '/category/womens' },
  { name: 'الأطفال', href: '/category/kids' },
  { name: 'الإكسسوارات', href: '/category/accessories' },
];

const accountLinks: FooterLink[] = [
  { name: 'طلباتي', href: '/account/orders' },
  { name: 'الملف الشخصي', href: '/account/profile' },
  { name: 'المحفظة', href: '/account/wallet' },
  { name: 'المرتجعات', href: '/account/returns' },
];

const aboutLinks: FooterLink[] = [
  { name: 'الوظائف', href: '/careers' },
  { name: 'الصحافة', href: '/press' },
  { name: 'المدونة', href: '/blog' },
  { name: 'الاستدامة', href: '/sustainability' },
];

const bottomLinks: FooterLink[] = [
  { name: 'عن المنصة', href: '/about' },
  { name: 'روابط سريعة', href: '/quick-links' },
  { name: 'تواصل معنا', href: '/contact' },
  { name: 'تابعنا', href: '/social' },
  { name: 'الشروط والأحكام', href: '/terms' },
  { name: 'سياسة الخصوصية', href: '/privacy' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant w-full py-stack-lg px-section-padding flex flex-col items-center gap-grid-gap" dir="rtl">
      <div className="w-full max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-stack-lg">
        
        <div className="flex flex-col gap-stack-md lg:col-span-1">
          <span className="font-headline-md text-headline-md text-primary font-bold">سوق</span>
          <p className="font-body-md text-body-md text-on-surface-variant">
            وجهتك الأولى للتسوق الإلكتروني الراقي في مصر. نقدم لك تجربة تسوق فريدة تجمع بين الجودة والتنوع والأسعار التنافسية.
          </p>
          <div className="flex flex-col gap-stack-sm mt-stack-sm">
            <span className="font-label-lg text-label-lg text-on-surface">حمل التطبيق الآن</span>
            <div className="flex gap-stack-sm">
              <button className="bg-surface border border-outline-variant rounded-lg px-4 py-2 flex items-center gap-2 hover:border-primary transition-colors">
                <span className="material-symbols-outlined text-on-surface" data-icon="shop">shop</span>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] text-on-surface-variant leading-none">احصل عليه من</span>
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold leading-none mt-1">Google Play</span>
                </div>
              </button>
              <button className="bg-surface border border-outline-variant rounded-lg px-4 py-2 flex items-center gap-2 hover:border-primary transition-colors">
                <span className="material-symbols-outlined text-on-surface" data-icon="phone_iphone">phone_iphone</span>
                <div className="flex flex-col items-start">
                  <span className="text-[10px] text-on-surface-variant leading-none">حمله من</span>
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold leading-none mt-1">App Store</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-stack-md">
          <h3 className="font-title-lg text-title-lg text-on-surface">تسوق حسب الفئة</h3>
          <ul className="flex flex-col gap-stack-sm">
            {categoryLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="font-body-md text-body-md text-on-surface-variant hover:text-secondary hover:underline decoration-secondary transition-all opacity-90 hover:opacity-100">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-stack-md">
          <h3 className="font-title-lg text-title-lg text-on-surface">حسابي</h3>
          <ul className="flex flex-col gap-stack-sm">
            {accountLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="font-body-md text-body-md text-on-surface-variant hover:text-secondary hover:underline decoration-secondary transition-all opacity-90 hover:opacity-100">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-stack-md">
          <h3 className="font-title-lg text-title-lg text-on-surface">عن سوق</h3>
          <ul className="flex flex-col gap-stack-sm">
            {aboutLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="font-body-md text-body-md text-on-surface-variant hover:text-secondary hover:underline decoration-secondary transition-all opacity-90 hover:opacity-100">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-stack-md">
          <h3 className="font-title-lg text-title-lg text-on-surface">تواصل مباشر</h3>
          <div className="flex flex-col gap-stack-md">
            <Link href="https://wa.me/19XXX" className="group relative flex items-center justify-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 rounded-xl py-3 px-6 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#25D366]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              <span className="material-symbols-outlined text-[#25D366]" data-icon="chat">chat</span>
              <span className="font-label-lg text-label-lg text-[#25D366] font-bold">تواصل عبر واتساب</span>
            </Link>
            <div className="flex items-center gap-3 bg-surface border border-outline-variant rounded-xl p-4">
              <div className="bg-primary-container p-2 rounded-lg">
                <span className="material-symbols-outlined text-primary" data-icon="support_agent">support_agent</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface-variant">الخط الساخن</span>
                <span className="font-title-lg text-title-lg text-secondary font-bold tracking-wider">19XXX</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-container-max mx-auto mt-stack-lg pt-stack-md border-t border-outline-variant flex flex-col md:flex-row items-center justify-between gap-stack-md">
        
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          {bottomLinks.map((link) => (
            <Link key={link.name} href={link.href} className="font-label-sm text-label-sm text-on-surface-variant hover:text-secondary hover:underline decoration-secondary transition-all opacity-90 hover:opacity-100">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="flex gap-3">
            <Link href="#" className="w-8 h-8 rounded-full bg-surface border border-outline-variant flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px]" data-icon="language">language</span>
            </Link>
            <Link href="#" className="w-8 h-8 rounded-full bg-surface border border-outline-variant flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px]" data-icon="share">share</span>
            </Link>
          </div>
          <div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
            <span>صُنع بحب في مصر</span>
            <span className="material-symbols-outlined text-error text-[14px]" data-icon="favorite" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
          </div>
        </div>

        <span className="font-body-md text-body-md text-tertiary">
          © {currentYear} سوق. جميع الحقوق محفوظة
        </span>
      </div>
    </footer>
  );
}