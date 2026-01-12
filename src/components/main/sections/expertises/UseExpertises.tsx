import { useState, useEffect, useRef } from 'react';
import { servicesData } from './ExpertisesData';

export function useExpertises() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeServiceIndex, setActiveServiceIndex] = useState<number | null>(null);
    const [isHovered, setIsHovered] = useState(false);

    const isActived = activeServiceIndex !== null;

    // Refs
    const dropdownRef = useRef<HTMLDivElement>(null);
    const desktopContainerRef = useRef<HTMLDivElement>(null);

    // Helpers de atualização
    const updateActiveIndexIfOpen = (newIndex: number) => {
        if (isActived) {
            setActiveServiceIndex(newIndex);
        }
    };

    // Navegação
    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % servicesData.length;
        setCurrentIndex(newIndex);
        updateActiveIndexIfOpen(newIndex);
    };

    const prevSlide = () => {
        const newIndex = (currentIndex - 1 + servicesData.length) % servicesData.length;
        setCurrentIndex(newIndex);
        updateActiveIndexIfOpen(newIndex);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        updateActiveIndexIfOpen(index);
    };

    const toggleService = (index: number, e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        if (activeServiceIndex === index) {
            setActiveServiceIndex(null);
        } else {
            setActiveServiceIndex(index);
            setCurrentIndex(index);
        }
    };

    const closeDropdown = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        setActiveServiceIndex(null);
    };

    // Efeito: Rotação Automática
    useEffect(() => {
        if (isHovered || isActived) return;
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [currentIndex, isHovered, isActived]);

    // Efeito: Clique Fora (Lógica unificada)
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target as Node;

            // Desktop: Verifica container geral
            if (window.innerWidth >= 768) {
                if (desktopContainerRef.current && !desktopContainerRef.current.contains(target)) {
                    setActiveServiceIndex(null);
                }
            } 
            // Mobile: Verifica apenas o dropdown e ignora controles de navegação
            else {
                if (dropdownRef.current && !dropdownRef.current.contains(target)) {
                    const targetEl = event.target as HTMLElement;
                    if (!targetEl.closest('.nav-control')) {
                        setActiveServiceIndex(null);
                    }
                }
            }
        }

        if (isActived) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isActived]);

    return {
        currentIndex,
        activeServiceIndex,
        isActived,
        isHovered,
        setIsHovered,
        dropdownRef,
        desktopContainerRef,
        services: servicesData, // Exporta os dados para o componente usar
        actions: {
            nextSlide,
            prevSlide,
            goToSlide,
            toggleService,
            closeDropdown
        }
    };
}