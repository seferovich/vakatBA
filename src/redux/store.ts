    import { configureStore } from "@reduxjs/toolkit";
import vakatReducer from './slices/vakatSlice'
import citiesSlice from "./slices/citiesSlice";
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
    reducer: {
        vakat: vakatReducer,
        cities: citiesSlice
    },
    

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch