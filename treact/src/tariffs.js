import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/hero/HeaderTariff";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/FiveColumnWithInputForm.js";
import FAQ from "components/faqs/SingleCol.js";
import "./CSS/IncludedServicesSectionTariff.css";
import imageSrc from "./images/blockdw.png";
import tw from "twin.macro";
import DutyCalculator from "./customsDutyCalculator";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
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
                        <img src={imageSrc} alt="Описание"/>
                    </div>
                </div>
            </section>
            <MainFeature2
                subheading={< Prim></ Prim>}
                heading={
                    <>
                        Рассчитайте стоимость <HighlightedText>доставки.</HighlightedText>
                    </>
                }

                showDecoratorBlob={false}


            />
            <DutyCalculator/>
            <Footer/>
        </AnimationRevealPage>
    );
};
