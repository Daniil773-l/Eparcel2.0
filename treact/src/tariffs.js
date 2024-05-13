import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/hero/HeaderTariff";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import Footer from "components/footers/MainFooterWithLinks";
import "./CSS/IncludedServicesSectionTariff.css";
import Icon1 from "./images/icon1.png";
import Icon2 from "./images/icon2.png";
import Icon3 from "./images/icon3.png";
import Icon4 from "./images/icon4.png";
import Icon5 from "./images/icon5.png";
import Icon6 from "./images/icon6.png";



import tw from "twin.macro";
import DutyCalculator from "./customsDutyCalculator";
import MainFeature1 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton1.js";
import styled from "styled-components";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import Calculator from "./calculator";

export default () => {
    const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
    const HighlightedText = tw.span`text-primary-500`;

    const Prim = styled.span`
        ${tw`text-center text-primary-500 md:text-left`}// Применяем основные стили от tw.macro
        color: #0ABD19; // Устанавливаем желаемый цвет
    `;
    return (
        <AnimationRevealPage>
            <Header roundedHeaderButton={true}/>
            <Pricing/>
            <section className="included-services-section">
                <div className="container">
                    <h2>В стоимость тарифа включено:</h2>
                    <div className="services-list">
                        <img src={Icon1} alt="Описание"/>
                        <img src={Icon2} alt="Описание"/>
                        <img src={Icon3} alt="Описание"/>
                        <img src={Icon4} alt="Описание"/>
                        <img src={Icon5} alt="Описание"/>
                        <img src={Icon6} alt="Описание"/>
                    </div>
                </div>
            </section>
            <MainFeature1
                subheading={< Prim></ Prim>}
                heading={
                    <>
                        Рассчитайте стоимость <Prim>доставки</Prim>
                    </>
                }

                showDecoratorBlob={false}
            />
            <DutyCalculator/>


            <Footer/>
        </AnimationRevealPage>
    );
};
