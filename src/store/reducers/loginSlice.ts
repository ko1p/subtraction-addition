import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface LoginState {
    login: string,
    isValid: boolean,
    isTouched: boolean
}

const initialState: LoginState = {
    login: '',
    isValid: false,
    isTouched: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUserLogin(state, action: PayloadAction<string>) {
            state.login = action.payload
        },
        setIsUserLoginValid(state, action: PayloadAction<boolean>) {
            state.isValid = action.payload
        },
        setIsUserLoginTouched(state, action: PayloadAction<boolean>) {
            state.isTouched = action.payload
        }
    }
})

export default loginSlice.reducer;
