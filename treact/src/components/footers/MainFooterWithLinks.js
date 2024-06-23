import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import LogoImage from "images/logo-footer.svg";
import TelegramIcon from "images/icon/telegram.svg";
import  ViberIcon from "images/icon/Viber.svg";
import WhatsappIcon  from "images/icon/whatsapp.svg";
import  ClassmatesIcon  from "images/icon/classmates.svg";
import VkIcon  from "images/icon/vk.svg";


const Container = styled.div`
    ${tw`relative text-gray-100 -mx-8 -mb-8 px-8 p-10`}
    background-color: #e2ffe2;!important; // Using !important to ensure it takes precedence
    color: #2D2D2D;
`;
const Content = tw.div`max-w-screen-xl mx-auto pt-16 pb-8`
const FiveColumns = tw.div`flex flex-wrap justify-between`;

const Column = tw.div`w-1/2 md:w-1/5 mb-8 md:mb-0 text-sm sm:text-base text-center md:text-left`;
const CompanyColumn = tw.div`text-center md:text-left mb-16 lg:mb-0 w-full lg:w-1/5`;

const ColumnHeading = tw.h5`font-bold uppercase`;

const LinkList = styled.ul`
    ${tw`mt-4 text-sm font-medium list-none`}; // Removes bullets
`;
const LinkListItem = tw.li`mt-3`;
const Link = styled.a`
    ${tw` hover:text-green-500 cursor-pointer`};
    text-decoration: none; // Ensures no underline at all
    color: #2D2D2D;
    &:hover {
        text-decoration: none; // Prevents any text-decoration on hover as well
    }
`;


const LogoContainer = tw.div`flex items-center justify-center lg:justify-start`;
const LogoImg = styled.img`
  ${tw`w-32 h-24`}; // Increased logo size
`;
const LogoText = tw.h5`ml-2 text-xl font-black`;

const CompanyAddress = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto lg:mx-0 lg:mr-4 leading-loose text-center lg:text-left`;

const SocialLinksContainer = tw.div`mt-4 flex justify-center lg:justify-start space-x-2`;
const SocialLink = styled.a`
    ${tw`cursor-pointer inline-block p-2 text-gray-900  transition duration-300`}
    svg {
        ${tw`w-4 h-4`}
    }
    font-size: 16px;
    line-height: 19px;
    color: #2D2D2D;
    filter: grayscale(100%);
    transition: filter 0.3s ease;
    &:hover {
        filter: none;
    }
`;



const Break = styled.div`
  ${tw`my-1`}
`;

const CopyrightAndCompanyInfoRow = tw.div`pb-0 text-sm font-normal flex flex-col sm:flex-row justify-between items-center`
const CopyrightNotice = tw.div``
const CompanyInfo = tw.div``

const Divider = tw.div`my-8 border-b-2 border-gray-800`
export default () => {
    return (
        <Container>
            <Content>
                <FiveColumns>
                    <CompanyColumn>
                        <LogoContainer>
                            <LogoImg src={LogoImage} />
                        </LogoContainer>

                        <SocialLinksContainer>
                            <SocialLink href="https://web.telegram.org/a/">
                                <img src={TelegramIcon} />
                            </SocialLink>
                            <SocialLink href="https://www.viber.com/ru/">
                                <img src={ViberIcon}/>
                            </SocialLink>
                            <SocialLink href="https://web.whatsapp.com">
                                <img src={WhatsappIcon}/>
                            </SocialLink>
                            <SocialLink href="https://ok.ru">
                                <img src={ClassmatesIcon}/>
                            </SocialLink>
                            <SocialLink href="https://vk.com/feed">
                                <img src={VkIcon}/>
                            </SocialLink>
                        </SocialLinksContainer>
                        <CompanyAddress>
                            Телефон для связи: <Break/>
                            8 (800) 777-76-10
                        </CompanyAddress>
                    </CompanyColumn>
                    <Column>
                        <ColumnHeading>Общая информация</ColumnHeading>
                        <LinkList>
                            <LinkListItem>
                                <Link href="AboutUS">О нас</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="Rates">Услуги и стоимость</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="Tariffs">Тарифы</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="Shops">Магазины</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="RedemptionOfGoods">Выкуп товаров</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="Contacts">Контакты</Link>
                            </LinkListItem>
                        </LinkList>
                    </Column>
                    <Column>
                        <ColumnHeading>Клиентам</ColumnHeading>
                        <LinkList>
                            <LinkListItem>
                                <Link href="News">Новости и спецпредложения</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="Questions">Вопросы и ответы</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="ProhibitedProductsPage">Запрещенные товары</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="CustomRegulations">Таможенные правила</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="DeliveryCalculator">Калькулятор доставки</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="DutyCalculatorPage">Калькулятор таможенной пошлины</Link>
                            </LinkListItem>
                        </LinkList>
                    </Column>
                    <Column>
                        <ColumnHeading>Полезное</ColumnHeading>
                        <LinkList>
                            <LinkListItem>
                                <Link href="LegalInformation">Правовая информация</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="HowToBuyGoodsAbroadPage">Как покупать товары заграницей</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="ClothesSizes">Размеры одежды и обуви</Link>
                            </LinkListItem>
                            <LinkListItem>
                                <Link href="ForBussinesPage">Для бизнеса</Link>
                            </LinkListItem>
                        </LinkList>
                    </Column>
                </FiveColumns>
                <Divider/>
                <CopyrightAndCompanyInfoRow>
                    <CopyrightNotice>&copy; 2024 Eparcel. Все права защищены.</CopyrightNotice>
                    <CompanyInfo></CompanyInfo>
                </CopyrightAndCompanyInfoRow>
            </Content>
        </Container>
    );
};
