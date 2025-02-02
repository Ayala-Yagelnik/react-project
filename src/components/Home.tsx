
import { CottageOutlined } from '@mui/icons-material';
import { Skeleton } from '@mui/material';
import { pink } from '@mui/material/colors';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';

import { PageContainer } from '@toolpad/core/PageContainer';



const Home = () => {
    return (<>
        <Stack
            direction="column"
            spacing={2}
            sx={{
                justifyContent: "center",
                alignItems: "center",
                padding: "50px"
            }}>
            <h1>Home </h1>
            <Divider>
                <CottageOutlined sx={{ fontSize: 40, color: pink[500] }} />
            </Divider>
            <h3>hello to our site!!</h3>
        </Stack>
        <PageContainer sx={{width:"100%"}}>
            <Grid container spacing={1}>
                <Grid size={5} />
                <Grid size={12}>
                    <Skeleton height={14} />
                </Grid>
                <Grid size={12}>
                    <Skeleton height={14} />
                </Grid>
                <Grid size={4}>
                    <Skeleton height={100} />
                </Grid>
                <Grid size={8}>
                    <Skeleton height={100} />
                </Grid>

                <Grid size={12}>
                    <Skeleton height={150} />
                </Grid>
                <Grid size={12}>
                    <Skeleton height={14} />
                </Grid>

                <Grid size={3}>
                    <Skeleton height={100} />
                </Grid>
                <Grid size={3}>
                    <Skeleton height={100} />
                </Grid>
                <Grid size={3}>
                    <Skeleton height={100} />
                </Grid>
                <Grid size={3}>
                    <Skeleton height={100} />
                </Grid>
            </Grid>
        </PageContainer>
    </>)
}
export default Home