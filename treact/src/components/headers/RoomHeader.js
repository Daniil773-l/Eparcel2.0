import React, { useState, useEffect, useRef } from "react";
import tw from "twin.macro";
import styled, { createGlobalStyle } from "styled-components/macro";
import { motion } from "framer-motion";
import { ReactComponent as PlusIcon } from "images/icon/PlusIcon.svg";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useAuth } from "../../AuthContext";
import { db } from "../../FireBaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'SFUIText';
        src: url('../../fonts/SFUIDisplay-Ultralight.woff') format('woff');
        font-weight: 300;
        font-style: normal;
    }

    body, html {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'SFUIText', sans-serif;
    }
`;

const Header = styled.header`
    ${tw`w-full flex justify-between items-center bg-[#F9F9F9] h-[70px] px-8`}
    box-sizing: border-box;
    margin: 0;
`;

const NavContainer = styled.div`
    ${tw`flex justify-center flex-1`}
`;

const NavLinks = styled.div`
    ${tw`flex items-center space-x-8`}
`;

const NavLink = styled.a`
    font-family: 'SFUIText', sans-serif;
    ${tw`text-lg lg:text-sm font-semibold tracking-wide transition duration-300`}
    text-decoration: none;
    color: #2D2D2D;

    &:hover, &:focus {
        color: #0ABD19;
        text-decoration: none;
        ${props => props.hasBorder && tw`border-b-2 border-transparent`};
    }
`;

const LastNavLink = styled(NavLink)`
    ${tw`mr-8`}
`;

const ProfileDropdownContainer = tw.div`relative inline-block text-left`;

const DropdownMenu = styled(motion.div)`
    ${tw`origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50`}
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
`;

const DropdownItem = styled.a`
    ${tw`block px-4 py-3 text-sm text-gray-700 transition-colors duration-150`}
    font-family: 'SFUIText', sans-serif;
    text-decoration: none;

    &:hover {
        ${tw`bg-green-100 text-green-600`}
    }
`;

const ProfileButton = styled.button`
    ${tw`flex items-center text-sm font-medium text-white rounded-full focus:outline-none ml-16`}
    ${tw`w-[150px] bg-green-500 mr-2 my-2 py-2 flex items-center justify-center leading-none transition duration-300`}
    background-color: #0ABD19;
    border: none;
    &:hover, &:focus {
        transform: scale(1.1);
        background-color: #0ABD19;
    }
`;

const InitialsCircle = styled.div`
    ${tw`flex items-center justify-center w-8 h-8 rounded-full bg-white text-green-500 font-bold mr-2`}
    font-size: 14px;
    padding: 2px;
`;

const iconContainerStyles = tw`flex items-center ml-4`;
const iconStyles = tw`w-6 h-6 mr-2`;

const HeaderContainer = () => {
    const { isAuthenticated, user, loading } = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [userData, setUserData] = useState(null);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            if (user && user.email) {
                try {
                    const normalizedEmail = user.email.toLowerCase();
                    console.log("Fetching data for user:", normalizedEmail);
                    const q = query(collection(db, "users"), where("email", "==", normalizedEmail));
                    const querySnapshot = await getDocs(q);
                    console.log("Query Snapshot:", querySnapshot);
                    querySnapshot.forEach(doc => {
                        console.log("Doc data:", doc.data());
                    });
                    if (!querySnapshot.empty) {
                        const userDoc = querySnapshot.docs[0].data();
                        console.log("User data found:", userDoc);
                        setUserData(userDoc);
                    } else {
                        console.log("No user data found for email:", normalizedEmail);
                    }
                } catch (error) {
                    console.error("Ошибка получения данных пользователя:", error);
                }
            } else {
                console.log("No user or user email is authenticated.");
            }
        };

        if (!loading) {
            fetchUserData();
        }
    }, [user, loading]);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        if (isDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isDropdownOpen]);

    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            console.log("Пользователь вышел из системы");
            navigate("/App");
        }).catch((error) => {
            console.error("Ошибка выхода:", error);
        });
    };

    const getInitials = () => {
        if (userData) {
            console.log("Getting initials for user data:", userData);
            return `${userData.firstName.charAt(0).toUpperCase()}${userData.lastName.charAt(0).toUpperCase()}`;
        }
        return "П";
    };

    return (
        <>
            <GlobalStyle />
            {isAuthenticated && (
                <Header>
                    <NavContainer>
                        <NavLinks>
                            <NavLink href="/CustomsRegulations">Таможенные правила</NavLink>
                            <NavLink href="/DeliveryCalculator">Калькулятор доставки</NavLink>
                            <NavLink href="/ProhibitedProductsPage">Запрещенные товары</NavLink>
                            <NavLink href="/Contacts">Задать вопрос</NavLink>
                            <LastNavLink href="/RedemptionOfGoods">Выкуп товаров</LastNavLink>
                        </NavLinks>
                    </NavContainer>
                    <div css={iconContainerStyles}>
                        <PlusIcon css={iconStyles} />
                        <span>Баланс: 0.00 ₽</span>
                        <ProfileDropdownContainer ref={dropdownRef}>
                            <ProfileButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                <InitialsCircle>
                                    {getInitials()}
                                </InitialsCircle>
                                Профиль
                            </ProfileButton>
                            {isDropdownOpen && (
                                <DropdownMenu
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                >
                                    <DropdownItem href="/PersonalArea">Профиль</DropdownItem>
                                    <DropdownItem href="/RecipientsPrivateCabinet">Получатели</DropdownItem>
                                    <DropdownItem href="/ChangingContactDetails">Изменить контактные данные</DropdownItem>
                                    <DropdownItem href="/ChangePassword">Сменить пароль</DropdownItem>
                                    <DropdownItem onClick={handleLogout}>Выйти из аккаунта</DropdownItem>
                                </DropdownMenu>
                            )}
                        </ProfileDropdownContainer>
                    </div>
                </Header>
            )}
        </>
    );
};

export default HeaderContainer;
