import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import tw from "twin.macro";
import Fly from "images/flyafter.png";
import Receive from "images/receive.png";


const Container = tw.div`relative bg-[#ddf2e6] text-gray-900 pt-12 md:pt-20 pb-20 px-2 md:px-0`;  // Изменение цвета фона
const Content = tw.div`max-w-screen-xl mx-auto`; // Управление шириной здесь
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between items-center max-w-screen-xl mx-auto py-12`;
const LeftColumn = tw.div`relative md:w-1/4 mx-auto md:mx-0 flex justify-center md:justify-start items-center`;
const RightColumn = tw.div`relative md:w-1/4 mx-auto md:mx-0 flex justify-center md:justify-end items-center`;

const StyledLink = styled(Link)`
  color: blue;      // Sets the link color to blue
  text-decoration: none; // Removes the underline
`;

const Heading = styled.h1`
    ${tw`font-bold text-2xl md:text-3xl text-gray-900 leading-snug max-w-xl text-center`}
    margin-bottom: 20px;
`;

const Paragraph = tw.p`mt-2 text-xs md:text-sm lg:text-base font-medium text-gray-900 max-w-lg mx-auto md:mx-0 text-center`;


const Actions = styled.div`
    ${tw`relative text-center mt-8 md:flex md:justify-center items-center`}
    button {
        ${tw`w-[200px] sm:relative sm:right-0 sm:top-0 sm:bottom-0 bg-green-500 text-white font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:leading-none focus:outline-none transition duration-300`}
        background-color: #0ABD19; // Ярко-зелёный фон кнопки
        border: none;
        &:hover {
            background-color: #0ABD50;
            transform: scale(1.1);
        }
    }
`;

const FooterSpace = styled.div`
    height: 50px;  // Увеличенный отступ между контентом и футером
`;

const IllustrationContainer = tw.div`flex justify-center items-center`;

export default () => {
    return (
        <>
            <Container>
                <Content>
                    <TwoColumn>
                        <IllustrationContainer style={{ marginTop: "80px" }}>
                            <img src={Receive} alt="Fly Illustration" style={{ width: "200px", height: "auto" }} />
                        </IllustrationContainer>
                        <div tw="flex flex-col items-center">
                            <Heading>Выкуп товаров</Heading>
                            <Paragraph>
                                Чтобы оставить заявку на выкуп товаров, необходимо авторизоваться в
                                <StyledLink to="/Login"> личном кабинете</StyledLink>.
                            </Paragraph>
                            <Actions>
                                <button>Войти в личный кабинет</button>
                            </Actions>
                        </div>
                        <IllustrationContainer style={{ marginBottom: "20px" }}>
                            <img src={Fly} alt="Receive Illustration" style={{width: "200px", height: "auto"}}/>
                        </IllustrationContainer>
                    </TwoColumn>
                    <FooterSpace />
                </Content>

            </Container>
        </>
    );
};
