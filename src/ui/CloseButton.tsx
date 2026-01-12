import React from 'react';

interface CloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function CloseButton({ className, ...props }: CloseButtonProps) {
    const baseClass = "bg-rv-green text-rv-white w-8 h-8 rounded-md flex items-center justify-center font-bold hover:scale-110 transition-transform shadow-md z-50 cursor-pointer";
    
    return (
        <button 
            className={`${baseClass} ${className || ''}`} 
            aria-label="Fechar"
            type="button"
            {...props}
        >
            X
        </button>
    );
}