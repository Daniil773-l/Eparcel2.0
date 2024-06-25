import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = tw.div`p-8`;
const Header = tw.div`flex justify-between items-center mb-8`;
const Title = tw.h1`text-3xl font-semibold`;
const Breadcrumb = tw.div`text-sm text-gray-500`;

const AddButton = styled.button`
    ${tw`ml-2 w-auto bg-green-500 text-white font-bold py-3 rounded-full flex items-center justify-center leading-none focus:outline-none transition duration-300`}
    width: 250px; // Set fixed width
    height: 40px; // Set fixed height
    background-color: #0ABD19;
    border: none;

    &:hover, &:focus {
        transform: scale(1.1);
    }
`;

const Content = styled.div`
    ${tw`grid grid-cols-1 md:grid-cols-2 gap-8`}
`;

const Card = styled.div`
    ${tw`bg-white shadow-lg rounded-lg p-6 relative`}
    width: calc(100% - 32px); // Adjust width to increase size
    min-height: 320px; // Increase card height
`;

const CardHeader = styled.div`
    ${tw`flex items-center mb-4 relative`}
`;

const GreenStrip = styled.div`
    ${tw`absolute top-0 left-0 w-full h-16 bg-green-100 rounded-t-lg`}
`;

const Avatar = styled.div`
    ${tw`w-20 h-20 bg-white rounded-full flex items-center justify-center text-green-500 text-xl font-bold absolute shadow-lg`}
    top: 4px; // Adjusted to move higher
    left: 16px;
`;

const CardTitle = styled.div`
    ${tw`ml-24 relative`}
    top: 20px; // Adjusted to align text correctly
`;

const CardSubtitle = styled.div`
    ${tw`text-gray-500 text-sm mt-1`}
`;

const Name = styled.div`
    ${tw`text-black font-bold text-lg mt-1`}
`;

const Balance = styled.div`
    ${tw`text-green-500 font-bold text-sm absolute`}
    right: 16px;
    top: 4px;
`;

const List = styled.ul`
    ${tw`space-y-2 mt-16`}
`;

const ListItem = styled.li`
    ${tw`flex items-center text-gray-700`}
`;

const Icon = tw.div`mr-2 text-green-500`;

const Divider = styled.div`
    ${tw`w-full h-px bg-gray-200`}
    position: absolute;
    width: 93%;
    bottom: 60px;
`;

const LogoutText = styled.div`
    ${tw`text-gray-400`}
    position: absolute;
    bottom: 20px;
    left: 26px;
`;

const TabContainer = styled.div`
    ${tw`flex justify-center space-x-4 mb-4`}
`;

const Tab = styled.button`
    ${tw`py-2 px-4 rounded-full border-2 border-gray-200 bg-gray-100 hover:bg-gray-200`}
    ${({ active }) => active && tw`bg-green-100 border-green-500`}
`;

const Address = styled.div`
    ${tw`text-gray-700 mt-4`}
`;

const SecondCardGreenStrip = styled.div`
    ${tw`absolute top-0 left-0 w-full h-16 bg-green-100 rounded-t-lg`}
`;

const SecondCardText = styled.div`
    ${tw`text-gray-400 mt-4`}
`;

const PersonalCabinet = () => {
    const [activeTab, setActiveTab] = useState("usa");

    const addressInfo = {
        usa: {
            id: "EPL-1021",
            address: "4 Lewis Circle\nWilmington DE 19804",
            phone: "+1-929-999-57-97",
        },
        turkey: {
            id: "EPL-1021",
            address: "Güzelyurt mahallesi 2128. Sokak no:4/1\nFAST DEPO ESENYURT İSTANBUL",
            phone: "+90 534 081 3187",
        },
    };

    const currentInfo = addressInfo[activeTab];

    return (
        <Container>
            <Header>
                <div>
                    <Breadcrumb>Главная / Личный Кабинет</Breadcrumb>
                    <Title>Личный кабинет</Title>
                </div>
                <AddButton>+ Добавить ожидаемую посылку</AddButton>
            </Header>
            <Content>
                <Card>
                    <GreenStrip />
                    <CardHeader>
                        <Avatar>ZY</Avatar>
                        <CardTitle>
                            <div>Ваш ID: #{currentInfo.id}</div>
                            <Name>Zhaksyllyk Yernur</Name>
                        </CardTitle>
                        <Balance>Баланс: 0.00 ₽</Balance>
                    </CardHeader>
                    <List>
                        <ListItem>
                            <Icon>👤</Icon> Профиль
                        </ListItem>
                        <ListItem>
                            <Icon>👥</Icon> Получатели
                        </ListItem>
                        <ListItem>
                            <Icon>🔒</Icon> Сменить пароль
                        </ListItem>
                    </List>
                    <Divider />
                    <LogoutText>Выйти из аккаунта</LogoutText>
                </Card>
                <Card>
                    <SecondCardGreenStrip />
                    <TabContainer>
                        <Tab active={activeTab === "usa"} onClick={() => setActiveTab("usa")}>США</Tab>
                        <Tab active={activeTab === "turkey"} onClick={() => setActiveTab("turkey")}>Турция</Tab>
                    </TabContainer>
                    <Address>
                        <div>Ваш адрес склада:</div>
                        <div tw="mt-2">
                            <strong>Ваш ID: #{currentInfo.id}</strong>
                            <div>* Не забывайте указывать Ваш ID при покупке товаров</div>
                            <div tw="mt-2">
                                {currentInfo.address}
                                <br />
                                tel: {currentInfo.phone}
                            </div>
                        </div>
                    </Address>
                    <Divider />
                    <SecondCardText>Как правильно указывать адрес для доставки?</SecondCardText>
                </Card>
            </Content>
        </Container>
    );
};

export default PersonalCabinet;
