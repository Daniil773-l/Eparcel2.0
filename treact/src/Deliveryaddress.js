import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/HeaderCab";
import photo from "./images/Address-bro.svg";
import Footer from "components/footers/MainFooterWithLinks";
import Explanation from "components/cards/JustExplanation";
import "./CSS/IncludedServicesSectionTariff.css";
import tw from "twin.macro";
import styled from "styled-components";
import Form from "./images/Без названия.png";
import DressRoom from "./images/DressRoom.svg";  // Import the image

const ImageContainer = styled.div`
    ${tw`flex justify-center my-8`}
`;

const Image = styled.img`
    ${tw`max-w-full h-auto`}
`;
const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto`; // Без отступов сверху

const HeadingColumn = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;

const HeadingTitle = styled.h1`
    ${tw`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`}
    margin-bottom: 50px; /* Увеличение отступа между заголовком и абзацем */
`;

const HeadingDescription = styled.p`
  ${tw`my-5 xl:my-8 text-lg font-medium xl:text-xl`}
`;

const HilightText = styled.span`
    ${tw`my-5 xl:my-8 text-lg font-medium xl:text-xl`}
    color: #0ABD19; // Bright green text
`;

const Break = styled.div`
    ${tw`my-4`}
`;

export default () => {
    return (
        <AnimationRevealPage>
            <Header
                heading="Как правильно указывать адрес для доставки"
                paragraph="Зачастую при заказе товаров онлайн из других стран возникает вопрос о правильном указании адреса. В этой статье мы расскажем, как правильно указывать складской адрес при оформлении заказа."
                imageSrc={photo}
                roundedHeaderButton={false}
            />
            <Container>
                <Content>
                    <HeadingColumn>
                        <HeadingDescription>
                            Для начала зарегистрируйтесь на сайте службы доставки. Для того, чтобы заказывать товары через службу доставки <HilightText>Eparcel</HilightText>, необходимо зарегистрироваться на нашем сайте. Мы не раскрываем адреса наших складов публично. Многие магазины не желают отправлять товары компаниям, занимающимся пересылкой за границу, поэтому мы просим не делиться этим адресом в интернете. Адреса складов в США или Турции будут доступны сразу после регистрации в личном кабинете.
                            <Break />
                            При заказе товаров на сайте продавца необходимо ввести адрес склада точно так же, как указано в личном кабинете! Например, заполненные на сайте интернет-магазина поля могут выглядеть так:
                        </HeadingDescription>
                    </HeadingColumn>
                </Content>
            </Container>
            <ImageContainer>
                <Image src={Form} alt="Explanation Form" />
            </ImageContainer>
            <Container>
                <Content>
                    <HeadingColumn>
                        <HeadingDescription>
                            <HilightText> После оформления заказа нужно указать его трекинг-номер на сайте службы доставки. Это поможет избежать ошибок при обработке заказа. </HilightText> После того, как Вы оплатили доставку и указали все необходимые данные, остается только ждать получения товаров. Мы гарантируем, что доставка с <HilightText>Eparcel </HilightText>занимает совсем немного времени.
                            <Break />
                            Заказывать товары онлайн с доставкой в Россию – это удобно и выгодно. Главное – выбрать желанные товары и указать правильный адрес склада. Следуя этой простой инструкции, Вы сможете получить свои покупки без проблем и задержек.                        </HeadingDescription>
                    </HeadingColumn>
                </Content>
            </Container>
            <Footer />
        </AnimationRevealPage>
    );
};
