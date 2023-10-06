const React = require('react');


const camelCaseToSpaceSeparated = (text) => {
    return text.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
};

const FormSummary = ({ data }) => {
    const steps = [
        {
            title: "BIKE SIZE",
            keys: ["bikeSize"]
        },
        {
            title: "BIKE DETAILS",
            keys: ["make", "model", "year", "stroke"]
        },
        {
            title: "RIDER DETAILS",
            keys: ["riderName", "raceNumber", "raceNumberColor", "backgroundColor", "numberFontSelection"]
        },
        {
            title: "UPLOAD IMAGES",
            keys: ["referenceImages", "designDescription"]
        },
        {
            title: "UPLOAD LOGO",
            keys: ["logo", "logos"]
        },
        {
            title: "AFTER MARKET PARTS",
            keys: ["afterMarketPlastics"]
        },
        {
            title: "COLOR DETAILS",
            keys: ["colors"]
        },
        {
            title: "FINISHES",
            keys: ["finishes"]
        },
        {
            title: "CUSTOMER INFORMATION",
            keys: ["name", "email", "address", "city", "state", "country"]
        }
        // Add other steps and their keys here...
    ];

    return (
        <div className="form-summary">
            <h1 className='step-title'>Review Your Customizations</h1>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Information</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {steps.map(step => (
                        <>
                            <tr key={step.title + "-divider"}>
                                <td colSpan="3" className="step-divider">{step.title}</td>
                            </tr>
                            {step.keys.map(key => {
                                const value = data[key];
                                const formattedKey = camelCaseToSpaceSeparated(key);
                                if (typeof value === 'string' || typeof value === 'number') {
                                    return (
                                        <tr key={key}>
                                            <td>{formattedKey}</td>
                                            <td>{value}</td>
                                            <td></td>
                                        </tr>
                                    );
                                } else if (key === 'colors') {
                                    return (
                                        <tr key={key}>
                                            <td>{formattedKey}</td>
                                            <td>
                                                {Object.entries(value).map(([colorKey, colorValue], index) =>
                                                    colorValue.selected ? <div key={index} className="dashed-list">{camelCaseToSpaceSeparated(colorKey)}</div> : null
                                                )}
                                            </td>
                                            <td>
                                                {Object.entries(value).map(([colorKey, colorValue], index) =>
                                                    colorValue.selected ? <div key={index} className="dashed-list">{colorValue.price}</div> : null
                                                )}
                                            </td>
                                        </tr>
                                    );
                                } else if (Array.isArray(value)) {
                                    return (
                                        <tr key={key}>
                                            <td>{formattedKey}</td>
                                            <td>
                                                {value.map((img, index) => <div key={index} className="dashed-list">{img.name}</div>)}
                                            </td>
                                            <td></td>
                                        </tr>
                                    );
                                } else if (!value) {
                                    <tr key={key}>
                                            <td>{ERROR}</td>
                                            <td>{ERROR}</td>
                                            <td></td>
                                        </tr>
                                } else if (value.dataURL) {
                                    return (
                                        <tr key={key}>
                                            <td>{formattedKey}</td>
                                            <td>{value.name}</td>
                                            <td></td>
                                        </tr>
                                    );
                                }
                            })}
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

module.exports = FormSummary;
