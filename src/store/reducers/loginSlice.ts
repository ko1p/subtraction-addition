import {createSlice, PayloadAction} from "@reduxjs/toolkit";
// import {fetchAllUsers} from "../actions/UsersAction";
// import {IUser} from "../../models/users";

// interface UserState {
//     users: IUser[],
//     isLoading: boolean,
//     error: string,
//     count: number,
// }

const initialState = {
    login: '',
    isValid: false,
    isTouched: false
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {

    },
    extraReducers: {

    }
})

export default loginSlice.reducer;
