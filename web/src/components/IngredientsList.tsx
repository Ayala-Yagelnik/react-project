import { Box, TextField, IconButton, Typography, Button } from "@mui/material";
import { Delete, Add } from "@mui/icons-material";
import { UseFieldArrayRemove } from "react-hook-form";

const IngredientsList = ({ control, register, errors, fields, append, remove }:{
    control: any;
    register: any;
    errors: any;
    fields: any[]; 
    append: (value: string) => void;
    remove: UseFieldArrayRemove;
  }) => {
  return (
    <>
      <Typography variant="h6">Ingredients</Typography>
      {fields.map((item, index) => (
        <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <TextField
            fullWidth
            label={`Ingredient ${index + 1}`}
            {...register(`ingredients.${index}`)}
            error={!!errors.ingredients?.[index]}
            helperText={errors.ingredients?.[index]?.message}
          />
          <IconButton onClick={() => remove(index)} sx={{ ml: 1 }}>
            <Delete />
          </IconButton>
        </Box>
      ))}
      <Button onClick={() => append('')} variant="outlined" color="primary" sx={{ mb: 2, borderRadius: '50%' }}>
        <Add />
      </Button>
    </>
  );
};

export default IngredientsList;
