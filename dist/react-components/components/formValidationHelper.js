"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateInputs = void 0;
var _QuestionInput = require("./QuestionInput");
var validateInputs = exports.validateInputs = function validateInputs(questions, formData) {
  var validationErrors = {};
  var allValid = true;
  questions.forEach(function (q) {
    var value = formData[q.id];
    var rule = _QuestionInput.validationRules[q.id];
    if (q.type === 'select' && (value === 'SELECT ONE' || !value)) {
      validationErrors[q.id] = "Please select an option for ".concat(q.label);
      allValid = false;
    } else if (q.type === 'singleImage' && (!value || !value.dataURL)) {
      validationErrors[q.id] = "".concat(q.label, " is required");
      allValid = false;
    } else if (q.type === 'image' && (!value || value.length === 0)) {
      validationErrors[q.id] = "".concat(q.label, " is required");
      allValid = false;
    } else if (rule && !rule.validate(value)) {
      validationErrors[q.id] = rule.message;
      allValid = false;
    } else if (!value) {
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