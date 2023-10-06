import React, { useState } from 'react';
import QuestionInput from '../QuestionInput';
import { validateInputs } from '../formValidationHelper';


const Step9 = ({ formData, setFormData }) => {
    const [validationState, setValidationState] = useState({});

    const questions = [
        { type: 'text', label: 'NAME', id: 'name' },
        { type: 'text', label: 'EMAIL', id: 'email' },
        { type: 'text', label: 'ADDRESS', id: 'address' },
        { type: 'text', label: 'CITY', id: 'city' },
        { type: 'text', label: 'STATE', id: 'state' },
        { type: 'text', label: 'COUNTRY', id: 'country' },
    ];

    const handleInputChange = (id, value) => {
        const updatedData = { ...formData, [id]: value };
        setFormData(updatedData);
    };
    
    Step9.questions = questions;

    return (
        <>
            <h1 className="step-title">CUSTOMER INFORMATION</h1>
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

export default Step9;
