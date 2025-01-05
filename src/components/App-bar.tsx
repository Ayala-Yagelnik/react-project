import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Login from './Login';



function ResponsiveAppBar() {


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
              <Login></Login>
              
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;