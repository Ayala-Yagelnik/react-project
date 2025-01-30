import axios from "axios";
import { Box, Button, Typography, Modal, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { FormEvent, useContext, useEffect, useRef, useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Close } from '@mui/icons-material';
import { UserContext } from "./userReducer";
import { popupStyle } from "../styles/popup";

const Login = ({ open1, onClose, actionType, onLogin }: { open1: boolean, onClose: () => void, actionType: String, onLogin: () => void }) => {
  const { userDispatch } = useContext(UserContext);
  const [open, setOpen] = useState(open1), emailRef = useRef<HTMLInputElement>(null), passwordRef = useRef<HTMLInputElement>(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => setOpen(open1), [open1]);

  const handleClose = () => { setOpen(false); onClose(); };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(`http://localhost:3000/api/user/${actionType}`, {
        password: passwordRef.current?.value || "", email: emailRef.current?.value || "",
      });
      userDispatch({
        type: actionType === 'login' ? "UPDATE_USER" : "CREATE_USER",
        data: {
          id: actionType === 'login' ? res.data.user.id : res.data.userId,
          password: passwordRef.current?.value || "", email: emailRef.current?.value || "",
          firstName: actionType === 'login' ? res.data.user.firstName || "" : "",
          lastName: actionType === 'login' ? res.data.user.lastName || "" : "",
          address: actionType === 'login' ? res.data.user.address || "" : "",
          phone: actionType === 'login' ? res.data.user.phone || "" : "",
        }
      });
      onLogin(); handleClose();
    } catch (error: any) {
      if (error.status === 422 && actionType === 'register') alert('user already signed up');
      if (error.status === 401 && actionType === 'login') alert('user is not registered');
    }
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={popupStyle}>
        <IconButton onClick={handleClose} sx={{ position: 'absolute', right: 16, top: 16, bgcolor: 'red', color: 'white', '&:hover': { bgcolor: 'darkred' } }}>
          <Close />
        </IconButton>
        <Typography id="modal-modal-description" sx={{ mt: 2 }} component={'span'} variant={'body2'}>
          <Typography variant="h4" gutterBottom>Login</Typography>
          <form onSubmit={handleSubmit}>
            <TextField required inputRef={emailRef} name="email" label="Email" fullWidth margin="normal" />
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password" type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                inputRef={passwordRef} name="password" label="Password"
              />
            </FormControl>
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Login</Button>
          </form>
        </Typography>
      </Box>
    </Modal>
  );
}

export default Login;
