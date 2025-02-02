import { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StoreType } from "../models/storeType";
import { Button, Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import { AppDispatch } from "../store/store";
import { fetchRecipes } from "../store/recipeSlice";
import { Recipe } from "../models/recipeType";
import Grid from "@mui/material/Grid2";
import { UserContext } from "./userReducer"
import AddRecipe from "./AddRecipe";
import RecipeCard from "./RecipeCard";
import { pink } from "@mui/material/colors";



const RecipeList = () => {
    
    const dispatch = useDispatch<AppDispatch>();
    const { user, userDispatch } = useContext(UserContext);
    useEffect(() => {
        console.log(user.id)
    }, [user])
    const [add, setAdd] = useState(false);
    const [recipe, setRecipe] = useState<Recipe | null>(null);
    const recipesList = useSelector((store: StoreType) => store.recipes.list);
    useEffect(() => {
        console.log('Current recipesList:', recipesList);
    }, [recipesList]);
    
    useEffect(() => {
        console.log(user.id)
    }, [userDispatch])

    useEffect(() => {
        dispatch(fetchRecipes())
    }, [dispatch]);

    const handleOpenCard = (recipe: Recipe) => {
        setRecipe(recipe)
    };
    return (
        <>
            <Grid container spacing={{ xs: 2, md: 3 }}
                sx={{ flexGrow: 1 }}>
                <Grid size={12}>
                    <Button sx={{ margin: '10px' }} disabled={!user.id} onClick={() => { setAdd(true) }}>
                        add recipe
                    </Button>
                </Grid>
                <Grid container spacing={4} size={{ xs: 12, sm: 5 }}>
                    {recipesList.map((r, index) =>
                      r && r.title ? (
                        <Grid key={index} size={12}>
                            <Card key={r.id}>
                                <CardActionArea>
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
                                    <Button size="small" sx={{color:pink[500]}} onClick={() => { handleOpenCard(r) }}>
                                        I want do it!
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                      ):null
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