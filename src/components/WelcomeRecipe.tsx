import { Box, Typography } from '@mui/material';

const WelcomeComponent = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'end',
                padding: 2,
                backgroundImage: 'url(./de.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 2,
                boxShadow: 3,
                color: 'black', 
                textAlign: 'center',
            }}
        >
            <Typography variant="h4">
                Welcome to Your Recipe Book
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 1 }}>
                Discover a variety of delicious recipes tailored just for you.
            </Typography>
        </Box>
    );
};

export default WelcomeComponent;
