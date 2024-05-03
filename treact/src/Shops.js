import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/ShopsHeader";
import Footer from "components/footers/MiniCenteredFooter";
import "./CSS/IncludedServicesSectionTariff.css";
import imageSrc from "./images/blockdw.png";
import tw from "twin.macro";
import DutyCalculator from "./customsDutyCalculator";
import MainFeature1 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton1.js";
import styled from "styled-components";

export default () => {
   

    const Prim = styled.span`
        ${tw`text-center text-primary-500 md:text-left`}// Применяем основные стили от tw.macro
        color: #0ABD19; // Устанавливаем желаемый цвет
    `;
    return (
        <AnimationRevealPage>
            <Header roundedHeaderButton={true}/>

            <section className="included-services-section">
                <div className="container">
                    <h2>В стоимость тарифа включено:</h2>
                    <div className="services-list">
                        <img src={imageSrc} alt="Описание"/>
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
