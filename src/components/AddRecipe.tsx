import { Box, Typography, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup"
const AddRecipe=()=>{

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            products: [''], // Start with one empty product field
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .required('Title is required'),
            description: Yup.string()
                .required('Description is required'),
            products: Yup.array()
                .of(Yup.string().required('Product is required'))
                .min(1, 'At least one product is required'),
        }),
        onSubmit: (values) => {
            console.log('Form data', values);
            // Handle form submission (e.g., send data to server)
        },
    });

    const handleAddProduct = () => {
        formik.setFieldValue('products', [...formik.values.products, '']);
    };

    const handleProductChange = (index:number, value:string) => {
        const products = [...formik.values.products];
        products[index] = value;
        formik.setFieldValue('products', products);
    };

    return (
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 2 }}>
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
            {formik.values.products.map((product, index) => (
                <TextField
                    key={index}
                    fullWidth
                    id={`products.${index}`}
                    name={`products.${index}`}
                    label={`Product ${index + 1}`}
                    value={product}
                    onChange={(e) => handleProductChange(index, e.target.value)}
                    error={formik.touched.products && Boolean(formik.errors.products?.[index])}
                    helperText={formik.touched.products && formik.errors.products?.[index] && formik.errors.products?.[index]}
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
    );


}
export default AddRecipe