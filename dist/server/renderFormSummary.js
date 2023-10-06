"use strict";

var React = require('react');
var ReactDOMServer = require('react-dom/server');
var FormSummary = require('../react-components/components/FormSummary');
function renderFormSummary(data) {
  var componentContent = ReactDOMServer.renderToStaticMarkup(React.createElement(FormSummary, {
    data: data
  }));
  return "\n        <!DOCTYPE html>\n        <html lang=\"en\">\n            <head>\n                <meta charset=\"UTF-8\">\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n                <title>Form Summary</title>\n                <link rel=\"stylesheet\" href=\"../formStyles.css\">\n            </head>\n            <body>\n                ".concat(componentContent, "\n            </body>\n        </html>\n    ");
}
module.exports = renderFormSummary;