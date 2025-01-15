import { Modal, Box, Typography, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Button } from "@mui/material";
import React, {  useState, FormEvent, useRef, useContext, useEffect } from "react";
import { userCotext } from "./Nav"
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from "axios";
import { UserContext } from "./userReducer";



const Update = () => {

   const { user, userDispatch } = useContext(UserContext);
  
    
  useEffect(() => {
      console.log(user); // בדוק כאן אם אתה רואה את הנתונים
  }, [user]); // הוסף dependency כדי לבדוק שינוי ב-user



  // const [user, userDispatch] = useReducer(userReducer,{address:'',email:'',name:'',password:'',phone:''} )
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const addressRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  // const [user, userDispatch] = useContext(userCotext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => { setOpen(false);  }
 
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    try {
      console.log(user);
      const res = await axios.put('http://localhost:3000/api/user',
        {
          password: passwordRef.current?.value || user.password,
          name: nameRef.current?.value || user.name,
          email: emailRef.current?.value || user.email,
          address: addressRef.current?.value || user.address,
          phone: phoneRef.current?.value || user.phone,
        },
        { headers: { 'user-id': user.id + '' } }
      )
    
      userDispatch({
        type: 'UPDATE_USER',
        data: {
          name: res.data.name ,
          password: res.data.password,
          email: res.data.email,
          address: res.data.address,
          phone: res.data.phone,
        }
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
  
  useEffect(() => {
    if (user) {
      if (nameRef.current) nameRef.current.value = user.name;
      if (emailRef.current) emailRef.current.value = user.email;
      if (phoneRef.current) phoneRef.current.value = user.phone;
      if (addressRef.current) addressRef.current.value = user.address;
      if (passwordRef.current) passwordRef.current.value = user.password; // אם את רוצה גם להציג את הסיסמה
    }
  }, [user]);
  

  console.log(user)
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
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} component={'span'} variant={'body2'}>
            <Typography variant="h4" gutterBottom >
              UPDATE
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                inputRef={nameRef}
                name="name"
                label="Name"
                fullWidth
                margin="normal"
                defaultValue={user.name}
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



