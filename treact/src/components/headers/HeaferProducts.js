import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";

import Header from "../../components/headers/light";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";

import DesignIllustration from "../../images/ProhibitedProducts.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = styled.h1`
    ${tw`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`}
    margin-bottom: 50px; /* Увеличение отступа между заголовком и абзацем */
`;

const Paragraph = styled.p`
    ${tw`my-5 lg:my-8 text-base xl:text-lg`}
    margin-top: 4rem; /* Увеличение отступа сверху */
    margin-bottom: 4rem; /* Увеличение отступа снизу */
`;

const IllustrationContainer = styled.div`
    ${tw`flex justify-center lg:justify-end items-center`}
    img {
        ${tw`min-w-0 w-full max-w-lg xl:max-w-2xl`} /* Увеличение размера изображения */
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
                        <Heading>Запрещенные товары</Heading>
                        <Paragraph>
                            Согласно Решению Коллегии ЕЭК от 21 апреля 2015 г. № 30 при ввозе товаров физическими лицами для личного пользования применяются запреты на ввоз и ввоз товаров, а также ряд ограничений (в том числе разрешительный порядок ввоза и вывоза).
                            <br />
                            Запрещенные к ввозу товары вообще нельзя перемещать через таможенную границу ни при каких обстоятельствах ни физическим, ни юридическим лицам.
                            <br />
                            Перечень товаров, в отношении которых установлен запрет ввоза на таможенную территорию ЕАЭС
                        </Paragraph>
                    </LeftColumn>
                    <RightColumn>
                        <IllustrationContainer>
                            <img src={DesignIllustration} alt="Design Illustration" />
                        </IllustrationContainer>
                    </RightColumn>
                </TwoColumn>
            </Container>
        </>
    );
};
