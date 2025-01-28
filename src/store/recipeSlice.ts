import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Recipe } from "../models/recipeType";

export const fetchData = createAsyncThunk('recipes/fetch',
    async (_, thunkAPI) => {
        try {
            console.log('in async thunk');
            const response = await axios.get('http://localhost:3000/api/recipes')
            return response.data
        }
        catch (e:any) {
            return thunkAPI.rejectWithValue(e.message)
        }
    }
)

export const addRecipe = createAsyncThunk('recipes/add',
    async (recipe:Recipe, thunkAPI) => {
        try {
            console.log('in async thunk add recipe');
            console.log(recipe);
            
            const response = await axios.post('http://localhost:3000/api/recipes',recipe)
        
            return response.data.recipe
        }
        catch (e:any) {
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
            .addCase(fetchData.fulfilled,
                (state, action) => {
                    console.log('fulfilled');
                    state.list =  action.payload
                })
            .addCase(fetchData.rejected,
                (state) => {
                    console.log('failed');
                }
            )
            .addCase(addRecipe.fulfilled,
                (state, action) => {
                    console.log('fulfilled');
                    state.list = [...state.list, {...action.payload}]
                })
            .addCase(addRecipe.rejected,
                (state) => {
                    console.log('failed');
                }
            )
    }
});
// export const { add } = recipesSlice.actions;
export default recipesSlice;