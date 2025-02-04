import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import React, { useState } from 'react'; 

const PasswordField= ({ label, inputRef, error = false, helperText }:{
    label: string;
    inputRef: React.RefObject<HTMLInputElement | null>; 
    error?: boolean; 
    helperText?: string; 
  }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();
  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();

  return (
    <FormControl fullWidth margin="normal" variant="outlined" error={error}> 
      <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={showPassword ? 'hide the password' : 'display the password'}
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              onMouseUp={handleMouseUpPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
        name="password"
        inputRef={inputRef}
      />
      {helperText && <div style={{ color: 'red', fontSize: '0.75rem' }}>{helperText}</div>}  {/* הצגת helperText במקרה של שגיאה */}
    </FormControl>
  );
};

export default PasswordField;
