import React, { useState } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";
import SliderCard from "components/cards/ThreeColSlider.js";
import TrendingCard from "components/cards/TwoTrendingPreviewCardsWithImage.js";
import Blog from "components/blogs/PopularAndRecentBlogPosts.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import SubscribeNewsLetterForm from "components/forms/SimpleSubscribeNewsletter.js";
import Header from "components/headers/ShopsHeader";
import Footer from "components/footers/MiniCenteredFooter";
import Shop from "./components/features/DashedBorderSixFeatures";
import Cards from './components/features/DashedBorderSixFeatures';
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { SectionDescription as OriginalSectionDescription } from "components/misc/Typography3.js";
import styled, { css } from 'styled-components';
import tw from "twin.macro";

const ButtonContainer = styled.div`
    ${tw`flex flex-wrap items-center justify-center gap-4`}
    ${tw`p-4 sm:px-4 md:px-8 lg:px-12 xl:px-16`}
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

const Button2 = styled(Button)`
    ${tw`h-12 text-base`}
    ${tw`sm:(h-10 text-xs)`}
    ${tw`md:(h-10 text-sm)`}
    ${tw`lg:(h-12 text-sm)`}
    ${tw`xl:(h-12 text-base)`}
`;

const StyledSectionDescription = styled(OriginalSectionDescription)`
    margin-top: 100px;
    color: #243E63;
`;

export default function App() {
    const [selectedCountry, setSelectedCountry] = useState("США");
    const [selectedCategory, setSelectedCategory] = useState("Детский мир");

    return (
        <AnimationRevealPage>
            <Header roundedHeaderButton={true}/>
            <ButtonContainer>
                <Button onClick={() => setSelectedCountry('США')} selected={selectedCountry === 'США'}>США</Button>
                <Button onClick={() => setSelectedCountry('Турция')} selected={selectedCountry === 'Турция'}>Турция</Button>
            </ButtonContainer>
            <ButtonContainer>
                <Button2 onClick={() => setSelectedCategory('Детский мир')} selected={selectedCategory === 'Детский мир'}>Детский мир</Button2>
                <Button2 onClick={() => setSelectedCategory('Здоровье')} selected={selectedCategory === 'Здоровье'}>Здоровье</Button2>
                {selectedCountry !== 'Турция' && (
                    <Button2 onClick={() => setSelectedCategory('Зоотовары')} selected={selectedCategory === 'Зоотовары'}>Зоотовары</Button2>
                )}
                <Button2 onClick={() => setSelectedCategory('Косметика и парфюмерия')} selected={selectedCategory === 'Косметика и парфюмерия'}>Косметика и парфюмерия</Button2>
                {selectedCountry !== 'Турция' && (
                    <Button2 onClick={() => setSelectedCategory('Магазины с оплатой криптовалютой')} selected={selectedCategory === 'Магазины с оплатой криптовалютой'}>Магазины с оплатой криптовалютой</Button2>
                )}
            </ButtonContainer>
            <ButtonContainer>
                <Button2 onClick={() => setSelectedCategory('Маркетплейсы')} selected={selectedCategory === 'Маркетплейсы'}>Маркетплейсы</Button2>
                <Button2 onClick={() => setSelectedCategory('Одежда, обувь, аксессуары')} selected={selectedCategory === 'Одежда, обувь, аксессуары'}>Одежда, обувь, аксессуары</Button2>
                <Button2 onClick={() => setSelectedCategory('Хобби и спорт')} selected={selectedCategory === 'Хобби и спорт'}>Хобби и спорт</Button2>
                <Button2 onClick={() => setSelectedCategory('Электроника')} selected={selectedCategory === 'Электроника'}>Электроника</Button2>
            </ButtonContainer>
            <Shop/>
            <Cards selectedCountry={selectedCountry} selectedCategory={selectedCategory}/>
            <StyledSectionDescription>
                Товары американского и турецкого производства давно заслужили отличную репутацию во всем мире. Высокий контроль качества вещей – стандарт магазинов одежды США и Турции. Поэтому там часто заказывают одежду и обувь для ребенка: она точно не повредит малышу. А за счет регулярных скидок в американских и турецких магазинах одежды очень выгодно покупать брендовые товары. Посмотрите, какие топовые марки мы для Вас собрали! И сравните предложенные цены с Казахстанскими! Экономия – тысячи тенге, а дешево доставлять все вааши покупки из CША в Казахстан умеет Eparcel.
            </StyledSectionDescription>
            <SliderCard />
            <Footer />
        </AnimationRevealPage>
    );
}
