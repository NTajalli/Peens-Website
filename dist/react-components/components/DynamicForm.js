"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _Step = _interopRequireDefault(require("./Steps/Step1"));
var _Step2 = _interopRequireDefault(require("./Steps/Step2"));
var _Step3 = _interopRequireDefault(require("./Steps/Step3"));
var _Step4 = _interopRequireDefault(require("./Steps/Step4"));
var _Step5 = _interopRequireDefault(require("./Steps/Step5"));
var _Step6 = _interopRequireDefault(require("./Steps/Step6"));
var _Step7 = _interopRequireDefault(require("./Steps/Step7"));
var _Step8 = _interopRequireDefault(require("./Steps/Step8"));
var _Step9 = _interopRequireDefault(require("./Steps/Step9"));
var _FormNavigation = _interopRequireDefault(require("./FormNavigation"));
var _reactTransitionGroup = require("react-transition-group");
require("./fadeTransition.css");
var _formValidationHelper = require("./formValidationHelper");
require("./spinner.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var FormSummary = require('./FormSummary');
var DynamicForm = function DynamicForm() {
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    step = _useState2[0],
    setStep = _useState2[1];
  var _useState3 = (0, _react.useState)({}),
    _useState4 = _slicedToArray(_useState3, 2),
    formData = _useState4[0],
    setFormData = _useState4[1];
  var _useState5 = (0, _react.useState)({}),
    _useState6 = _slicedToArray(_useState5, 2),
    validationState = _useState6[0],
    setValidationState = _useState6[1];
  var _useState7 = (0, _react.useState)([false, false, false, false]),
    _useState8 = _slicedToArray(_useState7, 2),
    stepValidations = _useState8[0],
    setStepValidations = _useState8[1];
  var _useState9 = (0, _react.useState)(0),
    _useState10 = _slicedToArray(_useState9, 2),
    price = _useState10[0],
    setPrice = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    loading = _useState12[0],
    setLoading = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    submitSuccess = _useState14[0],
    setSubmitSuccess = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isNavigating = _useState16[0],
    setIsNavigating = _useState16[1];
  var onSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var dataToSend, response;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setLoading(true);
            _context.prev = 1;
            dataToSend = _objectSpread(_objectSpread({}, formData), {}, {
              price: price
            });
            _context.next = 5;
            return fetch('/send-email', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(dataToSend)
            });
          case 5:
            response = _context.sent;
            if (response.status === 200) {
              setSubmitSuccess(true);
            } else {
              alert('Failed to submit the form. Please try again.');
            }
            _context.next = 13;
            break;
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            console.error('Error submitting form:', _context.t0);
            alert('An error occurred while submitting the form. Please try again.');
          case 13:
            _context.prev = 13;
            setLoading(false);
            return _context.finish(13);
          case 16:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 9, 13, 16]]);
    }));
    return function onSubmit() {
      return _ref.apply(this, arguments);
    };
  }();
  var getCurrentStepQuestions = function getCurrentStepQuestions(stepOverride) {
    var actualStep = stepOverride !== undefined ? stepOverride : step;
    switch (actualStep) {
      case 0:
        return _Step["default"].questions;
      case 1:
        return _Step2["default"].questions;
      case 2:
        return _Step3["default"].questions;
      case 3:
        return _Step4["default"].questions;
      case 4:
        return _Step5["default"].questions;
      case 5:
        return _Step6["default"].questions;
      case 6:
        return _Step7["default"].questions;
      case 7:
        return _Step8["default"].questions;
      case 8:
        return _Step9["default"].questions;
      default:
        return [];
    }
  };
  (0, _react.useEffect)(function () {
    var currentQuestions = getCurrentStepQuestions();
    var validationResults = (0, _formValidationHelper.validateInputs)(currentQuestions, formData);

    // Update validationState with the current errors.
    setValidationState(validationResults.errors);

    // Update stepValidations array with the current step validation result.
    var updatedStepValidations = _toConsumableArray(stepValidations);
    updatedStepValidations[step] = validationResults.isValid;
    setStepValidations(updatedStepValidations);
  }, [step, formData]);
  var handleNext = function handleNext() {
    if (isNavigating) return; // Prevent double clicks
    setIsNavigating(true);
    var currentQuestions = getCurrentStepQuestions();
    var validationResults = (0, _formValidationHelper.validateInputs)(currentQuestions, formData);
    setValidationState(validationResults.errors);
    if (!validationResults.isValid) return;
    fetch('/save-form-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then(function () {
      return setStep(function (prevStep) {
        return prevStep + 1;
      });
    })["catch"](function (error) {
      return console.error('Error saving form data:', error);
    })["finally"](function () {
      return setIsNavigating(false);
    });
  };
  var handlePrev = function handlePrev() {
    if (isNavigating) return; // Prevent double clicks
    setIsNavigating(true);
    fetch('/save-form-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then(function () {
      return setStep(function (prevStep) {
        return prevStep - 1;
      });
    })["catch"](function (error) {
      return console.error('Error saving form data:', error);
    })["finally"](function () {
      return setIsNavigating(false);
    });
  };
  var renderStep = function renderStep() {
    switch (step) {
      case 0:
        return /*#__PURE__*/_react["default"].createElement(_Step["default"], {
          formData: formData,
          setFormData: setFormData,
          validationState: validationState,
          setValidationState: setValidationState,
          price: price,
          setPrice: setPrice
        });
      case 1:
        return /*#__PURE__*/_react["default"].createElement(_Step2["default"], {
          formData: formData,
          setFormData: setFormData,
          validationState: validationState,
          setValidationState: setValidationState,
          price: price,
          setPrice: setPrice
        });
      case 2:
        return /*#__PURE__*/_react["default"].createElement(_Step3["default"], {
          formData: formData,
          setFormData: setFormData,
          validationState: validationState,
          setValidationState: setValidationState,
          price: price,
          setPrice: setPrice
        });
      case 3:
        return /*#__PURE__*/_react["default"].createElement(_Step4["default"], {
          formData: formData,
          setFormData: setFormData,
          validationState: validationState,
          setValidationState: setValidationState,
          price: price,
          setPrice: setPrice
        });
      case 4:
        return /*#__PURE__*/_react["default"].createElement(_Step5["default"], {
          formData: formData,
          setFormData: setFormData,
          validationState: validationState,
          setValidationState: setValidationState,
          price: price,
          setPrice: setPrice
        });
      case 5:
        return /*#__PURE__*/_react["default"].createElement(_Step6["default"], {
          formData: formData,
          setFormData: setFormData,
          validationState: validationState,
          setValidationState: setValidationState,
          price: price,
          setPrice: setPrice
        });
      case 6:
        return /*#__PURE__*/_react["default"].createElement(_Step7["default"], {
          formData: formData,
          setFormData: setFormData,
          validationState: validationState,
          setValidationState: setValidationState,
          price: price,
          setPrice: setPrice
        });
      case 7:
        return /*#__PURE__*/_react["default"].createElement(_Step8["default"], {
          formData: formData,
          setFormData: setFormData,
          validationState: validationState,
          setValidationState: setValidationState,
          price: price,
          setPrice: setPrice
        });
      case 8:
        return /*#__PURE__*/_react["default"].createElement(_Step9["default"], {
          formData: formData,
          setFormData: setFormData,
          validationState: validationState,
          setValidationState: setValidationState,
          price: price,
          setPrice: setPrice
        });
      default:
        return /*#__PURE__*/_react["default"].createElement(FormSummary, {
          data: formData,
          price: price
        });
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dynamic-form"
  }, submitSuccess ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "success-page"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "details-container"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "success-message"
  }, "We Have Received Your Details!"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "success-description"
  }, "Thank you for your submission. Our team will review it and get back to you soon!"), /*#__PURE__*/_react["default"].createElement("a", {
    href: "/",
    className: "go-home-link"
  }, "Go Back to Home")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "image-container"
  })) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, loading && /*#__PURE__*/_react["default"].createElement("div", {
    className: "spinner"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    id: "price-display"
  }, "Current Estimated Price: $", price), /*#__PURE__*/_react["default"].createElement(_reactTransitionGroup.CSSTransition, {
    "in": true,
    appear: true,
    timeout: 1500,
    classNames: "fade",
    key: step,
    unmountOnExit: true
  }, function (state) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "step-wrapper"
    }, renderStep());
  }), /*#__PURE__*/_react["default"].createElement(_FormNavigation["default"], {
    onNext: handleNext,
    onPrev: handlePrev,
    onSubmit: onSubmit,
    currentStep: step,
    totalSteps: 9,
    stepValidations: stepValidations,
    isNavigating: isNavigating
  })));
};
var _default = exports["default"] = DynamicForm;