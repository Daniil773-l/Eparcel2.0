import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/hero/HeaderTariff";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js";
import Footer from "components/footers/MainFooterWithLinks";
import "./CSS/IncludedServicesSectionTariff.css";
import Icon1 from "./images/TarifPost.svg";
import Icon2 from "./images/TarrifPoluchenia.svg";
import Icon3 from "./images/TarrifReg.svg";
import Icon4 from "./images/TarrifYpokovka.svg";
import Icon5 from "./images/TarrifDost.svg";
import Icon6 from "./images/TarrifOform.svg";


import tw from "twin.macro";
import DutyCalculator from "./customsDutyCalculator";
import MainFeature1 from "components/features/TwoColWithTwoHorizontalFeaturesAndButton1.js";
import styled from "styled-components";
import prototypeIllustrationImageSrc from "images/prototype-illustration.svg";
import Calculator from "./calculator";

export default () => {
    const Subheading = tw.span`uppercase tracking-widest font-bold text-primary-500`;
    const HighlightedText = tw.span`text-primary-500`;

    const Prim = styled.span`
        ${tw`text-center text-primary-500 md:text-left`} // Применяем основные стили от tw.macro
        color: #0ABD19; // Устанавливаем желаемый цвет
    `;
    const Heading = tw.h2`w-full text-2xl sm:text-3xl font-black tracking-wide text-center`;
    const Description = tw.p`w-full text-center text-sm md:text-base`;
    const HeaderContainer = tw.div`w-full flex flex-col items-center`;

    const TableContainer = styled.div`
        ${tw`w-full flex justify-center`}
        max-width: 1280px;
        margin: 0 auto;
        overflow-x: auto;
    `;

    const StyledTable = styled.table`
        ${tw`w-full text-sm md:text-base border-collapse`}
        border: 2px solid #0ABD19;
        text-align: center;
        vertical-align: middle;
        th, td {
            ${tw`border px-4 py-2 text-left`}
            border-color: #0ABD19;
            padding: 8px; // Increase padding for better spacing
        }
        th {
            ${tw`bg-gray-100`}
        }
        tbody tr:nth-child(even) {
            ${tw`bg-gray-100`} // Alternate row background color
        }
    `;

    return (
        <AnimationRevealPage>
            <Header roundedHeaderButton={true}/>
            <HeaderContainer>
                <Heading>Тарифы</Heading>
            </HeaderContainer>
            <TableContainer>
                <StyledTable>
                    <thead>
                    <tr>
                        <td>Вес отправленный</td>
                        <td>Зона1</td>
                        <td>Зона2</td>
                        <td>Зона3</td>
                        <td>Зона4</td>
                        <td>Зона5</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{"< 0.3 кг"}</td>
                        <td>1800</td>
                        <td>2100</td>
                        <td>3000</td>
                        <td>3800</td>
                        <td>4800</td>
                    </tr>
                    <tr>
                        <td>{"< 0,5 кг"}</td>
                        <td>2100</td>
                        <td>2400</td>
                        <td>3300</td>
                        <td>4100</td>
                        <td>5100</td>
                    </tr>
                    <tr>
                        <td>{"< 1 кг"}</td>
                        <td>2400</td>
                        <td>2700</td>
                        <td>3700</td>
                        <td>4300</td>
                        <td>5400</td>

                    </tr>
                    <tr>
                        <td>{"< 1,5 кг"}</td>
                        <td>2700</td>
                        <td>3000</td>
                        <td>3900</td>
                        <td>4700</td>
                        <td>5700</td>

                    </tr>
                    <tr>
                        <td>{"< 2 кг"}</td>
                        <td>2900</td>
                        <td>3300</td>
                        <td>4200</td>
                        <td>5000</td>
                        <td>6000</td>
                    </tr>
                    <tr>
                        <td>за каждые
                            следующие + 0,5 кг
                        </td>
                        <td>350 тенге</td>
                        <td>450 тенге</td>
                        <td>500 тенге</td>
                        <td>550 тенге</td>
                        <td>600 тенге</td>
                    </tr>
                    <tr>
                        <td>Срок доставки</td>
                        <td>1-3</td>
                        <td>1-3</td>
                        <td>2-5</td>
                        <td>3-6</td>
                        <td>3-6</td>
                    </tr>
                    <tr>
                        <td>Зона покрытия</td>
                        <td>Алматы, Астана, Караганда, Кокшетау, Костанай, Кызылорда, Павлодар, Петропавловск, Семей Тараз, Талдыкорган,
                            Оскемен, Шымкент</td>
                        <td>Актау, Атырау, Уральск, Актобе, Туркестан</td>
                        <td>Балхаш, Жезказган, Темиртау, Аксай, Аксу, Байконур, Степногорск, Экибастуз, Жанаозен</td>
                        <td>Хромтау, Баутино, Шетпе, Курык, Алга, Кандыагаш, Кульсары, Аягоз, Шахтинск, Риддер, Рудный, Щучинск, Лисаковск, Зыряновск, Шемонаиха, Жаркент,
                            Уштобе, Кордай, Арыс</td>
                        <td>Бейнеу, Каратон, Тенгиз, Жанажол, Жетикара, Приозерск, Сатпаев, Сарыагаш и иные города и районы РК, не указанные в  <br/>Зоне 4</td>
                    </tr>
                    </tbody>
                </StyledTable>
            </TableContainer>
            <section className="included-services-section">
                <div className="container">
                    <h2>В стоимость тарифа включено:</h2>
                    <div className="services-list">
                        <img src={Icon1} alt="Описание"/>
                        <img src={Icon2} alt="Описание"/>
                        <img src={Icon3} alt="Описание"/>
                        <img src={Icon4} alt="Описание"/>
                        <img src={Icon5} alt="Описание"/>
                        <img src={Icon6} alt="Описание"/>
                    </div>
                </div>
            </section>
            <MainFeature1
                subheading={< Prim></ Prim>}
                heading={
                    <>
                        Рассчитайте стоимость <Prim>доставки</Prim>
                    </>
                }

                showDecoratorBlob={false}
            />
            <DutyCalculator/>


            <Footer/>
        </AnimationRevealPage>
    );
};
