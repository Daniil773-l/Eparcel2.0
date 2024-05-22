import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Header from 'components/headers/LoginPageHeader';
import Footer from "components/footers/MainFooterWithLinks";
import Choose from "images/GoodChoose.svg";
import Purchase from "images/PurchaseGood.svg";
import Delivery from "images/DeliveryIcon.svg";
import AnimationRevealPage from "../helpers/AnimationRevealPage";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-12 lg:py-16`;
const HeadingColumn = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0 flex flex-col items-center xl:items-start`;

const HeadingTitle = styled.h1`
    ${tw` text-3xl md:text-2xl lg:text-4xl xl:text-3xl leading-tight`}
    margin-bottom: 20px;
    color: #2D2D2D;
`;

const IconTitle = styled.h2`
    ${tw`font-semibold text-lg md:text-xl lg:text-2xl`}
    color: #2D2D2D;
    margin-top: 12px;
    margin-bottom: 4px;
`;

const HighlightedText = styled.span`
    ${tw`font-semibold text-black`}
    color: #2D2D2D;
`;

const GreenLink = styled.a`
    ${tw`text-green-500`}
    text-decoration: none;
`;

const HeadingDescription = styled.p`
    ${tw`text-base xl:text-xl`}
    font-size: 22px;
    line-height: 32px;
    color: #2D2D2D;
    font-family: 'Gilroy Medium', sans-serif;
    margin-top: 12px; /* Добавлено для выравнивания текста ниже */
`;

const ImageWrapper = styled.div`
    ${tw`flex items-center mb-8`}
`;

const Icon = styled.img`
    ${tw`mr-6`}
`;

export default () => {
    return (
        <>
            <AnimationRevealPage>
            <Header/>
            <Container>
                <Content>
                    <HeadingColumn>
                        <HeadingTitle>Как покупать товары за границей</HeadingTitle>
                        <HeadingDescription>
                            Покупка товаров из зарубежных интернет-магазинов стала очень популярной среди российских покупателей. Однако многие сталкиваются с проблемами при выборе и оплате товара, а также при его доставке в Казахстан. Как же все-таки правильно покупать товары за границей и как осуществляется их доставка в Казахстан?
                        </HeadingDescription>
                    </HeadingColumn>
                    <ImageWrapper>
                        <Icon src={Choose} alt="Choose Product"/>
                        <div>
                            <IconTitle>Выбор товара</IconTitle>
                        </div>
                    </ImageWrapper>
                    <HeadingDescription>
                        Перед тем, как приступить к покупкам, необходимо определиться с выбором магазина и товара. Для этого нужно изучить характеристики товара, его стоимость и отзывы других покупателей. Стоит убедиться в том, что продавец имеет хорошую репутацию. Специально для наших покупателей на главной странице сайта мы собрали <GreenLink href="#">список проверенных временем магазинов из США и Турции</GreenLink>.
                    </HeadingDescription>
                    <ImageWrapper>
                        <Icon src={Purchase} alt="Purchase Product"/>
                        <div>
                            <IconTitle>Оплата товара</IconTitle>

                        </div>
                    </ImageWrapper>
                    <HeadingDescription>
                        Оплата товара за границей производится обычно через интернет-магазин или платежные системы, такие как PayPal или кредитные карты. При этом необходимо убедиться в том, что сайт, на котором вы производите оплату, защищен протоколом SSL и имеет сертификат безопасности. Если у Вас возникли проблемы с оплатой, воспользуйтесь нашей функцией <GreenLink href="#">«Выкуп товаров»</GreenLink>.
                    </HeadingDescription>
                    <ImageWrapper>
                        <Icon src={Delivery} alt="Product Delivery"/>
                        <div>
                            <IconTitle>Доставка товара</IconTitle>

                        </div>
                    </ImageWrapper>
                    <HeadingDescription>
                        Подробнее про указание адреса, сроки доставки и трекинг-номер Вы можете ознакомиться в другой статье. Компания Eparcel гарантирует Вам качественную и быструю доставку, а также сохранность товара во время перевозки. Мы с радостью поможем Вам с Вашей посылкой на всех этапах доставки!
                    </HeadingDescription>
                </Content>
            </Container>
            <Footer/>
            </AnimationRevealPage>
        </>
    );
};
