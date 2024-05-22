import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide1 from "images/Slide1.svg"; // Ensure correct path
import Slide2 from "images/Slide2.svg"; // Ensure correct path

const Container = tw.div`relative -mx-8 -mt-20`;
const TwoColumn = tw.div`flex flex-col lg:flex-row`;
const LeftColumn = tw.div`ml-8 mr-8 xl:pl-10 py-8`;
const RightColumn = styled.div`
    ${tw`relative xl:ml-24 h-96 lg:h-auto lg:w-1/2 lg:flex-1`}
`;


const Content = tw.div`mt-24 lg:mt-24 lg:mb-24 flex flex-col sm:items-center lg:items-stretch`;
const Heading = tw.h1`text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-black leading-none`;
const Paragraph = tw.p`max-w-md my-8 lg:my-5 lg:my-8 sm:text-lg lg:text-base xl:text-lg leading-loose`;

const StyledSlider = styled(Slider)`
    margin-top: 150px; // Adds top margin to the slider

   
`;

const Actions = styled.div`
    ${tw`mb-8 lg:mb-0`}
    button {
        ${tw`w-[200px] sm:relative sm:right-0 sm:top-0 sm:bottom-0 bg-green-500 text-white font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:leading-none focus:outline-none transition duration-300`}
        background-color: #0ABD19; // Bright green button background
        border: none;

        &:hover,
        &:focus {
            transform: scale(1.1);
            background-color: #0ABD50;
        }
    }
`;

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
};

export default ({
                    heading = (
                        <>
                            Наш склад в США
                        </>
                    ),
                    description = "Склад в США расположен в безналоговом штате Делавэр, на адрес которого покупатели из Казахстана могут отправить свои товары, купленные в онлайн магазинах, а их мы доставим на Ваш адрес в Казахстан.\n\nПокупайте товары в США и указывайте в магазине адрес, который Вы получили при регистрации. Надежная доставка товаров из США до Вашего дома – полностью на нас.",
                }) => {
    return (
        <Container>
            <TwoColumn>
                <LeftColumn>
                    <Content>
                        <Heading>{heading}</Heading>
                        <Paragraph>{description}</Paragraph>
                        <Actions>
                            <button>Получить адрес доставки</button>
                        </Actions>
                    </Content>
                </LeftColumn>
                <RightColumn>
                    <StyledSlider {...settings}>
                        <div>
                            <img src={Slide1} alt="Warehouse slide 1" />
                        </div>
                        <div>
                            <img src={Slide2} alt="Warehouse slide 2" />
                        </div>
                    </StyledSlider>
                </RightColumn>
            </TwoColumn>
        </Container>
    );
};
