'use client';

import SectionLayout from '@/ui/SectionLayout';
import FeedbackCard from './FeedbackCards';
import FeedbackSlider from '@/utils/Slider';

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
            text: 'Nós, em nome da AGF Portas e rodapés ltda. escrevemos esse texto com o intuito de compartilhar a efetividade e a satisfação da nossa empresa com os serviços prestados pela RV Tributos. Foram ágeis e profissionais em atender nossa demanda e em questão de semanas já estavamos usufruindo dos resultados pelos bons serviços prestados. Continuaremos a relação comercial firmada e recomendamos para quem busca serviços tributários de qualidade.',
            author: 'Vinícius Corrêa',
            position: 'AGF - Diretor Financeiro',
            logo: '/agf-logo.png'
        },
        {
            id: 3,
            text: 'A Freitas agradece à RV Tributos pela parceria e pelo excelente trabalho de consultoria e recuperação tributária realizado ao longo dos últimos anos. A atuação técnica e dedicada da equipe contribuiu de forma significativa para a otimização fiscal e o fortalecimento da gestão tributária da nossa empresa.',
            author: 'Marlene Freitas',
            position: 'VP Operações Freitas Comex',
            logo: '/freitas-logo.png'
        },

        {
            id: 4,
            text: 'Teste de feedback extra para ativar o carrossel.',
            author: 'Cliente Teste',
            position: 'Diretor',
            logo: '/freitas-logo.png'
        },

    ];

    const isCarousel = testimonials.length > 3;

    return (
        <SectionLayout className='bg-linear-to-b from-rv-white to-[#c4c4c4]' name='feedbacks' showWatermark={false}>
            <SectionLayout.Container>
                <SectionLayout.Header className='mb-10'>
                    <SectionLayout.Title>
                        Feedbacks
                    </SectionLayout.Title>

                    <SectionLayout.Subtitle>
                        dos nossos clientes
                    </SectionLayout.Subtitle>

                    <SectionLayout.GradientLine />
                </SectionLayout.Header>

                {/* CONTAINER GERAL */}
                <div className={` w-full mb-6 flex flex-col gap-6 ${isCarousel ? 'lg:block' : 'lg:flex lg:flex-row'}`}>

                    {isCarousel ? (
                        <>
                             {/* MOBILE: Lista normal (escondida no LG) */}
                             <div className="flex flex-col gap-6 lg:hidden">
                                {testimonials.map((testimonial) => (
                                    <FeedbackCard key={testimonial.id} data={testimonial} />
                                ))}
                            </div>

                            {/* DESKTOP: Slider (Visível apenas LG) */}
                            <div className="hidden lg:block">
                                <FeedbackSlider 
                                    items={testimonials} 
                                    renderItem={(testimonial) => <FeedbackCard data={testimonial} />} 
                                />
                            </div>
                        </>
                    ) : (
                        // MODO ESTÁTICO (<= 3 itens)
                        testimonials.map((testimonial) => (
                            <FeedbackCard key={testimonial.id} data={testimonial} />
                        ))
                    )}
                </div>
            </SectionLayout.Container>
        </SectionLayout>
    );
}