"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateInputs = void 0;
var validateInputs = exports.validateInputs = function validateInputs(questions, formData) {
  var validationErrors = {};
  var allValid = true;
  questions.forEach(function (q) {
    if (q.type === 'select' && (formData[q.id] === 'SELECT ONE' || !formData[q.id])) {
      validationErrors[q.id] = "Please select an option for ".concat(q.label);
      allValid = false;
    } else if (q.type === 'singleImage' && (!formData[q.id] || !formData[q.id].dataURL)) {
      validationErrors[q.id] = "".concat(q.label, " is required");
      allValid = false;
    } else if (q.type === 'image' && (!formData[q.id] || formData[q.id].length === 0)) {
      validationErrors[q.id] = "".concat(q.label, " are required");
      allValid = false;
    } else if (!formData[q.id]) {
      validationErrors[q.id] = "".concat(q.label, " is required");
      allValid = false;
    }
  });

  // Additional case to handle validation for Step7
  if (formData.colors && !formData.colors.Standard.selected) {
    validationErrors.colors = "Standard color option must be selected.";
    allValid = false;
  }
  return {
    isValid: allValid,
    errors: validationErrors
  };
};