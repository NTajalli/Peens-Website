import React, { useState, useEffect } from 'react';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';
import FormSummary from './FormSummary';
import FormNavigation from './FormNavigation';
import { CSSTransition } from 'react-transition-group';
import './fadeTransition.css';
import { validateInputs } from './formValidationHelper';

const DynamicForm = () => {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({});
    const [validationState, setValidationState] = useState({});
    const [stepValidations, setStepValidations] = useState([false, false, false, false]);

    useEffect(() => {
        fetch('/get-form-data')
            .then(res => res.json())
            .then(data => setFormData(data))
            .catch(error => console.error('Error fetching form data:', error));
    }, []);

    const getCurrentStepQuestions = (stepOverride) => {
        const actualStep = stepOverride !== undefined ? stepOverride : step;
    
        switch (actualStep) {
            case 0:
                return Step1.questions;
            case 1:
                return Step2.questions;
            case 2:
                return Step3.questions;
            case 3:
                return Step4.questions;
            default:
                return [];
        }
    };

    useEffect(() => {
        const currentQuestions = getCurrentStepQuestions();
        const validationResults = validateInputs(currentQuestions, formData);
    
        // Update validationState with the current errors.
        setValidationState(validationResults.errors);
    
        // Update stepValidations array with the current step validation result.
        const updatedStepValidations = [...stepValidations];
        updatedStepValidations[step] = validationResults.isValid;
        setStepValidations(updatedStepValidations);
    }, [step, formData]);

    const handleNext = () => {
        const currentQuestions = getCurrentStepQuestions();
        const validationResults = validateInputs(currentQuestions, formData);
        
        setValidationState(validationResults.errors);

        if (!validationResults.isValid) return;

        fetch('/save-form-data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(() => setStep(prevStep => prevStep + 1))
        .catch(error => console.error('Error saving form data:', error));
    };

    const handlePrev = () => {
        fetch('/save-form-data', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
        .then(() => setStep(prevStep => prevStep - 1))
        .catch(error => console.error('Error saving form data:', error));
    };

    const renderStep = () => {
        switch (step) {
            case 0:
                return <Step1 formData={formData} setFormData={setFormData} validationState={validationState} setValidationState={setValidationState} />;
            case 1:
                return <Step2 formData={formData} setFormData={setFormData} validationState={validationState} setValidationState={setValidationState} />;
            case 2:
                return <Step3 formData={formData} setFormData={setFormData} validationState={validationState} setValidationState={setValidationState} />;
            case 3:
                return <Step4 formData={formData} setFormData={setFormData} validationState={validationState} setValidationState={setValidationState} />;
            default:
                return <FormSummary data={formData} />;
        }
    };

    return (
        <div className="dynamic-form">
            <CSSTransition in={true} appear={true} timeout={1500} classNames="fade" key={step} unmountOnExit>
                {(state) => (
                    <div className="step-wrapper">
                        {renderStep()}
                    </div>
                )}
            </CSSTransition>
            <FormNavigation 
                onNext={handleNext} 
                onPrev={handlePrev} 
                currentStep={step} 
                totalSteps={4} 
                stepValidations={stepValidations} 
            />
        </div>
    );
};

export default DynamicForm;
