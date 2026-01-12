'use client';

import { useState } from 'react';
import Image from 'next/image';
import SectionLayout from '@/ui/SectionLayout';
import CloseButton from '@/ui/CloseButton';
import { servicesList, servicesText } from './servicesData'; 

export default function Services() {
    // 1. Estado para controlar qual serviço foi clicado
    const [activeId, setActiveId] = useState<number | null>(null);

    const handleServiceClick = (id: number) => {
        setActiveId(activeId === id ? null : id);
    };
    
    const handleCloseService = () => {
        setActiveId(null);
    };

    return (
        <SectionLayout name='servicos' className='min-h-section'>
            <SectionLayout.Container>
                <SectionLayout.Header >
                    <SectionLayout.Subtitle>
                        {servicesText.subtitle}
                    </SectionLayout.Subtitle>
                    <SectionLayout.Title>
                        {servicesText.title}
                    </SectionLayout.Title>

                    <SectionLayout.GradientLine />
                    <div className='w-full'>
                        <p className="text-center md:text-left text-rv-green font-display text-base md:text-xl max-w-3xl mt-8 mx-auto px-4">
                            {servicesText.intro}
                        </p>
                    </div>
                </SectionLayout.Header>

                <SectionLayout.Content className="h-full w-full">
                    {/* Container Principal */}
                    <div className={`transition-all duration-500 ease-in-out mx-auto ${activeId ? 'flex' : ''}`}>

                        {/* Área dos Botões */}
                        <div className={`transition-all duration-500 ease-in-out  ${activeId
                            ? 'w-1/4 flex flex-col py-3 max-w-20'
                            : 'w-full grid grid-cols-2 grid-rows-3 gap-6 mx-auto' 
                        }`}>
                            {servicesList.map((service) => {
                                const isActive = activeId === service.id;
                                const isAnyActive = activeId !== null;

                                return (
                                    <div
                                        key={service.id}
                                        className={`flex flex-col items-center transition-all duration-500 
                                            ${isAnyActive && !isActive ? 'opacity-50 scale-90' : 'opacity-100 scale-100'}
                                        `}
                                    >
                                        {/* Botão Quadrado Verde */}
                                        <button
                                            onClick={() => handleServiceClick(service.id)}
                                            className={`
                                                bg-rv-green rounded-xl shadow-2xl flex items-center justify-center transition-all duration-300 ease-in-out
                                                ${activeId ? 'w-16 h-16' : 'w-20 h-20 hover:scale-105 hover:shadow-xl active:scale-95 cursor-pointer'}
                                            `}
                                        >
                                            {/* Ícone centralizado */}
                                            <div className={`relative transition-all duration-300 ${activeId ? 'w-8 h-8' : 'w-12 h-12'}`}>
                                                <Image
                                                    src={service.icon}
                                                    alt={service.name}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </button>

                                        {/* Título abaixo do botão */}
                                        <p className={`text-rv-green ${activeId ? `hidden` : `visible`} font-display font-bold text-center transition-all duration-300 ${activeId ? 'text-[0.6rem]' : 'text-[clamp(1rem,3.5vw,2rem)]'}`}>
                                            {service.title}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Área de Conteúdo (Aparece à direita) */}
                        {activeId && (
                            <div className="w-3/4 rounded-2xl animate-fade-in flex-1">
                                {/* Encontra o serviço ativo para mostrar os dados */}
                                {servicesList.map(service => {
                                    if (service.id !== activeId) return null;
                                    return (
                                        <div key={service.id} className="bg-rv-yellow rounded-xl p-4 h-full ">
                                            <div className="w-full flex justify-end mb-2">
                                                <CloseButton onClick={handleCloseService} />
                                            </div>
                                            <h3 className="text-2xl text-rv-green font-bold mb-2 leading-tight">
                                                {service.name}
                                            </h3>
                                            <p className="text-base text-rv-green leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </SectionLayout.Content>
            </SectionLayout.Container>
        </SectionLayout>
    );
}