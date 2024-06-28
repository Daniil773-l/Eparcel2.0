import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Header from "components/headers/MainCabinetHeader";
import { ReactComponent as SvgDecoratorBlob1 } from "../images/svg-decorator-blob-1.svg";
import RoomHeader from "../components/headers/RoomHeader";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import Footer from "components/footers/MainFooterWithLinks";
import ProfileCard from "../components/cards/ProfileCard";
import TopUpCard from "../components/cards/TopUpCard";
import SingleProfileCard from "../components/cards/SingleProfileCard";

const Container = styled.div`
    ${tw`relative w-full min-h-screen`}
    padding: 0;
    margin: 0;
    box-sizing: border-box;
`;

const InfoContainer = styled.div`
    ${tw`flex w-full items-center justify-between gap-2 mt-4`}
    ${tw`p-4 sm:px-4 md:px-8 lg:px-12 xl:px-16 sm:px-0 md:px-0 lg:px-0 xl:px-0`}
`;

const InfoBox = styled.div`
    ${tw`flex items-center justify-between bg-white shadow-md rounded-lg p-2`}
    border: 2px solid #e2e8f0;
    width: 250px; // Adjust width as needed
`;

const InfoText = styled.span`
    ${tw`text-gray-600`}
`;

const IconButton = styled.a`
    ${tw`ml-4 bg-green-500 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center leading-none focus:outline-none transition duration-300`}
    background-color: #0ABD19;
    border: none;
    margin-left: auto; // Automatically push the button to the end
    margin-top: 0; // Remove top margin
    width: 20px; // Set button width
    height: 20px; // Set button height

    &:hover, &:focus {
        transform: scale(1.1);
    }
`;

const BaseButtonStyles = css`
    ${tw`px-6 py-2 font-semibold rounded-lg shadow-md bg-gray-300 text-lg text-gray-600`}
    ${tw`h-10 w-full sm:w-auto`}
    ${tw`m-2`}
    border: 2px solid #0ABD19;

    &:hover {
        ${tw`text-black bg-green-200`}
    }

    &:focus {
        ${tw`text-black bg-green-200`}
    }
`;

const TwoColumn = styled.div`
    ${tw`flex flex-col lg:flex-row lg:items-start max-w-screen-xl mx-auto py-20 md:py-24`}
    padding-bottom: 0; // Remove bottom padding
`;

const LeftColumn = styled.div`
    ${tw`relative w-full text-left mx-auto`}
`;

const RightColumn = styled.div`
    ${tw`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`}
`;

const Heading = styled.h1`
    ${tw`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-4xl text-gray-900 leading-tight`}
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const PrimaryButton = styled.button`
    ${BaseButtonStyles}
    ${({ selected }) =>
            selected &&
            css`
                ${tw`bg-green-200 border-green-600 text-black`}
            `}
`;

const ButtonContainer = styled.div`
    ${tw`flex flex-wrap items-center justify-start gap-4`}
    ${tw`p-0`} // Remove padding
    ${tw`sm:px-0 md:px-0 lg:px-0 xl:px-0`} // Ensure no extra padding
    ${tw`mt-8`} // Add top margin
`;

const ButtonAdd = styled.button`
    ${tw`ml-4 w-auto bg-gray-300 text-gray-600 font-bold py-3 rounded-full flex items-center justify-center leading-none focus:outline-none transition duration-300`}
    border: none;
    width: 200px; // Set fixed width
    height: 40px; // Set fixed height
    padding: 0 1rem;

    &:hover, &:focus {
        transform: scale(1.1);
        background-color: #0ABD19;
        color: white;
    }
    &:focus::placeholder {
        color: transparent;
    }
`;

const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const Actions = styled.div`
    ${tw`relative flex items-center w-full gap-8`} // Add gap between containers
`;

const Description = styled.p`
    ${tw`my-5 lg:my-8 text-base xl:text-lg`}
`;

const BottomButtonsContainer = styled.div`
    ${tw`flex justify-start gap-4 mt-8`} // Increase top margin
`;

const BottomButton = styled.button`
    ${tw`w-auto bg-green-500 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center leading-none focus:outline-none transition duration-300`}
    background-color: #0ABD19;
    border: none;
    width: 250px; // Set fixed width
    height: 50px; // Set fixed height

    &:hover, &:focus {
        transform: scale(1.1);
    }
`;

const NavigationBanner = styled.div`
    ${tw`w-full py-8 mb-16 mt-10`}
    background: #EBFAE5;
    text-align: center;
    font-size: 1rem;
    color: #2D2D2D;
`;

const NavigationLink = styled.a`
    font-family: 'SFUIText', sans-serif;
    ${tw`text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1`}
    ${tw`hover:border-primary-500 hover:text-primary-500 focus:text-primary-500`}
    text-decoration: none;
    color: #2D2D2D;

    &:hover, &:focus {
        color: #0ABD19;
        text-decoration: none;
    }
`;

const IllustrationContainer = styled.div`
    ${tw`flex justify-center lg:justify-end items-center`}
    width: 100%;
    overflow: hidden;
    position: relative;
    height: 600px;

    img {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        transition: opacity 0.5s ease-in-out;
        width: 100%;
        height: 600px;
    }
`;

const CustomLink = styled(Link)`
    text-decoration: none;
    color: inherit; /* наследует цвет от родителя */
    
    &:hover {
        text-decoration: none;
        color: inherit;
    }
`;

const CardsContainer = styled.div`
    ${tw`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-xl mx-auto mb-20`}
    margin-top: 46px; /* Reduced top margin */
`;

const HighlightedText = styled.span`
    ${tw`font-bold`}
    color: #0ABD19;
`;

const BackButton = styled(ButtonAdd)`
    ${tw`w-auto bg-gray-300 text-gray-600 font-bold py-3 px-4 rounded-full flex items-center justify-center leading-none focus:outline-none transition duration-300`}
    margin-left: 0; // Remove left margin
`;

const PersonalCabinet = ({ roundedHeaderButton }) => {
    const [showFirstImage, setShowFirstImage] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowFirstImage((prev) => !prev); // Toggle between true and false
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);

    return (
        <>
            <AnimationRevealPage>
                <RoomHeader />
                <Header roundedHeaderButton={roundedHeaderButton} />
                <Container>
                    <TwoColumn>
                        <LeftColumn>
                            <Heading>
                                Получатели
                                <CustomLink to="/PersonalArea">
                                    <BackButton>
                                        Назад в личный кабинет
                                    </BackButton>
                                </CustomLink>
                            </Heading>
                            <Description>
                                У вас не добавлено ни одного получателя посылок.<br />
                                Нажмите кнопку "Добавить получателя" и следуйте инструкции, заполните все поля и выберите получателя в данном шаге.
                            </Description>
                            <BottomButtonsContainer>
                                <BottomButton>Добавить получателя</BottomButton>
                            </BottomButtonsContainer>
                        </LeftColumn>
                    </TwoColumn>
                    <NavigationBanner>
                        <NavigationLink href="/custom-rules">Таможенные правила</NavigationLink>
                        <NavigationLink href="/delivery-calculator">Калькулятор доставки</NavigationLink>
                        <NavigationLink href="/prohibited-goods">Запрещенные товары к пересылке</NavigationLink>
                        <NavigationLink href="/ask-question">Задать вопрос</NavigationLink>
                        <NavigationLink href="/add-package">Добавить посылку</NavigationLink>
                    </NavigationBanner>
                    <CardsContainer>
                        <TopUpCard />
                        <SingleProfileCard />
                    </CardsContainer>
                </Container>
                <Footer />
            </AnimationRevealPage>
        </>
    );
};

export default PersonalCabinet;
