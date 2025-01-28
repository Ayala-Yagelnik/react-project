import { Avatar, Box, Typography } from "@mui/material"
import { useContext } from "react"
import { UserContext } from "./userReducer"
import Update from "./Update"

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
  
  function stringAvatar(name: string) {
    console.log("name");
    console.log(name);

    let x;
        x = `${name.split(' ')[0][0]}${name.split(' ')[1] ? name.split(' ')[1][0] : ''}`
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: x
    };
  }
  
const UserAvatar = () => {

    const { user } = useContext(UserContext);

    const userName = user && user.name ? user.name : 'U'; 
    return (
        <>
            <Box display="flex" flexDirection="row" alignItems="center">
            <Avatar 
            {...stringAvatar(user.email || ''+ user.name)}
            // sx={{ bgcolor: "#ff0071" }}
            >{userName.charAt(0)}</Avatar>
            {user.name && (
                <Typography margin={'10px'} variant="subtitle1" component="div">
                    {userName}
                </Typography>
            ) }
            <Update />
        </Box>
        </>
    )
}

export default UserAvatar

