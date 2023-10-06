"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var QuestionInput = function QuestionInput(_ref) {
  var question = _ref.question,
    onInputChange = _ref.onInputChange,
    initialValue = _ref.initialValue,
    validationState = _ref.validationState;
  var handleChange = function handleChange(e) {
    onInputChange(question.id, e.target.value);
  };
  var commonInputStyle = {
    flex: '1 0 30%',
    padding: '8px',
    fontSize: '16px',
    boxSizing: 'border-box',
    height: '40px',
    width: '70%'
  };
  var textInputStyle = _objectSpread(_objectSpread({}, commonInputStyle), {}, {
    border: validationState[question.id] === false ? '10px solid red' : '1px solid #ccc'
  });
  var selectInputStyle = _objectSpread(_objectSpread({}, commonInputStyle), {}, {
    border: validationState[question.id] === false ? '1px solid red' : '1px solid #ccc'
  });
  if (question.type === 'select' && question.options) {
    var selectValue = question.options.includes(initialValue) ? initialValue : question.options[0];
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "question-input"
    }, /*#__PURE__*/_react["default"].createElement("label", null, question.label), /*#__PURE__*/_react["default"].createElement("select", {
      onChange: handleChange,
      value: selectValue,
      style: selectInputStyle
    }, question.options.map(function (option) {
      return /*#__PURE__*/_react["default"].createElement("option", {
        key: option,
        value: option
      }, option);
    })));
  }
  if (question.type === 'text') {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "question-input"
    }, /*#__PURE__*/_react["default"].createElement("label", null, question.label), /*#__PURE__*/_react["default"].createElement("input", {
      type: "text",
      onChange: handleChange,
      value: initialValue || "",
      style: textInputStyle
    }));
  }

  // Handle any other input types or error cases here if needed

  return null; // If neither select nor text, return null
};
var _default = exports["default"] = QuestionInput;