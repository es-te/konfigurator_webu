import React, { useEffect } from 'react';
import { useConfigurator } from '../../context/ConfiguratorContext';
import { calculatePrice, formatPrice } from '../../utils/pricing';

const SummaryItem = ({ label, value }) => (
    <div className="flex justify-between py-2 border-b border-gray-100 last:border-0">
        <span className="text-gray-600">{label}</span>
        <span className="font-medium text-gray-900">{value}</span>
    </div>
);

const Step5_Summary = () => {
    const { config, updateConfig, updateNestedConfig } = useConfigurator();
    const { basicInfo, contact } = config;

    const estimatedPrice = calculatePrice(config);

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateConfig('contact', name, value);
    };

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold text-gray-900">Shrnutí a Kontakt</h2>
                <p className="text-gray-600">Zkontrolujte svou konfiguraci a získejte nezávaznou nabídku.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Summary Column */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 sticky top-24">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Váš výběr</h3>

                        <div className="space-y-1 mb-6">
                            <SummaryItem label="Projekt" value={basicInfo.name} />
                            <SummaryItem label="Typ" value={basicInfo.type} />
                            <SummaryItem label="Struktura" value={`${config.structure.services.type === 'detail' ? 'Rozsáhlá' : 'Jednoduchá'}`} />
                            <SummaryItem label="Jazyky" value={config.details.languages.count > 0 ? `Čeština + ${config.details.languages.count}` : 'Čeština'} />
                        </div>

                        <div className="pt-4 border-t border-gray-200">
                            <div className="text-sm text-gray-500 mb-1">Odhadovaná cena realizace</div>
                            <div className="text-3xl font-bold text-blue-600">
                                {formatPrice(estimatedPrice)}
                            </div>
                            <p className="text-xs text-gray-400 mt-2">
                                *Cena je orientační. Přesnou kalkulaci zašleme po konzultaci.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Form Column */}
                <div className="lg:col-span-2">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="text-xl font-semibold text-gray-800 mb-6">Kontaktní údaje</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                    Jméno a Příjmení <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={contact.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    E-mail <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={contact.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                    Telefon <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={contact.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="ico" className="block text-sm font-medium text-gray-700 mb-1">
                                    IČO (volitelné)
                                </label>
                                <input
                                    type="text"
                                    id="ico"
                                    name="ico"
                                    value={contact.ico}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                                    Váš rozpočet
                                </label>
                                <select
                                    id="budget"
                                    name="budget"
                                    value={contact.budget}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                                >
                                    <option value="">Nevím / Nechci uvádět</option>
                                    <option value="30-50">30 000 - 50 000 Kč</option>
                                    <option value="50-80">50 000 - 80 000 Kč</option>
                                    <option value="80-120">80 000 - 120 000 Kč</option>
                                    <option value="120+">Více než 120 000 Kč</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700 mb-1">
                                    Očekávaný termín spuštění
                                </label>
                                <select
                                    id="timeframe"
                                    name="timeframe"
                                    value={contact.timeframe}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                                >
                                    <option value="">Co nejdříve</option>
                                    <option value="1-month">Do měsíce</option>
                                    <option value="3-months">Do 3 měsíců</option>
                                    <option value="later">Nespěchám</option>
                                </select>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-blue-50 rounded-lg text-sm text-blue-800">
                            Odesláním formuláře souhlasíte se zpracováním osobních údajů pro účely vytvoření nabídky.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step5_Summary;
