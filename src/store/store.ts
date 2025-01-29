import { combineSlices, configureStore } from "@reduxjs/toolkit";
import recipesSlice from "./recipeSlice";

const store = configureStore({
    reducer: combineSlices(
        recipesSlice
    ),
});

export type AppDispatch = typeof store.dispatch; 
export default store