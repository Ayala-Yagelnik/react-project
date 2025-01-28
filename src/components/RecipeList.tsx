import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StoreType } from "../models/storeType";
import { fetchData, addRecipe } from "../store/recipeSlice";
import { Recipe } from "../models/recipeType";
import AddRecipe from "./AddRecipe";
import { Button } from "@mui/material";

const RecipeList=()=>{
const [open,setOpen]=useState('false')
    const { recipes: { list: recipesList } } = useSelector((store: StoreType) => store);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData())
    }, [])
    const [count, setCount] = useState(0)
    const titleRef = useRef<HTMLInputElement>(null)
    const descriptionRef = useRef<HTMLInputElement>(null)
//     const handleAdd=(title:string)=>{
//         setCount(count+1)
//         const  nRecipe:Recipe={
//             id:count,
//             title,
//             description,
//             ingredients:[]
//         }
            
//             dispatch(addRecipe(nRecipe));
// };
  
// return(
//     <>
//     <div>
//         {recipesList.map(r => <div key={r.id}>{r.title}</div>)}
//         <button onClick={() =>))}
//             }>add</button>
//         <input ref={titleRef} placeholder='title'/>
//         <input ref={descriptionRef} placeholder='description'/>
//     </div>
// </>
// )
return(
    <>
     <div>
         {recipesList.map(r => <div key={r.id}>{r.title}</div>)}
         <Button onClick={()=>{setOpen('true')}}>add recipe</Button>
     </div>
  { open&& <AddRecipe></AddRecipe>}
    </>
)

}
export default RecipeList