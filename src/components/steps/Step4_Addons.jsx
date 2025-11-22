import React from 'react';
import { useConfigurator } from '../../context/ConfiguratorContext';

const AddonCard = ({ title, description, price, checked, onChange, recommended }) => (
    <label className={`relative flex flex-col p-6 bg-white rounded-xl border-2 cursor-pointer transition-all hover:shadow-md ${checked ? 'border-blue-500 ring-1 ring-blue-500 bg-blue-50' : 'border-gray-100 hover:border-gray-200'
        }`}>
        {recommended && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Doporučujeme
            </div>
        )}
        <div className="flex items-start justify-between mb-4">
            <div className="flex items-center h-5">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
            </div>
            {price && <span className="text-sm font-semibold text-gray-900">{price}</span>}
        </div>
        <div>
            <h3 className={`text-lg font-semibold mb-2 ${checked ? 'text-blue-900' : 'text-gray-900'}`}>
                {title}
            </h3>
            <p className={`text-sm ${checked ? 'text-blue-700' : 'text-gray-500'}`}>
                {description}
            </p>
        </div>
    </label>
);

const Step4_Addons = () => {
    const { config, updateConfig } = useConfigurator();
    const { addons } = config;

    const handleSeoChange = (val) => updateConfig('addons', 'seo', val);
    const handleAddonChange = (key, val) => updateConfig('addons', key, val);

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold text-gray-900">Doplňkové služby</h2>
                <p className="text-gray-600">Co dalšího by se vám hodilo pro úspěšný start?</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">SEO a Nalezitelnost</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className={`relative flex p-4 border rounded-lg cursor-pointer ${addons.seo === 'basic' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                        <input
                            type="radio"
                            name="seo"
                            value="basic"
                            checked={addons.seo === 'basic'}
                            onChange={() => handleSeoChange('basic')}
                            className="mt-1 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <div className="ml-3">
                            <span className="block text-sm font-medium text-gray-900">Základní SEO (V ceně)</span>
                            <span className="block text-sm text-gray-500">Technické nastavení, meta tagy, indexace.</span>
                        </div>
                    </label>

                    <label className={`relative flex p-4 border rounded-lg cursor-pointer ${addons.seo === 'advanced' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                        <input
                            type="radio"
                            name="seo"
                            value="advanced"
                            checked={addons.seo === 'advanced'}
                            onChange={() => handleSeoChange('advanced')}
                            className="mt-1 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <div className="ml-3">
                            <span className="block text-sm font-medium text-gray-900">Pokročilé SEO + Analýza</span>
                            <span className="block text-sm text-gray-500">Analýza klíčových slov a konkurence.</span>
                        </div>
                    </label>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <AddonCard
                    title="Local SEO"
                    description="Zápis do Google Map a Firmy.cz. Buďte vidět ve vašem okolí."
                    checked={addons.localSeo}
                    onChange={(e) => handleAddonChange('localSeo', e.target.checked)}
                    recommended={true}
                />
                <AddonCard
                    title="Copywriting"
                    description="Napíšeme texty za vás. Čtivé, prodejní a bez chyb."
                    checked={addons.copywriting}
                    onChange={(e) => handleAddonChange('copywriting', e.target.checked)}
                />
                <AddonCard
                    title="Online Marketing"
                    description="Správa PPC reklamy a sociálních sítí pro získání prvních zákazníků."
                    checked={addons.marketing}
                    onChange={(e) => handleAddonChange('marketing', e.target.checked)}
                />
                <AddonCard
                    title="Import dat"
                    description="Přeneseme obsah z vašeho starého webu na nový."
                    checked={addons.dataImport}
                    onChange={(e) => handleAddonChange('dataImport', e.target.checked)}
                />
            </div>
        </div>
    );
};

export default Step4_Addons;
