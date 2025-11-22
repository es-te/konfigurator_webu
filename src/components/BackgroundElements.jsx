import React from 'react';

const BackgroundElements = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            {/* Top Right - Soft Violet */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-pastel-primary/20 rounded-full blur-3xl animate-float"></div>

            {/* Bottom Left - Soft Rose */}
            <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-pastel-secondary/20 rounded-full blur-3xl animate-float-delayed"></div>

            {/* Center Right - Soft Mint */}
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-pastel-accent/20 rounded-full blur-3xl animate-float-slow transform -translate-y-1/2 translate-x-1/2"></div>

            {/* Top Left - Small Accent */}
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-2xl animate-float-delayed"></div>
        </div>
    );
};

export default BackgroundElements;
