import { combineSlices, configureStore } from "@reduxjs/toolkit";
import recipesSlice from "./recipeSlice";
import userSlice from "./userSlice";

const store = configureStore({
    reducer: combineSlices(
        recipesSlice,
        userSlice
    ),
});

export type AppDispatch = typeof store.dispatch; 
export default store