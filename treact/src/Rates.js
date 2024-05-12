import React, { useState } from "react";
import styled from 'styled-components';
import { ReactComponent as MailIcon } from './images/icon/Pochto.svg';
import { ReactComponent as DeliveryIcon } from './images/icon/dilevery.svg';
import { ReactComponent as RegistrationIcon } from './images/01.svg';
import { ReactComponent as StorageIcon } from './images/01.svg';
import { ReactComponent as PhotoIcon } from './images/01.svg';


import AnimationRevealPage from "./helpers/AnimationRevealPage";
import Hero from "./components/headers/RatesHeders";
import Footer from "./components/footers/MiniCenteredFooter";

const Layout = styled.div`
    display: flex;
    background: #fff;
    border-radius: 15px;
    box-shadow: 2px 2px 10px rgba(45, 45, 45, 0.08);
    overflow: hidden;
    margin:60px;
    height: 100vh; // Set to full viewport height or adjust as needed
`;

const SidebarContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px; // Adjust width as needed
    background: #ffffff;
    border-right: 1px solid #F5F5F5;

`;

const TabButton = styled.button`
    display: flex;
    align-items: center;
    background: ${({ active }) => active ? '#DDF2E6' : 'transparent'};
    color: #000000;
    border: none;
    padding: 10px 22px;
    font-size: 16px;
    line-height: 18px;
    font-family: 'Gilroy Medium', sans-serif;
    cursor: pointer;

    &:hover {
        background-color: #DDF2E6;
    }

    svg {
        margin-right: 10px;
        width: 24px;
        height: 24px;
    }
`;

const ContentContainer = styled.div`
    flex: 1;
    padding: 20px;
    overflow-y: auto; // Allows scrolling if content is taller than the view area
`;

const IconContainer = styled.span``;

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
                <SidebarContainer>
                    {tabs.map((tab, index) => (
                        <TabButton
                            key={index}
                            active={index === activeTab}
                            onClick={() => setActiveTab(index)}
                        >
                            <IconContainer>{<tab.Icon active={index === activeTab} />}</IconContainer>
                            {tab.name}
                        </TabButton>
                    ))}
                </SidebarContainer>
                <ContentContainer>
                    {tabs[activeTab].content}
                </ContentContainer>
            </Layout>
            <Footer/>
        </AnimationRevealPage>
    );
}
