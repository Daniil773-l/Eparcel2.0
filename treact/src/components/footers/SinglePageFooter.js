import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const Container = styled.div`
    ${tw`text-gray-100 -mx-8 -mb-8`}
    background-color: #e2ffe2; // Установка цвета фона
`;

const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24 text-center`;
const Heading = styled.h2`
    ${tw`text-2xl lg:text-3xl font-bold`}
    color: #2D2D2D; // Custom text color
`;
const Subheading = tw.p`text-green-600 text-lg mt-2`;
const CopyrightText = tw.p`text-center mt-10 font-bold tracking-wide text-sm text-gray-600`;
const Form = tw.form`mt-4 flex flex-col items-center`;
const Input = tw.input`border-2 border-gray-300 px-4 py-2 text-black rounded-md mb-4 w-2/3 lg:w-1/3`;
const Button = tw.button`bg-green-500 text-white px-8 py-2 rounded-full font-bold transition duration-300 hover:bg-green-600 border-none`;

export default () => {
    return (
        <Container>
            <Content>
                <Heading>Подпишитесь на новости</Heading>
                <Form>
                    <Subheading>Укажите вашу эл. почту</Subheading>
                    <Input type="email" placeholder="" required />
                    <Button type="submit">Подписаться</Button>
                </Form>
                <CopyrightText>
                    &copy;2024 Eparcel. Все права защищены.
                </CopyrightText>
            </Content>
        </Container>
    );
};
