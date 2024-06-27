import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { ReactComponent as PhotoIcon } from './images/icon/Photo.svg';
import AnimationRevealPage from "./helpers/AnimationRevealPage";
import RoomHeader from "./components/headers/RoomHeader";
import MainCabinetHeader from "./components/headers/MainCabinetHeader";
import Footer from "./components/footers/MainFooterWithLinks";
import tw from "twin.macro";

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 15px;
    box-shadow: 2px 2px 10px rgba(45, 45, 45, 0.08);
    overflow: hidden;
    margin: 20px;
    @media (min-width: 768px) {
        flex-direction: row;
        height: 83vh;
    }
`;

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #ffffff;
    border-right: 1px solid #F5F5F5;
    @media (min-width: 768px) {
        width: 400px;
    }
`;

const TabButton = styled.button`
    display: flex;
    align-items: center;
    background: ${({ active }) => (active ? '#DDF2E6' : 'transparent')};
    color: #000000;
    border: none;
    padding: 10px 22px;
    font-size: 16px;
    line-height: 18px;
    font-family: 'Gilroy Medium', sans-serif;
    cursor: pointer;
    text-align: left;
    &:hover {
        background-color: #DDF2E6;
    }
    svg {
        margin-right: 20px;
        width: 30px;
        height: 30px;
    }
`;

const IconContainer = styled.span`
    display: flex;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 24px;
    line-height: 29px;
    color: #2D2D2D;
    margin-bottom: 20px;
    font-weight: 700;
    font-family: 'Gilroy Medium', sans-serif;
`;

const StyledParagraph = styled.p`
    padding: 0;
    margin-bottom: 30px;
    font-size: 20px;
    line-height: 30px;
    color: #2D2D2D;
    font-family: 'Gilroy Medium', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    box-sizing: border-box;
    outline: none;
    cursor: default;
    text-align: left;
`;

const Highlight = styled.span`
    color: #0ABD19;
    font-weight: bold;
    font-size: 40px;
`;

const FormGroup = styled.div`
    ${tw`relative flex flex-col mb-6`}
`;

const Label = styled.label`
    ${tw`mt-1 sm:mt-0 mb-2 font-medium text-secondary-100 leading-loose`}
`;

const CustomSelectWrapper = styled.div`
    position: relative;
    width: 100%;
`;

const CustomSelect = styled.select`
    ${tw`mt-2 w-full px-4 py-3 bg-white text-left rounded-md shadow-sm border border-gray-300 cursor-pointer`}
    color: #6c757d;
    font-family: inherit;
    &:hover {
        border-color: #0ABD19;
    }
`;

const Input = styled.input`
    ${tw`mt-2 first:mt-0 py-3 focus:outline-none font-medium transition duration-300 border-b-2`}
    color: #6c757d;
    border-color: transparent;
    border-bottom-color: #adb5bd;
    font-family: inherit;
    &::placeholder {
        color: #adb5bd;
    }
    &:hover {
        border-bottom-color: #0ABD19;
    }
    &:focus {
        border-bottom-color: #0ABD19;
    }
`;

const FormContainer = styled.div`
    ${tw`flex justify-center items-center flex-grow py-10`}
`;

const Form = styled.form`
    ${tw`grid grid-cols-1 gap-6`}
`;

const Container = styled.div`
    ${tw`w-full max-w-4xl p-8 bg-white shadow-lg rounded-lg border`}
    border: 2px solid #1BA557;
    border-radius: 15px;
    padding: 40px 37px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const SubmitButton = styled.button`
    ${tw`px-6 py-3 bg-green-600 text-white rounded-md`}
    font-size: 16px;
`;

const ResetButton = styled.button`
    ${tw`px-6 py-3 bg-gray-200 text-gray-700 rounded-md`}
    font-size: 16px;
`;

const ContentContainer = styled.div`
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    transition: opacity 0.5s ease;
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
`;

const tabs = [
    {
        name: "Фото товаров в посылке",
        content: (
            <div>
                <StyledParagraph>Предоставить данную услугу. Вам необходимо зайти в личный кабинет, в разделе «услуги склада» выбрать нужную вам посылку, затем нажать на услугу «фото товаров в посылке». В течении 24-48 часов мы выполним данную услугу.</StyledParagraph>
                <StyledParagraph>В стоимость данной услуги входит 3-5 фотографий всех товаров в посылке, а также ваши товары сверяются на общее соответствие с описанием в личном кабинете. В случае несоответствия товаров мы уведомим вас об этом в личном кабинете.</StyledParagraph>
                <StyledParagraph>Стоимость услуги – 199 рублей (3-5 фото)</StyledParagraph>
                <Highlight>Заявка на услугу склада - Фото товаров в посылке</Highlight>
                <Container>
                    <FormContainer>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="package">Выберите посылку</Label>
                                <CustomSelectWrapper>
                                    <CustomSelect id="package">
                                        <option value="">Выберите посылку</option>
                                        <option value="package1">Посылка 1</option>
                                        <option value="package2">Посылка 2</option>
                                        <option value="package3">Посылка 3</option>
                                    </CustomSelect>
                                </CustomSelectWrapper>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="trackingNumber">Укажите номер посылки</Label>
                                <Input id="trackingNumber" type="text" />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="comments">Комментарий для оператора</Label>
                                <Input id="comments" type="text" />
                            </FormGroup>
                            <ButtonContainer>
                                <SubmitButton type="submit">Отправить заявку</SubmitButton>
                                <ResetButton type="reset">Сбросить</ResetButton>
                            </ButtonContainer>
                        </Form>
                    </FormContainer>
                </Container>
            </div>
        ),
        Icon: PhotoIcon
    },
    // Add other tabs content here
];

export default function App() {
    const [activeTab, setActiveTab] = useState(0);
    const [activeContent, setActiveContent] = useState(tabs[0].content);
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        setIsActive(false);
        setTimeout(() => {
            setActiveContent(tabs[activeTab].content);
            setIsActive(true);
        }, 500); // Wait for the fade-out effect to finish
    }, [activeTab]);

    return (
        <AnimationRevealPage>
            <RoomHeader />
            <MainCabinetHeader />
            <Layout>
                <SidebarContainer>
                    {tabs.map((tab, index) => (
                        <TabButton
                            key={index}
                            active={index === activeTab}
                            onClick={() => setActiveTab(index)}
                        >
                            <IconContainer>{<tab.Icon active={index === activeTab} />}</IconContainer>
                            {tab.name}
                        </TabButton>
                    ))}
                </SidebarContainer>
                <ContentContainer isActive={isActive}>
                    {activeContent}
                </ContentContainer>
            </Layout>
            <Footer />
        </AnimationRevealPage>
    );
}
