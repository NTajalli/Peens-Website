export const validateInputs = (questions, formData) => {
    let validationErrors = {};
    let allValid = true;
    

    questions.forEach(q => {
        if (q.type === 'select' && (formData[q.id] === 'SELECT ONE' || !formData[q.id])) {
            validationErrors[q.id] = `Please select an option for ${q.label}`;
            allValid = false;
        } else if (q.type === 'singleImage' && (!formData[q.id] || !formData[q.id].dataURL)) {
            validationErrors[q.id] = `${q.label} is required`;
            allValid = false;
        } else if (q.type === 'image' && (!formData[q.id] || formData[q.id].length === 0)) {
            validationErrors[q.id] = `${q.label} are required`;
            allValid = false;
        } else if (!formData[q.id]) {  
            validationErrors[q.id] = `${q.label} is required`;
            allValid = false;
        }
    });

    // Additional case to handle validation for Step7
    if (formData.colors && !formData.colors.Normal.selected) {
        validationErrors.colors = `Normal color option must be selected.`;
        allValid = false;
    }

    return {
        isValid: allValid, 
        errors: validationErrors
    };
};
