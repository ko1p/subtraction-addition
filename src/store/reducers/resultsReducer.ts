const SET_CORRECT_ANSWERS_NUM = 'SET_CORRECT_ANSWERS_NUM';
const SET_INCORRECT_ANSWERS_NUM = 'SET_INCORRECT_ANSWERS_NUM';
const SET_IS_RESULTS_SHOWED = 'SET_IS_RESULTS_SHOWED';
const SET_IS_RESULTS_TOUCHED = 'SET_IS_RESULTS_TOUCHED';
const SET_START_TIME = 'SET_START_TIME';
const SET_FINISH_TIME = 'SET_FINISH_TIME';
const SET_USER_POINTS = 'SET_USER_POINTS';

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

type ActionTypes = SetCorrectAnswers | SetIncorrectAnswers | SetIsResultsShowed | SetIsResultsTouched | SetStartTime | SetFinishTime | SetUserPoints

const initialState = {
    correctAnswers: 0,
    incorrectAnswers: 0,
    isResultsShowed: false,
    isResultsTouched: false,
    startTime: null,
    finishTime: null,
    userPoints: null
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
        default:
            return state
    }
}