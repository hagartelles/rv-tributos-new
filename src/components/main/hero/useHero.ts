import { useState, useEffect } from 'react';
import { heroData } from './heroData';

export function useHero() {
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
                const end = heroData.counter.endValue;
                const duration = heroData.counter.duration;
                const incrementTime = duration / end;
                
                const timer = setInterval(() => {
                    start += 1;
                    setCount(start);
                    if (start >= end) clearInterval(timer);
                }, incrementTime);
                
                return () => clearInterval(timer);
            }, heroData.counter.startDelay);
            
            return () => clearTimeout(startDelay);
        }
    }, [isLoaded]);

    const tens = Math.floor(count / 10);
    const units = count % 10;

    return {
        isLoaded,
        tens,
        units,
        data: heroData
    };
}