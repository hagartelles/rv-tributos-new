'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useHero } from './useHero';
import { WHATSAPP_LINK } from '@/constants';

export default function Hero() {
    const { isLoaded, tens, units, data } = useHero();

    return (
        <section id='inicio' className="relative h-hero-section w-full overflow-hidden mt-(--header-height)">
            {/* Background */}
            <div className="relative h-full w-full">
                <Image
                    src={data.images.background}
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-rv-black/40" />
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-rv-green/40" />

                {/* --- VERDE MOBILE --- */}
                <div className={`md:hidden absolute top-0 left-0 bg-rv-green/50 transition-transform duration-1000 ease-out z-10 ${isLoaded ? 'translate-y-0 translate-x-0' : '-translate-y-full translate-x-full '}`} style={{ width: '85%', height: '40%', clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}>
                    <div className={`absolute flex items-center h-2/3 w-2/3 pl-5 transition-opacity duration-700 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                        <p className="text-rv-yellow font-display text-2xl font-bold leading-tight">
                            {data.text.greenTagline}
                        </p>
                    </div>
                </div>

                {/* --- VERDE DESKTOP --- */}
                <div className={`hidden md:block absolute z-10 transition-transform duration-1000 ease-out ${isLoaded ? 'translate-y-0' : '-translate-y-full'}
                                md:w-[90%] md:h-[90%] md:-top-60 md:left-[1%]
                                lg:w-[90%] lg:h-[90%] lg:-top-50 lg:left-20
                                xl:w-full xl:h-full xl:-top-50 xl:left-20
                                `}>
                    <div className="relative w-full h-full">
                        <Image src={data.images.setaVerde} alt="" fill className="object-contain object-top-left" />
                        <div className={`absolute top-100 left-20 w-[75%] transition-opacity duration-700 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'} pt-6 pl-6`}>
                            <p className="text-rv-yellow max-w-2/3 font-display font-bold leading-tight md:text-2xl lg:text-3xl xl:text-4xl">
                                {data.text.greenTagline}
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- SETA AMARELO --- */}
                <div className={`absolute transition-transform duration-1000 ease-out z-10 overflow-visible
                    top-[2%] -right-6 w-full h-[85%] 
                    md:w-[80%] md:h-[80%] md:top-20 md:right-0
                    lg:right-20                    
                    ${isLoaded ? 'translate-y-0 translate-x-0' : 'translate-y-[150%] -translate-x-[150%]'}
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

                    <div className={`absolute inset-0 flex flex-col items-end justify-start transition-opacity duration-700 delay-1000 pr-[10%] pt-[30%] md:right-0 md:left-10 md:pt-50 md:pr-10 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="flex flex-col items-end text-right w-full max-w-3xs md:max-w-3xs">
                            <p className="text-rv-green font-display font-semibold text-[clamp(1rem,4vw,1.25rem)] md:text-2xl">
                                {data.text.yellowTagline.prefix}
                            </p>

                            <div className="flex gap-1 mb-1 mt-1 md:gap-2">
                                <div className="border-2 border-rv-green rounded-lg px-[0.4rem] py-1 min-w-12 flex justify-center">
                                    <span className="text-rv-green font-display font-bold leading-none text-[clamp(2rem,8vw,2.5rem)] md:text-3xl">{tens}</span>
                                </div>
                                <div className="border-2 border-rv-green rounded-lg px-[0.4rem] py-1 min-w-12 flex justify-center">
                                    <span className="text-rv-green font-display font-bold leading-none text-[clamp(2rem,8vw,2.5rem)] md:text-3xl">{units}</span>
                                </div>
                            </div>

                            <span className="text-rv-green font-display font-bold leading-none text-[clamp(1.5rem,6vw,2rem)] md:text-3xl xl:text-4xl">
                                {data.text.yellowTagline.suffix}
                            </span>
                            <p className="text-rv-green font-display font-semibold underline decoration-2 underline-offset-4 mb-2 md:text-2xl ">
                                {data.text.yellowTagline.subSuffix}
                            </p>

                            <Link href={WHATSAPP_LINK} className="bg-rv-green text-rv-white font-display text-base px-4 py-2 rounded-lg shadow-lg transition-all duration-300 hover:bg-rv-greenMusgo hover:scale-105 active:scale-95 ">
                                {data.text.yellowTagline.buttonText}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* --- RODAPÉ --- */}
                <div className="absolute bottom-20 md:bottom-30 left-0 right-0 h-[30%] flex md:w-full items-end justify-center z-0">
                    <div className="text-left px-6 md:text-center md:max-w-4xl">
                        <p className="text-rv-white font-display text-4xl">
                            {data.text.welcome}
                        </p>
                        <h1 className="text-rv-yellow font-italianno leading-none text-9xl ">
                            {data.text.mainTitle}
                        </h1>
                        <p className="text-rv-white font-display max-w-3/4 text-lg md:max-w-2xl md:mx-auto lg:text-xl md:px-11 leading-tight">
                            {data.text.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}