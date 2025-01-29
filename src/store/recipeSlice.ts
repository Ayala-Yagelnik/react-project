import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Recipe } from "../models/recipeType";

export const fetchRecipes = createAsyncThunk('recipes/fetch',
    async (_, thunkAPI) => {
        try {
            console.log('in async thunk');
            const response = await axios.get('http://localhost:3000/api/recipes')
            return response.data
        }
        catch (e: any) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const addRecipe = createAsyncThunk('recipes/add',
    async (recipe: Recipe, thunkAPI) => {
        try {
            console.log('in async thunk add recipe');
            console.log(recipe);

            const response = await axios.post('http://localhost:3000/api/recipes',
                {
                    title: recipe.title,
                    description: "new recipe with id " + recipe.id + " description :" + recipe.description
                },
                {
                    headers: {
                        'user-id': 1738087528269
                    }
                }
            )

            return response.data.recipe
        }
        catch (e: any) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

const recipesSlice = createSlice({
    name: 'recipes',
    initialState: { list: [] as Recipe[], loading: true },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipes.fulfilled,
                (state, action) => {
                    console.log('fulfilled');
                    state.list = action.payload
                })
            .addCase(fetchRecipes.rejected,
                (state) => {
                    console.log('failed');
                }
            )
            .addCase(addRecipe.fulfilled,
                (state, action) => {
                    console.log('fulfilled');
                    state.list = [...state.list, { ...action.payload }]
                })
            .addCase(addRecipe.rejected,
                (state) => {
                    console.log('failed');
                }
            )
    }
});
export default recipesSlice;