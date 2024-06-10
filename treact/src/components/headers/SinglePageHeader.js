import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-scroll";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import Header from "../headers/SingleLight";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import DesignIllustration from "images/SinglePackage.svg";

const Container = tw.div`relative pt-16`; // Increased padding-top
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto`;

const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = styled.h1`
    ${tw`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`}
    margin-bottom: 50px; // Increased margin between title and paragraph
    color: #0ABD19;
`;

const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const Actions = styled.div`
    ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
    button {
        ${tw`w-[200px] sm:relative sm:right-0 sm:top-0 sm:bottom-0 bg-green-500 text-white font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:leading-none focus:outline-none transition duration-300`}
        background-color: #0ABD19; // Bright green background
        border: none;
        &:hover,
        &:focus {
            background-color: #0ABD50;
            transform: scale(1.1);
        }
    }
`;

const IllustrationContainer = styled.div`
    ${tw`flex justify-center lg:justify-end items-center`}
    margin-left: 9%; // Increased left margin
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
            <Container>
                <TwoColumn>
                    <LeftColumn>
                        <Heading>
                            О нас
                        </Heading>
                        <Paragraph>
                            eParcel Logistics является российской службой <br/> доставки и мейлфорвардом посылок и
                            грузов из <br/>
                            зарубежных
                            стран в Россию. Мы оказываем <br/> полный комплекс услуг по логистике и доставке <br/> для
                            юридических и физических лиц, купленных <br/> на фабриках, заводах, маркетплейсах или
                            в <br/>
                            онлайн-магазинах в зарубежных странах. <br/> <br/>

                            ​

                            Доставка грузов и посылок с товарами из-за <br/>границы является нашей основной <br/>деятельностью
                            с
                            собственными методами <br/> доставки до России. Доставка грузов или  <br/>посылок
                            производится по
                            всей
                            России до  <br/>адресата
                        </Paragraph>
                        <Actions>
                            <Link to="contacts" smooth={true} duration={500}>
                                <button>Связаться</button>
                            </Link>
                        </Actions>
                    </LeftColumn>
                    <RightColumn>
                        <IllustrationContainer>
                            <img tw="min-w-0 w-full max-w-lg xl:max-w-3xl" src={DesignIllustration} alt="Design Illustration" />
                        </IllustrationContainer>
                    </RightColumn>
                </TwoColumn>
                <DecoratorBlob1 />
            </Container>
        </>
    );
};