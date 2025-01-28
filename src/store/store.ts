import { combineSlices, configureStore } from "@reduxjs/toolkit";
import recipesSlice from "./recipeSlice";

const store = configureStore({
    reducer: combineSlices(
        recipesSlice
    ),
});


export default store