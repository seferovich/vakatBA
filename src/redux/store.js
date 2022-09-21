import { configureStore } from "@reduxjs/toolkit";
import vakatReducer from './slices/vakatSlice'
import citiesSlice from "./slices/citiesSlice";

export const store = configureStore({
    reducer: {
        vakat: vakatReducer,
        cities: citiesSlice
    }
})