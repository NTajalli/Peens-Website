import React, { useState } from 'react';
import QuestionInput from '../QuestionInput';
import { validateInputs } from '../formValidationHelper';


const Step2 = ({ formData, setFormData }) => {
    const [validationState, setValidationState] = useState({});

    const questions = [
        { type: 'select', label: 'MAKE', id: 'make', options: ['SELECT ONE', 'BETA', 'COBRA', 'GAS GAS', 'HONDA', 'HUSABERG', 'HUSQVARNA', 'KAWASAKE', 'KTM', 'SHERCO', 'SUZUKI', 'TM', 'YAMAHA']},
        { type: 'text', label: 'MODEL', id: 'model' },
        { type: 'text', label: 'YEAR', id: 'year' },
        { type: 'select', label: 'STROKE', id: 'stroke', options: ['SELECT ONE', '2-Stroke', '4-Stroke'] }
    ];

    const handleInputChange = (id, value) => {
        const updatedData = { ...formData, [id]: value };
        setFormData(updatedData);
    };

    Step2.questions = questions;

    return (
        <>
            <h1 className="step-title">BIKE DETAILS</h1>
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

export default Step2;
