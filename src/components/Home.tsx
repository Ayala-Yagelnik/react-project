
import { CottageOutlined } from '@mui/icons-material';
import { pink } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

const Home = () => {
 
    return (<>
        <Stack
            direction="column"
            spacing={2}
            sx={{
                justifyContent: "center",
                alignItems: "center",
                padding: "50px"
            }}
        >

            <h1>Home </h1>
            <Divider>   
                         <CottageOutlined sx={{ fontSize: 40, color: pink[500] }} />
            </Divider>
            <h3>hello to our site!!</h3>
        </Stack>
    </>)
}

export default Home