const React = require('react');
const ReactDOMServer = require('react-dom/server');
const FormSummary = require('../react-components/components/FormSummary');

function renderFormSummary(data, price) {
    const componentContent = ReactDOMServer.renderToStaticMarkup(React.createElement(FormSummary, { data, price }));
    
    // Embed S3 URLs into a hidden div
    const s3UrlsDiv = data.referenceImages.map(file => `<div class="s3-url" data-type="referenceImage">${file.s3Url}</div>`)
    .concat(`<div class="s3-url" data-type="logo">${data.logo.s3Url}</div>`)
    .join('');

    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Form Summary</title>
                <link rel="stylesheet" href="../formStyles.css">
                <!-- Include JSZip library -->
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.5.0/jszip.min.js"></script>
            </head>
            <body>
                ${componentContent}
                
                <!-- Hidden div to store S3 URLs -->
                <div style="display:none;" id="s3Urls">${s3UrlsDiv}</div>

                <!-- Download Button -->
                <button id="downloadButton">Download All Files</button>

                <script>
                document.getElementById('downloadButton').addEventListener('click', async function() {
                    const urls = Array.from(document.querySelectorAll('.s3-url')).map(div => ({
                        url: div.textContent,
                        type: div.getAttribute('data-type')
                    }));
                    console.log(urls);
                
                    // Create a new JSZip instance
                    const zip = new JSZip();
                
                    // Fetch each file and add to zip
                    for (let { url, type } of urls) {
                        try {
                            const response = await fetch(url);
                            const blob = await response.blob();
                
                            // Determine directory based on type
                            let directory = "";
                            if (type === 'referenceImage') {
                                directory = "referenceImages/";
                            } else if (type === 'logo') {
                                directory = "logos/";
                            }
                
                            zip.file(directory + url.split('/').pop(), blob);
                        } catch (error) {
                            console.error(\`Error fetching \${url}:\`, error);
                        }
                    }
                
                    // Generate zip and trigger download
                    try {
                        const content = await zip.generateAsync({ type: "blob" });
                        const url = window.URL.createObjectURL(content);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = 'files.zip';
                        document.body.appendChild(a);
                        a.click();
                        a.remove();
                    } catch (error) {
                        console.error("Error generating zip:", error);
                    }
                });
                </script>
            </body>
        </html>
    `;
}

module.exports = renderFormSummary;
