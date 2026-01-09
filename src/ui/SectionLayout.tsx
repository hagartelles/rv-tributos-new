import Image from 'next/image';
import { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    className?: string;
    showWatermark?: boolean;
    watermarkOpacity?: string;
}

interface SectionHeaderProps {
    children: ReactNode;
    className?: string;
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
    showWatermark = true
}: SectionProps) {
    return (
        <section className={`relative w-full mt-1 pt-10 min-h-section bg-rv-white overflow-hidden ${className}`}>
            {/* Marca d'água - Background */}
            {showWatermark && (
                <div className={`absolute inset-0 pointer-events-none `}>
                    <Image
                        src="/marca-agua.png"
                        alt=""
                        fill
                        className="object-contain object-right [&_path]:fill-[#c9cfcd]"
                    />
                </div>
            )}

            {/* Content */}
            <div className="relative z-10 px-6">
                {children}
            </div>
        </section>
    );
}

// Sub-componente: Header com título e linha
SectionLayout.Header = function SectionHeader({ children, className = '' }: SectionHeaderProps) {
    return (
        <div className={`text-center mb-8 ${className}`}>
            {children}
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
        <div className={`w-full h-1 mt-4 bg-[linear-gradient(90deg,var(--color-rv-yellow)_0%,var(--color-rv-yellowOpaque)_20%,rgba(255,223,0,0.2)_35%,#FFD700_50%,rgba(255,223,0,0.2)_65%,var(--color-rv-yellowOpaque)_80%,var(--color-rv-yellow)_100%)] ${className}`}></div>
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