import { Avatar, Box, Typography } from "@mui/material"
import { useContext } from "react"
import { UserContext } from "./userReducer"
import Update from "./Update"

const UserAvatar = () => {

    const userContext = useContext(UserContext)
    const user = userContext.user;


    return (
        <>
        <Box display="flex" flexDirection="row" alignItems="center">
            <Avatar sx={{ bgcolor: "#ff0071" }}>{user.name.charAt(0)}</Avatar>
            {user.name != '' ? <Typography margin={'10px'} variant="subtitle1" component="div">
                {user.name}
            </Typography> : null}
            <Update></Update> 
            </Box>
        </>
    )
}

export default UserAvatar

