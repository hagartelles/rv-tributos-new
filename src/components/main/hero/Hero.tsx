'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useHero } from './useHero';
import { WHATSAPP_LINK } from '@/constants';

export default function Hero() {
    const { isLoaded, tens, units, data } = useHero();

    return (
        <section id='inicio' className="relative h-hero-section w-full overflow-hidden mt-(--header-height) min-h-166 md:min-h-256 lg:min-h-192">
            {/* Background */}
            <div className="relative h-full w-full overflow-hidden">
                <Image
                    src={data.images.background}
                    alt="Escritório corporativo, moderno e profissional da RV Tributos"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-rv-black/40" />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-rv-green/40" />

                {/* --- SETA VERDE --- */}
                <div className={`absolute transition-transform duration-1000 ease-out ${isLoaded ? 'translate-y-0' : '-translate-y-full'} w-110 h-110 -top-36 -left-10 md:w-200 md:h-200 md:-top-60 md:left-0 lg:w-250 lg:h-250 lg:-top-70 overflow-hidden`}>
                    <div className="relative w-full h-full overflow-hidden">
                        <Image
                            src={data.images.setaVerde}
                            alt=""
                            fill
                            className="object-contain object-top-left"
                        />

                        {/* Texto dentro da Seta */}
                        <div className={`absolute w-full transition-opacity duration-700 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} pt-6 pl-6 top-45 left-8 md:top-90 md:left-20 lg:top-110 lg:left-40`}>
                            <p className="text-rv-yellow max-w-2/3 font-display font-bold leading-tight text-xl md:text-3xl lg:text-4xl">
                                {data.text.greenTagline}
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- SETA AMARELA --- */}
                <div className={`absolute transition-transform duration-1000 ease-out  overflow-hidden pointer-events-none top-5 -right-6 w-120 h-120 md:w-180 md:h-180 md:top-10 md:-right-8 ${isLoaded ? 'translate-y-0 translate-x-0' : 'translate-y-[150%] -translate-x-[150%]'}
                `}>
                    <div className="relative w-full h-full">
                        <Image
                            src={data.images.setaAmarela}
                            alt=""
                            fill
                            className="object-contain object-top-right"
                            style={{ transform: 'rotate(2deg)' }}
                        />
                    </div>
                    {/* --- SETA AMARELO - CONTEÚDO --- */}
                    <div className={`absolute inset-0 flex flex-col items-end justify-start transition-opacity duration-700 delay-1000 right-7 pt-30 md:right-16 md:pt-55 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="flex flex-col items-end text-right w-full max-w-3xs md:max-w-3xs xl:max-w-sm">
                            <p className="text-rv-green font-display font-semibold text-[clamp(1rem,4vw,1.25rem)] md:text-2xl leading-none">
                                {data.text.yellowTagline.prefix}
                            </p>

                            <div className="flex gap-1 mb-1 mt-1 md:gap-2">
                                <div className="border-2 border-rv-green rounded-lg px-[0.4rem] py-1 min-w-12 flex justify-center">
                                    <span className="text-rv-green font-display font-bold leading-none text-[clamp(1.5rem,8vw,2.5rem)] md:text-3xl ">{tens}</span>
                                </div>
                                <div className="border-2 border-rv-green rounded-lg px-[0.4rem] py-1 min-w-12 flex justify-center">
                                    <span className="text-rv-green font-display font-bold leading-none text-[clamp(1.5rem,8vw,2.5rem)] md:text-3xl ">{units}</span>
                                </div>
                            </div>

                            <span className="text-rv-green font-display font-bold leading-none text-[clamp(1.5rem,6vw,2rem)] md:text-3xl ">
                                {data.text.yellowTagline.suffix}
                            </span>
                            <p className="text-rv-green font-display font-semibold underline decoration-2 underline-offset-2 mb-1 text-[clamp(1rem,4vw,1.25rem)] md:text-2xl ">
                                {data.text.yellowTagline.subSuffix}
                            </p>

                            <Link href={WHATSAPP_LINK} className="bg-rv-green text-rv-white font-display text-sm md:text-base xl:text-lg mt-1 p-2 rounded-lg shadow-lg transition-all duration-300 hover:bg-rv-greenMusgo hover:scale-105 active:scale-95 pointer-events-auto">
                                {data.text.yellowTagline.buttonText}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* --- RODAPÉ --- */}
                <div className="absolute bottom-5 md:bottom-10 left-0 right-0 flex md:w-full items-end justify-center">
                    <div className="text-left px-6 md:text-center md:max-w-4xl">
                        <p className="text-rv-white font-display text-base md:text-2xl">
                            {data.text.welcome}
                        </p>
                        <h1 className="text-rv-yellow font-italianno leading-none text-7xl md:text-8xl ">
                            {data.text.mainTitle}
                        </h1>
                        <p className="text-rv-white font-display max-w-3/4 text-base md:text-lg md:max-w-2xl md:mx-auto lg:text-xl md:px-11 leading-tight">
                            {data.text.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}