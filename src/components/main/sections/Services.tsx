'use client';

import { useState } from 'react'; // Adicionado
import Image from 'next/image';
import SectionLayout from '@/ui/SectionLayout';

export default function Services() {
    // 1. Estado para controlar qual serviço foi clicado
    const [activeId, setActiveId] = useState<number | null>(null);

    const services = [
        {
            id: 1,
            name: 'Revisão Fiscal',
            title: <>Revisão <br/>Fiscal</>,
            icon: '/revisao_fiscal.svg',
            // Adicionei este campo para o texto do conteúdo
            description: 'É o “carro chefe” da RV Tributos. Consiste na revisão de toda a carga tributária (federal, estadual e municipal) incidente sobre a operação da empresa, para identificar possíveis créditos que não tenham sido aproveitados.A revisão fiscal tem como objetivo a recuperação de tributos recolhidos a maior nos últimos 05 anos, bem como a otimização da carga tributária futura da empresa.'
        },
        {
            id: 2,
            name: 'Planejamento Tributário',
            title: <>Planejamento <br/> Tributário</>,
            icon: '/planejamento_tributario.svg',
            description: 'Análise de toda a estrutura comercial, logística e operacional da empresa, para apontar medidas que reduzam a carga tributária incidente, tal como o apontamento do regime de tributação mais vantajoso; eventuais benefícios fiscais que possam ser utilizados; sugestões de melhorias logísticas e na aquisição de produtos/serviços, além de possíveis alterações societárias para organização e proteção patrimonial.'
        },
        {
            id: 3,
            name: 'Incentivos Fiscais',
            title: <>Incentivos <br/>Fiscais</>,
            icon: '/incentivos_fiscais.svg',
            description: 'Este serviço é essencial para agregar inteligência tributária à operação logística da sua empresa. Auxiliaremos a estruturação de novos negócios ou melhoria da operação atual mediante o apontamento de benefícios fiscais estaduais, municipais e federais que possam ser utilizados na operação. Faremos todo o processo de requisição do incentivo fiscal junto ao Ente Federativo concedente, bem como o alinhamento dos processos internos da empresa para escrituração contábil e fiscal do benefício.'
        },
        {
            id: 4,
            name: 'Compliance',
            title: <>  Compliance </>,
            icon: '/compliance.svg',
            description: 'Revisão de conformidade da tributação e preenchimento das obrigações acessórias entregues pela empresa, com o objetivo de identificar e apontar possíveis irregularidades considerando as as exigências impostas pelas Receitas Federal, Estadual e Municipal.'
        },
        {
            id: 5,
            name: 'Assessoria Mensal',
            title: <>Assessoria <br/> Mensal</>,
            icon: '/assessoria_mensal.svg',
            description: 'É o serviço mais completo prestado pela RV Tributos. A assessoria mensal engloba todos os serviços prestados pela RV, mediante o acompanhamento e fechamento da escrituração fiscal, contábil e tributária da empresa, e inclui reuniões mensais para entender eventuais mudanças na operação, sempre buscando reduzir a carga tributária com eficiência e segurança jurídica.'
        },
        {
            id: 6,
            name: 'Gestão de Passivos',
            title: <>Gestão <br/>de Passivos</>,
            icon: '/gestao_passivos.svg',
            description: 'Estruturação de plano de contenção e redução do passivo tributário em aberto da empresa, mediante discussão judicial dos débitos ou por meio de simulação e negociação de transações tributárias.'
        }
    ];

    const handleServiceClick = (id: number) => {
        // Se clicar no mesmo, fecha. Se for outro, abre.
        setActiveId(activeId === id ? null : id);
    };
    const handleCloseService = () => {
        setActiveId(null);
    };

    return (
        <SectionLayout className='min-h-section'>
            <SectionLayout.Header>
                <SectionLayout.Subtitle className="">
                   Nossos 
                </SectionLayout.Subtitle>
                <SectionLayout.Title>
                    Serviços
                </SectionLayout.Title>
                
                <SectionLayout.GradientLine />
            </SectionLayout.Header>

            <SectionLayout.Content className="h-full">
                {/* Container Principal 
                   Se activeId existir (clicado), vira Flex Row (lado a lado).
                   Caso contrário, é apenas um bloco normal que segura o grid.
                */}
                <div className={`transition-all duration-500 ease-in-out w-full ${activeId ? 'flex' : ''}`}>

                    {/* Área dos Botões 
                       Muda de GRID (inicial) para FLEX COLUNA (lateral) quando ativo
                    */}
                    <div className={`transition-all duration-500 ease-in-out ${
                        activeId 
                        ? 'w-1/4 flex flex-col py-3'
                        : 'w-full grid grid-cols-2 grid-rows-3 gap-6 max-w-3xl mx-auto' // Estado Inicial: Grid centralizado
                    }`}>
                        {services.map((service) => {
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
                                            ${activeId ? 'w-16 h-16' : 'w-20 h-20 hover:scale-105 hover:shadow-xl active:scale-95'}
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
                                    <p className={`text-rv-green ${activeId ? `hidden`:`visible`} font-display font-bold text-center transition-all duration-300 ${activeId ? 'text-[0.6rem]' : 'text-[clamp(1rem,3.5vw,2rem)]'}`}>
                                        {service.title}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Área de Conteúdo (Aparece à direita)
                    */}
                    {activeId && (
                        <div className="w-3/4 rounded-2xl animate-fade-in flex-1">
                            {/* Encontra o serviço ativo para mostrar os dados */}
                            {services.map(service => {
                                if (service.id !== activeId) return null;
                                return (
                                    <div key={service.id} className="bg-rv-yellow rounded-xl p-4 h-full ">
                                        <div className="w-full flex justify-end mb-2">
                                            <button 
                                                onClick={handleCloseService}
                                                className="bg-rv-green text-rv-white w-8 h-8 rounded-md flex items-center justify-center font-bold hover:scale-110 transition-transform shadow-md"
                                                aria-label="Fechar"
                                            >
                                                X
                                            </button>
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
        </SectionLayout>
    );
}