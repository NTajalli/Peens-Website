import React from 'react';

const FormSummary = ({ data }) => {
    return (
        <div className="form-summary">
            {/* Render the form data as a summary */}
            {Object.entries(data).map(([key, value]) => (
                <div key={key}>
                    <strong>{key}:</strong> {value}
                </div>
            ))}
        </div>
    );
};

export default FormSummary;
