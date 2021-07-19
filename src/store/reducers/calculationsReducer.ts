const SET_CALCULATIONS = 'SET_CALCULATIONS';
const HAS_EMPTY_INPUTS = 'HAS_EMPTY_INPUTS';
const SET_USER_ANSWER = 'SET_USER_ANSWER';

type SetCalculations = {
    type: typeof SET_CALCULATIONS
    calculations: any[] // TODO Убрать any
}

type hasEmptyInputs = {
    type: typeof HAS_EMPTY_INPUTS
    hasEmptyInputs: boolean
}

type setUserAnswer = {
    type: typeof SET_USER_ANSWER
    userAnswer: number
    calculation: string
    isCorrect: boolean
}

type ActionTypes = SetCalculations | hasEmptyInputs | setUserAnswer

const initialState = {
    calculationsList: [],
    hasEmptyInputs: false,
}

export default function calculationsReducer(state = initialState, action: ActionTypes) {
    switch (action.type) {
        case SET_CALCULATIONS: {
            return {
                ...state,
                calculationsList: action.calculations
            }
        }
        case HAS_EMPTY_INPUTS: {
            return {
                ...state,
                hasEmptyInputs: action.hasEmptyInputs
            }
        }
        case SET_USER_ANSWER: {
            const newCalculationList = state.calculationsList.map((calcItem: any) => { // TODO убрать эни
                if (calcItem.calculation === action.calculation) {
                    calcItem.userAnswer = action.userAnswer;
                    calcItem.isCorrect = action.isCorrect
                }
                return calcItem
            })
            return {
                ...state,
                calculationsList: newCalculationList
            }
        }
        default:
            return state
    }
}