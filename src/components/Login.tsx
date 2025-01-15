import axios from "axios"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { FormEvent, useContext, useEffect, useReducer, useRef, useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Close } from '@mui/icons-material';
import { userCotext } from "./Nav";
import { UserContext } from "./userReducer";


const Login = ({ open1, onClose, actionType, onLogin }: { open1: boolean, onClose: () => void, actionType: String, onLogin: () => void }) => {

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
  const { user, userDispatch } = useContext(UserContext);
  // const [user, userDispatch] = useContext(userCotext);
  const [open, setOpen] = useState(open1)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setOpen(open1);
  }, [open1]);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleClose = () => {
    setOpen(false)
    onClose()
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const res = await axios.post(`http://localhost:3000/api/user/${actionType}`,
        {
          password: passwordRef.current?.value || "",
          email: emailRef.current?.value || "",
        })
      if (actionType == 'login')
        userDispatch({
          type: "UPDATE_USER",
          data: {
            id: res.data.user.id,
            password: passwordRef.current?.value || "",
            email: emailRef.current?.value || "",
            name: res.data.user.name || "",
            address: res.data.user.address || "",
            phone: res.data.user.phone || "",
          }
        });
      else if (actionType == 'register')
        userDispatch({
          type: "CREATE_USER",
          data: {
            id: res.data.userId,
            password: passwordRef.current?.value || "",
            email: emailRef.current?.value || "",
            name: "",
            address: "",
            phone: "",
          }
        });
      onLogin();
      handleClose();
    } catch (error: any) {
      if (error.status === 422 && actionType == 'register')
        alert('user already sign up');
      if (error.status == 401 && actionType == 'login')
        alert('user is not register');
    }

  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 16,
              top: 16,
              bgcolor: 'red', // רקע אדום
              color: 'white', // צבע טקסט לבן
              '&:hover': {
                bgcolor: 'darkred', // צבע רקע כהה יותר כשמעבירים מעל
              },
            }}
          >
            <Close />
          </IconButton>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} component={'span'} variant={'body2'}>
            <Typography variant="h4" gutterBottom >
              Login
            </Typography>
            <form onSubmit={handleSubmit}>
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
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  inputRef={passwordRef}
                  name="password"
                  label="Password"
                />
              </FormControl>
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Login
              </Button>
            </form>

          </Typography>
        </Box>
      </Modal>
    </>
  );

}
export default Login