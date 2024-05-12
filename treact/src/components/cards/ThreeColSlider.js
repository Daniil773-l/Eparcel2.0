import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  background-color: #0ABD19; /* Set the green background */
  svg {
    ${tw`w-6 h-6`}
  }

  &:hover {
    background-color: #088013; /* Darker green on hover */
  }
  &:focus{
    background-color: #088013; /* Darker green on hover */
  }
`;



const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = styled.div`
  ${tw`flex flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`}
  display: flex;
  flex-direction: column;
  justify-content: space-between; // Ensures spacing is maintained nicely
`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`,
  `aspect-ratio: 4 / 3;` // Adjust aspect ratio as needed
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2`; // Уменьшаем bottom margin до 2

const Title = tw.h5`text-2xl font-bold mb-2`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-base leading-relaxed mt-1 sm:mt-2 mb-1`;// Adjusted font-size from 'text-sm' to 'text-base' and reduced margin-top


const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = styled(PrimaryButtonBase)`
    ${tw`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`}
    background-color: #0ABD19; /* Green background */
    color: white; /* White text for better visibility */
  &:hover {
    background-color: #088013; /* Darker green on hover */
  }
`;
export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc: "https://eparcel.wtstudio.ru/img/slider/img-1.png",
      title: "Где покупать товары с выгодой",
      description: "Узнай о самых выгодных магазинах в США",
    },
    {
      imageSrc: "https://eparcel.wtstudio.ru/img/slider/img-2.png",
      title: "Получай кэшбек с заказов",
      description: "Экономьте на своих покупках и возвращайте деньги",
    },
    {
      imageSrc: "https://eparcel.wtstudio.ru/img/slider/img-3.png",
      title: "Открытие 30 000 ПВЗ в Казахстане",
      description: "В Астане был открыт 30 тысячный пункт выдачи",
    },
    {
      imageSrc: "https://eparcel.wtstudio.ru/img/slider/img-4.png",
      title: "Объединение заказов бесплатно",
      description: "Экономьте на своих покупках и возвращайте деньги",
    },
  ]

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Новости и специальные предложения</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                    <Rating>{card.rating}</Rating>
                </TitleReviewContainer>
                <Description>{card.description}</Description>
              </TextInfo>

            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
