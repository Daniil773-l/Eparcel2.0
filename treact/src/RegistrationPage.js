import React, { useState } from "react";
import tw, { styled } from "twin.macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import Header from "components/headers/LoginPageHeader";
import Footer from "components/footers/MainFooterWithLinks";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Container = tw.div`relative flex items-center justify-center min-h-screen`;
const FormContainer = tw.div`max-w-sm`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const TextColumn = styled(Column)(props => [
    tw`mt-16 md:mt-0`,
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = styled(SectionHeading)`
    ${tw`mt-2 text-center text-2xl sm:text-3xl lg:text-4xl leading-tight`}
    color: #2D2D2D; // Dark grey color
    font-family: 'Gilroy Semibold', sans-serif; // Specifying the font family, with fallback to sans-serif
    font-weight: 600; // Semibold weight, lighter than 'font-black'
`;

const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`
const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col max-w-sm mx-auto md:mx-0`;

const StyledInputContainer = styled.div`
    ${tw`relative`}
`;

const StyledInput = styled.input`
    ${tw`w-full py-3 border-b-2 border-gray-300 focus:outline-none focus:border-green-500 transition-all`}
    background: none;
    border: none;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    &:focus::placeholder {
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }
`;

const SubmitButton = styled.button`
    ${tw`w-full relative right-0 top-0 bottom-0 bg-green-500 text-white font-bold my-4 rounded-full py-4 flex items-center justify-center leading-none focus:outline-none transition duration-300`}
    background-color: #0ABD19;
    border: none;
    margin-top: 20px;
    &:hover {
        background-color: #0ABD50;
        transform: scale(1.1);
    }
`;

const ButtonGroup = styled.div`
    ${tw`flex justify-center mt-4`}
`;


const StyledLink = styled.a`
    ${tw`text-center text-sm md:text-base lg:text-lg font-medium leading-relaxed text-gray-500`}
    cursor: pointer;
    &:hover {
        color: #9CA3AF; // Бледно-серый цвет текста при наведении
    }
`;

const CheckboxGroup = styled.div`
    ${tw`flex items-center mt-4`}
`;

const CheckboxLabel = styled.label`
    ${tw`cursor-pointer flex items-center`}
    background-color: transparent; // Removing background color
    border: none; // Removing border
    padding: 8px 12px;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
`;


const CheckboxInput = styled.input`
    ${tw`h-5 w-5 text-green-500`}
`;

const Checkmark = styled.span`
    ${tw`mr-2`}
    font-size: 18px;
    color: transparent;
    transition: color 0.2s ease-in-out;
`;

const CheckboxText = styled.span`
    ${tw`text-sm`}
    a {
        color: #1BA557; // Green text color for links
        text-decoration: none; // Optional: removes underline from links

        &:hover {
            text-decoration: underline; // Optional: adds underline on hover
        }
    }
`;

const CheckmarkIcon = styled.span`
    ${tw`text-green-500`}
`;

export default ({
                    subheading = "",
                    heading = <>Регистрация</>,
                    description = "",
                    submitButtonText = "Send",
                    formAction = "#",
                    formMethod = "get",
                    textOnLeft = true,
                }) => {
    const [isChecked, setIsChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <Header />
            <Container>
                <FormContainer>
                    <TextColumn textOnLeft={textOnLeft}>
                        <TextContent>
                            <Heading>Регистрация</Heading>
                            <Form action={formAction} method={formMethod}>
                                <StyledInput type="text" name="firstName" placeholder="Имя" />
                                <StyledInput type="text" name="lastName" placeholder="Фамилия" />
                                <StyledInput type="tel" name="phone" placeholder="Телефон" />
                                <StyledInput type="email" name="email" placeholder="Введите E-mail" />
                                <StyledInput type="password" name="password" placeholder="Введите пароль" />
                                <StyledInput type="password" name="confirmPassword" placeholder="Подтвердите пароль" />
                                <CheckboxGroup>
                                    <CheckboxInput type="checkbox" id="agreement" checked={isChecked} onChange={toggleCheckbox}/>
                                    <CheckboxLabel htmlFor="agreement" onClick={toggleCheckbox}>
                                        <CheckmarkIcon/>
                                        <CheckboxText>
                                            Я согласен с <a href="/user-agreement">условиями пользовательского соглашения</a> и с <a href="/privacy-policy">политикой конфиденциальности</a>.
                                        </CheckboxText>
                                    </CheckboxLabel>
                                </CheckboxGroup>
                                <SubmitButton type="submit">Зарегистрироваться</SubmitButton>
                                <ButtonGroup>
                                    <StyledLink>Уже есть аккаунт</StyledLink>
                                </ButtonGroup>
                            </Form>
                        </TextContent>
                    </TextColumn>
                </FormContainer>
            </Container>
            <Footer />
        </>
    );
};
