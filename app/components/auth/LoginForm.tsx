'use client';

import { useState } from 'react';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="flex flex-col gap-stack-md w-full animate-in fade-in duration-300">
      <div className="flex flex-col gap-2">
        <label className="font-label-lg text-label-lg text-on-surface self-end" htmlFor="login-email">البريد الإلكتروني</label>
        <input 
          className="h-12 w-full bg-surface-container border border-outline-variant rounded-lg px-4 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all placeholder:text-on-surface-variant/50 text-left dir-ltr" 
          dir="ltr" 
          id="login-email" 
          placeholder="example@domain.com" 
          type="email" 
        />
      </div>

      <div className="flex flex-col gap-2 relative">
        <label className="font-label-lg text-label-lg text-on-surface self-end" htmlFor="login-password">كلمة المرور</label>
        <div className="relative w-full">
          <input 
            className="h-12 w-full bg-surface-container border border-outline-variant rounded-lg px-4 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all placeholder:text-on-surface-variant/50 text-left dir-ltr" 
            dir="ltr" 
            id="login-password" 
            placeholder="••••••••" 
            type={showPassword ? "text" : "password"} 
          />
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

      <div className="flex items-center justify-between mt-2">
        <label className="flex items-center gap-2 cursor-pointer group flex-row-reverse">
          <input className="w-4 h-4 rounded-sm border-outline-variant bg-surface-container text-primary focus:ring-primary focus:ring-offset-background cursor-pointer" type="checkbox" />
          <span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-on-surface transition-colors">تذكرني</span>
        </label>
        <a className="font-label-sm text-label-sm text-primary hover:text-tertiary transition-colors hover:underline" href="#">نسيت كلمة المرور؟</a>
      </div>

      <button className="w-full h-[44px] mt-stack-sm bg-gradient-to-r from-primary to-inverse-primary text-on-primary font-label-lg text-label-lg rounded-lg flex items-center justify-center hover:shadow-[0_0_15px_rgba(164,205,220,0.3)] transition-all transform active:scale-[0.98]" type="submit">
        دخول
      </button>
    </form>
  );
}