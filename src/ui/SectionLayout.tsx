'use client';

import Image from 'next/image';
import { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string;
    showWatermark?: boolean;
    watermarkOpacity?: string;
    contentClassName?: string;
    name?: string;
}

interface SectionHeaderProps {
    children: ReactNode;
    className?: string;
    showCompass?: boolean;
}

interface SectionTitleProps {
    children: ReactNode;
    className?: string;
}

interface SectionSubtitleProps {
    children: ReactNode;
    className?: string;
}

interface SectionContentProps {
    children: ReactNode;
    className?: string;
}

// Componente principal
export default function SectionLayout({
    children,
    className = '',
    showWatermark = true, // Define o padrão como TRUE (ativado)
    contentClassName = '',
    name = ''
}: SectionProps) {
    return (
        <section id={name} className={`relative w-full py-16 md:py-24 bg-rv-white overflow-hidden scroll-mt-[calc(var(--header-height)+2rem)] ${className}`}>

            {/* Marca d'água - Background */}
            {showWatermark && (
                <div className={`absolute inset-0 pointer-events-none`}>
                    <Image
                        src="/marca-agua.png"
                        alt=""
                        fill
                        className="object-contain object-right"
                    />
                </div>
            )}

            {/* Content */}
            <div className={`relative z-10 ${contentClassName}`}>
                {children}
            </div>
        </section>
    );
}

// Sub-componente: Container interno para centralizar conteúdo
SectionLayout.Container = function SectionContainer({ children, className = '' }: SectionProps) {
    return (
        <div className='mx-auto px-10 md:max-w-4xl lg:max-w-6xl xl:max-w-7xl relative'>
            {children}
        </div>
    );
};

// Sub-componente: Header com título, linha e Bússola Opcional
SectionLayout.Header = function SectionHeader({ children, className = '', showCompass = true }: SectionHeaderProps) {
    return (
        <div className={`mb-8 md:grid md:grid-cols-[4rem_1fr_4rem] md:items-start ${className} px-6`}>
            
            {/* COLUNA 1: Âncora da Bússola (APENAS DESKTOP) */}
            {/* Mantém hidden no mobile */}
            <div className="hidden md:block relative h-full">
                {showCompass && (
                    <div
                        className="absolute -top-16 w-56 h-56 pointer-events-none select-none"
                        style={{
                            left: '-100%',
                            transform: 'translateX(-50%)'
                        }}
                    >
                        <Image
                            src="/bussula-dourada.png"
                            alt=""
                            className="object-contain w-full h-full"
                            width={200}
                            height={200}
                        />
                    </div>
                )}
            </div>

            {/* COLUNA 2: Conteúdo (Texto) */}
            <div className="text-center md:text-left relative z-10">
                {showCompass && (
                    <div className="md:hidden absolute -top-10 -translate-x-11/12 w-40 h-40 pointer-events-none select-none">
                         <Image
                            src="/bussula-dourada.png"
                            alt=""
                            className="object-contain w-full h-full"
                            width={120}
                            height={120}
                        />
                    </div>
                )}
                {/* ----------------------------------------- */}

                {children}
            </div>

            {/* COLUNA 3: Balanceador (Direita) */}
            <div className="hidden md:block"></div>
        </div>
    );
};

// Sub-componente: Título principal (TODOS, etc)
SectionLayout.Title = function SectionTitle({ children, className = '' }: SectionTitleProps) {
    return (
        <h2 className={`text-rv-green font-display text-[clamp(2.5rem,10vw,4rem)] font-bold leading-tight ${className}`}>
            {children}
        </h2>
    );
};

// Sub-componente: Subtítulo/texto antes ou depois do título
SectionLayout.Subtitle = function SectionSubtitle({ children, className = '' }: SectionSubtitleProps) {
    return (
        <p className={`text-rv-green font-display text-[clamp(1rem,3.5vw,1.5rem)] font-medium ${className}`}>
            {children}
        </p>
    );
};

// Sub-componente: Linha amarela gradiente
SectionLayout.GradientLine = function SectionGradientLine({ className = '' }: { className?: string }) {
    return (
        <div className={`w-full h-1 mt-4 bg-[linear-gradient(90deg,#c59528_0%,#ffeea9_23%,#fece61_41%,#ffffd0_59%,#c2a262_77%,#d4b578_100%)] ${className}`}></div>
    );
};

// Sub-componente: Conteúdo customizado
SectionLayout.Content = function SectionContent({ children, className = '' }: SectionContentProps) {
    return (
        <div className={className}>
            {children}
        </div>
    );
};