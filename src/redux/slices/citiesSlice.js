import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    cities: [],
    error: ''
}


export const fetchCities = createAsyncThunk('cities/fetchCities', async () => {
    const res = await fetch('https://api.vaktija.ba/vaktija/v1/lokacije')
    .then(res => res.json())

    return res

})



const citiesSlice = createSlice({
    name: 'cities',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchCities.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchCities.fulfilled, (state, action) => {
            state.loading = false
            state.cities = action.payload
        })
    }
})


export default citiesSlice.reducer