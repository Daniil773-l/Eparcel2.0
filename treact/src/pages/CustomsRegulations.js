import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import Header from "components/headers/light";
import Footer from "components/footers/MainFooterWithLinks";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-1.svg";
import DesignIllustration from "images/CustomRules.svg";
import Banner1 from "images/BannerCustoms.svg";
import Banner2 from "images/SecondBannerCustoms.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = styled.h1`
    ${tw`font-bold text-4xl md:text-4xl lg:text-3xl xl:text-4xl leading-tight`}
    font-size: 34px;
    line-height: 42px;
    margin-bottom: 50px;
    font-family: 'Gilroy Semibold';
    color: #2D2D2D;
`;
const Break = styled.div`
  ${tw`my-4`}
`;


const Paragraph = styled.p`
    ${tw`my-4 text-base md:text-lg lg:text-xl xl:text-xl`}
    font-size: 22px; // Set the font size
    line-height: 32px; // Set the line height
    color: #2D2D2D; // Maintain the color
    font-family: 'Gilroy Medium', sans-serif; // Set the font family, ensure a fallback
    font-weight: normal; // Regular text less bold than HighlightedText
`;


const Content = tw.div`max-w-screen-xl mx-auto py-12 lg:py-16`; // Уменьшенные отступы
const HeadingColumn = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;

const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}

  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-[225px] font-medium focus:outline-none transition duration-300`}
  
  }

  input:hover,
  input:focus {
    border-color: #0ABD19; // Зелёный цвет границы при наведении или фокусе
  }

  button {
      ${tw`w-[200px] sm:relative sm:right-0 sm:top-0 sm:bottom-0 bg-green-500 text-white font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:leading-none focus:outline-none transition duration-300`}
    background-color: #0ABD19; // Ярко-зелёный фон кнопки
    border: none;

    &:hover,
    &:focus {
        transform: none; // Отменяем увеличение размера кнопки
        background-color: #0ABD50;
        transform: scale(1.1);
    }
  }
`;

const IllustrationContainer = styled.div`
  ${tw`flex justify-center lg:justify-end items-center`}
  margin-left: 9%; // Увеличиваем отступ слева, чтобы сдвинуть картинку вправо
`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

const CustomersLogoStrip = styled.div`
  ${tw`mt-12 lg:mt-20`}
  p {
    ${tw`uppercase text-sm lg:text-xs tracking-wider font-bold text-gray-500`}
  }
  img {
    ${tw`mt-4 w-full lg:pr-16 xl:pr-32 opacity-50`}
  }
`;
const HighlightedText = styled.span`
  ${tw`font-bold`}
  color: #0ABD19; // Custom color
`;
export default ({ roundedHeaderButton }) => {
    return (
        <>
            <Header roundedHeaderButton={roundedHeaderButton} />
            <Container>
                <TwoColumn>
                    <LeftColumn>
                        <Heading>
                            Таможенные правила
                        </Heading>
                        <Paragraph>
                            При покупке товаров онлайн в других странах с доставкой в РФ применяются таможенные законы, правила и условия.
                        </Paragraph>

                        <Actions>
                            <button>Получить адрес</button>
                        </Actions>
                    </LeftColumn>
                    <RightColumn>
                        <IllustrationContainer>
                            <img tw="min-w-0 w-full max-w-lg xl:max-w-3xl" src={DesignIllustration} alt="Design Illustration" />
                        </IllustrationContainer>
                    </RightColumn>
                </TwoColumn>

                <DecoratorBlob1 />

            </Container>
            <Container>
                <Content>
                    <HeadingColumn>
                        <Heading>Таможенные правила</Heading>
                        <Paragraph>
                            На все посылки с товарами из-за рубежа применяются правила Таможенного союза: Таможенный
                            кодекс Евразийского экономического союза, глава 37.
                        </Paragraph>
                        <Heading>Таможенное оформление, паспортные данные и ИНН</Heading>
                        <Paragraph>
                            Согласно Таможенному Кодексу, таможенному декларированию подлежат все грузы, пересекающие
                            границу ЕАЭС, вне зависимости от стоимости и веса. Все международные отправления в
                            установленном порядке проходят процедуру таможенного оформления в соответствии с приказом
                            ФТС от 05.07.2018 № 1060.В процессе оформления отправления необходимо заполнение паспортных
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
                        <img src={Banner1} alt="Customs Banner" style={{maxWidth: '100%', marginBottom: '20px'}}/>
                        <Heading>Количество и лимит товаров в одной посылке</Heading>
                        <Paragraph>Каждая посылка может содержать различные товары в одном отправлении. Не рекомендуется
                            при формировании одного отправления наличие количества однотипных товаров более четырёх. В
                            противном случае таможенные органы могут признать посылку коммерческой партией.</Paragraph>
                        <img src={Banner2} alt="Customs Banner" style={{maxWidth: '100%', marginBottom: '20px'}}/>
                        <Heading>Сроки прохождения таможни</Heading>
                        <Paragraph>Срок таможенного оформления составляет от 1–3 рабочих дней с момента прибытия на территорию РФ. Если все паспортные данные и ИНН правильно заполнены, то посылка с товарами будет выпущена таможенными органами без каких-либо задержек.</Paragraph>
                    </HeadingColumn>
                </Content>
            </Container>
            <Footer/>
        </>
    );
};
