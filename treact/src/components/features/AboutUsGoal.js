import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import goal from "images/GoalPicture.svg";  // Updated import for the goal image

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;

const TextColumn = styled(Column)(props => [
    tw`md:w-6/12 mt-16 md:mt-0`,
    props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.img(props => [
    props.imageRounded && tw`rounded`,
    props.imageBorder && tw`border`,
    props.imageShadow && tw`shadow`,
    css`
        width: 100%;
        height: auto;
        @media (max-width: 768px) {
            max-width: 100%;
        }
    `
]);

const DecoratorBlob = tw(SvgDotPattern)`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`;

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = styled(SubheadingBase)`
    ${tw`text-center md:text-left`}
    color: #0ABD19;
`;

const Heading = tw(
    SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;

const Description = tw.p`mt-8 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Features = tw.div`mx-auto md:mx-0 flex flex-col lg:flex-col max-w-xs lg:max-w-none w-full`;

const Feature = tw.div`mt-10 lg:mt-8 flex items-center md:items-start flex-col md:mr-8 last:mr-0`;

const FeatureHeadingContainer = tw.div`flex items-center`;

const FeatureIconContainer = styled.div`
    ${tw`mx-auto inline-block border border-primary-500 text-primary-500 text-center p-2 flex-shrink-0`}
    svg {
        ${tw`w-6 h-6`}
    }
`;

const FeatureHeading = tw.div`ml-3 font-bold text-xl`;

const FeatureDescription = tw.div`mt-4 text-center md:text-left text-gray-600 leading-relaxed`;

const PrimaryButton = styled(PrimaryButtonBase)(props => [
    tw`mt-12 text-sm inline-block mx-auto md:mx-0`,
    props.buttonRounded && tw`rounded-full`
]);

export default ({
                    subheading = "",
                    heading = (
                        <>
                            Designed & Developed by <span tw="text-primary-500">Professionals.</span>
                        </>
                    ),
                    description=" оказание качественных услуг, быстрая и надежная доставка посылок с товарами по минимальной стоимости для наших клиентов",
                    primaryButtonText = "Learn More",
                    primaryButtonUrl = "https://timerse.com",
                    imageSrc= goal, // Updated image source to use goal.svg
                    buttonRounded = true,
                    imageRounded = true,
                    imageBorder = false,
                    imageShadow = false,
                    showDecoratorBlob = false,
                    textOnLeft = true,
                    features = [],
                    iconRoundedFull = true,
                    iconFilled = true,
                    iconContainerCss = null
                }) => {
    return (
        <Container>
            <TwoColumn>
                <ImageColumn>
                    <Image src={imageSrc} imageBorder={imageBorder} imageShadow={imageShadow} imageRounded={imageRounded} />
                    {showDecoratorBlob && <DecoratorBlob />}
                </ImageColumn>
                <TextColumn textOnLeft={textOnLeft}>
                    <TextContent>
                        <Subheading>{subheading}</Subheading>
                        <Heading>{heading}</Heading>
                        <Description>{description}</Description>
                        <Features>
                            {features.length > 0 && features.map((feature, index) => (
                                <Feature key={index}>
                                    <FeatureHeadingContainer>
                                        <FeatureIconContainer>
                                            {<feature.Icon />}
                                        </FeatureIconContainer>
                                        <FeatureHeading>{feature.title}</FeatureHeading>
                                    </FeatureHeadingContainer>
                                    <FeatureDescription>{feature.description}</FeatureDescription>
                                </Feature>
                            ))}
                        </Features>
                    </TextContent>
                </TextColumn>
            </TwoColumn>
        </Container>
    );
};
