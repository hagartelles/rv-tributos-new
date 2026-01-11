'use client';

import Image from 'next/image';
import SectionLayout from '@/ui/SectionLayout';

export default function Feedbacks() {
    const testimonials = [
        {
            id: 1,
            text: 'A Freitas agradece à RV Tributos pela parceria e pelo excelente trabalho de consultoria e recuperação tributária realizado ao longo dos últimos anos. A atuação técnica e dedicada da equipe contribuiu de forma significativa para a otimização fiscal e o fortalecimento da gestão tributária da nossa empresa.',
            author: 'Marlene Freitas',
            position: 'VP Operações Freitas Comex',
            logo: '/freitas-logo.png'
        },
        {
            id: 2,
            text: 'A Freitas agradece à RV Tributos pela parceria e pelo excelente trabalho de consultoria e recuperação tributária realizado ao longo dos últimos anos. A atuação técnica e dedicada da equipe contribuiu de forma significativa para a otimização fiscal e o fortalecimento da gestão tributária da nossa empresa.',
            author: 'Marlene Freitas',
            position: 'VP Operações Freitas Comex',
            logo: '/freitas-logo.png'
        },
        {
            id: 3,
            text: 'A Freitas agradece à RV Tributos pela parceria e pelo excelente trabalho de consultoria e recuperação tributária realizado ao longo dos últimos anos. A atuação técnica e dedicada da equipe contribuiu de forma significativa para a otimização fiscal e o fortalecimento da gestão tributária da nossa empresa.',
            author: 'Marlene Freitas',
            position: 'VP Operações Freitas Comex',
            logo: '/freitas-logo.png'
        }
    ];

    return (
        <SectionLayout contentClassName='px-10'>
            <SectionLayout.Header>
                <SectionLayout.Title>
                    Feedbacks
                </SectionLayout.Title>

                <SectionLayout.Subtitle>
                    dos nossos clientes
                </SectionLayout.Subtitle>

                <SectionLayout.GradientLine />
            </SectionLayout.Header>

            <SectionLayout.Content className="flex flex-col gap-6 mb-6">
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="relative bg-rv-white rounded-2xl shadow-lg pl-6 py-2 flex"
                    >
                        {/* Logo da empresa */}
                        <div className="shrink-0">
                            <div className="w-20 h-20 rounded-full overflow-hidden relative ">
                                <Image
                                    src={testimonial.logo}
                                    alt={testimonial.author}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        {/* Conteúdo do depoimento */}
                        <div className="px-6">
                            {/* Aspas decorativas */}
                            <div className="text-rv-yellow font-bold text-6xl leading-none h-8 flex items-start mb-2" style={{ lineHeight: '1' }}>
                                “
                            </div>

                            {/* Texto do depoimento */}
                            <p className="text-rv-green font-display text-[clamp(0.75rem,3vw,0.875rem)] leading-relaxed mb-4 italic">
                                {testimonial.text}
                            </p>

                            {/* Autor */}
                            <div className="">
                                <p className="text-rv-green font-display text-[clamp(0.875rem,3.5vw,1rem)] font-bold">
                                    {testimonial.author} - {testimonial.position}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </SectionLayout.Content>
        </SectionLayout>
    );
}