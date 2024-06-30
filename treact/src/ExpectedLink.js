import React, { useState } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import AnimationRevealPage from "./helpers/AnimationRevealPage";
import RoomHeader from "./components/headers/RoomHeader";
import MainCabinetHeader from "./components/headers/MainCabinetHeader";
import { SectionHeading, Subheading as SubheadingBase, ExpecteLink } from "components/misc/Headings.js";
import InfoIconSrc from "./images/info.png";

const PageContainer = styled.div`
    ${tw`min-h-screen flex flex-col`}
`;

const HighlightedText = styled.span`
    ${tw`text-primary-500`}
    color: #0ABD19;
`;

const FormContainer = styled.div`
    ${tw`flex justify-center items-center flex-grow py-10`}
`;

const Container = styled.div`
    ${tw`w-full max-w-6xl p-8 bg-white shadow-lg rounded-lg border`}
    border: 2px solid #1BA557;
    border-radius: 15px;
    padding: 60px 57px;
`;

const Title = styled.h2`
    ${tw`text-2xl font-bold mb-8`}
    color: ${({ step }) => (step === 1 ? '#1BA557' : 'black')};
    font-family: 'Gilroy Medium';
`;

const Form = styled.form`
    ${tw`grid grid-cols-2 gap-6`}
`;

const FormGroup = styled.div`
    ${tw`relative flex flex-col mb-6`}
`;

const Label = styled.label`
    ${tw`mt-1 sm:mt-0 mb-2 font-medium text-secondary-100 leading-loose`}
`;

const Text = styled.h6`
    ${tw`text-gray-500 font-bold tracking-widest text-lg`}
    margin-top: 20px;
    margin-bottom: 50px;
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

const InputSpis = styled.input`
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

const TextArea = styled(InputSpis).attrs({ as: "textarea" })`
    ${tw`mt-2 w-full`}
    height: 35px;
`;

const CustomSelectWrapper = styled.div`
    position: relative;
    width: 100%;
`;

const CustomSelect = styled.div`
    ${tw`mt-2 w-full px-4 py-3 bg-white text-left rounded-md shadow-sm border border-gray-300 cursor-pointer`}
    color: #6c757d;
    font-family: inherit;
    &:hover {
        border-color: #0ABD19;
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

const CustomOption = styled.li`
    ${tw`px-4 py-3 text-black cursor-pointer`}
    &:hover {
        background: #f3f4f6;
    }
    ${({ isSelected }) => isSelected && tw`bg-gray-200`}
`;

const SelectArrow = styled.div`
    ${tw`absolute right-0 top-0 h-full flex items-center px-2 text-gray-700 pointer-events-none`}
    &::after {
        content: '▾';
        font-size: 1.5em;
        color: #0ABD19;
    }
`;

const TextAreaContainer = styled.div`
    ${tw`relative`}
`;

const Tooltip = styled.div`
    ${tw`absolute left-0 w-64 p-2 bg-white text-black opacity-0 rounded-lg transition-opacity duration-300`}
    top: 2rem;
    white-space: pre-wrap;
    pointer-events: none;
    visibility: hidden;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    z-index: 10;
`;

const IconContainer = styled.div`
    ${tw`absolute right-0 mt-5 transform translate-y-3 cursor-pointer`}
    width: 20px;
    margin-top: 60px;
    height: 20px;
    &:hover .tooltip {
        opacity: 1;
        visibility: visible;
    }
    img {
        width: 20px;
        height: 20px;
    }
`;

const InfoIconComent = styled(IconContainer)`margin-top: -35px`;

const ButtonContainer = styled.div`
    ${tw`flex justify-center mt-10`}
    gap: 20px;
`;

const Button = styled.button`
    ${tw`px-8 py-3 font-bold text-white rounded-full focus:outline-none transition-transform duration-300`}
    background-color: #0ABD19;
    &:hover {
        background-color: #0ABD50;
        transform: scale(1.05);
    }
`;

const WhiteButton = styled(Button)`
    ${tw`text-green-600 bg-white border border-green-600`}
    &:hover {
        background-color: #f0f0f0;
    }
`;

const Actions = styled.div`
    ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
    button {
        ${tw`w-[200px] sm:relative sm:right-0 sm:top-0 sm:bottom-0 bg-green-500 text-white font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:leading-none focus:outline-none transition duration-300`}
        background-color: #0ABD19; // Bright green background
        border: none;
        &:hover,
        &:focus {
            background-color: #0ABD50;
            transform: scale(1.1);
        }
    }
`;

const StepTitle = tw(ExpecteLink)`w-full mt-2 mb-4`;

const ProductForm = ({ index }) => {
    return (
        <>
            <StepTitle><HighlightedText>Товар {index + 1}</HighlightedText></StepTitle>
            <Form>
                <FormGroup style={{ gridColumn: 'span 1' }}>
                    <Label htmlFor={`productType-${index}`}>Тип товара</Label>
                    <Input id={`productType-${index}`} type="text" placeholder="Введите тип товара" />
                    <IconContainer>
                        <img src={InfoIconSrc} alt="Info icon" />
                        <Tooltip className="tooltip">"Одежда из США 12.08.2022".</Tooltip>
                    </IconContainer>
                </FormGroup>
                <FormGroup style={{ gridColumn: 'span 1' }}>
                    <Label htmlFor={`productBrand-${index}`}>Бренд товара</Label>
                    <Input id={`productBrand-${index}`} type="text" placeholder="Введите бренд товара" />
                    <IconContainer>
                        <img src={InfoIconSrc} alt="Info icon" />
                        <Tooltip className="tooltip">Пример: New balance</Tooltip>
                    </IconContainer>
                </FormGroup>
                <FormGroup style={{ gridColumn: 'span 1' }}>
                    <Label htmlFor={`productColor-${index}`}>Цвет и размер</Label>
                    <Input id={`productColor-${index}`} type="text" placeholder="Введите цвет и размер" />
                    <IconContainer>
                        <img src={InfoIconSrc} alt="Info icon" />
                        <Tooltip className="tooltip">Пример: Green, 6S</Tooltip>
                    </IconContainer>
                </FormGroup>
                <FormGroup style={{ gridColumn: 'span 1' }}>
                    <Label htmlFor={`productQuantity-${index}`}>Количество товара(ов)</Label>
                    <Input id={`productQuantity-${index}`} type="number" placeholder="Введите количество" />
                    <IconContainer>
                        <img src={InfoIconSrc} alt="Info icon" />
                        <Tooltip className="tooltip">Пример: 2</Tooltip>
                    </IconContainer>
                </FormGroup>
                <FormGroup style={{ gridColumn: 'span 1' }}>
                    <Label htmlFor={`productPrice-${index}`}>Стоимость товара (за шт)</Label>
                    <Input id={`productPrice-${index}`} type="text" placeholder="Введите стоимость" />
                    <IconContainer>
                        <img src={InfoIconSrc} alt="Info icon" />
                        <Tooltip className="tooltip">Пример: 14$</Tooltip>
                    </IconContainer>
                </FormGroup>
                <FormGroup style={{ gridColumn: 'span 1' }}>
                    <Label htmlFor={`productName-${index}`}>Назване товара на (англ)</Label>
                    <Input id={`productName-${index}`} type="text" placeholder="Введите название товара" />
                    <IconContainer>
                        <img src={InfoIconSrc} alt="Info icon" />
                        <Tooltip className="tooltip">Пример: New balance</Tooltip>
                    </IconContainer>
                </FormGroup>
                <FormGroup style={{ gridColumn: 'span 2' }}>
                    <Label htmlFor={`productLink-${index}`}>Ссылка на товар</Label>
                    <Input id={`productLink-${index}`} type="text" placeholder="Введите ссылку на товар" />
                    <IconContainer>
                        <img src={InfoIconSrc} alt="Info icon" />
                        <Tooltip className="tooltip">Пример: https://www.newbalance.com/pd/made-in-usa-990v6/M990V6-MPS.html</Tooltip>
                    </IconContainer>
                </FormGroup>
            </Form>
        </>
    );
};

const ExpectedLink = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Склад не выбран');
    const [products, setProducts] = useState([]);

    const addProduct = () => {
        setProducts([...products, {}]);
    };

    const resetForm = () => {
        setSelectedOption('Склад не выбран');
        setProducts([]);
    };

    const options = ['Склад не выбран', 'США', 'Турция'];

    return (
        <AnimationRevealPage>

            <MainCabinetHeader />
            <PageContainer>
                <FormContainer>
                    <div style={{ width: '100%', maxWidth: '1280px' }}>
                        <StepTitle active={true}><HighlightedText>Шаг 1. </HighlightedText>Заполните информацию о посылке</StepTitle>

                        <Container>

                            <Form>
                                <FormGroup>
                                    <Label htmlFor="parcelName">Название посылки</Label>
                                    <Input id="parcelName" type="text" placeholder="Введите название посылки" />
                                    <IconContainer>
                                        <img src={InfoIconSrc} alt="Info icon" />
                                        <Tooltip className="tooltip">Посылку можно назвать для удобства ориентира среди других, вами заказанных, посылок. Например: "Одежда из США 12.08.2022".</Tooltip>
                                    </IconContainer>
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="warehouse">Выберите склад</Label>
                                    <CustomSelectWrapper>
                                        <CustomSelect onClick={() => setIsOpen(!isOpen)}>
                                            {selectedOption}
                                            <SelectArrow />
                                        </CustomSelect>
                                        {isOpen && (
                                            <CustomOptions>
                                                {options.map(option => (
                                                    <CustomOption
                                                        key={option}
                                                        onClick={() => {
                                                            setSelectedOption(option);
                                                            setIsOpen(false);
                                                        }}
                                                        isSelected={option === selectedOption}
                                                    >
                                                        {option}
                                                    </CustomOption>
                                                ))}
                                            </CustomOptions>
                                        )}
                                    </CustomSelectWrapper>
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="trackingNumber">Трек-номер</Label>
                                    <Input id="trackingNumber" type="text" placeholder="Введите трек-номер" />
                                    <IconContainer>
                                        <img src={InfoIconSrc} alt="Info icon" />
                                        <Tooltip className="tooltip"> При оформлении заказа в интернет-магазине, вам необходимо получить трек-номер и указать здесь</Tooltip>
                                    </IconContainer>
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="storeName">Название магазина (на англ.)</Label>
                                    <Input id="storeName" type="text" placeholder="Укажите название магазина на английском языке" />
                                    <IconContainer>
                                        <img src={InfoIconSrc} alt="Info icon" />
                                        <Tooltip className="tooltip">Информация о названии магазина</Tooltip>
                                    </IconContainer>
                                </FormGroup>

                                <FormGroup style={{ gridColumn: 'span 2' }}>
                                    <Label htmlFor="comment">Комментарий для оператора</Label>
                                    <TextAreaContainer>
                                        <TextArea id="comment" placeholder="Оставьте комментарий для оператора" rows="4" />
                                        <InfoIconComent>
                                            <img src={InfoIconSrc} alt="Info icon" />
                                            <Tooltip className="tooltip">Если вам потребуется переупаковка для уменьшения стоимости доставки - можете указать тут.</Tooltip>
                                        </InfoIconComent>
                                    </TextAreaContainer>
                                </FormGroup>
                            </Form>
                        </Container>
                    </div>
                </FormContainer>

                <FormContainer>
                    <div style={{ width: '100%', maxWidth: '1280px' }}>
                        <StepTitle active={false}><HighlightedText>Шаг 2.</HighlightedText> Добавьте информацию о товаре</StepTitle>
                        <Container>

                            <Text>
                                Пожалуйста, внимательно опишите каждый товар в заказе. Эти данные будут использоваться для оформления таможенной декларации.
                            </Text>
                            {products.map((_, index) => (
                                <ProductForm key={index} index={index} />
                            ))}
                            <Actions>
                                <button type="button" onClick={addProduct}>+ Добавить товар</button>
                            </Actions>
                        </Container>
                    </div>
                </FormContainer>

                <ButtonContainer>
                    <Button type="button">Сохранить посылку</Button>
                    <WhiteButton type="button" onClick={resetForm}>Сбросить</WhiteButton>
                </ButtonContainer>
            </PageContainer>
        </AnimationRevealPage>
    );
};

export default ExpectedLink;
