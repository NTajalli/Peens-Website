const React = require('react');
const ReactDOMServer = require('react-dom/server');
const FormSummary = require('../react-components/components/FormSummary');

function renderFormSummary(data) {
    const componentContent = ReactDOMServer.renderToStaticMarkup(React.createElement(FormSummary, { data }));
    
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Form Summary</title>
                <link rel="stylesheet" href="../formStyles.css">
            </head>
            <body>
                ${componentContent}
            </body>
        </html>
    `;
}

module.exports = renderFormSummary;
