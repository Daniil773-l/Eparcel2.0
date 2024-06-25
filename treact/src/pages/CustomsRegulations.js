import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import Header from "components/headers/light";
import Footer from "components/footers/MainFooterWithLinks";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-1.svg";
import DesignIllustration from "images/CustomRules.svg";
import Banner2 from "images/SecondBannerCustoms.svg";
import CustomImage from "images/BannerCustoms.svg"; // Import the uploaded image
import CustomRegulationsHeader from "../components/headers/CustomRegulationsHeder";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-12 md:py-16`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = styled.h1`
    ${tw`font-bold text-3xl md:text-4xl lg:text-4xl leading-tight`}
    color: rgb(36 62 99 / var(--tw-text-opacity));
    margin-bottom: 10px;
`;

const Paragraph = styled.p`
    ${tw`text-base md:text-lg lg:text-xl`}
    color: #2d2d2d;
    font-family: 'Gilroy Medium', sans-serif;
    font-weight: normal;
    margin-bottom: 20px;
`;

const Content = tw.div`max-w-screen-xl mx-auto py-8 lg:py-12`; // Adjusted padding for better spacing
const HeadingColumn = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;

const Actions = styled.div`
    ${tw`relative max-w-md text-center mx-auto lg:mx-0 mt-4`}

    button {
        ${tw`w-full sm:w-auto bg-green-500 text-white font-bold mt-4 sm:mt-0 rounded-full py-4 flex items-center justify-center transition duration-300`}
        background-color: #0abd19;
        border: none;

        &:hover,
        &:focus {
            background-color: #0abd50;
            transform: scale(1.05);
        }
    }
`;

const IllustrationContainer = styled.div`
    ${tw`flex justify-center lg:justify-end items-center`}
    margin-left: 5%;
`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
    ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

const InfoSection = styled.div`
    ${tw`flex flex-col lg:flex-row items-center justify-center my-8`}
    font-family: 'Gilroy Medium', sans-serif;
    font-size: 22px;
    line-height: 1.5;
    text-align: center;

    @media (max-width: 1024px) {
        ${tw`flex-col`}
    }
`;

const ImageContainer = styled.div`
    ${tw`flex-shrink-0 lg:mr-8`}
    img {
        ${tw`w-80 h-80`}
    }
`;

const InfoText = styled.div`
    ${tw`text-xl leading-snug`}
    color: #243e63;
`;

const HighlightedInfoText = styled.span`
    color: #0abd19;
`;

export default ({ roundedHeaderButton }) => {
    return (
        <>
            <AnimationRevealPage>
                <CustomRegulationsHeader />
                <Container>
                    <Content>
                        <HeadingColumn>
                            <Heading>Таможенные правила</Heading>
                            <Paragraph>
                                На все посылки с товарами из-за рубежа применяются правила Таможенного союза: Таможенный
                                кодекс Евразийского экономического союза, глава 37.
                            </Paragraph>
                            <Heading>Таможенное оформление, паспортные данные и ИИН</Heading>
                            <Paragraph>
                                Согласно Таможенному Кодексу, таможенному декларированию подлежат все грузы, пересекающие
                                границу ЕАЭС, вне зависимости от стоимости и веса. Все международные отправления в
                                установленном порядке проходят процедуру таможенного оформления в соответствии с приказом
                                ФТС от 05.07.2018 № 1060. В процессе оформления отправления необходимо заполнение паспортных
                                данных и ИНН получателя каждой посылки. Далее вся информация передается в таможенные органы
                                для ускоренной процедуры прохождения процедуры очистки всего груза.
                            </Paragraph>
                            <Heading>Ограничения и лимиты беспошлинного ввоза</Heading>
                            <Paragraph>
                                В соответствии с п. 6 ст. 256, п. 11 ст. 260, п. 2, 3, 6 и 8 ст. 266 Таможенного кодекса
                                Евразийского экономического союза товары для личного пользования, пересылаемые в
                                международных почтовых отправлениях стоимость которых не превышает сумму, эквивалентную €200
                                евро, и (или) вес брутто не превышает 31 кг полностью освобождаются от уплаты таможенных
                                пошлин и налогов.
                            </Paragraph>
                            <InfoSection>
                                <ImageContainer>
                                    <img src={CustomImage} alt="Customs Info" />
                                </ImageContainer>
                                <InfoText>
                                    <strong style={{ color: "#243E63", fontSize: "26px", display: "block", marginBottom: "10px" }}>Стоимость таможенной пошлины</strong>
                                    <HighlightedInfoText style={{ fontSize: "20px", display: "block", marginBottom: "10px" }}>учитывается вес и стоимость отдельной посылки.</HighlightedInfoText>
                                    <span style={{ color: "#243E63", fontSize: "22px", display: "block" }}> В случае повышенной нормы уплачивается пошлина в размере: 15% от стоимости, но не менее 2 € за 1 кг в части превышения стоимостной или весовой нормы.</span>
                                </InfoText>
                            </InfoSection>
                            <Heading>Количество и лимит товаров в одной посылке</Heading>
                            <Paragraph>Каждая посылка может содержать различные товары в одном отправлении. Не рекомендуется
                                при формировании одного отправления наличие количества однотипных товаров более четырёх. В
                                противном случае таможенные органы могут признать посылку коммерческой партией.</Paragraph>
                            <img src={Banner2} alt="Customs Banner" style={{ maxWidth: '100%', marginBottom: '20px' }} />
                            <Paragraph>Товары для личного пользования, ввозимые на территорию ЕАЭС физическими лицами
                                независящими от порядка пересылки международных почтовых отправлений, освобождаются от уплаты
                                таможенных пошлин и налогов. Ввоз товаров разрешен не чаще одного раза в сутки.</Paragraph>
                            <Heading>Необходимые документы для ввоза товаров</Heading>
                            <Paragraph>Для таможенного оформления, для получения посылки из-за рубежа, необходимо предоставить
                                следующие документы:
                            </Paragraph>
                            <ul>
                                <li>паспорт;</li>
                                <li>свидетельство о рождении для детей до 16 лет;</li>
                                <li>идентификационный номер налогоплательщика (ИНН);</li>
                                <li>документы, подтверждающие оплату товаров (счета-фактуры, квитанции и т.д.);</li>
                                <li>документы, подтверждающие стоимость товара (например, выписка из интернет-магазина).</li>
                            </ul>
                            <Heading>Завершение таможенного оформления</Heading>
                            <Paragraph>После подачи всех необходимых документов и их проверки таможенными органами будет
                                осуществлено оформление и выпуск товаров на территорию КЗ. Если все паспортные данные и ИИН
                                правильно заполнены, то посылка с товарами будет выпущена таможенными органами без
                                каких-либо задержек.</Paragraph>
                            <Heading>Сроки прохождения таможни</Heading>
                            <Paragraph>Срок таможенного прохождения посылки составляет от 1-3 рабочих дней с момента прибытия на территорию Казахстана. Если все данные правильно заполнены, то посылка с товарами будет выпущена таможенными органами без каких-либо задержек.</Paragraph>
                        </HeadingColumn>
                    </Content>
                </Container>
                <Footer />
            </AnimationRevealPage>
        </>
    );
};
