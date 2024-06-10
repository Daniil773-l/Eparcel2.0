import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; // eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";

const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`;
const Heading = tw(SectionHeading)`w-full text-center`;
const StepsContainer = styled.div`
    ${tw`flex justify-between flex-col lg:flex-row items-center lg:items-stretch relative`}
    margin-bottom: 70px; /* Add more bottom margin */
`;

const Step = styled.div`
    ${tw`w-full max-w-sm mt-16 lg:mr-8 lg:last:mr-0 text-left px-8 rounded-lg relative pt-2 flex flex-col`}
    ${props =>
            css`
                background: #ffffff; // White background
                box-shadow: none; // Remove border
            `}
`;

const StepHeader = styled.div`
    ${tw`flex flex-col uppercase leading-relaxed`}
    .step-number {
        ${tw`font-bold text-2xl text-green-500`} /* Green step number and larger font size */
    }
    .step-title {
        ${tw`font-bold text-xl text-gray-900 mt-2`} /* Step title color and margin-top for spacing */
    }
`;

const StepDescription = styled.div`
    ${tw`mt-4`}
    ${css`
        color: #2d2d2d; /* Dark gray color for descriptions */
    `}
`;

const StepFooter = styled.div`
    ${tw`mt-4 w-full`}
    ${css`
        height: 2px;
        background-color: #0abd19; /* Green line */
    `}
`;

export default ({ heading = "Как это работает?", steps = null }) => {
    const defaultSteps = [
        {
            number: "Шаг 1.",
            title: "Заявка",
            description: "Заполните заявку на нашем сайте или свяжитесь с нами по телефону",
        },
        {
            number: "Шаг 2.",
            title: "Покупка",
            description: "Заказывайте товары или мы выкупим для вас, отправляйте к нам на склад",
        },
        {
            number: "Шаг 3.",
            title: "Оформление",
            description: "Оформляйте доставку в Россию к себе или своим клиентам",
        },
        {
            number: "Шаг 4.",
            title: "Получение",
            description: "Получайте ваш груз или посылки",
        },
    ];

    if (!steps) steps = defaultSteps;

    return (
        <Container>
            <ContentWithPaddingXl>
                <HeaderContainer>
                    <Heading>{heading}</Heading>
                </HeaderContainer>
                <StepsContainer>
                    {steps.map((step, index) => (
                        <Step key={index}>
                            <StepHeader>
                                <span className="step-number">{step.number}</span>
                                <span className="step-title">{step.title}</span>
                            </StepHeader>
                            <StepDescription>{step.description}</StepDescription>
                            <StepFooter />
                        </Step>
                    ))}
                </StepsContainer>
            </ContentWithPaddingXl>
        </Container>
    );
};
