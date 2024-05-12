import React, { useState } from "react";
import tw from "twin.macro";
import styled from 'styled-components';
import { ReactComponent as MailIcon } from './images/01.svg';
import { ReactComponent as DeliveryIcon } from './images/01.svg';
import { ReactComponent as RegistrationIcon } from './images/01.svg';
import { ReactComponent as StorageIcon } from './images/01.svg';
import { ReactComponent as PhotoIcon } from './images/01.svg';


import AnimationRevealPage from "./helpers/AnimationRevealPage";
import Hero from "./components/headers/RatesHeders";
import Footer from "./components/footers/MiniCenteredFooter";

const Layout = styled.div`
    ${tw`flex flex-row bg-white rounded-xl shadow-lg overflow-hidden`}
`;

const TabsContainer = styled.div`
    ${tw`w-64 bg-white rounded-l-xl shadow-lg`}
`;

const TabButton = styled.button`
    ${tw`text-lg py-3 w-full text-left flex items-center focus:outline-none border-l-4 border-transparent`}
    ${({ active }) => active && `background-color: #DDF2E6; color: white; border-color: #34D399; shadow-xl`}
    &:hover {
        ${tw`shadow-md bg-green-100`}
    }
    svg {
        ${tw`w-6 h-6 mr-3`}
    }
`;

const ContentContainer = styled.div`
    ${tw`flex-1 p-5 rounded-r-lg`}
`;

const IconContainer = styled.span`
    ${tw`inline-block p-2 rounded-lg`}
`;

const tabs = [
    { name: "Почтовый адрес", content: "Content for Mail Address", Icon: MailIcon },
    { name: "Доставка", content: "Content for Delivery", Icon: DeliveryIcon },
    { name: "Прием и регистрация посылки", content: "Content for Receiving and Registering Parcels", Icon: RegistrationIcon },
    { name: "Хранение посылки на складе", content: "Content for Storage", Icon: StorageIcon },
    { name: "Фото товаров в посылке", content: "Content for Photo in Parcel", Icon: PhotoIcon }
];

export default function App() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <AnimationRevealPage>
            <Hero roundedHeaderButton={true}/>

            <Layout>
                <TabsContainer>
                    {tabs.map((tab, index) => (
                        <TabButton
                            key={index}
                            active={index === activeTab}
                            onClick={() => setActiveTab(index)}
                        >
                            <IconContainer>{<tab.Icon />}</IconContainer>
                            {tab.name}
                        </TabButton>
                    ))}
                </TabsContainer>
                <ContentContainer>
                    {tabs[activeTab].content}
                </ContentContainer>
            </Layout>

            <Footer/>
        </AnimationRevealPage>
    );
}
