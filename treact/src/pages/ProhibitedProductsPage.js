import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Header from 'components/headers/LoginPageHeader';
import Footer from "components/footers/MainFooterWithLinks";
import {TbDashboard} from "react-icons/tb";
import Products from "images/ProhibitedProducts.svg"
import "CSS/calculator.css";
import DataIcon from "images/data.jpg";
import GunIcon from "images/gun.jpg";
import ToxicIcon from "images/toxic.jpg";
import SprayIcon from "images/spray.jpg";
import DrugIcon from "images/rast.jpg";
import HeartIcon from "images/organ.jpg";
import SobelIcon from "images/sobol.jpg";
import DiamondIcon from "images/diamond.jpg";
import MineralIcon from "images/miniral.jpg";
import MapIcon from "images/map.jpg";
import TreeIcon from "images/tree.jpg";
import FishIcon from "images/fish.jpg";
import PoisonIcon from "images/poison.jpg";
import MoneyIcon from "images/money.jpg";
import CrossIcon from "images/cross.jpg";
import BunnyIcon from "images/bunny.jpg";
import DogIcon from "images/dog.jpg";
import SeedIcon from "images/seed.jpg";
import GearIcon from "images/gear.jpg";
import CandleIcon from "images/candle.jpg";
import FireIcon from "images/fire.jpg";
import CamIcon from "images/cam.jpg";
import PictureIcon from "images/picture.jpg";
import AccIcon from "images/acc.jpg";
import MedicIcon from "images/medic.jpg";
import FruitIcon from "images/fruit.jpg";
import SmokeIcon from "images/smoke.jpg";
import TimerIcon from "images/timer.jpg";
import WtfIcon from "images/wtf.jpg";
import AnyIcon from "images/any.jpg";

import {fireEvent} from "@testing-library/react";
import {SiMoleculer} from "react-icons/si";



const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-12 lg:py-16`;
const ImageWrapper = tw.div`flex justify-center items-center flex-col md:flex-row`; // Adjust for vertical stacking on small screens and horizontal on medium and up
const InfoColumn = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;

const HeadingTitle = styled.h1`
    ${tw`text-4xl md:text-4xl lg:text-3xl xl:text-4xl leading-tight`}
    font-size: 32px;
    font-weight: normal;
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
`;

const StyledClothingSizeTable = styled.table`
  ${tw`w-full text-sm md:text-base border-collapse`}
  border: 2px solid #ccc;
    text-align: center; // Horizontally center the content
    vertical-align: middle; // Vertically center the content
  th, td {
    ${tw`border border-gray-400 px-4 py-2 text-center`} // Center-align text in cells
  }
  th {
    ${tw`bg-gray-100`}
  }
`;

const StyledShoeSizeTable = styled.table`
  ${tw`w-full text-sm md:text-base border-collapse`}
  border: 2px solid #ccc;
    text-align: center; // Horizontally center the content
    vertical-align: middle; // Vertically center the content
  th, td {
    ${tw`border border-gray-400 px-4 py-2 text-center`} // Center-align text in cells
  }
  th {
    ${tw`bg-gray-100`}
  }
`;

const StyledShoeSizeConversionTable = styled.table`
  ${tw`w-full text-sm md:text-base border-collapse`}
  border: 2px solid #ccc;
    text-align: center; // Horizontally center the content
    vertical-align: middle; // Vertically center the content
  th, td {
    ${tw`border border-gray-400 px-4 py-2 text-center`} // Center-align text in cells
  }
  th {
    ${tw`bg-gray-100`}
  }
`;

const InfoText = styled.p`
    ${tw`my-4 text-base md:text-lg lg:text-xl xl:text-xl`}
    font-size: 22px; // Set the font size
    line-height: 32px; // Set the line height
    color: #2D2D2D; // Maintain the color
    font-family: 'Gilroy Medium', sans-serif; // Set the font family, ensure a fallback
    font-weight: normal; // Regular text less bold than HighlightedText
`;
const TableText = styled.p`
    ${tw`my-4 text-base md:text-lg lg:text-xl xl:text-xl`}
    font-size: 30px; // Set the font size
    font-weight: normal; // Regular text less bold than HighlightedText
    line-height: 32px; // Set the line height
    color: #2D2D2D; // Maintain the color
    font-family: 'Gilroy Medium', sans-serif; // Set the font family, ensure a fallback
    
`;

const Break = styled.div`
  ${tw`my-4`}
`;


export default () => {
    return (
        <>
            <Header/>
            <Container>
                <Content>
                    <InfoColumn>
                        <HeadingTitle>Запрещенные товары</HeadingTitle>
                    </InfoColumn>
                    <ImageWrapper>
                        <img src={Products} alt="ProhibitedProducts" />
                    </ImageWrapper>
                    <InfoColumn>
                        <InfoText>
                            Согласно Решению Коллегии ЕЭК от 21 апреля 2015 г. № 30 при ввозе товаров физическими лицами
                            для личного пользования применяются запреты на ввоз и ввоз товаров, а также ряд ограничений
                            (в том числе разрешительный порядок ввоза и вывоза).
                            <Break/>
                            <br/>
                            Запрещенные к ввозу товары вообще нельзя перемещать через таможенную границу ни при каких
                            обстоятельствах ни физическим, ни юридическим лицам.
                            <Break/>

                            Перечень товаров, в отношении которых установлен запрет ввоза на таможенную территорию ЕАЭС:
                            <Break/>

                        </InfoText>
                    </InfoColumn>
                    <InfoColumn>
                        <TableText>
                            <StyledTable>
                                <tbody>
                                <tr>
                                    <td><img src={DataIcon}/></td>
                                    <td>Информация на печатных, аудиовизуальных и иных носителях информации</td>
                                </tr>
                                <tr>
                                    <td><img src={GunIcon}/></td>
                                    <td>Служебное и гражданское оружие, его основные части, и патроны к нему</td>
                                </tr>
                                <tr>
                                    <td><img src={ToxicIcon}/></td>
                                    <td>Опасные отходы</td>
                                </tr>
                                <tr>
                                    <td><img src={SprayIcon}/></td>
                                    <td>Озоноразрушающие вещества и продукция, содержащая озоноразрушающие вещества</td>
                                </tr>
                                <tr>
                                    <td><img src={DrugIcon}/></td>
                                    <td>Наркотические средства, психотропные вещества и их прекурсоры, за исключением
                                        ограниченных количеств наркотических средств и психотропных веществ в виде
                                        лекарственных средств для личного применения по медицинским показаниям при
                                        наличии подтверждающих медицинских документов с указанием наименования и
                                        количества товара, а также прекурсоров в объемах, определенных законодательством
                                        государства - члена Союза
                                    </td>
                                </tr>
                                <tr>
                                    <td><img src={HeartIcon}/></td>
                                    <td>Органы и (или) ткани человека, кровь и ее компоненты</td>
                                </tr>
                                <tr>
                                    <td><img src={SobelIcon}/></td>
                                    <td>Соболи живые</td>
                                </tr>
                                <tr>
                                    <td><img src={DiamondIcon}/></td>
                                    <td>Необработанные драгоценные металлы, лом и отходы драгоценных металлов, руды и
                                        концентраты драгоценных металлов и сырьевых товаров, содержащих драгоценные
                                        металлы
                                    </td>
                                </tr>
                                <tr>
                                    <td><img src={MineralIcon}/></td>
                                    <td>Виды минерального сырья</td>
                                </tr>
                                <tr>
                                    <td><img src={MapIcon}/></td>
                                    <td>Информация о недрах по районам и месторождениям топливно-энергетического и
                                        минерального сырья
                                    </td>
                                </tr>
                                <tr>
                                    <td><img src={TreeIcon}/></td>
                                    <td>Средства защиты растений и другие стойкие органические загрязнители
                                    </td>
                                </tr>
                                <tr>
                                    <td><img src={FishIcon}/></td>
                                    <td>Орудия добычи (вылова) водных биологических ресурсов
                                    </td>
                                </tr>
                                <tr>
                                    <td><img src={PoisonIcon}/></td>
                                    <td>Ядовитые вещества, не являющиеся прекурсорами наркотических средств и психотропных веществ
                                    </td>
                                </tr>
                                </tbody>
                            </StyledTable>
                        </TableText>
                        <InfoText>Дополнительный перечень товаров, которые наша компания не доставляет:</InfoText>
                        <TableText>
                            <StyledTable>
                                <tbody>
                                <tr>
                                    <td><img src={MoneyIcon}/></td>
                                    <td>Информация на печатных, аудиовизуальных и иных носителях информации: подарочные карты, монеты, наличные деньги и их эквиваленты, банкноты и любых финансовых инструментов, включая (но не ограничиваясь) платежные и дисконтные карты, купоны, подарочные сертификаты, а равно их реквизиты</td>
                                </tr>
                                <tr>
                                    <td><img src={CrossIcon}/></td>
                                    <td>Служебное и гражданское оружие, его основные части и патроны к нему: приборов ночного видения, электрошокеров, оптических прицелов, аксессуаров (приспособлений, улучшающих эксплуатационные характеристики оружия), инструментов, экипировки, а также тепловизоров для смартфонов, охотничьих, строительных и прочих подобных товаров. Продукция военного и двойного назначения</td>
                                </tr>
                                <tr>
                                    <td><img src={BunnyIcon}/></td>
                                    <td>Видеопродукция и печатные издания порнографического содержания</td>
                                </tr>
                                <tr>
                                    <td><img src={DogIcon}/></td>
                                    <td>Дикие и (или) домашние животные, корма для животных</td>
                                </tr>
                                <tr>
                                    <td><img src={SeedIcon}/></td>
                                    <td>Растения и семена, удобрения
                                    </td>
                                </tr>
                                <tr>
                                    <td><img src={GearIcon}/></td>
                                    <td>Автозапчасти содержащие жидкости и масло</td>
                                </tr>
                                <tr>
                                    <td><img src={CandleIcon}/></td>
                                    <td>Ароматизаторы и свечи</td>
                                </tr>
                                <tr>
                                    <td><img src={FireIcon}/></td>
                                    <td>Взрывчатые, озоноразрушающие легковоспламеняющиеся, окисляющие, ядовитые, токсичные, отравляющие, жидкости и предметы
                                    </td>
                                </tr>
                                <tr>
                                    <td><img src={FishIcon}/></td>
                                    <td>Орудия добычи (вылова) водных биологических ресурсов</td>
                                </tr>
                                <tr>
                                    <td><img src={CamIcon}/></td>
                                    <td>Специальные технические средства, предназначенные для негласного получения информации, шифровальные (криптографические) средства, радиоэлектронные средства и (или) высокочастотные устройства гражданского назначения, в том числе встроенные либо входящие в состав других товаров
                                    </td>
                                </tr>
                                <tr>
                                    <td><img src={DiamondIcon}/></td>
                                    <td>Драгоценные камни и металлы, сырьевые товары
                                    </td>
                                </tr>
                                <tr>
                                    <td><img src={DrugIcon}/></td>
                                    <td>Лекарственные средства содержащие наркотические средства, психотропные вещества и их прекурсоры
                                    </td>
                                </tr>
                                <tr>
                                    <td><img src={PictureIcon}/></td>
                                    <td>Коллекции и предметы коллекционирования, культурные ценности, документы национальных; архивных фондов, оригиналы архивных документов: антиквариата, картин и прочих предметов, представляющих художественную и музейную ценность
                                    </td>
                                </tr>
                                <tr>
                                    <td><img src={AccIcon}/></td>
                                    <td>Товары, содержащие аккумуляторными батарейками Li-ion АКБ
                                    </td>
                                </tr>
                                <tr>
                                    <td><img src={MedicIcon}/></td>
                                    <td>Медицинские товары приборы
                                    </td>
                                </tr>
                                <tr>
                                    <td><img src={FruitIcon}/></td>
                                    <td>Скоропортящиеся товары
                                    </td>
                                </tr>
                                <tr>
                                    <td><img src={SmokeIcon}/></td>
                                    <td>Табачная продукция
                                    </td>
                                </tr>
                                <tr>
                                    <td><img src={TimerIcon}/></td>
                                    <td>Товары, на которые наложены временные запреты на их ввоз на территорию РФ и ЕАЭС
                                    </td>
                                </tr>
                                <tr>
                                    <td><img src={WtfIcon}/></td>
                                    <td>Неопознанные товары, не имеющих никаких данных и информации
                                    </td>
                                </tr>
                                <tr>
                                    <td><img src={AnyIcon}/></td>
                                    <td>Товары не относящиеся для личного пользования согласно Решению Коллегии ЕЭК от 21 апреля 2015 г. № 30
                                    </td>
                                </tr>
                                </tbody>
                            </StyledTable>
                        </TableText>
                    </InfoColumn>
                </Content>
            </Container>
            <Footer/>
        </>
    );
};
