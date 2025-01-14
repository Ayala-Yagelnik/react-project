import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useReducer, useState } from 'react';
import { Link } from 'react-router';
import { Box, Tab } from '@mui/material';
import UserAvatar from './UserAvatar';
import userReducer, { UserContext } from './userReducer';
import Login from './Login';


const Nav = () => {
  const [user, userDispatch] = useReducer(userReducer, { id: 0, address: '', email: '', name: '', password: '', phone: '' })
  const [login, setLogin] = useState(false);
  const [signin, setSignin] = useState(false);
  const [signup, setSignup] = useState(false);

  return (
    <>
      <UserContext.Provider value={{ user, userDispatch }}>

        <AppBar position="static">
          <Toolbar style={{ justifyContent: 'flex-end' }}>
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'row' }}>
              {!login
                && (<Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => { setSignup(true) }}>Sign up</Button>)
              }
              {!login
                && (<Button sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => { setSignin(true) }}>Sign in</Button>
                )}
              {login
                && <UserAvatar></UserAvatar>
              }
            </Box>
            <Tab component={Link} to="/" label="Home" />
            <Tab component={Link} to="/about" label="About" />
          </Toolbar>
        </AppBar>
        {<Login
          open1={signin || signup}
          onClose={() => {
            setSignin(false)
            setSignup(false)
          }}
          actionType={signin ? 'login' : 'register'}
          onLogin={() => setLogin(true)}></Login>}
      </UserContext.Provider>

    </>
  );
}
export default Nav;