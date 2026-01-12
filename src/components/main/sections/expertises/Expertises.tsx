'use client';

import Image from 'next/image';
import Link from 'next/link';
import Section from '@/ui/SectionLayout';
import CloseButton from '@/ui/CloseButton';
import { WHATSAPP_LINK } from '@/constants/index';
import { useExpertises } from './useExpertises'; 

export default function Expertises() {
    const { 
        currentIndex, 
        activeServiceIndex, 
        isActived, 
        setIsHovered,
        dropdownRef, 
        desktopContainerRef, 
        services, 
        actions 
    } = useExpertises();

    return (
        <Section name='nosso-publico'>
            <Section.Container>
                <Section.Header className='px-6'>
                    <Section.Subtitle>Soluções Tributárias para</Section.Subtitle>
                    <div className="md:flex justify-start items-baseline gap-2">
                        <Section.Title>TODOS</Section.Title>
                        <Section.Subtitle className='md:text-4xl'>os modelos de negócio!</Section.Subtitle>
                    </div>
                    <Section.GradientLine />
                </Section.Header>
            </Section.Container>
            <Section.Content className="mt-12 w-full">

                {/* ============================================================
                    VERSÃO MOBILE
                   ============================================================ */}
                <div className="flex flex-col gap-6 md:hidden px-4">
                    {services.map((service, index) => {
                        const isEven = index % 2 === 0;
                        const isOpen = activeServiceIndex === index;

                        return (
                            <div
                                key={service.title}
                                className="relative shadow-lg transition-all duration-300 rounded-2xl overflow-hidden"
                                onClick={(e) => !isOpen && actions.toggleService(index, e)}
                            >
                                {/* CARD PRINCIPAL */}
                                <div className={`relative min-h-70 flex ${isEven ? 'flex-row' : 'flex-row-reverse'} items-stretch bg-[#dacd9e]`}>

                                    {/* IMAGEM QUE EXPANDE */}
                                    <div className={`
                                        absolute top-0 bottom-0 transition-all duration-500 ease-in-out
                                        ${isOpen ? 'w-full z-0' : 'w-2/5 z-10'}
                                        ${isEven ? 'left-0' : 'right-0'}
                                    `}>
                                        <Image src={service.mobileImage} alt={service.alt} fill className="object-cover" />
                                        <div className={`absolute inset-0 bg-black/50 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}></div>
                                    </div>

                                    {/* CONTEÚDO (Texto e Título) */}
                                    <div className={`relative flex-1 px-6 py-4 flex flex-col transition-all duration-500 ${isOpen ? 'w-full items-start z-10' : ''} ${isEven && !isOpen ? 'ml-[40%]' : ''} ${!isEven && !isOpen ? 'mr-[40%]' : ''}`}>

                                        {/* WRAPPER DO TÍTULO */}
                                        <div className={`
                                            relative w-fit mb-3 transition-all duration-500
                                            ${isOpen ? 'mb-0 ml-8' : 'mx-auto'}
                                        `}>
                                            
                                            {/* SETA AMARELA MOBILE */}
                                            {/* AQUI ESTÁ A CORREÇÃO DA SOMBRA: */}
                                            <div
                                                className={`
                                                    absolute top-1/2 -translate-y-1/2 w-8 h-8 z-20 pointer-events-none transition-all duration-300
                                                    ${isEven ? '-left-10' : '-right-10 rotate-180'}
                                                `}
                                                style={{ 
                                                    filter: isEven 
                                                        ? 'drop-shadow(2px 3px 2px rgba(0,0,0,0.4))'   // Normal
                                                        : 'drop-shadow(-2px -3px 2px rgba(0,0,0,0.4))' // Invertido para compensar a rotação
                                                }}
                                            >
                                                <Image src="/seta_amarela_dir.png" alt="" fill className="object-contain" />
                                            </div>

                                            <h3 className={`font-display text-[clamp(1.5rem,6vw,2rem)] font-bold relative z-10 transition-colors duration-300
                                                ${isOpen ? 'text-rv-white text-3xl drop-shadow-md' : 'text-rv-green'}
                                            `}>
                                                {service.title}
                                            </h3>
                                        </div>

                                        {/* Texto curto e Botão (somem ao abrir) */}
                                        <div className={`transition-all duration-300 w-full ${isOpen ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`}>
                                            <p className="text-[clamp(0.75rem,3vw,0.875rem)] leading-relaxed pointer-events-none text-rv-green mb-4 text-left">
                                                {service.description}
                                            </p>

                                            <div className="flex justify-center w-full">
                                                <button className="px-4 py-2 bg-rv-green text-rv-white text-xs font-bold uppercase rounded hover:bg-opacity-90 transition-colors cursor-pointer">
                                                    Saiba Mais
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* DROPDOWN (Mobile) */}
                                <div
                                    className={`grid transition-[grid-template-rows] duration-500 ease-in-out bg-[#dacd9e] ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="overflow-hidden">
                                        <div
                                            ref={isOpen ? dropdownRef : null}
                                            className="px-6 relative border-t border-rv-green/10"
                                        >
                                            <div className="absolute top-4 right-4 z-50">
                                                <CloseButton onClick={actions.closeDropdown} />
                                            </div>

                                            <div className="pt-14 pb-4">
                                                <p className="text-rv-green text-sm leading-relaxed mb-4">
                                                    {service.description}
                                                </p>
                                                <p className="text-rv-green text-sm leading-relaxed">
                                                    {service.longDescription}
                                                </p>
                                                {/* CTA Button */}
                                                <div className="inline-block w-full text-center md:w-auto cursor-pointer">
                                                    <Link
                                                        href={WHATSAPP_LINK}
                                                        className="group relative inline-flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 transform-gpu will-change-transform antialiased"
                                                        style={{
                                                            backfaceVisibility: 'hidden',
                                                            WebkitFontSmoothing: 'antialiased',
                                                            transform: 'translateZ(0)',
                                                        }}
                                                    >
                                                        <Image
                                                            src="/botao_agendar.svg"
                                                            alt="Agendar Contato"
                                                            width={200}
                                                            height={20}
                                                            className="mt-4 antialiased"
                                                        />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* ============================================================
                    VERSÃO DESKTOP (Mantida Inalterada)
                   ============================================================ */}
                <div 
                    ref={desktopContainerRef}
                    className="hidden md:flex flex-col w-full relative group"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* SLIDER CONTAINER */}
                    <div className="relative w-full h-150 lg:h-175 overflow-hidden">
                        {services.map((service, index) => {
                            const isActive = index === currentIndex;

                            return (
                                <div
                                    key={index}
                                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out
                                        ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}
                                    `}
                                >
                                    {/* 1. IMAGEM DE FUNDO */}
                                    <div className="absolute inset-0 w-full h-full">
                                        <Image
                                            src={service.desktopImage}
                                            alt={service.title}
                                            fill
                                            className="object-cover object-top"
                                            priority={index === 0}
                                        />
                                    </div>

                                    {/* 2. COLUNA DE TEXTO */}
                                    <div className={`absolute top-0 right-0 w-[45%] h-full flex flex-col justify-center pr-20 lg:px-24 shadow-2xl bg-linear-to-l from-black/60 via-black/30 to-transparent`}>
                                        <div className={`transition-all duration-1000 delay-300 transform 
                                            ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
                                        `}>
                                            <div className="relative overflow-visible w-fit mb-6">
                                                <div
                                                    className="absolute -left-14 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-16 lg:h-16 z-20 pointer-events-none lg:-left-24 transition-all duration-300"
                                                    style={{ filter: 'drop-shadow(4px 6px 4px rgba(0,0,0,0.5))' }}
                                                >
                                                    <Image src="/seta_amarela_dir.png" alt="" fill className="object-contain" />
                                                </div>
                                                <h3 className="text-rv-white font-display text-5xl lg:text-6xl font-bold relative z-10">
                                                    {service.title}
                                                </h3>
                                            </div>

                                            <div className="h-1.5 w-full bg-rv-yellow mb-8 rounded-full"></div>
                                            <p className="text-rv-white font-display text-xl leading-relaxed max-w-md">
                                                {service.description}
                                            </p>
                                            
                                            <button
                                                onClick={(e) => actions.toggleService(index, e)}
                                                className={`mt-8 px-8 py-3 bg-rv-yellow text-rv-green font-bold uppercase tracking-wider hover:brightness-105 transition-all duration-500 rounded-lg w-fit ${isActived ? 'opacity-0 invisible translate-y-4' : 'opacity-100 visible translate-y-0'} cursor-pointer`}
                                            >
                                                Saiba Mais
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        {/* CONTROLES DE NAVEGAÇÃO */}
                        <button onClick={actions.prevSlide} className="nav-control absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-rv-green text-white hover:text-rv-yellow p-3 rounded-full backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                        </button>
                        <button onClick={actions.nextSlide} className="nav-control absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-rv-green text-white hover:text-rv-yellow p-3 rounded-full backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                        </button>
                        <div className="nav-control absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                            {services.map((_, idx) => (
                                <button key={idx} onClick={() => actions.goToSlide(idx)} className={`w-3 h-3 rounded-full transition-colors duration-300 shadow-sm cursor-pointer ${idx === currentIndex ? 'bg-rv-yellow' : 'bg-white/50 hover:bg-white'}`} aria-label={`Ir para slide ${idx + 1} `} />
                            ))}
                        </div>
                    </div>

                    {/* DROPDOWN (Desktop) */}
                    <div className={`grid transition-[grid-template-rows] duration-700 ease-in-out bg-[#dacd9e] rounded-b-3xl mx-auto shadow-2xl relative z-20 w-full ${isActived ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                        <div className="overflow-hidden w-full">
                            <div
                                ref={dropdownRef}
                                className="container mx-auto px-6 relative flex flex-col md:flex-row gap-8 items-start"
                            >
                                <div className={`absolute top-6 right-6 transition-opacity duration-300 ${isActived ? 'opacity-100' : 'opacity-0'}`}>
                                    <CloseButton onClick={actions.closeDropdown} />
                                </div>

                                <div className="w-full pt-12 pb-4 flex flex-col md:flex-row gap-8">
                                    <div className="w-full md:w-1/3 pt-4">
                                        <h3 className="text-rv-green font-display text-4xl font-bold mb-4">
                                            {services[currentIndex].title}
                                        </h3>
                                        <div className="h-1 w-20 bg-rv-green rounded-full mb-4"></div>
                                    </div>
                                    <div className="w-full md:w-2/3 pt-4">
                                        <p className="text-rv-green text-lg leading-relaxed">
                                            {services[currentIndex].longDescription}
                                        </p>
                                        {/* CTA Button */}
                                        <div className="inline-block w-full text-center md:w-auto mt-4 cursor-pointer">
                                            <Link
                                                href={WHATSAPP_LINK}
                                                className="group relative inline-flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105 transform-gpu will-change-transform antialiased"
                                                style={{
                                                    backfaceVisibility: 'hidden',
                                                    WebkitFontSmoothing: 'antialiased',
                                                    transform: 'translateZ(0)',
                                                }}
                                            >
                                                <Image
                                                    src="/botao_agendar.svg"
                                                    alt="Agendar Contato"
                                                    width={200}
                                                    height={20}
                                                    className="mt-4 antialiased"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </Section.Content>
        </Section>
    );
}