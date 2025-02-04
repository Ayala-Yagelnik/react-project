import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Recipe } from "../models/recipeType";

export const fetchRecipes = createAsyncThunk('recipes/fetch',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('http://localhost:3000/api/recipes')
            return response.data
        }
        catch (e: any) {
            if (axios.isAxiosError(e) && e.response) {
                if (e.response.status === 401) {
                    return thunkAPI.rejectWithValue({ error: 'Unauthorized access' });
                }
                if (e.response.status === 403) {
                    return thunkAPI.rejectWithValue({ error: 'Forbidden access' });
                }
            }
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
export const updateRecipe = createAsyncThunk('recipes/update',
    async (recipe: Recipe, thunkAPI) => {
        try {
            const response = await axios.put(`http://localhost:3000/api/recipes/${recipe.id}`,
                recipe
            );

            return response.data.recipe;
        }
        catch (e: any) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
const recipesSlice = createSlice({
    name: 'recipes',
    initialState: { list: [] as Recipe[], loading: true },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecipes.fulfilled,
                (state, action) => {
                    state.list = action.payload;
                    console.log('fulfilled');
                })
            .addCase(fetchRecipes.rejected,
                () => {
                    console.log('failed');
                }
            )
            .addCase(addRecipe.fulfilled,
                (state, action) => {
                    state.list.push(action.payload)
                    console.log('Recipe added:', action.payload);
                })
            .addCase(addRecipe.rejected,
                (_, action) => {
                    if (action.payload === 403) {
                        alert("You are not allowed to add a recipe");
                    }
                }
            )
            .addCase(updateRecipe.fulfilled, (state, action) => {
                const index = state.list.findIndex(recipe => recipe.id === action.payload.id);
                if (index !== -1) {
                    state.list[index] = action.payload;
                }
                console.log('updated recipe', action.payload);
            })
            .addCase(updateRecipe.rejected, (_, action) => {
                if (action.payload === 403) {
                    alert("You are not allowed to add a recipe");
                }
            })
    }
});
export default recipesSlice;