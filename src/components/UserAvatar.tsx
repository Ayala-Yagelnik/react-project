import { Avatar, Box, Typography } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "./userReducer";
import Update from "./Update";
import PersonIcon from '@mui/icons-material/Person'; 

function stringAvatar(firstName: string, lastName: string) {
    const initials = `${firstName[0]}${lastName ? lastName[0] : ''}`.toUpperCase(); 
    return {
        sx: {
            bgcolor: '#6891d7', 
        },
        children: initials,
    };
}

const UserAvatar = () => {
    const { user } = useContext(UserContext);

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