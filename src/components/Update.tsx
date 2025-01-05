import { Modal, Box, Typography, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Button } from "@mui/material";
import React, { useReducer, useState, FormEvent, useRef, useContext } from "react";
import userReducer, { UserContext } from "./userReducer";

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



const Update = () => {
  // const [user, userDispatch] = useReducer(userReducer,{address:'',email:'',name:'',password:'',phone:''} )

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  // const [error, setError] = useState(false);
  const handleClose = () => { setOpen(false); /*setError(false);*/ }
  const userContext = useContext(UserContext)

  // const userContext = useContext(UserContext);
  const { userDispatch } = userContext;


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // if (passwordRef.current?.value !== userContext.user.password) { // החלף את "הסיסמה הנכונה" בסיסמה האמיתית
    //   setError(true);
    //   return;
    // }
    // else{
    //   setError(false);
    // }
    userDispatch({
      type: 'UPDATE_USER',
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
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const addressRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)

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
                defaultValue={userContext.user.name}

              />
              <TextField
                required
                inputRef={emailRef}
                name="email"
                label="Email"
                fullWidth
                margin="normal"
                defaultValue={userContext.user.email}

              />
           
              <FormControl fullWidth margin="normal" sx={{/* m: 1, width: '25ch'*/ }} variant="outlined">
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
                        {showPassword ?<Visibility />: <VisibilityOff />  }
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
                defaultValue={userContext.user.phone}

              />
              <TextField
                inputRef={addressRef}
                name="address"
                label="Address"
                fullWidth
                margin="normal"
                defaultValue={userContext.user.address}

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


