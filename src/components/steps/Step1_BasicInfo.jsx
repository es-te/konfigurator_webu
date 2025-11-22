import React from 'react';
import { useConfigurator } from '../../context/ConfiguratorContext';

const Step1_BasicInfo = () => {
    const { config, updateConfig, nextStep } = useConfigurator();
    const { basicInfo } = config;

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateConfig('basicInfo', name, value);
    };

    const isValid = basicInfo.name.trim() !== '' && basicInfo.type.trim() !== '';

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">
                    Začněme vaším novým webem
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Vyplňte základní údaje o vašem projektu. Pomůže nám to lépe pochopit vaše potřeby a připravit přesnější kalkulaci.
                </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-6">
                {/* Project Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Název projektu / Firmy <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={basicInfo.name}
                        onChange={handleChange}
                        placeholder="Např. Květinářství U Jany"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                </div>

                {/* Domain */}
                <div>
                    <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-1">
                        Máte už doménu? (volitelné)
                    </label>
                    <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                            https://
                        </span>
                        <input
                            type="text"
                            id="domain"
                            name="domain"
                            value={basicInfo.domain}
                            onChange={handleChange}
                            placeholder="www.mojefirma.cz"
                            className="flex-1 px-4 py-3 rounded-r-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        />
                    </div>
                </div>

                {/* Business Type */}
                <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                        Oblast podnikání <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="type"
                        name="type"
                        value={basicInfo.type}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                    >
                        <option value="">Vyberte možnost...</option>
                        <option value="services">Služby / Řemesla</option>
                        <option value="gastronomy">Gastronomie / Ubytování</option>
                        <option value="health">Zdraví a Krása</option>
                        <option value="legal">Právo / Finance / Reality</option>
                        <option value="construction">Stavebnictví / Architektura</option>
                        <option value="other">Jiné</option>
                    </select>
                </div>
            </div>

            {/* Navigation is handled by Wizard, but we can add a specific CTA here if needed, 
          though Wizard has the main Next button. 
          Maybe we want to hide the default Next button in Wizard and put it here?
          For now, let's stick to the Wizard's buttons for consistency.
      */}
        </div>
    );
};

export default Step1_BasicInfo;
