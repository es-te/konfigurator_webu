import React, { createContext, useState, useContext } from 'react';

const ConfiguratorContext = createContext();

export const useConfigurator = () => {
    return useContext(ConfiguratorContext);
};

export const ConfiguratorProvider = ({ children }) => {
    const [step, setStep] = useState(1);
    const [config, setConfig] = useState({
        basicInfo: { name: '', domain: '', type: '' },
        structure: {
            services: { type: 'one-page', count: 0 },
            references: { types: [], count: 0 }, // types: ['logos', 'case-studies', 'reviews']
            blog: { type: 'none', articleCount: 0 },
            career: { type: 'none' },
            pages: { about: false, news: 'none', contact: true }
        },
        details: {
            languages: { count: 0, translation: false },
            branding: 'none', // 'full', 'logo-only', 'none'
            photos: 'own' // 'own', 'poor', 'stock', 'shoot'
        },
        addons: {
            seo: 'basic', // 'basic', 'advanced'
            localSeo: false,
            copywriting: false,
            marketing: false,
            dataImport: false
        },
        contact: { name: '', email: '', phone: '', ico: '', timeframe: '', budget: '' }
    });

    const updateConfig = (section, key, value) => {
        setConfig(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [key]: value
            }
        }));
    };

    const updateNestedConfig = (section, subsection, key, value) => {
        setConfig(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [subsection]: {
                    ...prev[section][subsection],
                    [key]: value
                }
            }
        }));
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => Math.max(1, prev - 1));

    return (
        <ConfiguratorContext.Provider value={{ step, setStep, nextStep, prevStep, config, setConfig, updateConfig, updateNestedConfig }}>
            {children}
        </ConfiguratorContext.Provider>
    );
};
