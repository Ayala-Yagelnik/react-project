import { Avatar, Card, CardActions, CardContent, CardHeader, Collapse, IconButton, List, ListItem, ListItemIcon, Typography } from "@mui/material"
import { Recipe } from "../models/recipeType"
import { Favorite, FavoriteBorder, Label, MoreVert } from "@mui/icons-material"
import { pink } from "@mui/material/colors"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import { fetchUserById } from "../store/userSlice"
import { AppDispatch } from "../store/store"
import { StoreType } from "../models/storeType"

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: StoreType) => state.users.user);

  useEffect(() => {
    if (recipe.authorId) {
      dispatch(fetchUserById(recipe.authorId))
    }
  }, [recipe.authorId, dispatch]);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleToggleFavorite = () => {
      setIsFavorite(!isFavorite);
  };
  return (
    <>
      <Card sx={{ overflow: 'auto',width:"100%" ,maxHeight:"80vh"}}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: pink[500] }} aria-label="recipe">
              {user.firstName ? user.firstName[0]+user.lastName[0] : null}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={recipe.title}
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {recipe.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={handleToggleFavorite}>
          {isFavorite ? (
                <Favorite sx={{ color: 'red' }} />
            ) : (
                <FavoriteBorder sx={{ color: 'gray' }} />
            )}
          </IconButton>
        </CardActions>
        <Collapse in={true} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="h6">Instructions:</Typography>
            <Typography sx={{ marginBottom: 2 }}>
              {recipe.instructions}
            </Typography>
            <Typography variant="h6">Ingredients:</Typography>
            <List>
              {recipe.ingredients.map((ingredient, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <Label />
                  </ListItemIcon>
                  <Typography>{ingredient}</Typography>
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Collapse>
      </Card>
    </>
  )
}
export default RecipeCard