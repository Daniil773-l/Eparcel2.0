import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';
import Questions from 'images/Questions.svg';

const Container = tw.div`relative flex flex-col items-center justify-start min-h-screen bg-white p-8 pt-24`; // Изменен отступ сверху
const ContentContainer = tw.div`flex flex-row gap-x-12 w-full max-w-6xl`;


const InfoContainer = tw.div`w-full max-w-xs mr-20`; //
const FormContainer = tw.div`w-full md:w-auto max-w-md p-8 border-solid border-green-500 border-2 rounded-lg`; // Изменено на w-auto и добавлено свойство md:w-auto


const Heading = tw.h1`text-2xl font-bold text-green-500 mb-2 text-center`; // Выравнивание по центру
const InfoHeading = styled.h1`
    ${tw`text-3xl font-bold text-black mb-4`}
    font-family: 'Gilroy Semibold';
    color: #2D2D2D;
`;

const Image = styled.img`
    max-width: 100%; // Максимальная ширина изображения равна ширине контейнера
    height: auto; // Автоматическое масштабирование высоты для сохранения пропорций
`;

const ImageContainer = tw.div`w-full md:w-auto flex justify-end items-center`; // Изменены свойства

const Description = styled.p`
    ${tw`text-sm text-gray-600 mb-2 text-center`}
    font-family: 'Gilroy Semibold';
    font-size: 16px;
    font-weight: 500;
    color: #2D2D2D;
`;


const DescriptionContact = tw.p`text-lg text-gray-500 mb-2`;
const ContactInfo = styled.span`
    color: #2D2D2D;
    &:hover {
        color: green;
    }
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
`;

const IconLink = styled.a`
    margin-right: 10px; // Расстояние между иконками
`;

const Icon = styled.img`
    width: 24px;
    height: 24px;
    filter: grayscale(100%); // Бледно-серый цвет
    transition: filter 0.3s ease; // Плавное изменение цвета при наведении
    &:hover {
        filter: none; // Отмена фильтрации при наведении
    }
`;

const Form = tw.form`flex flex-col space-y-6`;
const InputRow = tw.div`flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3`; // Изменено на flex-col для правильного расположения на мобильных устройствах

const StyledInput = styled.input`
    ${tw`flex-1 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-green-500 transition-all`}
    background: none;
    border: none;
    border-bottom: 1px solid #ccc;
    &:focus::placeholder {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }
`;

const Select = styled.select`
    ${tw`flex-1 py-3 border-b-2 border-gray-300 focus:outline-none focus:border-green-500 transition-all`}
    appearance: none;
    background: none;
    border: none;
    border-bottom: 1px solid #ccc;
`;

const TextArea = styled(StyledInput).attrs({ as: 'textarea' })`
    ${tw`h-24`}
`;

const ButtonAndLegalContainer = tw.div`flex flex-col md:flex-row items-center justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-2`; // Изменена разметка на flex для правильного выравнивания
const SubmitButton = styled.button`
    ${tw`py-4 w-full max-w-xs bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors duration-300`}
    border: none;
`;

const LegalText = styled.p`
    ${tw`text-xs text-gray-500 md:w-full text-center md:text-left`} // Изменена ширина и выравнивание текста
`;

const GreenLink = styled.a`
    ${tw`text-green-500 hover:text-green-600`}
    text-decoration: none;
`;


export default function ContactForm() {
    const [topic, setTopic] = useState('');
    const [contactMethod, setContactMethod] = useState('');

    return (
        <>

            <Container>
                <ContentContainer>

                    <FormContainer>
                                <Heading>Остались вопросы?</Heading>
                                <Description>Укажите ваши контактные данные, выберите способ <br/>
                                    связи и подробнее о Вашем вопросе, a мы <br/>
                                    свяжемся с Вами в ближайшее время.</Description>
                                <Form>
                                    <StyledInput type="text" placeholder="Ваше имя"/>
                                    <InputRow>
                                        <StyledInput type="tel" placeholder="Телефон"/>
                                        <StyledInput type="email" placeholder="E-mail"/>
                                    </InputRow>
                                    <Select value={topic} onChange={e => setTopic(e.target.value)}>
                                        <option value="">Выберите тему обращения</option>
                                        <option value="dostavka">Доставка</option>
                                        <option value="upakovka">Упаковка</option>
                                        <option value="tamozhnya">Таможня</option>
                                        <option value="pretentsiya">Претензия</option>
                                        <option value="uslugi_sklada">Услуги склада</option>
                                        <option value="vozvrat_deneg">Возврат денег</option>
                                        <option value="vozvrat_tovarov">Возврат товаров</option>
                                        <option value="hranenie">Хранение</option>
                                        <option value="strakhovka">Страховка</option>
                                        <option value="drugoe">Другое</option>
                                        <option value="biznes">Бизнес</option>
                                    </Select>
                                    <Select value={contactMethod} onChange={e => setContactMethod(e.target.value)}>
                                        <option value="">Выберите удобный способ связи</option>
                                        <option value="phone">Телефон</option>
                                        <option value="email">E-mail</option>
                                        <option value="sms">Другое</option>
                                    </Select>
                                    <TextArea placeholder="Сообщение"/>
                                    <ButtonAndLegalContainer>
                                        <SubmitButton type="submit">Отправить</SubmitButton>
                                        <LegalText>
                                            Нажимая кнопку «Отправить», Вы принимаете <GreenLink href="/user-agreement">условия
                                            пользовательского соглашения</GreenLink> и даете согласие на <GreenLink
                                            href="/data-processing">обработку своих персональных данных</GreenLink>.
                                        </LegalText>
                                    </ButtonAndLegalContainer>
                                </Form>
                    </FormContainer>
                </ContentContainer>
            </Container>

        </>
);
}
