import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import Header from "components/headers/MainCabinetHeader";
import { ReactComponent as SvgDecoratorBlob1 } from "../images/svg-decorator-blob-1.svg";
import RoomHeader from "../components/headers/RoomHeader";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import Footer from "components/footers/MainFooterWithLinks";



const Container = styled.div`
    ${tw`relative w-full min-h-screen`}
    padding: 0;
    margin: 0;
    box-sizing: border-box;
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
    ${tw`font-bold text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-gray-900 leading-tight`}
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const PrimaryButton = styled.button`
    ${tw`px-6 py-2 font-semibold rounded-lg shadow-md bg-gray-300 text-lg text-gray-600 h-10 w-full sm:w-auto m-2 border-2 border-solid border-green-600`}
    ${({ selected }) =>
    selected &&
    css`
            ${tw`bg-green-200 text-black`}
        `}
    &:hover, &:focus {
        ${tw`text-black bg-green-200`}
    }
`;

const Actions = styled.div`
    ${tw`relative flex flex-wrap items-center w-full gap-8`} // Add gap between containers
`;

const InputContainer = styled.div`
    ${tw`relative flex-1`} // Use flex-1 to ensure proper spacing
`;

const Label = styled.label`
    ${tw`block text-gray-700 text-sm font-bold mb-2 mt-4`}
`;

const SearchInput = styled.input`
    ${tw`pl-4  py-3 font-medium focus:outline-none transition duration-300 `}
    border-color: #0ABD19;
    width: 100%;
    border: none;
    border-bottom: 1px solid #0ABD19;
    padding-left: 0;
    &:hover, &:focus {
        border-color: #0ABD19;
    }
    &:focus::placeholder {
        color: transparent;
    }
`;

const AddInput = styled.input`
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

const BottomButtonsContainer = styled.div`
    ${tw`flex justify-start gap-4 mt-8`} // Increase top margin
`;

const BottomButton = styled.button`
    ${tw`w-auto bg-green-500 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center leading-none focus:outline-none transition duration-300`}
    background-color: #0ABD19;
    border: none;
    width: 200px; // Set fixed width
    height: 50px; // Set fixed height

    &:hover, &:focus {
        transform: scale(1.1);
    }
`;

const BackButton = styled(AddInput)`
    ${tw`w-auto bg-gray-300 text-gray-600 font-bold py-3 px-4 rounded-full flex items-center justify-center leading-none focus:outline-none transition duration-300`}
    margin-left: 0; // Remove left margin
`;

export default ({ roundedHeaderButton }) => {
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
                                Изменение контактных данных
                                <BackButton
                                    type="button"
                                    value="Назад в личный кабинет"
                                    onClick={() => window.history.back()}
                                />
                            </Heading>
                            <Actions>
                                <InputContainer>
                                    <Label>Название личного кабинета</Label>
                                    <SearchInput
                                        type="text"
                                        placeholder="Ромашка"
                                    />
                                </InputContainer>
                            </Actions>
                            <Heading>
                                Контактное лицо:
                            </Heading>
                            <Actions>
                                <InputContainer>
                                    <Label>Имя</Label>
                                    <SearchInput
                                        type="text"
                                        placeholder="Zhaksyllyk"
                                    />
                                </InputContainer>
                                <InputContainer>
                                    <Label>Фамилия</Label>
                                    <SearchInput
                                        type="text"
                                        placeholder="Yernur"
                                    />
                                </InputContainer>
                                <InputContainer>
                                    <Label>Телефон</Label>
                                    <SearchInput
                                        type="text"
                                        placeholder="+7(771) 151-65-61"
                                    />
                                </InputContainer>
                            </Actions>
                            <Actions>
                                <InputContainer>
                                    <Label>E-mail</Label>
                                    <SearchInput
                                        type="email"
                                        placeholder="ernurov07ernur@gmail.com"
                                    />
                                </InputContainer>
                                <InputContainer>
                                    <Label>Страна</Label>
                                    <SearchInput
                                        type="text"
                                        placeholder="Пример: Россия"
                                    />
                                </InputContainer>
                                <InputContainer>
                                    <Label>Город</Label>
                                    <SearchInput
                                        type="text"
                                        placeholder="Пример: Санкт-Петербург"
                                    />
                                </InputContainer>
                            </Actions>
                            <BottomButtonsContainer>
                                <BottomButton>Сохранить</BottomButton>
                            </BottomButtonsContainer>
                        </LeftColumn>
                    </TwoColumn>
                </Container>
                <Footer />
            </AnimationRevealPage>
        </>
    );
};
