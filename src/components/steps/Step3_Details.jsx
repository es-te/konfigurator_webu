import React from 'react';
import { useConfigurator } from '../../context/ConfiguratorContext';

const Section = ({ title, children }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 border-b border-gray-100 pb-2">
            {title}
        </h3>
        <div className="space-y-4">
            {children}
        </div>
    </div>
);

const RadioOption = ({ name, value, checked, onChange, label, description }) => (
    <label className={`block relative border rounded-lg p-4 cursor-pointer transition-all ${checked ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
        }`}>
        <div className="flex items-start">
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className="mt-1 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <div className="ml-3">
                <span className="block text-sm font-medium text-gray-900">{label}</span>
                {description && <span className="block text-sm text-gray-500 mt-1">{description}</span>}
            </div>
        </div>
    </label>
);

const Step3_Details = () => {
    const { config, updateConfig, updateNestedConfig } = useConfigurator();
    const { details } = config;

    // Handlers
    const handleLangCountChange = (e) => updateNestedConfig('details', 'languages', 'count', parseInt(e.target.value) || 0);
    const handleTranslationChange = (e) => updateNestedConfig('details', 'languages', 'translation', e.target.checked);

    const handleBrandingChange = (e) => updateConfig('details', 'branding', e.target.value);
    const handlePhotosChange = (e) => updateConfig('details', 'photos', e.target.value);

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold text-gray-900">Jazyky a Podklady</h2>
                <p className="text-gray-600">Upřesněte rozsah a připravenost podkladů.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* A. Languages */}
                <Section title="Jazykové mutace">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Počet dalších jazyků (kromě češtiny):
                            </label>
                            <input
                                type="number"
                                min="0"
                                value={details.languages.count}
                                onChange={handleLangCountChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                            <p className="text-xs text-gray-500 mt-1">0 = pouze česky</p>
                        </div>

                        {details.languages.count > 0 && (
                            <div className="animate-fade-in">
                                <label className="flex items-center space-x-3">
                                    <input
                                        type="checkbox"
                                        checked={details.languages.translation}
                                        onChange={handleTranslationChange}
                                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                    <span className="text-sm text-gray-700">Mám zajištěné překlady (pokud ne, naceníme)</span>
                                </label>
                            </div>
                        )}
                    </div>
                </Section>

                {/* B. Branding */}
                <Section title="Vizuální identita (Branding)">
                    <div className="space-y-3">
                        <RadioOption
                            name="branding"
                            value="full"
                            checked={details.branding === 'full'}
                            onChange={handleBrandingChange}
                            label="Mám logo i manuál"
                            description="Kompletní podklady."
                        />
                        <RadioOption
                            name="branding"
                            value="logo-only"
                            checked={details.branding === 'logo-only'}
                            onChange={handleBrandingChange}
                            label="Mám jen logo"
                            description="Barvy odvodíme z loga."
                        />
                        <RadioOption
                            name="branding"
                            value="none"
                            checked={details.branding === 'none'}
                            onChange={handleBrandingChange}
                            label="Nemám nic"
                            description="Potřebuji navrhnout logo a barvy."
                        />
                    </div>
                </Section>

                {/* C. Photos */}
                <Section title="Fotografie a Video">
                    <div className="space-y-3">
                        <RadioOption
                            name="photos"
                            value="own"
                            checked={details.photos === 'own'}
                            onChange={handlePhotosChange}
                            label="Mám vlastní profesionální fotky"
                        />
                        <RadioOption
                            name="photos"
                            value="poor"
                            checked={details.photos === 'poor'}
                            onChange={handlePhotosChange}
                            label="Mám fotky, ale nižší kvality"
                        />
                        <RadioOption
                            name="photos"
                            value="stock"
                            checked={details.photos === 'stock'}
                            onChange={handlePhotosChange}
                            label="Nemám, použijeme fotobanku"
                        />
                        <RadioOption
                            name="photos"
                            value="shoot"
                            checked={details.photos === 'shoot'}
                            onChange={handlePhotosChange}
                            label="Nemám, chci od vás nafotit"
                        />
                    </div>
                </Section>
            </div>
        </div>
    );
};

export default Step3_Details;
