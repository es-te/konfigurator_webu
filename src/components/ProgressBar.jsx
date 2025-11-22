import React from 'react';
import { useConfigurator } from '../context/ConfiguratorContext';

const ProgressBar = () => {
    const { step } = useConfigurator();
    const totalSteps = 5;
    const progress = (step / totalSteps) * 100;

    return (
        <div className="mb-8">
            <div className="flex justify-between mb-2">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                    Krok {step} z {totalSteps}
                </span>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                <div
                    style={{ width: `${progress}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500 transition-all duration-500 ease-in-out"
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
