import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/AboutUsHeader";
import MainFeature2 from "components/features/AboutUsGoal";
import Footer from "components/footers/MiniCenteredFooter";
import Explanation from "components/cards/AboutUsExplanation";
import Slider from "components/hero/ImageSliderWithText";
import Slider2 from "components/hero/SecondImageSlider";
import Offerings from "components/features/OffersToClients";
import Questions from "components/features/QuestionFormWithImage";
import "./CSS/IncludedServicesSectionTariff.css";
import prototypeIllustrationImageSrc from "./images/EparcelBallon.svg";
import styled from "styled-components";
import tw from "twin.macro";
import Partners from "images/Partners.png";
import Goal from "images/GoalPicture.svg";

import { ReactComponent as Star } from "images/GreenStar.svg";

const FeatureItem = styled.div`
    display: flex;
    align-items: center; // Ensures vertical center alignment
    margin-bottom: 20px; // Adds space between items
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center; // Centers the icon vertically
    margin-right: 15px; // Space between icon and text
`;

const Description = styled.p`
    display: flex;
    align-items: center; // Ensures text is centered with the icon
    margin: 0; // Removes default margins
    flex-grow: 1; // Takes the remaining space
    font-size: 16px; // Ensures consistent font size
`;

const SectionContainer = styled.section`
    ${tw`mx-auto w-full`}
    display: flex;
    flex-direction: column;
    align-items: start;
`;

const CenteredContainer = tw.div`
  flex items-center justify-center h-full
`;

const Heading = tw.h1`
  text-3xl sm:text-5xl md:text-6xl lg:text-4xl font-black leading-none
`;

const ContentAlignment = styled.div`
    ${tw`text-left mx-auto max-w-screen-xl`}
    padding: 0 1rem;
`;

const Prim = styled.span`
    ${tw`text-center text-primary-500 md:text-left`}
    color: #0ABD19;
`;

export default () => {
    return (
        <AnimationRevealPage>
            <Header roundedHeaderButton={true}/>
            <Explanation/>
            <SectionContainer>
                <ContentAlignment>
                    <MainFeature2
                        heading={<Prim>Наша цель</Prim>}
                        imageSrc={Goal}
                        showDecoratorBlob={false}
                    />
                    <Slider images={['Slide1', 'Slide2']} showDecoratorBlob={false}/>
                    <Slider2 images={['Slide1', 'Slide2']} showDecoratorBlob={false}/>
                </ContentAlignment>
            </SectionContainer>
            <CenteredContainer>
                <Heading>Наши партнеры</Heading>
            </CenteredContainer>
            <CenteredContainer>
                <img src={Partners} alt="Наши партнеры"/>
            </CenteredContainer>
            <Offerings
                heading={<>
                    Что мы предлагаем для наших клиентов:
                </>}
                imageSrc={prototypeIllustrationImageSrc}
                showDecoratorBlob={false}
                features={[
                    {
                        Icon: Star,
                        description: "Дешевые и фиксированные тарифы доставки",
                    },
                    {
                        Icon: Star,
                        description: "Отсутствие скрытых комиссий и дополнительных платежей",
                    },
                    {
                        Icon: Star,
                        description: "Понятные и простые правила расчета посылок",
                    },
                    // Additional features can be added here
                ]}
            />

            <Footer/>
        </AnimationRevealPage>
    );
};
