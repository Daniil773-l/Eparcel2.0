import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import "CSS/calculator.css";
import Header from 'components/headers/LoginPageHeader';
import Footer from "components/footers/MainFooterWithLinks";
import AnimationRevealPage from "../helpers/AnimationRevealPage";

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

const Heading = styled(SectionHeading)`
  margin-top: 1rem;
  font-weight: 900;
  text-align: left;
  font-size: 34px;
  line-height: 42px;
  font-family: 'Gilroy Semibold', sans-serif;
  color: #2D2D2D;

  @media (min-width: 640px) {
    font-size: 38px;
    line-height: 48px;
  }

  @media (min-width: 1024px) {
    font-size: 42px;
    line-height: 52px;
  }
`;



const Description = styled.p`
  ${tw`mt-8 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`}
  font-size: 22px;
  line-height: 32px;
  color: #2D2D2D;
  font-family: 'Gilroy Medium', sans-serif;
`;

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
        let duty = 0;

        const priceInEuros = parseFloat(itemPrice) / rate;

        if (priceInEuros > 200) {
            duty += (priceInEuros - 200) * 0.15; // 15% for the amount over 200 euros
        }

        if (parseFloat(itemWeight) > 31) {
            const additionalWeight = parseFloat(itemWeight) - 31;
            duty += additionalWeight * 2; // 2 euros for each additional kg over 31 kg
        }

        setCustomsDuty(duty);
    };

    return (
        <>
            <AnimationRevealPage>
                <Header/>
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
                                    то, что свыше 200 евро + 5% оформление
                                    документации таможенной пошлины. Лимит
                                    31 кг., объёмный вес (габариты).
                                </Description>
                            </TextContent>
                        </TextColumn>
                    </TwoColumn>
                </Container>
                <Footer/>
            </AnimationRevealPage>
        </>

    );
};

export default CustomsDutyCalculator;
