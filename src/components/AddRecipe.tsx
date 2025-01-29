import { Box, Typography, TextField, Button, Modal } from "@mui/material";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup"
import { AppDispatch } from "../store/store";
import { UserContext } from "./userReducer";
import { Recipe } from "../models/recipeType";
import { addRecipe } from "../store/recipeSlice";
const AddRecipe = ({ open }: { open: boolean }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { user } = useContext(UserContext);
    const [count, setCount] = useState(0);
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            ingredients: ['']
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .required('Title is required'),
            description: Yup.string()
                .required('Description is required'),
            ingredients: Yup.array()
                .of(Yup.string().required('Product is required'))
                .min(1, 'At least one product is required'),
        }),
        onSubmit: (values) => {
            console.log('Form data', values);
            const newRecipe: Recipe = {
                id: count,
                title: values.title,
                ingredients: values.ingredients,
                description: values.description,
                userId: user.id,
            }
            setCount(count + 1);
            dispatch(addRecipe(newRecipe));
        },
    });

    const handleAddProduct = () => {
        formik.setFieldValue('ingredients', [...formik.values.ingredients, '']);
    };

    const handleProductChange = (index: number, value: string) => {
        const ingredients = [...formik.values.ingredients];
        ingredients[index] = value;
        formik.setFieldValue('ingredients', ingredients);
    };

    return (
        <Modal open={open}>
            <Box component="form" onSubmit={formik.handleSubmit} sx={{ backgroundColor: "white", mt: 2 }}>
                <Typography variant="h6">Add Recipe</Typography>
                <TextField
                    fullWidth
                    id="title"
                    name="title"
                    label="Title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    id="description"
                    name="description"
                    label="Description"
                    multiline
                    rows={4}
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    helperText={formik.touched.description && formik.errors.description}
                    sx={{ mb: 2 }}
                />
                {formik.values.ingredients.map((product, index) => (
                    <TextField
                        key={index}
                        fullWidth
                        id={`ingredients.${index}`}
                        name={`ingredients.${index}`}
                        label={`Product ${index + 1}`}
                        value={product}
                        onChange={(e) => handleProductChange(index, e.target.value)}
                        error={formik.touched.ingredients && Boolean(formik.errors.ingredients?.[index])}
                        helperText={formik.touched.ingredients && formik.errors.ingredients?.[index] && formik.errors.ingredients?.[index]}
                        sx={{ mb: 2 }}
                    />
                ))}
                <Button variant="outlined" onClick={handleAddProduct} sx={{ mb: 2 }}>
                    Add Another Product
                </Button>
                <Button color="primary" variant="contained" fullWidth type="submit">
                    Submit Recipe
                </Button>
            </Box>
        </Modal>
    );


}
export default AddRecipe