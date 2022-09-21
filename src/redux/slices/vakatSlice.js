import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    data: {},
    error: ''
}

export const fetchVakat = createAsyncThunk('vakat/fetchVakat', async (id) => {
    const res = await fetch(`https://api.vaktija.ba/vaktija/v1/${id}`)
    .then(res => res.json())

    return res
        
})

const vakatSlice = createSlice({
    name: 'vakat',
    initialState,

    extraReducers: (builder) =>{
        builder.addCase(fetchVakat.pending, (state) =>{
            state.loading = true    
        })

        builder.addCase(fetchVakat.fulfilled, (state, action) =>{
            state.loading = true
            state.data = action.payload
            state.error = ''    
        })
    }
})

export default vakatSlice.reducer

