'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
    return (
        <section className="relative w-full py-16 bg-[linear-gradient(180deg,var(--color-rv-green)_0%,var(--color-rv-greenMusgo)_100%)] overflow-hidden">
            {/* Content */}
            <div className="relative px-6">
                <div className="max-w-md w-full mx-auto">
                    {/* Headline */}
                    <h2 className="text-rv-white font-display text-[clamp(1.75rem,7vw,2.5rem)] font-bold leading-tight mb-8 w-fit mx-auto text-left">
                        Descubra quanto <br />
                        sua empresa pode <br />
                        <span className="text-rv-yellow">RECUPERAR!</span>
                    </h2>
                    
                    {/* CTA Button Container */}
                    <div className="inline-block w-full text-center">
                        <Link
                            href="/contato"
                            className="group relative inline-flex items-center justify-center shadow-[0_6px_12px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-in-out hover:scale-105 transform-gpu will-change-transform antialiased"
                            style={{
                                fontSize: '1.25rem',
                                backfaceVisibility: 'hidden', 
                                WebkitFontSmoothing: 'antialiased',
                                transform: 'translateZ(0)', 
                            }}
                        >   
                            <Image 
                                src="/botao_agendar.svg"
                                alt="Agendar Contato"
                                width={300}
                                height={24}
                                className="antialiased"
                            />

                            {/* Brilhos laterais */}
                            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-rv-yellow/40 rounded-full blur-md pointer-events-none"></div>
                            <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-4 h-4 bg-rv-yellow/60 rounded-full blur-sm pointer-events-none"></div>
                            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-6 h-6 bg-rv-yellow/40 rounded-full blur-md pointer-events-none"></div>
                            <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-4 h-4 bg-rv-yellow/60 rounded-full blur-sm pointer-events-none"></div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}