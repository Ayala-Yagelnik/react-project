import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StoreType } from "../models/storeType";
import AddRecipe from "./AddRecipe";
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { AppDispatch } from "../store/store";
import { fetchRecipes } from "../store/recipeSlice";
import { Recipe } from "../models/recipeType";
import RecipeCard from "./RecipeCard";
import Grid from "@mui/material/Grid2";

const RecipeList = () => {
    const [add, setAdd] = useState(false);
    const [openCard, setOpenCard] = useState(false);
    const [recipe, setRecipe] = useState({} as Recipe);
    const { recipes: { list: recipesList } } = useSelector((store: StoreType) => store);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchRecipes())
    }, [dispatch])
    const handleOpenCard = (recipe: Recipe) => {
        setOpenCard(true);
        setRecipe(recipe)
    };
    return (
        <> 
          <Button sx={{margin:'10px'}} onClick={() => { setAdd(true) }}>add recipe</Button>
            <Grid container sx={{marginTop:'10px'}} size={{ xs: 12,sm:8, md: 4,lg:2 }} spacing={2} 
            >
            {recipesList.map(r =>
                <> <Grid key={r.id}>
                <Card sx={{ height: '250px', display: 'flex', flexDirection: 'column' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="100"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="green iguana" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {r.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {r.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" onClick={() => { handleOpenCard(r) }}>
                            I want to do it!
                        </Button>
                    </CardActions>
                </Card>
                </Grid>
                </>
            )} 
              </Grid>
        
          
         
            <RecipeCard open={openCard} recipe={recipe} ></RecipeCard>
             <AddRecipe open={add} ></AddRecipe>
        </>
    )

}
export default RecipeList