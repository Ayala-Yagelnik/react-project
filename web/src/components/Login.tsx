import axios from "axios";
import { Box, Button, Typography, Modal, IconButton } from '@mui/material';
import { FormEvent, useContext, useEffect, useRef, useState } from 'react';
import { Close } from '@mui/icons-material';
import { UserContext } from "./userReducer";
import { popupStyle } from "../styles/popup";
import TextFieldWithRef from './TextFieldWithRef';  
import PasswordField from './PasswordField';  

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const validateEmail = (email: string) => emailPattern.test(email);

const validatePassword = (password: string) => passwordPattern.test(password);

const Login = ({ open1, onClose, actionType, onLogin }: { open1: boolean, onClose: () => void, actionType: string, onLogin: () => void }) => {
  const { userDispatch } = useContext(UserContext);
  const [open, setOpen] = useState(open1), emailRef = useRef<HTMLInputElement>(null), passwordRef = useRef<HTMLInputElement>(null);
  
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  useEffect(() => setOpen(open1), [open1]);

  const handleClose = () => { setOpen(false); onClose(); 
    if (emailRef.current) emailRef.current.value = ""; 
    if (passwordRef.current) passwordRef.current.value = "";
    setEmailError(null); 
    setPasswordError(null); 
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    setEmailError(null);
    setPasswordError(null);
    let isValid = true;
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email.");
      isValid = false;
    }
    if (!validatePassword(password)) {
      setPasswordError("Password must be at least 8 characters long, contain both uppercase and lowercase letters, a number, and a special character.");
      isValid = false;
    }
    if (!isValid) return;
    try {
      const res = await axios.post(`http://localhost:3000/api/user/${actionType}`, {
        password: password, email: email,
      });
      userDispatch({
        type: actionType === 'login' ? "UPDATE_USER" : "CREATE_USER",
        data: {
          id: actionType === 'login' ? res.data.user.id : res.data.userId,
          password: password, email: email,
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
      if (error.status === 400) alert('wrong !!! try later');
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={popupStyle}>
        <IconButton onClick={handleClose} sx={{ position: 'absolute', right: 16, top: 16, bgcolor: 'red', color: 'white', '&:hover': { bgcolor: 'darkred' } }}>
          <Close />
        </IconButton>
        <Typography id="modal-modal-description" sx={{ mt: 2 }} component={'span'} variant={'body2'}>
          <Typography variant="h4" gutterBottom>{actionType === 'login' ? "Login" : "Register"}</Typography>
          <form onSubmit={handleSubmit}>
            <TextFieldWithRef
              label="Email"
              name="email"
              defaultValue=""
              inputRef={emailRef}
              required={true}
              error={!!emailError}
              helperText={emailError||undefined} 
            />
            <PasswordField
              label="Password"
              inputRef={passwordRef}
              error={!!passwordError}
              helperText={passwordError||undefined}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
              {actionType === 'login' ? "Login" : "Register"}
            </Button>
          </form>
        </Typography>
      </Box>
    </Modal>
  );
};

export default Login;