'use client';

import Image from 'next/image';

interface FeedbackCardProps {
    data: {
        id: number;
        text: string;
        author: string;
        position: string;
        alt: string;
        logo: string;
    };
}

export default function FeedbackCard({ data }: FeedbackCardProps) {
    return (
        <div className="relative bg-linear-to-b from-rv-white via-[#efefef] to-[#bbbbbb] rounded-2xl shadow-lg pl-6 py-2 flex md:flex-col flex-1 h-full w-full">
            {/* Logo da empresa */}
            <div className="shrink-0 md:pt-4 md:flex">
                <div className="w-20 h-20 rounded-full overflow-hidden relative ">
                    <Image
                        src={data.logo}
                        alt={data.alt}
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="hidden md:flex md:flex-col justify-center pl-4 text-rv-green font-display text-[clamp(0.875rem,3.5vw,1rem)] font-bold">
                    <p className="">{data.author}</p>
                    <p>{data.position}</p>
                </div>
            </div>

            {/* Conteúdo do depoimento */}
            <div className="px-6">
                {/* Aspas decorativas */}
                <div className="flex items-start ">
                    <p className="text-rv-yellow font-bold font-italianno text-9xl leading-none -mb-26 -ml-4 select-none">
                        “
                    </p>
                </div>

                {/* Texto do depoimento */}
                <p className="text-rv-green font-display text-[clamp(0.75rem,3vw,0.875rem)] leading-relaxed mb-4 italic">
                    {data.text}
                </p>

                {/* Autor (Mobile Only) */}
                <div className="md:hidden">
                    <p className="text-rv-green font-display text-[clamp(0.875rem,3.5vw,1rem)] font-bold">
                        {data.author} - {data.position}
                    </p>
                </div>
            </div>
        </div>
    );
}