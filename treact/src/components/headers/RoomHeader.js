import React, { useState, useEffect, useRef } from "react";
import tw from "twin.macro";
import styled from "styled-components/macro"; // eslint-disable-line
import { motion } from "framer-motion";
import { ReactComponent as PlusIcon } from "images/icon/PlusIcon.svg";

const Header = styled.header`
    ${tw`w-full flex justify-center items-center bg-[#F9F9F9] h-[70px]`}
    padding: 0 !important;
    margin: 0 !important;
    box-sizing: border-box; // Ensure the box model includes padding and border in the element's total width and height.
`;

const NavLinks = styled.div`
    ${tw`flex items-center space-x-12`}
`;

const NavLink = styled.a`
    font-family: 'SFUIText', sans-serif;
    ${tw`text-lg lg:text-sm font-semibold tracking-wide transition duration-300`}
    text-decoration: none;
    color: #000000;

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
    ${tw`w-[120px] bg-green-500 mr-2 my-4 py-3 flex items-center justify-center leading-none transition duration-300`}
    background-color: #0ABD19;
    border: none;
    &:hover, &:focus {
        transform: scale(1.1);
        background-color: #0ABD19;
    }
`;

const iconContainerStyles = tw`flex items-center ml-4`;
const iconStyles = tw`w-6 h-6 mr-2`;

const HeaderContainer = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

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

    return (
        <Header>
            <NavLinks>
                <NavLink href="/CustomsRegulations">Таможенные правила</NavLink>
                <NavLink href="/DeliveryCalculator">Калькулятор доставки</NavLink>
                <NavLink href="/ProhibitedProductsPage">Запрещенные товары</NavLink>
                <NavLink href="/Contacts">Задать вопрос</NavLink>
                <LastNavLink href="/RedemptionOfGoods">Выкуп товаров</LastNavLink>
                <div css={iconContainerStyles}>
                    <PlusIcon css={iconStyles} />
                    <span>Баланс: 0.00 ₽</span>
                    <ProfileDropdownContainer ref={dropdownRef}>
                        <ProfileButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                            Профиль
                        </ProfileButton>
                        {isDropdownOpen && (
                            <DropdownMenu
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                            >
                                <DropdownItem href="/profile">Профиль</DropdownItem>
                                <DropdownItem href="/recipients">Получатели</DropdownItem>
                                <DropdownItem href="/change-contact">Изменить контактные данные</DropdownItem>
                                <DropdownItem href="/ChangePassword">Сменить пароль</DropdownItem>
                                <DropdownItem href="/logout">Выйти из аккаунта</DropdownItem>
                            </DropdownMenu>
                        )}
                    </ProfileDropdownContainer>
                </div>
            </NavLinks>
        </Header>
    );
};

export default HeaderContainer;
