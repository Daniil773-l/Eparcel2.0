import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const CardContainer = styled.div`
    ${tw`rounded-lg w-full max-w-2xl mx-auto my-8`}
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: 2px solid #979FFF; /* Change the border color to match the card's theme */
    min-height: 300px;
`;

const CardHeaderContainer = styled.div`
    ${tw`flex`}
`;

const CardHeaderLink = styled.a`
    ${tw`text-purple-600 text-lg font-bold relative flex-shrink-0 h-auto py-8 no-underline`}
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    text-align: center;
    padding-right: 20px;
    border-left: 2px solid #979FFF;
    padding-left: 20px;
    cursor: pointer;

    &:after {
        content: "";
        ${tw`absolute right-0 top-0 bottom-0 border-r border-purple-500`}
    }

    &:hover, &:focus {
        color: #0ABD19;
        text-decoration: none;
    }
`;

const CardContentContainer = styled.div`
    ${tw`flex flex-col p-8 w-full`}
    width: 70%;
`;

const CardContent = styled.div`
    ${tw`text-gray-700 text-base mb-6`}
`;

const CardStats = styled.div`
    ${tw`flex flex-col text-gray-400 text-base `}
`;

const Stat = styled.div`
    ${tw`mb-2 flex justify-between `}
`;

const StatLabel = styled.div`
    ${tw`flex items-center`}
`;

const StatValue = styled.div`
    ${tw`ml-2 text-right`}
    min-width: 60px; /* Ensure the stat values align properly */
`;

const CardActions = styled.div`
    ${tw`mt-auto w-full`}
`;

const Button = styled.button`
    ${tw`flex items-center justify-center py-4 bg-purple-500 text-white rounded-lg font-bold transition duration-300 ease-in-out hover:bg-purple-600 focus:outline-none mt-10`}
    svg {
        ${tw`mr-2`}
    }
    border: none;
    width: 60%; /* Match the width of the button in the upper card */
`;

const PlusIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C12.5523 2 13 2.44772 13 3V11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H13V21C13 21.5523 12.5523 22 12 22C11.4477 22 11 21.5523 11 21V13H3C2.44772 13 2 12.5523 2 12C2 11.4477 2.44772 11 3 11H11V3C11 2.44772 11.4477 2 12 2Z"
            fill="currentColor"
        />
    </svg>
);
const Navlink=styled.a`
    text-decoration: none;
    
    ${tw`flex items-center justify-center   text-white font-bold   `

}
`
const RedemptionCard = () => {
    return (
        <CardContainer>
            <CardHeaderContainer>
                <CardHeaderLink href="/desired-page">Выкуп товаров</CardHeaderLink> {/* Change the href to your desired page */}
                <CardContentContainer>
                    <CardContent>
                        Ожидаемые товары для выкупа:
                    </CardContent>
                    <CardStats>
                        <Stat>
                            <StatLabel>
                                <div>Заявки:</div>
                            </StatLabel>
                            <StatValue>0 шт.</StatValue>
                        </Stat>
                        <Stat>
                            <StatLabel>
                                <div>Ждут подтверждения:</div>
                            </StatLabel>
                            <StatValue>0 шт.</StatValue>
                        </Stat>
                        <Stat>
                            <StatLabel>
                                <div>Отказано:</div>
                            </StatLabel>
                            <StatValue>0 шт.</StatValue>
                        </Stat>
                        <Stat>
                            <StatLabel>
                                <div>Ожидает оплаты:</div>
                            </StatLabel>
                            <StatValue>0 шт.</StatValue>
                        </Stat>
                        <Stat>
                            <StatLabel>
                                <div>Выкуплено:</div>
                            </StatLabel>
                            <StatValue>0 шт.</StatValue>
                        </Stat>
                        <Stat>
                            <StatLabel>
                                <div>На складе:</div>
                            </StatLabel>
                            <StatValue>0 шт.</StatValue>
                        </Stat>
                    </CardStats>
                    <CardActions>
                        <Button>
                            <Navlink href="/Purchaseofgoods">
                            <PlusIcon />
                            Добавить заявку на выкуп
                            </Navlink>
                        </Button>
                    </CardActions>
                </CardContentContainer>
            </CardHeaderContainer>
        </CardContainer>
    );
};

export default RedemptionCard;
