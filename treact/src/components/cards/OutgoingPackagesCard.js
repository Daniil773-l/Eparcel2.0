import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const CardContainer = styled.div`
    ${tw`rounded-lg w-full max-w-2xl mx-auto my-8`}
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: 2px solid #45A1E3;
    min-height: 300px;
`;

const CardHeaderContainer = styled.div`
    ${tw`flex`}
`;

const CardHeader = styled.div`
    ${tw`text-blue-600 text-lg font-bold relative flex-shrink-0 h-auto py-8`}
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    text-align: center;
    padding-right: 20px;
    border-left: 2px solid #45A1E3;
    padding-left: 20px;
    &:after {
        content: "";
        ${tw`absolute right-0 top-0 bottom-0 border-r border-blue-500`}
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
    ${tw`ml-1 flex-grow text-right mt-1`}
`;

const OutgoingPackagesCard = () => {
    return (
        <CardContainer>
            <CardHeaderContainer>
                <CardHeader>Исходящие посылки</CardHeader>
                <CardContentContainer>
                    <CardContent>
                        Отправленные и доставленные посылки:
                    </CardContent>
                    <CardStats>
                        <Stat>
                            <StatLabel>
                                <div>На складе:</div>
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
                                <div>Ожидает отправки:</div>
                            </StatLabel>
                            <StatValue>0 шт.</StatValue>
                        </Stat>
                        <Stat>
                            <StatLabel>
                                <div>Прибытие в Россию:</div>
                            </StatLabel>
                            <StatValue>0 шт.</StatValue>
                        </Stat>
                        <Stat>
                            <StatLabel>
                                <div>Ожидает в пункте выдачи:</div>
                            </StatLabel>
                            <StatValue>0 шт.</StatValue>
                        </Stat>
                        <Stat>
                            <StatLabel>
                                <div>Ожидается доставка:</div>
                            </StatLabel>
                            <StatValue>0 шт.</StatValue>
                        </Stat>
                        <Stat>
                            <StatLabel>
                                <div>Доставлено:</div>
                            </StatLabel>
                            <StatValue>0 шт.</StatValue>
                        </Stat>
                    </CardStats>
                </CardContentContainer>
            </CardHeaderContainer>
        </CardContainer>
    );
};

export default OutgoingPackagesCard;
