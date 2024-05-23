import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components";
import Header from 'components/headers/LoginPageHeader';
import Footer from "components/footers/MainFooterWithLinks";
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

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-12 lg:py-16`;
const ImageWrapper = tw.div`flex justify-center items-center flex-col md:flex-row`;
const InfoColumn = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;

const HeadingTitle = styled.h1`
    ${tw`text-4xl md:text-4xl lg:text-3xl xl:text-4xl leading-tight`}
    font-size: 32px;
    font-weight: normal;
    line-height: 42px;
    font-family: 'Gilroy Medium', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    color: #2D2D2D;
`;

const CardWrapper = styled.div`
    ${tw`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8`}
`;

const Card = styled.div`
    ${tw`flex flex-col items-center p-4 bg-white shadow-lg rounded-lg text-center transition-all duration-300`}
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    height: ${props => (props.expanded ? 'auto' : '150px')}; /* Initial height small, expands on click */
    max-height: 400px;
    overflow: hidden;
    position: relative;
`;

const Icon = styled.img`
    ${tw`w-16 h-16 mb-4`}
`;

const Description = styled.div`
    ${tw`text-base text-gray-700`}
    text-align: left;
    padding-right: 8px;
`;

const ReadMore = styled.div`
    ${tw`text-sm text-blue-500 cursor-pointer mt-2`}
    position: absolute;
    bottom: 1rem;
`;

const prohibitedItems = [
    { icon: DataIcon, description: "Информация на печатных, аудиовизуальных и иных носителях информации" },
    { icon: GunIcon, description: "Служебное и гражданское оружие, его основные части, и патроны к нему" },
    { icon: ToxicIcon, description: "Опасные отходы" },
    { icon: SprayIcon, description: "Озоноразрушающие вещества и продукция, содержащая озоноразрушающие вещества" },
    { icon: DrugIcon, description: "Наркотические средства, психотропные вещества и их прекурсоры, за исключением ограниченных количеств наркотических средств и психотропных веществ в виде лекарственных средств для личного применения по медицинским показаниям при наличии подтверждающих медицинских документов с указанием наименования и количества товара, а также прекурсоров в объемах, определенных законодательством государства - члена Союза" },
    { icon: HeartIcon, description: "Органы и (или) ткани человека, кровь и ее компоненты" },
    { icon: SobelIcon, description: "Соболи живые" },
    { icon: DiamondIcon, description: "Необработанные драгоценные металлы, лом и отходы драгоценных металлов, руды и концентраты драгоценных металлов и сырьевых товаров, содержащих драгоценные металлы" },
    { icon: MineralIcon, description: "Виды минерального сырья" },
    { icon: MapIcon, description: "Информация о недрах по районам и месторождениям топливно-энергетического и минерального сырья" },
    { icon: TreeIcon, description: "Средства защиты растений и другие стойкие органические загрязнители" },
    { icon: FishIcon, description: "Орудия добычи (вылова) водных биологических ресурсов" },
    { icon: PoisonIcon, description: "Ядовитые вещества, не являющиеся прекурсорами наркотических средств и психотропных веществ" },
    { icon: MoneyIcon, description: "Информация на печатных, аудиовизуальных и иных носителях информации: подарочные карты, монеты, наличные деньги и их эквиваленты, банкноты и любых финансовых инструментов, включая (но не ограничиваясь) платежные и дисконтные карты, купоны, подарочные сертификаты, а равно их реквизиты" },
    { icon: CrossIcon, description: "Служебное и гражданское оружие, его основные части и патроны к нему: приборов ночного видения, электрошокеров, оптических прицелов, аксессуаров (приспособлений, улучшающих эксплуатационные характеристики оружия), инструментов, экипировки, а также тепловизоров для смартфонов, охотничьих, строительных и прочих подобных товаров. Продукция военного и двойного назначения" },
    { icon: BunnyIcon, description: "Видеопродукция и печатные издания порнографического содержания" },
    { icon: DogIcon, description: "Дикие и (или) домашние животные, корма для животных" },
    { icon: SeedIcon, description: "Растения и семена, удобрения" },
    { icon: GearIcon, description: "Автозапчасти содержащие жидкости и масло" },
    { icon: CandleIcon, description: "Ароматизаторы и свечи" },
    { icon: FireIcon, description: "Взрывчатые, озоноразрушающие легковоспламеняющиеся, окисляющие, ядовитые, токсичные, отравляющие, жидкости и предметы" },
    { icon: CamIcon, description: "Специальные технические средства, предназначенные для негласного получения информации, шифровальные (криптографические) средства, радиоэлектронные средства и (или) высокочастотные устройства гражданского назначения, в том числе встроенные либо входящие в состав других товаров" },
    { icon: DiamondIcon, description: "Драгоценные камни и металлы, сырьевые товары" },
    { icon: DrugIcon, description: "Лекарственные средства содержащие наркотические средства, психотропные вещества и их прекурсоры" },
    { icon: PictureIcon, description: "Коллекции и предметы коллекционирования, культурные ценности, документы национальных; архивных фондов государств - членов Союза" },
    { icon: AccIcon, description: "Акцизные товары" },
    { icon: MedicIcon, description: "Сильнодействующие вещества и лекарства" },
    { icon: FruitIcon, description: "Свежие фрукты, ягоды и овощи, не подвергшиеся кулинарной или термической обработке, плоды, ягоды, семена, растения, не прошедшие фитосанитарный контроль" },
    { icon: SmokeIcon, description: "Курительные смеси" },
    { icon: TimerIcon, description: "Товары, подлежащие временным ограничениям ввоза на территорию государств - членов Союза или вывоза с таможенной территории Союза, а также временные ограничения ввоза на территорию государств - членов Союза или вывоза с таможенной территории Союза в соответствии с законодательством государств - членов Союза" },
    { icon: WtfIcon, description: "Запрещенные к ввозу товары, указанные в международных договорах государств - членов Союза с третьей стороной" },
    { icon: AnyIcon, description: "Любые иные товары, запрещенные к ввозу на территорию государств - членов Союза или вывозу с таможенной территории Союза в соответствии с законодательством государств - членов Союза" }
];

const ProhibitedItems = () => {
    const [expanded, setExpanded] = useState(Array(prohibitedItems.length).fill(false));

    const toggleExpand = (index) => {
        const newExpanded = [...expanded];
        newExpanded[index] = !newExpanded[index];
        setExpanded(newExpanded);
    };

    return (
        <AnimationRevealPage>
            <Container>
                <Content>
                    <ImageWrapper>
                        <InfoColumn>
                            <HeadingTitle>Перечень запрещённых товаров к пересылке</HeadingTitle>
                            <CardWrapper>
                                {prohibitedItems.map((item, index) => (
                                    <Card key={index} expanded={expanded[index]}>
                                        <Icon src={item.icon} alt="Icon" />
                                        <Description style={{ maxHeight: expanded[index] ? 'none' : '4rem' }}>
                                            {item.description}
                                        </Description>
                                        {item.description.length > 100 && (
                                            <ReadMore onClick={() => toggleExpand(index)}>
                                                {expanded[index] ? 'Скрыть' : 'Читать далее'}
                                            </ReadMore>
                                        )}
                                    </Card>
                                ))}
                            </CardWrapper>
                        </InfoColumn>
                    </ImageWrapper>
                </Content>
            </Container>
        </AnimationRevealPage>
    );
};

export default ProhibitedItems;
