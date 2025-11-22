import React from 'react';
import { useConfigurator } from '../context/ConfiguratorContext';
import { calculatePrice, formatPrice } from '../utils/pricing';

const PriceDisplay = () => {
    const { config, step } = useConfigurator();
    const price = calculatePrice(config);

    // Don't show on success page (step 6) or if price is 0 (start)
    if (step === 6) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-4 z-40 animate-slide-up md:static md:bg-transparent md:border-0 md:shadow-none md:p-0 md:animate-none">
            <div className="max-w-7xl mx-auto flex items-center justify-between md:justify-end md:space-x-4">
                <div className="text-sm text-gray-500 md:text-right">
                    <span className="hidden md:inline">Odhadovaná cena:</span>
                    <span className="md:hidden">Cena od:</span>
                </div>
                <div className="text-2xl font-bold text-blue-600">
                    {formatPrice(price)}
                </div>
            </div>
        </div>
    );
};

export default PriceDisplay;
