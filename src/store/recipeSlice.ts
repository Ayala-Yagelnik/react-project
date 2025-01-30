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
            const response = await axios.post('http://localhost:3000/api/recipes',
               recipe,
                {
                    headers: {
                        'user-id': recipe.authorId
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
    reducers: {},
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
                    state.list .push(action.payload.recipe )
                })
            .addCase(addRecipe.rejected,
                (_,action) => {
                    if (action.payload === 403) {
                        alert("You are not allowed to add a recipe");
                    }
                }
            )
    }
});
export default recipesSlice;