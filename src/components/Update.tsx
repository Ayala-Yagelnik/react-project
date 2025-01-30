import { Modal, Box, Typography, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Button } from "@mui/material";
import React, { useState, FormEvent, useRef, useContext, useEffect } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from "axios";
import { UserContext } from "./userReducer";
import { popupStyle } from "../styles/popup";

const Update = () => {

  const { user, userDispatch } = useContext(UserContext);
  const firstNameRef = useRef<HTMLInputElement>(null)
  const lastNameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const addressRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => { setOpen(false); }
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      const res = await axios.put('http://localhost:3000/api/user',
        {
          password: passwordRef.current?.value || user.password,
          firstName: firstNameRef.current?.value || user.firstName,
          lastName: lastNameRef.current?.value || user.lastName,
          email: emailRef.current?.value || user.email,
          address: addressRef.current?.value || user.address,
          phone: phoneRef.current?.value || user.phone,
        },
        { headers: { 'user-id': user.id + '' } }
      )
      userDispatch({
        type: 'UPDATE_USER',
        data:res.data
      });
      handleClose();
    } catch (e: any) {
      if (e.status === 404)
        alert('user not found');
    }
  }
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
 
  useEffect(() => {
    if (user) {
      if (firstNameRef.current) firstNameRef.current.value = user.firstName;
      if (lastNameRef.current) lastNameRef.current.value = user.lastName;
      if (emailRef.current) emailRef.current.value = user.email;
      if (phoneRef.current) phoneRef.current.value = user.phone;
      if (addressRef.current) addressRef.current.value = user.address;
      if (passwordRef.current) passwordRef.current.value = user.password; 
    }
  }, [user]);

  return (
    <>
      <Button variant="text" sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleOpen}>
        Update user
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={popupStyle}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} component={'span'} variant={'body2'}>
            <Typography variant="h4" gutterBottom >
              UPDATE
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                inputRef={firstNameRef}
                name="name"
                label="Name"
                fullWidth
                margin="normal"
                defaultValue={user.firstName}
              />
                 <TextField
                inputRef={lastNameRef}
                name="name"
                label="Name"
                fullWidth
                margin="normal"
                defaultValue={user.lastName}
              />
              <TextField
                required
                inputRef={emailRef}
                name="email"
                label="Email"
                fullWidth
                margin="normal"
                defaultValue={user.email}
              />
              <FormControl fullWidth margin="normal" variant="outlined">
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
                  label="Password"
                  name='password'
                  inputRef={passwordRef}
                />
              </FormControl>
              <TextField
                inputRef={phoneRef}
                name="phone"
                label="Phone"
                fullWidth
                margin="normal"
                defaultValue={user.phone}
              />
              <TextField
                inputRef={addressRef}
                name="address"
                label="Address"
                fullWidth
                margin="normal"
                defaultValue={user.address}
              />
              <Button type="submit" variant="contained" color="primary" fullWidth>
                SAVE
              </Button>
            </form>
          </Typography>
        </Box>
      </Modal>
    </>
  )
}

export default Update



