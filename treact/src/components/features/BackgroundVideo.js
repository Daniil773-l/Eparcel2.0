import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import hugeLogo from "../../images/logistics-logo.svg";

const VideoContainer = styled.div`
    ${tw`w-full`}
    height: 930px; // Set the height as needed
    overflow: hidden;
`;

const BackgroundVideo = styled.video`
    ${tw`absolute top-0 left-0 w-full h-full object-cover`}
    z-index: -1; // Ensure video is behind content
    opacity: 0.5; // Adjust opacity for transparency effect
    max-width: 100%; // Ensure the video doesn't exceed the width of its container
`;

const ContentOverlay = styled.div`
    ${tw`absolute h-full flex flex-col justify-center items-center text-center p-8`}
    left: 50%;
    transform: translateX(-50%);
`;
const Heading = styled.h1`
    ${tw`text-4xl lg:text-6xl font-bold mb-4`}
    color: #2d2d2d; // Custom text color
`;

const Subheading = styled.p`
    ${tw`text-lg lg:text-xl font-semibold mb-8`}
    color: #2d2d2d; // Custom text color
`;

const Button = styled.a`
    ${tw`px-8 py-3 bg-green-500 rounded-full font-bold text-white transition duration-300`}
    text-decoration: none;
    border: none;
    color: #2d2d2d; // Custom text color
    &:hover {
        background-color: #0ABD50;
        transform: scale(1.1);
        text-decoration: none;
    }
`;

const LargeHeader = styled.img`
    ${tw`mb-8`}
    width: 400px; // Adjust the size as needed
    height: auto;
`;

const BackgroundVideoComponent = ({ videoSrc, children }) => {
    return (
        <VideoContainer>
            <BackgroundVideo autoPlay loop muted playsInline>
                <source src={videoSrc} type="video/mp4" />
            </BackgroundVideo>
            <ContentOverlay>
                <LargeHeader src={hugeLogo} alt="Large Header" />
                <Heading>Самая выгодная доставка товаров</Heading>
                <Subheading>из США для ИП и ООО</Subheading>
            </ContentOverlay>
            {children}
        </VideoContainer>
    );
};

export default BackgroundVideoComponent;
