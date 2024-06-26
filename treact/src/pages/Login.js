import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-line
import illustration from "images/login-illustration.svg";
import logo from "images/logo.svg";
import googleIconImageSrc from "images/google-icon.png";
import twitterIconImageSrc from "images/twitter-icon.png";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Container = tw(ContainerBase)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
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

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto w-full max-w-xs`;
const Input = styled.input`
  ${tw`w-full px-8 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-8 first:mt-12`}
`;


const PasswordInputWrapper = styled.div`
  ${tw`relative w-full`}
`;

const PasswordInput = styled(Input)`
  ${tw`pr-12`} /* Adjust padding to make room for the eye icon */
  font-size: 1rem; /* Adjust font size to match button */
`;

const TogglePasswordButton = styled.button`
  ${tw`absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 focus:outline-none`}
  background: transparent;
  border: none;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  ${tw`mt-10 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;

const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;

const PlainLink = styled.a`
  ${tw`text-gray-600`}
  &:hover {
    ${tw`text-gray-800`}
  }
`;

export default ({
                  logoLinkUrl = "#",
                  illustrationImageSrc = illustration,
                  headingText = "Sign In To Treact",
                  socialButtons = [
                    {
                      iconImageSrc: googleIconImageSrc,
                      text: "Sign In With Google",
                      url: "https://google.com"
                    },
                    {
                      iconImageSrc: twitterIconImageSrc,
                      text: "Sign In With Twitter",
                      url: "https://twitter.com"
                    }
                  ],
                  submitButtonText = "Sign In",
                  SubmitButtonIcon = LoginIcon,
                  forgotPasswordUrl = "#",
                  signupUrl = "#",
                }) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
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
                  <DividerTextContainer>
                    <DividerText>Or Sign in with your e-mail</DividerText>
                  </DividerTextContainer>
                  <Form>
                    <Input type="email" placeholder="Email" />
                    <PasswordInputWrapper>
                      <PasswordInput type={passwordShown ? "text" : "password"} placeholder="Password" />
                      <TogglePasswordButton type="button" onClick={togglePasswordVisibility}>
                        {passwordShown ? <AiFillEyeInvisible size={24} /> : <AiFillEye size={24} />}
                      </TogglePasswordButton>
                    </PasswordInputWrapper>
                    <SubmitButton type="submit">
                      <SubmitButtonIcon className="icon" />
                      <span className="text">{submitButtonText}</span>
                    </SubmitButton>
                  </Form>
                  <p tw="mt-8 text-xs text-gray-600 text-center">
                    <PlainLink href={forgotPasswordUrl}>Forgot Password?</PlainLink>
                  </p>
                  <p tw="mt-10 text-sm text-gray-600 text-center">
                    Don't have an account?{" "}
                    <PlainLink href={signupUrl}>Sign Up</PlainLink>
                  </p>
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
