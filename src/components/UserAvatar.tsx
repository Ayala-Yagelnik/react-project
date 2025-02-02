import { Avatar, Box, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { UserContext } from "./userReducer";
import Update from "./Update";
import PersonIcon from '@mui/icons-material/Person'; 

function stringToColor(string: string) {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
}

function stringAvatar(firstName: string, lastName: string) {
    const initials = `${firstName[0]}${lastName ? lastName[0] : ''}`.toUpperCase(); 
    return {
        sx: {
            bgcolor: stringToColor(firstName + lastName), 
        },
        children: initials,
    };
}

const UserAvatar = () => {
    const { user } = useContext(UserContext);

    useEffect(() => {
        console.log(user.id); 
    }, [user]);

    const userName = user && user.firstName ? user.firstName : 'U';
    const lastName = user && user.lastName ? user.lastName : '';
    const displayAvatar = user && user.firstName && user.lastName;

    return (
        <>
            <Box display="flex" flexDirection="row" alignItems="center">
                {displayAvatar ? (
                    <Avatar
                        {...stringAvatar(user.firstName || 'U', user.lastName || '')}
                    />
                ) : (
                    <Avatar sx={{backgroundColor:"black"}}>
                    <PersonIcon sx={{ fontSize: 30, color: 'white' }} />
                    </Avatar>
                )}

                {user.firstName && (
                    <Typography margin={'10px'} variant="subtitle1" component="div">
                        {userName} {lastName}
                    </Typography>
                )}
                <Update />
            </Box>
        </>
    );
};

export default UserAvatar;