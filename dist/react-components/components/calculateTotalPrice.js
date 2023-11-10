"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateTotalPrice = void 0;
var _priceConstants = require("./priceConstants");
var calculateTotalPrice = exports.calculateTotalPrice = function calculateTotalPrice(formData) {
  var total = 0;

  // Price from Step 1 (Bike Size)
  if (formData.bikeSize && _priceConstants.PRICES_BIKE_SIZE[formData.bikeSize]) {
    total += _priceConstants.PRICES_BIKE_SIZE[formData.bikeSize];
  }

  // Price from Step 7 (Colors)
  for (var color in formData.colors) {
    if (formData.colors[color].selected) {
      total += (0, _priceConstants.getPriceByColorAndSize)(color, formData.bikeSize); // no need to call .replace since it's already a number
    }
  }

  // Price from Step 8 (Finishes)
  if (formData.finishes && _priceConstants.PRICES_FINISHES[formData.finishes]) {
    total += _priceConstants.PRICES_FINISHES[formData.finishes];
  }

  // Add logic for other steps...

  return total;
};