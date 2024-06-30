import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import Header from "components/headers/MainCabinetHeader";
import { ReactComponent as SvgDecoratorBlob1 } from "../images/svg-decorator-blob-1.svg";
import RoomHeader from "../components/headers/RoomHeader";
import { ReactComponent as SearchIcon } from "../images/search-icon.svg";
import AnimationRevealPage from "../helpers/AnimationRevealPage"; // Ensure you have the search icon SVG file
import Footer from "components/footers/MainFooterWithLinks";
import { ReactComponent as PlusIcon } from "feather-icons/dist/icons/plus.svg"; // Импортируем PlusIcon

const Container = styled.div`
    ${tw`relative w-full`}
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
    ${tw`px-6 py-2 font-semibold rounded-lg shadow-md bg-white text-lg text-gray-600`}
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
`;

const LeftColumn = styled.div`
    ${tw`relative w-full text-left mx-auto`}
`;

const RightColumn = styled.div`
    ${tw`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`}
`;

const Heading = styled.h1`
    ${tw`font-bold text-2xl md:text-3xl lg:text-4xl xl:text-4xl leading-tight`}
    margin-bottom: 20px;
    color: #2D2D2D;
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

const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const Actions = styled.div`
    ${tw`relative flex items-center w-full `}
`;
const InputContainer = styled.div`
    ${tw`relative flex-grow`}
    margin-right: 1rem; // Right margin for button

`;

const SearchInput = styled.input`
    ${tw`pl-10 pr-4 py-3 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300`}
    height: 20px; // Set fixed height
    border-color: #0ABD19;
    width: 95%;
    &:hover, &:focus {
        border-color: #0ABD19;
    }
`;
const SearchIconContainer = styled.div`
    ${tw`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none`}
`;

const AddButton = styled.button`
    ${tw`ml-2 w-auto bg-green-500 text-white font-bold py-4 rounded-full flex items-center justify-center leading-none focus:outline-none transition duration-300`}
    width: 200px; // Set fixed width
    height: 45px; // Set fixed height
    background-color: #0ABD19;
    border: none;

    &:hover, &:focus {
        transform: scale(1.1);
    }
`;

const InfoMessageBox = styled.div`
    ${tw`flex flex-col items-start p-4 bg-yellow-100 rounded-lg mt-8`}
    width: calc(100% - 2rem); // Adjust width to span full container with padding considered
    max-width: 100%; // Ensure it does not exceed container
    color: #333;
    background-color: #fffbe5;
    border: 1px solid #f5e1a4;
`;

const InfoMessageHeading = styled.h2`
    ${tw`text-lg font-bold mb-2`}
`;

const InfoMessageText = styled.p`
    ${tw`text-base`}
`;

const BottomButtonsContainer = styled.div`
    ${tw`flex justify-start gap-4 mt-8 sm:px-0 md:px-0 lg:px-0 xl:px-0`}
`;

const BottomButton = styled.button`
    ${tw`w-auto bg-green-500 text-white font-bold py-4 px-6 rounded-full flex items-center justify-center leading-none focus:outline-none transition duration-300`}
    background-color: #0ABD19;
    border: none;
    
    &:hover, &:focus {
        transform: scale(1.1);
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

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
    ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

const HighlightedText = styled.span`
    ${tw`font-bold`}
    color: #0ABD19;
`;

export default ({ roundedHeaderButton }) => {
    const [showFirstImage, setShowFirstImage] = useState(true);
    const [selectedCountry, setSelectedCountry] = useState("США");
    const [selectedCategory, setSelectedCategory] = useState("Детский мир");

    useEffect(() => {
        const interval = setInterval(() => {
            setShowFirstImage((prev) => !prev); // Toggle between true and false
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, []);

    return (
        <>
            <AnimationRevealPage>
                <Header roundedHeaderButton={roundedHeaderButton} />
                <Container>
                    <TwoColumn>
                        <LeftColumn>
                            <Heading>Входящие посылки</Heading>
                            <Actions>
                                <InputContainer>
                                    <SearchIconContainer>
                                        <SearchIcon />
                                    </SearchIconContainer>
                                    <SearchInput
                                        type="text"
                                        placeholder="Поиск по номеру посылки, трекингу, названию посылки или товара"
                                    />
                                </InputContainer>
                                <AddButton>Добавить посылку</AddButton>
                            </Actions>
                            <ButtonContainer>
                                <PrimaryButton onClick={() => setSelectedCountry('Все склады')} selected={selectedCountry === 'Все склады'}>Все склады</PrimaryButton>
                                <PrimaryButton onClick={() => setSelectedCountry('США')} selected={selectedCountry === 'США'}>США</PrimaryButton>
                                <PrimaryButton onClick={() => setSelectedCountry('Турция')} selected={selectedCountry === 'Турция'}>Турция</PrimaryButton>
                            </ButtonContainer>
                            <InfoContainer>
                                <InfoBox>
                                    <InfoText>На складе: 0 шт | 0$ | 0 кг</InfoText>
                                </InfoBox>
                                <InfoBox>
                                    <InfoText>Ожидается: 0 шт | 0$</InfoText>
                                </InfoBox>
                                <IconButton href="#">
                                    <PlusIcon />
                                </IconButton>
                            </InfoContainer>
                            <InfoMessageBox>
                                <InfoMessageHeading>У Вас пока нет посылок на складе!</InfoMessageHeading>
                                <InfoMessageText>Выберите товар, оформите доставку на адрес склада, добавьте посылку и в этом разделе Вы сможете отслеживать прибытие посылки на наш склад.</InfoMessageText>
                            </InfoMessageBox>
                            <BottomButtonsContainer>
                                <BottomButton>Добавить ожидаемую посылку</BottomButton>
                                <BottomButton>В профиль</BottomButton>
                            </BottomButtonsContainer>
                        </LeftColumn>
                    </TwoColumn>
                </Container>
                <Footer />
            </AnimationRevealPage>
        </>
    );
};
