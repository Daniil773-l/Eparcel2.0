import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

//eslint-disable-next-line
import { css } from "styled-components/macro";

import Header from "../headers/light.js";

// Random Decorator Blobs (shapes that you see in background)
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import DesignIllustration from "../../images/delivery-guy.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left pb-32`;
const RightColumn = tw.div`relative mt-24 lg:mt-32 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = styled.h1`
    ${tw`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`}
`;


const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const Actions = styled.div`
    ${tw`relative max-w-md text-center mx-auto lg:mx-0`}

    input {
        ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-[225px] font-medium focus:outline-none transition duration-300`}
    }

    input:hover,
    input:focus {
        border-color: #0ABD19;
    }

    button {
        ${tw`w-[180px] sm:absolute right-0 top-0 bottom-0 bg-green-500 text-white font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:leading-none focus:outline-none transition duration-300`}
        background-color: #0ABD19;
        border: none;
    }

    button:hover,
    button:focus {
        transform: scale(1.1);
    }
`;

const IllustrationContainer = styled.div`
  ${tw`flex justify-center lg:justify-end items-center align-middle max-w-md`}
    margin-left: 100px;  // Добавлен отступ слева
    margin-bottom: 200px;
`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
    ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

const CustomersLogoStrip = styled.div`
    ${tw`mt-12 lg:mt-20`}
    p {
        ${tw`uppercase text-sm lg:text-xs tracking-wider font-bold text-gray-500`}
    }
    img {
        ${tw`mt-4 w-full lg:pr-16 xl:pr-32 opacity-50`}
    }
`;
const HighlightedText = styled.span`
    ${tw`font-bold`}
    color: #0ABD19; // Custom color
`;
export default ({ roundedHeaderButton }) => {
    return (
        <>
            <Header roundedHeaderButton={roundedHeaderButton} />
            <Container>
                <TwoColumn>
                    <LeftColumn>
                        <Heading>
                            Тарифы для выгодных покупок вместе с <HighlightedText>Eparcel.ru</HighlightedText>
                        </Heading>
                        <Paragraph>
                            Доставка товаров осуществляется компанией Eparcel по трем тарифам в зависимости от региона, в котором Вы проживаете
                        </Paragraph>
                    </LeftColumn>
                    <RightColumn>
                        <IllustrationContainer style={{ marginRight: "-50px", marginTop: "-20px" }}>
                            <img tw="min-w-0 w-full max-w-lg xl:max-w-3xl" src={DesignIllustration} alt="Design Illustration" />
                        </IllustrationContainer>
                    </RightColumn>
                </TwoColumn>
                <DecoratorBlob1 />
            </Container>
        </>
    );
};