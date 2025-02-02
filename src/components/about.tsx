import { InfoRounded } from "@mui/icons-material"
import { Container, Box, Typography, Paper } from "@mui/material"
import pink from "@mui/material/colors/pink"
import Divider from "@mui/material/Divider"

const About = () => {
    return (<>
        <Container maxWidth="lg" sx={{ padding: '50px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                <Typography variant="h3" component="h1" align="center" gutterBottom>
                    ABOUT
                    <Divider>
                        <InfoRounded sx={{ fontSize: 60, color: pink[500] ,mt:"20px"}} />
                    </Divider>
                </Typography>
            </Box>
            <Paper sx={{ padding: '20px'}}>
                <Typography variant="body1" >
                    Welcome to <strong>CookTogether</strong>! Here, we believe that cooking is all about sharing and inspiration.
                    Everyone can take part in our cooking community by sharing their favorite recipes.
                </Typography>
                <Typography variant="body1" >
                    This website was created with the goal of building a space where everyone can discover new ideas and try out
                    diverse recipes, while also sharing their own personal recipes with the world. Every recipe here is carefully
                    chosen, with tips, photos, and clear instructions to make it easy for anyone to prepare, and ultimately feel
                    part of a larger community of food lovers.
                </Typography>
                <Typography variant="body1" >
                    Whether you're a cooking enthusiast or just love trying new things – you're in the right place! Every recipe is
                    an opportunity to learn, get creative, and connect with others through food.
                </Typography>
                <Typography variant="body1" >
                    Join us, share your recipes, and become a part of our cooking community!
                </Typography>
                <Typography variant="body2" color="text.secondary" align="right">
                    Wishing you success and delicious meals! <br />
                    
                </Typography>
            </Paper>
        </Container>
    </>)
}

export default About