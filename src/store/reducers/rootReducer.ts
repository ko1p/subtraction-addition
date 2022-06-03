// import {combineReducers} from 'redux';
// import loginReducer from "./loginReducer";
// import calculationReducer from "./calculationsReducer";
// import resultsReducer from './resultsReducer';
import {combineReducers} from "@reduxjs/toolkit";
import calculationsReducer from "./calculationsSlice";
import loginReducer from "./loginSlice";
import resultsReducer from "./resultsSlice";

// export default combineReducers({
//     login: loginReducer,
//     calculations: calculationReducer,
//     results: resultsReducer
// })

export const rootReducer = combineReducers({
    login: loginReducer,
    calculations: calculationsReducer,
    results: resultsReducer
})