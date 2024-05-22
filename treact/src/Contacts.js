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
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <ContactUsForm />
      <ContactDetails
        cards={[
          {
            title: "E-mail - Телефон для связи:",
            description: (
              <>
                <Address>
                  <AddressLine>8 (800) 777-76-10</AddressLine>
                    <AddressLine>info@eparcel.kz</AddressLine>
                </Address>
              </>
            )
          },
          {
            title: "Режим работы склада (США):",
            description: (
              <>
                <Address>
                  <AddressLine>Понедельник - пятница с 15:00 до 23:00
                     </AddressLine>
                  <AddressLine> Суббота, Воскресенье - выходные дни</AddressLine>
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
