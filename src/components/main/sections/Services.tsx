'use client';

import Image from 'next/image';
import SectionLayout from '@/ui/SectionLayout';

export default function Services() {
    const services = [
        {
            id: 1,
            name: 'Revisão Fiscal',
            title: <>Revisão <br/>Fiscal</>,
            icon: '/revisao_fiscal.svg',
        },
        {
            id: 2,
            name: 'Planejamento Tributário',
            title: <>Planejamento <br/> Tributário</>,
            icon: '/planejamento_tributario.svg',
        },
        {
            id: 3,
            name: 'Incentivos Fiscais',
            title: <>Incentivos <br/>Fiscais</>,
            icon: '/incentivos_fiscais.svg',
        },
        {
            id: 4,
            name: 'Compliance',
            title: <>  Compliance </>,
            icon: '/compliance.svg',
        },
        {
            id: 5,
            name: 'Assessoria Mensal',
            title: <>Assessoria <br/> Mensal</>,
            icon: '/assessoria_mensal.svg',
        },
        {
            id: 6,
            name: 'Gestão de Passivos',
            title: <>Gestão <br/>de Passivos</>,
            icon: '/gestao_passivos.svg',
        }
    ];

    const handleServiceClick = (serviceTitle: string) => {
        console.log(`Clicou em: ${serviceTitle}`);
        // Adicione sua lógica aqui
    };

    return (
        <SectionLayout>
            <SectionLayout.Header>
                <SectionLayout.Subtitle className="">
                   Nossos 
                </SectionLayout.Subtitle>
                <SectionLayout.Title>
                    Serviços
                </SectionLayout.Title>
                
                <SectionLayout.GradientLine />
            </SectionLayout.Header>

            <SectionLayout.Content className="mt-12">
                {/* Grid 3 linhas x 2 colunas */}
                <div className="grid grid-cols-2 grid-rows-3 gap-6 max-w-3xl mx-auto">
                    {services.map((service) => (
                        <div key={service.id} className="flex flex-col items-center gap-2">
                            {/* Botão Quadrado Verde */}
                            <button
                                onClick={() => handleServiceClick(service.name)}
                                className="w-20 h-20 bg-rv-green rounded-xl shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 ease-in-out"
                            >
                                {/* Ícone centralizado */}
                                <div className="w-12 h-12 relative">
                                    <Image
                                        src={service.icon}
                                        alt={service.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </button>

                            {/* Título abaixo do botão */}
                            <p className="text-rv-green font-display text-[clamp(1rem,3.5vw,2rem)] font-bold text-center">
                                {service.title}
                            </p>
                        </div>
                    ))}
                </div>
            </SectionLayout.Content>
        </SectionLayout>
    );
}