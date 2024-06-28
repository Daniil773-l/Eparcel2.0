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
    ${tw`w-20 h-20 bg-white rounded-full flex items-center justify-center absolute shadow-lg`}
    top: 14px; /* Centering the icon vertically in the green strip */
    left: 46px;
`;

const CardHeader = styled.div`
    ${tw`flex flex-col items-center mb-4 relative`}
    margin-top: 32px;
`;

const BalanceText = styled.div`
    ${tw`text-lg mt-4 `}
    color: #2D2D2D;
    padding-right: 30%;
    span {
        color: #0ABD19;
    }
`;

const CardContent = styled.div`
    ${tw`flex flex-col items-center`}
`;

const InputContainer = styled.div`
    ${tw`w-full flex items-center mt-4 mb-4`}
`;

const InputField = styled.div`
    ${tw`w-1/2 flex items-center py-1 px-4 border rounded-lg focus:outline-none bg-white`}
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: none;
`;

const Input = styled.input`
    ${tw`w-full py-2 px-4 border-none focus:outline-none `}
`;

const CurrencySymbol = styled.div`
    ${tw`text-gray-500`}
`;

const Button = styled.button`
    ${tw`bg-green-500 text-white font-bold py-3 px-8 rounded-lg ml-8 focus:outline-none transition duration-300`}
    border: none;
    background-color: #0ABD19;
    &:hover, &:focus {
        transform: scale(1.1);
    }
`;

const Description = styled.div`
    ${tw`text-gray-400 text-sm mt-4`}
    text-align: left;
    width: 100%;
    line-height: 1.5;
    margin-left: 1rem;
    margin-right: 1rem;
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
                <BalanceText>Ваш баланс - <span>0,00 ₽</span></BalanceText>
            </CardHeader>
            <CardContent>
                <div style={{ color: '#999999', alignSelf: 'flex-start' }}>Укажите сумму</div>
                <InputContainer>
                    <InputField>
                        <Input
                            type="text"
                            value={amount}
                            onChange={handleInputChange}
                        />
                        <CurrencySymbol>₽</CurrencySymbol>
                    </InputField>
                    <Button>Пополнить баланс</Button>
                </InputContainer>
                <Description>
                    Для оперативной отправки посылок не забывайте своевременно пополнять баланс вашего счета.<br /> <br/>
                    На баланс будет зачислена та сумма, которую вы укажете в поле «Пополнить баланс на сумму».<br /><br/>
                    Комиссия платежной системы 0%.
                </Description>
            </CardContent>
        </Container>
    );
};

export default BalanceCard;
