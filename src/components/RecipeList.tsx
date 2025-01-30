import { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StoreType } from "../models/storeType";
// import AddRecipe from "./AddRecipe";
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { AppDispatch } from "../store/store";
import { fetchRecipes } from "../store/recipeSlice";
import { Recipe } from "../models/recipeType";
// import RecipeCard from "./RecipeCard";
import Grid from "@mui/material/Grid2";
import { UserContext } from "./userReducer"
import AddRecipe from "./AddRecipe";
import RecipeCard from "./RecipeCard";
import { PageContainer } from "@toolpad/core/PageContainer";


const RecipeList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { user, userDispatch } = useContext(UserContext);
    useEffect(() => {
        console.log(user.id)
    }, [user])
    const [add, setAdd] = useState(false);
    const [openCard, setOpenCard] = useState(false);
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const recipesList = useSelector((store: StoreType) => store.recipes.list);

    useEffect(() => {
        console.log(user.id)
    }, [userDispatch])

    useEffect(() => {
        dispatch(fetchRecipes())
    }, [dispatch]);

    const handleOpenCard = (recipe: Recipe) => {
        setOpenCard(true);
        setRecipe(recipe)
    };
    return (
        <>
            <Grid container spacing={{ xs: 2, md: 3 }}
                //  columns={{ xs: 1, sm: 8, md: 12 }}
                sx={{ flexGrow: 1 }}>
                <Grid size={12}>
                    <Button sx={{ margin: '10px' }} disabled={!user.id} onClick={() => { setAdd(true) }}>
                        add recipe
                    </Button>
                </Grid>
                <Grid container spacing={4} size={{ xs: 12, sm: 5 }}>
                    {recipesList.map((r, index) =>
                        <Grid key={index} size={12}>
                            <Card key={r.id}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="100"
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        alt={r.title} />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {r.title}
                                        </Typography>
                                        <Typography variant="body2">
                                            {r.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" onClick={() => { handleOpenCard(r) }}>
                                        I want do it!
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )}
                </Grid>
                <Grid container spacing={4} size={{ xs: 12, sm: 7 }}>
                    {recipe && <RecipeCard recipe={recipe} ></RecipeCard>}
                </Grid>
            </Grid>
            <AddRecipe open={add} onClose={() => { setAdd(false) }}></AddRecipe>

        </>
    )

}
export default RecipeList