import React from 'react';
import PriceDisplay from './PriceDisplay';
import BackgroundElements from './BackgroundElements';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-pastel-bg flex flex-col font-sans text-pastel-text bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative">
            <BackgroundElements />
            <header className="glass-panel sticky top-0 z-50 border-b-0 rounded-b-2xl mx-4 mt-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center">
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pastel-primary to-pastel-secondary">
                            WebConfig
                        </span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="hidden md:block">
                            <PriceDisplay />
                        </div>
                        <div className="text-sm text-pastel-muted border-l border-gray-200 pl-4 ml-4 hidden md:block">
                            Konfigurátor webu na míru
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-20 md:mb-8 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {children}
                </div>
            </main>

            <div className="md:hidden">
                <PriceDisplay />
            </div>

            <footer className="glass-panel mt-auto hidden md:block rounded-t-2xl mx-4 mb-4 border-t-0 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <p className="text-center text-sm text-pastel-muted">
                        &copy; {new Date().getFullYear()} WebConfig. Všechna práva vyhrazena.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
