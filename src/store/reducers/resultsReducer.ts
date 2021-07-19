const SET_CORRECT_ANSWERS_NUM = 'SET_CORRECT_ANSWERS_NUM';
const SET_INCORRECT_ANSWERS_NUM = 'SET_INCORRECT_ANSWERS_NUM';
const SET_IS_RESULTS_SHOWED = 'SET_IS_RESULTS_SHOWED';
const SET_IS_RESULTS_TOUCHED = 'SET_IS_RESULTS_TOUCHED';

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

type ActionTypes = SetCorrectAnswers | SetIncorrectAnswers | SetIsResultsShowed | SetIsResultsTouched 

const initialState = {
    correctAnswers: 0,
    incorrectAnswers: 0,
    isResultsShowed: false,
    isResultsTouched: false
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
        default:
            return state
    }
}