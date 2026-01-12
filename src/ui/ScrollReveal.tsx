'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    direction?: 'left' | 'right' | 'bottom'; 
    className?: string;
}

export default function ScrollReveal({ children, direction = 'left', className = '' }: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(element);
                }
            },
            {
                threshold: 0.10, 
                rootMargin: '0px 0px -50px 0px' 
            }
        );

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    // Definição das classes de "estado inicial" (invisível)
    const getHiddenState = () => {
        switch (direction) {
            case 'left': return '-translate-x-24 opacity-0'; 
            case 'right': return 'translate-x-24 opacity-0'; 
            case 'bottom': return 'translate-y-24 opacity-0'; 
            default: return 'opacity-0';
        }
    };

    // Estado visível (posição original)
    const visibleState = 'translate-x-0 translate-y-0 opacity-100';

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${isVisible ? visibleState : getHiddenState()} ${className}`}
        >
            {children}
        </div>
    );
}