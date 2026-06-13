'use client';

import { useState } from 'react';

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<'customer' | 'vendor'>('customer');

  return (
    <form className="flex flex-col gap-stack-md w-full animate-in fade-in duration-300">
      <div className="flex flex-col gap-2 mb-2">
        <span className="font-label-lg text-label-lg text-on-surface text-right">نوع الحساب</span>
        <div className="grid grid-cols-2 gap-grid-gap">
          
          <div 
            onClick={() => setRole('customer')}
            className={`role-card rounded-xl p-stack-sm flex flex-col items-center justify-center gap-2 cursor-pointer transition-all h-[90px] ${
              role === 'customer' 
                ? 'border-2 border-primary bg-primary-container/10' 
                : 'border border-outline-variant bg-surface-container hover:bg-surface-container-high'
            }`}
          >
            <span className={`material-symbols-outlined text-[28px] ${role === 'customer' ? 'text-primary' : 'text-on-surface-variant'}`}>person</span>
            <span className={`font-label-lg text-label-lg ${role === 'customer' ? 'text-on-surface' : 'text-on-surface-variant'}`}>أنا عميل</span>
          </div>

          <div 
            onClick={() => setRole('vendor')}
            className={`role-card rounded-xl p-stack-sm flex flex-col items-center justify-center gap-2 cursor-pointer transition-all h-[90px] relative overflow-hidden ${
              role === 'vendor' 
                ? 'border-2 border-primary bg-primary-container/10' 
                : 'border border-outline-variant bg-surface-container hover:bg-surface-container-high'
            }`}
          >
            <div className="absolute top-0 w-full bg-secondary text-on-secondary font-label-sm text-label-sm py-[2px] text-center font-bold">
              حساب تاجر
            </div>
            <span className={`material-symbols-outlined text-[28px] mt-4 ${role === 'vendor' ? 'text-primary' : 'text-on-surface-variant'}`}>storefront</span>
            <span className={`font-label-lg text-label-lg ${role === 'vendor' ? 'text-on-surface' : 'text-on-surface-variant'}`}>أنا تاجر</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-grid-gap text-right">
        <div className="flex flex-col gap-2">
          <label className="font-label-lg text-label-lg text-on-surface" htmlFor="reg-name">الاسم بالكامل</label>
          <input className="h-12 w-full bg-surface-container border border-outline-variant rounded-lg px-4 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all placeholder:text-on-surface-variant/50" id="reg-name" placeholder="أحمد محمد" type="text" />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-label-lg text-label-lg text-on-surface" htmlFor="reg-phone">رقم الهاتف</label>
          <input className="h-12 w-full bg-surface-container border border-outline-variant rounded-lg px-4 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all placeholder:text-on-surface-variant/50 text-left dir-ltr" dir="ltr" id="reg-phone" placeholder="01XXXXXXXXX" type="tel" />
        </div>
      </div>

      <div className="flex flex-col gap-2 text-right">
        <label className="font-label-lg text-label-lg text-on-surface" htmlFor="reg-email">البريد الإلكتروني</label>
        <input className="h-12 w-full bg-surface-container border border-outline-variant rounded-lg px-4 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all placeholder:text-on-surface-variant/50 text-left dir-ltr" dir="ltr" id="reg-email" placeholder="example@domain.com" type="email" />
      </div>

      <div className="flex flex-col gap-2 relative text-right">
        <label className="font-label-lg text-label-lg text-on-surface" htmlFor="reg-password">كلمة المرور</label>
        <div className="relative w-full">
          <input className="h-12 w-full bg-surface-container border border-outline-variant rounded-lg px-4 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all placeholder:text-on-surface-variant/50 text-left dir-ltr" dir="ltr" id="reg-password" placeholder="••••••••" type={showPassword ? "text" : "password"} />
          <button 
            className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface focus:outline-none transition-colors" 
            onClick={() => setShowPassword(!showPassword)} 
            type="button"
          >
            <span className={`material-symbols-outlined text-[20px] ${showPassword ? 'text-primary' : ''}`}>
              {showPassword ? "visibility" : "visibility_off"}
            </span>
          </button>
        </div>
      </div>

      <button className="w-full h-[44px] mt-stack-sm bg-surface text-primary border border-primary font-label-lg text-label-lg rounded-lg flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors transform active:scale-[0.98]" type="submit">
        إنشاء الحساب
      </button>

      <p className="text-center font-label-sm text-label-sm text-on-surface-variant mt-2">
        بالتسجيل، أنت توافق على <a className="text-primary hover:underline" href="#">الشروط والأحكام</a> و <a className="text-primary hover:underline" href="#">سياسة الخصوصية</a>.
      </p>
    </form>
  );
}