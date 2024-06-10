import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
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
    font-family: 'Gilroy Medium', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

    color: #2D2D2D;
`;

const CardWrapper = tw.div`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8`;
const Card = styled.div`
    ${tw`flex flex-col items-center p-4 bg-white shadow-lg rounded-lg text-center`}
    img {
        ${tw`w-16 h-16 mb-4`}
    }
    p {
        ${tw`flex-grow`}
            /* Allow text to expand horizontally */
        min-width: 0; /* Reset min-width */
        overflow: hidden; /* Hide overflow text */
        text-overflow: ellipsis; /* Show ellipsis for overflow text */
        width: ${props => props.expanded ? '70%' : '100%'}; /* Set width to 70% if expanded, otherwise 100% */
        margin: auto; /* Center align text */
    }
`;

const InfoText = tw.p`text-base text-gray-700 mt-4`;
const Break = tw.br``;

const prohibitedItems = [
    { icon: DataIcon, description: "Информация на печатных, аудиовизуальных и иных носителях информации", },
    { icon: GunIcon, description: "Служебное и гражданское оружие, его основные части, и патроны к нему" },
    { icon: ToxicIcon, description: "Опасные отходы" },
    { icon: SprayIcon, description: "Озоноразрушающие вещества и продукция, содержащая озоноразрушающие вещества" },
    { icon: PoisonIcon, description: "Ядовитые вещества, не являющиеся прекурсорами наркотических средств и психотропных веществ" },
    { icon: HeartIcon, description: "Органы и (или) ткани человека, кровь и ее компоненты" },
    { icon: SobelIcon, description: "Соболи живые" },
    { icon: CandleIcon, description: "Ароматизаторы и свечи" },
    { icon: MineralIcon, description: "Виды минерального сырья" },
    { icon: MapIcon, description: "Информация о недрах по районам и месторождениям топливно-энергетического и минерального сырья" },
    { icon: TreeIcon, description: "Средства защиты растений и другие стойкие органические загрязнители" },
    { icon: FishIcon, description: "Орудия добычи (вылова) водных биологических ресурсов" },
    { icon: DrugIcon, description: "Наркотические средства, психотропные вещества и их прекурсоры, за исключением ограниченных количеств наркотических средств и психотропных веществ в виде лекарственных средств для личного применения по медицинским показаниям при наличии подтверждающих медицинских документов с указанием наименования и количества товара, а также прекурсоров в объемах, определенных законодательством государства - члена Союза", },
    { icon: MoneyIcon, description: "Информация на печатных, аудиовизуальных и иных носителях информации: подарочные карты, монеты, наличные деньги и их эквиваленты, банкноты и любых финансовых инструментов, включая (но не ограничиваясь) платежные и дисконтные карты, купоны, подарочные сертификаты, а равно их реквизиты" },
    { icon: CrossIcon, description: "Служебное и гражданское оружие, его основные части и патроны к нему: приборов ночного видения, электрошокеров, оптических прицелов, аксессуаров (приспособлений, улучшающих эксплуатационные характеристики оружия), инструментов, экипировки, а также тепловизоров для смартфонов, охотничьих, строительных и прочих подобных товаров. Продукция военного и двойного назначения" },
    { icon: BunnyIcon, description: "Видеопродукция и печатные издания порнографического содержания" },
    { icon: DogIcon, description: "Дикие и (или) домашние животные, корма для животных" },
    { icon: SeedIcon, description: "Растения и семена, удобрения" },
    { icon: DrugIcon, description: "Лекарственные средства содержащие наркотические средства, психотропные вещества и их прекурсоры" },
    { icon: DiamondIcon, description: "Необработанные драгоценные металлы, лом и отходы драгоценных металлов, руды и концентраты драгоценных металлов и сырьевых товаров, содержащих драгоценные металлы" },
    { icon: FireIcon, description: "Взрывчатые, озоноразрушающие легковоспламеняющиеся, окисляющие, ядовитые, токсичные, отравляющие, жидкости и предметы" },
    { icon: PictureIcon, description: "Коллекции и предметы коллекционирования, культурные ценности, документы национальных; архивных фондов, оригиналы архивных документов: антиквариата, картин и прочих предметов, представляющих художественную и музейную ценность" },
    { icon: CamIcon, description: "Специальные технические средства, предназначенные для негласного получения информации, шифровальные (криптографические) средства, радиоэлектронные средства и (или) высокочастотные устройства гражданского назначения, в том числе встроенные либо входящие в состав других товаров" },
    { icon: DiamondIcon, description: "Драгоценные камни и металлы, сырьевые товары" },
    { icon: GearIcon, description: "Автозапчасти содержащие жидкости и масло" },
    { icon: FishIcon, description: "Орудия добычи (вылова) водных биологических ресурсов" },
    { icon: AccIcon, description: "Товары, содержащие аккумуляторными батарейками Li-ion АКБ" },
    { icon: MedicIcon, description: "Медицинские товары приборы" },
    { icon: FruitIcon, description: "Скоропортящиеся товары" },
    { icon: SmokeIcon, description: "Табачная продукция" },
    { icon: TimerIcon, description: "Товары, на которые наложены временные запреты на их ввоз на территорию РФ и ЕАЭС" },
    { icon: WtfIcon, description: "Неопознанные товары, не имеющих никаких данных и информации" },
    { icon: AnyIcon, description: "Товары не относящиеся для личного пользования согласно Решению Коллегии ЕЭК от 21 апреля 2015 г. № 30" }
];

const ProhibitedItems = () => (
    <>
        <AnimationRevealPage>
            <Header />
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
                            <Break />
                            <br />
                            Запрещенные к ввозу товары вообще нельзя перемещать через таможенную границу ни при каких
                            обстоятельствах ни физическим, ни юридическим лицам.
                            <Break />
                            Перечень товаров, в отношении которых установлен запрет ввоза на таможенную территорию ЕАЭС:
                            <Break />
                        </InfoText>
                    </InfoColumn>
                    <CardWrapper>
                        {prohibitedItems.map((item, index) => (
                            <Card key={index} expanded={index === 0}>
                                <img src={item.icon} alt="Icon" />
                                <p>{item.description}</p>
                            </Card>
                        ))}

                    </CardWrapper>
                </Content>
            </Container>
            <Footer />
        </AnimationRevealPage>
    </>
);

export default ProhibitedItems;
