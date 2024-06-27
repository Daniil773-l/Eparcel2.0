import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Header from "components/headers/MainCabinetHeader";
import RoomHeader from "../components/headers/RoomHeader";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import Footer from "components/footers/MainFooterWithLinks";
import ProfileCard from "../components/cards/ProfileCard";
import IncomingPackagesCard from "../components/cards/IncomingPackagesCard";
import OutgoingPackagesCard from "../components/cards/OutgoingPackagesCard";
import RedemptionCard from "../components/cards/RedemptionOfGoodsCard";
import FAQ from "components/faqs/CustomFAQPrivateCabinet"
import WarehouseServiceCard from "../components/cards/WarehouseServicesCard"; // Import the new card



const Container = styled.div`
    ${tw`relative w-full min-h-screen`}
    padding: 0;
    margin: 0;
    box-sizing: border-box;
`;

const TwoColumn = styled.div`
    ${tw`flex flex-col lg:flex-row lg:items-start max-w-screen-xl mx-auto py-20 md:py-24`}
`;

const LeftColumn = styled.div`
    ${tw`relative w-full text-left mx-auto`}
`;

const Banner = styled.div`
    ${tw`w-full py-8`}
    background: #FEFBE1;
    text-align: center;
    font-size: 1rem;
    color: #333;
`;

const BannerLink = styled.a`
    ${tw`text-green-500`}
    text-decoration: none;
    cursor: pointer;
`;

const CardsContainer = styled.div`
    ${tw`grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-screen-xl mx-auto`}
    margin-top: 16px; /* Reduced top margin */
`;

const NavigationBanner = styled.div`
    ${tw`w-full py-8 mb-12 mt-10`}
    background: #EBFAE5;
    text-align: center;
    font-size: 1rem;
    color: #2D2D2D;
`;

const NavigationLink = styled.a`
    font-family: 'SFUIText', sans-serif;
    ${tw`text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1`}
    ${tw`hover:border-primary-500 hover:text-primary-500 focus:text-primary-500`}
    text-decoration: none;
    color: #2D2D2D;

    &:hover, &:focus {
        color: #0ABD19;
        text-decoration: none;
    }
`;

const PrimaryLink = styled(NavigationLink)`
    ${tw`lg:mx-0 px-8 py-3 rounded text-gray-100 hocus:text-gray-200 focus:shadow-outline rounded-full border-b-0`}
    background-color: #0ABD19;
    border: none;
    transition: background-color 0.3s ease;

    &:not(:hover):not(:focus) {
        animation: pulsate 1.5s infinite alternate;
    }

    &:hover, &:focus {
        background-color: #0ABD50;
        transform: scale(1.1);
    }
`;

const PersonalCabinet = ({ roundedHeaderButton }) => {
    return (
        <>
            <AnimationRevealPage>
                <RoomHeader />
                <Header roundedHeaderButton={roundedHeaderButton} />
                <Container>
                    <TwoColumn>
                        <LeftColumn>
                            <ProfileCard />
                        </LeftColumn>
                    </TwoColumn>
                    <Banner>
                        Таможенный лимит 200 € / 31 кг на 1 посылку! <BannerLink href="/DutyCalculatorPage">Рассчитайте</BannerLink> размер таможенной пошлины прямо сейчас.
                    </Banner>

                    <CardsContainer>
                        <IncomingPackagesCard />
                        <OutgoingPackagesCard />
                        <RedemptionCard />
                        <WarehouseServiceCard /> {/* Add the new card */}
                    </CardsContainer>
                    <NavigationBanner>
                        <NavigationLink href="/custom-rules">Таможенные правила</NavigationLink>
                        <NavigationLink href="/delivery-calculator">Калькулятор доставки</NavigationLink>
                        <NavigationLink href="/prohibited-goods">Запрещенные товары к пересылке</NavigationLink>
                        <NavigationLink href="/ask-question">Задать вопрос</NavigationLink>
                        <NavigationLink href="/add-package">Добавить посылку</NavigationLink>
                    </NavigationBanner>
                    <FAQ/>
                </Container>
                <Footer />
            </AnimationRevealPage>
        </>
    );
};

export default PersonalCabinet;
