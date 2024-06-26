import React from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled, { keyframes,createGlobalStyle } from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";


import logo from "../../images/logo.svg";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
  mt-4 // Больший отступ сверху
  mb-16 // Добавленный отступ снизу
`;


const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'SFUIText';
    src: url('../../fonts/SFUIDisplay-Ultralight.woff') format('woff');
    font-style: italic;
    font-weight: normal;
  }
`;

export const NavLinks = tw.div`inline-block`;

export const NavLink = styled.a`
  font-family: 'SFUIText', sans-serif;
  ${tw`text-lg my-2 lg:text-sm lg:mx-6 lg:my-0 font-semibold tracking-wide transition duration-300 pb-1`}
  ${tw`hover:border-primary-500 hover:text-primary-500 focus:text-primary-500`}
  ${css`
   
    text-decoration: none;
    color: #000000;
   
    &:hover, &:focus {
      color: #0ABD19;
      ${props => props.hasBorder ? tw`border-b-2 border-transparent` : tw`border-b-0`};
    }
  `}
`;
const pulsateAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;



export const PrimaryLink = styled(NavLink)`
  ${tw`lg:mx-0
px-8 py-3 rounded text-gray-100
hocus:text-gray-200 focus:shadow-outline rounded-full
border-b-0`}
  background-color: #0ABD19;
  border: none;
  transition: background-color 0.3s ease;

  &:not(:hover):not(:focus) {
    animation: ${pulsateAnimation} 1.5s infinite alternate;
  }

  &:hover, &:focus {
    background-color: #0ABD50;
    animation: none; // Disable pulsate animation on hover or focus
  }
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0`}
  img {
    ${tw`w-40 h-10 w-auto h-auto`}
  }

`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none  hocus:text-primary-500 transition duration-300
`;
export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

export default ({ roundedHeaderButton = false, logoLink, links, className, collapseBreakpointClass = "lg" }) => {

    const defaultLinks = [
        <NavLinks key={1}>
            <NavLink href="/#">Тарифы</NavLink>
            <NavLink href="/#">Услуги и стоимость</NavLink>
            <NavLink href="/#">Магазины</NavLink>
            <NavLink href="/#">Выкуп товаров</NavLink>
            <NavLink href="/#">О нас</NavLink>
            <NavLink href="/#"> Контакты</NavLink>

            <PrimaryLink css={roundedHeaderButton && tw`rounded-full`}href="/#">Войти </PrimaryLink>
        </NavLinks>
    ];

    const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
    const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

    const defaultLogoLink = (
        <LogoLink href="/">
            <img src={logo} alt="logo" />
        </LogoLink>
    );

    logoLink = logoLink || defaultLogoLink;
    links = links || defaultLinks;

    return (
        <Header className={className || "header-light"}>
            <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
                {logoLink}
                {links}
            </DesktopNavLinks>

            <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
                {logoLink}
                <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation} css={collapseBreakpointCss.mobileNavLinks}>
                    {links}
                </MobileNavLinks>
                <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
                    {showNavLinks ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />}
                </NavToggle>
            </MobileNavLinksContainer>
        </Header>
    );
};

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
    sm: {
        mobileNavLinks: tw`sm:hidden`,
        desktopNavLinks: tw`sm:flex`,
        mobileNavLinksContainer: tw`sm:hidden`
    },
    md: {
        mobileNavLinks: tw`md:hidden`,
        desktopNavLinks: tw`md:flex`,
        mobileNavLinksContainer: tw`md:hidden`
    },
    lg: {
        mobileNavLinks: tw`lg:hidden`,
        desktopNavLinks: tw`lg:flex`,
        mobileNavLinksContainer: tw`lg:hidden`
    },
    xl: {
        mobileNavLinks: tw`lg:hidden`,
        desktopNavLinks: tw`lg:flex`,
        mobileNavLinksContainer: tw`lg:hidden`
    }
};
