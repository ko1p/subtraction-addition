import {combineReducers} from "@reduxjs/toolkit";
import calculationsReducer from "./calculationsSlice";
import loginReducer from "./loginSlice";
import resultsReducer from "./resultsSlice";


export const rootReducer = combineReducers({
    login: loginReducer,
    calculations: calculationsReducer,
    results: resultsReducer
})
