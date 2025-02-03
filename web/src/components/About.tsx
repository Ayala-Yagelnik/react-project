import {  Typography, Container,  Icon } from '@mui/material';
import { Info, Group, Favorite } from '@mui/icons-material';
import Grid from '@mui/material/Grid2';

const About = () => {
  return (
    <Container sx={{ padding: 4 }}>
      <Typography variant="h2" gutterBottom>
        About Us
      </Typography>
      <Grid container spacing={4}>
        <Grid size={{xs: 12, sm:4}} sx={{ textAlign: 'center' }}>
          <Icon sx={{ fontSize: 50, color: '#e91e63' }}>
            <Info />
          </Icon>
          <Typography variant="h6" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1">
            To inspire home cooks to explore new cuisines and create memorable meals.
          </Typography>
        </Grid>
        <Grid size={{xs: 12, sm:4}} sx={{ textAlign: 'center' }}>
          <Icon sx={{ fontSize: 50, color: '#e91e63' }}>
            <Group />
          </Icon>
          <Typography variant="h6" gutterBottom>
            Join Our Community
          </Typography>
          <Typography variant="body1">
            Share favorite recipes, discover new ideas, and enhance your culinary skills.
          </Typography>
        </Grid>
        <Grid size={{xs: 12, sm:4}} sx={{ textAlign: 'center' }}>
          <Icon sx={{ fontSize: 50, color: '#e91e63' }}>
            <Favorite />
          </Icon>
          <Typography variant="h6" gutterBottom>
            Love for Cooking
          </Typography>
          <Typography variant="body1">
            We are passionate about food and dedicated to bringing joy through cooking.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;

