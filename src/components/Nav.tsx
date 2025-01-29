import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { createContext, Dispatch, useReducer, useState } from 'react';
import { Link } from 'react-router';
import { Box, Tab } from '@mui/material';
import UserAvatar from './UserAvatar';
import userReducer, { Action, UserContext } from './userReducer';
import Login from './Login';
import { userType } from '../models/userType';
export const userCotext = createContext<[userType, Dispatch<Action>]>([{} as userType, () => { }]);

const initialState: userType = {
  address: '',
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  phone: '',
  id: 0
};

const Nav = () => {
  const [login, setLogin] = useState(false);
  const [signin, setSignin] = useState(false);
  const [signup, setSignup] = useState(false);
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <>
      <UserContext value={{ user: state, userDispatch: dispatch }}>
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
            <Tab component={Link} to="/recipes" label="Recipes" />
          </Toolbar>
        </AppBar>
        <Login
          open1={signin || signup}
          onClose={() => {
            setSignin(false)
            setSignup(false)
          }}
          actionType={signin ? 'login' : 'register'}
          onLogin={() => setLogin(true)}></Login>
      </UserContext>
    </>
  );
}
export default Nav;