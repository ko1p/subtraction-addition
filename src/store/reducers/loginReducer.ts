const SET_USER_LOGIN = "SET_USER_LOGIN";
const SET_IS_USER_LOGIN = "SET_IS_USER_LOGIN";
const SET_LOGIN_TOUCHED = "SET_LOGIN_TOUCHED";

type SetUserLogin = {
    type: typeof SET_USER_LOGIN
    login: string
}

type SetIsUserLoginValid = {
    type: typeof SET_IS_USER_LOGIN
    isValid: boolean
}

type SetIsLoginTouched = {
    type: typeof SET_LOGIN_TOUCHED
    isTouched: boolean
}

type ActionsTypes = SetUserLogin | SetIsUserLoginValid | SetIsLoginTouched

const initialState = {
    login: '',
    isValid: false,
    isTouched: false
}

export default function loginReducer(state = initialState, action: ActionsTypes) {
    switch (action.type) {
        case SET_USER_LOGIN: {
            return {
                ...state,
                login: action.login
            }
        }
        case SET_IS_USER_LOGIN: {
            return {
                ...state,
                isValid: action.isValid
            }
        }
        case SET_LOGIN_TOUCHED: {
            return {
                ...state,
                isTouched: action.isTouched
            }
        }
        default:
            return state
    }
}
