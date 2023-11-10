"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var React = require('react');
var PRICES_BIKE_SIZE = {
  'Pit Bike 50cc': 149.00,
  'Mini Bike 65-85cc': 199.00,
  'Big Bikes 125-400cc': 249.00
};
var PRICES_COLORS = {
  'Standard': 0,
  'Holographic': 50
};
var PRICES_FINISHES = {
  'GLOSSY': 0,
  'MATTE': 0
};
var HOLOGRAPHIC_PRICES = {
  'Pit Bike 50cc': 30,
  'Mini Bike 65-85cc': 45,
  'Big Bikes 125-400cc': 60
};
function getPriceByColorAndSize(color, bikeSize) {
  if (color != 'Holographic') return PRICES_COLORS[color];
  return HOLOGRAPHIC_PRICES[bikeSize];
}
var camelCaseToSpaceSeparated = function camelCaseToSpaceSeparated(text) {
  return text.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
    return str.toUpperCase();
  });
};
var FormSummary = function FormSummary(_ref) {
  var data = _ref.data,
    price = _ref.price;
  var steps = [{
    title: "BIKE SIZE",
    keys: ["bikeSize"]
  }, {
    title: "BIKE DETAILS",
    keys: ["make", "model", "year", "stroke"]
  }, {
    title: "RIDER DETAILS",
    keys: ["riderName", "raceNumber", "raceNumberColor", "backgroundColor", "numberFontSelection"]
  }, {
    title: "UPLOAD IMAGES",
    keys: ["referenceImages", "designDescription"]
  }, {
    title: "UPLOAD LOGO",
    keys: ["logo", "logos"]
  }, {
    title: "AFTER MARKET PARTS",
    keys: ["afterMarketPlastics"]
  }, {
    title: "COLOR DETAILS",
    keys: ["colors"]
  }, {
    title: "FINISHES",
    keys: ["finishes"]
  }, {
    title: "CUSTOMER INFORMATION",
    keys: ["name", "email", "address", "city", "state", "country"]
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "form-summary"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "step-title"
  }, "Review Your Customizations"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Description"), /*#__PURE__*/React.createElement("th", null, "Information"), /*#__PURE__*/React.createElement("th", null, "Price"))), /*#__PURE__*/React.createElement("tbody", null, steps.map(function (step) {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: step.title
    }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      colSpan: "3",
      className: "step-divider"
    }, step.title)), step.keys.map(function (key) {
      var value = data[key];
      var price = "";
      if (key === 'bikeSize') {
        price = "$" + PRICES_BIKE_SIZE[value] || "";
      } else if (key === 'finishes') {
        price = "$" + PRICES_FINISHES[value] || "";
      }
      var formattedKey = camelCaseToSpaceSeparated(key);
      if (typeof value === 'string' || typeof value === 'number') {
        return /*#__PURE__*/React.createElement("tr", {
          key: key
        }, /*#__PURE__*/React.createElement("td", null, formattedKey), /*#__PURE__*/React.createElement("td", null, value), /*#__PURE__*/React.createElement("td", null, price));
      } else if (key === 'colors') {
        return /*#__PURE__*/React.createElement("tr", {
          key: key
        }, /*#__PURE__*/React.createElement("td", null, formattedKey), /*#__PURE__*/React.createElement("td", null, Object.entries(value).map(function (_ref2, index) {
          var _ref3 = _slicedToArray(_ref2, 2),
            colorKey = _ref3[0],
            colorValue = _ref3[1];
          return colorValue.selected ? /*#__PURE__*/React.createElement("div", {
            key: index,
            className: "dashed-list"
          }, camelCaseToSpaceSeparated(colorKey)) : null;
        })), /*#__PURE__*/React.createElement("td", null, Object.entries(value).map(function (_ref4, index) {
          var _ref5 = _slicedToArray(_ref4, 2),
            colorKey = _ref5[0],
            colorValue = _ref5[1];
          return colorValue.selected ? /*#__PURE__*/React.createElement("div", {
            key: index,
            className: "dashed-list"
          }, "$", getPriceByColorAndSize(colorKey, data.bikeSize)) : null;
        })));
      } else if (Array.isArray(value)) {
        return /*#__PURE__*/React.createElement("tr", {
          key: key
        }, /*#__PURE__*/React.createElement("td", null, formattedKey), /*#__PURE__*/React.createElement("td", null, value.map(function (img, index) {
          return /*#__PURE__*/React.createElement("div", {
            key: index,
            className: "dashed-list"
          }, img.name);
        })), /*#__PURE__*/React.createElement("td", null));
      } else if (!value) {
        return /*#__PURE__*/React.createElement("tr", {
          key: key
        }, /*#__PURE__*/React.createElement("td", null, "ERROR"), /*#__PURE__*/React.createElement("td", null, "ERROR"), /*#__PURE__*/React.createElement("td", null));
      } else if (value.dataURL) {
        return /*#__PURE__*/React.createElement("tr", {
          key: key
        }, /*#__PURE__*/React.createElement("td", null, formattedKey), /*#__PURE__*/React.createElement("td", null, value.name), /*#__PURE__*/React.createElement("td", null));
      }
      return null;
    }));
  }), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: "3",
    className: "step-divider"
  }, "Shipping")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, "Shipping Cost"), /*#__PURE__*/React.createElement("td", null), /*#__PURE__*/React.createElement("td", null, "$", price >= 100 ? 0 : 20)), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Estimated Total Price"), /*#__PURE__*/React.createElement("th", null), /*#__PURE__*/React.createElement("th", null, "$", price >= 100 ? price : price + 20)))));
};
module.exports = FormSummary;