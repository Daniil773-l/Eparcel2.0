import React from "react";
import tw from "twin.macro";
import styled from "styled-components/macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/LoginPageHeader";
import Hero from "components/hero/TwoColumnWithVideo.js";
import MainFeature from "components/features/TwoColWithButton.js";
import ArticleBackground from "images/ArticleBag.jpeg"
import Bag10 from "images/HandBag10.svg"
import Bag9 from "images/HandBag9.svg"
import Bag8 from "images/HandBag8.svg"
import Bag7 from "images/HandBag7.svg"
import Bag6 from "images/HandBag6.svg"
import Bag5 from "images/HandBag5.svg"
import Bag4 from "images/HandBag4.svg"
import Bag3 from "images/HandBag3.svg"
import Bag2 from "images/HandBag2.svg"
import Bag1 from "images/HandBag1.svg"
import Footer from "components/footers/MiniCenteredFooter";

const StyledPage = styled(AnimationRevealPage)`
  ${tw`min-h-screen bg-cover bg-center`}
  background-image: url(${ArticleBackground});
`;
const PageHeading = tw.h2`text-3xl md:text-5xl font-bold text-center text-white py-10`;


export default () => {
    const Subheading = tw.span`tracking-wider text-sm font-medium`;
    const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
    const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
    const Description = tw.span`inline-block mt-8`;
    const Heading = tw.h1`font-black text-3xl md:text-5xl leading-snug max-w-3xl`;
    const imageCss = tw`rounded-4xl`;
    return (
        <>

            <AnimationRevealPage>
                <Header/>

                <Hero
                    heading={<>10. Hermès</>}
                    description={
                        <Description>
                            Французский модный дом Hermès International S.A. существует с 1837 года. Изначально он специализировался на производстве высококачественных аксессуаров для верховой езды (это до сих пор отражено на логотипе компании). В мир моды Hermès приходил постепенно, первые образцы одежды и аксессуаров для повседневно ношения стали проявляться только в начале ХХ века.
                        </Description>
                    }
                    imageSrc={Bag10}
                    imageCss={imageCss}
                    imageDecoratorBlob={true}

                />
                <MainFeature
                    subheading={<Subheading></Subheading>}
                    heading={
                        <>
                            09. Marc Jacobs
                        </>
                    }
                    description={
                        <Description>
                            Продукция, выпускаемая под брендом Marc Jacobs — это роскошные сумки, часы, обувь и различные аксессуары. Считается, что его основатель модельер Марк Джейкобс оказывает огромное влияние на мир американской моды в целом. Первую коллекцию под собственным брендом он представил в 1986 году. Сегодня компания Marc Jacobs International LLC входит в состав холдинга LVMH.
                        </Description>
                    }
                    buttonRounded={false}
                    textOnLeft={false}
                    primaryButtonText="Latest Offers"
                    imageSrc={
                        Bag9
                    }
                    imageCss={imageCss}
                    imageDecoratorBlob={true}
                    imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
                />
                <Hero
                    heading={<>08. Burberry</>}
                    description={
                        <Description>
                            Британский дом моды Burberry Group PLC более всего знаменит именно своими аксессуарами и сумками. Бренд имеет долгую и славную историю, начавшуюся в 1856 году с небольшого магазинчика, открытого Томасом Бёрберри. Пошивом одежды компания занялась только в 1880 году. А в 1924 году на продукции бренда впервые появилась знаменитая «клетка Burberry» из красного, чёрного, белого и песочного цветов. Её часто можно увидеть сегодня на столь широко популярных сумках компании.
                        </Description>
                    }
                    imageSrc={Bag8}
                    imageCss={imageCss}
                    imageDecoratorBlob={true}

                />
                <MainFeature
                    subheading={<Subheading></Subheading>}
                    heading={
                        <>
                            07. Tory Burch
                        </>
                    }
                    description={
                        <Description>
                            Этот американский бренд пока ещё не слишком популярен у наших потребителей. И не удивительно, ведь дизайнер Тори Барч основал его совсем недавно — в 2004 году. С момента запуска по всему миру открылось уже более 250 магазинов Tory Burch. Сумки же бренда входят в число очень популярных, уверенно обходя продукцию более именитых производителей
                        </Description>
                    }
                    buttonRounded={false}
                    textOnLeft={false}
                    primaryButtonText="Latest Offers"
                    imageSrc={
                        Bag7
                    }
                    imageCss={imageCss}
                    imageDecoratorBlob={true}
                    imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
                />
                <Hero
                    heading={<>06. Kate Spade</>}
                    description={
                        <Description>
                            Все началось в 1993 году, когда модельер Кейт Спейд решила создать идеальную сумочку. Изначально было представлено всего 6 моделей, которые очень понравились покупательницам. Так появилась компания Kate Spade New York. К 2006 году её доход составлял уже около 99 миллионов долларов, а узнаваемые сумки бренда можно было повстречать уже практически повсеместно. Сегодня Kate Spade занимается также производством обуви, аксессуаров и ювелирных украшений.
                        </Description>
                    }
                    imageSrc={Bag6}
                    imageCss={imageCss}
                    imageDecoratorBlob={true}
                />
                <MainFeature
                    subheading={<Subheading></Subheading>}
                    heading={
                        <>
                            05. Prada
                        </>
                    }
                    description={
                        <Description>
                            История итальянского бренда Prada началась в 1913 году, создателем его был дизайнер Марио Прада, который открыл небольшой магазин по продаже сумок собственной разработки. Удобные и привлекательные внешне они быстро полюбились покупателям. К 1970 году сумки Prada стали настоящим символом роскоши и достатка — именно они были и остаются основой бренда. Производством одежды и аксессуаров копания занялась позднее, начиная с 1989 года.
                        </Description>
                    }
                    buttonRounded={false}
                    textOnLeft={false}
                    primaryButtonText="Latest Offers"
                    imageSrc={
                        Bag5
                    }
                    imageCss={imageCss}
                    imageDecoratorBlob={true}
                    imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
                />
                <Hero
                    heading={<>04. Coach</>}
                    description={
                        <Description>
                            Глядя на роскошные сумки Coach уже трудно поверить, что эта компания начинала свою историю как крошечная семейная мастерская, в которой несколько человек вручную шили бумажники. Дело было в 1941 году. За прошедшие десятилетия компания превратилась во всемирно известного производителя аксессуаров класса «люкс». Ассортимент же производимых сумок, часто украшенных принтом, составленным из литеры «С», просто огромен.
                        </Description>
                    }
                    imageSrc={Bag4}
                    imageCss={imageCss}
                    imageDecoratorBlob={true}
                />
                <MainFeature
                    subheading={<Subheading></Subheading>}
                    heading={
                        <>
                            03. Louis Vuitton
                        </>
                    }
                    description={
                        <Description>
                            Именно сумки стали основной продукцией бренда Louis Vuitton (является частью холдинга LVMH). И не удивительно, ведь его основатель Луи Вюиттон был мастером по изготовлению сундуков и чемоданов. Собственный торговый дом он основал в 1854 году. Сегодня компания занимаемся также выпуском модной одежды, парфюмерии и аксессуаров. Но именно сумочки с монограммой LV являются мечтой многих женщин по всему миру.
                        </Description>
                    }
                    buttonRounded={false}
                    textOnLeft={false}
                    primaryButtonText="Latest Offers"
                    imageSrc={
                        Bag3
                    }
                    imageCss={imageCss}
                    imageDecoratorBlob={true}
                    imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
                />
                <Hero
                    heading={<>02. Gucci</>}
                    description={
                        <Description>
                            По количеству продаваемых модных товаров этот итальянский модный дом уступает только холдингу LVMH. Считается, что влиятельный, инновационный и прогрессивный бренд Gucci заново изобретает сам подход к моде. А выпускаемые под ним изделия являют собой вершину итальянского мастерства, знамениты своим качеством и вниманием к деталям. История дома началась в 1904 году с шорной мастерской Гуччио Гуччи.
                        </Description>
                    }
                    imageSrc={Bag2}
                    imageCss={imageCss}
                    imageDecoratorBlob={true}
                />
                <MainFeature
                    subheading={<Subheading></Subheading>}
                    heading={
                        <>
                            01. Michael Kors
                        </>
                    }
                    description={
                        <Description>
                            Американский дизайнер Майкл Корс занимается одеждой, обувью и аксессуарами, которые с удовольствием носят многие знаменитости. Но именно сумки принесли бренду Michael Kors мировую славу. По объёмам их продаж компания значительно опережает все другие из данного списка. Согласно опросу 2015 года, сумки этой марки были самой популярной модной тенденцией среди девушек-подростков. Сам же бренд появился ещё 1981 году, хотя первые розничные магазины Michael Kors начали открываться только с 2006 года.
                        </Description>
                    }
                    buttonRounded={false}
                    textOnLeft={false}
                    primaryButtonText="Latest Offers"
                    imageSrc={
                        Bag1
                    }
                    imageCss={imageCss}
                    imageDecoratorBlob={true}
                    imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
                />
                <Footer />
            </AnimationRevealPage>

        </>

    );
}
