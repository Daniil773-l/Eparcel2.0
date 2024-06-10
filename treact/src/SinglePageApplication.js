import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components";
import { Link } from "react-scroll";
import Header from "components/headers/SingleLight";
import Header2 from "components/headers/SinglePageHeader";
import FeatureWithSteps from "components/features/SinglePageExp";
import Footer from "components/footers/SinglePageFooter";
import ContactForm from "components/faqs/SingleContacts";
import ContactDetails from "components/cards/ThreeColContactDetails.js";
import Explanation from "components/cards/JustExplanation";
import SectionApplication from "components/cta/ApplicationRedemption";
import Slider2 from "components/cards/SinglePageInformation";
import PartnersSlider from "components/features/PartnersSlider";
import Calculator from "components/features/SinglePageCalculator";
import FAQs from "components/faqs/SingleCol";
import Dev from "images/SingleDeliv.svg";
import BackgroundVideo from "components/features/BackgroundVideo";
import "./CSS/IncludedServicesSectionTariff.css";
import Warehouse from "images/warehouseImage.svg";
import Receiving from "images/Receiving.svg";
import Consolidation from "images/Consolidation.svg";
import DeliveryS from "images/DeliverySingle.svg";
import Customs from "images/CustomClearance.svg";
import Transfer from "images/TransferToClient.svg";

// Styled components for the image section
const ImageSection = styled.div`
    ${tw`relative w-full h-full`}
    margin-top: 2rem;
`;

const Spacer = styled.div`
    ${tw`my-8`}  // This adds margin-top and margin-bottom of 2rem (8 * 0.5rem = 4rem)
`;

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Title = tw.span`font-bold block mt-4`; // New style for titles
const Info = tw.span`text-sm mt-1 block text-gray-500`; // New style for information

const BackgroundImage = styled.div`
    ${tw`w-full h-full`}
    background-image: url(${Dev});
    background-size: cover;
    background-position: bottom;
    height: 50vh; // Adjust height as necessary
`;

const TextOverlay = styled.div`
    ${tw`absolute top-0 left-0 w-full h-full flex flex-col justify-start items-start p-8 lg:p-24`}
`;

const OverlayHeading = styled.h2`
    ${tw`text-3xl lg:text-5xl font-bold text-green-500 mb-4 text-center`}
    margin-top: 2rem; // Move text down
`;

const OverlayText = styled.p`
    ${tw`text-lg lg:text-xl font-semibold text-gray-800`}
    margin-top: 1rem; // Add margin for spacing
`;

// Styled components for the partners section
const PartnersSection = styled.div`
    ${tw`w-full flex flex-col items-center py-16 bg-white`}
`;

const PartnersHeading = styled.h2`
    ${tw`text-3xl lg:text-5xl font-bold text-gray-800 mb-8 text-center`}
`;



// Styled components for the services section
const ServicesSection = styled.div`
    ${tw`w-full flex flex-col items-center py-16 bg-white`}
`;

const ServiceItems = styled.div`
    ${tw`flex justify-around flex-wrap mt-8`}
`;

const ServiceItem = styled.div`
    ${tw`flex flex-col items-center mx-4 my-4`}
`;

const ServiceImage = styled.img`
    ${tw`w-24 h-24`}
`;

const ServiceText = styled.p`
    ${tw`mt-4 text-center text-lg font-semibold`}
`;

export default () => {
    return (
        <AnimationRevealPage>

            <div id="home">

                <BackgroundVideo videoSrc="/file.mp4">
                    <Header roundedHeaderButton={true}/>
                </BackgroundVideo>
            </div>
            <div id="about">
                <Header2/>
            </div>
            <div id="how-it-works">
                <FeatureWithSteps
                    heading={
                        <>
                            Как это работает?
                        </>
                    }
                />
            </div>
            <Slider2 images={["Slide1"]} showDecoratorBlob={false}/>
            <div id="goal">
                <ImageSection>
                    <BackgroundImage>
                        <TextOverlay>
                            <OverlayHeading>НАША ЦЕЛЬ</OverlayHeading>
                            <OverlayText>
                                Оказание качественных услуг, <br/> быстрая и надежная доставка <br/>посылок и груза по
                                минимальной<br/> стоимости для наших клиентов
                            </OverlayText>
                        </TextOverlay>
                    </BackgroundImage>
                </ImageSection>
            </div>
            <div id="services">
                <ServicesSection>
                    <PartnersHeading>Наши услуги</PartnersHeading>
                    <ServiceItems>
                        <ServiceItem>
                            <ServiceImage src={Warehouse} alt="Адрес склада"/>
                            <ServiceText>1. Адрес склада</ServiceText>
                        </ServiceItem>
                        <ServiceItem>
                            <ServiceImage src={Receiving} alt="Получение"/>
                            <ServiceText>2. Получение</ServiceText>
                        </ServiceItem>
                        <ServiceItem>
                            <ServiceImage src={Consolidation} alt="Консолидация"/>
                            <ServiceText>3. Консолидация</ServiceText>
                        </ServiceItem>
                        <ServiceItem>
                            <ServiceImage src={DeliveryS} alt="Доставка"/>
                            <ServiceText>4. Доставка</ServiceText>
                        </ServiceItem>
                        <ServiceItem>
                            <ServiceImage src={Customs} alt="Таможенное оформление"/>
                            <ServiceText>5. Таможенное оформление</ServiceText>
                        </ServiceItem>
                        <ServiceItem>
                            <ServiceImage src={Transfer} alt="Передача клиенту"/>
                            <ServiceText>6. Передача клиенту</ServiceText>
                        </ServiceItem>
                    </ServiceItems>
                </ServicesSection>
            </div>
            <div id="partners">
                <PartnersSection>
                    <PartnersHeading>Наши партнеры</PartnersHeading>
                    <PartnersSlider/>
                </PartnersSection>
            </div>
            <Spacer/>
            <div id="contacts">
                <ContactForm/>
                <ContactDetails
                    cards={[
                        {
                            title: "Контактные данные:",
                            description: (
                                <>
                                    <Address>
                                        <Title>Телефон для связи:</Title>
                                        <Info>8 (800) 777-76-10</Info>
                                        <Title>E-mail:</Title>
                                        <Info>info@eparcel.kz</Info>
                                    </Address>
                                </>
                            )
                        },
                        {
                            title: "Режим работы склада (США):",
                            description: (
                                <>
                                    <Address>
                                        <AddressLine>Понедельник - пятница с 15:00 до 23:00</AddressLine>
                                        <AddressLine>Суббота, Воскресенье - выходные дни</AddressLine>
                                    </Address>
                                </>
                            )
                        },
                    ]}
                />
            </div>
            <div>
                <PartnersHeading>Калькулятор</PartnersHeading>
                <Calculator/>
            </div>
            <Spacer/>
            <div>
                <OverlayHeading>FAQ</OverlayHeading>
                <FAQs faqs={[
                    {
                        question: "Как открыть личный кабинет на вашем сайте?",
                        answer: "На главной странице сайта есть активная зеленая кнопка \"Зарегистрироваться\", нажав на нее, вы перейдете в раздел регистрации, где должны будете внести ваши данные и подтвердить регистрацию, согласившись с условиями пользовательского соглашения."
                    },
                    {
                        question: "Почему я не получил письмо с подтверждением регистрации?",
                        answer: "Возможно вы указали неверный адрес e-mail."
                    },
                    {
                        question: "Возможно изменить имя, адрес почты или пароль в личном кабинете?",
                        answer: "Да. Зайдите в личный кабинет в раздел \"Профиль\" и измените необходимые вам данные."
                    },
                    {
                        question: "Я потерял доступ к аккаунту. Что делать?",
                        answer: "При потере доступа к аккаунту необходимо написать в службу поддержки Eparcel."
                    }
                ]}/>
            </div>
            <Spacer/>
        </AnimationRevealPage>
    );
};
