import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import TeamIllustrationSrc from "images/team-illustration-2.svg";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = styled(Column)(props => [
  tw`md:w-6/12 flex-shrink-0 relative`,
  css`
    /* Adjust the position of the image column */
    margin-left: 0%; /* Shifts the entire image column slightly to the left */
    max-width: 95%; /* Reducing max-width of the column to adjust the space */
  `
]);
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.img(props => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`,
  css`
    width: 100%;       // Занимает 100% ширины контейнера
    height: auto;      // Высота автоматически адаптируется
    @media (max-width: 768px) {
      width: auto;     // На мобильных устройствах может использовать исходную ширину
      max-width: 100%; // Не превышает ширину контейнера
    }
  `
]);



const DecoratorBlob = styled(SvgDotPattern)(() => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`
]);

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

const Steps = tw.ul`mt-12`;
const Step = styled.li`
  ${tw`mt-8 flex items-start`}
`;

const StepNumber = styled.div`
  ${tw`font-semibold text-4xl leading-none text-[#0ABD19]`}
  min-width: 80px; // Adjust this as needed to match the design
`;


const StepText = styled.div`
  ${tw`flex flex-col justify-center`}
`;
const StepHeading = tw.h6`text-xl font-semibold leading-none mt-1`; // Adjust the margin-top as needed
const StepDescription = tw.p`mt-[-2rem]
 text-sm font-medium`;

export default ({
  subheading = "Our Expertise",
  heading = (
    <>
      Designed & Developed by <span tw="text-primary-500">Professionals.</span>
    </>
  ),
  imageSrc = TeamIllustrationSrc,
  imageRounded = true,
  imageBorder = false,
  imageShadow = false,
  imageDecoratorBlob = false,
  textOnLeft = true,
  steps = null,
  decoratorBlobCss = null,
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

  const defaultSteps = [
    {
      heading: " Регистрация",
      description: "Зарегистрируйтесь на нашем сайте и получите адрес для доставки ваших покупок за рубежом"
    },
    {
      heading: "Покупка",
      description: "Заказывайте товары в зарубежных интернет-магазинах и отправляйте их к нам на склад"
    },
    {
      heading: "Оформление",
      description: "Оформляйте доставку в Казахстан. Отправляйте товары из заграницы друзьям, клиентам или себе"
    },
    {
      heading: "Получение",
      description: "Получайте посылки прямо до дома"
    }

  ];

  if (!steps) steps = defaultSteps;

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image src={imageSrc} imageBorder={imageBorder} imageShadow={imageShadow} imageRounded={imageRounded} />
          {imageDecoratorBlob && <DecoratorBlob css={decoratorBlobCss} />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>

            <Heading>{heading}</Heading>
            <Steps>
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepNumber>{(index+1).toString().padStart(2,'0')}</StepNumber>
                  <StepText>
                    <StepHeading>{step.heading}</StepHeading>
                    <StepDescription>{step.description}</StepDescription>
                  </StepText>
                </Step>
              ))}
            </Steps>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
