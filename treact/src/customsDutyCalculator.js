import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import "./CSS/calculator.css";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const CalculatorColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(({ textOnLeft }) => [
    tw`md:w-6/12 mt-16 md:mt-0`,
    textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = styled(SubheadingBase)`
    ${tw`text-center md:text-left`}
    color: #0ABD19; // Set the color to bright green
`;

const Heading = tw(
    SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-3xl lg:text-5xl text-center md:text-left leading-tight`;

const Description = tw.p`mt-8 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const CustomsDutyCalculator = ({ subheading = "", heading = (
    <>
        Заказали на сумму более 200 евро? <span tw="text-primary-500"></span> Рассчитайте стоимость таможенной пошлины заранее!
    </>
), textOnLeft = true }) => {
    const [itemPrice, setItemPrice] = useState('');
    const [itemWeight, setItemWeight] = useState('');
    const [currency, setCurrency] = useState('EUR'); // Default currency
    const [customsDuty, setCustomsDuty] = useState(0);
    const exchangeRates = { USD: 1.0, EUR: 1.18, TRY: 0.054 }; // Example rates

    const handleCalculate = (event) => {
        event.preventDefault();
        const rate = exchangeRates[currency];
        const duty = (parseFloat(itemPrice) * parseFloat(itemWeight)) * rate;
        setCustomsDuty(duty);
    };

    return (
        <Container>
            <TwoColumn>
                <CalculatorColumn>
                    <div className="duty-calculator-section">
                        <h3>Калькулятор таможенной пошлины</h3>
                        <form className="calculator-form" onSubmit={handleCalculate}>
                            <div className="input-group">
                                <div className="custom-select-container">
                                    <select className="custom-select" id="currency" name="currency" required value={currency} onChange={e => setCurrency(e.target.value)}>
                                        <option value="USD">Доллар (USD)</option>
                                        <option value="EUR">Евро (EUR)</option>
                                        <option value="TRY">Турецкая лира (TRY)</option>
                                    </select>
                                </div>
                            </div>
                            <div className="input-row">
                                <div className="input-group">
                                    <input type="text" id="item-price" name="item_price" placeholder="Цена товара" className="input-placeholder-fade" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} />
                                </div>
                                <div className="input-group">
                                    <input type="number" id="item-weight" name="item_weight" placeholder="Вес посылки" className="input-placeholder-fade" value={itemWeight} onChange={(e) => setItemWeight(e.target.value)} />
                                </div>
                            </div>
                            <div className="calculation-container">
                                <button type="submit" className="calculate-button">Рассчитать</button>
                                <div className="calculation-result">
                                    <span>Размер пошлины:</span>
                                    <strong>{customsDuty.toFixed(2)} {currency}</strong>
                                </div>
                            </div>
                        </form>
                    </div>
                </CalculatorColumn>
                <TextColumn textOnLeft={textOnLeft}>
                    <TextContent>
                        <Subheading>{subheading}</Subheading>
                        <Heading>{heading}</Heading>
                        <Description>
                            <span style={{ color: "#0ABD19" }}>Если стоимость товаров</span> более 200 евро -
                            оплачивается таможенная пошлина 15% на
                            то, что свыше 200 евро. Лимит
                            31 кг., объёмный вес (габариты).
                        </Description>
                    </TextContent>
                </TextColumn>
            </TwoColumn>

        </Container>
    );
};

export default CustomsDutyCalculator;
