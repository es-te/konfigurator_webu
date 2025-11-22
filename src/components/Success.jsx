import React from 'react';

const Success = () => {
    return (
        <div className="text-center space-y-6 py-12 animate-fade-in">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 mb-4">
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
            </div>

            <h2 className="text-4xl font-bold text-gray-900">
                Děkujeme za poptávku!
            </h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Vaši konfiguraci jsme úspěšně přijali. Nyní se na ni podíváme a co nejdříve se vám ozveme s konkrétní nabídkou a kalkulací.
            </p>

            <div className="pt-8">
                <button
                    onClick={() => window.location.reload()}
                    className="px-8 py-3 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                >
                    Začít novou konfiguraci
                </button>
            </div>
        </div>
    );
};

export default Success;
