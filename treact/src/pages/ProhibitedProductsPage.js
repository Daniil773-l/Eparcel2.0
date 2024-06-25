import React from "react";
import { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components";
import Header from 'components/headers/LoginPageHeader';
import Footer from "components/footers/MainFooterWithLinks";
import Products from "images/ProhibitedProducts.svg";
import HeaderProhib from "../components/headers/HeaferProducts"
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

const Container = tw.div`relative bg-white min-h-screen`;
const Content = tw.div`max-w-screen-xl mx-auto py-12 lg:py-16`;
const ImageWrapper = tw.div`flex justify-center items-center flex-col md:flex-row mt-8`;
const InfoColumn = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0 mb-8`;

const HeadingTitle = styled.h1`
    ${tw`text-4xl md:text-4xl lg:text-3xl xl:text-4xl leading-tight font-medium`}
    font-family: 'Gilroy Medium', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    color: #2D2D2D;
`;

const InfoText = styled.p`
    ${tw`tracking-wide font-bold text-2xl leading-none mt-20 mb-20`}

    text-align: center;
`;

const CardWrapper = tw.div`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8`;
const Card = styled.div`
    ${tw`flex flex-col items-center p-4 bg-white shadow-lg rounded-lg text-center`}
    img {
        ${tw`w-16 h-16 mb-4`}
    }
    p {
        ${tw`mt-2`}
    }
`;

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
    { icon: DrugIcon, description: "Наркотические средства, психотропные вещества и их прекурсоры" },
    { icon: MoneyIcon, description: "Информация на печатных, аудиовизуальных и иных носителях информации: подарочные карты, монеты, наличные деньги и их эквиваленты, банкноты и любых финансовых инструментов" },
    { icon: CrossIcon, description: "Служебное и гражданское оружие, его основные части и патроны к нему: приборы ночного видения, электрошокеры, оптические прицела" },
    { icon: BunnyIcon, description: "Видеопродукция и печатные издания порнографического содержания" },
    { icon: DogIcon, description: "Дикие и (или) домашние животные, корма для животных" },
    { icon: SeedIcon, description: "Растения и семена, удобрения" },
    { icon: DrugIcon, description: "Лекарственные средства содержащие наркотические средства, психотропные вещества и их прекурсоры" },
    { icon: DiamondIcon, description: "Необработанные драгоценные металлы, лом и отходы драгоценных металлов" },
    { icon: FireIcon, description: "Взрывчатые, озоноразрушающие легковоспламеняющиеся, окисляющие, ядовитые, токсичные, отравляющие, жидкости и предметы" },
    { icon: PictureIcon, description: "Коллекции и предметы коллекционирования, культурные ценности, документы национальных архивных фондов, оригиналы архивных документов" },
    { icon: CamIcon, description: "Специальные технические средства, предназначенные для негласного получения информации" },
    { icon: DiamondIcon, description: "Драгоценные камни и металлы, сырьевые товары" },
    { icon: GearIcon, description: "Автозапчасти содержащие жидкости и масло" },
    { icon: FishIcon, description: "Орудия добычи (вылова) водных биологических ресурсов" },
    { icon: AccIcon, description: "Товары, содержащие аккумуляторные батарейки Li-ion АКБ" },
    { icon: MedicIcon, description: "Медицинские товары и приборы" },
    { icon: FruitIcon, description: "Скоропортящиеся товары" },
    { icon: SmokeIcon, description: "Табачная продукция" },
    { icon: TimerIcon, description: "Товары, на которые наложены временные запреты на их ввоз на территорию РФ и ЕАЭС" },
    { icon: WtfIcon, description: "Неопознанные товары, не имеющие никаких данных и информации" },
    { icon: AnyIcon, description: "Товары не относящиеся для личного пользования согласно Решению Коллегии ЕЭК" }
];

const ProhibitedItems = () => (
    <AnimationRevealPage>
        <HeaderProhib/>
        <Container>
            <Content>

                <CardWrapper>
                    {prohibitedItems.map((item, index) => (
                        <Card key={index}>
                            <img src={item.icon} alt="Icon" />
                            <p>{item.description}</p>
                        </Card>
                    ))}
                </CardWrapper>
            </Content>
        </Container>
        <Footer />
    </AnimationRevealPage>
);

export default ProhibitedItems;
