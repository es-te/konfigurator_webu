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

const RadioOption = ({ name, value, checked, onChange, label, description, children }) => (
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
                {children}
            </div>
        </div>
    </label>
);

const CheckboxOption = ({ name, checked, onChange, label, description, children }) => (
    <label className={`block relative border rounded-lg p-4 cursor-pointer transition-all ${checked ? 'border-blue-500 bg-blue-50 ring-1 ring-blue-500' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
        }`}>
        <div className="flex items-start">
            <input
                type="checkbox"
                name={name}
                checked={checked}
                onChange={onChange}
                className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <div className="ml-3 w-full">
                <span className="block text-sm font-medium text-gray-900">{label}</span>
                {description && <span className="block text-sm text-gray-500 mt-1">{description}</span>}
                {children}
            </div>
        </div>
    </label>
);

const Step2_Structure = () => {
    const { config, updateNestedConfig } = useConfigurator();
    const { structure } = config;

    // Handlers
    const handleServicesChange = (e) => updateNestedConfig('structure', 'services', 'type', e.target.value);
    const handleServicesCountChange = (e) => updateNestedConfig('structure', 'services', 'count', parseInt(e.target.value) || 0);

    const handleRefTypeChange = (type) => {
        const currentTypes = structure.references.types;
        const newTypes = currentTypes.includes(type)
            ? currentTypes.filter(t => t !== type)
            : [...currentTypes, type];
        updateNestedConfig('structure', 'references', 'types', newTypes);
    };
    const handleRefCountChange = (e) => updateNestedConfig('structure', 'references', 'count', parseInt(e.target.value) || 0);

    const handleBlogChange = (e) => updateNestedConfig('structure', 'blog', 'type', e.target.value);
    const handleBlogCountChange = (e) => updateNestedConfig('structure', 'blog', 'articleCount', parseInt(e.target.value) || 0);

    const handleCareerChange = (e) => updateNestedConfig('structure', 'career', 'type', e.target.value);

    const handlePageChange = (page, value) => updateNestedConfig('structure', 'pages', page, value);


    return (
        <div className="space-y-8 animate-fade-in">
            <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold text-gray-900">Struktura webu</h2>
                <p className="text-gray-600">Vyberte, jaké sekce a obsah na webu potřebujete.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* A. Services */}
                <Section title="Služby / Produkty">
                    <div className="space-y-3">
                        <RadioOption
                            name="services"
                            value="one-page"
                            checked={structure.services.type === 'one-page'}
                            onChange={handleServicesChange}
                            label="Jednoduchý přehled"
                            description="Seznam služeb na jedné stránce."
                        />
                        <RadioOption
                            name="services"
                            value="detail"
                            checked={structure.services.type === 'detail'}
                            onChange={handleServicesChange}
                            label="Rozcestník + Detailní stránky"
                            description="Každá služba má vlastní podstránku (lepší pro SEO)."
                        >
                            {structure.services.type === 'detail' && (
                                <div className="mt-3 animate-fade-in">
                                    <label className="block text-sm text-gray-700 mb-1">Počet služeb (ks):</label>
                                    <input
                                        type="number"
                                        min="1"
                                        value={structure.services.count}
                                        onChange={handleServicesCountChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            )}
                        </RadioOption>
                    </div>
                </Section>

                {/* B. References */}
                <Section title="Reference">
                    <div className="space-y-3">
                        <CheckboxOption
                            name="ref-logos"
                            checked={structure.references.types.includes('logos')}
                            onChange={() => handleRefTypeChange('logos')}
                            label="Loga klientů"
                            description="Carousel nebo mřížka s logy."
                        />
                        <CheckboxOption
                            name="ref-cases"
                            checked={structure.references.types.includes('case-studies')}
                            onChange={() => handleRefTypeChange('case-studies')}
                            label="Případové studie"
                            description="Detailní ukázky vaší práce."
                        >
                            {structure.references.types.includes('case-studies') && (
                                <div className="mt-3 animate-fade-in">
                                    <label className="block text-sm text-gray-700 mb-1">Počet případovek (ks):</label>
                                    <input
                                        type="number"
                                        min="1"
                                        value={structure.references.count}
                                        onChange={handleRefCountChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            )}
                        </CheckboxOption>
                        <CheckboxOption
                            name="ref-reviews"
                            checked={structure.references.types.includes('reviews')}
                            onChange={() => handleRefTypeChange('reviews')}
                            label="Google Mapy / Recenze"
                            description="Napojení widgetu s hodnocením."
                        />
                    </div>
                </Section>

                {/* C. Blog */}
                <Section title="Blog / Obsah">
                    <div className="space-y-3">
                        <RadioOption
                            name="blog"
                            value="none"
                            checked={structure.blog.type === 'none'}
                            onChange={handleBlogChange}
                            label="Blog nepotřebuji"
                        />
                        <RadioOption
                            name="blog"
                            value="cms"
                            checked={structure.blog.type === 'cms'}
                            onChange={handleBlogChange}
                            label="Chci technické řešení (CMS)"
                            description="Články si budu psát sám."
                        />
                        <RadioOption
                            name="blog"
                            value="content"
                            checked={structure.blog.type === 'content'}
                            onChange={handleBlogChange}
                            label="Chci řešení i napsat články"
                            description="Kompletní servis obsahu."
                        >
                            {structure.blog.type === 'content' && (
                                <div className="mt-3 animate-fade-in">
                                    <label className="block text-sm text-gray-700 mb-1">Počet článků (ks):</label>
                                    <input
                                        type="number"
                                        min="1"
                                        value={structure.blog.articleCount}
                                        onChange={handleBlogCountChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            )}
                        </RadioOption>
                    </div>
                </Section>

                {/* D. Career */}
                <Section title="Kariéra">
                    <div className="space-y-3">
                        <RadioOption
                            name="career"
                            value="none"
                            checked={structure.career.type === 'none'}
                            onChange={handleCareerChange}
                            label="Nehledám zaměstnance"
                        />
                        <RadioOption
                            name="career"
                            value="list"
                            checked={structure.career.type === 'list'}
                            onChange={handleCareerChange}
                            label="Jednoduchý výpis pozic"
                            description="Textový seznam na jedné stránce."
                        />
                        <RadioOption
                            name="career"
                            value="detail"
                            checked={structure.career.type === 'detail'}
                            onChange={handleCareerChange}
                            label="Výpis + Detail pozice"
                            description="CMS kolekce s formulářem pro CV."
                        />
                    </div>
                </Section>

                {/* E. Standard Pages */}
                <Section title="Ostatní stránky">
                    <div className="space-y-3">
                        <CheckboxOption
                            name="page-about"
                            checked={structure.pages.about}
                            onChange={(e) => handlePageChange('about', e.target.checked)}
                            label="O nás"
                            description="Příběh firmy, tým, historie."
                        />
                        <CheckboxOption
                            name="page-contact"
                            checked={structure.pages.contact}
                            onChange={(e) => handlePageChange('contact', e.target.checked)}
                            label="Kontakt"
                            description="Mapa, formulář, kontaktní údaje."
                        />
                        <div className="pt-2 border-t border-gray-100">
                            <p className="text-sm font-medium text-gray-900 mb-2">Aktuality</p>
                            <div className="space-y-2">
                                <RadioOption
                                    name="page-news"
                                    value="none"
                                    checked={structure.pages.news === 'none'}
                                    onChange={(e) => handlePageChange('news', e.target.value)}
                                    label="Bez aktualit"
                                />
                                <RadioOption
                                    name="page-news"
                                    value="ticker"
                                    checked={structure.pages.news === 'ticker'}
                                    onChange={(e) => handlePageChange('news', e.target.value)}
                                    label="Stručný výpis (Ticker)"
                                />
                                <RadioOption
                                    name="page-news"
                                    value="articles"
                                    checked={structure.pages.news === 'articles'}
                                    onChange={(e) => handlePageChange('news', e.target.value)}
                                    label="Plnohodnotné články"
                                />
                            </div>
                        </div>
                    </div>
                </Section>
            </div>
        </div>
    );
};

export default Step2_Structure;
