import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import illustration from "images/login-illustration.svg";
import logo from "images/logo.svg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./FireBaseConfig"; // Update the path to your firebaseConfig file

const Container = styled(ContainerBase)`
    ${tw`min-h-screen bg-white text-white font-medium flex justify-center -m-8`}
`;
const Content = tw.div`
    max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 
    shadow-xl sm:rounded-lg flex justify-center flex-1
`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const Form = tw.form`mx-auto w-full max-w-sm`;
const Input = styled.input`
    ${tw`w-full px-4 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-8 first:mt-12`}
`;

const PasswordInputWrapper = styled.div`
    ${tw`relative w-full`}
`;

const PasswordInput = styled(Input)``;

const TogglePasswordButton = styled.button`
    ${tw`absolute inset-y-0 right-0 pr-1 flex items-center text-gray-600 focus:outline-none`}
    background: transparent;
    border: none;
    cursor: pointer;
    margin-top: 50px;
`;

const SubmitButton = styled.button`
    ${tw`mt-8 tracking-wide font-semibold text-gray-100 py-3 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
    background-color: #0ABD19;
    width: 110%;
    &:hover {
        background-color: #067D10;
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
    ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;

const PlainLink = styled.a`
    text-decoration: none;
    ${tw`text-gray-600 `}
    &:hover {
        ${tw`text-gray-800`}
    }
`;

const LinksContainer = styled.div`
    ${tw`flex flex-col items-center mt-4`}
`;

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            // Navigate to personal area upon successful login
            navigate("/PersonalArea");
        } catch (error) {
            console.error("Error signing in: ", error.message);
            // Handle error, e.g., display an error message to the user
        }
    };

    return (
        <AnimationRevealPage>
            <Container>
                <Content>
                    <MainContainer>
                        <LogoLink href="#">
                            <LogoImage src={logo} />
                        </LogoLink>
                        <MainContent>
                            <Heading>Войти</Heading>
                            <FormContainer>
                                <Form onSubmit={handleLogin}>
                                    <Input
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <PasswordInputWrapper>
                                        <PasswordInput
                                            type={passwordShown ? "text" : "password"}
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <TogglePasswordButton onClick={togglePasswordVisibility}>
                                            {passwordShown ? (
                                                <AiFillEyeInvisible size={24}/>
                                            ) : (
                                                <AiFillEye size={24}/>
                                            )}
                                        </TogglePasswordButton>
                                    </PasswordInputWrapper>
                                    <SubmitButton type="submit">
                                        <span className="text">Войти</span>
                                    </SubmitButton>
                                </Form>
                                <LinksContainer>
                                    <PlainLink href="#">Забыли свой пароль?</PlainLink>
                                    <PlainLink href="/RegistrationPage">Нету аккаунта? Зарегистрируйтесь</PlainLink>
                                </LinksContainer>
                            </FormContainer>
                        </MainContent>
                    </MainContainer>
                    <IllustrationContainer>
                        <IllustrationImage imageSrc={illustration} />
                    </IllustrationContainer>
                </Content>
            </Container>
        </AnimationRevealPage>
    );
};

export default Login;
