import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, List, ListItem, ListItemIcon, Typography } from "@mui/material"
import { Recipe } from "../models/recipeType"
import { Favorite, Label, MoreVert, Share } from "@mui/icons-material"
import { red } from "@mui/material/colors"

const RecipeCard = ({  recipe }: {  recipe: Recipe }) => {
  // const [openCard, setOpenCard] = useState(open)
  // useEffect(() => setOpenCard(open), [open]);
  // const handleClose = () => {
  //   setOpenCard(false);
  // }
  return (
    <>
        <Card sx={{ overflow: 'auto' }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            component="img"
            height="194"
            image="/static/images/cards/paella.jpg"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
             {recipe.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Favorite />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>

          </CardActions>
          <Collapse in={true} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography variant="h6">Instructions:</Typography>
              <Typography sx={{ marginBottom: 2 }}>
                {recipe.instructions}
              </Typography>
              <Typography variant="h6">Ingredients</Typography>
                 <List>
                        {recipe.ingredients.map((ingredien, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <Label />
                                </ListItemIcon>
                                <Typography>{ingredien}</Typography>
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