import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import iconBalance from "images/icon/BalanceCard.svg";

const Container = styled.div`
    ${tw`bg-white shadow-lg rounded-lg p-6 relative`}
    width: calc(100% - 40px);
    min-height: 320px;
    margin-bottom: 16px; /* Adding margin-bottom to match other cards */
`;

const GreenStrip = styled.div`
    ${tw`absolute top-0 left-0 w-full h-16 bg-green-100 rounded-t-lg`}
`;

const CircleIcon = styled.div`
    ${tw`w-16 h-16 bg-white rounded-full flex items-center justify-center absolute shadow-lg`}
    top: 8px;
    left: 16px;
`;

const CardHeader = styled.div`
    ${tw`flex flex-col items-center mb-4 relative`}
    margin-top: 32px;
`;

const BalanceText = styled.div`
    ${tw`text-green-600 text-lg font-bold mt-4`}
`;

const CardContent = styled.div`
    ${tw`flex flex-col items-center`}
`;

const InputContainer = styled.div`
    ${tw`w-full flex items-center mt-4 mb-4`}
`;

const InputField = styled.input`
    ${tw`w-2/3 py-2 px-4 border rounded-l-lg focus:outline-none`}
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CurrencyField = styled.div`
    ${tw`w-1/3 py-2 px-4 bg-gray-100 border border-l-0 rounded-r-lg text-center text-gray-500`}
`;

const Button = styled.button`
    ${tw`bg-green-500 text-white font-bold py-2 px-6 rounded-lg mt-4`}
    &:hover, &:focus {
        ${tw`bg-green-600`}
        transform: scale(1.05);
    }
`;

const Description = styled.div`
    ${tw`text-gray-400 text-sm mt-4 text-center`}
`;

const BalanceCard = () => {
    const [amount, setAmount] = useState("");

    const handleInputChange = (e) => {
        setAmount(e.target.value);
    };

    return (
        <Container>
            <GreenStrip />
            <CircleIcon>
                <img src={iconBalance} alt="Balance Icon" />
            </CircleIcon>
            <CardHeader>
                <BalanceText>Ваш баланс - 0,00 ₽</BalanceText>
            </CardHeader>
            <CardContent>
                <div>Укажите сумму</div>
                <InputContainer>
                    <InputField
                        type="text"
                        value={amount}
                        onChange={handleInputChange}
                        placeholder="0,00"
                    />
                    <CurrencyField>₽</CurrencyField>
                </InputContainer>
                <Button>Пополнить баланс</Button>
                <Description>
                    Для оперативной отправки посылок не забывайте своевременно пополнять баланс вашего счета.<br />
                    На баланс будет зачислена та сумма, которую вы укажете в поле «Пополнить баланс на сумму».<br />
                    Комиссия платежной системы 0%.
                </Description>
            </CardContent>
        </Container>
    );
};

export default BalanceCard;
