import React, { useState, useEffect } from 'react';
import './Step7.css';
import { PRICES_COLORS } from '../priceConstants'; // import the color prices
import { calculateTotalPrice } from '../calculateTotalPrice'; // import the common calculateTotalPrice function

const Step7 = ({ formData, setFormData, price, setPrice }) => {
    const options = Object.entries(PRICES_COLORS).map(([name, price]) => ({ name, price }));
    Step7.questions = [];
    const initialColors = formData.colors || options.reduce((acc, option) => {
        acc[option.name] = { selected: option.name === "Normal", price: option.price };
        return acc;
    }, {});
    
    const [selectedOptions, setSelectedOptions] = useState(initialColors);

    useEffect(() => {
        setPrice(calculateTotalPrice({ ...formData, colors: selectedOptions })); 
    }, [selectedOptions]);

    const toggleOption = (name, optionPrice) => {
        const updatedOptions = {
            ...selectedOptions,
            [name]: { selected: !selectedOptions[name].selected, price: optionPrice }
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
                        <div className="color-price">US$ {option.price}</div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Step7;
