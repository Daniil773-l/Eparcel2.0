import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MainFooterWithLinks";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Title = tw.span`font-bold block mt-4`; // New style for titles
const Info = tw.span`text-sm mt-1 block text-gray-500`; // New style for information

export default () => {
    return (
        <AnimationRevealPage>
            <Header />
            <ContactUsForm />
            <ContactDetails
                cards={[
                    {
                        title: "Контактные данные:",
                        description: (
                            <>
                                <Address>
                                    <Title>Телефон для связи:</Title>
                                    <Info>8 (800) 777-76-10</Info>
                                    <Title>E-mail:</Title>
                                    <Info>info@eparcel.kz</Info>
                                </Address>
                            </>
                        )
                    },
                    {
                        title: "Режим работы склада (США):",
                        description: (
                            <>
                                <Address>
                                    <AddressLine>Понедельник - пятница с 15:00 до 23:00</AddressLine>
                                    <AddressLine>Суббота, Воскресенье - выходные дни</AddressLine>
                                </Address>
                            </>
                        )
                    },
                    {
                        title: "Режим работы склада (Турция):",
                        description: (
                            <>
                                <Address>
                                    <AddressLine>Понедельник - пятница с 11:00 до 19:00</AddressLine>
                                    <AddressLine>Суббота, Воскресенье - Выходные дни</AddressLine>
                                </Address>
                            </>
                        )
                    },
                ]}
            />
            <Footer />
        </AnimationRevealPage>
    );
};
