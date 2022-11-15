import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";


type Data = {
    id: number,
    lokacija: string,
    vakat: string[]
}

type InitialState ={
    loading: boolean,
    data?: Data,
    error?: string 
}

const initialState: InitialState = {
    loading: false,
    data: undefined,
    error: ''
}

export const fetchVakat = createAsyncThunk('vakat/fetchVakat', async (id: number) => {
    const res = await fetch(`https://api.vaktija.ba/vaktija/v1/${id}`)
    .then(res => res.json())

    return res        
})

const vakatSlice = createSlice({
    name: 'vakat',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(fetchVakat.pending, (state) =>{
            state.loading = true    
        })

        builder.addCase(fetchVakat.fulfilled, (state, action: PayloadAction<Data>) =>{
            state.loading = true
            state.data = action.payload
            state.error = 'Sum ting wong'  
        })
    }
})

export default vakatSlice.reducer

