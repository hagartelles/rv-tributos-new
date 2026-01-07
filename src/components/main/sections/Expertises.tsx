'use client';

import Image from 'next/image';
import Section from '@/ui/SectionLayout';

export default function Expertises() {
    const services = [
        {
            title: 'Indústria',
            image: '/mobile/gerente_joia.webp',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat',
            bgColor: 'bg-rv-yellow/90',
            textColor: 'text-rv-green',
        },
        {
            title: 'Comércio',
            image: '/mobile/pessoa_vendo_tablet.webp',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat',
            bgColor: 'bg-rv-yellow',
            textColor: 'text-rv-green',
        },
        {
            title: 'Serviços',
            image: '/mobile/empresario_sorrindo.webp',
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat',
            bgColor: 'bg-rv-yellow',
            textColor: 'text-rv-green',
        },
    ];

    return (
        <Section>
            {/* Header usando compound components */}
            <Section.Header>
                <Section.Subtitle className="mb-2">
                    Soluções Tributárias para
                </Section.Subtitle>
                
                <Section.Title>
                    TODOS
                </Section.Title>
                
                <Section.Subtitle>
                    os modelos de negócio!
                </Section.Subtitle>
                
                <Section.GradientLine />
            </Section.Header>

            {/* Cards usando Section.Content */}
            <Section.Content className="flex flex-col gap-6 mt-12">
                {services.map((service, index) => {
                    const isEven = index % 2 === 0;
                    
                    return (
                        <div
                            key={service.title}
                            className="relative shadow-lg"
                        >
                            {/* Card com layout alternado */}
                            <div className={`flex ${isEven ? 'flex-row' : 'flex-row-reverse'} items-stretch`}>
                                {/* Imagem - bordas arredondadas apenas nas externas */}
                                <div className={`relative w-2/5 min-h-50 overflow-hidden ${
                                    isEven 
                                        ? 'rounded-l-2xl'
                                        : 'rounded-r-2xl'
                                }`}>
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Conteúdo - bordas arredondadas apenas nas externas */}
                                <div className={`flex-1 ${service.bgColor} p-6 flex flex-col justify-center ${
                                    isEven 
                                        ? 'rounded-r-2xl'
                                        : 'rounded-l-2xl'
                                }`}>
                                    <h3 className={`${service.textColor} font-display text-[clamp(1.5rem,6vw,2rem)] font-bold mb-3`}>
                                        {service.title}
                                    </h3>
                                    <p className={`${service.textColor} font-display text-[clamp(0.75rem,3vw,0.875rem)] leading-relaxed`}>
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Section.Content>
        </Section>
    );
}