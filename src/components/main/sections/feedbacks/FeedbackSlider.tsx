'use client';

import Image from 'next/image';
import Link from 'next/link';
import { clientLogos } from './feedbackData';

export default function FeedbacksSlider() {
    // Duplicamos a lista para o efeito infinito perfeito
    const logos = [...clientLogos, ...clientLogos];

    return (
        <div className="w-full pt-8 overflow-hidden relative">
            
            {/* O Trilho Animado */}
            {/* hover:[animation-play-state:paused] faz parar ao passar o mouse */}
            <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
                {logos.map((logo, index) => (
                    <div 
                        key={`${logo.id}-${index}`} 
                        className="
                            relative flex items-center justify-center 
                            w-[33vw] md:w-[25vw] xl:w-[20vw] 
                            px-4 shrink-0
                        "
                    >
<div className='relative rounded-full overflow-hidden w-36 h-36 flex items-center justify-center group'>
    <Link
        href={logo.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full transition-transform duration-300 group-hover:scale-105"
    >
        <Image
            src={logo.src}
            alt={`Logo do parceiro ${logo.name}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 150px, (max-width: 1200px) 150px, 150px"
        />
    </Link>
</div>
                    </div>
                ))}
            </div>
        </div>
    );
}