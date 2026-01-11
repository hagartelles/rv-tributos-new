'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Section from '@/ui/SectionLayout';

export default function Expertises() {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // Estados para controle de pausa
    const [isHovered, setIsHovered] = useState(false);
    const [isActived, setIsActived] = useState(false); // Preparado para uso futuro

    const services = [
        {
            title: 'Serviços',
            mobileImage: '/mobile/empresario_sorrindo.webp',
            desktopImage: '/desktop/empresario_sorrindo.webp',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat',
            bgColor: 'bg-rv-yellow',
            textColor: 'text-rv-green',
        },
        {
            title: 'Indústria',
            mobileImage: '/mobile/gerente_joia.webp',
            desktopImage: '/desktop/gerente_joia.webp',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat',
            bgColor: 'bg-rv-yellow/90',
            textColor: 'text-rv-green',
        },
        {
            title: 'Comércio',
            mobileImage: '/mobile/pessoa_vendo_tablet.webp',
            desktopImage: '/desktop/pessoa_vendo_tablet.webp',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat',
            bgColor: 'bg-rv-yellow',
            textColor: 'text-rv-green',
        },
    ];

    // Rotação automática (5 segundos) com Pausa
    useEffect(() => {
        // Se estiver com mouse em cima OU isActived for true, PAUSA.
        if (isHovered || isActived) return;

        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex, isHovered, isActived]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % services.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <Section name='nosso-publico'>
            <Section.Header className='px-6'>
                <Section.Subtitle>Soluções Tributárias para</Section.Subtitle>
                <div className="md:flex justify-start items-baseline gap-2">
                    <Section.Title>TODOS</Section.Title>
                    <Section.Subtitle className='md:text-4xl'>os modelos de negócio!</Section.Subtitle>
                </div>
                <Section.GradientLine />
            </Section.Header>

            <Section.Content className="mt-12 w-full "> 

                {/* ============================================================
                    VERSÃO MOBILE (Cards)
                   ============================================================ */}
                <div className="flex flex-col gap-6 md:hidden px-4">
                    {services.map((service, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={service.title} className="relative shadow-lg">
                                <div className={`flex ${isEven ? 'flex-row' : 'flex-row-reverse'} items-stretch`}>
                                    <div className={`relative w-2/5 min-h-50 overflow-hidden ${isEven ? 'rounded-l-2xl' : 'rounded-r-2xl'}`}>
                                        <Image src={service.mobileImage} alt={service.title} fill className="object-cover" />
                                    </div>
                                    <div className={`flex-1 bg-rv-yellow/90 p-6 flex flex-col justify-center ${isEven ? 'rounded-r-2xl' : 'rounded-l-2xl'}`}>
                                        <h3 className={`text-rv-green font-display text-[clamp(1.5rem,6vw,2rem)] font-bold mb-3`}>{service.title}</h3>
                                        <p className={`text-[clamp(0.75rem,3vw,0.875rem)] leading-relaxed`}>{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ============================================================
                    VERSÃO DESKTOP (Carrossel)
                   ============================================================ */}
                <div 
                    className="hidden md:block relative w-full h-150 lg:h-175 overflow-hidden group"
                    onMouseEnter={() => setIsHovered(true)} // Pausa ao entrar
                    onMouseLeave={() => setIsHovered(false)} // Retoma ao sair
                >

                    {/* Renderizamos TODOS os slides empilhados para permitir transição suave (fade) */}
                    {services.map((service, index) => {
                        const isActive = index === currentIndex;

                        return (
                            <div
                                key={index}
                                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out
                                    ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}
                                `}
                            >
                                {/* 1. IMAGEM DE FUNDO (Ocupa 100% mas foco visual na direita) */}
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        src={service.desktopImage}
                                        alt={service.title}
                                        fill
                                        className="object-cover object-center"
                                        priority={index === 0} // Prioriza a primeira imagem
                                    />
                                </div>

                                {/* 2. COLUNA DE TEXTO (40% largura, 100% altura, Alinhado à Direita) */}
                                <div className={`absolute top-0 right-0 w-[45%] h-full flex flex-col justify-center pr-20 lg:px-24 shadow-2xl`}>

                                    {/* Animação do conteúdo interno para dar sensação de movimento */}
                                    <div className={`transition-all duration-1000 delay-300 transform 
                                        ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                                    `}>
                                        <h3 className="text-rv-white font-display text-5xl lg:text-6xl font-bold mb-6">
                                            {service.title}
                                        </h3>
                                        <div className="h-1.5 w-full bg-rv-yellow mb-8 rounded-full"></div>
                                        <p className="text-rv-white font-display text-xl leading-relaxed max-w-md">
                                            {service.description}
                                        </p>

                                        {/* Botão Opcional de Ação */}
                                        <button className="mt-8 px-8 py-3 bg-rv-yellow  text-rv-green font-bold uppercase tracking-wider hover:brightness-105 transition-all-100 rounded-lg w-fit">
                                            Saiba Mais
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {/* --- CONTROLES DE NAVEGAÇÃO --- */}

                    {/* Botão Anterior (Esquerda Extrema, Centro Y) */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-rv-green text-white hover:text-rv-yellow p-3 rounded-full backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    {/* Botão Próximo (Direita Extrema, Centro Y) */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-rv-green text-white hover:text-rv-yellow p-3 rounded-full backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>

                    {/* Indicadores (Dots) - Centro Inferior, Tamanho Fixo */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                        {services.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => goToSlide(idx)}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 shadow-sm ${
                                    idx === currentIndex
                                        ? 'bg-rv-green'
                                        : 'bg-white/50 hover:bg-white'
                                }`}
                                aria-label={`Ir para slide ${idx + 1}`}
                            />
                        ))}
                    </div>

                </div>

            </Section.Content>
        </Section>
    );
}