import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    correctAnswers: 0,
    incorrectAnswers: 0,
    isResultsShowed: false,
    isResultsTouched: false,
    startTime: null,
    finishTime: null,
    userPoints: null,
    isResultsTableShowed: false,
    topResults: [],
    isUserResultAdd: false
}

export const resultsSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {

    },
    extraReducers: {

    }
})

export default resultsSlice.reducer;