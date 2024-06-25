import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Header from 'components/headers/Heafer';
import Footer from "components/footers/MainFooterWithLinks";
import DressRoom from "images/DressRoom.svg";
import UsaMap from "images/usa.svg";
import TurkeyMap from "images/TurkeyMap.svg";
import "CSS/calculator.css";
import AnimationRevealPage from "../helpers/AnimationRevealPage";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-12 lg:py-16`;
const ImageWrapper = tw.div`flex justify-center items-center flex-col md:flex-row`; // Adjust for vertical stacking on small screens and horizontal on medium and up
const InfoColumn = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;

const HeadingTitle = styled.h1`
    ${tw`font-bold text-4xl md:text-4xl lg:text-3xl xl:text-4xl leading-tight`}
    font-size: 34px;
    line-height: 42px;
    font-family: 'Gilroy Semibold';
    color: #2D2D2D;
`;

const HighlightedText = styled.span`
    ${tw`font-semibold text-black`}
    color: #2D2D2D; // Make it slightly bolder and in the color specified
`;

const MapTitle = styled.h2`
    ${tw`text-lg md:text-xl lg:text-2xl font-semibold`}
    margin-bottom: 20px;
    color: #2D2D2D;
    text-align: center; // Center the title
`;

const TableTitle = styled.h2`
    ${tw`font-semibold text-2xl my-4`}
    color: #2D2D2D;
`;

const StyledTable = styled.table`
    ${tw`w-full text-sm md:text-base border-collapse`}
    border: 2px solid #ccc; // Ensure the entire table has a border
    text-align: center; // Horizontally center the content
    vertical-align: middle; // Vertically center the content
    th, td {
        ${tw`border border-gray-400 px-4 py-2 text-left`} // Apply borders to each cell
    }
    th {
        ${tw`bg-gray-100`} // Optionally style the header differently
    }
    @media (max-width: 768px) {
        display: block;
        th, td {
            display: block;
            width: 100%;
            text-align: right;
            position: relative;
            padding-left: 50%;
            box-sizing: border-box;
        }
        th::before, td::before {
            content: attr(data-label);
            position: absolute;
            left: 0;
            width: 50%;
            padding-left: 10px;
            font-weight: bold;
            background-color: #f0f0f0;
            height: 100%;
            display: flex;
            align-items: center;
        }
    }
`;

const StyledClothingSizeTable = StyledTable;
const StyledShoeSizeTable = StyledTable;
const StyledShoeSizeConversionTable = StyledTable;

const InfoText = styled.p`
    ${tw`my-4 text-base md:text-lg lg:text-xl xl:text-xl`}
    font-size: 22px; // Set the font size
    line-height: 32px; // Set the line height
    color: #2D2D2D; // Maintain the color
    font-family: 'Gilroy Medium', sans-serif; // Set the font family, ensure a fallback
    font-weight: normal; // Regular text less bold than HighlightedText
`;

export default () => {
    return (
        <>
            <AnimationRevealPage>
                <Header
                    heading="Размеры одежды"
                    paragraph="При заказе одежды и обуви из других стран возникает вопрос о выборе правильного размера. Что же делать, если Вы хотите заказать желанную вещь, но боитесь прогадать с размером? Команда Eparcel рекомендует Вам совершить следующие действия"
                    imageSrc={DressRoom}
                    roundedHeaderButton={false}
                />
                <Container>
                    <Content>
                        <InfoColumn>
                            <InfoText>
                                <HighlightedText>1. Правильно снимите мерки.</HighlightedText> Чтобы точно определить свой размер, нужно замерить обхват груди, талии и бедер с  помощью сантиметровой ленты. Лента должна плотно прилегать к телу, но не деформировать кожу. Обхват груди и бедер замеряют в выступающих местах, а талию – в самом узком месте. Лента должна быть параллельна полу, а замеры проводятся в нижнем белье. Что касается обуви, необходимо измерить длину стопы при помощи листка бумаги и карандаша (встать на лист бумаги и обвести ногу карандашом). Для определения длины стопы измерьте расстояние между самыми удаленными точками на чертеже.<br/><br/>
                                <HighlightedText>2. Изучите таблицы размеров.</HighlightedText> Каждый производитель имеет свою таблицу размеров, поэтому перед заказом необходимо изучить таблицу размеров на сайте продавца. Обычно она находится на странице товара и содержит информацию о длине, ширине и объеме изделия.<br/><br/>
                                <HighlightedText>3. Обращайте внимание на материалы.</HighlightedText> При выборе одежды и обуви необходимо обращать внимание на материалы, из которых они изготовлены. Например, хлопок может садиться после стирки, а синтетические ткани могут быть неудобными для ношения.<br/><br/>
                                <HighlightedText>4. Изучите отзывы покупателей.</HighlightedText> Перед заказом товара необходимо изучить отзывы покупателей на сайте продавца или на других платформах-отзовиках. Это поможет Вам понять, как садится та или иная вещь, и определить, какие размеры подходят большинству людей.<br/><br/>
                                <HighlightedText>5. Пользуйтесь конвертерами размеров.</HighlightedText> Существуют специальные конвертеры размеров, которые помогают переводить размеры одежды и обуви из одной системы в другую. Использование таких инструментов поможет Вам выбрать правильный размер при заказе товаров из других стран.
                                <ImageWrapper>
                                    <MapTitle>Размеры для магазинов в США</MapTitle>
                                    <img src={UsaMap} alt="USA Map" style={{ maxWidth: '100%', height: 'auto', marginLeft: '20px' }} />
                                </ImageWrapper>
                                <br/>
                                В отличие от России, где используется система размеров, основанная на единицах измерения в сантиметрах, в США используются другие единицы измерения, такие как дюймы и футы.<br/><br/>
                                Размерная сетка для одежды<br/><br/>
                                В США размер одежды определяется по системе, которая основывается на мере груди, талии и бедер. Обычно размерная сетка для одежды включает в себя следующие размеры: <HighlightedText>XS</HighlightedText>  (экстра-маленький), <HighlightedText>S</HighlightedText> (маленький), <HighlightedText>M</HighlightedText> (средний), <HighlightedText>L</HighlightedText> (большой), <HighlightedText>XL</HighlightedText> (экстра-большой) и <HighlightedText>XXL</HighlightedText> (очень большой). Кроме того, в США используется также система размеров, основанная на росте и весе.<br/><br/>
                                Чтобы определить свой размер одежды в США, необходимо знать свои параметры – грудь, талию и бедра. Обычно размерная сетка для одежды включает в себя таблицу, которая позволяет определить свой размер на основе этих параметров. Например, если ваша грудь составляет 88 см, талия - 70 см и бедра - 94 см, то ваш размер одежды в США будет <HighlightedText>M</HighlightedText>.
                            </InfoText>
                        </InfoColumn>
                        <InfoColumn>
                            <TableTitle>Таблица женских размеров одежды из США</TableTitle>
                            <StyledTable>
                                <thead>
                                <tr>
                                    <th data-label="Размер, Россия">Размер, Россия</th>
                                    <th data-label="Международный стандарт">Международный стандарт</th>
                                    <th data-label="Обхват груди, см">Обхват груди, см</th>
                                    <th data-label="Обхват талии, см">Обхват талии, см</th>
                                    <th data-label="Обхват бедер, см">Обхват бедер, см</th>
                                    <th data-label="Длина рукава, см">Длина рукава, см</th>
                                    <th data-label="Размер, США">Размер, США</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td data-label="Размер, Россия">38</td>
                                    <td data-label="Международный стандарт">XXS</td>
                                    <td data-label="Обхват груди, см">76</td>
                                    <td data-label="Обхват талии, см">58</td>
                                    <td data-label="Обхват бедер, см">82</td>
                                    <td data-label="Длина рукава, см">58/60</td>
                                    <td data-label="Размер, США">0</td>
                                </tr>
                                <tr>
                                    <td data-label="Размер, Россия">40</td>
                                    <td data-label="Международный стандарт">XS</td>
                                    <td data-label="Обхват груди, см">80</td>
                                    <td data-label="Обхват талии, см">62</td>
                                    <td data-label="Обхват бедер, см">86</td>
                                    <td data-label="Длина рукава, см">59/61</td>
                                    <td data-label="Размер, США">2</td>
                                </tr>
                                <tr>
                                    <td data-label="Размер, Россия">42</td>
                                    <td data-label="Международный стандарт">S</td>
                                    <td data-label="Обхват груди, см">84</td>
                                    <td data-label="Обхват талии, см">66</td>
                                    <td data-label="Обхват бедер, см">92</td>
                                    <td data-label="Длина рукава, см">59/61</td>
                                    <td data-label="Размер, США">4</td>
                                </tr>
                                <tr>
                                    <td data-label="Размер, Россия">44</td>
                                    <td data-label="Международный стандарт">M</td>
                                    <td data-label="Обхват груди, см">88</td>
                                    <td data-label="Обхват талии, см">70</td>
                                    <td data-label="Обхват бедер, см">96</td>
                                    <td data-label="Длина рукава, см">60/62</td>
                                    <td data-label="Размер, США">6</td>
                                </tr>
                                <tr>
                                    <td data-label="Размер, Россия">46</td>
                                    <td data-label="Международный стандарт">M</td>
                                    <td data-label="Обхват груди, см">92</td>
                                    <td data-label="Обхват талии, см">74</td>
                                    <td data-label="Обхват бедер, см">100</td>
                                    <td data-label="Длина рукава, см">60/62</td>
                                    <td data-label="Размер, США">8</td>
                                </tr>
                                <tr>
                                    <td data-label="Размер, Россия">48</td>
                                    <td data-label="Международный стандарт">L</td>
                                    <td data-label="Обхват груди, см">96</td>
                                    <td data-label="Обхват талии, см">78</td>
                                    <td data-label="Обхват бедер, см">104</td>
                                    <td data-label="Длина рукава, см">60/62</td>
                                    <td data-label="Размер, США">10</td>
                                </tr>
                                <tr>
                                    <td data-label="Размер, Россия">50</td>
                                    <td data-label="Международный стандарт">L</td>
                                    <td data-label="Обхват груди, см">100</td>
                                    <td data-label="Обхват талии, см">82</td>
                                    <td data-label="Обхват бедер, см">108</td>
                                    <td data-label="Длина рукава, см">61/63</td>
                                    <td data-label="Размер, США">12</td>
                                </tr>
                                <tr>
                                    <td data-label="Размер, Россия">52</td>
                                    <td data-label="Международный стандарт">XL</td>
                                    <td data-label="Обхват груди, см">104</td>
                                    <td data-label="Обхват талии, см">86</td>
                                    <td data-label="Обхват бедер, см">112</td>
                                    <td data-label="Длина рукава, см">61/63</td>
                                    <td data-label="Размер, США">14</td>
                                </tr>
                                <tr>
                                    <td data-label="Размер, Россия">54</td>
                                    <td data-label="Международный стандарт">XXL</td>
                                    <td data-label="Обхват груди, см">108</td>
                                    <td data-label="Обхват талии, см">90</td>
                                    <td data-label="Обхват бедер, см">116</td>
                                    <td data-label="Длина рукава, см">61/63</td>
                                    <td data-label="Размер, США">16</td>
                                </tr>
                                <tr>
                                    <td data-label="Размер, Россия">56</td>
                                    <td data-label="Международный стандарт">XXL</td>
                                    <td data-label="Обхват груди, см">112</td>
                                    <td data-label="Обхват талии, см">94</td>
                                    <td data-label="Обхват бедер, см">120</td>
                                    <td data-label="Длина рукава, см">61/63</td>
                                    <td data-label="Размер, США">18</td>
                                </tr>
                                <tr>
                                    <td data-label="Размер, Россия">58</td>
                                    <td data-label="Международный стандарт">XXXL</td>
                                    <td data-label="Обхват груди, см">116</td>
                                    <td data-label="Обхват талии, см">98</td>
                                    <td data-label="Обхват бедер, см">124</td>
                                    <td data-label="Длина рукава, см">62/64</td>
                                    <td data-label="Размер, США">20</td>
                                </tr>
                                <tr>
                                    <td data-label="Размер, Россия">60</td>
                                    <td data-label="Международный стандарт">4XL</td>
                                    <td data-label="Обхват груди, см">120</td>
                                    <td data-label="Обхват талии, см">100</td>
                                    <td data-label="Обхват бедер, см">128</td>
                                    <td data-label="Длина рукава, см">62/64</td>
                                    <td data-label="Размер, США">22</td>
                                </tr>
                                <tr>
                                    <td data-label="Размер, Россия">62</td>
                                    <td data-label="Международный стандарт">4XL</td>
                                    <td data-label="Обхват груди, см">124</td>
                                    <td data-label="Обхват талии, см">104</td>
                                    <td data-label="Обхват бедер, см">132</td>
                                    <td data-label="Длина рукава, см">62,5/65</td>
                                    <td data-label="Размер, США">24</td>
                                </tr>
                                <tr>
                                    <td data-label="Размер, Россия">64</td>
                                    <td data-label="Международный стандарт">4XL</td>
                                    <td data-label="Обхват груди, см">128</td>
                                    <td data-label="Обхват талии, см">108</td>
                                    <td data-label="Обхват бедер, см">136</td>
                                    <td data-label="Длина рукава, см">62,5/65</td>
                                    <td data-label="Размер, США">26</td>
                                </tr>
                                </tbody>
                            </StyledTable>
                            <InfoText>
                            </InfoText>
                        </InfoColumn>
                        <InfoColumn>
                            <TableTitle>Таблица мужских размеров одежды из США</TableTitle>
                            <StyledTable>
                                <thead>
                                <tr>
                                    <th data-label="Размер, Россия">Размер, Россия</th>
                                    <th data-label="Международный стандарт">Международный стандарт</th>
                                    <th data-label="Обхват груди, см">Обхват груди, см</th>
                                    <th data-label="Обхват талии, см">Обхват талии, см</th>
                                    <th data-label="Обхват бедер, см">Обхват бедер, см</th>
                                    <th data-label="Длина рукава, см">Длина рукава, см</th>
                                    <th data-label="Размер, США">Размер, США</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td data-label="Размер, Россия">44</td>
                                    <td data-label="Международный стандарт">XS</td>
                                    <td data-label="Обхват груди, см">88</td>
                                    <td data-label="Обхват талии, см">70</td>
                                    <td data-label="Обхват бедер, см">92</td>
                                    <td data-label="Длина рукава, см">59</td>
                                    <td data-label="Размер, США">4</td>
                                </tr>
                                <tr>
                                    <td data-label="Размер, Россия">46</td>
                                    <td data-label="Международный стандарт">S</td>
                                    <td data-label="Обхват груди, см">92</td>
                                    <td data-label="Обхват талии, см">76</td>
                                    <td data-label="Обхват бедер, см">96</td>
                                    <td data-label="Длина рукава, см">60</td>
                                    <td data-label="Размер, США">6</td>
                                </tr>
                                <tr>
                                    <td data-label="Размер, Россия">48</td>
                                    <td data-label="Международный стандарт">M</td>
                                    <td data-label="Обхват груди, см">96</td>
                                    <td data-label="Обхват талии, см">82</td>
                                    <td data-label="Обхват бедер, см">100</td>
                                    <td data-label="Длина рукава, см">61</td>
                                    <td data-label="Размер, США">8</td>
                                </tr>
                                <tr>
                                    <td data-label="Размер, Россия">50</td>
                                    <td data-label="Международный стандарт">L</td>
                                    <td data-label="Обхват груди, см">100</td>
                                    <td data-label="Обхват талии, см">88</td>
                                    <td data-label="Обхват бедер, см">104</td>
                                    <td data-label="Длина рукава, см">62</td>
                                    <td data-label="Размер, США">10</td>
                                </tr>
                                <tr>
                                    <td data-label="Размер, Россия">52</td>
                                    <td data-label="Международный стандарт">L / XL</td>
                                    <td data-label="Обхват груди, см">104</td>
                                    <td data-label="Обхват талии, см">94</td>
                                    <td data-label="Обхват бедер, см">108</td>
                                    <td data-label="Длина рукава, см">63</td>
                                    <td data-label="Размер, США">12</td>
                                </tr>
                                <tr>
                                    <td data-label="Размер, Россия">54</td>
                                    <td data-label="Международный стандарт">XL</td>
                                    <td data-label="Обхват груди, см">108</td>
                                    <td data-label="Обхват талии, см">100</td>
                                    <td data-label="Обхват бедер, см">112</td>
                                    <td data-label="Длина рукава, см">63</td>
                                    <td data-label="Размер, США">14</td>
                                </tr>
                                <tr>
                                    <td data-label="Размер, Россия">56</td>
                                    <td data-label="Международный стандарт">XXL</td>
                                    <td data-label="Обхват груди, см">112</td>
                                    <td data-label="Обхват талии, см">106</td>
                                    <td data-label="Обхват бедер, см">116</td>
                                    <td data-label="Длина рукава, см">64</td>
                                    <td data-label="Размер, США">16</td>
                                </tr>
                                <tr>
                                    <td data-label="Размер, Россия">58</td>
                                    <td data-label="Международный стандарт">XXL</td>
                                    <td data-label="Обхват груди, см">116</td>
                                    <td data-label="Обхват талии, см">112</td>
                                    <td data-label="Обхват бедер, см">120</td>
                                    <td data-label="Длина рукава, см">64</td>
                                    <td data-label="Размер, США">18</td>
                                </tr>
                                <tr>
                                    <td data-label="Размер, Россия">60</td>
                                    <td data-label="Международный стандарт">XXXL</td>
                                    <td data-label="Обхват груди, см">120</td>
                                    <td data-label="Обхват талии, см">118</td>
                                    <td data-label="Обхват бедер, см">124</td>
                                    <td data-label="Длина рукава, см">65</td>
                                    <td data-label="Размер, США">20</td>
                                </tr>
                                <tr>
                                    <td data-label="Размер, Россия">62</td>
                                    <td data-label="Международный стандарт">XXXL</td>
                                    <td data-label="Обхват груди, см">124</td>
                                    <td data-label="Обхват талии, см">120</td>
                                    <td data-label="Обхват бедер, см">128</td>
                                    <td data-label="Длина рукава, см">65</td>
                                    <td data-label="Размер, США">22</td>
                                </tr>
                                <tr>
                                    <td data-label="Размер, Россия">64</td>
                                    <td data-label="Международный стандарт">4XL</td>
                                    <td data-label="Обхват груди, см">128</td>
                                    <td data-label="Обхват талии, см">124</td>
                                    <td data-label="Обхват бедер, см">132</td>
                                    <td data-label="Длина рукава, см">66</td>
                                    <td data-label="Размер, США">24</td>
                                </tr>
                                </tbody>
                            </StyledTable>
                            <InfoText>
                                Размерная сетка для обуви <br/> <br/>
                                Чтобы определить свой размер обуви в США, необходимо измерить длину стопы в дюймах. Обычно размерная сетка для обуви включает в себя таблицу, которая позволяет определить свой размер на основе этого параметра. Например, если длина вашей стопы составляет 9 дюймов, то ваш размер обуви в США будет 6.
                            </InfoText>
                        </InfoColumn>
                        <InfoColumn>
                            <InfoText>
                                <TableTitle>Таблица женских размеров обуви США на русский</TableTitle>
                                <StyledShoeSizeTable>
                                    <thead>
                                    <tr>
                                        <th data-label="Длина стопы (см)">Длина стопы (см)</th>
                                        <th data-label="22">22</th>
                                        <th data-label="22.5">22.5</th>
                                        <th data-label="23">23</th>
                                        <th data-label="23.5">23.5</th>
                                        <th data-label="24">24</th>
                                        <th data-label="24.5">24.5</th>
                                        <th data-label="25">25</th>
                                        <th data-label="25.5">25.5</th>
                                        <th data-label="26">26</th>
                                        <th data-label="26.5">26.5</th>
                                        <th data-label="27">27</th>
                                        <th data-label="27.5">27.5</th>
                                        <th data-label="28">28</th>
                                        <th data-label="28.5">28.5</th>
                                        <th data-label="29">29</th>
                                    </tr>
                                    <tr>
                                        <th data-label="Длина стопы (дюймы)">Длина стопы (дюймы)</th>
                                        <th data-label="8.7">8.7</th>
                                        <th data-label="8.9">8.9</th>
                                        <th data-label="9.1">9.1</th>
                                        <th data-label="9.3">9.3</th>
                                        <th data-label="9.4">9.4</th>
                                        <th data-label="9.6">9.6</th>
                                        <th data-label="9.8">9.8</th>
                                        <th data-label="10.0">10.0</th>
                                        <th data-label="10.2">10.2</th>
                                        <th data-label="10.4">10.4</th>
                                        <th data-label="10.6">10.6</th>
                                        <th data-label="10.8">10.8</th>
                                        <th data-label="11">11</th>
                                        <th data-label="11.2">11.2</th>
                                        <th data-label="11.4">11.4</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td data-label="Россия">35</td>
                                        <td data-label="35.5">35.5</td>
                                        <td data-label="36">36</td>
                                        <td data-label="36.5">36.5</td>
                                        <td data-label="37">37</td>
                                        <td data-label="37.5">37.5</td>
                                        <td data-label="38">38</td>
                                        <td data-label="38.5">38.5</td>
                                        <td data-label="39">39</td>
                                        <td data-label="39.5">39.5</td>
                                        <td data-label="40">40</td>
                                        <td data-label="40.5">40.5</td>
                                        <td data-label="41">41</td>
                                        <td data-label="41.5">41.5</td>
                                        <td data-label="42">42</td>
                                    </tr>
                                    <tr>
                                        <td data-label="США">5</td>
                                        <td data-label="5.5">5.5</td>
                                        <td data-label="6">6</td>
                                        <td data-label="6.5">6.5</td>
                                        <td data-label="7">7</td>
                                        <td data-label="7.5">7.5</td>
                                        <td data-label="8">8</td>
                                        <td data-label="8.5">8.5</td>
                                        <td data-label="9">9</td>
                                        <td data-label="9.5">9.5</td>
                                        <td data-label="10">10</td>
                                        <td data-label="10.5">10.5</td>
                                        <td data-label="11">11</td>
                                        <td data-label="11.5">11.5</td>
                                        <td data-label="12">12</td>
                                    </tr>
                                    </tbody>
                                </StyledShoeSizeTable>
                                <TableTitle>Таблица мужских размеров обуви США на русский</TableTitle>
                                <StyledShoeSizeTable>
                                    <thead>
                                    <tr>
                                        <th data-label="Длина стопы (см)">Длина стопы (см)</th>
                                        <th data-label="23.5">23.5</th>
                                        <th data-label="24">24</th>
                                        <th data-label="24.5">24.5</th>
                                        <th data-label="25">25</th>
                                        <th data-label="25.5">25.5</th>
                                        <th data-label="26">26</th>
                                        <th data-label="26.5">26.5</th>
                                        <th data-label="27">27</th>
                                        <th data-label="27.5">27.5</th>
                                        <th data-label="28">28</th>
                                        <th data-label="28.5">28.5</th>
                                        <th data-label="29">29</th>
                                        <th data-label="29.5">29.5</th>
                                        <th data-label="30">30</th>
                                        <th data-label="30.5">30.5</th>
                                        <th data-label="31">31</th>
                                        <th data-label="31.5">31.5</th>
                                    </tr>
                                    <tr>
                                        <th data-label="Длина стопы (дюймы)">Длина стопы (дюймы)</th>
                                        <th data-label="9.3">9.3</th>
                                        <th data-label="9.4">9.4</th>
                                        <th data-label="9.6">9.6</th>
                                        <th data-label="9.8">9.8</th>
                                        <th data-label="10.0">10.0</th>
                                        <th data-label="10.2">10.2</th>
                                        <th data-label="10.4">10.4</th>
                                        <th data-label="10.6">10.6</th>
                                        <th data-label="10.8">10.8</th>
                                        <th data-label="11.0">11.0</th>
                                        <th data-label="11.2">11.2</th>
                                        <th data-label="11.4">11.4</th>
                                        <th data-label="11.6">11.6</th>
                                        <th data-label="11.8">11.8</th>
                                        <th data-label="12.0">12.0</th>
                                        <th data-label="12.2">12.2</th>
                                        <th data-label="12.4">12.4</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td data-label="Россия">36.5</td>
                                        <td data-label="37">37</td>
                                        <td data-label="37.5">37.5</td>
                                        <td data-label="38">38</td>
                                        <td data-label="39">39</td>
                                        <td data-label="40">40</td>
                                        <td data-label="40.5">40.5</td>
                                        <td data-label="41">41</td>
                                        <td data-label="42">42</td>
                                        <td data-label="43">43</td>
                                        <td data-label="43.5">43.5</td>
                                        <td data-label="44">44</td>
                                        <td data-label="44.5">44.5</td>
                                        <td data-label="45">45</td>
                                        <td data-label="45.5">45.5</td>
                                        <td data-label="46">46</td>
                                        <td data-label="46.5">46.5</td>
                                    </tr>
                                    <tr>
                                        <td data-label="США">5.5</td>
                                        <td data-label="6">6</td>
                                        <td data-label="6.5">6.5</td>
                                        <td data-label="7">7</td>
                                        <td data-label="7.5">7.5</td>
                                        <td data-label="8">8</td>
                                        <td data-label="8.5">8.5</td>
                                        <td data-label="9">9</td>
                                        <td data-label="9.5">9.5</td>
                                        <td data-label="10">10</td>
                                        <td data-label="10.5">10.5</td>
                                        <td data-label="11">11</td>
                                        <td data-label="11.5">11.5</td>
                                        <td data-label="12">12</td>
                                        <td data-label="12.5">12.5</td>
                                        <td data-label="13">13</td>
                                        <td data-label="13.5">13.5</td>
                                    </tr>
                                    </tbody>
                                </StyledShoeSizeTable>
                                <ImageWrapper>
                                    <MapTitle>Размеры для магазинов в Турций</MapTitle>
                                    <img src={TurkeyMap} alt="USA Map" style={{ maxWidth: '100%', height: 'auto', marginLeft: '20px' }} />
                                </ImageWrapper>
                                <br/>
                                Размерная сетка для одежды <br/> <br/>
                                Чтобы определить свой размер одежды в Турции, необходимо знать свои параметры – грудь, талию и бедра. Обычно размерная сетка для одежды включает в себя таблицу, которая позволяет определить свой размер на основе этих параметров.
                                <TableTitle>Таблица соответствий размеров женской одежды</TableTitle>
                                <StyledClothingSizeTable>
                                    <thead>
                                    <tr>
                                        <th data-label="Турецкие размеры (TR)">Турецкие размеры (TR)</th>
                                        <th data-label="36">36</th>
                                        <th data-label="38">38</th>
                                        <th data-label="40">40</th>
                                        <th data-label="42">42</th>
                                        <th data-label="44">44</th>
                                        <th data-label="46">46</th>
                                        <th data-label="48">48</th>
                                    </tr>
                                    <tr>
                                        <th data-label="Международные размеры">Международные размеры</th>
                                        <th data-label="S">S</th>
                                        <th data-label="M">M</th>
                                        <th data-label="L">L</th>
                                        <th data-label="XL">XL</th>
                                        <th data-label="XXL">XXL</th>
                                        <th data-label="XXXL">XXXL</th>
                                        <th data-label="4XL">4XL</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td data-label="Российские размеры (RU)">42</td>
                                        <td data-label="44">44</td>
                                        <td data-label="46">46</td>
                                        <td data-label="48">48</td>
                                        <td data-label="50">50</td>
                                        <td data-label="52">52</td>
                                        <td data-label="54">54</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Европейские размеры (EU)">36</td>
                                        <td data-label="38">38</td>
                                        <td data-label="40">40</td>
                                        <td data-label="42">42</td>
                                        <td data-label="44">44</td>
                                        <td data-label="46">46</td>
                                        <td data-label="48">48</td>
                                    </tr>
                                    <tr>
                                        <td data-label="США">2</td>
                                        <td data-label="4">4</td>
                                        <td data-label="6">6</td>
                                        <td data-label="8">8</td>
                                        <td data-label="10">10</td>
                                        <td data-label="12">12</td>
                                        <td data-label="14">14</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Англия">6</td>
                                        <td data-label="8">8</td>
                                        <td data-label="10">10</td>
                                        <td data-label="12">12</td>
                                        <td data-label="14">14</td>
                                        <td data-label="16">16</td>
                                        <td data-label="18">18</td>
                                    </tr>
                                    </tbody>
                                </StyledClothingSizeTable>
                                <TableTitle>Размерная сетка для обуви</TableTitle> <br/>
                                Чтобы определить свой размер обуви в Турции, необходимо измерить длину стопы в сантиметрах. Обычно размерная сетка для обуви включает в себя таблицу, которая позволяет определить свой размер на основе этого параметра. <br/> <br/>
                                <StyledShoeSizeConversionTable>
                                    <thead>
                                    <tr>
                                        <th data-label="США">США</th>
                                        <th data-label="Европа">Европа</th>
                                        <th data-label="Россия">Россия</th>
                                        <th data-label="Сантиметры">Сантиметры</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr><td data-label="США">5</td><td data-label="Европа">35</td><td data-label="Россия">35</td><td data-label="Сантиметры">22.8</td></tr>
                                    <tr><td data-label="США">5.5</td><td data-label="Европа">35.5</td><td data-label="Россия">35.5</td><td data-label="Сантиметры">23.1</td></tr>
                                    <tr><td data-label="США">6</td><td data-label="Европа">36 (3)</td><td data-label="Россия">35-36</td><td data-label="Сантиметры">23.5</td></tr>
                                    <tr><td data-label="США">6.5</td><td data-label="Европа">37 (4)</td><td data-label="Россия">36</td><td data-label="Сантиметры">23.8</td></tr>
                                    <tr><td data-label="США">7</td><td data-label="Европа">37.5 (4.5)</td><td data-label="Россия">36.5</td><td data-label="Сантиметры">24.1</td></tr>
                                    <tr><td data-label="США">7.5</td><td data-label="Европа">38 (5)</td><td data-label="Россия">37</td><td data-label="Сантиметры">24.5</td></tr>
                                    <tr><td data-label="США">8</td><td data-label="Европа">38.5 (5.5)</td><td data-label="Россия">37.5</td><td data-label="Сантиметры">24.8</td></tr>
                                    <tr><td data-label="США">8.5</td><td data-label="Европа">39 (6)</td><td data-label="Россия">38</td><td data-label="Сантиметры">25.1</td></tr>
                                    <tr><td data-label="США">9</td><td data-label="Европа">40 (6.5)</td><td data-label="Россия">39</td><td data-label="Сантиметры">25.4</td></tr>
                                    <tr><td data-label="США">9.5</td><td data-label="Европа">40.5 (7)</td><td data-label="Россия">39.5</td><td data-label="Сантиметры">25.7</td></tr>
                                    <tr><td data-label="США">10</td><td data-label="Европа">41 (7.5)</td><td data-label="Россия">40</td><td data-label="Сантиметры">26.0</td></tr>
                                    <tr><td data-label="США">10.5</td><td data-label="Европа">42 (8.5)</td><td data-label="Россия">41</td><td data-label="Сантиметры">26.7</td></tr>
                                    <tr><td data-label="США">11</td><td data-label="Европа">42.2</td><td data-label="Россия">41.5</td><td data-label="Сантиметры">27.6</td></tr>
                                    </tbody>
                                </StyledShoeSizeConversionTable>
                                <br/>
                                Важно помнить, что размеры одежды и обуви могут немного отличаться в разных магазинах и брендах. Поэтому перед покупкой всегда стоит проверять таблицу размеров для конкретного бренда и магазина. <br/> <br/>
                                Правильный выбор размера одежды и обуви – это гарантия комфорта и удобства. При покупке товаров за рубежом с доставкой в Россию необходимо учитывать особенности таблиц размеров и материалов, обращать внимание на отзывы покупателей и использовать конвертеры размеров. Так, любая заказанная вещь сядет идеально.
                            </InfoText>
                        </InfoColumn>
                    </Content>
                </Container>
                <Footer/>
            </AnimationRevealPage>
        </>
    );
};
