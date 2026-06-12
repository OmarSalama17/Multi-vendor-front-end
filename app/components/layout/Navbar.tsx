"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLink = {
  name: string;
  href: string;
  icon?: string;
  iconClass?: string;
};

const navLinks: NavLink[] = [
  { name: 'الرئيسية', href: '/' },
  { name: 'رجالي', href: '/mens' },
  { name: 'حريمي', href: '/womens' },
  { name: 'إكسسوارات', href: '/accessories' },
  { name: 'المتاجر', href: '/stores' },
  { name: 'وصل حديثاً', href: '/new' },
  { 
    name: 'العروض', 
    href: '/deals', 
    icon: 'local_fire_department', 
    iconClass: 'text-[16px] text-secondary' 
  },
  { name: 'تواصل معنا', href: '/contact' },
];

export default function Navbar() {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchActive(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSearchActive(!isSearchActive);
    if (!isSearchActive) {
      setTimeout(() => searchInputRef.current?.focus(), 300);
    }
  };

  return (
    <nav className="sticky top-0 w-full z-50 bg-[#0a0a0a]/85 backdrop-blur-xl border-b border-[#2A2A2A] shadow-sm transition-all duration-300 dark" dir="rtl">
      <div className="flex flex-row justify-between items-center px-section-padding h-20 container mx-auto">
        
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center group-hover:border-primary transition-colors duration-300">
            <span className="material-symbols-outlined text-primary text-2xl" data-icon="storefront">
              storefront
            </span>
          </div>
          <span className="font-display-lg text-title-lg md:text-headline-md font-black text-primary tracking-tight group-hover:text-primary-fixed transition-colors">
            سوق
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            
            return (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`nav-link font-label-lg text-label-lg transition-colors duration-300 flex items-center gap-1 ${
                  isActive 
                    ? 'active text-primary font-bold'
                    : 'text-on-surface hover:text-primary'
                }`}
              >
                {link.icon && (
                  <span className={`material-symbols-outlined ${link.iconClass}`} data-icon={link.icon}>
                    {link.icon}
                  </span>
                )}
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2 sm:gap-4" id="nav-actions">
          
          <div 
            ref={searchContainerRef} 
            className={`flex items-center relative ${isSearchActive ? 'search-active' : ''}`}
          >
            <button 
              aria-label="Search" 
              onClick={handleSearchToggle}
              className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:text-primary hover:bg-surface-container-high transition-all duration-300"
            >
              <span className="material-symbols-outlined" data-icon="search">search</span>
            </button>
            <div className="search-expand h-10 bg-surface-container-high border border-outline-variant rounded-full flex items-center">
              <input 
                ref={searchInputRef}
                type="text"
                placeholder="ابحث عن المنتجات، الماركات..." 
                className="w-full bg-transparent border-none focus:ring-0 text-on-surface font-body-md text-sm placeholder:text-on-surface-variant p-0 outline-none" 
              />
            </div>
          </div>

          <div className="w-px h-6 bg-outline-variant mx-1 hidden sm:block"></div>

          <button aria-label="Notifications" className="relative w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:text-primary hover:bg-surface-container-high transition-all duration-300">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary ring-2 ring-[#0a0a0a] animate-pulse"></span>
          </button>

          <button aria-label="Shopping Cart" className="relative w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:text-primary hover:bg-surface-container-high transition-all duration-300">
            <span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
            <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-secondary text-on-secondary-container font-label-sm text-[10px] font-bold ring-2 ring-[#0a0a0a] px-1">
              3
            </span>
          </button>

          <button className="ml-2 relative group rounded-full overflow-hidden border border-outline-variant hover:border-primary transition-colors duration-300 w-10 h-10">
            <img 
              alt="حساب المستخدم" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyZZa5569Dj_CGsHYj--XIrTLWTsSbQdl06m83v-QdvGBVr5eNfZRGr9J0ZwY6mfl5lfbAS2sGiOIdnvFa4XNUZriaiuJn8x9iDJWkcLsqZQ-uHRTKn8RsGYvN31srZxLf9-tS9-972PcMlWEq07ClBSQsgs_xUyMV1y6KVrUCzLe9ZNdtP5SlergWbvMpBKNakS37BDY3DNOHFXLFpfJ47nmIx1QPi746-O6Ykr3rKAUbI7Qd3PBtsOUaAdQBv2vJKIx3tIjzB8oM" 
              className="w-full h-full object-cover" 
            />
          </button>

          <button aria-label="Menu" className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:text-primary hover:bg-surface-container-high transition-all duration-300 ml-2">
            <span className="material-symbols-outlined" data-icon="menu">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
}