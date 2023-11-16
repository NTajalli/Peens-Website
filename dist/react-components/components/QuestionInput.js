"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validationRules = exports.validateField = exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// You can add more validation functions here as needed
var validationRules = exports.validationRules = {
  email: {
    validate: function validate(value) {
      return /\S+@\S+\.\S+/.test(value);
    },
    message: 'Invalid email address'
  },
  year: {
    validate: function validate(value) {
      var currentYear = new Date().getFullYear();
      return !isNaN(value) && value > 1900 && value <= currentYear + 1;
    },
    message: 'Invalid year'
  },
  raceNumber: {
    validate: function validate(value) {
      return /^\d+$/.test(value);
    },
    message: 'Race number must be numeric'
  },
  name: {
    validate: function validate(value) {
      return /^[a-zA-Z ]{2,100}$/.test(value);
    },
    message: 'Name should only contain letters and spaces, and be 2-100 characters long.'
  },
  address: {
    validate: function validate(value) {
      return /^[a-zA-Z0-9\s,'-]{3,100}$/.test(value);
    },
    message: 'Address should be 3-100 characters long.'
  },
  city: {
    validate: function validate(value) {
      return /^[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']{2,50}$/.test(value);
    },
    message: 'City should only contain letters and be 2-50 characters long.'
  },
  state: {
    validate: function validate(value) {
      return /^[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']{2,50}$/.test(value);
    },
    message: 'State should only contain letters and be 2-50 characters long.'
  },
  country: {
    validate: function validate(value) {
      return /^[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']{2,56}$/.test(value);
    },
    message: 'Country should only contain letters and be 2-56 characters long.'
  },
  zipCode: {
    validate: function validate(value) {
      return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(value);
    },
    message: 'Invalid zip code'
  },
  phoneNumber: {
    validate: function validate(value) {
      return value === '' || /^\+?[0-9]{1,3}[ -]?[0-9]{6,14}$/.test(value);
    },
    message: 'Invalid Phone Number'
  }
  // Add more validation rules here with custom messages as needed
};

var validateField = exports.validateField = function validateField(id, value) {
  if (validationRules[id]) {
    return {
      isValid: validationRules[id].validate(value),
      message: validationRules[id].message
    };
  }
  return {
    isValid: true,
    message: ''
  };
};
var QuestionInput = function QuestionInput(_ref) {
  var question = _ref.question,
    onInputChange = _ref.onInputChange,
    initialValue = _ref.initialValue,
    validationState = _ref.validationState,
    setValidationState = _ref.setValidationState;
  var handleChange = function handleChange(e) {
    var value = e.target.value;
    var isValid = true;

    // Perform validation if a rule exists for this question id
    if (validationRules[question.id]) {
      isValid = validationRules[question.id].validate(value);
      setValidationState(_objectSpread(_objectSpread({}, validationState), {}, _defineProperty({}, question.id, isValid)));
    }
    onInputChange(question.id, value);
  };
  var commonInputStyle = {
    flex: '1 0 30%',
    padding: '8px',
    fontSize: '16px',
    boxSizing: 'border-box',
    height: '40px',
    width: '70%'
  };
  var inputStyle = _objectSpread(_objectSpread({}, commonInputStyle), {}, {
    border: validationState[question.id] === false ? '4px solid red' : '1px solid #ccc'
  });
  var errorMessageStyle = {
    color: 'red',
    marginTop: '5px'
  };

  // Generate the input field based on the type
  var renderInputField = function renderInputField() {
    if (question.type === 'select' && question.options) {
      var selectValue = question.options.includes(initialValue) ? initialValue : question.options[0];
      return /*#__PURE__*/_react["default"].createElement("select", {
        onChange: handleChange,
        value: selectValue,
        style: inputStyle
      }, question.options.map(function (option) {
        return /*#__PURE__*/_react["default"].createElement("option", {
          key: option,
          value: option
        }, option);
      }));
    } else if (question.type === 'text') {
      return /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        onChange: handleChange,
        value: initialValue || "",
        style: inputStyle
      });
    } else if (question.type === 'tel') {
      return /*#__PURE__*/_react["default"].createElement("input", {
        type: "tel",
        onChange: handleChange,
        value: initialValue || "",
        placeholder: "XXX-XXX-XXXX" // Example format with 'X's
        ,
        style: inputStyle
      });
    }

    // You can add more input types here if needed

    return null; // If the input type is not handled, return null
  };

  // Show error message if validation failed
  var renderErrorMessage = function renderErrorMessage() {
    if (validationState[question.id] === false) {
      var errorMessage = validationRules[question.id] ? validationRules[question.id].message : 'Invalid input';
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: errorMessageStyle
      }, errorMessage);
    }
    return null;
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "question-input"
  }, /*#__PURE__*/_react["default"].createElement("label", null, question.label), renderInputField(), renderErrorMessage());
};
var _default = exports["default"] = QuestionInput;