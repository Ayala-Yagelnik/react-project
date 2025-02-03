import { Box, Typography, TextField, Button, Modal, IconButton } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { AppDispatch } from "../store/store";
import { UserContext } from "./userReducer";
import { Recipe } from "../models/recipeType";
import { addRecipe } from "../store/recipeSlice";
import { useForm, SubmitHandler, FieldValues, useFieldArray } from "react-hook-form";
import { Close } from "@mui/icons-material";
import IngredientsList from './IngredientsList'; 
import { popupStyle } from "../styles/popup";

const AddRecipe = ({ open, onClose }:{open: boolean; onClose: () => void; }) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    ingredients: Yup.array().of(Yup.string().required('Product name is required'))
    .min(1, 'At least one product is required'),
    instructions: Yup.string().required('Instructions are required'),
  });

  const [openForm, setOpenForm] = useState<boolean>(open);
  useEffect(() => setOpenForm(open), [open]);

  const dispatch = useDispatch<AppDispatch>();
  const { user } = useContext(UserContext);

  const { control, handleSubmit, register, reset, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: { title: '', description: '', ingredients: [''], instructions: '' }
  });

  const { fields, append, remove } = useFieldArray({ control, name: "ingredients" });

  const handleClose = () => {
    setOpenForm(false); onClose(); reset();
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const newRecipe: Recipe = {
      title: data.title,
      ingredients: data.ingredients,
      description: data.description,
      instructions: data.instructions,
      authorId: user.id ?? 0,
    };
    dispatch(addRecipe(newRecipe));
    handleClose();
  };

  return (
    <Modal open={openForm}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={popupStyle}>
        <IconButton onClick={handleClose} sx={{ position: 'absolute', right: 16, top: 16, bgcolor: 'red', color: 'white', '&:hover': { bgcolor: 'darkred' } }}>
          <Close />
        </IconButton>
        <Typography sx={{ display: 'flex', justifyContent: 'center', width: '100%', my: 2 }} variant="h6">Add Recipe</Typography>
        <TextField
        sx={{my: 2}}
          fullWidth
          id="title"
          label="Title"
          {...register('title')}
          error={!!errors.title}
          helperText={errors.title?.message}/>
        <TextField
        sx={{my: 2}}
          fullWidth
          id="description"
          label="Description"
          multiline
          rows={4}
          {...register('description')}
          error={!!errors.description}
          helperText={errors.description?.message}/>        
        <IngredientsList
          control={control}
          register={register}
          errors={errors}
          fields={fields}
          append={append}
          remove={remove}/>
        <TextField
        sx={{my: 2}}
          fullWidth
          id="instructions"
          label="Instructions"
          multiline
          rows={4}
          {...register('instructions')}
          error={!!errors.instructions}
          helperText={errors.instructions?.message}/>
        <Button type="submit" variant="contained" sx={{ display: 'flex', justifyContent: 'center', width: '100%', my: 2 }}>
          Submit Recipe
        </Button>
      </Box>
    </Modal>
  );
};

export default AddRecipe;