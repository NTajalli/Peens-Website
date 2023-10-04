import React from 'react';

const FormNavigation = ({ onNext, onPrev, onSubmit, currentStep, totalSteps, stepValidations }) => {
    const isFormValid = stepValidations[currentStep];

    return (
        <div className="form-navigation">
            {currentStep > 0 && 
                <button 
                    style={{
                        backgroundColor: '#2800ab',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                    onClick={onPrev}
                >
                    Previous Step
                </button>
            }
            {currentStep === totalSteps 
                ? (
                    <button 
                        style={{
                            backgroundColor: isFormValid ? 'red' : 'gray',
                            color: 'white',
                            padding: '10px 20px',
                            border: 'none',
                            cursor: 'pointer',
                            borderRadius: '5px',
                        }}
                        onClick={onSubmit}
                        disabled={!isFormValid}
                    >
                        Submit
                    </button>
                ) 
                : (
                    <button 
                        style={{
                            backgroundColor: isFormValid ? 'red' : 'gray',
                            color: 'white',
                            padding: '10px 20px',
                            border: 'none',
                            cursor: 'pointer',
                            borderRadius: '5px',
                        }}
                        onClick={onNext}
                        disabled={!isFormValid}
                    >
                        Next Step
                    </button>
                )}
        </div>
    );
};

export default FormNavigation;
