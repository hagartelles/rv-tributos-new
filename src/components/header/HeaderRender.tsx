'use client';

import Header from './Header';
import HeaderDesktop from './HeaderDesktop';

export default function HeaderRender() {
  return (
    <>
      {/* Menu Mobile: Só aparece até ao breakpoint md */}
      <div className="md:hidden">
        <Header />
      </div>

      {/* Menu Desktop: Só aparece a partir do breakpoint md */}
      <div className="hidden md:block">
        <HeaderDesktop />
      </div>
    </>
  );
}