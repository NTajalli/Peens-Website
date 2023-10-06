import React, { useState, useEffect } from 'react';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';
import Step5 from './Steps/Step5';
import Step6 from './Steps/Step6';
import Step7 from './Steps/Step7';
import Step8 from './Steps/Step8';
import Step9 from './Steps/Step9';
const FormSummary = require('./FormSummary');
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

    const onSubmit = async () => {
        try {
            // Send the form data to the server
            const response = await fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            if (response.status === 200) {
                alert('Form submitted successfully!');
                // You can also reset the form, navigate the user to another page, etc.
                // setStep(0);
                // setFormData({});
            } else {
                alert('Failed to submit the form. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred while submitting the form. Please try again.');
        }
    };
    

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
            case 4:
                return Step5.questions;
            case 5:
                return Step6.questions;
            case 6:
                return [];
            case 7:
                return Step8.questions;
            case 8:
                return Step9.questions;
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
            case 4:
                return <Step5 formData={formData} setFormData={setFormData} validationState={validationState} setValidationState={setValidationState} />;
            case 5:
                return <Step6 formData={formData} setFormData={setFormData} validationState={validationState} setValidationState={setValidationState} />;
            case 6:
                return <Step7 formData={formData} setFormData={setFormData} validationState={validationState} setValidationState={setValidationState} />;
            case 7:
                return <Step8 formData={formData} setFormData={setFormData} validationState={validationState} setValidationState={setValidationState} />;
            case 8:
                return <Step9 formData={formData} setFormData={setFormData} validationState={validationState} setValidationState={setValidationState} />;
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
                onSubmit={onSubmit}
                currentStep={step} 
                totalSteps={9} 
                stepValidations={stepValidations} 
            />
        </div>
    );
};

export default DynamicForm;
