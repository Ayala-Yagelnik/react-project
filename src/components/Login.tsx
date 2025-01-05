import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AppBar, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Toolbar } from '@mui/material';
import { FormEvent, useReducer, useRef, useState } from 'react';
import userReducer, { UserContext } from './userReducer';
import UserAvatar from './UserAvatar';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const Login = () => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [user, userDispatch] = useReducer(userReducer,{address:'',email:'',name:'',password:'',phone:''} )
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const addressRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)

  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {setOpen(false),setLogin(false)};

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    userDispatch({
      type: 'LOGIN_USER',
      data: {
        name: nameRef.current?.value || '',
        email: (emailRef.current?.value || ''),
        address: (addressRef.current?.value || ''),
        phone: (phoneRef.current?.value || ''),
        password: (passwordRef.current?.value || ''),
      }
    });
    handleClose();
  }
     const [showPassword, setShowPassword] = useState(false);
  
        const handleClickShowPassword = () => setShowPassword((show) => !show);
      
        const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
          event.preventDefault();
        };
      
        const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
          event.preventDefault();
        };
  return (
    <>
    

      <UserContext.Provider value={{ user:user, userDispatch:userDispatch }}>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
     {login?(<Button onClick={handleOpen}  sx={{ my: 2, color: 'white', display: 'block' }}>Login</Button>):null} 

     <UserAvatar></UserAvatar>
 
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-description" sx={{ mt: 2 }} component={'span'} variant={'body2'}>
              <Typography variant="h4" gutterBottom >
                Login
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  inputRef={nameRef}
                  name="name"
                  label="Name"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  required
                  inputRef={emailRef}
                  name="email"
                  label="Email"
                  fullWidth
                  margin="normal"
                />
             <FormControl fullWidth sx={{/* m: 1, width: '25ch'*/ }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                 {showPassword ? <Visibility /> :<VisibilityOff /> } 
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
                <TextField
                  inputRef={phoneRef}
                  name="phone"
                  label="Phone"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  inputRef={addressRef}
                  name="address"
                  label="Address"
                  fullWidth
                  margin="normal"
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Login
                </Button>
              </form>

            </Typography>
          </Box>
        </Modal>
        </Toolbar>
      </AppBar>
    </Box>
  
      </UserContext.Provider>
    </>
  );

}
export default Login