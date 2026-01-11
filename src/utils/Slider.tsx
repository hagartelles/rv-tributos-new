'use client';

import { useState } from 'react';

interface SliderProps<SliderItem> {
    items: SliderItem[];
    renderItem: (item: SliderItem) => React.ReactNode;
}

export default function Slider<SliderItem extends { id: number | string }>({ 
    items, 
    renderItem 
}: SliderProps<SliderItem>) {
    
    const [currentSlide, setCurrentSlide] = useState(0);
    
    // Configurações do Layout 
    const gapRem = 1.5; 
    const visibleItems = 3;

    const nextSlide = () => {
        // Se estiver no final (total - 3 visíveis), volta para o 0.
        setCurrentSlide((prev) => 
            prev >= items.length - visibleItems ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        // Se estiver no 0, vai para o final.
        setCurrentSlide((prev) => 
            prev === 0 ? items.length - visibleItems : prev - 1
        );
    };

    return (
        <div className="relative group w-full">
            {/* Janela de Visualização (Overflow Hidden) */}
            <div className="overflow-hidden w-full px-2 py-4">
                <div 
                    className="flex gap-6 transition-transform duration-500 ease-in-out"
                    style={{
                        // A Lógica Matemática do movimento:
                        transform: `translateX(calc(-${currentSlide} * ((100% - ${visibleItems * gapRem - gapRem}rem) / ${visibleItems} + ${gapRem}rem)))`
                    }}
                >
                    {items.map((item) => (
                        <div 
                            key={item.id} 
                            className="shrink-0"
                            style={{ 
                                // Cada card ocupa 1/3 do espaço disponível descontando os gaps
                                width: `calc((100% - ${(visibleItems - 1) * gapRem}rem) / ${visibleItems})` 
                            }}
                        >
                            {renderItem(item)}
                        </div>
                    ))}
                </div>
            </div>

            {/* Botão Anterior */}
            <button 
                onClick={prevSlide}
                className="absolute -left-14 top-1/2 -translate-y-1/2 bg-rv-green text-rv-yellow p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-10"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>

            {/* Botão Próximo */}
            <button 
                onClick={nextSlide}
                className="absolute -right-14 top-1/2 -translate-y-1/2 bg-rv-green text-rv-yellow p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-10"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    );
}