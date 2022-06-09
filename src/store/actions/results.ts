import db from "../../firebase/firebase";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {IUsersResults} from "../../interfaces";

export const getTopResults = createAsyncThunk(
    'results/getTopResults',
    async (_, thunkAPI) => {
        try {
            db.collection("results").get().then((querySnapshot) => {
                const data: IUsersResults[] = [];
                querySnapshot.forEach((doc) => {
                    data.push(doc.data() as IUsersResults)
                });
                return data.sort((a, b) => b.result - a.result).slice(0, 10);
            })
        } catch (e) {
            return thunkAPI.rejectWithValue("При загрузке пользователей произошла ошибка.")
        }
    }
)

// TODO Переименовать файл после рефакторинга
