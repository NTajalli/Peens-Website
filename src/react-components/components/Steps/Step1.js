import React, { useState } from 'react';
import QuestionInput from '../QuestionInput';
import { validateInputs } from '../formValidationHelper';


const Step1 = ({ formData, setFormData }) => {
    const [validationState, setValidationState] = useState({});

    const questions = [
        { type: 'select', label: 'Bike Size', id: 'bikeSize', options: ['SELECT ONE', 'Pit Bike 50cc', 'Mini Bike 65-85cc', 'Big Bikes 125-400cc'] }
    ];

    const handleInputChange = (id, value) => {
        const updatedData = { ...formData, [id]: value };
        setFormData(updatedData);
        };
     
    Step1.questions = questions;

    return (
        <>
            <h1 className="step-title">Bike Size</h1>
            {questions.map((q) => (
                <QuestionInput
                    key={q.id}
                    question={q}
                    onInputChange={handleInputChange}
                    initialValue={formData[q.id]}
                    validationState={validationState}
                />
            ))}
        </>
    );
};

export default Step1;
