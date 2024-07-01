import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-line
import illustration from "images/signup-illustration.svg";
import logo from "images/logo.svg";
import googleIconImageSrc from "images/google-icon.png";
import twitterIconImageSrc from "images/twitter-icon.png";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";
import { Link } from "react-router-dom";
import InputMask from 'react-input-mask';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./FireBaseConfig"; // Import Firestore

const Container = styled(ContainerBase)`
    ${tw`min-h-screen bg-white text-white font-medium flex justify-center -m-8`}
`;
const Content = tw.div`
    max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 
    shadow-lg sm:rounded-lg flex justify-center flex-1
`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const SocialButtonsContainer = tw.div`flex flex-col items-center`;
const SocialButton = styled.a`
    ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
    .iconContainer {
        ${tw`bg-white p-2 rounded-full`}
    }
    .icon {
        ${tw`w-4`}
    }
    .text {
        ${tw`ml-4`}
    }
`;

const DividerTextContainer = tw.div`my-2 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto w-full max-w-sm`;
const Input = styled.input`
    ${tw`w-full px-4 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-8 first:mt-12`}
`;

const MaskedInput = styled(InputMask)`
    ${tw`w-full px-4 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-8`}
`;

const SubmitButton = styled.button`
    ${tw`mt-8 tracking-wide font-semibold text-gray-100 py-3 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
    background-color: #0ABD19;
    width: 110%; /* Fixed width for the button */
    &:hover {
        background-color: #067D10; /* Change background color on hover */
    }
    .icon {
        ${tw`w-6 h-6 -ml-2`}
    }
    .text {
        ${tw`ml-3`}
    }
`;
const IllustrationContainer = styled.div`
    ${tw`sm:rounded-r-lg flex-1 text-center hidden lg:flex justify-center`}
    background-color: rgb(255, 255, 255);
`;
const IllustrationImage = styled.div`
    ${props => `background-image: url("${props.imageSrc}");`}
    ${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
`;
const StyledLink = styled(Link)`
    color: #0ABD19;
    &:hover {
        color: #067D10;
    }
    &:active, &:visited {
        color: #0ABD19;
    }
`;

export default ({
                    logoLinkUrl = "#",
                    illustrationImageSrc = illustration,
                    headingText = "Регистрация",
                    socialButtons = [
                        {
                            iconImageSrc: googleIconImageSrc,
                            text: "Sign Up With Google",
                            url: "https://google.com"
                        },
                        {
                            iconImageSrc: twitterIconImageSrc,
                            text: "Sign Up With Twitter",
                            url: "https://twitter.com"
                        }
                    ],
                    submitButtonText = "Регистрация",
                    SubmitButtonIcon = SignUpIcon,
                    tosUrl = "#",
                    privacyPolicyUrl = "#",
                    signInUrl = "#"
                }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: localStorage.getItem('email') || "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const generateUserId = () => {
        return Math.floor(Math.random() * 10000);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { firstName, lastName, phone, email, password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            const userId = generateUserId();

            const userDocRef = doc(db, "users", user.uid);

            const userDocPromise = setDoc(userDocRef, {
                firstName,
                lastName,
                phone,
                email,
                userId
            });

            await Promise.all([userDocPromise]);

            // Update local storage with new user data
            localStorage.setItem('userData', JSON.stringify({ firstName, lastName, phone, email, userId }));

            navigate("/PersonalArea");
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimationRevealPage>
            <Container>
                <Content>
                    <MainContainer>
                        <LogoLink href={logoLinkUrl}>
                            <LogoImage src={logo} />
                        </LogoLink>
                        <MainContent>
                            <Heading>{headingText}</Heading>
                            <FormContainer>
                                {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
                                <Form onSubmit={handleSubmit}>
                                    <Input name="firstName" type="text" placeholder="Имя" value={formData.firstName} onChange={handleInputChange} />
                                    <Input name="lastName" type="text" placeholder="Фамилия" value={formData.lastName} onChange={handleInputChange} />
                                    <MaskedInput mask="+7 (999) 999-99-99" name="phone" type="text" placeholder="Телефон" value={formData.phone} onChange={handleInputChange} />
                                    <Input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleInputChange} />
                                    <Input name="password" type="password" placeholder="Пароль" value={formData.password} onChange={handleInputChange} />
                                    <Input name="confirmPassword" type="password" placeholder="Повторите пароль" value={formData.confirmPassword} onChange={handleInputChange} />
                                    <SubmitButton type="submit" disabled={loading}>
                                        <SignUpIcon className="icon" />
                                        <span className="text">{loading ? "Регистрация..." : submitButtonText}</span>
                                    </SubmitButton>
                                    <p tw="mt-8 text-xs text-gray-600 text-center">
                                        Я согласен соблюдать положения закона{" "}
                                        <StyledLink to="/TermsOfService">
                                            условия обслуживания
                                        </StyledLink>{" "}
                                        и его{" "}
                                        <StyledLink to="/PrivacyPolicy">
                                            политику конфиденциальности
                                        </StyledLink>
                                    </p>

                                    <p tw="mt-10 text-sm text-gray-600 text-center">
                                        У вас уже есть учетная запись?{" "}
                                        <StyledLink to="/login">
                                            войти в систему
                                        </StyledLink>
                                    </p>
                                </Form>
                            </FormContainer>
                        </MainContent>
                    </MainContainer>
                    <IllustrationContainer>
                        <IllustrationImage imageSrc={illustrationImageSrc} />
                    </IllustrationContainer>
                </Content>
            </Container>
        </AnimationRevealPage>
    );
};