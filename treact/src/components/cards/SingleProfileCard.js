import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import icon1 from "images/icon/MyPackages.svg";
import icon2 from "images/icon/Receivers.svg";
import icon3 from "images/icon/ProfileIconCard.svg";
import icon4 from "images/icon/ChangeContactDetailsIcon.svg";
import icon5 from "images/icon/ChangePasswordIcon.svg";

const Container = tw.div``;

const Card = styled.div`
    ${tw`bg-white shadow-lg rounded-lg p-6 relative`}
    width: calc(100% - 40px);
    min-height: 320px;
    margin-bottom: 16px; /* Adding margin-bottom to match other cards */
`;

const GreenStrip = styled.div`
    ${tw`absolute top-0 left-0 w-full h-16 bg-green-100 rounded-t-lg`}
`;

const Avatar = styled.div`
    ${tw`w-20 h-20 bg-white rounded-full flex items-center justify-center text-green-500 text-xl font-bold absolute shadow-lg`}
    top: 13px;
    left: 36px;
`;

const CardTitle = styled.div`
    ${tw`ml-24 relative`}
    top: 20px;
`;

const IDText = styled.div`
    ${tw`font-semibold ml-2`}
    color: #999999;
    font-size: 12px;
`;

const Name = styled.div`
    ${tw`text-lg mt-2 ml-2`}
    color: #2D2D2D;
`;

const Balance = styled.div`
    ${tw`text-green-500 font-bold text-sm absolute`}
    right: 16px;
    top: 34px;
`;

const List = styled.ul`
    ${tw`space-y-2 mt-16`}
`;

const ListItem = styled.li`
    ${tw`flex items-center text-gray-700`}
`;

const Icon = tw.div`mr-2 text-green-500`;

const Divider = styled.div`
    ${tw`w-full h-px bg-gray-200`}
    position: absolute;
    width: 93%;
    bottom: 60px;
`;

const LogoutText = styled.div`
    ${tw`text-gray-400`}
    position: absolute;
    bottom: 20px;
    left: 26px;
`;

const ProfileCard = () => {
    return (
        <Card>
            <GreenStrip />
            <Avatar>ZY</Avatar>
            <CardTitle>
                <IDText>Ваш ID: #EPL-1021</IDText>
                <Name>Zhaksylyk Yernur</Name>
            </CardTitle>
            <Balance>Баланс: 0,00 ₽</Balance>
            <List>
                <ListItem>
                    <Icon><img src={icon3} alt="Profile" /></Icon> Профиль
                </ListItem>
                <ListItem>
                    <Icon><img src={icon2} alt="Receivers" /></Icon> Получатели
                </ListItem>
                <ListItem>
                    <Icon><img src={icon4} alt="Change Contact Details" /></Icon> Изменить контактные данные
                </ListItem>
                <ListItem>
                    <Icon><img src={icon5} alt="Change Password" /></Icon> Сменить пароль
                </ListItem>
            </List>
            <Divider />
            <LogoutText>Выйти из аккаунта</LogoutText>
        </Card>
    );
};

export default ProfileCard;
