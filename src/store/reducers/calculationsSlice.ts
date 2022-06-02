import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState = {
    calculationsList: [],
    hasEmptyInputs: false,
}

export const calculationsSlice = createSlice({
    name: 'calculations',
    initialState,
    reducers: {

    },
    extraReducers: {

    }
})

export default calculationsSlice.reducer;