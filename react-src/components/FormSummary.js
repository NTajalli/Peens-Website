import React from 'react';
import './FormSummary.css';

const FormSummary = ({ data }) => {
    return (
        <>
            <h2>Review Your Customizations</h2>
            <div className="form-summary">
                {/* Render the form data as a summary */}
                {Object.entries(data).map(([key, value]) => {
                    // Check if value is an array and contains an object (assuming an array of images)
                    if (Array.isArray(value) && typeof value[0] === 'object') {
                        return (
                            <div key={key}>
                                <strong>{key}:</strong>
                                {value.map((img, index) => (
                                    <span key={index}>
                                        <img src={img.dataURL} alt={`Uploaded file ${index + 1}`} />
                                        {img.name}
                                    </span>
                                ))}
                            </div>
                        );
                    }
                    return (
                        <div key={key}>
                            <strong>{key}:</strong> {value}
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default FormSummary;
