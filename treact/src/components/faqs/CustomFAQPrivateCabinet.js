import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as PlusIcon } from "feather-icons/dist/icons/plus.svg";
import { ReactComponent as MinusIcon } from "feather-icons/dist/icons/minus.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const TwoColumn = tw.div`flex flex-col items-center`;
const Column = tw.div`w-full`;

const FAQContent = styled.div`
    ${tw`lg:ml-6 w-full`}
    margin-left: -20px; /* Move the form slightly to the left */
`;
const Subheading = tw(SubheadingBase)`mb-4 text-center lg:text-left`;
const HeadingContainer = tw.div`flex items-center justify-between w-full`;

const Heading = styled(SectionHeading)`
    ${tw`lg:text-left text-3xl`} /* Reduced heading size */
    span {
        ${tw`text-green-500`}
    }
`;

const LinkContainer = styled.div`
    ${tw`flex items-center`}
`;

const FAQSLink = styled.a`
    ${tw`text-green-500 ml-4 flex items-center relative`}
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    text-decoration: none;
    align-items: center;
    transition: transform 0.3s ease;

    &::after {
        content: "→";
        position: absolute;
        margin-bottom: 6px;
        right: -25px; /* Position the arrow to the right */
        font-size: 1.5rem; /* Increased size of the arrow */
        transition: transform 0.3s ease;
    }

    &:hover::after {
        transform: translateX(4px);
    }
`;

const FAQSContainer = tw.dl`mt-12 w-full`;
const FAQ = tw.div`cursor-pointer mt-8 select-none border lg:border-0 px-8 py-4 lg:p-0 rounded-lg lg:rounded-none`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = styled.span`
    ${tw`ml-2 text-gray-100 p-2 rounded-full group-hover:text-gray-200 transition duration-300`}
    background-color: #0ABD19;
    svg {
        ${tw`w-6 h-6`} /* Increased size of the plus/minus icons */
    }
`;
const Answer = motion(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);

export default ({
                    subheading = "",
                    heading = "Ответы на популярные вопросы",
                    linkText = "Все вопросы и ответы",
                    linkHref = "#",
                    faqs = null
                }) => {
    const defaultFaqs = [
        {
            question: "Как делать покупки в США с доставкой в Россию, если я не знаю английский язык?",
            answer: "Мы всегда советуем проверять состояние/комплектацию покупок с помощью услуги «Спецзапрос». Он позволяет выявить все несоответствия заказа с пришедшими покупками и оперативно решить с магазином все вопросы. Создать спецзапрос можно в личном кабинете."
        },
        {
            question: "В чём преимущества американских и европейских магазинов?",
            answer: "Мы всегда советуем проверять состояние/комплектацию покупок с помощью услуги «Спецзапрос». Он позволяет выявить все несоответствия заказа с пришедшими покупками и оперативно решить с магазином все вопросы. Создать спецзапрос можно в личном кабинете."
        },
        {
            question: "Как мне проверить состояние товара до отправки в Россию?",
            answer: "Мы всегда советуем проверять состояние/комплектацию покупок с помощью услуги «Спецзапрос». Он позволяет выявить все несоответствия заказа с пришедшими покупками и оперативно решить с магазином все вопросы. Создать спецзапрос можно в личном кабинете."
        },
        {
            question: "Чем отличается шопинг в магазинах США и Европы?",
            answer: "Мы всегда советуем проверять состояние/комплектацию покупок с помощью услуги «Спецзапрос». Он позволяет выявить все несоответствия заказа с пришедшими покупками и оперативно решить с магазином все вопросы. Создать спецзапрос можно в личном кабинете."
        },
        {
            question: "Почему обязательно нужно оформлять таможенную декларацию при доставке в Россию?",
            answer: "Мы всегда советуем проверять состояние/комплектацию покупок с помощью услуги «Спецзапрос». Он позволяет выявить все несоответствия заказа с пришедшими покупками и оперативно решить с магазином все вопросы. Создать спецзапрос можно в личном кабинете."
        }
    ];

    if (!faqs || faqs.length === 0) faqs = defaultFaqs;

    const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

    const toggleQuestion = questionIndex => {
        if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
        else setActiveQuestionIndex(questionIndex);
    };

    return (
        <Container>
            <Content>
                <TwoColumn>
                    <Column>
                        <FAQContent>
                            {subheading && <Subheading>{subheading}</Subheading>}
                            <HeadingContainer>
                                <Heading>
                                    <span>Ответы</span> на популярные вопросы
                                </Heading>
                                <LinkContainer>
                                    <FAQSLink href={linkHref}>{linkText}</FAQSLink>
                                </LinkContainer>
                            </HeadingContainer>
                            <FAQSContainer>
                                {faqs.map((faq, index) => (
                                    <FAQ
                                        key={index}
                                        onClick={() => {
                                            toggleQuestion(index);
                                        }}
                                        className="group"
                                    >
                                        <Question>
                                            <QuestionText>{faq.question}</QuestionText>
                                            <QuestionToggleIcon>
                                                {activeQuestionIndex === index ? <MinusIcon /> : <PlusIcon />}
                                            </QuestionToggleIcon>
                                        </Question>
                                        <Answer
                                            variants={{
                                                open: { opacity: 1, height: "auto", marginTop: "16px" },
                                                collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                                            }}
                                            initial="collapsed"
                                            animate={activeQuestionIndex === index ? "open" : "collapsed"}
                                            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        >
                                            {faq.answer}
                                        </Answer>
                                    </FAQ>
                                ))}
                            </FAQSContainer>
                        </FAQContent>
                    </Column>
                </TwoColumn>
            </Content>
        </Container>
    );
};
