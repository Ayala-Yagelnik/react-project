import { Box, Typography, Grid, IconButton } from '@mui/material';
import { Kitchen, Restaurant, Favorite } from '@mui/icons-material';

const Home = () => {
  return (
    <Box sx={{ padding: 4, textAlign: 'center' }}>
      <Typography variant="h2" gutterBottom>
        Welcome to Recipe Haven
      </Typography>
      <img 
        src="./se.jpg" 
        alt="Delicious Food" 
        style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
      />
      <Typography variant="h5" sx={{ marginTop: 2 }}>
        Discover new recipes and share your favorites!
      </Typography>
      
      <Grid container spacing={2} sx={{ marginTop: 4 }}>
        <Grid item xs={12} sm={4}>
          <IconButton>
            <Kitchen fontSize="large" />
          </IconButton>
          <Typography variant="body1">Cooking Tips</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <IconButton>
            <Restaurant fontSize="large" />
          </IconButton>
          <Typography variant="body1">Recipe Ideas</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <IconButton>
            <Favorite fontSize="large" />
          </IconButton>
          <Typography variant="body1">Favorite Recipes</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;

// import { CottageOutlined } from '@mui/icons-material';
// import { Skeleton } from '@mui/material';
// import { pink } from '@mui/material/colors';
// import Divider from '@mui/material/Divider';
// import Grid from '@mui/material/Grid2';
// import Stack from '@mui/material/Stack';

// import { PageContainer } from '@toolpad/core/PageContainer';



// const Home = () => {
//     return (<>
//         <Stack
//             direction="column"
//             spacing={2}
//             sx={{
//                 justifyContent: "center",
//                 alignItems: "center",
//                 padding: "50px"
//             }}>
//             <h1>Home </h1>
//             <Divider>
//                 <CottageOutlined sx={{ fontSize: 40, color: pink[500] }} />
//             </Divider>
//             <h3>hello to our site!!</h3>
//         </Stack>
//         <PageContainer sx={{width:"100%"}}>
//             <Grid container spacing={1}>
//                 <Grid size={5} />
//                 <Grid size={12}>
//                     <Skeleton height={14} />
//                 </Grid>
//                 <Grid size={12}>
//                     <Skeleton height={14} />
//                 </Grid>
//                 <Grid size={4}>
//                     <Skeleton height={100} />
//                 </Grid>
//                 <Grid size={8}>
//                     <Skeleton height={100} />
//                 </Grid>

//                 <Grid size={12}>
//                     <Skeleton height={150} />
//                 </Grid>
//                 <Grid size={12}>
//                     <Skeleton height={14} />
//                 </Grid>

//                 <Grid size={3}>
//                     <Skeleton height={100} />
//                 </Grid>
//                 <Grid size={3}>
//                     <Skeleton height={100} />
//                 </Grid>
//                 <Grid size={3}>
//                     <Skeleton height={100} />
//                 </Grid>
//                 <Grid size={3}>
//                     <Skeleton height={100} />
//                 </Grid>
//             </Grid>
//         </PageContainer>
//     </>)
// }
// export default Home