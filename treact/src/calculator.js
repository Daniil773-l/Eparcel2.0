import React, { useState } from "react";
import './CSS/calculator.css'; // Assuming you save the CSS in a file named Header.css

function Header() {
    const [country, setCountry] = useState("USA");
    const [city, setCity] = useState("");
    const [weight, setWeight] = useState("");
    const [length, setLength] = useState("");
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");
    const [deliveryCost, setDeliveryCost] = useState(0);

    const calculateDeliveryCost = (event) => {
        event.preventDefault();
        if (!length || !width || !height || !weight) {
            alert("Please fill in all fields with numbers.");
            return;
        }

        const lengthNum = parseFloat(length);
        const widthNum = parseFloat(width);
        const heightNum = parseFloat(height);
        const weightNum = parseFloat(weight);

        const totalVolume = lengthNum * widthNum * heightNum;
        const volumeWeight = totalVolume / 5000;
        const adjustedWeight = Math.max(weightNum, volumeWeight);

        const ratePerKg = country === "USA" ? 5 : 7;
        let cost = adjustedWeight * ratePerKg;

        if (country === "Turkey") {
            const conversionRate = 10;
            cost *= conversionRate;
        }

        setDeliveryCost(cost);
    };

    return (
        <>
            <div className="country-switcher">
                <button
                    type="button"
                    data-country="USA"
                    className={`country-button ${country === "USA" ? "active" : ""}`}
                    onClick={() => setCountry("USA")}
                >
                    из США
                </button>
                <button
                    type="button"
                    data-country="Turkey"
                    className={`country-button ${country === "Turkey" ? "active" : ""}`}
                    onClick={() => setCountry("Turkey")}
                >
                    из Турции
                </button>
            </div>
            <section className="calculator-section">
                <form className="calculator-form" onSubmit={calculateDeliveryCost}>
                    <div className="input-row">
                        <div className="input-group">
                            <input
                                type="text"
                                id="city"
                                name="city"
                                className="dimension-field input-placeholder-fade"
                                placeholder="Ваш город"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>
                        <div className="input-group">
                            <input
                                type="number"
                                id="weight"
                                name="weight"
                                className="dimension-field input-placeholder-fade"
                                placeholder="Вес посылки (кг)"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="input-group">
                        <label><span className="green">Габариты посылки (см):</span></label>
                        <div className="input-row">
                            <input
                                type="number"
                                id="length"
                                name="length"
                                placeholder="Длина"
                                className="input-placeholder-fade"
                                value={length}
                                onChange={(e) => setLength(e.target.value)}
                            />
                            <input
                                type="number"
                                id="width"
                                name="width"
                                placeholder="Ширина"
                                className="input-placeholder-fade"
                                value={width}
                                onChange={(e) => setWidth(e.target.value)}
                            />
                        </div>
                        <input
                            type="number"
                            id="height"
                            name="height"
                            placeholder="Высота"
                            className="input-placeholder-fade"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                        />
                    </div>
                    <div className="calculation-container">
                        <button type="submit" className="calculate-button">Рассчитать</button>
                        <div className="calculation-result">
                            <span>Стоимость доставки: <br /> <br /></span>
                            <strong>{deliveryCost.toFixed(2)} {country === "USA" ? "USD" : "USD"}</strong>
                        </div>
                    </div>
                </form>
            </section>
        </>
    );
}

export default Header;
