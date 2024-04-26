import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/misc/Layouts.js"
import logo from "../../images/logo.svg";
import { ReactComponent as FacebookIcon } from "../../images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "../../images/youtube-icon.svg";


const Container = styled.div`
  ${tw`text-gray-100 -mx-8 -mb-8`}
  background-color: #e2ffe2; // Установка цвета фона на ваш 02A10F
`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-40`;


const LinksContainer = tw.div`mt-8 font-bold flex flex-wrap justify-center items-center flex-col sm:flex-row`;
const Link = tw.a`text-black border-b-2 border-transparent hocus:text-gray-700 hocus:border-gray-700 pb-1 no-underline transition duration-300 mt-2 mx-4`;



const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-bold tracking-wide text-sm text-gray-600`
export default () => {
  return (
      <Container>
        <Content>
          <Row>
            <LogoContainer>
              <LogoImg src={logo} />
            </LogoContainer>
            <LinksContainer>
              <Link href="#">Политика конфиденциальности</Link>
              <Link href="#">Договор оферты</Link>
              <Link href="#">Пользовательское соглашение</Link>
              <Link href="#">Создание сайта - wtstudio.ru</Link>

            </LinksContainer>
            <SocialLinksContainer>
              <SocialLink href="https://facebook.com">
                <FacebookIcon />
              </SocialLink>
              <SocialLink href="https://twitter.com">
                <TwitterIcon />
              </SocialLink>
              <SocialLink href="https://youtube.com">
                <YoutubeIcon />
              </SocialLink>
            </SocialLinksContainer>
            <CopyrightText>
              Телефон для связи:
              8 (800) 777-76-10
            </CopyrightText>
            <CopyrightText>
              &copy;2024 Eparcel. Все права защищены.
            </CopyrightText>
          </Row>
        </Content>
      </Container>
  );
};
