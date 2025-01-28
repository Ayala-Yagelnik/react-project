import InfoOutlined from "@mui/icons-material/InfoOutlined"
import pink from "@mui/material/colors/pink"
import Divider from "@mui/material/Divider"
import Stack from "@mui/material/Stack"

const About = () => {
    return (<>
      <Stack
            direction="column"
            spacing={2}
            sx={{
                justifyContent: "center",
                alignItems: "center",
                padding: "50px"
            }}>
            <h1>About </h1>
            <Divider>   
                         <InfoOutlined sx={{ fontSize: 40, color: pink[500] }} />
            </Divider>
            <h3>the site created by Ayali yagelnik!!</h3>
        </Stack>
    </>)
}

export default About