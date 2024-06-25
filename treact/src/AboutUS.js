import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/AboutUsHeader";
import MainFeature2 from "components/features/AboutUsGoal";
import Footer from "components/footers/MainFooterWithLinks";
import Explanation from "components/cards/AboutUsExplanation";
import Slider from "components/hero/ImageSliderWithText";
import Slider2 from "components/hero/SecondImageSlider";
import Offerings from "components/features/OffersToClients";
import Questions from "components/features/QuestionFormWithImage";
import "./CSS/IncludedServicesSectionTariff.css";
import prototypeIllustrationImageSrc from "./images/EparcelBallon.svg";
import styled from "styled-components";
import tw from "twin.macro";
import Partners from "images/Partners.svg";
import Goal from "images/GoalPicture.svg";
import { ReactComponent as Star } from "images/GreenStar.svg";

const FeatureItem = styled.div`
    display: flex;
    align-items: center;
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
    flex-shrink: 0;
`;

const Description = styled.p`
    margin: 0;
    font-size: 20px;
    margin-left: 15px;
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
    ${tw`text-left mx-auto max-w-screen-xl flex flex-col lg:flex-row lg:items-center`}
    padding: 4rem 1rem;
`;

const SliderContentBlock = styled.div`
    ${tw`text-left mx-auto max-w-screen-xl`}
    padding: 0 1rem;
`;

const Prim = styled.span`
    ${tw`text-center md:text-left font-bold`}
    color: #0ABD19;
    font-size: 3rem;
    line-height: 1.2;
`;

const SmallStar = styled(Star)`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
`;

const LargerImage = styled.img`
    width: 100%;
    max-width: 600px;
    height: auto;
    margin-top: 20px;
`;

const GoalDescription = styled.p`
    ${tw`text-lg md:text-xl lg:text-2xl text-gray-700`}
    margin-top: 20px;
`;

const ResponsiveImage = styled.img`
    width: 100%;
    max-width: 800px;
    height: auto;
    ${tw`mx-auto`}
`;

export default () => {
    return (
        <AnimationRevealPage>
            <Header roundedHeaderButton={true}/>
            <Explanation/>
            <SectionContainer>
                <ContentAlignment>
                    <div>
                        <Prim>Наша цель</Prim>
                        <GoalDescription>
                            Оказание качественных услуг, быстрая и надежная доставка посылок с товарами по минимальной стоимости для наших клиентов
                        </GoalDescription>
                    </div>
                    <LargerImage src={Goal} alt="Goal Illustration" />
                </ContentAlignment>
                <SliderContentBlock>
                    <Slider images={['Slide1', 'Slide2']} showDecoratorBlob={false}/>
                    <Slider2 images={['Slide1', 'Slide2']} showDecoratorBlob={false}/>
                </SliderContentBlock>
            </SectionContainer>
            <CenteredContainer>
                <Heading style={{ marginBottom: '150px' }}>Наши партнеры</Heading>
            </CenteredContainer>
            <CenteredContainer>
                <ResponsiveImage src={Partners} alt="Наши партнеры"/>
            </CenteredContainer>
            <Offerings
                heading={<>Что мы предлагаем для наших клиентов:</>}
                imageSrc={prototypeIllustrationImageSrc}
                showDecoratorBlob={false}
                features={[
                    {
                        description: (
                            <FeatureItem>
                                <SmallStar />
                                <Description>Дешевые и фиксированные тарифы доставки</Description>
                            </FeatureItem>
                        ),
                    },
                    {
                        description: (
                            <FeatureItem>
                                <SmallStar />
                                <Description>Отсутствие скрытых комиссий и дополнительных платежей</Description>
                            </FeatureItem>
                        ),
                    },
                    {
                        description: (
                            <FeatureItem>
                                <SmallStar />
                                <Description>Понятные и простые правила расчета посылок</Description>
                            </FeatureItem>
                        ),
                    },
                    {
                        description: (
                            <FeatureItem>
                                <SmallStar />
                                <Description>Выкуп товаров в других странах и доставка по всему Казахстану, даже в самые удаленные города</Description>
                            </FeatureItem>
                        ),
                    },
                    {
                        description: (
                            <FeatureItem>
                                <SmallStar />
                                <Description>Различные способы оплаты для максимального удобства наших клиентов.</Description>
                            </FeatureItem>
                        ),
                    },
                    {
                        description: (
                            <FeatureItem>
                                <SmallStar />
                                <Description>Большой выбор дополнительных услуг</Description>
                            </FeatureItem>
                        ),
                    },
                    {
                        description: (
                            <FeatureItem>
                                <SmallStar />
                                <Description>Индивидуальное консультирование по всем вопросам</Description>
                            </FeatureItem>
                        ),
                    },
                    {
                        description: (
                            <FeatureItem>
                                <SmallStar />
                                <Description>Гарантия быстрой и качественной доставки</Description>
                            </FeatureItem>
                        ),
                    },
                ]}
            />
            <Footer/>
        </AnimationRevealPage>
    );
};
