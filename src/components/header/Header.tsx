'use client';

import { useEffect, useState } from 'react';
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';

export default function Header() {
  const [isMobile, setIsMobile] = useState(true); // Mobile-first: começa true

  useEffect(() => {
    // Verifica o tamanho da tela - Mobile-first
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    // Executa na montagem
    checkScreenSize();

    // Adiciona listener para resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isMobile ? <HeaderMobile /> : <HeaderDesktop />;
}