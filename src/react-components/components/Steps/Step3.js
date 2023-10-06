import React, { useState } from 'react';
import QuestionInput from '../QuestionInput';
import { validateInputs } from '../formValidationHelper';


const Step3 = ({ formData, setFormData }) => {
    const [validationState, setValidationState] = useState({});

    const questions = [
        { type: 'text', label: 'NAME', id: 'riderName' },
        { type: 'text', label: 'RACE NUMBER', id: 'raceNumber' },
        { type: 'text', label: 'RACE NUMBER COLOR', id: 'raceNumberColor' },
        { type: 'text', label: 'BACKGROUND COLOR', id: 'backgroundColor' },
        { type: 'select', label: 'NUMBER FONT SELECTION', id: 'numberFontSelection', options: ['SELECT ONE', 'Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'] }
    ];

    const handleInputChange = (id, value) => {
        const updatedData = { ...formData, [id]: value };
        setFormData(updatedData);
    };
    
    Step3.questions = questions;

    return (
        <>
            <h1 className="step-title">Rider Details</h1>
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

export default Step3;
