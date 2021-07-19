import {combineReducers} from 'redux';
import loginReducer from "./loginReducer";
import calculationReducer from "./calculationsReducer";
import resultsReducer from './resultsReducer';

export default combineReducers({
    login: loginReducer,
    calculations: calculationReducer,
    results: resultsReducer
})