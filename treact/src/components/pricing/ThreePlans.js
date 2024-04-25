import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton } from "components/misc/Buttons.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob } from "images/svg-decorator-blob-6.svg";
import PBZSvg from "images/PBZ.svg"; // Импортируем SVG-файл

const HeaderContainer = tw.div`mt-10 w-full flex flex-col items-center`;
const Heading = tw(SectionHeading)`w-full`;
const PlansContainer = tw.div`flex justify-between flex-col lg:flex-row items-center lg:items-stretch relative`;

const Plan = styled.div`
  ${tw`w-full max-w-sm mt-16 lg:mr-8 lg:last:mr-0 text-center px-8 rounded-lg shadow relative pt-2 text-gray-900 bg-white flex flex-col`}
  .planHighlight {
    ${tw`rounded-t-lg absolute top-0 inset-x-0 h-2`}
  }

  ${props =>
      props.featured &&
      css`
        background: rgb(100, 21, 255);
        background: linear-gradient(135deg, rgba(100, 21, 255, 1) 0%, rgba(128, 64, 252, 1) 100%);
        background: rgb(85, 60, 154);
        background: linear-gradient(135deg, rgba(85, 60, 154, 1) 0%, rgba(128, 90, 213, 1) 100%);
        background: rgb(76, 81, 191);
        background: linear-gradient(135deg, rgba(76, 81, 191, 1) 0%, rgba(102, 126, 234, 1) 100%);
        ${tw`bg-primary-500 text-gray-100`}
        .planHighlight {
          ${tw`hidden`}
        }
        .duration {
          ${tw`text-gray-200!`}
        }
        .feature:not(.mainFeature) {
          ${tw`text-gray-300!`}
        }
      `}
`;

const PlanHeader = styled.div`
  ${tw`flex flex-col uppercase leading-relaxed `} /* Уменьшаем вертикальный отступ */
  .name {
    ${tw`font-bold text-xl`}
  }
  .price {
    ${tw`font-bold text-4xl sm:text-5xl my-1`}
  }
  .duration {
    ${tw`text-gray-500 font-bold tracking-widest`}
  }
`;

const PlanFeatures = styled.div`
  ${tw`flex flex-col -mx-8 px-8 py-8 border-t-2 border-b-2 flex-1`}
  .feature {
    ${tw`mt-2 first:mt-0 font-medium`} /* Уменьшаем вертикальный отступ */
    &:not(.mainFeature) {
      ${tw`text-gray-600`}
    }
  }
  .mainFeature {
    ${tw`text-gray-500 font-bold tracking-widest`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-25 transform -translate-x-1/2 translate-y-1/2`}
`;

const IconWrapper = styled.div`
  ${tw`p-2 rounded-full flex items-center justify-center`}
`;

export default ({ heading = "Flexible Plans.", plans = null }) => {
  const defaultPlans = [
    {
      name: "Personal",
      price: "$17.99",
      duration: "Monthly",
      mainFeature: "Suited for Personal Blogs",
      icon: PBZSvg, // Используем просто URL-адрес изображения
    },
    {
      name: "Business",
      price: "$37.99",
      duration: "Monthly",
      mainFeature: "Suited for Production Websites",
      featured: true,
    },
    {
      name: "Enterprise",
      price: "$57.99",
      duration: "Monthly",
      mainFeature: "Suited for Big Companies",
    },
  ];

  if (!plans) plans = defaultPlans;

  const highlightGradientsCss = css`
    background: rgb(88, 178, 56);
    background: linear-gradient(115deg, rgba(88, 178, 56, 1) 0%, rgba(167, 230, 129, 1) 100%);
  `;
  const ColoredText = styled.span`
    color: #0ABD19; // Устанавливаем желаемый цвет
  `;
  const addColorToLastWord = (text, color) => {
    const words = text.split(" "); // Разбиваем текст на слова
    const lastWord = words.pop(); // Удаляем последнее слово из массива
    return (
        <>
          {words.join(" ")} <span style={{ color }}>{lastWord}</span> {/* Применяем стили к последнему слову */}
        </>
    );
  };
  return (
      <Container>
        <ContentWithPaddingXl>
          <HeaderContainer>
            <Heading>{heading}</Heading>
          </HeaderContainer>
          <PlansContainer>
            {plans.map((plan, index) => (
                <Plan key={index} featured={plan.featured}>
                  {/* Используем компонент img напрямую */}
                  <IconWrapper>
                    <img
                        src={plan.icon}
                        alt={plan.name}
                        style={{ display: "block", margin: "auto", width: "100px", height: "100px", marginTop: "20px" }}
                    />
                  </IconWrapper>
                  {!plan.featured && <div className="planHighlight" css={highlightGradientsCss} />}
                  <PlanHeader>
               <span className="name">
                  {/* Применяем функцию для добавления цвета к последнему слову */}
                 {addColorToLastWord(plan.name, "#0ABD19")}
                </span>

                  </PlanHeader>
                  <PlanFeatures>
                    <span className="feature mainFeature">{plan.mainFeature}</span>
                  </PlanFeatures>
                </Plan>
            ))}
            <DecoratorBlob/>
          </PlansContainer>
        </ContentWithPaddingXl>
      </Container>
  );
};

