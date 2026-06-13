import Image from 'next/image';

export default function AuthSidePanel() {
  return (
    <aside className="hidden lg:block lg:w-[40%] h-full relative bg-surface-container-lowest overflow-hidden border-r border-outline-variant/30">
      <div className="absolute inset-0 bg-surface-container-highest">
        <img 
          alt="Decorative geometric pattern" 
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity filter contrast-125" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEXnCUoNOuiLaVEKnJLqFFx7c52p8rCSaVt-AbqQbBfoukHV7tcnnJdFxKeJXHUIWNe04K0BDQc7KhL0fyHZ-aPGPGXrg3btBQkhMlIxewOObOUtV4lBYnWRA-EyiDAMqcW6dpzBc9UCGBsUyRHqIQFItWkwW-cx6u-tAZVBpgwbvwzbbysUoZAFK0F0Bt8izfXIM-vUxLN27xD6_sBPwUDcO4wZZ935uG0EPD3-_kKMDlofpUHcFXbBiF60YNyvFinmdVZPsa_XH6"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/80 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface-container-highest/90"></div>
      
      <div className="absolute top-1/4 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl mix-blend-screen"></div>
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl mix-blend-screen"></div>
      
      <div className="absolute bottom-12 right-12 left-12 flex flex-col gap-4 text-right">
        <div className="inline-flex items-center gap-2 bg-surface-container/50 backdrop-blur-md border border-outline-variant/50 rounded-full py-1 px-4 w-fit ml-auto">
          <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
          <span className="font-label-sm text-label-sm text-on-surface">منصة آمنة وموثوقة</span>
        </div>
        <h2 className="font-headline-lg text-headline-lg text-on-surface">ابدأ رحلة التسوق أو البيع معنا</h2>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-sm ml-auto">
          انضم إلى آلاف البائعين والمشترين في أكبر سوق إلكتروني يجمع بين الجودة والسرعة في مكان واحد.
        </p>
      </div>
    </aside>
  );
}