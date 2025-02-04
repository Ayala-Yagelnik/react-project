import { Box, Typography, IconButton } from '@mui/material';
import { Kitchen, Restaurant, Favorite } from '@mui/icons-material';
import Grid from '@mui/material/Grid2';

const Home = () => {
  return (
    <Box sx={{ padding: 4, textAlign: 'center' }}>
      <Typography variant="h2" gutterBottom>
        Welcome to Recipe Haven
      </Typography>
    
      <Typography variant="h5" sx={{ marginTop: 2 }}>
        Discover new recipes and share your favorites!
      </Typography>
      
      <Grid container spacing={2} sx={{ marginTop: 4 }}>
        <Grid size={{xs: 12, sm:4}}>
          <IconButton>
            <Kitchen fontSize="large" />
          </IconButton>
          <Typography variant="body1">Cooking Tips</Typography>
        </Grid>
        <Grid size={{xs: 12, sm:4}}>
          <IconButton>
            <Restaurant fontSize="large" />
          </IconButton>
          <Typography variant="body1">Recipe Ideas</Typography>
        </Grid>
        <Grid size={{xs: 12, sm:4}}>
          <IconButton>
            <Favorite fontSize="large" />
          </IconButton>
          <Typography variant="body1">Favorite Recipes</Typography>
        </Grid>
      </Grid>
        <img 
        src="./se.jpg" 
        alt="Delicious Food" 
        style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
      />
    </Box>
  );
};

export default Home;
