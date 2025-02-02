import { Modal, Box, Typography, Button, IconButton } from "@mui/material";
import { useState, FormEvent, useRef, useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "./userReducer";
import { popupStyle } from "../styles/popup";
import TextFieldWithRef from "./TextFieldWithRef";
import PasswordField from "./PasswordField";
import { Close } from "@mui/icons-material";

const Update = () => {
  const { user, userDispatch } = useContext(UserContext);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => { setOpen(false); };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.put('http://localhost:3000/api/user', {
        password: passwordRef.current?.value || user.password,
        firstName: firstNameRef.current?.value || user.firstName,
        lastName: lastNameRef.current?.value || user.lastName,
        email: emailRef.current?.value || user.email,
        address: addressRef.current?.value || user.address,
        phone: phoneRef.current?.value || user.phone,
      }, { headers: { 'user-id': user.id + '' } });

      userDispatch({ type: 'UPDATE_USER', data: res.data });
      handleClose();
    } catch (e: any) {
      if (e.status === 404) alert('user not found');
    }
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
      <Button variant="text" sx={{ my: 2, color: 'white', display: 'block' }} onClick={handleOpen}>Update user</Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={popupStyle}>
          <Typography variant="h4" gutterBottom>UPDATE</Typography>
          <IconButton onClick={handleClose} sx={{ position: 'absolute', right: 16, top: 16, bgcolor: 'red', color: 'white', '&:hover': { bgcolor: 'darkred' } }}>
          <Close />
        </IconButton>
          <form onSubmit={handleSubmit}>
            <TextFieldWithRef label="Name" name="firstName" defaultValue={user.firstName} inputRef={firstNameRef} />
            <TextFieldWithRef label="Last Name" name="lastName" defaultValue={user.lastName} inputRef={lastNameRef} />
            <TextFieldWithRef label="Email" name="email" defaultValue={user.email} inputRef={emailRef} required />
            <PasswordField label="Password" inputRef={passwordRef} />
            <TextFieldWithRef label="Phone" name="phone" defaultValue={user.phone} inputRef={phoneRef} />
            <TextFieldWithRef label="Address" name="address" defaultValue={user.address} inputRef={addressRef} />
            <Button type="submit" variant="contained" color="primary" fullWidth>SAVE</Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};

export default Update;