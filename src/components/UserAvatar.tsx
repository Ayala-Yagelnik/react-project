import { Avatar, Box, Typography } from "@mui/material"
import { useContext } from "react"
import { UserContext } from "./userReducer"
import Update from "./Update"






function stringToColor(string: string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  function stringAvatar(name: string) {
    // return {
    //   sx: {
    //     bgcolor: stringToColor(name),
    //   },
    //   children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    // };

    console.log("name");
    console.log(name);

    let x;
    // if (name == 'undefined'||name==' ')
    //     x = `${email.split(' ')[0][0]}`

    // else
        x = `${name.split(' ')[0][0]}${name.split(' ')[1] ? name.split(' ')[1][0] : ''}`
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: x
    };
  }
  






const UserAvatar = () => {

    const { user, userDispatch } = useContext(UserContext);


    // בדוק אם user קיים ואם name קיים
    const userName = user && user.name ? user.name : 'U'; // ברירת מחדל במקרה שאין שם






    return (
        <>

             {/* <Box display="flex" flexDirection="row" alignItems="center">
                <Avatar  {...stringAvatar(user.name?user.name:user.email)} 
                //  sx={{ bgcolor: "#ff0071" }}
                 >{user.name.charAt(0)}</Avatar>
                {user.name && <Typography margin={'10px'} variant="subtitle1" component="div">
                    {user.name}
                </Typography>}
                <Update></Update>
            </Box>  */}


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

