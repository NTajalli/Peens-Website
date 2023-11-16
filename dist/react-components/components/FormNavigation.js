"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var FormNavigation = function FormNavigation(_ref) {
  var onNext = _ref.onNext,
    onPrev = _ref.onPrev,
    onSubmit = _ref.onSubmit,
    currentStep = _ref.currentStep,
    totalSteps = _ref.totalSteps,
    stepValidations = _ref.stepValidations,
    isNavigating = _ref.isNavigating;
  var isFormValid = stepValidations[currentStep];
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-navigation"
  }, currentStep > 0 && /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      backgroundColor: '#2800ab',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer'
    },
    onClick: onPrev,
    disabled: isNavigating
  }, "Previous Step"), currentStep === totalSteps ? /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      backgroundColor: isFormValid ? 'red' : 'gray',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '5px'
    },
    onClick: onSubmit,
    disabled: !isFormValid || isNavigating
  }, "Submit") : /*#__PURE__*/_react["default"].createElement("button", {
    style: {
      backgroundColor: isFormValid ? 'red' : 'gray',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      cursor: 'pointer',
      borderRadius: '5px'
    },
    onClick: onNext,
    disabled: !isFormValid || isNavigating
  }, "Next Step"));
};
var _default = exports["default"] = FormNavigation;