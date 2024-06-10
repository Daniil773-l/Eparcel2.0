import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import tw from "twin.macro";

const CalculatorContainer = styled.div`
    ${tw`max-w-md mx-auto p-8 bg-white rounded-lg shadow-md`}
`;

const Input = styled.input`
    ${tw`w-full p-2 border border-gray-300 rounded mt-4`}
`;

const Button = styled.button`
    ${tw`w-full p-2 mt-4 bg-green-500 text-white rounded`}
    text-decoration: none;
    border: none;
    background-color: #0ABD19;
   
`;

const Result = styled.div`
    ${tw`mt-4 p-4 bg-gray-100 rounded`}
`;

const CurrencyCalculator = () => {
    const [cost, setCost] = useState("");
    const [weight, setWeight] = useState("");
    const [exchangeRate, setExchangeRate] = useState(null);
    const [totalCost, setTotalCost] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchExchangeRate = async () => {
            try {
                const response = await axios.get("https://www.cbr-xml-daily.ru/daily_json.js");
                setExchangeRate(response.data.Valute.USD.Value);
            } catch (error) {
                setError("Не удалось получить курс валют");
            }
        };
        fetchExchangeRate();
    }, []);

    const calculateTotalCost = (event) => {
        event.preventDefault();
        if (!cost || !weight) {
            alert("Пожалуйста, заполните все поля.");
            return;
        }

        const costNum = parseFloat(cost);
        const weightNum = parseFloat(weight);

        const deliveryCost = 15 / 100 * costNum + 18 * weightNum;
        const total = deliveryCost * exchangeRate;

        setTotalCost(total.toFixed(2));
    };

    return (
        <CalculatorContainer>
            <form onSubmit={calculateTotalCost}>
                <Input
                    type="number"
                    placeholder="Введите стоимость товара ($)"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                />
                <Input
                    type="number"
                    placeholder="Введите вес товара (кг)"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
                <Button type="submit">Рассчитать стоимость</Button>
            </form>
            {totalCost && (
                <Result>
                    <p>Приблизительная стоимость доставки: {totalCost} руб.</p>
                    <p>Текущий курс ЦБ: {exchangeRate} руб. за 1 доллар</p>
                </Result>
            )}
            {error && <p>{error}</p>}
        </CalculatorContainer>
    );
};

export default CurrencyCalculator;
