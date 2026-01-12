'use client';

import Image from 'next/image';
import Link from 'next/link';
import SectionLayout from '@/ui/SectionLayout';
import { socialLinks, footerLinks, companyData } from './FooterData';

export default function Footer() {
    return (
        <footer className="relative w-full bg-[radial-gradient(ellipse_at_top_left,#ccb154_0%,#987f25_45%,#715e1d_100%)] overflow-hidden">
            
            {/* Conteúdo Principal */}
            <div className="relative z-10 px-4 py-4 lg:py-12 lg:px-16 max-w-7xl mx-auto">
                
                {/* GRID LAYOUT DESKTOP */}
                <div className="lg:grid lg:grid-cols-2 lg:gap-20 lg:items-center">

                    {/* === COLUNA ESQUERDA (Branding) === */}
                    <div className="flex flex-col items-center">
                        
                        {/* Logo */}
                        <div className="flex justify-center mb-6">
                            <Image
                                src="/logo.png"
                                alt="RV Tributos"
                                width={300}
                                height={150}
                                className="w-auto"
                                style={{ filter: 'brightness(0) invert(1)' }}
                            />
                        </div>

                        {/* Tagline */}
                        <div className="text-center mb-6 lg:text-justify lg:max-w-xs">
                            <p className="text-rv-green font-display text-[clamp(0.875rem,3.5vw,1rem)] font-semibold">
                                Soluções tributárias <span className="font-bold">sob medida</span><br />
                                para o <span className="font-bold">seu negócio</span>.
                            </p>
                        </div>

                        {/* Social Icons (Importados) */}
                        <div className="flex justify-center gap-4 mb-8 lg:mb-0">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-transform duration-300 hover:scale-110 active:scale-95"
                                    aria-label={social.name}
                                >
                                    <Image 
                                        src={social.src}
                                        alt={social.name}
                                        width={48} 
                                        height={48}
                                        className="w-12 h-12 object-contain"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* === COLUNA DIREITA (Links & Dados) === */}
                    <div className="flex flex-col w-full">
                        
                        {/* Div Amarela Fosca - Links Úteis e Contato */}
                        <div className="bg-[#caad48] py-4 px-6 mb-6 w-full max-w-2xl mx-auto lg:mx-0 lg:max-w-none rounded-sm">
                            <div className="grid grid-cols-2 gap-0 relative">
                                {/* Links Úteis (Importados) - Lado Esquerdo */}
                                <div className="">
                                    <h3 className="text-rv-green font-display text-[clamp(0.875rem,3.5vw,1rem)] font-bold mb-2">
                                        Links Úteis:
                                    </h3>
                                    <div className="grid grid-cols-[auto_auto] grid-rows-2 gap-x-4 gap-y-1">
                                        {footerLinks.map((link) => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className="text-rv-green font-display text-[clamp(0.75rem,1vw,1rem)] font-medium hover:underline transition-all duration-300 flex items-center text-nowrap"
                                            >
                                                {link.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* Linha Divisória Verde Vertical */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-[80%] bg-rv-green rounded-full"></div>

                                {/* Contato (Importado) - Lado Direito */}
                                <div className="px-4 flex flex-col justify-start pl-8">
                                    <h3 className="text-rv-green font-display text-[clamp(0.875rem,3.5vw,1rem)] font-bold mb-2">
                                        Contato:
                                    </h3>
                                    <Link 
                                        href={companyData.phoneHref}
                                        className="text-rv-green font-display text-[clamp(0.75rem,1vw,1rem)] font-medium hover:underline"
                                    >
                                        {companyData.phoneDisplay}
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Dados da Empresa (Importados) */}
                        <div className=" px-4 mb-2 max-w-3xl mx-auto lg:w-full ">
                            <p className="text-rv-white font-display text-[clamp(0.75rem,3vw,0.875rem)] font-medium leading-relaxed opacity-90">
                                {companyData.addressLine1}<br />
                                {companyData.addressLine2}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="py-4 w-full">
                <SectionLayout.GradientLine/>
                <p className="text-rv-white font-display text-[clamp(0.625rem,2.5vw,0.75rem)] text-center mt-4 opacity-80">
                    ©2025 RV Tributos. Todos os direitos reservados
                </p>
            </div>
        </footer>
    );
}