"use strict";

var React = require('react');
var _require = require('react-dom/server'),
  renderToStaticMarkup = _require.renderToStaticMarkup;
var FormSummary = require('./FormSummary');
function generateFormSummaryHTML(data) {
  return renderToStaticMarkup( /*#__PURE__*/React.createElement(FormSummary, {
    data: data
  }));
}
module.exports = generateFormSummaryHTML;