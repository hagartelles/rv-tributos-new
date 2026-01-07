'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HeroMobile() {
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

                {/* Triângulo Verde - Lado Esquerdo */}
                <div
                    className="absolute top-0 left-0 bg-rv-green/50"
                    style={{
                        width: '85%',
                        height: '40%',
                        clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                    }}
                >
                    {/* Texto dentro do triângulo */}
                    <div className="absolute flex items-center h-2/3 w-2/3 pl-5">
                        <p className="text-rv-yellow font-display text-[clamp(1rem,4vw,1.25rem)] font-bold leading-tight">
                            Sem planejamento tributário você<br /> paga muito mais <br /> do que deve.
                        </p>
                    </div>
                </div>

                {/* 
                    TAMANHO E POSIÇÃO DA SETA
                    - w-[95%] = largura da seta (aumente/diminua aqui)
                    - h-[70%] = altura da seta (aumente/diminua aqui)
                    - top-[8%] = distância do topo (aumente para descer, diminua para subir)
                */}
                <div className="absolute top-[2%] -right-6 w-full h-[85%]">
                    {/* Seta Amarela */}
                    <div className="relative w-full h-full">
                        <Image
                            src="/mobile/seta_amarela_cima.png"
                            alt=""
                            fill
                            className="object-contain object-top-right"
                            style={{ transform: 'rotate(2deg)' }}
                        />
                    </div>

                    {/* 
                        POSIÇÃO DO TEXTO DENTRO DA SETA
                        - pr-[8%] = padding direita (afasta do lado direito)
                        - pt-[15%] = padding topo (desce o texto)
                        Aumente/diminua essas porcentagens para mover o texto
                    */}
                    <div className="absolute inset-0 flex flex-col items-end justify-start pr-[8%] pt-[24%]">
                        <div className="flex flex-col items-end text-right max-w-[50%]">
                            {/* 
                                TAMANHO DOS TEXTOS
                                Formato: text-[clamp(MÍNIMO, IDEAL, MÁXIMO)]
                            */}
                            <p className="text-rv-green font-display text-[clamp(0.8rem,3vw,1.5rem)] font-semibold">
                                Nossos clientes<br/>receberam mais de 
                            </p>
                            {/* 
                                🎯 AJUSTE 4: TAMANHO DOS NÚMEROS
                                - gap-1 = espaço entre os números
                                - px-[0.4rem] = padding horizontal das caixas
                                - text-[clamp(2rem,8vw,2.5rem)] = tamanho dos números
                            */}
                            <div className="flex gap-1 mb-1">
                                <div className="border-2 border-rv-green rounded-lg px-[0.4rem] py-1">
                                    <span className="text-rv-green font-display text-[clamp(2rem,8vw,2.5rem)] font-bold leading-none">2</span>
                                </div>
                                <div className="border-2 border-rv-green rounded-lg px-[0.4rem] py-1">
                                    <span className="text-rv-green font-display text-[clamp(2rem,8vw,2.5rem)] font-bold leading-none">0</span>
                                </div>
                            </div>

                            {/* 🎯 AJUSTE 5: TAMANHO "MILHÕES" */}
                            <span className="text-rv-green font-display text-[clamp(1.5rem,6vw,2rem)] font-bold leading-none">
                                MILHÕES
                            </span>
                            {/* 🎯 AJUSTE 6: TAMANHO "em restituições" */}
                            <p className="text-rv-green font-display text-[clamp(1rem,4vw,1.5rem)] font-semibold underline decoration-2 underline-offset-4 mb-2">
                                em restituições
                            </p>

                            {/* 🎯 AJUSTE 7: TAMANHO DO BOTÃO */}
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
                <div className="absolute bottom-0 left-0 right-0 h-[30%] flex items-end justify-center pb-10">
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