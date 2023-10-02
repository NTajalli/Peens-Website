import React from 'react';
import { validateInputs } from '../formValidationHelper';


const Step4 = ({ formData, setFormData }) => {

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prevData => ({
                    ...prevData,
                    referenceImage: reader.result
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    Step4.questions = [];
    return (
        <div>
            <label>Upload Reference Image:</label>
            <input type="file" onChange={handleImageChange} />
            {formData.referenceImage && <img src={formData.referenceImage} alt="Uploaded Preview" width="100" />}
        </div>
    );
};

export default Step4;
