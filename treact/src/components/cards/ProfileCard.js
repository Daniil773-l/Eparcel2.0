import React from 'react';
import tw, { styled } from 'twin.macro';
import { Card, CardContent, Typography, Avatar, List, ListItem, ListItemIcon, ListItemText, Button, Divider } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Container = tw.div`relative flex flex-col items-center justify-start min-h-screen bg-white p-8 pt-24`; // Add this style if needed
const ContentContainer = tw.div`flex flex-col gap-y-8 w-full max-w-6xl mx-auto`; // Add this style if needed

const ProfileCardContainer = styled(Card)`
    ${tw`max-w-xs mx-auto border-none rounded-lg shadow-lg`}
`;

const ProfileHeader = styled(CardContent)`
    ${tw`bg-blue-100 flex items-center justify-between p-4`}
`;

const ProfileAvatar = styled(Avatar)`
    ${tw`bg-green-500 w-10 h-10`}
`;

const ProfileDetails = styled.div`
    ${tw`ml-4`}
`;

const ProfileContent = styled(CardContent)`
    ${tw`p-4`}
`;

const ProfileActions = styled(List)`
    ${tw`p-0`}
`;

const ProfileActionButton = styled(Button)`
    ${tw`text-red-500 mt-4`}
`;

const ProfileCard = () => {
    return (
        <ProfileCardContainer>
            <ProfileHeader>
                <ProfileAvatar>ZY</ProfileAvatar>
                <ProfileDetails>
                    <Typography variant="body2">Ваш ID: #EPL-1021</Typography>
                    <Typography variant="body2">Баланс: 0.00 ₽</Typography>
                </ProfileDetails>
            </ProfileHeader>
            <ProfileContent>
                <Typography variant="h6" component="div">Zhaksylyyk Yernur</Typography>
                <ProfileActions>
                    <ListItem button>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Профиль" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <GroupIcon />
                        </ListItemIcon>
                        <ListItemText primary="Получатели" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <VpnKeyIcon />
                        </ListItemIcon>
                        <ListItemText primary="Сменить пароль" />
                    </ListItem>
                </ProfileActions>
                <Divider />
                <ProfileActionButton
                    variant="text"
                    startIcon={<ExitToAppIcon />}
                >
                    Выйти из аккаунта
                </ProfileActionButton>
            </ProfileContent>
        </ProfileCardContainer>
    );
};

export default ProfileCard;
