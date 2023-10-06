import React, { useState } from 'react';
import QuestionInput from '../QuestionInput';
import { validateInputs } from '../formValidationHelper';


const Step8 = ({ formData, setFormData }) => {
    const [validationState, setValidationState] = useState({});

    const questions = [
        { type: 'select', label: 'LAMINANT FINISHES', id: 'finishes', options: ['SELECT ONE', 'GLOSSY (+ $0)', 'MATTE (+ $0)', 'TEXTURED (+ $40)']}
    ];

    const handleInputChange = (id, value) => {
        const updatedData = { ...formData, [id]: value };
        setFormData(updatedData);
    };
    
    Step8.questions = questions;

    return (
        <>
            <h1 className="step-title">FINISHES</h1>
            <div className="step-content">
                {questions.map((q) => (
                    <QuestionInput
                        key={q.id}
                        question={q}
                        onInputChange={handleInputChange}
                        initialValue={formData[q.id]}
                        validationState={validationState}
                    />
                ))}
            </div>
        </>
    );
};

export default Step8;
