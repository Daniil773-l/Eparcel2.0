import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import Header from "components/headers/MainCabinetHeader";
import RoomHeader from "../components/headers/RoomHeader";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import Footer from "components/footers/MainFooterWithLinks";
import ProfileCard from "../components/cards/ProfileCard";

const Container = styled.div`
  ${tw`relative w-full min-h-screen`}
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;

const TwoColumn = styled.div`
  ${tw`flex flex-col lg:flex-row lg:items-start max-w-screen-xl mx-auto py-20 md:py-24`}
`;

const LeftColumn = styled.div`
  ${tw`relative w-full text-left mx-auto`}
`;

export default ({ roundedHeaderButton }) => {
    return (
        <>
            <AnimationRevealPage>
                <RoomHeader />
                <Header roundedHeaderButton={roundedHeaderButton} />
                <Container>
                    <TwoColumn>
                        <LeftColumn>
                            <ProfileCard />
                        </LeftColumn>
                    </TwoColumn>
                </Container>
                <Footer />
            </AnimationRevealPage>
        </>
    );
};
