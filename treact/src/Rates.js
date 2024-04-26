import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import styled from 'styled-components';

import AnimationRevealPage from "./helpers/AnimationRevealPage"
import Hero from "./components/headers/RatesHeders";
import Tabs from './components/misc/VerticalTab';
import Footer from  "./components/footers/MiniCenteredFooter"

export default () => {
    return (
        <AnimationRevealPage>
            <Hero roundedHeaderButton={true}/>
            <div css={tw`mb-[10rem]`}>
                <Tabs/>
            </div>
            <Footer/>
        </AnimationRevealPage>
    );
}
