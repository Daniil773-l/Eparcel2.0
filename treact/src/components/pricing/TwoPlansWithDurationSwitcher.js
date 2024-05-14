import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-6.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

const HeaderContainer = tw.div`w-full flex flex-col items-center`;
const Heading = tw.h2`w-full text-2xl sm:text-3xl font-black tracking-wide text-center`;
const Description = tw.p`w-full text-center text-sm md:text-base`;

const PlanDurationSwitcher = tw.div`flex justify-center items-center my-5`;
const SwitchButton = styled.button`
  ${tw`px-6 py-3 rounded-full focus:outline-none text-sm font-bold transition duration-300 mx-2`}
  ${props => props.active ? tw`bg-green-500 text-white border border-green-500` : tw`bg-transparent text-green-700 border border-green-500 hover:bg-green-700 hover:text-white`}
  &:hover {
    ${tw`bg-green-700 text-white border-green-700`}
  }
`;

const PricesContainer = styled.div`
  position: relative;
`;

const PriceTransition = styled(CSSTransition)`
  &.price-enter {
    opacity: 0;
    transform: translateY(-10px);
  }
  &.price-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 300ms, transform 300ms;
  }
  &.price-exit {
    opacity: 1;
  }
  &.price-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }
`;

const PlansContainer = tw.div`flex justify-center flex-wrap items-center md:items-start relative`;
const Plan = styled.div`
  ${tw`max-w-xs mt-16 text-center px-8 py-2 rounded-lg relative text-gray-900 bg-white shadow-raised m-2`}
`;

const PlanHeader = styled.div`
  ${tw`flex flex-col items-center py-4`}
  .name {
    ${tw`font-bold text-lg mb-3`} // Добавляем отступ снизу
    .zone {
      ${tw`text-green-500`}
    }
  }
  .duration {
    ${tw`text-gray-500 text-sm`}
  }
`;



const Subheading = tw.span`uppercase tracking-wider text-sm`;

const PlanFeatures = styled.div`
  ${tw`flex flex-col md:flex-row items-start border-t-2 border-b-2 py-4`}
`;

const FeaturesColumn = styled.div`
  ${tw`w-full md:w-1/3 flex flex-col`}
`;

const FeatureTitle = tw.div`font-semibold text-gray-900 mb-2`;

const Divider = tw.div`hidden md:block md:w-px md:bg-gray-300 md:h-full md:self-center`;

const PriceListItem = styled.li`
  ${tw`text-sm text-gray-600 py-1`}
  &:not(:last-child) {
    ${tw`border-b`}
  }
`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-25 transform -translate-x-2/3 -translate-y-1/2`}
`;

const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-25 transform translate-x-2/3 translate-y-1/2 fill-current text-teal-500`}
`;

export default ({
                  subheading = "",
                  heading = "Тарифы",
                  description = "",
                  plans = null,
                  primaryButtonText = "Buy Now",
                  planDurations = [
                    {
                      text: "Month",
                      switcherText: "США",
                    },
                    {
                      text: "Year",
                      switcherText: "Турция",
                    }
                  ]
                }) => {
  const defaultPlans = [
    {
      name: "Тарифная Зона 1",
      duration: "Тариф установлен для доставки посылок в Центральную часть России",
      mainFeature: "Посмотреть цены >",
      features: [
        { title: "Вес", weights: ["0.5 кг", "1 кг", "1.5 кг", "2 кг", "2.5 кг", "3 кг", "Более 3 кг"] },
        { title: "ПВЗ", prices: ["$10", "$15", "$20", "$25", "$30", "$35", "$10/кг"] },
        { title: "Курьер", prices: ["$10", "$15", "$20", "$25", "$30", "$35", "$10/кг"] }

      ]
    },
    // Repeat the same structure for Zones 2 and 3
    {
      name: "Тарифная Зона 2",
      duration: "Тариф установлен для доставки посылок за Уралом",
      mainFeature: "Посмотреть цены >",
      features: [
        { title: "Вес", weights: ["0.5 кг", "1 кг", "1.5 кг", "2 кг", "2.5 кг", "3 кг", "Более 3 кг"] },
        { title: "ПВЗ", prices: ["$10", "$15", "$20", "$25", "$30", "$35", "$10/кг"] },
        { title: "Курьер", prices: ["$10", "$15", "$20", "$25", "$30", "$35", "$10/кг"] }

      ]
    },
    {
      name: "Тарифная Зона 3",
      duration: "Тариф установлен для доставки посылок в удаленные и труднодоступные города",
      mainFeature: "Посмотреть цены >",
      features: [
        { title: "Вес", weights: ["0.5 кг", "1 кг", "1.5 кг", "2 кг", "2.5 кг", "3 кг", "Более 3 кг"] },
        { title: " ПВЗ", prices: ["$10", "$15", "$20", "$25", "$30", "$35", "$10/кг"] },
        { title: "Курьер", prices: ["$10", "$15", "$20", "$25", "$30", "$35", "$10/кг"] }

      ]
    }
  ];

  if (!plans) plans = defaultPlans;

  const [activeDurationIndex, setActiveDurationIndex] = useState(0);

  const switchPrices = (newIndex) => {
    setActiveDurationIndex(newIndex);
  };

  return (
      <Container>
        <ContentWithPaddingXl>
          <HeaderContainer>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <PlanDurationSwitcher>
              {planDurations.map((planDuration, index) => (
                  <SwitchButton
                      active={activeDurationIndex === index}
                      key={index}
                      onClick={() => switchPrices(index)}
                  >
                    {planDuration.switcherText}
                  </SwitchButton>
              ))}
            </PlanDurationSwitcher>
          </HeaderContainer>
          <PlansContainer>
            {plans.map((plan, index) => (
                <Plan key={index}>
                  <PlanHeader>
                    <span className="name">Тарифная <span className="zone">Зона {index + 1}</span></span>
                    <span className="duration">{plan.duration}</span>
                  </PlanHeader>
                  <PlanFeatures>
                    {plan.features.map((feature, idx) => (
                        <FeaturesColumn key={idx}>
                          <FeatureTitle>{feature.title}</FeatureTitle>
                          {feature.prices && feature.prices.map((price, priceIdx) => (
                              <PriceListItem key={priceIdx}>{price}</PriceListItem>
                          ))}
                          {feature.weights && feature.weights.map((weight, weightIdx) => (
                              <PriceListItem key={weightIdx}>{weight}</PriceListItem>
                          ))}
                        </FeaturesColumn>
                    ))}
                  </PlanFeatures>
                </Plan>
            ))}
          </PlansContainer>
        </ContentWithPaddingXl>
        <DecoratorBlob1 />
        <DecoratorBlob2 />
      </Container>
  );
};
