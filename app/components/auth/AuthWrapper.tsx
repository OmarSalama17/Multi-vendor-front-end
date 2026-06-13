'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AuthSidePanel from './AuthSidePanel';

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLogin = pathname === '/login';

  return (
    <div className="flex h-screen w-full bg-background text-on-surface font-body-md antialiased overflow-hidden">
      <main className="w-full lg:w-[60%] h-full flex flex-col justify-center items-center p-section-padding sm:p-12 lg:p-10 overflow-y-auto bg-surface relative z-10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
        <div className="w-full max-w-md flex flex-col gap-stack-lg">
          
          <div className="flex flex-col gap-2 mb-stack-md text-center">
            <h1 className="font-display-lg text-display-lg text-primary m-0 leading-none">سوق</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">المنصة الرائدة للتسوق في مصر</p>
          </div>

          <div className="flex w-full border-b border-outline-variant relative">
            <Link 
              href="/login" 
              className={`flex-1 pb-3 text-center font-title-lg text-title-lg transition-colors focus:outline-none border-b-2 ${
                isLogin ? 'text-primary border-primary' : 'text-on-surface-variant border-transparent hover:text-on-surface'
              }`}
            >
              تسجيل الدخول
            </Link>
            <Link 
              href="/register" 
              className={`flex-1 pb-3 text-center font-title-lg text-title-lg transition-colors focus:outline-none border-b-2 ${
                !isLogin ? 'text-primary border-primary' : 'text-on-surface-variant border-transparent hover:text-on-surface'
              }`}
            >
              إنشاء حساب
            </Link>
          </div>

          <div className="relative min-h-[400px] mt-6">
            {children}
          </div>

        </div>
      </main>

      <AuthSidePanel />
    </div>
  );
}