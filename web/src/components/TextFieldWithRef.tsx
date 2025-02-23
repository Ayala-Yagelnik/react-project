import { TextField } from "@mui/material";

const TextFieldWithRef= ({ label, name, defaultValue, inputRef, required = false, error, helperText }:{
    label: string;
    name: string;
    defaultValue: string;
    inputRef: React.RefObject<HTMLInputElement | null>; 
    required?: boolean;
    error?: boolean;
    helperText?: string;
  }) => {
  return (
    <TextField
      required={required}
      inputRef={inputRef} 
      name={name}
      label={label}
      fullWidth
      margin="normal"
      defaultValue={defaultValue}
      error={error} 
      helperText={helperText || undefined} 
    />
  );
};

export default TextFieldWithRef;
