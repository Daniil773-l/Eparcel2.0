import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-12 lg:py-16`; // Уменьшенные отступы

const HeadingColumn = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;

const HeadingTitle = styled.h1`
  ${tw`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-4xl text-gray-900 leading-tight`}
  margin-bottom: 50px; /* Увеличение отступа между заголовком и абзацем */
`;

const HeadingDescription = tw.p`my-5 lg:my-8 text-base xl:text-xl`;

const Break = styled.div`
  ${tw`my-4`}
`;

export default () => {
    return (
        <Container>
            <Content>
                <HeadingColumn>
                    <HeadingTitle>O нас</HeadingTitle>
                    <HeadingDescription>

                        ЕPARCEL.ru является российской службой доставки и мейлфорвардом посылок из зарубежных стран в Россию. Мы <br/> оказываем полный комплекс услуг по логистике и доставке посылок с товарами для физических лиц, купленных на <br/> маркетплейсах и в онлайн-магазинах в зарубежных странах.
                        <Break />
                        Доставка посылок с товарами из-за границы является нашей основной деятельностью с собственными методами <br/> доставки до России. У нас широкая сеть пунктов выдачи заказов, постоматов с удобным месторасположением, а также <br/> курьерская доставка на дом. Доставка посылок производится по всей России.

                        Наша цель - оказание
                    </HeadingDescription>
                </HeadingColumn>
            </Content>
        </Container>
    );
};
