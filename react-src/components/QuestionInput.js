import React from 'react';

const QuestionInput = ({ question, onInputChange, initialValue, validationState }) => {
    const handleChange = (e) => {
        onInputChange(question.id, e.target.value);
    };

    const commonInputStyle = {
        flex: '1 0 30%', 
        padding: '8px',
        fontSize: '16px', 
        boxSizing: 'border-box',
        height: '40px',
        width: '70%'
    };

    const textInputStyle = {
        ...commonInputStyle,
        border: validationState[question.id] === false ? '10px solid red' : '1px solid #ccc'
    };
    
    const selectInputStyle = {
        ...commonInputStyle,
        border: validationState[question.id] === false ? '1px solid red' : '1px solid #ccc',
    };    

    if (question.type === 'select' && question.options) {
        const selectValue = question.options.includes(initialValue) ? initialValue : question.options[0];
        return (
            <div className="question-input">
                <label>{question.label}</label>
                <select onChange={handleChange} value={selectValue} style={selectInputStyle}>
                    {question.options.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        );
    }

    if (question.type === 'text') {
        return (
            <div className="question-input">
                <label>{question.label}</label>
                <input type="text" onChange={handleChange} value={initialValue || ""} style={textInputStyle} />
            </div>
        );
    }

    // Handle any other input types or error cases here if needed

    return null;  // If neither select nor text, return null
};

export default QuestionInput;
