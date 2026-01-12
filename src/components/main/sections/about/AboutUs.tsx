'use client';

import Image from 'next/image';
import Section from '@/ui/SectionLayout'; 
import { aboutData } from './AboutData';

export default function About() {
    return (
        <Section name="sobre">
            {/* 1. Container do Título */}
            <Section.Container>
                <Section.Header>
                    <Section.Title>{aboutData.title}</Section.Title>
                    <Section.GradientLine className='mb-10'/>
                </Section.Header>
            </Section.Container>

            {/* 2. Faixa de Imagem Full-Width (Parallax) */}
            <div 
                className="w-full h-100 mt-8 relative bg-fixed bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url('${aboutData.images.background}')` }}
            >
                {/* Overlay Escuro/Verde */}
                <div className="absolute inset-0 bg-linear-to-r from-rv-green/80 to-transparent z-10"></div>

                {/* Container para alinhar a Logo na grid */}
                <div className="mx-auto px-10 md:max-w-4xl lg:max-w-6xl xl:max-w-7xl h-full flex items-center relative z-20">
                    <div className="relative w-64 h-32 md:w-72 md:h-60">
                        <Image 
                            src={aboutData.images.logo} 
                            alt={aboutData.images.logoAlt} 
                            fill 
                            className="object-contain object-left" 
                        />
                    </div>
                </div>
            </div>

            {/* 3. Conteúdo de Texto */}
            <Section.Container>
                <Section.Content className="mt-12 px-6">
                    <div className="flex flex-col gap-6 text-rv-green">
                        
                        <h3 className="font-display text-3xl md:text-4xl font-bold">
                            {aboutData.subtitle}
                        </h3>

                        <div className="text-lg leading-relaxed space-y-6 text-justify md:text-left font-base">
                            {aboutData.text.map((paragraph, index) => (
                                <p key={index}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                    </div>
                </Section.Content>
            </Section.Container>
        </Section>
    );
}