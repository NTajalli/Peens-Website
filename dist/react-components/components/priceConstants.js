"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PRICES_FINISHES = exports.PRICES_COLORS = exports.PRICES_BIKE_SIZE = void 0;
exports.getPriceByColorAndSize = getPriceByColorAndSize;
var PRICES_BIKE_SIZE = exports.PRICES_BIKE_SIZE = {
  'Pit Bike 50cc': 149.00,
  'Mini Bike 65-85cc': 199.00,
  'Big Bikes 125-400cc': 249.00
};
var PRICES_COLORS = exports.PRICES_COLORS = {
  'Standard': 0,
  'Holographic': 50
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
var PRICES_FINISHES = exports.PRICES_FINISHES = {
  'GLOSSY': 0,
  'MATTE': 0
};