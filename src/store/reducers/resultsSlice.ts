import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getTopResults} from "../actions/results";
import {IUsersResults} from "../../interfaces";

const initialState: resultsState = {
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

interface resultsState  {
    correctAnswers: number,
    incorrectAnswers: number,
    isResultsShowed: boolean,
    isResultsTouched: boolean,
    startTime: null | number,
    finishTime: null | number,
    userPoints: null | number,
    isResultsTableShowed: boolean,
    topResults: IUsersResults[],
    isUserResultAdd: boolean
}

export const resultsSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {
        setStartTime(state, action: PayloadAction<number>) {
            state.startTime = action.payload;
        },
        setFinishTime(state, action: PayloadAction<number>) {
            state.finishTime = action.payload;
        },
        setIsResultsShowed(state, action: PayloadAction<boolean>) {
            state.isResultsShowed = action.payload;
        },
        setIsResultsTouched(state, action: PayloadAction<boolean>) {
            state.isResultsTouched = action.payload;
        },
        setNumberOfCorrectAnwsers(state, action: PayloadAction<number>) {
            state.correctAnswers = action.payload;
        },
        setNumberOfIncorrectAnwsers(state, action: PayloadAction<number>) {
            state.incorrectAnswers = action.payload;
        },
        setIsResultsTableShowed(state, action: PayloadAction<boolean>) {
            state.isResultsTableShowed = action.payload;
        }
    },
    extraReducers: {
        [getTopResults.fulfilled.type]: (state, action: PayloadAction<IUsersResults[]>) => {
            state.topResults = action.payload;
        },
    }
})

export default resultsSlice.reducer;
