import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import iconBalance from "images/icon/BalanceCard.svg";
import icon1 from "images/icon/MyPackages.svg";
import icon2 from "images/icon/Receivers.svg";
import icon3 from "images/icon/ProfileIconCard.svg";
import icon4 from "images/icon/ChangeContactDetailsIcon.svg";
import icon5 from "images/icon/ChangePasswordIcon.svg";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../FireBaseConfig"; // Import Firestore

const Container = tw.div``;
const Header = tw.div`flex justify-between items-center mb-8`;
const Title = tw.h1`text-3xl font-semibold`;
const Breadcrumb = tw.div`text-sm text-gray-500`;

const AddButton = styled.a`
    ${tw`ml-2 w-auto bg-green-500 text-white font-medium py-3 rounded-full flex items-center justify-center leading-none focus:outline-none transition duration-300`}
    width: 250px;
    height: 20px;
    font-size: 12px;
    background-color: #0ABD19;
    border: none;
    text-decoration: none;
    text-align: center;

    &:hover, &:focus {
        transform: scale(1.1);
    }
`;
const Content = styled.div`
    ${tw`grid grid-cols-1 md:grid-cols-2 gap-8`}
`;

const Card = styled.div`
    ${tw`bg-white shadow-lg rounded-lg p-6 relative`}
    width: calc(100% - 40px);
    min-height: 320px;
`;

const CardHeader = styled.div`
    ${tw`flex items-center mb-4 relative`}
`;

const GreenStrip = styled.div`
    ${tw`absolute top-0 left-0 w-full h-16 bg-green-100 rounded-t-lg`}
`;

const Avatar = styled.div`
    ${tw`w-20 h-20 bg-white rounded-full flex items-center justify-center text-green-500 text-xl font-bold absolute shadow-lg`}
    top: 4px;
    left: 16px;
`;

const CardTitle = styled.div`
    ${tw`ml-24 relative`}
    top: 20px;
`;

const CardSubtitle = styled.div`
    ${tw`text-gray-500 text-sm mt-1`}
`;

const Name = styled.div`
    ${tw`font-bold text-lg mt-2 ml-2`}
    color: #2D2D2D;
`;

const Balance = styled.div`
    ${tw`text-green-500 font-bold text-sm absolute`}
    right: 16px;
    top: 4px;
`;

const List = styled.ul`
    ${tw`space-y-4 mt-16`}  // Increase space between items
`;

const ListItem = styled.li`
    ${tw`flex items-center text-gray-700 text-lg`}  // Increase text size
`;

const Icon = styled.div`
    ${tw`mr-4 text-green-500`}  // Increase space between icon and text
    svg {
        width: 36px;  // Increase icon size
        height: 36px;
    }
`;

const Divider = styled.div`
    ${tw`w-full h-px bg-gray-200`}
    position: absolute;
    width: 93%;
    bottom: 60px;
`;

const LogoutText = styled.div`
    ${tw`text-gray-400 cursor-pointer`}
    position: absolute;
    bottom: 20px;
    left: 26px;
`;

const TabContainer = styled.div`
    ${tw`flex justify-center mb-4`}
    background-color: #FFFFFF;
    border-radius: 24px;
    padding: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 70%;
    margin: 0 auto;
    position: relative;
`;

const Tab = styled.button`
    ${tw`py-3 px-8 rounded-full w-full transition-all duration-300 text-gray-700`}
    ${({ active }) => active ? tw`bg-green-100 text-green-700 border border-green-500` : tw`bg-white`}
    border: none;

    &:not(:last-child) {
        margin-right: 4px;
    }
`;

const Address = styled.div`
    ${tw`text-gray-700 mt-4`}
`;

const AddressHeader = styled.div`
    ${tw`font-bold text-lg mb-2`}
    color: #2D2D2D;
`;

const AddressID = styled.div`
    ${tw`text-green-500 mb-1`}
`;

const AddressInfo = styled.div`
    ${tw`text-gray-400 mb-2`}
`;

const AddressDetails = styled.div`
    ${tw`text-gray-700 mt-6`}
`;

const AddressLine = styled.div`
    ${tw`mb-1`}
`;

const IDText = styled.div`
    ${tw`font-semibold ml-2`}
    color: #999999;
    font-size: 12px;
`;

const SecondCardGreenStrip = styled.div`
    ${tw`absolute top-0 left-0 w-full h-16 bg-green-100 rounded-t-lg`}
`;
const Navlink=styled.a`
    text-decoration: none;
    
    ${tw`flex items-center text-gray-700 text-lg`

}
`
const SecondCardText = styled.a`
    ${tw`text-gray-400 mt-4`}
    position: absolute;
    text-decoration: none;
    bottom: 20px;
    left: 26px;
`;
const StyledLink = styled.a`
    ${tw`text-gray-400 mt-4`}
    position: absolute;
    bottom: 20px;
    left: 26px;
`;
const PersonalCabinet = () => {
    const [activeTab, setActiveTab] = useState("usa");
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth();
        const cachedUser = localStorage.getItem('userData');

        if (cachedUser) {
            setUserData(JSON.parse(cachedUser));
        } else {
            const unsubscribe = onAuthStateChanged(auth, async (user) => {
                if (user) {
                    try {
                        const userDocRef = doc(db, "users", user.uid);
                        const userDocSnap = await getDoc(userDocRef);

                        if (userDocSnap.exists()) {
                            const userData = userDocSnap.data();
                            console.log("User Data Fetched: ", userData);
                            setUserData(userData);
                            localStorage.setItem('userData', JSON.stringify(userData));
                        } else {
                            console.log("No such document!");
                        }
                    } catch (error) {
                        console.error("Error fetching user document:", error);
                    }
                } else {
                    console.log("No user signed in!");
                }
            });

            return () => unsubscribe();
        }
    }, []);

    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log("User signed out");
            localStorage.removeItem('userData');
            setUserData(null);
            navigate("/App");
        }).catch((error) => {
            console.error("Error signing out:", error);
        });
    };

    const addressInfo = {
        usa: {
            id: "EPL-1021",
            address: (
                <>
                    <AddressLine>4 Lewis Circle</AddressLine>
                    <AddressLine>Wilmington DE 19804</AddressLine>
                </>
            ),
            phone: "+1-929-999-57-97",
        },
        turkey: {
            id: "EPL-1021",
            address: (
                <>
                    <AddressLine>Güzelyurt mahallesi 2128. Sokak no:4/1</AddressLine>
                    <AddressLine>FAST DEPO ESENYURT İСТАНБУЛ</AddressLine>
                </>
            ),
            phone: "+90 534 081 3187",
        },
    };

    const currentInfo = addressInfo[activeTab];

    if (!userData) {
        return <div>Loading...</div>;
    }

    const initials = `${userData.firstName[0]}${userData.lastName[0]}`.toUpperCase();

    return (
        <Container>
            <Header>
                <div>
                    <Breadcrumb>Главная / Личный Кабинет</Breadcrumb>
                    <Title>Личный кабинет</Title>
                </div>
                <AddButton href="/ExpectedLink">+ Добавить ожидаемую посылку</AddButton>
            </Header>
            <Content>
                <Card>
                    <GreenStrip />
                    <CardHeader>
                        <Avatar>{initials}</Avatar>
                        <CardTitle>
                            <IDText>Ваш ID: {userData.userId}</IDText>
                            <Name>{`${userData.firstName} ${userData.lastName}`}</Name>
                        </CardTitle>
                        <Balance>Баланс: 0.00 ₽</Balance>
                    </CardHeader>
                    <List>
                        <ListItem>
                            <Icon><img src={icon3} alt="Profile" /></Icon><Navlink href="/ChangingContactDetails">Профиль</Navlink>
                        </ListItem>
                        <ListItem>
                            <Icon><img src={icon2} alt="Receivers" /></Icon> Получатели
                        </ListItem>
                        <ListItem>
                            <Icon><img src={icon5} alt="Change Password" /></Icon> <Navlink href="/ChangePassword"> Сменить пароль</Navlink>
                        </ListItem>
                    </List>
                    <Divider />
                    <LogoutText onClick={handleLogout}>Выйти из аккаунта</LogoutText>
                </Card>
                <Card>
                    <SecondCardGreenStrip />
                    <TabContainer>
                        <Tab active={activeTab === "usa"} onClick={() => setActiveTab("usa")}>США</Tab>
                        <Tab active={activeTab === "turkey"} onClick={() => setActiveTab("turkey")}>Турция</Tab>
                    </TabContainer>
                    <Address>
                        <AddressHeader>Ваш адрес склада:</AddressHeader>
                        <AddressID>Ваш ID: #{userData.userId}</AddressID>
                        <AddressInfo>* Не забывайте указывать Ваш ID при покупке товаров</AddressInfo>
                        <AddressDetails>
                            {currentInfo.address}
                            tel: {currentInfo.phone}
                        </AddressDetails>
                    </Address>
                    <Divider />
                    <SecondCardText href="/Deliveryaddress">Как правильно указывать адрес для доставки?</SecondCardText>
                </Card>
            </Content>
        </Container>
    );
};

export default PersonalCabinet;