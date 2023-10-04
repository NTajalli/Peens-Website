// formValidationHelper.js
export const validateInputs = (questions, formData) => {
    
    let validationErrors = {};
    let allValid = true;
    
    questions.forEach(q => {
        if (!formData[q.id]) {  
            validationErrors[q.id] = `${q.label} is required`;
            allValid = false;
        }
    });
    
    return {
        isValid: allValid, 
        errors: validationErrors
    };
};
