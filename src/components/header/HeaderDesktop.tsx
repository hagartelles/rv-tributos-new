'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HeaderDesktop() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const menuItems = [
    { label: 'Início', href: '/' },
    { label: 'Serviços', href: '/servicos' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: '/contato' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-rv-green rv-menu-shadow">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo - Responsivo por tamanho de tela */}
          <Link 
            href="/" 
            className="flex items-center transition-transform hover:scale-105 duration-300"
          >
            <Image
              src="/logo.png"
              alt="RV Tributos"
              width={180}
              height={60}
              priority
              className="h-12 w-auto md:h-14 lg:h-16"
            />
          </Link>

          {/* Navigation - Ajusta espaçamento conforme tela */}
          <nav className="flex items-center gap-4 md:gap-6 lg:gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => setHoveredItem(item.href)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`relative font-display text-base md:text-lg font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? 'text-rv-yellow'
                    : 'text-rv-white hover:text-rv-yellow'
                }`}
              >
                {item.label}
                
                {/* Underline animation */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-rv-yellow transition-all duration-300 ${
                    isActive(item.href) || hoveredItem === item.href
                      ? 'w-full'
                      : 'w-0'
                  }`}
                />
              </Link>
            ))}

            {/* CTA Button - Ajusta tamanho */}
            <Link
              href="/contato"
              className="ml-2 md:ml-4 px-4 py-2 md:px-6 md:py-3 bg-rv-yellow text-rv-green font-display font-bold text-sm md:text-base rounded-full transition-all duration-300 hover:bg-rv-white hover:shadow-lg hover:scale-105 active:scale-95"
            >
              Fale Conosco
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}