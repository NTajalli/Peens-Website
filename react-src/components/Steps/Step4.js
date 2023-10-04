import React, { useState, useRef } from 'react';
import './Step4.css';

const MAX_IMAGES = 5;
const MAX_SIZE_MB = 5;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

const Step4 = ({ formData, setFormData }) => {
    const [uploadingFiles, setUploadingFiles] = useState(formData.referenceFiles || []);
    const fileInputRef = useRef();
    Step4.questions = [];
    formData = {
        ...formData,
        referenceImages: formData.referenceImages || []
    };
    

    const handleImageChange = async (event) => {
        const files = Array.from(event.target.files);
        let totalSize = files.reduce((acc, file) => acc + file.size, 0);

        if (totalSize > MAX_SIZE_BYTES) {
            alert(`Total size of all files should not exceed ${MAX_SIZE_MB} MB.`);
            return;
        }

        if (files.length + formData.referenceImages.length > MAX_IMAGES) {
            alert(`You can upload a maximum of ${MAX_IMAGES} images.`);
            return;
        }

        const newUploadingFiles = files.map(file => ({
            name: file.name,
            status: 'uploading',
            progress: 0,
            dataURL: ''
        }));

        setUploadingFiles([...newUploadingFiles]);


        for (let file of files) {
            const dataURL = await readFileWithProgress(file, progress => {
                const updatedFiles = [...newUploadingFiles];
                const index = updatedFiles.findIndex(f => f.name === file.name);
                updatedFiles[index].progress = progress;
                setUploadingFiles([...newUploadingFiles]);
            });

            const index = newUploadingFiles.findIndex(f => f.name === file.name);
            newUploadingFiles[index].dataURL = dataURL;
            newUploadingFiles[index].status = 'done';
            setUploadingFiles([...newUploadingFiles]);
            setFormData(prevData => {
            const newFormData = { ...prevData, referenceFiles: newUploadingFiles };
            return newFormData;
}           );

        }
    };

    const readFileWithProgress = (file, progressCallback) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onprogress = event => {
                if (event.lengthComputable) {
                    const progress = Math.round((event.loaded / event.total) * 100);
                    progressCallback(progress);
                }
            };

            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    };

    const deleteFile = (index, fromFormData = false) => {
        if (fromFormData) {
            const newFiles = [...formData.referenceImages];
            newFiles.splice(index, 1);
            setFormData(prevData => ({ ...prevData, referenceImages: newFiles }));
        } else {
            const newFiles = [...uploadingFiles];
            newFiles.splice(index, 1);
            setUploadingFiles(newFiles);
        }
    };

    return (
        <div className="step4-container">
            <label className="step4-label">Upload Reference Images (up to {MAX_IMAGES} images, {MAX_SIZE_MB} MB max):</label>
            
            <button className="step4-upload-btn" type="button" onClick={() => fileInputRef.current.click()}>
                Choose Images
            </button>
            <input
                type="file"
                style={{ display: 'none' }}
                ref={fileInputRef}
                multiple
                onChange={handleImageChange}
            />
            <ul className="step4-file-list">
                {formData.referenceImages.map((file, index) => (
                    <li key={index} className="step4-file-item">
                        {file.name}
                        <button className="step4-file-delete" onClick={() => deleteFile(index, true)}>X</button>
                    </li>
                ))}
                {uploadingFiles.map((file, index) => (
                    <li key={index + formData.referenceImages.length} className="step4-file-item">
                        {file.name} 
                        {file.status === 'uploading' && <span> Uploading... {file.progress}%</span>}
                        {file.status === 'done' && <button  onClick={() => deleteFile(index)}>X</button>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Step4;
