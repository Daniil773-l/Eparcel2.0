import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Header from 'components/headers/light';
import Footer from "components/footers/MainFooterWithLinks";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
const Container = tw.div`relative `;
const Content = tw.div`max-w-screen-xl mx-auto py-12 lg:py-16`; // Уменьшенные отступы
const HeadingColumn = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;


const HeadingTitle = styled.h1`
  ${tw`font-bold text-3xl md:text-2xl lg:text-4xl xl:text-4xl  leading-tight`}
  margin-bottom: 50px; /* Увеличение отступа между заголовком и абзацем */
    color: #2D2D2D;
`;

const GreenLink = styled.a`
  ${tw`text-green-500`} // Зеленый цвет
  text-decoration: none;
`;

const HeadingDescription = styled.p`
    ${tw.p`my-5 md:text-5xl lg:my-8 text-base text-black xl:text-xl`}
    font-size: 22px; // Set the font size
    line-height: 32px; // Set the line height
    color: #2D2D2D; // Maintain the color
    font-family: 'Gilroy Medium', sans-serif; // Set the font family, ensure a fallback
    font-weight: normal; // Regular text less bold than HighlightedText
`;


const Break = styled.div`
  ${tw`my-4`}
`;

export default () => {
    return (
        <>
            <AnimationRevealPage>
            <Header/>
            <Container>
                <Content>
                    <HeadingColumn>
                        <HeadingTitle>Для бизнеса</HeadingTitle>
                        <HeadingDescription>
                            Мы рады предложить нашим клиентам-юридическим лицам возможность воспользоваться услугами Eparcel.<br/> <br/>
                            <Break />

                            Если Вы занимаетесь бизнесом и хотите купить товары из США или Турции для своей деятельности, то мы поможем Вам с <br/>
                            этим. Мы предоставляем услуги по выкупу товаров, их доставке и таможенному оформлению. Вам не нужно будет тратить <br/>
                            время на поиск надежных поставщиков и заниматься таможенными процедурами. <br/> <br/>
                            <Break />

                            Наши клиенты могут рассчитывать на выгодные условия сотрудничества. Мы гарантируем быструю и надежную доставку <br/>
                            товаров и возможность получить нужные товары из-за границы без лишних затрат времени и средств. Обратившись к <br/>
                            нам, Вы можете быть уверены в качестве услуг и безопасности Вашего груза.  <GreenLink href="#">Начните работать с нами в один клик!!!</GreenLink>
                        </HeadingDescription>
                    </HeadingColumn>
                </Content>
            </Container>
            <Footer/>
            </AnimationRevealPage>
        </>

    );
};
