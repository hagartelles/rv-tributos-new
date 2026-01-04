'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeaderMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { label: 'Início', href: '/' },
    { label: 'Serviços', href: '/servicos' },
    { label: 'Sobre Nós', href: '/sobre' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contato', href: '/contato' },
  ];

  return (
    <>
      {/* Header fixo */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-rv-green rv-menu-shadow">
        <div className="flex items-center justify-between px-4 py-3 sm:px-5 sm:py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
            <Image
              src="/logo.png"
              alt="RV Tributos"
              width={160}
              height={80}
              priority
              className="h-14 w-auto sm:h-12"
            />
          </Link>

          {/* Botão Hamburger */}
          <button
            onClick={toggleMenu}
            className="relative w-14 h-14 rounded-full bg-rv-yellow flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-md"
            aria-label="Menu"
            aria-expanded={isMenuOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-rv-green transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-rv-green transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-full bg-rv-green transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Dropdown Menu - Desce do header, 50% largura, alinhado à direita */}
      <div
        className={`fixed right-0 z-40 bg-rv-yellow shadow-lg transition-all duration-500 ease-in-out w-1/2 ${
          isMenuOpen
            ? 'top-20 opacity-100 pointer-events-auto'
            : '-top-100 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col">
          {menuItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`px-6 py-4 text-rv-green font-display text-lg font-medium border-b border-rv-green/20 last:border-b-0 transition-all duration-300 hover:bg-rv-green hover:text-rv-yellow hover:pl-8 ${
                isMenuOpen
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-4'
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Backdrop overlay - apenas escurece o conteúdo abaixo */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-rv-black/20 z-30 backdrop-blur-[2px] transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
          style={{ top: '64px' }}
        />
      )}
    </>
  );
}