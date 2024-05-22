import React, { useState } from "react";
import InputMask from 'react-input-mask';
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";

const Container = tw.div`relative bg-white py-16`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-12 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(({ textOnLeft }) => [
    tw`md:w-6/12 mt-16 md:mt-0`,
    textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(({ imageSrc }) => [
    `background-image: url("${imageSrc}");`,
    tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;
const Input = styled.input`
    ${tw`mt-8 first:mt-0 py-3 focus:outline-none font-medium transition duration-300 border-b-2`};
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

const PhoneInput = styled(InputMask)`
    ${tw`mt-8 first:mt-0 py-3 focus:outline-none font-medium transition duration-300 border-b-2`};
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

const SelectWrapper = styled.div`
    ${tw`relative mt-8`};
`;

const SelectButton = styled.button`
    ${tw`appearance-none w-full px-4 py-3 border-b-2 border-gray-300 bg-white text-left`};
    border-top: 0;
    border-left: 0;
    border-right: 0;
    color: ${({ selected }) => (selected ? '#6c757d' : '#adb5bd')};
    font-family: inherit;
    &:hover {
        border-bottom-color: #0ABD19;
    }
    &:focus {
        outline: none;
        border-bottom-color: #0ABD19;
    }
`;

const Dropdown = styled.div`
    ${tw`absolute mt-1 w-full rounded-md bg-white z-10`};
    box-shadow: none;
    border-bottom: 2px solid #adb5bd;
`;

const Option = styled.div`
    ${tw`cursor-pointer px-4 py-2 text-gray-700 hover:bg-gray-200`};
`;

const Textarea = styled(Input).attrs({ as: "textarea" })`
    ${tw`h-24 mt-8`}
`;

const SubmitButton = styled(PrimaryButtonBase)`
    ${tw`inline-block mt-12`}
    background-color: #0ABD19;
    &:hover {
        background-color: #098E14;
    }
`;
const Highlight = styled.span`
    color: #0ABD19;  // Green color for emphasis
`;

const optionsSubject = [
    { value: "", label: "Выберите тему обращения", disabled: true },
    { value: "insurance", label: "Страховка" },
    { value: "delivery", label: "Доставка" },
    { value: "packaging", label: "Упаковка" },
    { value: "customs", label: "Таможня" },
    { value: "complaint", label: "Претензия" },
    { value: "warehouse", label: "Услуги склада" },
    { value: "refund", label: "Возврат денег" },
    { value: "return", label: "Возврат товаров" },
    { value: "return", label: "Хранения" },
    { value: "return", label: "Другое" },
    { value: "return", label: "Бизнес" },
];

const optionsContact = [
    { value: "", label: "Выберите удобный способ связи", disabled: true },
    { value: "phone", label: "Телефон" },
    { value: "email", label: "Email" },
];

const ContactForm = ({
                         heading = (
                             <>
                                 Не стесняйтесь <Highlight> связаться</Highlight> с нами
                             </>
                         ),
                         submitButtonText = "Отправить",
                         formAction = "#",
                         formMethod = "get",
                         textOnLeft = true,
                     }) => {
    const [selectedSubject, setSelectedSubject] = useState("");
    const [subjectDropdownOpen, setSubjectDropdownOpen] = useState(false);

    const [selectedContactMethod, setSelectedContactMethod] = useState("");
    const [contactDropdownOpen, setContactDropdownOpen] = useState(false);

    const handleSelectSubject = (value) => {
        setSelectedSubject(value);
        setSubjectDropdownOpen(false);
    };

    const handleSelectContactMethod = (value) => {
        setSelectedContactMethod(value);
        setContactDropdownOpen(false);
    };

    const toggleDropdown = (event, setDropdownOpen) => {
        event.preventDefault();
        setDropdownOpen((prev) => !prev);
    };

    return (
        <Container>
            <TwoColumn>
                <TextColumn textOnLeft={textOnLeft}>
                    <TextContent>
                        <Heading>{heading}</Heading>
                        <Form action={formAction} method={formMethod}>
                            <Input type="text" name="name" placeholder="Имя" />
                            <PhoneInput
                                mask="+7 (999) 999-99-99"
                                placeholder="Номер телефона"
                                maskChar=" "
                            />
                            <Input type="email" name="email" placeholder="Email" />
                            <SelectWrapper>
                                <SelectButton
                                    selected={selectedSubject}
                                    onClick={(event) => toggleDropdown(event, setSubjectDropdownOpen)}
                                >
                                    {optionsSubject.find(option => option.value === selectedSubject)?.label || "Выберите тему обращения"}
                                </SelectButton>
                                {subjectDropdownOpen && (
                                    <Dropdown>
                                        {optionsSubject.map((option) => (
                                            <Option
                                                key={option.value}
                                                onClick={() => handleSelectSubject(option.value)}
                                                style={{ color: option.disabled ? "#ccc" : "#000", pointerEvents: option.disabled ? "none" : "auto" }}
                                            >
                                                {option.label}
                                            </Option>
                                        ))}
                                    </Dropdown>
                                )}
                            </SelectWrapper>
                            <SelectWrapper>
                                <SelectButton
                                    selected={selectedContactMethod}
                                    onClick={(event) => toggleDropdown(event, setContactDropdownOpen)}
                                >
                                    {optionsContact.find(option => option.value === selectedContactMethod)?.label || "Выберите удобный способ связи"}
                                </SelectButton>
                                {contactDropdownOpen && (
                                    <Dropdown>
                                        {optionsContact.map((option) => (
                                            <Option
                                                key={option.value}
                                                onClick={() => handleSelectContactMethod(option.value)}
                                                style={{ color: option.disabled ? "#ccc" : "#000", pointerEvents: option.disabled ? "none" : "auto" }}
                                            >
                                                {option.label}
                                            </Option>
                                        ))}
                                    </Dropdown>
                                )}
                            </SelectWrapper>
                            <Textarea name="message" placeholder="Сообщение" />
                            <SubmitButton type="submit">{submitButtonText}</SubmitButton>
                        </Form>
                    </TextContent>
                </TextColumn>
                <ImageColumn>
                    <Image imageSrc={EmailIllustrationSrc} />
                </ImageColumn>
            </TwoColumn>
        </Container>
    );
};

export default ContactForm;
