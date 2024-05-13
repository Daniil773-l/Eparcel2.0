import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Header from "../headers/light.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import DesignIllustration from "../../images/design-illustration-2.svg";
import DesignIllustration1 from "../../images/design-illustration-1.svg";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = styled.h1`
  ${tw`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`}
  margin-bottom: 50px;
`;

const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}

  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-[225px] font-medium focus:outline-none transition duration-300`}
    &:hover, &:focus {
      border-color: #0ABD19;
    }
  }

  button {
    ${tw`w-[180px] sm:absolute right-0 top-0 bottom-0 bg-green-500 text-white font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:leading-none focus:outline-none transition duration-300`}
    background-color: #0ABD19;
    border: none;
    &:hover, &:focus {
      transform: scale(1.1);
    }
  }
`;

const IllustrationContainer = styled.div`
  ${tw`flex justify-center lg:justify-end items-center`}
  width: 100%; // Makes sure the container is full width
  overflow: hidden; // Hides any overflowing parts of the children
  position: relative; // Needed for absolute positioning of children
  height: 600px; // Set a fixed height or adjust as needed
  img {
    position: absolute; // Absolute positioning to overlay images during transition
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: opacity 0.5s ease-in-out;
    width: 100%; // Adjust width as necessary
    height: 600px ; // Maintain aspect ratio
  }
`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

const HighlightedText = styled.span`
  ${tw`font-bold`}
  color: #0ABD19;
`;

export default ({ roundedHeaderButton }) => {
  const [showFirstImage, setShowFirstImage] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage(prev => !prev); // Toggle between true and false
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
      <>
        <Header roundedHeaderButton={roundedHeaderButton} />
        <Container>
          <TwoColumn>
            <LeftColumn>
              <Heading>
                Доставка товаров из США и Турции в <HighlightedText>Казахстан.</HighlightedText>
              </Heading>
              <Paragraph>
                Помогаем с покупками в американских и турецких интернет-магазинах и привозим их вам в Россию
              </Paragraph>
              <Actions>
                <input type="text" placeholder="Ваш e-mail" />
                <button>Зарегистрироваться</button>
              </Actions>
            </LeftColumn>
            <RightColumn>
              <IllustrationContainer>
                <img style={{ opacity: showFirstImage ? 1 : 0 }} src={DesignIllustration} alt="Design Illustration 1" />
                <img style={{ opacity: !showFirstImage ? 1 : 0 }} src={DesignIllustration1} alt="Design Illustration 2" />
              </IllustrationContainer>
            </RightColumn>
          </TwoColumn>
          <DecoratorBlob1 />
        </Container>
      </>
  );
};
