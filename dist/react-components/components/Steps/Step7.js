"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./Step7.css");
var _priceConstants = require("../priceConstants");
var _calculateTotalPrice = require("../calculateTotalPrice");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Step7 = function Step7(_ref) {
  var formData = _ref.formData,
    setFormData = _ref.setFormData,
    price = _ref.price,
    setPrice = _ref.setPrice;
  // Convert color names and prices into an array of options
  var options = Object.entries(_priceConstants.PRICES_COLORS).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 1),
      name = _ref3[0];
    return {
      name: name,
      price: (0, _priceConstants.getPriceByColorAndSize)(name, formData.bikeSize)
    };
  });

  // Function to initialize color selection
  var initializeColors = function initializeColors() {
    return options.reduce(function (acc, option) {
      acc[option.name] = {
        selected: option.name === "Standard",
        price: option.price
      };
      return acc;
    }, {});
  };

  // State to keep track of selected options
  var _useState = (0, _react.useState)(initializeColors),
    _useState2 = _slicedToArray(_useState, 2),
    selectedOptions = _useState2[0],
    setSelectedOptions = _useState2[1];

  // Effect to update formData when component mounts
  (0, _react.useEffect)(function () {
    // Only set formData if colors is not already set
    if (!formData.colors) {
      setFormData(function (prevData) {
        return _objectSpread(_objectSpread({}, prevData), {}, {
          colors: initializeColors()
        });
      });
    }
  }, []); // Empty dependency array ensures this effect runs once on mount

  (0, _react.useEffect)(function () {
    // Update the price whenever selected options change
    setPrice((0, _calculateTotalPrice.calculateTotalPrice)(_objectSpread(_objectSpread({}, formData), {}, {
      colors: selectedOptions
    })));
  }, [selectedOptions, formData, setPrice]);
  var toggleOption = function toggleOption(name) {
    // Determine price based on color and bike size
    var optionPrice = (0, _priceConstants.getPriceByColorAndSize)(name, formData.bikeSize);

    // Update selected options state
    var updatedOptions = _objectSpread(_objectSpread({}, selectedOptions), {}, _defineProperty({}, name, {
      selected: !selectedOptions[name].selected,
      price: optionPrice
    }));

    // Update local state and formData with new selections
    setSelectedOptions(updatedOptions);
    setFormData(function (prevData) {
      return _objectSpread(_objectSpread({}, prevData), {}, {
        colors: updatedOptions
      });
    });
  };
  Step7.questions = [];
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "step-title"
  }, "COLORS DETAILS"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "step7-container"
  }, options.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: option.name,
      className: "color-option"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "color-label"
    }, option.name), /*#__PURE__*/_react["default"].createElement("button", {
      className: "color-toggle ".concat(selectedOptions[option.name].selected ? 'active' : ''),
      onClick: function onClick() {
        return toggleOption(option.name);
      }
    }, selectedOptions[option.name].selected ? '✓' : '×'), /*#__PURE__*/_react["default"].createElement("div", {
      className: "color-price"
    }, "$", selectedOptions[option.name].price.toFixed(2), " ", option.name != 'Standard' ? " for ".concat(formData.bikeSize) : ''));
  })));
};
var _default = exports["default"] = Step7;