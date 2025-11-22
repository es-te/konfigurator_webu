import React from 'react';
import { useConfigurator } from '../context/ConfiguratorContext';
import ProgressBar from './ProgressBar';
import Step1_BasicInfo from './steps/Step1_BasicInfo';
import Step2_Structure from './steps/Step2_Structure';
import Step3_Details from './steps/Step3_Details';
import Step4_Addons from './steps/Step4_Addons';
import Step5_Summary from './steps/Step5_Summary';
import Success from './Success';

// Placeholder components for steps
const StepPlaceholder = ({ title }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
    <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
    <p className="text-gray-600">Obsah kroku bude zde...</p>
  </div>
);

const Wizard = () => {
  const { step, nextStep, prevStep, config, setStep } = useConfigurator();

  // Validation for Step 1
  const isStep1Valid = config.basicInfo.name.trim() !== '' && config.basicInfo.type.trim() !== '';

  // Validation for Step 5 (Contact)
  const isStep5Valid = config.contact.name.trim() !== '' &&
    config.contact.email.trim() !== '' &&
    config.contact.phone.trim() !== '';

  const handleSubmit = () => {
    // Here you would normally send data to API
    console.log('Submitting config:', config);
    setStep(6); // Move to success step
  };

  const renderStep = () => {
    switch (step) {
      case 1: return <Step1_BasicInfo />;
      case 2: return <Step2_Structure />;
      case 3: return <Step3_Details />;
      case 4: return <Step4_Addons />;
      case 5: return <Step5_Summary />;
      case 6: return <Success />;
      default: return <StepPlaceholder title="Neznámý krok" />;
    }
  };

  return (
    <div>
      <ProgressBar />
      <div className="transition-all duration-500 ease-out transform">
        {renderStep()}
      </div>

      {step < 6 && (
        <div className="mt-8 flex justify-between items-center glass-panel p-4 rounded-xl">
          <button
            onClick={prevStep}
            disabled={step === 1}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${step === 1
                ? 'text-pastel-muted cursor-not-allowed'
                : 'text-pastel-text hover:bg-pastel-bg hover:text-pastel-primary'
              }`}
          >
            Zpět
          </button>
          <button
            onClick={step === 5 ? handleSubmit : nextStep}
            disabled={step === 6 || (step === 1 && !isStep1Valid) || (step === 5 && !isStep5Valid)}
            className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${step === 6 || (step === 1 && !isStep1Valid) || (step === 5 && !isStep5Valid)
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
                : 'bg-gradient-to-r from-pastel-primary to-pastel-secondary text-white'
              }`}
          >
            {step === 5 ? 'Odeslat poptávku' : 'Pokračovat'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Wizard;
