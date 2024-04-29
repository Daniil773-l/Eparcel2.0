import React, { useState } from "react";
import "./CSS/calculator.css";

function Header() {
    const [country, setCountry] = useState("USA"); // Состояние для хранения выбранной страны
    const [city, setCity] = useState("");
    const [weight, setWeight] = useState("");
    const [length, setLength] = useState("");
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");
    const [deliveryCost, setDeliveryCost] = useState(0);

    const calculateDeliveryCost = (event) => {
        event.preventDefault();
        // Ensure all fields are filled and are numbers.
        if (!length || !width || !height || !weight) {
            alert("Please fill in all fields with numbers.");
            return;
        }

        // Convert input values to float
        const lengthNum = parseFloat(length);
        const widthNum = parseFloat(width);
        const heightNum = parseFloat(height);
        const weightNum = parseFloat(weight);

        // Calculate total volume
        const totalVolume = lengthNum * widthNum * heightNum;

        // Calculate delivery cost based on volume and weight
        const volumeWeight = totalVolume / 5000;
        const adjustedWeight = Math.max(weightNum, volumeWeight);

        // Here you can adjust your rates based on the country
        const ratePerKg = country === "USA" ? 5 : 7; // Example rate per kg
        let cost = adjustedWeight * ratePerKg;

        // Convert to Turkish Lira if country is Turkey
        if (country === "Turkey") {
            // Conversion rate from USD to TRY
            const conversionRate = 10; // Example conversion rate
            cost *= conversionRate;
        }

        setDeliveryCost(cost);
    };

    return (
        <section className="calculator-section" style={{ fontFamily: "Arial, sans-serif" }}>
            <div className="country-switcher" >
                <button
                    type="button"
                    data-country="USA" /* Add data-country attribute */
                    className={`country-button ${country === "USA" ? "active" : ""}`}
                    onClick={() => setCountry("USA")}
                >
                    из США
                </button>
                <button
                    type="button"
                    data-country="Turkey" /* Add data-country attribute */
                    className={`country-button ${country === "Turkey" ? "active" : ""}`}
                    onClick={() => setCountry("Turkey")}
                >
                    из Турции
                </button>

            </div>
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
                    <label><span className="green">Способ доставки:</span></label>
                    <div className="checkbox-group">
                        <div className="checkbox-option">
                            <input type="radio" id="method1" name="delivery_method" value="pickup" className="hidden-checkbox"/>
                            <label htmlFor="method1" className="styled-checkbox"></label>
                            <span>ПВЗ</span>
                        </div>
                        <div className="checkbox-option">
                            <input type="radio" id="method2" name="delivery_method" value="post" className="hidden-checkbox"/>
                            <label htmlFor="method2" className="styled-checkbox"></label>
                            <span>Постамат</span>
                        </div>
                        <div className="checkbox-option">
                            <input type="radio" id="method3" name="delivery_method" value="courier" className="hidden-checkbox"/>
                            <label htmlFor="method3" className="styled-checkbox"></label>
                            <span>Курьер</span>
                        </div>
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
                        <span>Стоимость доставки:</span>
                        <strong>{deliveryCost.toFixed(2)} {country === "USA" ? "$" : "TRY"}</strong>
                    </div>
                </div>
            </form>
        </section>
    );
}

export default Header;
