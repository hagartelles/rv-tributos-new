'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const startTimer = setTimeout(() => {
            setIsLoaded(true);
        }, 200); 
        return () => clearTimeout(startTimer);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            const startDelay = setTimeout(() => {
                let start = 0;
                const end = 20;
                const duration = 1000;
                const incrementTime = duration / end;
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
        <section className="relative h-hero-section w-full overflow-hidden mt-(--header-height)">
            {/* Background */}
            <div className="relative h-full w-full">
                <Image src="/background.webp" alt="Background" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-rv-black/40" />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-rv-green/40" />

                {/* --- VERDE MOBILE (Triângulo CSS) --- */}
                <div className={`md:hidden absolute top-0 left-0 bg-rv-green/50 transition-transform duration-1000 ease-out z-10 ${isLoaded ? 'translate-y-0 translate-x-0' : '-translate-y-full translate-x-full '}`} style={{ width: '85%', height: '40%', clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}>
                    <div className={`absolute flex items-center h-2/3 w-2/3 pl-5 transition-opacity duration-700 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                        <p className="text-rv-yellow font-display text-[clamp(1rem,4vw,1.25rem)] font-bold leading-tight">
                            Sem planejamento<br /> tributário você<br /> paga muito mais <br /> do que deve.
                        </p>
                    </div>
                </div>

                {/* --- VERDE DESKTOP (Imagem Seta Baixo) --- */}
                <div className={`hidden md:block absolute z-10 transition-transform duration-1000 ease-out w-[60%] h-[80%] lg:w-[70%] lg:h-[85%] xl:w-[80%] xl:h-[90%] md:-top-[20%] md:left-12 lg:-top-[25%] xl:-top-[27%] ${isLoaded ? 'translate-y-0' : '-translate-y-full'}`}>
                    <div className="relative w-full h-full">
                        <Image src="/seta_verde_baixo.png" alt="" fill className="object-contain object-top-left" />
                        {/* Texto */}
                        <div className={`absolute top-[40%] left-[8%] w-[75%] transition-opacity duration-700 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} pt-6 pl-6`}>
                            <p className="text-rv-yellow max-w-2/3 font-display font-bold leading-tight md:text-xl lg:text-2xl xl:text-3xl">
                                Sem planejamento<br /> tributário você<br /> paga muito mais <br /> do que deve.
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- AMARELO (Seta Direita) --- */}
                <div className={`absolute transition-transform duration-1000 ease-out z-10 top-[2%] -right-6 w-full h-[85%] md:w-[60%] md:h-[60%] lg:w-[60%] lg:h-[60%] xl:w-[60%] xl:-[60%] md:top-[20%] md:right-12 ${isLoaded ? 'translate-y-0 translate-x-0' : 'translate-y-[150%] -translate-x-[150%]'}`}>
                    <div className="relative w-full h-full">
                        <Image src="/mobile/seta_amarela_cima.png" alt="" fill className="object-contain object-top-right" style={{ transform: 'rotate(2deg)' }} />
                    </div>
                    {/* Padding ajustado para empurrar o texto para dentro da área visível da seta */}
                    <div className={`absolute inset-0 flex flex-col items-end justify-start transition-opacity duration-700 delay-1000 pr-[8%] md:pr-8 pt-[30%] md:pt-32 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="flex flex-col items-end text-right max-w-[50%] md:max-w-[80%] lg:max-w-[70%]">
                            <p className="text-rv-green font-display font-semibold text-[clamp(1rem,4vw,1.25rem)] md:text-base">
                                Nossos clientes<br/>receberam mais de 
                            </p>
                            <div className="flex gap-1 mb-1 mt-1 md:gap-2">
                                <div className="border-2 border-rv-green rounded-lg px-[0.4rem] py-1 min-w-12 flex justify-center">
                                    <span className="text-rv-green font-display font-bold leading-none text-[clamp(2rem,8vw,2.5rem)] md:text-xl lg:text-2xl">{tens}</span>
                                </div>
                                <div className="border-2 border-rv-green rounded-lg px-[0.4rem] py-1 min-w-12 flex justify-center">
                                    <span className="text-rv-green font-display font-bold leading-none text-[clamp(2rem,8vw,2.5rem)] md:text-xl lg:text-2xl">{units}</span>
                                </div>
                            </div>
                            <span className="text-rv-green font-display font-bold leading-none text-[clamp(1.5rem,6vw,2rem)] md:text-xl lg:text-2xl">MILHÕES</span>
                            <p className="text-rv-green font-display font-semibold underline decoration-2 underline-offset-4 mb-2 text-base ">em restituições</p>
                            <Link href="/contato" className="bg-rv-green text-rv-white font-display text-base px-4 py-2 rounded-lg shadow-lg transition-all duration-300 hover:bg-rv-greenMusgo hover:scale-105 active:scale-95 ">
                                Saiba Como
                            </Link>
                        </div>
                    </div>
                </div>

                {/* --- BEM-VINDO (Rodapé) --- */}
                <div className="absolute bottom-0 left-0 right-0 h-[30%] flex items-end justify-center pb-10 z-0 md:pb-16 lg:pb-20">
                    <div className="text-left px-6 md:text-center md:max-w-4xl">
                        <p className="text-rv-white font-display font-bold text-[clamp(1rem,4vw,1.5rem)] md:text-2xl lg:text-3xl">Bem-vindo à</p>
                        <h1 className="text-rv-yellow font-italianno leading-tight text-[clamp(4rem,10vw,5rem)] md:text-7xl lg:text-8xl xl:text-9xl">Rozin e Viesa</h1>
                        <p className="text-rv-white font-display max-w-3/4 text-[clamp(0.75rem,1rem,2rem)] md:text-lg md:max-w-2xl md:mx-auto lg:text-xl">
                            Resultados tangíveis, economias reais! Nossa consultoria tributária é projetada para aumentar sua rentabilidade enquanto garantimos conformidade total com a legislação.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}