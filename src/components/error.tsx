import { Box, Typography } from "@mui/material"

const Error=()=>{
    const imageUrl = './4.jpg';
return(
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        // backgroundColor: '#f8d7da',
        color: 'red',
        // padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h5" component="div">
      The site is under construction. Please check back later
      </Typography>
      <Typography variant="body1" component="div" marginTop="10px">
        
      </Typography>
      <img src={imageUrl} alt="The site is under construction. Please check back later" style={{ height: '80vh' }} />
    </Box>
)
}
export default Error