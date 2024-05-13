import React, { useState } from "react";
import tw, { styled } from "twin.macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import EmailIllustrationSrc from "images/email-illustration.svg";
import Header from "components/headers/LoginPageHeader";
import Footer from "components/footers/MainFooterWithLinks";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Container = tw.div`relative `;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)(props => [
    tw`md:w-7/12 mt-16 md:mt-0`,
    props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`
    mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight
    text-gray-900 // Цвет текста
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

const EyeIconWrapper = styled.span`
    ${tw`absolute top-0 bottom-0 right-0 flex items-center`}
    margin-top: auto;
    margin-bottom: auto;
    cursor: pointer;
    padding-bottom: 6%;
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
    ${tw`flex justify-between mt-4`}
`;


const StyledLink = styled.a`
    ${tw`text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed`}
    cursor: pointer;
    text-decoration: none;
    &:hover {
        color: #0ABD19; // Зелёный цвет текста при наведении
    }
`;

export default ({
                    subheading = "",
                    heading = <>Авторизация</>,
                    description = "",
                    submitButtonText = "Send",
                    formAction = "#",
                    formMethod = "get",
                    textOnLeft = true,
                }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <Header />
            <Container>
                <TwoColumn>
                    <ImageColumn>
                        <Image imageSrc={EmailIllustrationSrc} />
                    </ImageColumn>
                    <TextColumn textOnLeft={textOnLeft}>
                        <TextContent>
                            <Heading>Авторизация</Heading>
                            <Description>Введите свои данные для входа в систему.</Description>
                            <Form action={formAction} method={formMethod}>
                                <StyledInput type="email" name="email" placeholder="Введите E-mail" />
                                <StyledInputContainer>
                                    <StyledInput
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Введите пароль"
                                    />
                                    <EyeIconWrapper onClick={togglePasswordVisibility}>
                                        {showPassword ? <AiOutlineEye size={25} /> : <AiOutlineEyeInvisible size={25} />}
                                    </EyeIconWrapper>
                                </StyledInputContainer>
                                <SubmitButton type="submit">Войти</SubmitButton>
                                <ButtonGroup>
                                    <StyledLink>Забыли пароль?</StyledLink>
                                    <StyledLink href="register">Зарегистрироваться</StyledLink>
                                </ButtonGroup>
                            </Form>
                        </TextContent>
                    </TextColumn>
                </TwoColumn>
            </Container>
            <Footer />
        </>
    );
};
