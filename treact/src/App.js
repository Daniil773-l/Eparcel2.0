import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import styled from 'styled-components';
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import Features from "components/features/ThreeColWithSideImage.js";
import MainFeature2 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";
import Pricing from "components/pricing/ThreePlans.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndRating.js";
import Footer from "components/footers/MainFooterWithLinks";
import StepImg from "images/steps.svg"
import PVZ from "images/PBZ.svg"
import PostMat from "images/postmat.svg"
import Dostavka from "images/dostavka.svg"
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";


import { ReactComponent as One } from "images/01.svg";
import { ReactComponent as Two } from "images/02.svg";
import { ReactComponent as Three } from "images/03.svg";

export default () => {
    const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
    const HighlightedText = styled.span`
        ${tw`text-primary-500`} // Применяем основные стили от tw.macro
        color: #0ABD19; // Устанавливаем желаемый цвет
    `;
    const Steps = styled.span`
        ${tw`text-primary-500`} // Применяем основные стили от tw.macro
        color: #0ABD19; // Устанавливаем желаемый цвет
    `;
    const Prim = styled.span`
        ${tw`text-center text-primary-500 md:text-left`}// Применяем основные стили от tw.macro
        color: #0ABD19; // Устанавливаем желаемый цвет
    `;
    return (
        <AnimationRevealPage>
            <Hero roundedHeaderButton={true} />
            <Features
                heading={
                    <>
                        У нас потрясающий  <HighlightedText>Сервис</HighlightedText>
                    </>
                }
            />

            <FeatureWithSteps
            subheading={<Steps>ШАГИ</Steps>}
            heading={
                <>
                    Как это <HighlightedText>работает?</HighlightedText>
                </>
            }
            textOnLeft={false}
            imageSrc={StepImg}
            imageDecoratorBlob={true}
            decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
        />
            <Pricing

                heading={
                    <>
                        Способы  <HighlightedText>доставки</HighlightedText>
                    </>
                }
                plans={[
                    {

                        name: "Доставка до ПВЗ",
                        icon: PVZ,
                        mainFeature: "Доставка в пункты выдачи заказов наших партнеров",
                    },
                    {
                        name: "Доставка до постамата",
                        icon: PostMat,
                        mainFeature: "Выбирайте постамат удобный для вас и мы доставим ваши покупки именно туда",
                    },
                    {
                        name: "Доставка до двери",
                        icon: Dostavka,
                        mainFeature: "Скажите адрес и наш курьер доставит его прямо к вам до двери",
                    },
                ]}
            />
            <MainFeature2

                heading={
                    <>
                        Преимущества нашей службы <HighlightedText>доставки.</HighlightedText>
                    </>
                }
                imageSrc={prototypeIllustrationImageSrc}
                showDecoratorBlob={false}
                features={[
                    {
                        Icon: One,
                        title: "Дешевая доставка",
                        description: "При регистрации на сайте вы бесплатно получаете почтовый адрес склада для доставки ваших товаров.\n",

                    },
                    {
                        Icon: Two,
                        title: "Более 50 000 ПВЗ",
                        description: "Вы сможете воспользоваться доставкой в любой пункт выдачи заказов или постамат и забрать посылку по всему Казахстану.",

                    },
                    {
                        Icon: Three, // Adding another feature as requested
                        title: "Оплата и тенге",
                        description: "Все услуги и товары оплачиваются в тенге и валюте на ваше усмотрение. Различные методы оплаты.",

                    },
                ]}

            />

            <Testimonial

                heading={
                    <>
                        Новости и специальные  <HighlightedText>предложения!</HighlightedText>
                    </>
                }
                testimonials={[
                    {


                        heading: "Где покупать товары с выгодой",
                        quote:
                            "В США и Турции много мест для выгодных покупок. В США стоит обратить внимание на крупные сети, такие как Walmart и Target, а также на аутлеты. В Турции особенно популярны базары, например, Grand Bazaar в Стамбуле. Обе страны также предлагают сезонные распродажи и специальные предложения для экономии.",

                    },
                    {

                        heading: "Как правильно указывать адрес для доставки",
                        quote:
                            "Чтобы посылка точно пришла к нам на склад, важно правильно указать адрес доставки и следить за отслеживанием отправления. Также полезно выбирать доставку с надежными перевозчиками и использовать страхование, чтобы обеспечить защиту посылки в случае утраты или повреждения в пути.",

                    },
                    {

                        heading: "Топ-10 люксовых брендов сумочек",
                        quote:
                            "В мире существует множество роскошных брендов сумок, которые символизируют статус и изысканный вкус. Вот некоторые из самых известных и дорогих брендов сумок:\n" +
                            "\n" +
                            "Chanel - основанный Коко Шанель в 1910 году, Chanel известен своими стегаными кожаными сумками с цепочкой1.\n" +
                            "Fendi - изначально известный своими меховыми изделиями, Fendi теперь производит одни из самых дорогих сумок в мире1.",

                    }
                ]}
            />

            <Footer />
        </AnimationRevealPage>
    );
}
