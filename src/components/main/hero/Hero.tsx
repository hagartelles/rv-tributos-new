'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroMobile() {
    // Estado para controlar a animação de entrada (Seta e Triângulo)
    const [isLoaded, setIsLoaded] = useState(false);
    
    // Estado para o contador numérico (0 a 20)
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Ativa a animação visual logo após montar
        setIsLoaded(true);
    }, []);

    // Efeito separado para controlar a contagem numérica
    useEffect(() => {
        if (isLoaded) {
            // O texto da seta tem um "delay-1000" (1 segundo) para aparecer.
            // Vamos esperar 1200ms para começar a contar, assim o usuário vê o "00" antes de subir.
            const startDelay = setTimeout(() => {
                let start = 0;
                const end = 20;
                const duration = 1000; // A contagem vai demorar 1 segundos no total
                const incrementTime = duration / end; // Tempo entre cada número

                const timer = setInterval(() => {
                    start += 1;
                    setCount(start);
                    if (start >= end) clearInterval(timer);
                }, incrementTime);

                return () => clearInterval(timer);
            }, 1200);

            return () => clearTimeout(startDelay);
        }
    }, [isLoaded]);

    const tens = Math.floor(count / 10);
    const units = count % 10;

    return (
        <section className="relative h-section w-full overflow-hidden mt-(--header-height)">
            {/* Background - Base para absolute positioning */}
            <div className="relative h-full w-full">
                <Image
                    src="/background.webp"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />

                {/* Overlay escuro para contraste */}
                <div className="absolute inset-0 bg-rv-black/40" />

                {/* Gradiente  */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-rv-green/40" />

                {/* --- TRIÂNGULO VERDE (Esquerda) --- */}
                <div
                    className={`absolute top-0 left-0 bg-rv-green/50 transition-transform duration-1000 ease-out z-10
                        ${isLoaded ? 'translate-y-0' : '-translate-y-full'} 
                    `}
                    style={{
                        width: '85%',
                        height: '40%',
                        clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                    }}
                >
                    <div className={`absolute flex items-center h-2/3 w-2/3 pl-5 transition-opacity duration-700 delay-1000
                        ${isLoaded ? 'opacity-100' : 'opacity-0'}
                    `}>
                        <p className="text-rv-yellow font-display text-[clamp(1rem,4vw,1.25rem)] font-bold leading-tight">
                            Sem planejamento tributário você<br /> paga muito mais <br /> do que deve.
                        </p>
                    </div>
                </div>

                {/* --- SETA AMARELA (Direita) --- */}
                <div className={`absolute top-[2%] -right-6 w-full h-[85%] transition-transform duration-1000 ease-out z-10
                    ${isLoaded ? 'translate-y-0' : 'translate-y-[150%]'}
                `}>
                    {/* Seta Amarela Imagem */}
                    <div className="relative w-full h-full">
                        <Image
                            src="/mobile/seta_amarela_cima.png"
                            alt=""
                            fill
                            className="object-contain object-top-right"
                            style={{ transform: 'rotate(2deg)' }}
                        />
                    </div>

                    {/* Conteúdo dentro da Seta */}
                    <div className={`absolute inset-0 flex flex-col items-end justify-start pr-[8%] pt-[24%] transition-opacity duration-700 delay-1000
                        ${isLoaded ? 'opacity-100' : 'opacity-0'}
                    `}>
                        <div className="flex flex-col items-end text-right max-w-[50%]">
                            <p className="text-rv-green font-display text-[clamp(0.8rem,3vw,1.5rem)] font-semibold">
                                Nossos clientes<br/>receberam mais de 
                            </p>
                            
                            {/* --- NÚMEROS ANIMADOS --- */}
                            <div className="flex gap-1 mb-1 mt-1">
                                {/* Dígito da Dezena */}
                                <div className="border-2 border-rv-green rounded-lg px-[0.4rem] py-1 min-w-12 flex justify-center">
                                    <span className="text-rv-green font-display text-[clamp(2rem,8vw,2.5rem)] font-bold leading-none">
                                        {tens}
                                    </span>
                                </div>
                                {/* Dígito da Unidade */}
                                <div className="border-2 border-rv-green rounded-lg px-[0.4rem] py-1 min-w-12 flex justify-center">
                                    <span className="text-rv-green font-display text-[clamp(2rem,8vw,2.5rem)] font-bold leading-none">
                                        {units}
                                    </span>
                                </div>
                            </div>

                            <span className="text-rv-green font-display text-[clamp(1.5rem,6vw,2rem)] font-bold leading-none">
                                MILHÕES
                            </span>
                            <p className="text-rv-green font-display text-[clamp(1rem,4vw,1.5rem)] font-semibold underline decoration-2 underline-offset-4 mb-2">
                                em restituições
                            </p>

                            <Link
                                href="/contato"
                                className="bg-rv-green text-rv-white font-display font-bold text-[clamp(0.8rem,3vw,1rem)] px-4 py-2 rounded-lg shadow-lg transition-all duration-300 hover:bg-rv-greenMusgo hover:scale-105 active:scale-95"
                            >
                                Saiba Como
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Seção Inferior - Bem-vindo */}
                <div className="absolute bottom-0 left-0 right-0 h-[30%] flex items-end justify-center pb-10 z-0">
                    <div className="text-left px-6">
                        <p className="text-rv-white font-display text-[clamp(1.5rem,6vw,2rem)] font-bold">
                            Bem-vindo à
                        </p>
                        <h1 className="text-rv-yellow font-display text-[clamp(2.5rem,10vw,4.5rem)] font-bold leading-tight">
                            Rozin e Viesa
                        </h1>
                        <p className="text-rv-white font-display text-[clamp(0.75rem,1rem,2rem)] max-w-3/4 ">
                            Resultados tangíveis, economias reais! Nossa consultoria tributária é
                            projetada para aumentar sua rentabilidade enquanto garantimos
                            conformidade total com a legislação.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}