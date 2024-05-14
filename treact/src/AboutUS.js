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
import Partners from "images/Partners.png";
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
    flex-shrink: 0;  // Prevents the star from shrinking
`;
const Description = styled.p`
    margin: 0;
    font-size: 20px;
    margin-left: 15px;
     // Reduce this value to decrease the space between items
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

const SmallStar = styled(Star)`
    width: 24px;  // Fixed width
    height: 24px;  // Fixed height
    flex-shrink: 0;  // Prevents resizing due to flex properties
`;
const LargerImage = styled.img`
    width: 100%; // Increase width as needed
    max-width: 1200px; // Adjust max width as necessary to control size limits
    height: auto; // Keeps the aspect ratio intact
    margin-top: 20px;
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
                        description: (
                            <FeatureItem>
                                <SmallStar />
                                <Description>
                                    Дешевые и фиксированные тарифы доставки
                                </Description>
                            </FeatureItem>
                        ),
                    },
                    {
                        description: (
                            <FeatureItem>
                                <SmallStar />
                                <Description>
                                    Отсутствие скрытых комиссий и дополнительных платежей
                                </Description>
                            </FeatureItem>
                        ),
                    },
                    {
                        description: (
                            <FeatureItem>
                                <SmallStar />
                                <Description>
                                    Понятные и простые правила расчета посылок
                                </Description>
                            </FeatureItem>
                        ),
                    },
                    {
                        description: (
                            <FeatureItem>
                                <SmallStar />
                                <Description>
                                    Выкуп товаров в других странах и доставка по всей России, даже в самые удаленные города
                                </Description>
                            </FeatureItem>
                        ),
                    },
                    {
                        description: (
                            <FeatureItem>
                                <SmallStar />
                                <Description>
                                    Различные способы оплаты для максимального удобства наших клиентов.
                                </Description>
                            </FeatureItem>
                        ),
                    },
                    {
                        description: (
                            <FeatureItem>
                                <SmallStar />
                                <Description>
                                    Большой выбор дополнительных услуг
                                </Description>
                            </FeatureItem>
                        ),
                    },
                    {
                        description: (
                            <FeatureItem>
                                <SmallStar />
                                <Description>
                                    Индивидуальное консультирование по всем вопросам
                                </Description>
                            </FeatureItem>
                        ),
                    },
                    {
                        description: (
                            <FeatureItem>
                                <SmallStar />
                                <Description>
                                    Гарантия быстрой и качественной доставки
                                </Description>
                            </FeatureItem>
                        ),
                    },
                ]}
            />
            <Footer/>
        </AnimationRevealPage>
    );
};
