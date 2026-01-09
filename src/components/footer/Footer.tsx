'use client';

import Image from 'next/image';
import Link from 'next/link';
import SectionLayout from '@/ui/SectionLayout';

export default function Footer() {
    const socialLinks = [
        {
            name: 'Instagram',
            href: 'https://instagram.com',
            // Substituí o ícone SVG pelo caminho da imagem na pasta public
            src: '/botao_instagram.svg'
        },
        {
            name: 'WhatsApp',
            href: 'https://whatsapp.com',
            src: '/botao_whatsApp.svg'
        },
        {
            name: 'LinkedIn',
            href: 'https://linkedin.com',
            src: '/botao_linkedin.svg'
        }
    ];

    const footerLinks = [
        { label: 'Início', href: '/' },
        { label: 'Quem Somos', href: '/sobre' },
        { label: 'Serviços', href: '/servicos' },
        { label: 'Blog', href: '/blog' },
    ];

    return (
        <footer className="relative w-full bg-[radial-gradient(ellipse_at_top_left,#ccb154_0%,#987f25_45%,#715e1d_100%)] overflow-hidden">
            {/* Conteúdo Principal */}
            <div className="relative z-10 px-4 py-4">
                {/* Logo - branca com filter */}
                <div className="flex justify-center mb-6">
                    <Image
                        src="/logo.png"
                        alt="RV Tributos"
                        width={300}
                        height={150}
                        className=" w-auto"
                        style={{ filter: 'brightness(0) invert(1)' }}
                    />
                </div>

                {/* Tagline */}
                <div className="text-center mb-6">
                    <p className="text-rv-green font-display text-[clamp(0.875rem,3.5vw,1rem)] font-semibold">
                        Soluções tributárias <span className="font-bold">sob medida</span><br />
                        para o <span className="font-bold">seu negócio</span>.
                    </p>
                </div>

                {/* Social Icons (Botões de Imagem) */}
                <div className="flex justify-center gap-4 mb-8">
                    {socialLinks.map((social) => (
                        <Link
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            // Removemos o estilo de "bolinha verde" pois o botão agora é a imagem completa.
                            // Mantivemos apenas a animação de escala.
                            className="transition-transform duration-300 hover:scale-110 active:scale-95"
                            aria-label={social.name}
                        >
                            <Image 
                                src={social.src}
                                alt={social.name}
                                width={48} 
                                height={48}
                                className="w-12 h-12 object-contain" // Garante o tamanho uniforme
                            />
                        </Link>
                    ))}
                </div>

                {/* Div Amarela Fosca - Links Úteis e Contato */}
                <div className="bg-[#caad48] py-2 px-4 mb-6 max-w-2xl mx-auto">
                    <div className="grid grid-cols-2 gap-0 relative">
                        {/* Links Úteis - Lado Esquerdo */}
                        <div className="">
                            <h3 className="text-rv-green font-display text-[clamp(0.875rem,3.5vw,1rem)] font-bold mb-1">
                                Links Úteis:
                            </h3>
                            {/* Grid 2x2 dos links */}
                            <div className="grid grid-cols-[auto_auto] grid-rows-2">
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
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-[90%] bg-rv-green"></div>

                        {/* Contato - Lado Direito */}
                        <div className="px-4 flex flex-col justify-start">
                            <h3 className="text-rv-green font-display text-[clamp(0.875rem,3.5vw,1rem)] font-bold mb-1">
                                Contato:
                            </h3>
                            <Link 
                                href="tel:+554738423941"
                                className="text-rv-green font-display text-[clamp(0.75rem,1vw,1rem)] font-medium hover:underline"
                            >
                                (47) 3842-3941
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="py-4 px-6">
                <SectionLayout.GradientLine/>
                <p className="text-rv-white font-display text-[clamp(0.625rem,2.5vw,0.75rem)] text-center mt-4">
                    ©2025 RV Tributos. Todos os direitos reservados
                </p>
            </div>
        </footer>
    );
}