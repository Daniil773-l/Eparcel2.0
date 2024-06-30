import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { ReactComponent as PhotoIcon } from './images/icon/Photo.svg';
import { ReactComponent as MailIcon } from './images/icon/Pochto.svg';
import { ReactComponent as Track } from './images/icon/Track.svg';
import { ReactComponent as Insurance } from './images/icon/Insurance.svg';
import { ReactComponent as ransom } from './images/icon/ransom.svg';
import { ReactComponent as Customs } from './images/icon/Customs.svg';
import { ReactComponent as Payment } from './images/icon/Payment.svg';
import { ReactComponent as service } from './images/icon/service.svg';
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
    margin: 20px auto;
    width: 90%;
    max-width: 1200px; /* Adjust this value to reduce the size */
    @media (min-width: 768px) {
        flex-direction: row;
        height: 42vh;
    }
    margin-top: 60px; /* Add margin-top for spacing from header */
`;

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 250px; /* Измените ширину контейнера для табов */
    background: #ffffff;
    border-right: 1px solid #F5F5F5;
    @media (min-width: 768px) {
        width: 250px;
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
    font-size: 25px;
`;

const FormGroup = styled.div`
    ${tw`relative flex flex-col mb-6`}
`;

const Label = styled.label`
    ${tw`mt-1 sm:mt-0 mb-2 font-medium text-secondary-100 leading-loose`}
`;

const CustomSelectWrapper = styled.div`
    position: relative;
    width: 93%;
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
    ${tw`mt-2 first:mt-0  focus:outline-none font-medium transition duration-300 border-b-2`}
    color: #6c757d;
    border-color: transparent;
    border-bottom-color: #adb5bd;
    font-family: inherit;
    width: calc(100% - 50px); /* Make the input element slightly shorter */
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

const CustomOptions = styled.ul`
    ${tw`absolute z-10 w-full mt-1 bg-white shadow-lg rounded-md`}
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid #ddd;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const FormContainer = styled.div`
    ${tw`flex justify-center items-center flex-grow py-4`}
`;

const Form = styled.form`
    ${tw`grid grid-cols-1 gap-4 `}
    width: 100%; /* Ensure the form takes the full width of its container */
    height: 100%; /* Ensure the form takes the full height of the container */
`;

const Container = styled.div`
    ${tw`w-full max-w-3xl p-4 bg-white shadow-lg rounded-lg border`}
    border: 2px solid #0ABD19;
    border-radius: 15px;
    padding: 20px 20px; /* Adjust padding to fit content */
    margin: 20px auto; /* Center the container and add margin-top and bottom for spacing */
    overflow: hidden; /* Hide overflow */
    height: 250px; /* Adjust height to fit content and add spacing */
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 15px;
    justify-content: center;
    margin-top: 20px; /* Reduced margin-top */
`;

const SubmitButton = styled.button`
    ${tw`px-8 py-3 font-medium text-white rounded-full focus:outline-none transition-transform duration-300`}
    background-color: #0ABD19;
    text-decoration: none;
    &:hover {
        background-color: #0ABD50;
        transform: scale(1.05);
    }
`;

const CustomOption = styled.li`
    ${tw`px-4 py-3 text-black cursor-pointer`}
    &:hover {
        background: #f3f4f6;
    }
    ${({ isSelected }) => isSelected && tw`bg-gray-200`}
`;

const ResetButton = styled.button`
    ${tw`px-8 py-3 font-medium text-white rounded-full focus:outline-none transition-transform duration-300`}
    background-color: #0ABD19;
    text-decoration: none;
    &:hover {
        background-color: #0ABD50;
        transform: scale(1.05);
    }
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
                        <Form id="service-form">
                            <FormGroup>
                                <Label htmlFor="package">Выберите посылку</Label>
                                <CustomSelectWrapper>
                                    <CustomSelect id="package" name="package">
                                        <option value="">Выберите посылку</option>
                                        <option value="package1">Посылка 1</option>
                                        <option value="package2">Посылка 2</option>
                                        <option value="package3">Посылка 3</option>
                                    </CustomSelect>
                                </CustomSelectWrapper>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="comments">Комментарий для оператора</Label>
                                <Input id="comments" name="comments" type="text" />
                            </FormGroup>
                        </Form>
                    </FormContainer>
                </Container>
                <ButtonContainer>
                    <SubmitButton type="submit" form="service-form">Отправить заявку</SubmitButton>
                    <ResetButton type="reset" onClick={() => document.getElementById('service-form').reset()}>Сбросить</ResetButton>
                </ButtonContainer>
            </div>
        ),
        Icon: PhotoIcon
    },
    {
        name: "Возврат посылки или товара",
        content: (
            <div>
                <StyledParagraph>Если по каким-то причинам вы пожелаете вернуть посылку, которая была доставлена на адрес нашего склада обратно в магазин или иному продавцу вашего купленного товара, то мы готовы предоставить вам данную услугу. Вам необходимо выбрать в личном кабинете «услуги склада», затем «возврат» указав адрес возврата. Мы выставим вам счет в личном кабинете, после чего вы сможете оплатить за данную услугу отдельно. В стоимость услуги входит упаковка и доставка до адресата.</StyledParagraph>
                <StyledParagraph>Стоимость услуги- платная</StyledParagraph>
                <Highlight>Заявка на услугу склада - Возврат посылки или товара</Highlight>
                <Container>
                    <FormContainer>
                        <Form id="service-form">
                            <FormGroup>
                                <Label htmlFor="package">Выберите посылку</Label>
                                <CustomSelectWrapper>
                                    <CustomSelect id="package" name="package">
                                        <option value="">Выберите посылку</option>
                                        <option value="package1">Посылка 1</option>
                                        <option value="package2">Посылка 2</option>
                                        <option value="package3">Посылка 3</option>
                                    </CustomSelect>
                                </CustomSelectWrapper>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="comments">Комментарий для оператора</Label>
                                <Input id="comments" name="comments" type="text" />
                            </FormGroup>
                        </Form>
                    </FormContainer>
                </Container>
                <ButtonContainer>
                    <SubmitButton type="submit" form="service-form">Отправить заявку</SubmitButton>
                    <ResetButton type="reset" onClick={() => document.getElementById('service-form').reset()}>Сбросить</ResetButton>
                </ButtonContainer>
            </div>
        ),
        Icon: Track
    },
    {
        name: "Страхование",
        content: (
            <div>
                <StyledParagraph>Каждая исходящая посылка подлежит обязательному страхованию на общую сумму оценочной стоимости товаров в каждой посылке. В случае, если ваша посылка не доставлена в течении 30 дней с момента отправки с зарубежного склада или утеряна в процессе доставки по России, то мы вернем вам полную стоимость за доставку и оценочную стоимость товаров в посылке указанную при оформлении. Необходимо заполнить заявку в личном кабинете в разделе «ПРЕТЕНЗИЯ». Срок рассмотрения претензии 24-48 часов.</StyledParagraph>
               <StyledParagraph>Обращаем ваше внимание на лимит страховой суммы оценочной стоимости посылки при выборе службы доставки.</StyledParagraph>
                <StyledParagraph>Стоимость услуги –платная, 3 % от общей стоимости товаров.</StyledParagraph>
                <StyledParagraph>При выборе доставки вашей посылки CDK стоимость услуги - 5%</StyledParagraph>
                <Highlight>Заявка на услугу склада - Страхование</Highlight>
                <Container>
                    <FormContainer>
                        <Form id="service-form">
                            <FormGroup>
                                <Label htmlFor="package">Выберите посылку</Label>
                                <CustomSelectWrapper>
                                    <CustomSelect id="package" name="package">
                                        <option value="">Выберите посылку</option>
                                        <option value="package1">Посылка 1</option>
                                        <option value="package2">Посылка 2</option>
                                        <option value="package3">Посылка 3</option>
                                    </CustomSelect>
                                </CustomSelectWrapper>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="comments">Комментарий для оператора</Label>
                                <Input id="comments" name="comments" type="text" />
                            </FormGroup>
                        </Form>
                    </FormContainer>
                </Container>
                <ButtonContainer>
                    <SubmitButton type="submit" form="service-form">Отправить заявку</SubmitButton>
                    <ResetButton type="reset" onClick={() => document.getElementById('service-form').reset()}>Сбросить</ResetButton>
                </ButtonContainer>
            </div>
        ),
        Icon: Insurance
    },
    {
        name: "Выкуп товаров",
        content: (
            <div>
                <StyledParagraph>Данная услуга дает возможность приобрести товар в других странах напрямую и без каких-либо трудностей с оплатой и не понимая языка. Необходимо заполнить заявку на выкуп товаров в личном кабинете указать все нужные характеристики и ссылку на товар. А все остальное мы сделаем за вас.</StyledParagraph>
                <StyledParagraph>Воспользовшись данной услугой порой общая стоимость товаров, купленная нашим сотрудником, будет дешевле, чем если вы сами будете покупать в интернет-магазинах из Казахстана, так как мы покупаем много и часто, и можем использовать различные скидки и купоны.</StyledParagraph>
                <StyledParagraph>Стоимость услуги – 10% от стоимости товаров, минимальная стоимость -$10</StyledParagraph>
                <Highlight>Заявка на услугу склада - Выкуп товаров</Highlight>
                <Container>
                    <FormContainer>
                        <Form id="service-form">
                            <FormGroup>
                                <Label htmlFor="package">Выберите посылку</Label>
                                <CustomSelectWrapper>
                                    <CustomSelect id="package" name="package">
                                        <option value="">Выберите посылку</option>
                                        <option value="package1">Посылка 1</option>
                                        <option value="package2">Посылка 2</option>
                                        <option value="package3">Посылка 3</option>
                                    </CustomSelect>
                                </CustomSelectWrapper>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="comments">Комментарий для оператора</Label>
                                <Input id="comments" name="comments" type="text" />
                            </FormGroup>
                        </Form>
                    </FormContainer>
                </Container>
                <ButtonContainer>
                    <SubmitButton type="submit" form="service-form">Отправить заявку</SubmitButton>
                    <ResetButton type="reset" onClick={() => document.getElementById('service-form').reset()}>Сбросить</ResetButton>
                </ButtonContainer>
            </div>
        ),
        Icon: ransom
    },
    {
        name: "Таможенное оформление",
        content: (
            <div>
             <StyledParagraph>Для упрощения процедуры оплаты таможенного сбора и пошлины в случае превышение стоимости товаров в посылке, вам будет предложена обязательная услуга по оформлению таможенных услуг. Мы произведем все необходимые оплаты, что сократит время прохождения всего груза, отправленного с зарубежных складов, и соответственно сократит сроки доставки посылки.</StyledParagraph>
             <StyledParagraph>Общую стоимость данной услуги вы можете рассчитать, используя Таможенный калькулятор на нашем сайте.</StyledParagraph>
              <StyledParagraph>Стоимость услуги – платная, 5% от оценочной стоимости вашей посылки плюс таможенная пошлина.</StyledParagraph>
                <Highlight>Заявка на услугу склада - Таможенное оформление</Highlight>
                <Container>
                    <FormContainer>
                        <Form id="service-form">
                            <FormGroup>
                                <Label htmlFor="package">Выберите посылку</Label>
                                <CustomSelectWrapper>
                                    <CustomSelect id="package" name="package">
                                        <option value="">Выберите посылку</option>
                                        <option value="package1">Посылка 1</option>
                                        <option value="package2">Посылка 2</option>
                                        <option value="package3">Посылка 3</option>
                                    </CustomSelect>
                                </CustomSelectWrapper>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="comments">Комментарий для оператора</Label>
                                <Input id="comments" name="comments" type="text" />
                            </FormGroup>
                        </Form>
                    </FormContainer>
                </Container>
                <ButtonContainer>
                    <SubmitButton type="submit" form="service-form">Отправить заявку</SubmitButton>
                    <ResetButton type="reset" onClick={() => document.getElementById('service-form').reset()}>Сбросить</ResetButton>
                </ButtonContainer>
            </div>
        ),
        Icon: Customs
    },
    {
        name: "Оплата и возврат денежных средств",
        content: (
            <div>
                <Title>Оплата </Title>
               <StyledParagraph>Предлагаем различные методы оплаты. Оплата за услуги производиться в различных валютах по курсу платежной системы в рублях. Оплачивается комиссия за оплату от общей суммы согласно нижеприведенным тарифам. Мы принимаем к оплате:</StyledParagraph>
               <StyledParagraph>Карты Казахстана: VISA International, MasterCard Worldwide, UnionPay International, American Express International и Diners Club International.</StyledParagraph>
                <StyledParagraph>Карты Казахстана: MasterCard Worldwide, UnionPay International</StyledParagraph>
                <Highlight>Заявка на услугу склада - Оплата и возврат денежных средств</Highlight>
                <Container>
                    <FormContainer>
                        <Form id="service-form">
                            <FormGroup>
                                <Label htmlFor="package">Выберите посылку</Label>
                                <CustomSelectWrapper>
                                    <CustomSelect id="package" name="package">
                                        <option value="">Выберите посылку</option>
                                        <option value="package1">Посылка 1</option>
                                        <option value="package2">Посылка 2</option>
                                        <option value="package3">Посылка 3</option>
                                    </CustomSelect>
                                </CustomSelectWrapper>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="comments">Комментарий для оператора</Label>
                                <Input id="comments" name="comments" type="text" />
                            </FormGroup>
                        </Form>
                    </FormContainer>
                </Container>
                <ButtonContainer>
                    <SubmitButton type="submit" form="service-form">Отправить заявку</SubmitButton>
                    <ResetButton type="reset" onClick={() => document.getElementById('service-form').reset()}>Сбросить</ResetButton>
                </ButtonContainer>
            </div>
        ),
        Icon: Payment
    },
    {
        name: "Дополнительная услуга",
        content: (
            <div>

                <Highlight>Заявка на услугу склада - Дополнительная услуга</Highlight>
                <Container>
                    <FormContainer>
                        <Form id="service-form">
                            <FormGroup>
                                <Label htmlFor="package">Выберите посылку</Label>
                                <CustomSelectWrapper>
                                    <CustomSelect id="package" name="package">
                                        <option value="">Выберите посылку</option>
                                        <option value="package1">Посылка 1</option>
                                        <option value="package2">Посылка 2</option>
                                        <option value="package3">Посылка 3</option>
                                    </CustomSelect>
                                </CustomSelectWrapper>
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="comments">Комментарий для оператора</Label>
                                <Input id="comments" name="comments" type="text" />
                            </FormGroup>
                        </Form>
                    </FormContainer>
                </Container>
                <ButtonContainer>
                    <SubmitButton type="submit" form="service-form">Отправить заявку</SubmitButton>
                    <ResetButton type="reset" onClick={() => document.getElementById('service-form').reset()}>Сбросить</ResetButton>
                </ButtonContainer>
               </div>
        ),
        Icon: service
    },
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
