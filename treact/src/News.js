import React, { useState, useEffect } from 'react';
import tw from 'twin.macro';
import styled, { css } from 'styled-components';
import AnimationRevealPage from "./helpers/AnimationRevealPage";
import Hero from "./components/headers/NewHeader";
import Footer from "components/footers/MainFooterWithLinks";
import { PrimaryButton as PrimaryButtonBase } from "./components/misc/Buttons";

const Heading = styled.h1`
    ${tw`font-bold text-base md:text-lg lg:text-xl xl:text-2xl text-gray-900 leading-tight`}
    margin-bottom: 30px;
    margin-left: 4%; // Изменение отступа на 4% ширины экрана
    margin-right: 4%; // Изменение отступа на 4% ширины экрана

    @media (min-width: 768px) {
        margin-left: 88px; // Возвращаем оригинальное значение для больших экранов
        margin-right: 88px; // Возвращаем оригинальное значение для больших экранов
    }
`;


const ButtonContainer = styled.div`
    ${tw`flex flex-wrap items-center justify-center gap-4`}
    ${tw`p-4 sm:px-4 md:px-8 lg:px-12 xl:px-16`}
    margin-bottom: 30px;
`;

const Button = styled(PrimaryButtonBase)`
    ${tw`px-6 py-2 font-semibold rounded-lg shadow-md bg-white border-2 border-green-600 text-lg text-gray-600`}
    ${tw`h-12 w-full sm:w-auto`}
    ${tw`m-2`}

    ${({ selected }) => selected && css`
        ${tw`bg-green-200 border-green-700 text-black`}
    `}

    &:hover {
        ${tw`text-black bg-green-200`}
    }
    &:focus {
        ${tw`text-black bg-green-200`}
    }
`;

const Card = styled.div`
    ${tw`rounded-lg overflow-hidden shadow-lg relative`}
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    background: white;
    cursor: pointer;
    height: 100%;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.12), 0 4px 8px rgba(0,0,0,0.06);
    }

    ${({ visible }) => !visible && css`
        opacity: 0;
        pointer-events: none;
    `}
`;

const CardText = styled.div`
    ${tw`p-4 justify-center items-center flex-col`}
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

const CardTitle = styled.h2`
    ${tw`font-bold text-lg mb-2`}
    &:hover {
        color: #0ABD19;
    }
`;

const CardDescription = styled.p`
    ${tw`text-gray-700 text-sm`}
    font-family: 'Gilroy Medium', sans-serif;
    font-size: 16px;
    line-height: 18px;
`;

const CardImage = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
    ${tw`rounded-t-lg`}
`;

const CardContainer = styled.div`
    ${tw`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 my-6`}
    max-width: 1200px;
    margin: auto;
    margin-bottom: 30px;
`;

const CardLabel = styled.span`
    ${tw`absolute top-0 left-0 bg-green-500 text-white px-3 py-1 text-xs font-bold uppercase`}
`;

const cardData = [
    { id: 1, category: 'Все', title: 'Как правильно указывать адрес для доставки', description: 'Убедитесь, что посылка точно придёт!', image: 'https://eparcel.wtstudio.ru/image/cache/catalog/news/stock3-300x214.png' },
    { id: 2, category: 'Новости', title: 'Топ-10 люксовых брендов сумочек', description: 'Узнайте о самых роскошных сумках в мире.', image: 'https://eparcel.wtstudio.ru/image/cache/catalog/news/luchshiye-brendy-sumok-e1676232705225-300x214.jpg' },
    { id: 3, category: 'Скидки в магазинах', title: 'Тестовая статья', description: 'Тестовая статьяТестовая статьяТестовая статья Тестовая статьяТестовая статья Тестовая статья', image: 'https://eparcel.wtstudio.ru/image/cache/catalog/news/img-1-300x214.png' },
    { id: 4, category: 'Советы', title: 'Где покупать товары с выгодой', description: 'Ознакомьтесь с приведенным списком, чтобы узнать о самых роскошных сумках в мире.', image: 'https://eparcel.wtstudio.ru/image/cache/catalog/news/shopping-300x214.jpeg' },
];

export default function App() {
    const [activeCategory, setActiveCategory] = useState('Все');
    const [isVisible, setIsVisible] = useState(true);

    const renderCards = () => {
        const filteredData = cardData.filter(card => card.category === activeCategory || activeCategory === 'Все');

        const sortedData = filteredData.sort((a, b) => {
            if (a.category === activeCategory) return -1;
            if (b.category === activeCategory) return 1;
            return 0;
        });

        return sortedData.map(card => (
            <Card key={card.id} visible={isVisible}>
                <CardLabel>{card.category}</CardLabel>
                <CardImage src={card.image} alt={card.title} />
                <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    <CardDescription>{card.description}</CardDescription>
                </CardText>
            </Card>
        ));
    };

    useEffect(() => {
        setIsVisible(false);
        setTimeout(() => {
            setIsVisible(true);
        }, 300);
    }, [activeCategory]);

    return (
        <AnimationRevealPage>
            <Hero roundedHeaderButton={true} />
            <Heading>Идеи для покупок, советы и многое другое от Eparcel.kz</Heading>
            <ButtonContainer>
                <Button onClick={() => setActiveCategory('Все')} selected={activeCategory === 'Все'}>Все</Button>
                <Button onClick={() => setActiveCategory('Скидки в магазинах')} selected={activeCategory === 'Скидки в магазинах'}>Скидки в магазинах</Button>
                <Button onClick={() => setActiveCategory('Новости')} selected={activeCategory === 'Новости'}>Новости</Button>
                <Button onClick={() => setActiveCategory('Советы')} selected={activeCategory === 'Советы'}>Советы</Button>
            </ButtonContainer>
            <CardContainer>
                {renderCards()}
            </CardContainer>
            <Footer />
        </AnimationRevealPage>
    );
}
