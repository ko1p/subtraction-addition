import {IUsersResults} from "../../interfaces";

const SET_CORRECT_ANSWERS_NUM = 'SET_CORRECT_ANSWERS_NUM';
const SET_INCORRECT_ANSWERS_NUM = 'SET_INCORRECT_ANSWERS_NUM';
const SET_IS_RESULTS_SHOWED = 'SET_IS_RESULTS_SHOWED';
const SET_IS_RESULTS_TOUCHED = 'SET_IS_RESULTS_TOUCHED';
const SET_START_TIME = 'SET_START_TIME';
const SET_FINISH_TIME = 'SET_FINISH_TIME';
const SET_USER_POINTS = 'SET_USER_POINTS';
const SET_IS_RESULT_TABLE_SHOWED = 'SET_IS_RESULT_TABLE_SHOWED';
const SET_TOP_RESULTS = 'SET_TOP_RESULTS';
const SET_IS_USER_RESULT_ADD = 'SET_IS_USER_RESULT_ADD';

type SetCorrectAnswers = {
    type: typeof SET_CORRECT_ANSWERS_NUM
    correctAnswers: number 
}

type SetIncorrectAnswers = {
    type: typeof SET_INCORRECT_ANSWERS_NUM
    incorrectAnswers: number 
}

type SetIsResultsShowed = {
    type: typeof SET_IS_RESULTS_SHOWED
    isResultsShowed: boolean
}

type SetIsResultsTouched = {
    type: typeof SET_IS_RESULTS_TOUCHED
    isResultsTouched: boolean
}

type SetStartTime = {
    type: typeof SET_START_TIME
    startTime: number
}

type SetFinishTime = {
    type: typeof SET_FINISH_TIME
    finishTime: number
}

type SetUserPoints = {
    type: typeof SET_USER_POINTS
    userPoints: number
}

type SetIsResultsTableShowed = {
    type: typeof SET_IS_RESULT_TABLE_SHOWED
    isResultsTableShowed: boolean
}

type SetTopResults = {
    type: typeof SET_TOP_RESULTS
    data: IUsersResults[]
}

type SetIsUserResultAdd = {
    type: typeof SET_IS_USER_RESULT_ADD
    isUserResultAdd: boolean
}

type ActionTypes = SetCorrectAnswers | SetIncorrectAnswers | SetIsResultsShowed | SetIsResultsTouched | SetStartTime | SetFinishTime | SetUserPoints | SetIsResultsTableShowed | SetTopResults | SetIsUserResultAdd

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

export default function resultsReducer(state = initialState, action: ActionTypes) {
    switch (action.type) {
        case SET_CORRECT_ANSWERS_NUM: {
            return {
                ...state,
                correctAnswers: action.correctAnswers
            }
        }
        case SET_INCORRECT_ANSWERS_NUM: {
            return {
                ...state,
                incorrectAnswers: action.incorrectAnswers
            }
        }
        case SET_IS_RESULTS_SHOWED: {
            return {
                ...state,
                isResultsShowed: action.isResultsShowed
            }
        }
        case SET_IS_RESULTS_TOUCHED: {
            return {
                ...state,
                isResultsTouched: action.isResultsTouched
            }
        }
        case SET_START_TIME: {
            return {
                ...state,
                startTime: action.startTime
            }
        }
        case SET_FINISH_TIME: {
            return {
                ...state,
                finishTime: action.finishTime
            }
        }
        case SET_USER_POINTS: {
            return {
                ...state,
                userPoints: action.userPoints
            }
        }
        case SET_IS_RESULT_TABLE_SHOWED: {
            return {
                ...state,
                isResultsTableShowed: action.isResultsTableShowed
            }
        }
        case SET_TOP_RESULTS: {
            return {
                ...state,
                topResults: action.data
            }
        }
        case SET_IS_USER_RESULT_ADD: {
            return {
                ...state,
                isUserResultAdd: action.isUserResultAdd
            }
        }
        default:
            return state
    }
}