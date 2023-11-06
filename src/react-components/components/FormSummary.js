const React = require('react')

const PRICES_BIKE_SIZE = {
    'Pit Bike 50cc': 189.99,
    'Mini Bike 65-85cc': 219.99,
    'Big Bikes 125-400cc': 249.99
};

const PRICES_COLORS = {
     'Normal': 0,
     'Holographic': 50,
} ;

const PRICES_FINISHES = {
    'GLOSSY': 0,
    'MATTE': 0,
};


const camelCaseToSpaceSeparated = (text) => {
    return text.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
};

const FormSummary = ({ data, price}) => {
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
                        <React.Fragment key={step.title}>
                            <tr>
                                <td colSpan="3" className="step-divider">{step.title}</td>
                            </tr>
                            {step.keys.map(key => {
                                const value = data[key];
                                let price = "";

                                if (key === 'bikeSize') {
                                    price = "$" + PRICES_BIKE_SIZE[value] || "";
                                } else if (key === 'finishes') {
                                    price = "$" + PRICES_FINISHES[value] || "";
                                }

                                const formattedKey = camelCaseToSpaceSeparated(key);
                                if (typeof value === 'string' || typeof value === 'number') {
                                    return (
                                        <tr key={key}>
                                            <td>{formattedKey}</td>
                                            <td>{value}</td>
                                            <td>{price}</td>
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
                                                    colorValue.selected ? <div key={index} className="dashed-list">${PRICES_COLORS[colorKey]}</div> : null
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
                                            <td>

                                            </td>
                                        </tr>
                                    );
                                } else if (!value) {
                                    return (
                                        <tr key={key}>
                                            <td>{"ERROR"}</td>
                                            <td>{"ERROR"}</td>
                                            <td></td>
                                        </tr>
                                    );
                                } else if (value.dataURL) {
                                    return (
                                        <tr key={key}>
                                            <td>{formattedKey}</td>
                                            <td>{value.name}</td>
                                            <td></td>
                                        </tr>
                                    );
                                }
                                return null; 
                            })}
                        </React.Fragment>
                    ))}
                    <tr>
                        <td colSpan="3" className="step-divider">Shipping</td>
                    </tr>
                    <tr>
                        <td>Shipping Cost</td>
                        <td></td>
                        <td>${price >= 100 ? 0 : 20}</td>
                    </tr>
                    <tr>
                        <th>Estimated Total Price</th>
                        <th></th>
                        <th>${price >= 100 ? price : price + 20}</th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

module.exports = FormSummary;
