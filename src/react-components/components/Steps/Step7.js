import React, { useState } from 'react';
import './Step7.css';

const options = [
    { name: 'Normal', price: 'US$ 0' },
    { name: 'Fluor', price: 'US$ 50' },
    { name: 'Metallic', price: 'US$ 50' },
    { name: 'Holographic', price: 'US$ 50' },
];

const Step7 = ({ formData, setFormData }) => {
    const initialColors = formData.colors || options.reduce((acc, option) => {
        acc[option.name] = { selected: option.name === "Normal", price: option.price };
        return acc;
    }, {});
    
    const [selectedOptions, setSelectedOptions] = useState(initialColors);

    const toggleOption = (name, price) => {
        const updatedOptions = {
            ...selectedOptions,
            [name]: { selected: !selectedOptions[name].selected, price }
        };
        setSelectedOptions(updatedOptions);
        setFormData(prevData => ({
            ...prevData,
            colors: updatedOptions
        }));
    };

    return (
        <>
            <h1 className="step-title">COLORS DETAILS</h1>
            <div className="step7-container">
                {options.map(option => (
                    <div key={option.name} className="color-option">
                        <div className="color-label">{option.name}</div>
                        <button
                            className={`color-toggle ${selectedOptions[option.name].selected ? 'active' : ''}`}
                            onClick={() => toggleOption(option.name, option.price)}
                        >
                            {selectedOptions[option.name].selected ? '✓' : '×'}
                        </button>
                        <div className="color-price">{option.price}</div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Step7;
